---
aliases:
- '/GlideTime/'
date: '2018-08-16 21:11:36 +0000'
layout: page
tags:
- 'server-side-api'
title: GlideTime
url: '/glidetime/'
---

# GlideTime

| Property/Method         | Description                                                                                      |
|-------------------------|--------------------------------------------------------------------------------------------------|
| getByFormat             | Gets the time in the given time format                                                           |
| getDisplayValue         | Gets the time in the user's display format and time zone                                         |
| getDisplayValueInternal | Gets the display value in the user's time zone and the internal format.                          |
| getHourLocalTime        | Returns hour part of local time 0-11                                                             |
| getHourOfDayLocalTime   | Returns hour-of-the-day part of local time 0-23                                                  |
| getHourOfDayUTC         | Returns the hour-of-the-day part of UTC time 0-23                                                |
| getHourUTC              | Returns hour part of UTC time 0-11                                                               |
| getMinutesLocalTime     | Returns minutes part of local time                                                               |
| getMinutesUTC           | Returns minutes part of UTC time                                                                 |
| getSeconds              | Returns seconds part of time                                                                     |
| getValue                | Gets the time value stored in the database in the internal format, HH:mm:ss, and UTC             |
| setDisplayValue         | Sets a time value using current user's display format and time zone                              |
| setValue                | Sets the time of the GlideTime object in the internal time zone (`glide.sys.internal.tz`) or UTC |
| subtract                | Gets the duration difference between two GlideTime values                                        |
