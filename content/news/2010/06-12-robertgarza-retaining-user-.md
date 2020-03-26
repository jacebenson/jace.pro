---
title: "Retaining user history when User ID has Changed"
date: 2010-06-12T03:24:25.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=00ccae25dbd0dbc01dcaf3231f9619af"
---
<p>We have had to rename certain userid/emails in Active Directory. This creates a duplicate entry for the caller name in the sys user table due to the LDAP refresh. We found that if the old user record is deactivated we loose the caller's ticketing history. Is there a way to make the new account retain the old sysid before a deactivation is performed on the old account?</p>