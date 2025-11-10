---
title: Extending User is Bad
description: >-
  A few weeks ago extending User [sys_user] came up and I had always thought,
  well ServiceNow did it for Customer Service Management, so it must be fine.
  This ...
date: '2021-08-13'
tags:
  - servicenow
  - tables
redirectFrom:
  - /extending-user-is-bad/
  - /post/2021-08-12-extending-user-is-bad/
  - /p/2021-08-12-extending-user-is-bad/
---

A few weeks ago extending User [`sys_user`] came up and I had always thought, well ServiceNow did it for Customer Service Management, so it must be fine. This day however Pheedbaq explained why this is a problem and why we shouldn't do it.

Here's my understanding.

Let's go with spatial bodies. For this example we'll extend sys_user to user_martian and user_plutonian.

You can create a user on user_martian, they will never hav a class of sys_user.

If you decide that later you want user_plutonian extension, users who were made on user_martian can never also exist on user_plutonian.

Let's use an example. Let's say John is a new Citizen on Mars and moved there yesterday. You guys have a process that creates a user_martian record for him. Then you decided he's going to move to Pluto and work from the branch there.

You'd need a second record because his class cannot be both user_plutonian and user_martian.

## Pheedbaq's message that spurred this

> If you have: sys_user
>
> contract_user extends sys_user
>
> subsidiary_user extends sys_user
>
> Then you create Bob who is a contract_user
>
> Bob's class will never be "sys_user".
>
> Bob can never be a "subsidiary_user".
>
> To make Bob both a contract_user and a subsidiary_user, Bob must have 2 accounts.
>
> The User table should never be extended. We have had apps and guidance in the past that say "extend sys_user" and those are wrong. For ServiceNow-made apps which extend sys_user, those teams have already or are in the process of unwinding that so they don't break future customers. The documentation should hopefully already be cleaned up, but there may be some lingering bad advice out there.
>
> I didn't mean to interrupt the LCHH; I thought posting here would be non-disruptive. Hope it wasn't a bother.
>
> \-- Pheedbaq