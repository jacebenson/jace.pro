---
title: "Hiding follow on tables in ServiceNow"
permalink: /hiding-follow-on-tables/
author: Jace Benson
image: /static/img/hiding-follow-on-tables-in-servicenow.png
date: 2025-03-31T07:28:42.310Z
draft: false
stage: published
prism: false
---
 To remove the “Follow” button, you can do this by disabling the live_feed in the dictionary of the collection record.

Goto the sys_dictionary table and look for the table where the type is collection.

Add live_feed=false, if there’s already something there put a comma before this.

Thanks [Ankur for posting this](https://www.servicenow.com/community/developer-forum/discuss-and-follow-buttons/td-p/3187907?utm_source=jace.pro&utm_medium=referral&utm_campaign=hiding-follow-on-tables-in-servicenow).