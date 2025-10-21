---
title: Creating actionable email links
description: "The other day\_Chris Perry asked how to create a link in a notification to assign a record to themselves and load up the newly assigned record.\r\n\r\nTo do this ..."
date: '2018-07-03'
tags:
  - servicenow
  - gliderecord
  - client-scripts
  - notifications
  - javascript
  - xml
  - tutorial
redirectFrom:
  - /creating-actionable-email-links/
---

<!--StartFragment-->

The other day [Chris Perry asked](https://community.servicenow.com/community?id=community_question&sys_id=37113a00dbc39704d58ea345ca9619e8) how to create a link in a notification to assign a record to themselves and load up the newly assigned record.

To do this you'd have change your email to the user, so show the link and then load a page that knew the task and have it redirect. This is what I came up with. A UI page with the following code does it.

<!--EndFragment-->

<!--StartFragment-->

```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
  <g2:evaluate var="jvar_unwrapped_url" jelly="true">
    var currentUser = gs.getUserID();
    var incidentFromURL = RP.getParameterValue('incident');
    var link = '';
    var incident = new GlideRecord('incident');
    if(incident.get('number', incidentFromURL)) {
      incident.setValue('assigned_to', currentUser);
      incident.update();
      gs.addInfoMessage(incident.getDisplayValue() + ' has been updated.');
      //gs.sendRedirect(incident.getLink());
      link = incident.getLink();
    }
    link || 'incident.do?sysparm_query=number=' + incidentFromURL;
  </g2:evaluate>
  ${gs.getMessage("Redirecting to your the incident")}...
</j:jelly>
```

<!--EndFragment-->

## Client Script

<!--StartFragment-->

```javascript
document.location.href = "$[JS:jvar_unwrapped_url]";
```

<!--EndFragment-->