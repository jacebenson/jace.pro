---
title: Automation with Failover Tasks
description: >-
  So I’ve built many automation tasks that didn’t account for what to do during
  an error or an expected output.
date: '2019-10-05'
tags:
  - servicenow
redirectFrom:
  - /automation-with-failover-tasks/
  - /p/2019-10-05-automation-with-failover-tasks/ 
  - /2019-10-05-automation-with-failover-tasks/
---

So I’ve built many automation tasks that didn’t account for what to do during an error or an expected output.



Do you know who has to work on that stuff? Likely, it’s you. That’s a fine way to go if that’s the intention.



I never intended for that to happen. I was working with a stakeholder on some automation and he wanted to keep a task in place. It didn’t matter to me at the time. One day automation stopped working.  It was only then I was happy it had a built-in failover process.



There are many ways to make integrations. Follow one of these two patterns pictured above if you like the idea of a failover task.



This is great because you don't do any of the automation on the workflow. You leave the task in place.  Add some identifier or key to make it simple to find.  Then make a business rule to call the outside system and have that system update the task.  Or have the outside system find the tasks to run against and update the task. I've used the `correlation_id` field in the past as the key field and defined it as part of the workflow. Ensure that the other system closes the task with appropriate messages. If it encounters an issue, have it make a work note.



This might seem like common sense, but if you didn't think about it, you might not know.