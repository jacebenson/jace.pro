---
title: Run a Trigger as System from a script
description: "How to excute a script as system - Support and Troubleshooting (servicenow.com)\r\n\r\njs\r\n//get the gr of whatever record you want current to be on the script \r..."
date: '2024-11-01'
tags:
  - servicenow
  - gliderecord
  - knowledge
  - javascript
  - tutorial
  - troubleshooting
redirectFrom:
  - /run-a-trigger-as-system-from-a-script/
---

[How to excute a script as system - Support and Troubleshooting (servicenow.com)](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0820233)

```js
//get the gr of whatever record you want current to be on the script 
var gr = new GlideRecord("sc_req_item");
gr.get("aeed229047801200e0ef563dbb9a71c2");     

//execute one second after running this script
var gdt = new GlideDateTime();
gdt. addSeconds(1)
gs.info(gdt);

//define the script you want to run, in this example it's the stack trace, and don't forget to escape special charectors
var script = "gs.log('***** DEBUG - op:'+ current.operation() + ', sess:' + gs.getSessionID() + ', time:' + new Date().getTime() + ', sys_id:' + current.sys_id + ' - \\n' + GlideLog.getStackTrace(new Packages.java.lang.Throwable()), 'Stacktrace Debug');";

//create the sys_trigger record to be executed by the schedule worker thread
var sched = new ScheduleOnce();
sched.script = script;
sched.setTime(gdt);
sched.setDocument(gr);
sched.setLabel("run this as system");
sched.schedule();
```