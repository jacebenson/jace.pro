---
date: '2019-08-10'
keywords:
- "remote tables"
layout: post
title: 'Remote Tables - They are neat'
---

Making a remote table could be less work but as it is, it's better than what was before.

If you are okay with *read only* data from another system then this is actually pretty good.  

To use this you'll need to create a Table still that will have columns for the columns defined in the script.  So the real benefit is just keeping the data up to date and OUT of servicenow.

For this example I'm going to use https://www.alphavantage.co/ to get Stock information.

The table I'm going to make is going to have the data for the quote api.  It has this data in a response for this;

`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo`

```js
{
    "Global Quote": {
        "01. symbol": "MSFT",
        "02. open": "138.6100",
        "03. high": "139.3800",
        "04. low": "136.4600",
        "05. price": "137.7100",
        "06. volume": "23466701",
        "07. latest trading day": "2019-08-09",
        "08. previous close": "138.8900",
        "09. change": "-1.1800",
        "10. change percent": "-0.8496%"
    }
}
```

So I'll store all of it and use the "symbol" as the unique key, some how.  It has to be a "sys_id" but... in this case "MSFT" isn't long enough.  I guess we'll get there when we get there.

So here's the steps I'm taking in order (in global)

1. Create a remote table (`u_st_stock`)
2. Create columns;
  - `u_symbol`             - String
  - `u_open`               - Floating Point Number
  - `u_high`               - Floating Point Number
  - `u_low`                - Floating Point Number
  - `u_price`              - Floating Point Number
  - `u_volume`             - Integer
  - `u_latest_trading_day` - Date
  - `u_previous_close`     - Floating Point Number
  - `u_change`             - Floating Point Number
  - `u_change_percent`     - Floating Point Number
3. Create a Remote Table Definition(`sys_script_vtable`)
  - This is not as simple as I'd like.  I was hoping to use some simple stock price for the NYSE however, there is not a good source for that in its entirety.
    So I defaulted it to load 5 stocks and if a search occured, I returned those results.  But pretty much if your data is rate limited, or doesn't allow return of > 5 records, this becomes really painful.
  - Also if you need it to work with searches, it seems that the only way to get field searches is to get the encoded query and parse the bits out.  There is no helper function for that if the search is a field STARTSWITH, ENDSWITH or CONTAINS which is used if you have the inputs on the headers of the list.
  - Feel free to try this out yourself with this code;

