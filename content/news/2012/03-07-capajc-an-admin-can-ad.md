---
title: "An admin can add Domain separation to a table"
date: 2012-03-07T01:06:28.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=732e6a6ddbd0dbc01dcaf3231f9619d2"
---
<p>If you are an admin, you can add Domain separation to a custom or out-of-box table that isn't currently separated. Just create a new field in that table, when personalizing the list or form for that table, and name the field "sys_domain". Don't worry about field type. When you save, the field gets created without the usual u_ prefix, with internal type "domain_id", a label of "Domain" is automatically created for it, and existing records in that table get automatically set to the "global" domain.<br /><br />Use with caution, obviously, but I thought this was pretty cool when I discovered it recently.</p>