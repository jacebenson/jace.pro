---
date: '2018-08-16'
keywords:
- sp
- widget
- client script
layout: post
tags:
- service portal
title: How to validate a date format in service portal
---

So a few weeks ago someone had asked how to do some "[How to validate a
date format in service
portal?](https://community.servicenow.com/community?id=community_question&sys_id=71098fa1db5cdbc01dcaf3231f961929)"

So this came up in a chat I was having this week.

To use the `g_user_date_format`, `g_user_date_time_format` and
`getDateFromFormat()`, you would have to re-include the JS file that
declares these things.

To do that goto the widget where you get a failure message and add a new
dependency to a new UI script where you copy/paste the code from
https://hi.service-now.com/scripts/calendar.js.

Then all your old calls ought to work as described in other posts.

``` {.js}
// returns a date object you can test against for date/time 
// variables/fields
new Date(getDateFromFormat(newValue, g_user_date_time_format));

// returns a date object you can test against for date 
// variables/fields
new Date(getDateFromFormat(newValue, g_user_date_format));
```
