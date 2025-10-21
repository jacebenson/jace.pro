---
title: Service Portal - Modify Watch List
description: "I created a widget and wanted to share that code. Should work on any\\\r\ninstance unless you have a business rule blocking the update.\r\n\r\n## Client Script\r\n\r\nj..."
date: '2017-10-04'
tags:
  - gliderecord
  - business-rules
  - client-scripts
  - service-portal
  - javascript
  - html
redirectFrom:
  - /sp-modify-watch-list/
---

I created a widget and wanted to share that code. Should work on any\
instance unless you have a business rule blocking the update.

## Client Script

```javascript
function($scope, spUtil) {
  var c = this;
  $scope.watch_list = {
    displayValue: c.data.watch_list.displayValue,
    value: c.data.watch_list.value,
    name: 'watch_list'
  };
  $scope.updateRecord = function(){
    c.data.watch_list = $scope.watch_list;
    c.server.update()
  };
}
```

## Server Script

```javascript
(function() {
  if(input && input.sys_id && input.table && input.watch_list){
    var ticket = new GlideRecord(input.table);
    if(ticket.get(input.sys_id)){
      ticket.setValue('watch_list', input.watch_list.value);
      ticket.update();
    }
  } else {
    if($sp.getParameter('table') && $sp.getParameter('sys_id')){
      var table = $sp.getParameter('table')
      var sys_id = $sp.getParameter('sys_id')
      var gr = new GlideRecord(table);
      if(gr.get(sys_id)){
        data.canRead = gr.watch_list.canRead();
        data.canWrite = gr.watch_list.canWrite();
        if(data.canRead){
          data.sys_id = sys_id;
          data.table = table;
          data.watch_list = {
            displayValue : gr.getDisplayValue('watch_list') || '',
            value : gr.getValue('watch_list') || ''
          };
        }
      }
    } else {
      //missing url params
    }
  }
})();
```

## HTML

```html
<div ng-if="data.canRead" class="panel panel-primary b">
  <div class="panel-heading">
    <h4 class="panel-title pull-left">
      ${Watch list}
    </h4>
    <div class="clearfix"></div>
  </div>
  <div class="panel-body">
    <div class="text-center text-italic text-muted" id="watch_list_div">
      <sn-record-picker 
        ng-blur="updateRecord()"
        field="watch_list"
        sn-disabled="!data.canWrite"
        table="'sys_user'"
        display-field="'name'"
        search-fields="'name'"
        value-field="'sys_id'"
        default-query="'active=true^name!=NULL'"
        multiple="true">
      </sn-record-picker>
      <p></p>
      <button 
        type="button"
        ng-click="updateRecord()"
        ng-if="data.canWrite"
        class="btn btn-default ng-scope">
        Update Watch List
      </button>
    </div>
  </div>
</div>
```