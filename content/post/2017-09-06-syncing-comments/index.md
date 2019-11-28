---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Syncing Comments between Requested Item and Catalog Task"
subtitle: ""
summary: "This is a terrible requirement to fulfill."
authors: ['jace']
tags: []
categories: []
date: 2017-09-06T23:25:56-05:00
lastmod: 2019-09-07T23:25:56-05:00
featured: false
draft: false
---

To me, this is a terrible request to fulfill. The best 
way to handle this is to have fulfillers goto the 
requested item and communicate there. You may not have 
that option because of one reason or another.

Steps

-   Comments are not on Catalog Task, so add that first.
-   Then Register an event called, `custom.catalog.ritm.commented`
-   Copy your Request Item Commented Notification.
-   Change your notification to be triggered by event,
    `custom.catalog.ritm.commented` instead of by update or insert.
-   Change your notification so that the Who Will Receive is unset, and
    check the box, Event parm 1 contains recipient
-   Insert and stay on the notification for (`sc_req_item`)
-   Insert and stay on the notification for (`sc_task`)
-   Create the business rules below;

```js
//Name: push comments to ritm
//Table: Catalog Task
//When: Before
//Insert: false
//Author: 'jace'
//Update:true
(function executeRule(current, previous /*null when async*/) {
    try{
        var sc_req_item = new GlideRecord('sc_req_item');
        if(sc_req_item.get(current.request_item)){
            sc_req_item.comments = current.comments;
            sc_req_item.setUseEngines(false);
            // Tells the system not to run anything
            // with "engine" in the name from this list.
            // https://is.gd/gsNiQZ
            sc_req_item.update();
            var email = {};
            email.sys_id = sc_req_item.u_requested_for.sys_id;
            email.name = sc_req_item.u_requested_for.getDisplayValue();
            gs.eventQueue("custom.catalog.ritm.commented",
                          sc_req_item,
                          email.sys_id,
                          email.name);
        }
    } catch (error) {
        var log = 'Push comments to ritm';
        gs.log('Error: ' + error, log);
    }
})(current, previous);
```

```js
//Name: push comments to tasks
//Table: Request Item
//When: Before
//Insert: false
//Author: 'jace'
//Update:true
(function executeRule(current, previous /*null when async*/) {
    try{
        var sc_task = new GlideRecord('sc_task');
        sc_task.addQuery('request_item', current.sys_id);
        sc_task.addQuery('active','true');
        sc_task.query();
        while(sc_task.next()){
            sc_task.comments = current.comments;
            sc_task.setUseEngines(false);
            // Tells the system not to run anything
            // with "engine" in the name from this list.
            // https://is.gd/gsNiQZ
            sc_task.update();
            var email = {};
            if(sc_task.assigned_to){
                email.sys_id = sc_task.getValue('assigned_to');
                email.name = sc_task.assigned_to.getDisplayValue();
            } else {
                email.sys_id = sc_task.getValue('assignment_group');
                email.name = sc_task.assignment_group.getDisplayValue();
            }
            gs.eventQueue("custom.catalog.ritm.commented",
                          sc_task,
                          email.sys_id,
                          email.name);
        }
    } catch (error) {
        var log = 'Push comments to tasks';
        gs.log('Error: ' + error, log);
    }
})(current, previous);
```
