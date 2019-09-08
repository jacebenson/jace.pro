---
aliases:
- '/sp-modify-watch-list/'
- '/2017-10-03-sp-modify-watch-list/'
date: '2017-10-03'
keywords:
- sp
- widget
layout: post
tags:
- service portal
- widget
title: 'Service Portal - Modify Watch List'
authors: ["jace"]
---

I created a widget and wanted to share that code. Should work on any
instance unless you have a business rule blocking the update.

``` {.js}
//Client Script
function($scope, spUtil) {
  var c = this;
  /*
  jQuery(document).ready(function(){
    jQuery('#watch_list_div').children().each(function(index){
      jQuery(this).attr('style','');
    });
  });
  //works if run in the console after page load but not ehre
  */
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

``` {.js}
//Server Script
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

``` {.html}
<!--Template-->
<div ng-if="data.canRead" class="panel panel-primary b">
  <div class="panel-heading">
    <h4 class="panel-title pull-left">
      ${Watch list}
    </h4>
    <div class="clearfix"></div>
  </div>
  <div class="panel-body">
    <div class="text-center text-italic text-muted" id="watch_list_div">
      <sn-record-picker ng-blur="updateRecord()"
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
      <button type="button"
              ng-click="updateRecord()"
              ng-if="data.canWrite"
              class="btn btn-default ng-scope">
        Update Watch List
      </button>
    </div>
  </div>
</div>
```