```js
(function executeQuery(v_table, v_query) {
	function getKey(){
		return "";
	}
	function getStock(ticker){
		var endpoint = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=";
		endpoint += ticker + "&apikey=" + getKey();
		var restMessage = new sn_ws.RESTMessageV2();
		restMessage.setHttpMethod("get");
		restMessage.setEndpoint(endpoint);
		restMessage.setRequestBody(JSON.stringify({}));
		var response = restMessage.execute();
		var error = response.haveError();
		if (error) {
			var errorCode = response.getErrorCode();
			var errorMsg = response.getErrorMessage();
		} else {
			var headerVal = response.getHeader("Content-Type");
			var headers = response.getHeaders();
			var queryString = response.getQueryString();
			var statusCode = response.getStatusCode();
			var responseBody = response.getBody();
			var responseObj = JSON.parse(responseBody);
			
				gs.addErrorMessage(responseBody);
			if(typeof responseObj["Global Quote"] == "object"){
				var quote = responseObj["Global Quote"];
				v_table.addRow({
					sys_id              : ticker,
					u_symbol            : quote["01. symbol"],
					u_open              : quote["02. open"],
					u_high              : quote["03. high"],
					u_low               : quote["04. low"],
					u_price             : quote["05. price"],
					u_volume            : quote["06. volume"],
					u_latest_trading_day: quote["07. latest trading day"],
					u_previous_close    : quote["08. previous close"],
					u_change            : quote["09. change"],
					u_change_percent    : parseFloat(quote["10. change percent"])
				});
			} else {
				gs.addErrorMessage(responseBody);
				v_table.addRow({
					sys_id              : ticker,
					u_symbol            : ticker
				});
			}
		}

	}
	function getTickers(keyword){		
		var endpoint = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=";
		endpoint += keyword + "&apikey=" + getKey();
		var restMessage = new sn_ws.RESTMessageV2();
		restMessage.setHttpMethod("get");
		restMessage.setEndpoint(endpoint);
		restMessage.setRequestBody(JSON.stringify({}));
		var response = restMessage.execute();
		var error = response.haveError();
		if (error) {
			var errorCode = response.getErrorCode();
			var errorMsg = response.getErrorMessage();
		} else {
			var headerVal = response.getHeader("Content-Type");
			var headers = response.getHeaders();
			var queryString = response.getQueryString();
			var statusCode = response.getStatusCode();
			var responseBody = response.getBody();
			var responseObj = JSON.parse(responseBody);
			if(responseObj["bestMatches"].length>0){
				responseObj["bestMatches"].length = 2;
				var matches = responseObj["bestMatches"];
				matches.forEach(function(match){
					if(match["4. region"] == "United States"){
						getStock(match["1. symbol"].toString());
					}
				});
			}
		}
	}
	try {
		/*
		on list load... load these 10 
		Load now, and 9 others
		now
		goog
		msft
		aapl
		uber
		expe
		ko
		pep
		tsla
		amzn
		tgt
		*/
		//https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo
		var defaultStocks = [
			'now',
			'goog',
			'aapl',
			'tsla',
			'amzn',
		];
		if(v_query.isGet()){
			getStock(v_query.getSysId());
		} else {
			//list lookup
			gs.addInfoMessage(v_query.getEncodedQuery());
			var query = v_query.getEncodedQuery();
			if(query.indexOf('STARTSWITH')>=0 || 
			   query.indexOf('CONTAINS')>=0 || 
			   query.indexOf('ENDSWITH')>=0
			  ){
				var keyword;
				var keyword1 = query.split('STARTSWITH')[1];
				var keyword2 = query.split('CONTAINS')[1];
				var keyword3 = query.split('ENDSWITH')[1];
				if(keyword1){
					keyword = keyword1.split('^')[0];
				}
				if(keyword2){
					keyword = keyword2.split('^')[0];
				}
				if(keyword3){
					keyword = keyword3.split('^')[0];
				}
				getTickers(keyword);
				//if search is happening... lookup those tickers
				//https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=target&apikey=

			} else {
				//not searched load default
				defaultStocks.forEach(function(ticker){
					getStock(ticker);
				});
			}
		}

	} catch (ex) {
		v_query.setLastErrorMessage(ex.message);
		gs.addErrorMessage(ex.message);
		return;
	}
	// Main API:
	//    v_table.addRow({ ... }) - adds a row to the result set

	// There are also query helper methods
	//    v_query.getEncodedQuery() - returns encoded querystring
	//    v_query.getCondition(field) - returns encoded querystring for the given field (includes field name, operator, and value)
	//    v_query.getParameter(field) - returns parameter for the given field (only includes value for equality conditions)
	//    v_query.isGet() - returns whether the query is a single get by sys_id
	//    v_query.getSysId() - returns parameter for sys_id field
	//    v_query.isTextSearch() - returns whether the query contains a text query parameter
	//    v_query.getTextSearch() - returns text search query parameter (internal field name 123TEXTQUERY321)
	//    v_query.getFirstRowWanted() - returns the first row to include
	//    v_query.getLastRowWanted() - returns the last row to include

	// Note: You must define sys_id for each row so that forms and lists for this table work properly

	// Your code goes here
	// v_table.addRow({...})
})(v_table, v_query);
```

TL;DR - Remote tables are neat, but have some limitations.  It does lower the work for a READ ONLY integration, however, it all really depends on your API.
