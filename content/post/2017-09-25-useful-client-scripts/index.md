---
title: "Useful catalog client scripts"
subtitle: "Here's a number of old client scripts I've found useful."
summary: "Here's a number of old client scripts I've found useful."
authors: ['jace']
date: 2017-09-25T20:25:56-05:00
#lastmod: 2019-09-07T23:25:56-05:00
featured: false
draft: false
projects: []
---

These are my useful catalog client scripts, I've found/written over the
years. This will update occasionally. Please note the comments aren't
the best and I do mean to improve them. Some of these functions aren't
documented and won't work in all places.

## Run code on order guides in and out of the portal

```js
function onLoad() {
  /**
  * So here is the case, I have a variable set being used in an order guide and catalog item.
  * I want to hide the set on the catalog item and make it visible on the form only if the user
  * submits the order via order guide. If the user directly submits the catalog item then they
  * should not see the variable set on the form.
  */
    try{
      //if on standard UI hide form
      var guide = $("sysparm_guide");//if on a guide, and the standard ui this will not eq null
      if(guide){
        g_form.setDisplay('create_for_user', true);
      } else {
        g_form.setDisplay('create_for_user', false);
      }
    } catch(e) { //if on sp, $("") will fail
      var sp_guide = g_service_catalog.isOrderGuide();
      if(sp_guide){
        g_form.setDisplay('create_for_user', true);
      } else {
        g_form.setDisplay('create_for_user', false);
      }
    }
}
```

## Validate Date is after today

```js
//Validate Date is after today
//GwtDate not available on service portal
function onSubmit() {
    //Type appropriate comment here, and begin script below
    //validate that the start date is before the today's date
    var field = 'start_date';
    var st = g_form.getValue(field);
    var newTime = new GwtDate(st);
    var tm = new GwtDate();
    tm.now();
    tm.subtractHours(24);
    if (newTime.compare(tm, true) < 0) {
        g_form.hideFieldMsg(field, true);
        g_form.showFieldMsg(field, 'Start date must be after the today\'s date.', 'error');
        return false;
    }
}
```

## Validate Date is after a set time

```js
//Validate Date is after set time
function onSubmit() {
    var returnVal = false;
    //Type appropriate comment here, and begin script below
    //validate that the given field's date is at least or equal to the milleseconds to add.
    var field = 'project_deadline';
    var msToAdd = 1000 * 60 * 60 * 24 * 7;//ms * sec * minutes * hours * days//this is a week
    var errorMsg = 'This must be at least a week out.';
    /****************************************************/
    /*  You shouldn't have to modify anything below     */
    /****************************************************/
    var now = new Date();
    var givenDate = new Date(g_form.getValue(field));
    //forwhatever reason, at this point this returns 9/24 when you select 9/25
    //givenauthor: 'jace'
date:Mon Sep 24 2017 19:00:00 GMT-0500 (Central Daylight Time)[1506347252815]
    //when you select 9/25
    givenDate.setDate(projectDeadline.getDate() + 1);//so add a day
    givenDate.setHours(now.getHours());
    givenDate.setMinutes(now.getMinutes());
    givenDate.setSeconds(now.getSeconds());
    givenDate.setMilliseconds(now.getMilliseconds());
    //now returns;
    //givenauthor: 'jace'
date:Mon Sep 25 2017 08:47:32 GMT-0500 (Central Daylight Time)[1506347252815]
    var nextWeek = new Date();
        nextWeek.setTime(nextWeek.getTime() + msToAdd);
        //console.log('projectDeadline: ' + projectDeadline + '[' + projectDeadline.getTime() + ']');
        //console.log('weekAhead     : ' + weekAhead      + '[' + weekAhead.getTime()      + ']');
        var givenDateGreaterOrEqualToNextWeek = givenDate.getTime() >= nextWeek.getTime();
        //console.log('givenDateGreaterOrEqualToNextWeek: ' + givenDateGreaterOrEqualToNextWeek);
      if (givenDateGreaterOrEqualToNextWeek) {
          returnVal = true;
    } else {
      g_form.hideFieldMsg(field, true);
      g_form.showFieldMsg(field, errorMsg, 'error');
    }
    return returnVal;
}
```

## Validate Date is after a variable

```js
//Validate Date is after variable
function onSubmit() {
    //validate that the start date is before the end date
    var st = getDateFromFormat(g_form.getValue("start_date_time"), g_user_date_time_format);
    var et = getDateFromFormat(g_form.getValue("end_date_time"), g_user_date_time_format);
    if (st > et) {
        g_form.hideAllFieldMsgs();
        alert("Estimated end date must be after the start date.");
        g_form.showErrorBox("resource_est_end_date", "Estimated end date must be after the start date.");
        return false;
    }
}
```

## Require Checkboxes

