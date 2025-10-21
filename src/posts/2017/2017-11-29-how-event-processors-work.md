---
title: How event processors work
description: "Here's my understanding of how the\_sys_trigger\_\"process events\" works, also known as the\_event processor.\r\n\r\nFrequently it wakes a Java process that reads th..."
date: '2017-11-30'
tags:
  - servicenow
  - knowledge
  - javascript
redirectFrom:
  - /how-event-processors-work/
---

<!--StartFragment-->

Here's my understanding of how the `sys_trigger` "process events" works, also known as the **event processor**.

Frequently it wakes a Java process that reads the `sysevent` table.

It looks for events which have no named queue where the process date is in the past which have no "claimed by" yet and are in a state of ready. It orders by "process on" and limits to 100 at a time.

The 100 "oldest" unprocessed events are claimed and a worker start going through them sequentially. As they are completed, the state changes. When all 100 are done, the thread goes back to slep and waits to be woken again by the scheduled job.

Now there are a couple "process event" records. You can also write your own. This [community post](https://community.servicenow.com/community?id=community_question&sys_id=db344b29dbd8dbc01dcaf3231f9619b4#874843) goes over the items you need;

These sys_trigger records are ephemeral it seems, one runs and it spawns another and the old one is deleted

1. Trigger the event server-side with a queue;
2. Insert a new record as a copy of the original "events process" job where you change the script.

   ```
   /* from */
   fcScriptName=javascript\\\\:gs.processDelegatedEvents();
   /* to */
   fcScriptName=javascript\\\\:gs.processDelegatedEvents('my_queue_name');
   ```



## Extra Sources

* [KB0676909](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0676909)

<!--EndFragment-->