---
title: Advanced Reported with Related List Conditions
description: "The other day I was asked, \"Hey, how can I find all the access controls with NO related roles?\" \r\n\r\nReporting on the lack of something is really tough (gener..."
date: '2019-03-20'
tags:
  - servicenow
  - reporting
  - security
redirectFrom:
  - /advanced-reported-with-related-list-conditions/
  - /p/2019-03-20-advanced-reported-with-related-list-conditions/
---

The other day I was asked, "Hey, how can I find all the access controls with NO related roles?" 

Reporting on the lack of something is really tough (generally).  In this case though Related List Condition queries shine.  You can access them in the report interface on ServiceNow.
<!--StartFragment-->

| Requirement                                                             | Suggested Approach                                                 |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------ |
| CIs with more than 1 Active Incident                                    | Related List Condition                                             |
| CIs with no outages last month                                          | Related List Condition                                             |
| Active Incidents with No Active Tasks                                   | Related List Condition                                             |
| Incidents assigned to a manager                                         | Related List Condition * / Scripted Filter + Dynamic Filter Option |
| Users in my assignment groups with no active incidents assigned to them | Scripted Filter + Dynamic Filter Option                            |

<!--EndFragment-->