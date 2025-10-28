---
title: Service Portal - Ticket Assignments
description: "I created a ticket assignments and wanted to share that code. Should\\\r\nwork on any instance unless you have a business rule blocking the\\\r\nupdate.\r\n\r\n\r\n\r\n!\r\n..."
date: '2017-10-05'
tags:
  - gliderecord
  - business-rules
  - client-scripts
  - service-portal
  - javascript
  - html
redirectFrom:
  - /sp-ticket-assignments/
  - /p/2017-10-04-sp-ticket-assignments/
---

<!--StartFragment-->

I created a ticket assignments and wanted to share that code. Should\
work on any instance unless you have a business rule blocking the\
update.

<!--EndFragment-->

![](/assets/images/sp-ticket-assignments.png)

## Client Script

```javascript
function() {
  /* widget controller */
  var c = this;
}
```

<!--EndFragment-->

## Server Script

```javascript
(function() {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */
  var gr = $sp.getRecord();
  data.canRead = gr.canRead();
  data.table = gr.getTableName();
  if (!data.canRead || gr.getTableName() != 'sc_req_item') {
    return;
  }

  data.sc_task = [];
  var sc_task = new GlideRecord('sc_task');
  sc_task.addQuery('request_item', gr.getValue('sys_id'));
  sc_task.addQuery('active','true');
  sc_task.orderByDesc('sys_created_on');
  sc_task.query();
  data.sc_task_query = sc_task.getEncodedQuery();
  while(sc_task.next()){
    var label = '';
    var assignment = '';
    if(sc_task.assignment_group != ''){
      assignment = sc_task.getDisplayValue('assignment_group');
    } else {
      assignment = sc_task.getDisplayValue('assigned_to');
    }
    data.sc_task.push({
      number: sc_task.getValue('number'),
      assignment: assignment,
      link: '?id=ticket&table=sc_task&sys_id=' + sc_task.getValue('sys_id')
    })
  }
})();
```

## HTML

```html
<!--Template-->
<div class="panel b"
     ng-if="data.canRead && data.sc_task.length > 0 && data.table == 'sc_req_item'" >
  <div class="panel-heading bg-primary">
    <span ng-if="true" >Task Assignments</span>
  </div>
  <div class="panel-body">
    <table class="table">
      <thead>
        <tr>
          <th>Assignment</th>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="task in data.sc_task">
          <td></td>
          <td><a href=""></a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```