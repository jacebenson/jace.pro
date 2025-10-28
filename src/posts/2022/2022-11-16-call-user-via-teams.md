---
title: Call User via Teams
description: "Ajay Chavan wrote up a post about Adding \r\na Teams link to the user form and I thought \r\nit was great.  So I'm sharing it here with\r\nmy spin on it..  Here's ..."
date: '2022-11-17'
tags:
  - servicenow
  - gliderecord
  - xml
  - integration
redirectFrom:
  - /call-user-via-teams/
  - /p/2022-11-16-call-user-via-teams/
---

Ajay Chavan wrote up a post about Adding 
a Teams link to the user form and I thought 
it was great.  So I'm sharing it here with
my spin on it..  Here's [his post about it though](https://www.servicenow.com/community/it-service-management-articles/service-now-microsoft-teams-integration/ta-p/2301655).

## UI16/Next Experience
1. Download a teams icon, I got mine [here](https://statics.teams.cdn.live.net/hashed/favicon/prod/favicon-32x32-4102f07.png)

2. Upload the image to System UI > Images with a name of "teams.png"

2. Create a UI Macro called `incident_caller_teams_button`.

```xml
<?xml version="1.0" encoding="utf-8"?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
  <g:evaluate var="jvar_guid" expression="gs.generateGUID(this);" />
  <j:set var="jvar_n" value="show_incidents_${jvar_guid}:${ref}" />
  <a class="ref-button btn btn-default btn-ref" id="${jvar_n}" onclick="invokeChat('${ref}');">
    <img src="teams.png" width="30" title="Popup Teams" alt="${gs.getMessage('Click to open Teams chat')}" />
  </a>
  <script>
function invokeChat(reference) {
  var tableAndField = reference.split('.');
  var table = tableAndField[0]
  var field = tableAndField[1]
  var userSysId = g_form.getValue(field);
  var email;
  var sysUser = new GlideRecord('sys_user');
  if (sysUser.get(userSysId)) {
    email = sysUser.getValue('email');
    var teamsLink = 'https://teams.microsoft.com/l/chat/0/0?users=' + email;
    var w = getTopWindow();
    w.open(teamsLink);
  }
}
  </script>
</j:jelly>
```

3. From the list view of the macro set the Media Type[`media_type`] to `doctype`

2. Update the Caller ID's attributes to include the macros name as a ref_contribution like so;`ref_contributions=user_show_incidents;incident_caller_teams_button`

3. Upload an attachment called teams.png with the teams logo.