---
title: Setting Variables in a MRVS from an outside variable
description: "A while ago\_I wrote about\_using Dependent variables in a Multi Row Variable Set (MRVS). In there something always bothered me. The whole bit about how you ca..."
date: '2019-11-20'
tags:
  - servicenow
redirectFrom:
  - /setting-variables-in-a-mrvs-from-an-outside-variable/
  - /p/2019-11-19-setting-variables-in-a-mrvs-from-an-outside-variable/ 
  - /2019-11-19-setting-variables-in-a-mrvs-from-an-outside-variable/
---

<!--StartFragment-->

A while ago [I wrote about](https://jace.pro/post/2019-09-06-mvrs-dependent-variables/) using Dependent variables in a Multi Row Variable Set (MRVS). In there something always bothered me. The whole bit about how you can not access the variables outside of the MRVS.

Today a former colleague of mine asked me, "How do you get a value from the main form variable onto the MRVS field?"

I wanted to help, so I talked through the options available that I have not tested. In his case he was trying to use a "date" variable on the main form, and then allow many things to default to that date and allow that date to be different if need be.

The options as I saw them were these (none of these work);

* In the default value of the variable, try `javascript: current.variables.main_date`
* In the MRVS, add an onChange Client Script for the first variable to read the `main_date` variable and set the `server_date` variable.
* (Didn't try this), on the main form, add an onChange Client Script for the `main_date` variable to pre-build a number of rows in the MRVS.

After talking about these options it was really clear that there should be another way. I found one. Here it is, it is not as elegant as I'd like.

This uses user preferences to solve this issue. On change of the main form's variable, set the preference. On the MRVS set the default value based on that preference. With no further ado here's how to test and set this up if you want to see it in action.

1. Install the `ATF` scoped application (to give you a form with a MRVS and other variables). We'll be using the MRVS and the `Date` variable.
2. On the Test Item, look at the related variable set. Update the "Question" variable's default value to this script;

   ```javascript
   //default value on variable in MRVS
   javascript: (function(){
     var currentUser = gs.getUser(); 
     return currentUser.getPreference('customform.date');
   })()
   ```
3. Now we can't set a preference in a client script, but we need to. So we'll need to create a script include that's client callable. Here's mine.

   ```javascript
   //script include
   var CatalogMVRSHelper = Class.create();
   CatalogMVRSHelper.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
     awesomeFunction: function(){
       var inputObj = JSON.parse(this.getParameter('sysparm_obj'));
       var currentUser = gs.getUser(); 
       currentUser.savePreference('customform.date',inputObj.date); 
       var returnObj = {
         from:"server",
         input: inputObj
       };
       return JSON.stringify(returnObj);
     },
     type: 'CatalogMVRSHelper'
   });
   ```
4. After that's created we can set the preference with a client script. Here's that code.

   ```javascript
   function onChange(control, oldValue, newValue, isLoading) {
     if (isLoading || newValue == '') {
       return;
     }
     //js in client script on form
     //if variable changes 
     var ga = new GlideAjax('x_8821_atf.CatalogMVRSHelper');
     ga.addParam('sysparm_name', 'awesomeFunction');
     ga.addParam('sysparm_obj', JSON.stringify({"date":newValue}));
     ga.getXML(function(response){
       var responseDocument = response.responseXML.documentElement;
       var answer = responseDocument.getAttribute('answer');
       var serverObj = JSON.parse(answer);
       //console.log(serverObj);
     });
   }
   ```

So now that those parts are happening here's what's occurring;

When your user sets the "Date" variable, you are creating or updating that user's `sys_user_preference`. Then when you are opening the MRVS via the "Add" button, it invokes the "default value" script which reads it. Really it's pretty simple once you boil it down.

<!--EndFragment-->