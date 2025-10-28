---
title: Cancelling a flow
description: "What is the post about?\\\r\nCancelling Workflows\\\r\nWhat things would help with writing the post\r\n\r\nSomething almost always asked for and rarely delivered is th..."
date: '2022-06-07'
tags:
  - workflow
  - troubleshooting
redirectFrom:
  - /cancelling-a-flow/
  - /p/2022-06-06-cancelling-a-flow/
---

<!--StartFragment-->

**What is the post about?**\
Cancelling Workflows\
**What things would help with writing the post**

Something almost always asked for and rarely delivered is the ability to cancel a requested item. I’ll try to explain why this is so difficult and how I’ve suggested implementing this.

Why is this difficult? The problem is not with the actual canceling the requested item. It’s because asking groups to undo what they did is not a simple statement.

Take for example the following workflow. There’s an approval and two tasks.

![cancelling-a-flow](/assets/images/cancelling-a-flow.png)

Say this item gets cancelled before “Create email” is complete. Do we assume someone needs to check if the email was created but not activated, or just make a task to remove the AD account. Do we need to inform the approval chain?

This is a pretty simple example, but should show some of the issues with trying to cancel an item. I’m of the opinion that I think there are two ways to broadly address this, and one way to specifically address it.

* For each task updated (sys_mod_count>0) create a task to undo work done in task #.
* Create a task to the group to undo all work done from this ritm#.
* For specific have a path in your workflow waiting for the cancel and depending where the workflow is, create appropriate tasks to cancel this item completely.

The first option will require less involvement from each group to set up, but may find some tasks don’t make sense. Imagine you have a request to make a doctors account in Epic. Sometimes the folks who make the account don’t give the roles. So if you had two tasks one to create the account and another to give the roles. If the group who made the account got a task to “undo” the account, the roles couldn’t be removed.

The second option requires you to identify a single group who is primary owner for the group (which has other great benefits but I’m not going to go into those now). That has some office politics attached and more often then not if this is done I’ll bet a number of non service now items are owners of automated or complex items.

The third option would only work for items where the cancelling was thought through at the time the item was sized or after a conversation came up to clear up questions. Where this is different from the first option is this will create very specific tasks per the workflow. The first option would always make “undo” tasks.

<!--EndFragment-->