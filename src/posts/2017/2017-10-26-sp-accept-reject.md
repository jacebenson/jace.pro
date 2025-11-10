---
title: Service Portal - Accept/Reject Solution
description: Service Portal - Accept/Reject Solution
date: '2017-10-27'
tags:
  - servicenow
  - service-portal
  - approvals 
redirectFrom:
  - /sp-accept-reject/
  - /p/2017-10-26-sp-accept-reject/
---

<!--StartFragment-->

I created a widget and wanted to share that code. Should work on any instance unless you have a business rule blocking the update.

<!--EndFragment-->

![](/assets/images/sp-accept-reject.png)

## Client Script

```javascript
//Client Script
function($scope) {
  /* widget controller */
  var c = this;
  $scope.acceptRecord = function(){
    c.data.action = 'accept';
    c.data.inputTable  = $scope.data.table;
    c.data.inputSys_id = $scope.data.sys_id;
    c.server.update();
  };
  $scope.rejectRecord = function(){
    c.data.action = 'reject';
    c.data.inputTable  = $scope.data.table;
    c.data.inputSys_id = $scope.data.sys_id;
    c.server.update();
  };
}
```

## Server Script

```javascript
//Server Script
(function() {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */
  data.debug = false;
  data.canRead = true;
  data.show = false;
  data.messages = {
    accept: "Solution Accepted.",
    reject: "Solution Rejected."
  };
  data.rules = {
    custom_table: {
      //query to show widget on, solution proposed
      showOn   : 'state=6^u_contactDYNAMIC90d1921e5f510100a9ad2572f2b477fe',
      fields: {
        accept: {
          state: 7,//state to set to if 'accept', closed
          comments: data.messages.accept
        },
        reject: {
          state: 2,//state to set to if 'reject', active
          comments: data.messages.reject
        }
      }
    },
    incident: {
      //query to show widget on, solution proposed
      showOn: 'state=6^caller_idDYNAMIC90d1921e5f510100a9ad2572f2b477fe',
      fields: {
        accept: {
          state: 7,//state to set to if 'accept', closed
          comments: data.messages.accept
        },
        reject: {
          state: 2,//state to set to if 'reject', active
          comments: data.messages.reject
        }
      }
    }
  };
  data.sys_id = $sp.getParameter("sys_id");
  data.table = $sp.getParameter("table");
  if(data.table && data.sys_id){
    var task = new GlideRecord(data.table);
    if(task.get(data.sys_id)){
      var actualTable = task.getValue('sys_class_name');
      var actualTask = new GlideRecord(actualTable);
      actualTask.addQuery('sys_id', data.sys_id);
      actualTask.addEncodedQuery(data.rules[actualTable].showOn);
      actualTask.query();
      if(actualTask.next()){
        data.show = true;
        data.table = actualTask.getValue('sys_class_name');
      } else {
        data.errorMsg = "Could not find record to get table fields";
      }
    } else {
      data.errorMsg = "Could not find record to get classname";
    }
  }
  if(input && input.action){
    var rule = data.rules[input.inputTable].fields[input.action];
    console.log(data.rules[input.inputTable][input.action]);
    var taskUpdate = new GlideRecord(input.inputTable);
    if(taskUpdate.get(input.inputSys_id)){
      for(var field in rule){
        //console.log('setting ' + field + ': ' + rule[field]);
        if(field == 'comments' || field == 'work_notes'){
          taskUpdate[field] = rule[field];
        } else {
          taskUpdate.setValue(field, rule[field]);
        }
      }
      taskUpdate.update();
      data.show = false;
    } else {
      console.log('cound not find record');
    }
  }
})();
```

## HTML

```html
<!--Template-->
<div ng-if="data.canRead && data.show" class="panel panel-primary b">
  <div class="panel-heading">
    <h4 class="panel-title pull-left">
      ${Solution Proposed}
    </h4>
    <div class="clearfix"></div>
  </div>
  <div class="panel-body">
    <div class="text-center">
      <button type="button"
              class="btn btn-success"
              ng-click="acceptRecord()"
              >
        ${Accept}
      </button>
      <button type="button"
              class="btn btn-danger"
              ng-click="rejectRecord()"
              >
        ${Reject}
      </button>
      <p ng-if="data.debug">{{data.debugStr}}</p>
      <p></p>
    </div>
  </div>
</div>
```