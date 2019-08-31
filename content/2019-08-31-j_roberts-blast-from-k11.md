---
date: '2019-08-30'
keywords:
- "header"
- "user menu"
- "cache"
- "ui macro"
layout: post
title: 'J_Roberts K11 Presentation!'
---
So I was looking for something and came across this old link from K11.  I didn't go to K11, but I sure wanted to.  

I still think it has useful info so I'm sharing it here on this post and linking to the source at the bottom.


1. Advanced Scripting & Debugging LabJohn Roberts Jerrod BennettApplication Developer Senior Technical ConsultantServiceNow ServiceNow
2. Lab Agenda 
    - Overview
    - Scripting & Debugging Concepts
    - Debugging Tools
    - Client and Server Debugging Examples
    - Extending Script Includes
    - AJAX Debugging
    - Basic Jelly Debugging
    - Display Business Rules
3. Overview
    - Disclaimer
    - Advanced topics and quick pace
    - Assumes some scripting experience and knowledge of Service-now.com concepts
    - Objectives
    - Improve scripting and troubleshooting abilities
    - Learn some new tricks
4. Overview
    - Setup
    - Lab instance
    - Script source
    - http://wiki.service-now.com/index.php? title=Script_Lab
    - Optional
    - Install Firefox and Firebug
5. Scripting Concepts (quick review)
    - Case SenSitiviTy
    - All commands, functions, variables, …
    - Variable Scope
    - Session global – risk of duplication
    - Classes – limited to class
    - Function – limited to function, best protection 
    ```js
    var  myName  =  "john";   
    function  doThis()  {
        var  myName  =  "roberts";
    }  
    ```
6. Scripting Concepts (quick review)
    - Reference vs Value values
    - Reference var myId = `gr.sys_id`;
    - myId will change as `gr` changes
    - Value `var myId = gr.sys_id.toString();`
    - `myId` will only change if explicitly changed
7. Scripting Concepts (quick review)
    - Try/Catch blocks for proper error handling
    - Errors will halt script unless handled 
        ```js 
        try { 
            //something 
        } catch (err) { 
            gs.log(“ERROR: “ + err); 
        }
        ```
8. Debugging Concepts
    - Know what should happen
    - Identify what is happening
    - Did my script run, were there errors
    - Do I have the expected results
9. Debugging Tools
    - Application
    - System Diagnostics / Session Debug modules
    - Information output options
    - Browser
    - Developer Tools
    - Add-ons such as Firebug
10. Debugging Examples Exercise 1Business Rule Debug
11. Exercise 1 – Debug Business Rule
    - Scenario: business rule adds comments when incident state changes to closed
    - Problem: no comments are being added
    - Business rule: k11 Exercise 1 – Incident Close Comment
