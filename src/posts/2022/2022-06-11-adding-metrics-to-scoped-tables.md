---
title: Scoped Metrics Fail
description: "This has been in my queue for a bit to figure out.\r\n\r\nI tried this again with a fresh scoped application and this is not currently possible to do entirely wi..."
date: '2022-06-11'
tags:
  - servicenow
  - business-rules
  - scoped-apps
  - javascript
  - tutorial
  - troubleshooting
  - security
redirectFrom:
  - /adding-metrics-to-scoped-tables/
  - /p/2022-06-11-adding-metrics-to-scoped-tables/
---

<!--StartFragment-->

This has been in my queue for a bit to figure out.

I tried this again with a fresh scoped application and this is not currently possible to do entirely within a scope.  At some point you need to either shim in access to a script include or create something in global.

I'll walk through the working solution for whatever poor soul happens across this.

1. Create a scoped application.
2. Create a table called "Content"
3. Add two fields, "Title" (string), "Stage" (choice)
4. Give Stage a few choices.
5. We're done in the scope.  
6. Switch to global
7. Copy the rule "metric events", and point it to your scoped table.
8. That's it.

Now I feel like I need to argue with myself.

"Come on, it can't be impossible."

Okay, lets walk through the last 3 hours of my life.

# The business rule

I created a scope, table, copied the business rule, "metrics events".

Created a Fix Script to test running this quickly.  

## GlideScriptRecordUtil is not available in scopes. 

So this was used to get the fields that changed.  Okay some work and I got a working scoped version here.

```javascript
function getChangedFieldNames(gr) {
  var result = [];
  var elements = gr.getElements();
  var size = elements.length;
  for (var i = 0; i < size; i++) {
    var ge = elements[i];
    if (ge.changes()) {
      result.push(ge.getName());
    }
  }
  return result;
}
```

Once that's added to the business rule we can call it instead of `GlideScriptRecordUtil`.

```javascript
//var gru = new GlideScriptRecordUtil.get(current);
//var fieldsChanged = gru.getChangedFieldNames();
var fieldsChanged = getChangedFieldNames(current);
```

## addActiveQuery is not available in scopes.

Okay updated the \`getDefinitions\` function to use gr.addQuery('active', 'true');

## GlideDBObjectManager.getTables() is not available in scope.

There's a replacement 

```javascript
var tables = new GlideTableHierarchy(table);
```

Then when you would have called tables before you call `tables.getTables();`

## metric.update is not available or found for scope.

So either I don't know how to give permission to generate a global event OR I need to create a scoped version of the event and trigger it.

Created a the scoped version of the event and updated the `gs.eventQueue` line to 

```javascript
gs.eventQueue(
  'x_8821_testmetric.metric.update', 
  current, 
  fields, 
  current.sys_mod_count, 
  'metric_update'
);
```

At this point you have a working rule that **should** work if you can get the event to process.  Since this is a different script I'm breaking this up here.

# The Script Action

Created a copy of the script action that processes `metric.update`.

Because it's async, created another fix script and emulated running the code there.

## GlideDBObjectManager.getTables not available in scope

We solved this before, so just solved that the same way.  Well nearly, I passed in a table since I was having some other problem with my fix script.

```javascript
//var tables = GlideDBObjectManager.getTables(current.getTableName());
var tables = new GlideTableHierarchy(table);
gr.addQuery('table', tables.getTables());
```

 Nail in the coffin is next.

## GlideRecordRollback not available in scope

I don't see a way around this unless someone reverse engineers how the `toVersion` function works.  I looked and didn't find anything.  

If anyone else wants to try this please have it and comment on the [thread](https://community.servicenow.com/community?id=community_question&sys_id=966e14621b824814d01143f6fe4bcbd7) here so I can follow along with my ????.

# References

[Original Post](https://community.servicenow.com/community?id=community_question&sys_id=966e14621b824814d01143f6fe4bcbd7)

[Docs on Metric Definitions that say create a rule](https://docs.servicenow.com/csh?version=latest&topicname=c_MetricDefinitionSupport)

Final Business Rule in global.

```javascript
(function executeRule(current, previous /*null when async*/) {
  queueMetricUpdate();
  function queueMetricUpdate() {    
	var gru =  new GlideScriptRecordUtil.get(current);
	var fieldsChanged = gru.getChangedFieldNames();
	var gr = getDefinitions(fieldsChanged);
	fields = '';
	while (gr.next()){
      fields += gr.field + ',';
    }
	if (fields.length > 0) {
      fields = '[' + fields.substring(0, fields.length - 1) + ']';
      gs.eventQueue('metric.update', 
                    current, 
                    fields, 
                    current.sys_mod_count, 
                    'metric_update'
                   );
	}
}
  function getDefinitions(fields) {
	var gr = new GlideAggregate('metric_definition');
	gr.addActiveQuery();
	var tables = GlideDBObjectManager.getTables(current.getTableName());
	gr.addQuery('table', tables);
	gr.addQuery('field', fields);
	gr.groupBy('field');
	gr.query();
	return gr;
  }
})(current, previous);
```