```js
//require checkboxes

function onSubmit() {
    //Set the mandatory checkbox variable names and total mandatory count here
    var mandatoryVars = 'option1,option2,option3,option4';
    var mandatoryCount = 2;
    var passed = forceMandatoryCheckboxes(mandatoryVars, mandatoryCount);
    if (!passed) {
        //Abort the submit
        alert('You must select at least ' + mandatoryCount + ' options.');
        return false;
    }
}
function forceMandatoryCheckboxes(mandatory, count) {
    //Split the mandatory variable names into an array
    mandatory = mandatory.split(',');
    var answer = false;
    var varFound = false;
    var numTrue = 0;
    //Check each variable in the array
    for (x = 0; x < mandatory.length; x++) { //Check to see if variable exists
        if (g_form.getControl(mandatory[x])) {
            varFound = true; //Check to see if variable is set to 'true'
            if (g_form.getValue(mandatory[x]) == 'true') {
                numTrue++; //Exit the loop if we have reached required number of 'true'
                if (numTrue >= count) {
                    answer = true;
                    break;
                }
            }
        }
    }
    //If we didn't find any of the variables allow the submit
    if (varFound == false) {
        answer = true;
    }
    //Return true or false
    return answer;
}
```

## Show field if x are checked

```js
//show field if x are chekced

/*
 * Origin;
 * https://community.servicenow.com/message/1025641
*/
function onChange(control, oldValue, newValue, isLoading) {
    //Set the mandatory checkbox variable names and total mandatory count here
    var mandatoryVars = ['option1', 'option2', 'option3', 'option4', 'option5'];
    var variableToShow = 'someothervariable';
    var requiredCount = 2;
    var actualCount = 0;
    for (var x = 0; x < mandatoryVars.length; x++) {
        if (g_form.getValue(mandatoryVars[x]) == 'true') {
            actualCount++;
        }
    }
    if (requiredCount <= actualCount) {
        g_form.setDisplay(variableToShow, true);
    } else {
        g_form.setDisplay(variableToShow, false);
    }
}
```

## Validate numbers only

```js
//validated numbers only
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }
    var regexp = /^[0-9]*$/;
    g_form.hideFieldMsg(control, true);
    if (!regexp.test(newValue)) {
        g_form.showFieldMsg(control, 'Only numbers allowed', 'error');
        control.value = '';
    }
}
```

## Set Placeholder

This is unneeded after Jakarta

```js
//set place holder
//this is unnecessary in Jakarta see https://servicenow.implementation.blog/great-ui-trick-html-placeholders/
function onLoad() {
    u_addPlaceholderAttribute('user','Someones name goes here');
}
function u_addPlaceholderAttribute(variableName, hint) {
    try {
        var fieldName = g_form.getControl(variableName).name.toString();
        if (Prototype.Browser.IE) {
            fieldName.placeholder = hint;
        } else {
            $(fieldName).writeAttribute('placeholder', hint);
        }
    } catch (err) {}
}
```

## Make variables Read Only

```js
//make variables read only
function onLoad() {
    try {
        //Get the 'Variables' section
        var ve = $('variable_map').up('table');
        //Disable all elements within with a class of 'cat_item_option'
        ve.select('.cat_item_option', '.slushselectmtm', '.questionsetreference').each(function (elmt) {
            elmt.disabled = true;
        });
        //Remove any reference or calendar icons
        ve.select('img[src*=reference_list.gifx]', 'img[src*=small_calendar.gifx]').each(function (img) {
            img.hide();
        });
        //Hide list collector icons
        ve.select('img[src*=arrow]').each(function (img) {
            img.up('table').hide();
        });
    } catch (e) {}
}
```

## Flash variable

```js
//flash variable
function flashVar(v) {
    g_form.nameMap.map(function (rec) {
        if (rec.prettyName === v) {
            g_form.flash("ni.VE" + rec.realName, "#FFFACD", 0)
        }
    });
}
flashVar('server_decom_prepinfo');
```

## Require Attachment

```js
//require attachment
function onSubmit() {
    'use strict';
    var attachment = new GlideRecord("sys_attachment");
    attachment.addQuery("table_name", "sc_cart_item");
    attachment.addQuery("table_sys_id", gel('sysparm_item_guid').value);
    attachment.query();
    if (!attachment.hasNext()) {
        alert("You must attach your public SSH Key. Please see instructions for more information.");
        return false;
    }
}
```

## Set Server fields

```js
//ser server fields
function onChange(control, oldValue, newValue, isLoading) {
    try {
        g_form.clearValue('server_ip');
        g_form.clearValue('environment');
        g_form.getReference('server', function(server){
            g_form.setValue('server_ip', server.ip_address);
            g_form.setValue('environment', server.u_env_list);
        });
    } catch(error) {
        console.log(error);
    }
}
```
