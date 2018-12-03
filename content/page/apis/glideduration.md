---
title: GlideDuration


layout: post
date: 2018-08-16 22:02:36 +0000
tags:
- server-side-api
url: "/glideduration/"
aliases:
- "/GlideDuration/"
---
# GlideDuration
<!--more-->

| Property/Method   | Description                                                                                                                            |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| add               | Adds a given duration to the current duration                                                                                          |
| getByFormat       | Gets the current duration in the given format                                                                                          |
| getDayPart        | Gets the number of days                                                                                                                |
| getDisplayValue   | Gets the display value of the duration in number of days, hours, and minutes                                                           |
| getDurationValue  | Gets the duration value in d HH:mm:ss format                                                                                           |
| getRoundedDayPart | Gets the rounded number of days. If the time part is more than 12 hours, the return value is rounded up. Otherwise, it is rounded down |
| getValue          | Gets internal value of the this duration object. GlidDuration is stored as DateTime                                                    |
| setDisplayValue   | Sets the display value                                                                                                                 |
| setValue          | Sets the internal value of the GlideDuration object. Internally, GlidDuration is stored as DateTime                                    |
| subtract          |                                                                                                                                        |