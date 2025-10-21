---
title: Activity Streams ACLs changed in Paris
description: >-
  The other day Matt (mhz) was answering a question about form activity streams
  visiblity for emails. He had recently opened a support case and shared that on
  ...
date: '2021-08-13'
tags:
  - notifications
  - acl
  - release-paris
  - troubleshooting
  - security
redirectFrom:
  - /activity-streams-acls-changed-in-paris/
---

The other day Matt (mhz) was answering a question about form activity streams visiblity for emails. He had recently opened a support case and shared that on Slack.

Here's my understanding of what was conveyed.

1. There's two gates to view emails on activity streams
2. The first gate is if the logged in user has roles matched with sys_property `glide.ui.activity.email_roles`
3. The second gate (new in Paris) leverages reader ACLs against the user.

> Basically this is '2 gates to viewing an Email within the Activity Stream', 1st gate 'glide.ui.activity.email_roles' will let user of the roles defined see the "Show Email Details" section regardless the content being displayed, while post-PRB1406163 (since Paris) the added logic in processor (2nd gate) will leverage email reader ACLs against the user to determine if the content can be displayed to the user or not - even the user is permitted to see the "Show Email Details" section due to his role being added into 'glide.ui.activity.email_roles'.
>
> From Dev:
>
> EmailDisplayProcessor controls ability to see email body. Thus fixing PRB1406163 was about respecting the sys_email ACL when the processor loaded this email for viewing. (Meaning it has not relied on activity stream specific properties like glide.ui.activity.email_roles.)\
> In particular: this 'glide.ui.activity.email_roles' property is checked to determine whether to show the "Show Email Details" link that can be clicked. Then if the link appears, then the EmailDisplayProcessor will open and respect the sys_email ACLs from there.
>
> There are 2 gates to viewing an Email within the Activity Stream. The property glide.ui.activity.email_roles is still effective and determines which roled users are able to see Emails in the Activity Stream. There are cases where not all users containing one of the roles should see every email on the target record. Consider the case where a notification generates an email containing a randomly generated password. Due to security concerns, rather than displaying the email body to all users, you might want only the recipient of the email to have read access. The OOB email read ACL specifically handles emails containing sensitive content such as the PW example, by evaluating Email Access Restriction records (sys_email_access_restriction).
>
> The customer has added the 'admin' role to their sys_email table READ ACL, which indicates that only admins should have read access to email records. They certainly could revert the change in the Email Display processor to begin seeing emails again, but that also re-introduces the security concern that a user will be able to view an email that they shouldn't have access to. My suggestion would be to leave the Email Display processor as is and update the email read ACL to accurately reflect who should be able to read an email record.
>
> So even quick fix is reverting email processor logic to pre-Paris, but as dev said it "re-introduces the security concern that a user will be able to view an email that they shouldn't have access to.".
>
> Please consider the suggestion from Dev - add the role of the users to the email read acl, so the users will be able to see the email records, then based on the logic of the process, they will be able to see the email content in Activity Stream (along with the "Show Email Details" section due to the defined role in 'glide.ui.activity.email_roles')\
> https://.service-now.com/nav_to.do?uri=sys_security_acl.do?sys_id=8de12cdfc0a8016701fdf6b2bdb041cb
>
> Thank you Matt for sharing this!