---
title: "Send notifications for approval workflow of Knowledge articles"
date: 2019-11-01T11:35:58.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=f173b65adb3c44945129a851ca9619c4"
---
<p>When an author sends an article for approval to Knowledge Managers or to an Ownership group, they would like to be notified when the article is approved or rejected. The approvers would also want a notification that an article is awaiting for their approval.</p>
<p>In New York, email notifications for approval workflow was added in Knowledge Management. When an article is sent for approval, the approvers get an email notification. Then if the article is approved or rejected, the author gets an email notification.</p>
<ul><li>For <strong>net new customers on New York (and future releases)</strong>, these notifications are active by default.</li><li>For<strong> customers upgrading to New York (or later releases from a pre-New York release)</strong>, these notifications are not activated by default. This is because customers might have built their own notifications for article approvals, and we did not want to send multiple notifications for the same action.</li><li>
<ul><li>If customers want to enable article approval notifications, they can check if the property glide.knowman.enable_approval_notification is present in sys_properties table.</li><li>If yes, they can set the property to <em>true</em>.</li><li>If the property is not present in sys_properties table, an admin can add a new property of the same name of type (true | false), and set the value to <em>true</em> (see screenshot below).</li></ul>
</li></ul>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/4972ae13dbfc4c14f7fca851ca96197f.iix" /></p>