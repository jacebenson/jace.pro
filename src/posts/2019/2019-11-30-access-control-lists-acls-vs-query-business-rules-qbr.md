---
title: Access Control Lists (ACLs) VS Query Business Rules (QBR)
description: "This is an issue as old as the \"HI security plugin\". Before that, I'm not sure how ServiceNow secured their tables as it was before my time.\r\n\r\nI've been ask..."
date: '2019-12-01'
tags:
  - servicenow
  - business-rules
  - acl
  - html
  - database
  - troubleshooting
  - best-practices
  - performance
  - security
redirectFrom:
  - /access-control-lists-acls-vs-query-business-rules-qbr/
  - /p/2019-11-30-access-control-lists-acls-vs-query-business-rules-qbr/ 
  - /2019-11-30-access-control-lists-acls-vs-query-business-rules-qbr/
---

<!--StartFragment-->

This is an issue as old as the "[HI security plugin](https://docs.servicenow.com/bundle/geneva-servicenow-platform/page/administer/security/task/t_ActivateHighSecuritySettings.html)". Before that, I'm not sure how ServiceNow secured their tables as it was before my time.

I've been asked in the past to remove the message "n records removed by security..." and it **can** be done, but **shouldn't**.

Here's my take on it.

Access Control Lists (aka ACLs) are there for two reasons;

* maintainability
* second is field level control

You could replace every tables Access Control Lists with Query Business Rules. That is not the normal place security is generally configured.

Here's some very insightful quotes from people I respect on the topic and links to the resources;

gflewis asked in 2011

> What are the pros and cons of using an Access Control verses a Before Query Business Rule to block certain users from reading certain records? As far as I can tell, the functionality appears to be identical.

CapaJC responded in 2011

> Before query is highly preferable if you can use one. It makes the database do the work by modify the query itself. With Contextual Security, your instance has to decide per record what a user can see after fetching them from the database.
>
> With a before query rule, unavailable records are simply not there as far as the user is concerned. With Contextual Security they might get a list of 4 visible records, and the list might say 1 to 100 of 546 with a message at the bottom saying "96 records removed due to security constraints".[1](https://community.servicenow.com/community?id=community_question&sys_id=11a68365db1cdbc01dcaf3231f961976)

More recently Tim W. wrote in 2018

> ACLs Vs Query Business Rules: **ACLs**, but also sometimes query business rules; but usually for performance reasons more than security.[2](https://snprotips.com/blog/2018/9/18/broken-queries-and-query-rules)

Further Reading;

* 1 - \[<https://community.servicenow.com/community?id=community_question&sys_id=11a68365db1cdbc01dcaf3231f961976>](Community Post from 2011)
* 2 - \[<https://snprotips.com/blog/2018/9/18/broken-queries-and-query-rules>](Tim W's Post from 2018)
* <https://www.servicenowguru.com/scripting/business-rules-scripting/controlling-record-access-before-query-business-rules/>
* <https://www.servicenowguru.com/showcase/servicenow-security-tips/> `#4`

<!--EndFragment-->

Comments;

> [@jgr1ffin](https://github.com/jgr1ffin) commented on Dec 3, 2019
>
> One other thing worth nothing between the two is that QBR's can't perform top-level OR queries (^NQ).

> **[jacebenson](https://github.com/jacebenson)** commented [on Dec 3, 2019](https://github.com/jacebenson/jace.pro/issues/146#issuecomment-561228947)
>
> [@jgr1ffin](https://github.com/jgr1ffin) that is something I did not know. Thank you for sharing!

> **[mikebski](https://github.com/mikebski)** commented [on May 12, 2020](https://github.com/jacebenson/jace.pro/issues/146#issuecomment-627403921)
>
> Also if you have lots of records you are filtering with ACLs you end up with empty pages in the UI - For example, I have 500 records and the user only has perms to see 5. If I use ACL for view they see 500 records worth of pages in the UI - in this case a BR is a must.

> **[jared-laethem](https://github.com/jared-laethem)** commented [on May 23, 2020](https://github.com/jacebenson/jace.pro/issues/146#issuecomment-633167407)
>
> Another difference is that ACL's can specify scripted conditions that may not be able to be expressed as a query. Prior to the introduction of contextual security (sys_security_acl), security was specified on dictionary records.