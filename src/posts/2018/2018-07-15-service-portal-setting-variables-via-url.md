---
title: 'Service Portal: Setting variables via URL'
description: "The other day,\_a post was made, asking how to do this\\\r\nand I had to answer. I knew you could read the URL via\_$window\_but that isn't available in client scr..."
date: '2018-07-15'
tags:
  - servicenow
  - client-scripts
  - service-portal
  - service-catalog
  - javascript
  - html
  - tutorial
redirectFrom:
  - /service-portal-setting-variables-via-url/
  - /p/2018-07-15-service-portal-setting-variables-via-url/
---

<!--StartFragment-->

The other day, [a post was made, asking how to do this](https://community.servicenow.com/community?id=community_question&sys_id=d1de646cdbc7d74423f4a345ca961916)\
and I had to answer. I knew you could read the URL via `$window` but that isn't available in client scripts. How can this be done?

I came up with the following solution.

Create a Variable type "macro", with a widget that has the following client script;

<!--StartFragment-->

```javascript
function($scope, $window) {
  // This is the controller, we've included
  // $scope in the function above because
  // it's easy to work with
  var c = this;
  // We are going to simplify accessing 
  // g_form within the client script by
  // setting it as a variable named g_form
  var g_form = $scope.page.g_form;
  //We are going to simplify accessing
  // g_form within the HTML by setting
  // it as a $scope attribute
  $scope.g_form = $scope.page.g_form;
  // from here you can iterate over
  // the url params;
  var params = $window.location.href.split('?')[1];
  console.log(params);
  var paramsToString = params.toString();
  var paramsArr = paramsToString.split('&');
  paramsArr.map(function(keyValue){
    var key = keyValue.split('=')[0];
    var value = keyValue.split(key + '=').join('');
    value = decodeURIComponent(value);
    try {
      var message = 'Setting ' + key + ' to ';
      message += value + ' from url parameter.';
      console.log(message);
      $scope.g_form.setValue(key,value);
    } catch (error) {
      console.log('Error setting field', error);
    }
  });
}
```

<!--EndFragment-->

<!--StartFragment-->

This will try to set all the attributes on the form so in the following url;

`https://dev32369.service-now.com/sp?id=sc_cat_item&sys_id=b480811a0f021300fc69cdbce1050ece&description=test`

The following will tried to be set;

| Parameter   | Value                              |
| ----------- | ---------------------------------- |
| id          | `sc_cat_item`                      |
| sys_id      | `b480811a0f021300fc69cdbce1050ece` |
| description | `test`                             |

P.S. Laurent Chicoine pointed out another way to do this for an individual variable.  Thank you Laurent!

If you set the default value of the variable in question to this, then you can default it differently based on weather or not `$sp` exists.

```javascript
javascript: (function(){
  try{
    // Service Portal
    // if $sp exists do this
    return $sp.getParameter('var_short_description') || '';
  } catch(e){
    // UI16
    // if $sp causes an error cause its not defined do this
    return RP.getParameterValue('var_short_description');
  }
})()
```

<!--EndFragment-->