---
title: "Problem Management  Upgrade path for existing customers"
date: 2019-03-21T22:18:10.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=1bb8d282db54bf8454250b55ca961938"
---
<p>We previously looked at <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;bcd7de82db14bf8454250b55ca9619f1" rel="nofollow">the feedback that led to the Madrid baseline</a> and <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;b578524edb14bf8454250b55ca96193d" rel="nofollow">what’s new in Madrid</a> for problem management. We’ll wrap up this 3-part series by taking a look at the upgrade options for existing customers.</p>
<p><em>** Updated to mention a new option for base problem (which is the newer way to say out-of-the-box or OOB) without records. This applies to Madrid and later releases and make it clearer in option 2 that the state model plugin can only be activated when you engage Customer Outcomes or a partner.</em></p>
<p>The Problem Madrid state model plugin was introduced as part of Madrid, but also applies to later releases.</p>
<h2>Minimal changes when you upgrade to Madrid</h2>
<p>In case you have a customized version of problem management we minimized the changes that will be applied when you upgrade to Madrid (or a later release). The Post News related link will only be available to your problem team if you are still using the older Knowledge Management version 2 and you have not activated the Madrid problem management best practices plugin.<br /><em>Note: Post News was deprecated starting with Knowledge Management version 3.</em></p>
<h2>Upgrade options</h2>
<p>The new best practice state model states and guided actions are <span style="text-decoration: underline;">not</span> compatible with the previous version of problem management and require verification before this plugin can be activated which is why the state model plugin cannot be activated by an admin.</p>
<p>We are working on a migration utility (for early Q2 2020) that your admin will use to perform the verification and at a high-level will:</p>
<ul><li>Help you check for customizations on your instance that would prevent the state model plugin from being activated.</li><li>Help you map your old states to the new best practice states.</li><li>Help you migrate your records.</li><li>Provide a list of clean-up activities your admin can do on your instance now you have migrated.</li></ul>
<p>For now, choose from one of the two following options when you upgrade to Madrid (or a later release).</p>
<h3>Option 1 – Stick with your existing version of problem management</h3>
<p>Do not activate any of the Madrid problem management best practices plugins. This will ensure your existing problem management process will function as it did prior to the upgrade. You can then wait until the migration utility is released to implement the new Madrid process on Madrid (or a later release).</p>
<h3>Option 2 – Implement the new Madrid process</h3>
<p>The benefit of doing this is that your problem management process will be aligned with the base design which means easier upgrades to future features and functionality.</p>
<p><em>Note: Base problem is the newer way to say out-of-the-box problem (OOB).</em></p>
<p>Until the migration utility is released, there are two scenarios: </p>
<h4 style="padding-left: 30px;">Scenario 1 - You are using the base version of problem management without any records to migrate</h4>
<p style="padding-left: 30px;"><em>Note: The base version of problem management means nothing has been added, modified or removed from problem management on the instance.</em></p>
<p style="padding-left: 30px;">From mid-December 2019, this scenario has been added for customers who:</p>
<ul><li>Are using the base version of problem management.</li><li>Do not have any problem records.</li><li>Do not have any problem task records.</li></ul>
<p style="padding-left: 30px;">For this specific scenario, you can request that the Problem state model plugin be activated on your instance.</p>
<ol><li>Navigate to the HI Service Portal: <a href="https://hi.service-now.com/hisp" rel="nofollow">https://hi.service-now.com/hisp</a></li><li>Navigate to: <strong>Service Catalog</strong> &gt; <strong>Activate Plugin</strong></li><li>Plugin Name: <strong>com.snc.best_practices.problem.madrid.state_model</strong></li><li>Reason/Comments: <strong>Migrating from base problem.</strong></li></ol>
<p style="padding-left: 30px;">As part of the request your instance will be verified to make sure you are on the base version of problem management without any records.</p>
<p style="padding-left: 30px;">If the verification passes, the plugin will be activated and you will be sent clean-up instructions your admin follows to remove old items not required by the Problem state model plugin.</p>
<p style="padding-left: 30px;">If the verification fails, then you are not on the base version of problem or you have records to migrate, refer to scenario 2 for more information.</p>
<p style="padding-left: 30px;"><em>Note: If you do choose to request Problem state model plugin make sure you practice on a sub-production clone of a production instance as it is likely to take some time to understand how to perform the migration successfully.</em></p>
<p style="padding-left: 30px;"> </p>
<h4 style="padding-left: 30px;">Scenario 2 - You are not on the base version of problem management or you have records to migrate</h4>
<p style="padding-left: 30px;">The challenge is that until the migration utility is released, apart from the above base scenario, there is no way to verify the instance and migrate data to the new states especially for highly customized versions of problem management.</p>
<p style="padding-left: 30px;">As the migration utility is not yet available, you need to engage with ServiceNow Customer Outcomes (formerly known as Professional Services) or a partner to assist you with the verification and migration as they already have a migration approach. You can also contact your ServiceNow Account Representative or Solution Consultant regarding verification and migration.</p>
<p style="padding-left: 30px;"><em>Note: If you choose to handle the migration without ServiceNow assistance then you will not be able to activate the state model plugin on your system until the migration utility is released. If you do choose to activate the other Problem Madrid plugins make sure you practice on a sub-production clone of a production instance as it is likely to take some time to understand how to perform the migration successfully. </em></p>
<h2>Next steps</h2>
<p>Thanks for joining me for this 3-part series on problem management for the Madrid or later release. You can read more about the Madrid problem management release in the <a href="https://docs.servicenow.com/bundle/madrid-it-service-management/page/product/problem-management/concept/c_ProblemManagement.html" rel="nofollow">documentation</a> and <a href="https://docs.servicenow.com/bundle/madrid-release-notes/page/release-notes/it-service-management/problem-management-rn.html" rel="nofollow">release notes</a>.</p>