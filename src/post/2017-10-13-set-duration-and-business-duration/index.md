---
title: "Set Duration and Business Duration"
subtitle: "You'd think these would be set on all tasks the same way. Turns out it's not."
summary: "You'd think these would be set on all tasks the same way. Turns out it's not."
date: 2017-10-13T20:25:56-05:00
---

I recently had to add some code to set this for some reporting needs but
really, this should be part of the offering ServiceNow provides.

Below is my business rule, and fix script to catch new records and fix
old records.

```js
// Business Rule
// Table: Task [task]
// Active: true
// Advanced: true
// When: Before
// Order 100000000
// Insert: true
// Upauthor: 'jace'
date:true
// Condition:
// calendar_durationISEMPTY^
// opened_atISNOTEMPTY^
// closed_atISNOTEMPTY^
// sys_class_name!=incident^
// sys_class_name!=problem
//
// Script
var opened = current.opened_at.getDisplayValue();
var closed = current.closed_at.getDisplayValue();
current.calendar_duration = gs.dateDiff(opened, closed, false);
current.business_duration = gs.calDateDiff(opened, closed, false);
```

Here's my fix script.

```js
var log = 'calc. old durations';
var query = '';
query += 'calendar_durationISEMPTY^';
query += 'opened_atISNOTEMPTY^';
query += 'closed_atISNOTEMPTY^';
query += 'sys_class_name!=incident^';
query += 'sys_class_name!=problem^';

var task = new GlideRecord('task');
task.addEncodedQuery(query);
task.query();
var x = 0;
while(task.next()){
    x++;
    if(x%1000 === 0){
        gs.log('x: ' + x + ' of ' + task.getRowCount(), log);
    }
    var opened = task.opened_at.getDisplayValue();
    var closed = task.closed_at.getDisplayValue();
    task.business_duration = gs.calDateDiff(opened, closed, false);
    task.calendar_duration = gs.dateDiff(opened, closed, false);
    task.setWorkflow(false);
    task.autoSysFields(false);
    task.update();
}
```
