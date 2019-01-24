---
title: Debugging with fix scripts
date: 2018-05-13
layout: post
tags:
 - server side
aliases: 
 - "/debugging/"
 - "/2018/05/13/debugging.html"
---

Debugging for me always starts with isolating the parts of the failing code.

So the quickest way for me to find the issue varies but it almost always includes some variation of order of some of these things;

<!--more-->

| Question                               | Debugging Tool                   | Description                                                                                                                                                                                                         |
|----------------------------------------|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Any errors or logs?                    | System Log                       | Navigate to System Logs > System Log. You can place alert statements in your business rule which can write information to the log.                                                                                  |
| Any errors or logs?                    | Debug Business Rule (Details)    | Navigate to System Diagnostics > Debug Business Rule (Details). This debugging module displays the results business rules. Use this module to see if conditions are being met and values are being set as expected. |
| Did anything about this change lately? | `sys_update_xml` record list     |                                                                                                                                                                                                                     |
| Can you reproduce the problem?         | Background Scripts / Fix Scripts | See [Simulating the Script](#simulating-the-script)|

## Simulating the script

Different area's have differnt variables available to them;

| Thing                                   | Variables         |
| --------------------------------------- | ----------------- |
| [Business Rules](#business-rules)       | current, previous |
| [Inbound Emails](#inbound-emails)       | current, email    |
| [Script Actions](#script-actions)       | current, event    |
| [Workflow Activity](#workflow-activity) | current, workflow |
| [Transform Scripts](#transform-scripts) | source, target    |

I'd copy the appropriate script, and then paste your code in the run function.

### Business Rules

```js
var table = 'incident';//pick a table here
var sysId = '';//pick a record with a sysid here

var current = new GlideRecord(table);
current.get(sysId);
var previous = new GlideRecord(table);
previous.get(sysId);

try {
    // paste your code below here

    // paste your code above here
} catch (error) {
    gs.info(error.message, "fix script " + gs.getUserName());
}
```

### Inbound Emails

```js
var emailSysId = '';//pick a sys_email record's sysid here

var email = new GlideRecord('sys_email');
if(email.get(emailSysId)){
    var current = new GlideRecord(email.getValue('target_table'));
    current.get(email.getValue('instance'));
    email.getValue('body_text').split('\n').map(function(line){
        var lineArray = line.split(':');
        email[lineArray[0]] = lineArray.pop().join(':');
    });
}
var event = {};
try {
    // paste your code below here

    // paste your code above here
} catch (error) {
    gs.info(error.message, "fix script " + gs.getUserName());
}
```

### Script Actions

```js
var eventSysId = '';//pick a sysevent record's sysid here

var event = new GlideRecord('sysevent');
if(event.get(eventSysId)){
    var current = new GlideRecord(event.getValue('table'));
    current.get(event.getValue('instance'));
}

try {
    // paste your code below here

    // paste your code above here
} catch (error) {
    gs.info(error.message, "fix script " + gs.getUserName());
}
```

### Workflow Activity

```js
var workflowContextSysId = '';
var workflowContext = new GlideRecord('wf_context');
if(workflowContext.get(workflowContextSysId)){
    var current = new GlideRecord(workflowContext.getValue('table'));
    current.get(workflowConext.getValue('id'));
    var workflow = {
        scratchpad: JSON.parse(workflowContext.getValue('scratchpad'));
    };
}

try {
    // paste your code below here

    // paste your code above here
} catch (error) {
    gs.info(error.message, "fix script " + gs.getUserName());
}
```

### Transform Scripts

```js
var importSetRowSysId = '';//sysid from your import table
var targetTable = '';// table to set the field on
var targetSysId = null; // doesn't need to be set but if you know the record, you can set this sysid

var importTable = new GlideRecord('sys_import_set_row');
if(importTable.get(importSetRowSysId)){
    var source = new GlideRecord(importTable.getValue('sys_class_name'));
    source.get(importTable.getValue('sys_id'));
    var target = new GlideRecord(targetTable);
    if(targetSysId != null){
        target.get(targetSysId);
    } else {
        target.newRecord();
    }
}

try {
    // paste your code below here (source, and target are set up from above)

    // paste your code above here
} catch (error) {
    gs.info(error.message, "fix script " + gs.getUserName());
}
```

## Relationship Scripts

```js
/* global GlideAggregate, GlideRecord, gs */
var parent = new GlideRecord('');//applies to table
parent.get('ad6ce161db560740d9ca72ec0f9619f5');//specific record to test.
var current = new GlideRecord('task');//queries from table
//set the above gr's to have access like you would on the form.

(function refineQuery (current, parent) {
    try {
        // paste your code below here

        // paste your code above here
    } catch (error) {
        gs.info(error.message, "relationship " + gs.getUserName());
    }
})(current, parent);
current.query();
```

## Additional Debugging tools

| Debugging Tool                | Description                                                                                                                                                                                                                                                       |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System Dictionary             | Navigate to System Definition > Dictionary. The dictionary provides a list of all tables within your instance and can be invaluable when trying to locate information.  One example is verifying the column exists on the table or a parent table of your record. |
| System Log                    | Navigate to System Logs > System Log. You can place alert statements in your business rule which can write information to the log.                                                                                                                                |
| Debug Business Rule (Details) | Navigate to System Diagnostics > Debug Business Rule (Details). This debugging module displays the results business rules. Use this module to see if conditions are being met and values are being set as expected.                                               |
| Alert Messages                | There are several system functions that allow you to print messages to the page, the field or the log file. See Scripting alert, info, and error messages.                                                                                                        |
| Business Rule Examples        | Sometimes you can find what you're looking for in scripts others have written, including business rule error messages, or by building an OR query.                                                                                                                |
| GlideRecord Information       | This is the basic syntax used to query the database for information. See Using GlideRecord to query tables. GlideRecord also includes aggregation support.                                                                                                        |
