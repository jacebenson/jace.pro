---
title: Converting dates and times to readable fuzzy versions
description: YYYY-MM-DDT00:00:00.000Z to 3d ago
date: '2022-11-12'
tags:
  - javascript
  - troubleshooting
redirectFrom:
  - /converting-dates-and-times-to-readable-fuzzy-versions/
---

I﻿ am not sure where I got this but I thought it could be useful.  You know how some sites show "3d ago" instead of the YYYY-MM-DD hh:mm:ss version.  Here's a small function that does that for you.

```javascript
//debug lines
var yourUpdated = '2021-08-13T16:54:00Z'

let getFuzzyDate = function (dateTime) {
  var past = new Date(dateTime).getTime()//ms since epoch
  var now = new Date().getTime()//now
  var differenceInSeconds = (now - past) / 1000//get seconds
  var thresholds = [
    { threshold:                       60 - 1, divideBy:                 1,  fuzzyUnit: 's' },
    { threshold:                  60 * 60 - 1, divideBy:                 60, fuzzyUnit: 'm' },
    { threshold:             24 * 60 * 60 - 1, divideBy:            60 * 60, fuzzyUnit: 'h' },
    { threshold:        30 * 24 * 60 * 60 - 1, divideBy:       24 * 60 * 60, fuzzyUnit: 'd' },
    { threshold:       365 * 24 * 60 * 60 - 1, divideBy:  30 * 24 * 60 * 60, fuzzyUnit: 'mo' },
    { threshold: 100 * 365 * 24 * 60 * 60,     divideBy: 365 * 24 * 60 * 60, fuzzyUnit: 'y' }
  ];
  var filtered = thresholds.filter((grouping) => {
    return differenceInSeconds < grouping.threshold
  });
  return Math.round(differenceInSeconds / filtered[0].divideBy) + filtered[0].fuzzyUnit + ' ago'
}
console.log(getFuzzyDate(yourUpdated))
```