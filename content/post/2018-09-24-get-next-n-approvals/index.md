---
date: '2018-09-24'
layout: post
title: Get the next N approvals
authors: ["jace"]
---

I was talking with someone they were asking how to get the next x
approvals up to 10. In my opinion that's just too many levels. However
you can't always control the environment you work in. He was trying to
get the next x approvals. I came up with this script;

``` {.js}
// start debugging
var current = {};
current.variables = {};
current.variables.user = gs.getUserID();
// end debugging

function getManager(user,display){
  var m = new GlideRecord('sys_user');
  if (m.get(user)) {
    // gs.print(m.manager.getDisplayValue() + ' : ' + m.getValue('manager')); 
    if (display) {
      return m.getDisplayValue('manager');
    } else {
      return m.getValue('manager');
    }
  }
}
var approvals = [];
for (var x=1; x<=10; x++) {
  if (x===1) {
    approvals.push({
        x: x,
        name: getManager(current.variables.user,true),
        sys_id: getManager(current.variables.user,false)
        });
  } else {
    approvals.push({
        x: x,
        name: getManager(approvals[x-2].sys_id,true),
        sys_id: getManager(approvals[x-2].sys_id,false)
    });
  }
  // gs.print('level ' + x + ' ' + approvals[x]);
}

gs.print(JSON.stringify(approvals,'','  '));
```

```mermaid
graph TD;
  S0(Start);
  A(Approval N);
  T1(Task 1); 
  RS(RS: Figure out next approval);
  IF(IF: Has person to approve);
  E0(End);

  S0-->RS;
  A--Approved-->RS;
  A--Rejected-->E0;
  RS-->IF;
  IF--No-->T1;
  IF--Yes-->A;
  T1-->E0;
```
