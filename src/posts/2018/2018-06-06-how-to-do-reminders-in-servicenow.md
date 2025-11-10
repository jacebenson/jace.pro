---
title: How to do reminders in ServiceNow
description: "This has come up often enough that it merits a post. Reminders of sorts can be set up a four ways in ServiceNow. This is the pros and cons of each.\r\n\r\nThere'..."
date: '2018-06-07'
tags:
  - servicenow
redirectFrom:
  - /how-to-do-reminders-in-servicenow/
  - /p/2018-06-06-how-to-do-reminders-in-servicenow/
---

<!--StartFragment-->

This has come up often enough that it merits a post. Reminders of sorts can be set up a four ways in ServiceNow. This is the pros and cons of each.

There's a four ways I know of doing this;

* Scheduled Report
* SLA Notifications
* Scheduled Job (much like incident auto close)
* Scheduled Events

Each of these have their pro's and con's, lets get into it.

## Scheduled Report

Probably the easiest to set up as it requires a report, and a scheduled report.

| Pro                                        | Con                                       |
| ------------------------------------------ | ----------------------------------------- |
| A Report, and Scheduled Report             | Occurs at the frequency it scheduled      |
| No coding required                         | Less configurable                         |
| No email template to set up                | Email is set based on report sharing      |

## SLA Notifications

| Pro                | Con                                       |
| ------------------ | ----------------------------------------- |
| No coding required | Occurs at the frequency it scheduled      |
|                    | Specific to tasks                         |

## Scheduled Job

| Pro                                              | Con                                       |
| ------------------------------------------------ | ----------------------------------------- |
| Requires Scheduled Job, Event, Notification      | Occurs at the frequency it scheduled      |
| Configurable due to coding                       | Requires coding                           |

## Scheduled Events

| Pro                            | Con                                                                             |
| ------------------------------ | ------------------------------------------------------------------------------- |
| Triggers when it's supposed to | Requires Event, Notification, Business Rules, and possibly it's own event queue |
| Configurable                   | Requires coding                                                                 |
|                                | Requires managing the scheduled events if the date/time changes                 |

## Scheduled Flow Trigger

| Pro                                                                      | Con                                                                      |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| Access be delegated using Scoped App and Flow Designer content filtering | Delegates can reak havoc, shouldn't create them directly in prod. |

Thansks @milligna!

<!--EndFragment-->