12. Exercise 1 – Debug Business Rule•  Try it –  Open an existing incident –  Set incident state to Closed –  Using header context menu, save the record•  Result –  No comment or info message•  Troubleshooting –  Did the rule execute
13. Exercise 1 – Debug Business Rule•  Identifying whether a business rule was executed•  Run the Debug Business Rules module to enable business rule debugging –  Just the Debug Business Rule, no jumping ahead to (Details) yet•  Open another existing incident and set incident state to closed, save•  Scroll down to see debug output and notice the following Skipping k11 Exercise 1 - Incident Close Comment on table incident; condition not satisfied: current.incident_state.changesTo("Closed")•  From the debug output click on the business rule name to open it
14. Exercise 1 – Debug Business Rule•  For some reason our condition is not being satisfied –  current.incident_state.changesTo("Closed")•  Let’s remove the condition and find out what the field value is changing to –  Delete the condition so the rule will execute –  Comment out the comment set statement so it doesn’t run on all incidents –  Add some debugging statements//add comment when closing //current.comments = "Closed by " + gs.getUserName() + " at " + gs.nowDateTime(); //gs.addInfoMessage("Close comment added"); // Debug info gs.addInfoMessage("(InfoMessage) Incident state = " + current.incident_state); //output to app gs.log("(Log) Incident state = " + current.incident_state); //output to system log gs.print("(debug print) Incident state = " + current.incident_state); //output to debug console
15. Exercise 1 – Debug Business Rule•  Open another existing incident and set incident state to closed, save•  Scroll down to see debug output and notice the following 3:50:23.714: ==> k11 Exercise 1 - Incident Close Comment on table incident 13:50:23.718: : (Log) Incident state = 7 13:50:23.718: : (debug print) Incident state = 7 13:50:23.719: <== k11 Exercise 1 - Incident Close Comment on table incident•  Looks like we had the wrong condition value for closed incident state•  Now we can correct the condition and un-comment the business rule
16. Exercise 1 – Debug Business Rule•  Perform one more test to verify•  If we suspected the field value was wrong we could have taken a shortcut –  From a closed incident form, use the header context menu Show XML to display all fields and values
17. Debugging Examples Exercise 2Debug Business Rule Changes
18. Exercise 2 – Business Rule Changes•  Scenario: whenever we create a hardware incident the priority is set to 1, we suspect it might be a business rule•  Try it –  Create a new incident and set category to Hardware –  Save the incident, and notice the priority value has changed to 1•  Debugging –  Enable the Debug Business Rule (Details) to add detail to the debug output –  Create another hardware incident, save –  View debug output ==> k11 Exercise 2 - Incident Priority Change on table incident priority: 4 => 1 <== k11 Exercise 2 - Incident Priority Change on table incident –  Looks like we found the rule changing the priority value
19. Debugging Examples Exercise 3 Try … CatchLine by line evaluation
20. Exercise 3 – Error Handling•  Scenario: simple business rule should add message when saving a software incident•  Problem: we are only getting one of the three messages we expect•  Try it –  Create a incident with software category –  Add a short description and save –  Notice we are getting one message at the top of the form
21. Exercise 3 – Error Handling•  Following the javascript processor line by line•  Run the JS Debug Activate module to enable the Rhino debugger•  Create another software incident and view the debug output•  Search the page for “Exercise 3” to find the related script processing ==> k11 Exercise 3 - Display Info on table incident evaluate://output current number gs.addInfoMessage("Current number: " + current.number); //output current short_description gs.addInfoMessage("Current Short Description: " + currrent.short_description); //output current category gs.addInfoMessage("Current Category: " + current.category); >>> line(2) gs.addInfoMessage("Current number: " + current.number); >>> line(5) gs.addInfoMessage("Current Short Description: " + currrent.short_description); <== k11 Exercise 3 - Display Info on table incident•  Notice we don’t process after line 5, now we need to find out why•  First disable the rhino debugger by running the Disable All module –  Rhino debugger can interfere or suppress error output
22. Exercise 3 – Error Handling•  Enable both Debug Business Rule and Debug Log modules•  Create another software incident and view the debug output•  Notice that we have a script exception because we have an extra “r” in current ==> k11 Exercise 3 - Display Info on table incident Evaluator: org.mozilla.javascript.EcmaError: "currrent" is not defined. Caused by error in Business Rule: k11 Exercise 3 - Display Info at line 5 2: gs.addInfoMessage("Current number: " + current.number); 3: 4: //output current short_description ==> 5: gs.addInfoMessage("Current Short Description: " + currrent.short_description); 6: 7: //output current category 8: gs.addInfoMessage("Current Category: " + current.category); <== k11 Exercise 3 - Display Info on table incident•  Now let’s see how try … catch block can help us•  From the debug output click on the business rule to open it
23. Exercise 3 – Error Handling•  Add a try catch block around our statements and save the business rule try { //output current number gs.addInfoMessage("Current number: " + current.number); //output current short_description gs.addInfoMessage("Current Short Description: " + currrent.short_description); //output current category gs.addInfoMessage("Current Category: " + current.category); } catch(err) { //catch only runs on exception in try block //err object is passed from the try handler and includes gs.log("Error in k11 Exercise 3 business rule: " + err); }
24. Exercise 3 – Error Handling•  Create one more software incident and see how the catch statement provides information ==> k11 Exercise 3 - Display Info on table incident : : Error in k11 Exercise 3 business rule: ReferenceError: "currrent" is not defined. <== k11 Exercise 3 - Display Info on table incident•  Unhandled errors can prevent script functionality and even other scripts from running•  Catch statements guarantee that you control what happens when an error occurs, especially important if you need to clean up or revert something
25. Debugging Examples Exercise 4 Client Script
26. Exercise 4 – Client Script•  Scenario: incident table has an on-change client script for category function onChange(control, oldValue, newValue, isLoading, isTemplate) { if (isLoading || newValue == ) return; if (newValue == "request") { g_form.setValue("urgency", 3); jslog("k11 Exercise 5 Request Category client script: Setting urgency to low for requests"); } } •  Try it –  Let’s review options for client-side debug output –  Enable client javascript debugger console by clicking the green bug in the top banner –  Create a new incident, change category to request –  Script will log to debug console and change urgency to low –  Review debug console
27. Exercise 4 – Client Script•  Using browser debuggers (Firebug)•  From a new incident form, open Firebug and make sure it’s active•  Go to the script tab and search for g_form.setValue("urgency”, so we can locate our script•  Set a break point by clicking in the gray area left of the line numbers
28. Exercise 4 – Client Script•  Change the category to request to execute the script again•  Firebug breakpoints can be funny at times, refresh the form script does not stop at breakpoint•  Review all the information available during the break•  You can also step through code using the yellow arrows
29. Debugging Examples Exercise 5Javascript Executor
30. Exercise 5 – Javascript Executor•  Scenario: it would be nice to have a fast way to test client scripts without actually creating them first•  Solution: Javascript executor has access to the same client environment as client scripts•  Try it: –  From a change request form, press <Shift><Ctrl><Alt><j> to launch the javascript executor –  See that the description field is mandatory, let’s test a script to change that –  g_form.setMandatory("description", false); –  Click Run My Code button –  Notice the mandatory flag has been removed, let’s add it back and add a short description –  g_form.setMandatory("description", true); –  g_form.setValue(“short_description”, “Testing”);
31. Exercise 5 – Javascript Executor•  Now for a cool admin trick•  Close the executor and verify that you cannot save the form with a blank description field•  Re-open the executor and run –  g_form.checkMandatory = false; –  Run My Code•  Close executor•  Try to save the form again with a blank description•  You just temporarily bypassed the mandatory check on the form•  Use it wisely and keep it a secret
32. Debugging Examples Exercise 6Background Scripts
33. Exercise 6 – Background Scripts•  Scenario: admin needs a way to test server side scripts or perform some maintenance that requires a script•  Solution: background scripts are the server side version of Javascript executor•  Warning: this can really be dangerous, and even crash an entire instance if you get something wrong
34. Exercise 6 – Background Scripts•  Try it –  Let’s build a script to disable some users –  Launch the background script module –  Enter the following script
35. Exercise 6 – Background Scripts•  Notice that we have commented out the update line•  It’s always best to see the possible results before you actually do anything•  Run the script to see the results•  If this is a script you need frequently you can also save it to the server•  Upload a script file with “.js” extension using the file upload module•  It will be available in the customer scripts for future reference and execution•  To be safe you can leave the function call commented when you upload so you purposely have to view and change it before it does anything harmful
36. Debugging Examples Exercise 7Extending Script Includes
37. Exercise 7 – Extending Script Includes•  Scenario: I like the functionality provided by the TableUtils script include but want to change it a bit•  The getTables method in TableUtils class returns the parent list of table hierarchy, but it returns it in a java array list not an array•  For example you can’t enumerate a java array list like you would with a Javascript array //enumerate java array list for (var i=0; i < tables.size(); i++) { gs.print(tables.get(i)); } //enumerate javascript array for (var i=0; i < tableArray.length; i++) { gs.print(tableArray[i]); }
38. Exercise 7 – Extending Script Includes•  Try it –  From background scripts get the tables hierarchy for cmdb_ci_win_server 
```js
var util = new TableUtils("cmdb_ci_server"); //getTables returns a java array list object, not array 
var tables = util.getTables(); 
gs.print("Java list: " + tables); 
//***  Script:  Java  list:  [cmdb_ci_server,   
//what is the tables object cmdb_ci_computer,  cmdb_ci_hardware,   
JSUtil.logObject(tables, "tables");
// cmdb_ci]   
// ***  Script:  Log  Object:  tables      Java  Object:  com.glide.u@l.ImmutableArrayList   
//enumerate java array list ***  Script:  cmdb_ci_server   
for (var i=0; i < tables.size(); i++) { 
    //***  Script:  cmdb_ci_computer   
    gs.print(tables.get(i)); 
    // ***  Script:  cmdb_ci_hardware   
    } 
    // ***  Script:  cmdb_ci   –  We could convert the array list to an array whenever we need it but it would be nice to change the getTables method to return an array
```
– Modifying an out-of-box script include is never recommended
39. Exercise 7 – Extending Script Includes•  Try it –  Let’s first look at the TableUtils script include initialize: 
```js
function(tableName){ 
    this.tableName = tableName; 
},
getTables: function(){ 
    var tables = Packages.com.glide.db.DBObjectManager.get().getTables(this.tableName); 
    return tables; 
},
```
There’s another script include we can use to convert java objects to javascript, that’s `j2js`
40. Exercise 7 – Extending Script Includes•  Since we don’t want to modify the system script include we’ll create our own. We could make a full copy but that would be a waste, when we can extend the class and leverage everything that’s already in place.•  Create a new script include for the MyTableUtils class –  Extending can add to or replace methods from the parent class var MyTableUtils = Class.create(); MyTableUtils.prototype = Object.extendsObject(TableUtils, { getTablesArray: function() { var tables = this.getTables(); return j2js(tables); }, type: "MyTableUtils" }); •  Save the record so we can test it
41. Exercise 7 – Extending Script Includes•  Return to background scripts and call the new class var util = new MyTableUtils("cmdb_ci_server"); //call our new method var tables = util.getTables(); gs.print("Java list: " + tables); JSUtil.logObject(tables, "tables"); gs.print(""); var tablesArray = util.getTablesArray(); gs.print(tablesArray); JSUtil.logObject(tablesArray, "tablesArray"); //what is util object JSUtil.logObject(util, "util");•  Notice that we didn’t need an initialize of getTables method in our class, we inherited those from the parent (“this”) object
42. Debugging Examples Exercise 8 AJAX Debugging
43. Exercise 8 – AJAX•  Scenario: Use AJAX to lookup the number of available development laptops when someone attempts to request one through the catalog•  Components –  Catalog client script to submit AJAX request to server –  AJAX processor script include to perform the check and return the result to client –  Catalog client script to process the AJAX response and inform the user•  Try it –  Go to the catalog and load the Development Laptop item –  Script runs on load to check inventory and alerts user with status from server
44. Exercise 8 – AJAX•  Review scripts –  Review catalog client script “k11 Capacity Check” –  Review script include “k11 CatalogCapacityCheck”•  Debugging options –  Log statements in script include –  Firebug to inspect payload to/from server –  Manual client script testing from javascript executor
45. Exercise 8 – AJAX•  Try it –  From the development laptop catalog item page start the javascript executor `<Shift><Ctrl><Alt><j>` –  Run the following script to make an AJAX request var gajax = new GlideAjax("CapacityCheckAjax"); gajax.addParam("sysparm_name", "checkDevCapacity"); gajax.getXML(ajaxResponse); function ajaxResponse(serverResponse) { alert(serverResponse.responseText); }
46. Debugging Examples Exercise 9 Jelly
47. Exercise 9 – Jelly•  Scenario: In a jelly script such as a UI Page, I would like to know which jelly variables are available and what the values are•  Options –  For known variables you can write values to HTML output –  Use breakpoint tag to view all available variables in a given phase•  Jelly in 30 seconds –  XML files executed on server and output as HTML to client –  Evaluated in two phases, {phase 1} is cached (content), [phase 2] for data –  Nested structures with variables typically being passed down (UI Page calls a UI Macro)
48. Exercise 9 – Jelly•  Try it –  Review UI page “k11_test” –  Notice the j:set and j2:set lines setting values for jvar_p1_test and jvar_p2_test –  Review UI macro “k11_macro_test” called from the UI page –  Notice the references to the variables defined in the j:set and j2:set lines in the UI page –  Enable Debug Log so we can view of out of the macro breakpoints –  Navigate browser to /k11_test.do –  Examine the debug information –  Notice how our jvar_p1_test and jvar_p2_test only have value in their respective phases
49. Debugging Examples Exercise 10Display Business Rules
50. Exercise 10 – Display Business Rules•  Scenario: a client script needs to access data from a field that is not displayed on the form•  Options –  Add the field to the form view and hide it using a UI policy –  Use a client GlideRecord query using AJAX –  Use a display business rule to preload an object that is passed to the client•  Display business rules are processed on the server before the record data is passed to the client•  The “g_scratchpad” object is available for setting values in the rule and getting values on the client•  Display rules can also change field data, similar to calculated fields since they display the new value but it’s not written to the database until you save the record
51. Exercise 10 – Display Business Rules•  Review business rule “k11 Exercise 10 Send data to the client” on the problem table //get the record sys_created_by value and add to the client scratchpad g_scratchpad.created_by = current.sys_created_by; //calculate the age of this record var age = gs.dateDiff(current.sys_created_on, gs.nowDateTime(), true); var daysOld = Math.round(age / 3600 / 24); g_scratchpad.days_old = daysOld; •  Review the client script “k11 Exercise 10 - notify on old problems” on problem table function onLoad() { //get data from display rule scratchpad var createdBy = g_scratchpad.created_by; var daysOld = g_scratchpad.days_old; if (parseInt(daysOld) > 30) { alert("This is an old record created by " + createdBy); } }
52. Exercise 10 – Display Business Rules•  Try it –  Open the list of problems and find one that was created more than 30 days ago –  Notice the alert from the client script
53. Q&A j_roberts #know11 #servicenow
54. Additional Resources
    - SlightlyLoony blog (Service-now.com developer) –  http://community.service-now.com/blog/slightlyloony
    - Wiki Script Portal – http://wiki.service-now.com/index.php?title=Scripting_and_APIs
    - JavaScript book – JavaScript The Definitive Guide (O’Reilly)
    - W3Schools script and HTML reference – http://www.w3schools.com
    - Firebug –  http://getfirebug.com/



Source: https://www.slideshare.net/j_roberts/servicenow-knowledge11-advanced-scripting-debugging-lab