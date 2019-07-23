---
aliases:
- '/GlideDuration/'
date: '2018-08-16 22:02:36 +0000'
keywords:
- add
- getByFormat
- getDayPart
- getDisplayValue
- getDurationValue
- getRoundedDayPart
- getValue
- setDisplayValue
- setValue
- subtract
layout: page
tags:
- 'server-side-api'
title: GlideDuration
url: '/glideduration/'
---

# GlideDuration

| Property/Method                         | Description                                                                                                                            |
|-----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| [add](#add)                             | Adds a given duration to the current duration                                                                                          |
| [getByFormat](#getbyformat)             | Gets the current duration in the given format `DO NOT USE THIS AS IT DOESN'T WORK PROPERLY`                                            |
| [getDayPart](#getdaypart)               | Gets the number of days                                                                                                                |
| [getDisplayValue](#getdisplayvalue)     | Gets the display value of the duration in number of days, hours, and minutes                                                           |
| [getDurationValue](#getdurationvalue)   | Gets the duration value in d HH:mm:ss format                                                                                           |
| [getRoundedDayPart](#getroundeddaypart) | Gets the rounded number of days. If the time part is more than 12 hours, the return value is rounded up. Otherwise, it is rounded down |
| [getValue](#getvalue)                   | Gets internal value of the this duration object. GlidDuration is stored as DateTime                                                    |
| [setDisplayValue](#setdisplayvalue)     | Sets the display value                                                                                                                 |
| [setValue](#setvalue)                   | Sets the internal value of the GlideDuration object. Internally, GlidDuration is stored as DateTime                                    |
| [subtract](#subtract)                   |                                                                                                                                        |

## getByFormat

This function sets the GlideDateTime object with a number of epoc
milliseconds onthe total duration millisends and returns that. This
causes odd results;

``` {.js}
var days = 3;
var hours = days * 24;
var minutes = hours * 60;
var seconds = minutes * 60;
var mSeconds = seconds * 1000; //259,200,000 milliseconds === 3 days
var durDelta = new GlideDuration(mSeconds); //Exactly 3 days worth of milliseconds
gs.print(durDelta.getByFormat('dd hh:mm'));//Prints "04 12:00" Expected Output would be "03 00:00"
```
