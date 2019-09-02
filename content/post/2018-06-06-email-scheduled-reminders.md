---
date: '2018-06-05'
layout: post
tags:
- email
title: Reminders
authors: ["jace"]
---

This has come up often enough that it merits a post. Reminders of sorts
can be set up a few ways in Servicenow. This is just the pros and cons
of each.

So there's a few ways I know of doing this;

-   Scheduled Report
-   SLA Notifications
-   Scheduled Job (much like incident auto close)
-   Scheduled Events

Each of these have their pro's and con's, lets get into it.

## Scheduled Report

Probably the easiest to set up as it just requires a report, and a
scheduled report.

| Pro                                        | Con                                        |
|--------------------------------------------|--------------------------------------------|
| Only requires Report, and Scheduled Report | Only occures at the frequency it scheduled |
| No coding required                         | Less configurable                          |
| No email template to set up                | Email is set based on report sharing       |

## SLA Notifications

| Pro                | Con                                        |
|--------------------|--------------------------------------------|
| No coding required | Only occures at the frequency it scheduled |
|                    | Specific to tasks                          |

## Scheduled Job

| Pro                                             | Con                                        |
|-------------------------------------------------|--------------------------------------------|
| Only Requires Scheduled Job, Event, Notificiton | Only occures at the frequency it scheduled |
| Very configurable due to coding                 | Requires coding                            |

## Scheduled Events

| Pro                            | Con                                                                             |
|--------------------------------|---------------------------------------------------------------------------------|
| Triggers when it's supposed to | Requires Event, Notification, Business Rules, and possibly it's own event queue |
| Very configurable              | Requires coding                                                                 |
|                                | Requires managing the scheduled events if the date/time changes                 |
