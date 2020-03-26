---
title: "Nonadmin users having permission issues on some knowledge fields This is why"
date: 2019-02-12T06:04:28.000Z
authors: ["shruti.tyagi"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=14590cc6dbe7af804abd5583ca9619bc"
---
<p>Have an issue with non-admin users unable to see some knowledge fields or unable to make modifications in the knowledge article after migrating to Knowledge V3? Read on.</p>
<p>Migrating from Knowledge Management V2 to Knowledge Management V3 may cause permission issues on knowledge fields for users who are not admins. Non-admin users on some of the kb_knowledge fields, depending on the field level ACLs on kb_knowledge, are not able to make changes or even view certain knowledge fields.</p>
<h3>How you will know this issue affects you: </h3>
<ol><li>Non-Admin user unable to see some fields in the knowledge list or form</li><li>Non-admin user unable to make changes to knowledge record</li></ol>
<h3>Impacted Versions:</h3>
<p>This issue can potentially exist where articles already exist and custom ACLs are defined on the kb_knowledge and kb_feedback tables.</p>
<p>This issue is more likely to manifest after the upgrade to <a href="https://docs.servicenow.com/bundle/kingston-release-notes/page/release-notes/quality/kingston-patch-12.html" target="_blank" rel="noopener noreferrer nofollow">Kingston Patch 12</a> and <a href="https://docs.servicenow.com/bundle/london-release-notes/page/release-notes/quality/london-patch-3.html" target="_blank" rel="noopener noreferrer nofollow">London Patch 3</a> due to the change in the way scripted user criteria are cached.</p>
<h1>How to workaround non-admin permission issue on knowledge fields: </h1>
<p>Admins can easily workaround the issue by adding  &#34;<strong>answer&#61;</strong>&#34; in front of the ACL script that has the issue.</p>
<p> </p>
<table border="&#34;1&#39;"><tbody><tr><td>
<p>Here is one example:<br /><br />answer &#61; new KBKnowledge().canRead(current);</p>
<p> </p>
</td></tr></tbody></table>
<p> </p>
<p><strong>More information:</strong></p>
<p>1. Please subscribe to this known error article <a href="http://bit.ly/KB0724514" target="_blank" rel="noopener noreferrer nofollow">KB0724514</a> for more details on how to locate the problem ACLs.</p>
<p>2. Admins can debug which field level ACLs are failing for the user using <a href="https://docs.servicenow.com/bundle/london-platform-administration/page/administer/contextual-security/concept/c_AccessControlRulesDebug.html" rel="nofollow">ACL debugging tools</a>.</p>
<p> </p>
<p>This is an existing problem in the platform and development team is actively working on the fix. </p>
<p> </p>