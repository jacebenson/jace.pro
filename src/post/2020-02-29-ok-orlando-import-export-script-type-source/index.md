---
title: "Ok Orlando -  Data Source Custom Load by Script"
subtitle: ""
summary: ""
date: 2020-02-29T00:18:03-06:00
---
So this looks pretty neat, a way to simply load a set of data from script.  This has been done previously by me with scheduled jobs and the like but now that isn't necessary.  

Lets look at the example provided on the [docs](https://docs.servicenow.com/bundle/orlando-platform-administration/page/administer/import-sets/task/create-custom-type-data-source.html)

The data loader script has one input parameter, import_set_table, and the following methods:

| Method           | Details |
| ---------------- | --- |
|   `addColumn`    | Adds a string type column to the import set table.|
|   `addJSONColumn`| Adds a JSON type column to the import set table.|
|   `addXMLColumn` | Adds an XML type column to the import set table.|
|   `insert`       | Inserts a map (key = column name, value = column value) in the import set table.|

## The example randomuser.me

```js
(function loadData(import_set_table) {
	// Add your code here to insert data to import_set_table
	var requestBody = {};
	var restMessage = new sn_ws.RESTMessageV2();
	restMessage.setHttpMethod("get");
	restMessage.setEndpoint("https://randomuser.me/api/?results=100");
	restMessage.setRequestBody(JSON.stringify(requestBody));
	var response = restMessage.execute();
	var error = response.haveError();
	if(error){
		var errorCode = response.getErrorCode();
		var errorMsg = response.getErrorMessage();
	}
	var headerVal = response.getHeader("Content-Type");
	var headers = response.getHeaders();
	var queryString = response.getQueryString();
	var statusCode = response.getStatusCode();
	var responseBody = response.getBody();
	var responseObj = JSON.parse(responseBody);
//	gs.info(statusCode);
//	gs.info(responseBody);
	responseObj.results.forEach(function(user){
		var map = {
			u_first: user.name.first,
			u_last: user.name.last,
			u_email: user.email,
			u_phone: user.phone
		};
		import_set_table.insert(map);
	});
})(import_set_table);
```

So this didn't wrok right away, but it was only because the import set table has be exist before things can work it seems.  Once that table was made it worked exactly like I thought it would.