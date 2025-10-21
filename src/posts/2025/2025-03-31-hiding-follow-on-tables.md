---
title: Hiding follow on tables in ServiceNow
description: "To remove the “Follow” button, you can do this by disabling the live_feed in the dictionary of the collection record.\r\n\r\nGoto the sys_dictionary table and lo..."
date: '2025-03-31'
tags:
  - servicenow
redirectFrom:
  - /hiding-follow-on-tables/
---

To remove the “Follow” button, you can do this by disabling the live_feed in the dictionary of the collection record.

Goto the sys_dictionary table and look for the table where the type is collection.

Add live_feed=false, if there’s already something there put a comma before this.

Thanks [Ankur for posting this](https://www.servicenow.com/community/developer-forum/discuss-and-follow-buttons/td-p/3187907?utm_source=jace.pro&utm_medium=referral&utm_campaign=hiding-follow-on-tables-in-servicenow).