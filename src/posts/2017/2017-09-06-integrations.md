---
title: Integration Considerations
description: When using a workflow, consider these decisions
date: '2017-09-06'
tags:
  - servicenow
redirectFrom:
  - /integrations/
  - /p/2017-09-06-integrations/
---

I'm recalling this from memory and this is old and could be updated for Scripted Rest APIs and such, but I want to get this out here.

![Flow Decisions](/assets/images/Capture.png)

That is verbose but all you need to know is what your doing, and what is preferred like so;

![Flow Decisions](/assets/images/Capture2.png)

Generally if you are doing a "one time" import, generally almost always easiest to do a file import. Sometimes, a database connection is better, it's the same work. You'll set up a import table, and a transform map.

If you are setting up a recurring import like from the stock market or some weather source the following questions have to be asked;

## What triggers this data coming into ServiceNow

* If what triggers this data is an interval, then make a scheduled job/workflow that runs on that interval.
* If what triggers this data is an action, like a major change is created, then it's a matter of running the code triggered from that update. I'd do this by registering an event, and then in the business rule, triggering said event. Then create a script action to actually make the web service call (via a script include). This might seem like a lot of extra steps, but by abstracting this, it's much easier to test.
* If the trigger is a task getting closed in certain state, you can try to disable rules to allow you make these changes, or you can trigger the event.

## What data comes into ServiceNow, a full pull or what's requested

* If the data that comes into ServiceNow is an individual record, it probably makes the most sense to do a outbound web service call like a REST or SOAP Call, that response you get back will have to be parsed and then dealt with. I'd recommend dealing with it on a transform table because then you can deal with the data and massage it like any other imported data.
* If the data that comes into ServiceNow is a full set of the data, it probably doesn't make sense to do it over a web service, as those are generally paginated and that can be a pain to deal with, ideally, you would have read access to their database, and you can pull it in.
* If not, the next best thing would be if they can prepare a single file for you to parse that you can read hosted some place. If that's not possible, I'd then look into the possibility of them pushing the data to you.