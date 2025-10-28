---
title: Service Portal Pasting Images
description: "In the past I've tried to set up image pasting before with\_Lars Tange's solution, but that didn't look how I liked it, as it had a specific field for pasting..."
date: '2018-01-04'
tags:
  - servicenow
  - client-scripts
  - service-portal
  - javascript
  - angular
  - security
redirectFrom:
  - /service-portal-pasting-images/
  - /p/2018-01-03-service-portal-pasting-images/
---

<!--StartFragment-->

In the past I've tried to set up image pasting before with [Lars Tange's solution](https://share.servicenow.com/app.do#/detailV2/4fa0b76f137826001d2abbf18144b065/overview), but that didn't look how I liked it, as it had a specific field for pasting attachments.

I am cleaning up some of my former stories and thought I'd do a cusory search and found this [post](https://community.servicenow.com/message/1227642#1227642) by Christopher Decugis about how he modified it to work. It works great. Below I'll go over what you need to do if you want this on your portal as well.

We don't have access to the body tag or the top level div, so you will have to do this for every page you want it to work on. We use three forms on our portal, so `sc_cat_item`, `ticket`, and `form`. You might have more, be aware you might have to add it for each page you want to allow it work on.

On the top level div that is displayed, you need to add `ng-paste="paste($event)"` and then in the client script you need to add the following function;

<!--EndFragment-->

```javascript
$scope.paste = function(event){
  var files = [];
  var clipData = event.originalEvent.clipboardData;
  angular.forEach(clipData.items, function(item, key){
    if(clipData.items[key].type.match(/image.*/)){
      files.push(clipData.items[key].getAsFile());
      $scope.attachmentHandler.onFileSelect(files);
    }
  });
}
```