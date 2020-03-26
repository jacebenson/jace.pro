---
title: "London Release Assigning admin and securityadmin roles"
date: 2018-07-31T14:31:11.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=be63f4cbdb2f130054250b55ca96192e"
---
<p>With the release of London there are a few  small but significant new features that ServiceNow admins might notice, one of these is the change to how the admin and security_admin roles are assigned in London.</p>
<p>In particular the security_admin role in London can now only be assigned by a user who has that role themselves, previously an admin was able to assign the security_admin role to any user, including themselves.</p>
<p style="text-align: center;"><img src="f1612097db735b0067a72926ca9619a3.iix" /></p>
<p>This is significant because previously it was not uncommon for someone to create an admin account for a fellow developer and only assign the admin role. The new admin could then login and assign themselves the security_admin role if they needed to work with ACLs etc.</p>
<p>This change also applies to the assigning of these roles via groups.</p>
<p>So next time you create an admin account for someone and you intend them to also have security_admin role, be sure to make sure you assign it to them explicitly! And don&#39;t forget if you have any break glass admin accounts stored in a password safe, best to make sure they have the security_admin role too.</p>
<p style="text-align: center;"><img src="3fd1a8dbdb735b0067a72926ca961909.iix" width="600" /> </p>