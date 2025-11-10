---
title: Getting the next N approvals
description: >-
  I was talking with someone they were asking how to get the next x approvals up
  to 10. You can't always control the environment you work in. He was trying to
date: '2018-09-24'
tags:
  - servicenow
  - approvals
redirectFrom:
  - /getting-the-next-n-approvals/
  - /p/2018-09-24-getting-the-next-n-approvals/
---

<!--StartFragment-->

I was talking with someone they were asking how to get the next x approvals up to 10. You can't always control the environment you work in. He was trying to get the next x approvals. I came up with this script;

<!--EndFragment-->



<!--StartFragment-->

```javascript
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

<!--EndFragment-->