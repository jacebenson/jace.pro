---
title: "Pushig Catalog Item Variables to the Parent Request"
date: 2009-11-18T00:31:42.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=202ee26ddbd0dbc01dcaf3231f9619f1"
---
<p>I have request item form that has variables that I would like to push to the parent request. I need to do this via a workflow script. I have tried various iterations of the following:<br /><br />current.request.description = current.variable_pool.ticket_descriptrion;<br /><br /> OR<br /><br />current.request.description.setDisplayValue(current.variable_pool.ticket_descriptrion.getDisplayValue));<br /><br /><br />Any suggestions would be appreciated!</p>