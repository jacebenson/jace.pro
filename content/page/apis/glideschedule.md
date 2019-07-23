---
aliases:
- '/GlideSchedule/'
date: '2018-08-17 01:50:14 +0000'
layout: page
tags:
- 'server-side-api'
title: GlideSchedule
url: '/glideschedule/'
---

# GlideSchedule

| Property/Method | Description                                                                                                                                                           |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| add             | Adds a new schedule segment to the current schedule                                                                                                                   |
| duration        | Determines the elapsed time in the schedule between two date time values using the timezone of the schedule or, if that is not specified, the timezone of the session |
| getName         | Gets the current schedule name                                                                                                                                        |
| load            | Loads a schedule with the schedule information. If a timezone is not specified or is nil, the current session timezone is used for the schedule                       |
| isValid         | Determines if the current schedule is valid. A schedule is valid if it has at least one schedule span                                                                 |
| setTimeZone     | Sets the timezone for the current schedule                                                                                                                            |
