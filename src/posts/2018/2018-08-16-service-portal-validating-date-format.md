---
title: 'Service Portal: Validating Date Format'
description: "Someone had asked how to do some \"How to verify a date format in service portal?\"\r\n\r\nThis came up in a chat I was having this week.\r\n\r\nTo use the\_g_user_date..."
date: '2018-08-16'
tags:
  - servicenow
  - service-portal
  - service-catalog
  - javascript
  - tutorial
redirectFrom:
  - /service-portal-validating-date-format/
  - /p/2018-08-16-service-portal-validating-date-format/
---

<!--StartFragment-->

Someone had asked how to do some "[How to verify a date format in service portal?](https://community.servicenow.com/community?id=community_question&sys_id=71098fa1db5cdbc01dcaf3231f961929)"

This came up in a chat I was having this week.

To use the `g_user_date_format`, `g_user_date_time_format` and `getDateFromFormat()`, you would have to re-include the JS file that declares these variables.

To do that go to the widget where you get a failure message and add a new dependency to a new UI script where you copy/paste the code from <https://hi.service-now.com/scripts/calendar.js>.

Then all your old calls ought to work as described in other posts.

<!--EndFragment-->

<!--StartFragment-->

```javascript
// returns a date object you can test against for date/time 
// variables/fields
new Date(getDateFromFormat(newValue, g_user_date_time_format));

// returns a date object you can test against for date 
// variables/fields
new Date(getDateFromFormat(newValue, g_user_date_format));
```

<!--EndFragment-->