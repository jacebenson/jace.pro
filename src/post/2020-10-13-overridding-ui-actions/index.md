---
title: "How to override a UI Action"
subtitle: "Overriding UI Actions"
summary: ""
date: 2020-10-13T09:11:14-05:00
---

Someone asked the other day, how to override the "Submit" ui action for incident.

Let me start with why you shouldn't change the oob "Submit" ui action.  There is no specific "Submit" ui action for incident.  So if you change the one on "global", it will change it for all tables.  That is not the desired outcome.

Instead you should create a new UI action against the table you want with the same "Action Name".  The new UI action should be all set then.

Chuck Tomasi discusses this on a stream [here](https://youtu.be/_G8X9bi8spE?t=2496)