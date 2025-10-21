---
title: Recordless Rest Is Great
description: "It seems this page was lost in the rearranging of files. I pulled it out\\\r\nof storage\r\n\r\nI often use the record-less rest calls to test things. I didn't see ..."
date: '2019-09-15'
tags:
  - api
  - javascript
  - json
  - integration
redirectFrom:
  - /recordless-rest-is-great/
---

<!--StartFragment-->

It seems this page was lost in the rearranging of files. I pulled it out\
of storage

I often use the record-less rest calls to test things. I didn't see it on\
my blog, so here's an example so I can find it in the future.\

<!--EndFragment-->

<!--StartFragment-->

```javascript
var instance = "dev40379";
var requestBody = {
  short_description: "test incident"
};
var restMessage = new sn_ws.RESTMessageV2();
restMessage.setBasicAuth("slack", "slack");
restMessage.setHttpMethod("post");
restMessage.setEndpoint("http://"+ instance +".service-now.com/api/now/table/incident");
restMessage.setRequestBody(JSON.stringify(requestBody));
var response = restMessage.execute();
var error = response.haveError();
if(error){
  var errorCode = response.getErrorCode();
  var errorMsg = response.getErrorMessage();
} else {
  
}
var headerVal = response.getHeader("Content-Type");
var headers = response.getHeaders();
var queryString = response.getQueryString();
var statusCode = response.getStatusCode();
var responseBody = response.getBody();
gs.info(statusCode);
gs.info(responseBody);
/**
* *** Script: 201
* *** Script: {"result":{"parent":"","..."}}
*/
```

<!--EndFragment-->