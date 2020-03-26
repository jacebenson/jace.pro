---
title: "Tips for streamlining ServiceNow upgrades  podcast and best practices"
date: 2018-03-14T19:10:50.000Z
authors: ["Dawn Jurek"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=cc7ebd56db385f402e247a9e0f961945"
---
<p>Upgrading your instance allows your organization to get the latest features, increase productivity, and avoid known issues and bugs. In short, <strong>regular upgrades reduce risk while increasing productivity</strong>.</p>
<p>In this installment of our <a title="" href="community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" rel="nofollow">NOWSupport best practices series</a>, we offer these tried-and-true tips for streamlining the process of upgrading an instance, gleaned from our ServiceNow experts who have many years of experience in assisting customers with upgrades. </p>
<p>One of these experts, <a href="community?id&#61;community_user_profile&amp;user&#61;7ae05a61db981fc09c9ffb651f9619a2" rel="nofollow">Chuck Tomasi</a>, is featured in our Upgrades podcast where he and our own <a href="community?id&#61;community_user_profile&amp;user&#61;ae011ae1db981fc09c9ffb651f961937" rel="nofollow">Steve Miller</a> discuss the points we touch on here, but in greater depth.</p>
<h3><strong><a href="https://omny.fm/shows/servicenow-techbytes/episode-40-upgrades" rel="nofollow">ServiceNow TechBytes Episode 40: Upgrades</a></strong></h3>
<p>Note that these best practices and more will be available soon on the <a href="https://www.servicenow.com/success.html" rel="nofollow">Customer Success Center</a>, to be launched at the <a href="https://knowledge.servicenow.com/" rel="nofollow">Knowledge 18 Conference</a>.</p>
<h3>1. Use project management practices for your upgrades</h3>
<p>Managing your upgrade like any other formal IT project provides stakeholders with visibility into the time, resources, and costs associated with testing and remediation.</p>
<p>You can use the <a href="https://docs.servicenow.com/bundle/kingston-it-business-management/page/product/project-management/concept/c_ProjectApplicationOverview.html" rel="nofollow">Project Management</a> application within the ServiceNow platform, which provides a suite of tools for managing every aspect of a project. </p>
<h3>2. Follow the documented upgrade process</h3>
<p>To find the documented upgrade process for any release, access the product documentation (<a href="https://docs.servicenow.com" rel="nofollow">docs.servicenow.com</a>), go to the release notes of the target release, and search for <strong>upgrade your instance</strong>. Here&#39;s the <a href="https://docs.servicenow.com/bundle/kingston-release-notes/page/release-notes/upgrades/concept/upgrades-overview.html" rel="nofollow">Upgrade your instance page for Kingston</a>.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="6bb1121adbf49f402e247a9e0f961937.iix" /></p>
<p>And be sure to bookmark or download our Upgrade planning checklist for the target release. Here&#39;s the <a href="https://docs.servicenow.com/bundle/kingston-release-notes/page/release-notes/upgrades/upgrades-planning-checklist.html#upgrade-planning-checklist" rel="nofollow">Upgrade planning checklist for Kingston</a> in PDF format:</p>
<p> <img style="max-width: 100%; max-height: 480px;" src="ccc06e9edbf0df402e247a9e0f96192a.iix" /></p>
<p> </p>
<h4>Upgrade non-production instances, THEN upgrade production</h4>
<p>We recommend that you apply the upgrade process to all of your non-production instances, THEN upgrade your production instance. This allows you to catch issues early and remediate them. Start by upgrading your <strong>sandbox</strong> instance (if you have one), then your <strong>development </strong>instance, then your <strong>test </strong>instance.</p>
<p>Follow this sequence for each non-production instance:</p>
<ol><li>Clone from production</li><li>Upgrade to target release</li><li>Review skipped changes</li><li>Test per your test plan</li><li>Remediate any issues</li></ol>
<h3>3. Review skipped changes</h3>
<p>Skipped changes are customizations introduced by the customer, which are not touched during the upgrade process. A feature added in the Jakarta release, <strong>Review Skipped Changes</strong>, allows you to review these skipped changes within the <strong>Upgrade History</strong> module. </p>
<h4>To review skipped changes:</h4>
<ol><li>Navigate to <strong>System Diagnostics &gt; Upgrade History</strong>.</li><li>Open the record for the applicable system upgrade. In the <strong>Skipped Changes to Review</strong> related list, open a record to review the skipped change.</li></ol>
<p><img style="max-width: 100%; max-height: 480px;" src="d6f62712dbf093802e247a9e0f96196d.iix" /> </p>
<p>This feature allows you to easily prioritize skipped changes. For example, you can ignore all field label changes.</p>
<h3>4. Create/maintain test plans</h3>
<p>We recommend creating test plans for your upgrade, so that you can clearly document the tests you want to run, test steps, and the expected results.</p>
<p>Two applications available for use within the platform are <a href="https://docs.servicenow.com/bundle/kingston-it-business-management/page/product/test-management/concept/c_TestManagement.html" rel="nofollow"><strong>Test Management</strong> </a>and the <strong><a href="https://docs.servicenow.com/bundle/kingston-application-development/page/administer/auto-test-framework/concept/atf-overview.html" rel="nofollow">Automated Test Framework</a></strong>.</p>
<ul><li><strong>Test Management</strong> allows you to manage all phases of the testing process. </li><li><strong>Automated Test Framework</strong> allows you to create automated tests and test suites that you can run at the click of a button. This application is free of charge.</li></ul>
<p>To learn more about the Automated Test Framework, see our blog post <a href="community?id&#61;community_blog&amp;sys_id&#61;1a4e66addbd0dbc01dcaf3231f96192f" rel="nofollow">Best practices for using ATF</a>.</p>
<p>Note that ServiceNow is not trying to replace existing test tools, such as Selenium. We incorporate these options into the platform to give you other options you can use to make your testing more efficient.</p>
<h3>5. Streamline future upgrades</h3>
<h4>Hold a retrospective </h4>
<p>After the upgrades are done, hold a retrospective to see what worked well, and what you could do differently next time to make your next upgrade more seamless.</p>
<h4>Scrutinize customizations</h4>
<p>When you&#39;re thinking about customizations within your instance, be sure to understand the cost. Making changes to a business rule or a script include provided by ServiceNow could have ramifications.</p>
<p>In addition to the time and effort to implement and test a customization in your current release, you need to consider:</p>
<ul><li>What level of effort will be required to support this change each time your organization needs to upgrade?</li><li>Can you follow ServiceNow&#39;s recommended best practices with this implementation to avoid future upgrade issues?</li></ul>
<p>Always ask yourself and your team: <em><strong>Is it worth it?</strong></em></p>
<p>For example, here&#39;s a common bad practice (documented in our <a href="https://developer.servicenow.com/app.do#!/catlist/technical_best_practices?v&#61;kingston" rel="nofollow">Technical Best Practices</a>) that you&#39;ll want to avoid:</p>
<p>When contemplating a customization that manipulates the DOM, or Document Object Model, know that such customizations can cause upgrade issues down the road. Why? Because if ServiceNow changes anything in the DOM (which is common with User Interface changes), your script could break.</p>
<h3>For more information</h3>
<p><a href="https://docs.servicenow.com/bundle/kingston-release-notes/page/release-notes/upgrades/reference/upgrade.html" rel="nofollow">Upgrade to Kingston</a> (product documentation)</p>
<p><a href="https://docs.servicenow.com/bundle/kingston-it-business-management/page/product/test-management/concept/c_TestManagement.html" rel="nofollow">Test Management</a> (product documentation)</p>
<p><a href="https://docs.servicenow.com/bundle/kingston-application-development/page/administer/auto-test-framework/concept/atf-overview.html" rel="nofollow">Automated Test Framework</a> (product documentation) </p>
<p><a href="community?id&#61;community_blog&amp;sys_id&#61;1a4e66addbd0dbc01dcaf3231f96192f" rel="nofollow">Best practices for using ATF</a> (Community blog post)</p>
<p>--</p>
<p>Behind the scenes here at ServiceNow, the Knowledge Management and Multimedia teams work closely with subject matter experts to disseminate critical information to our customers. We&#39;ve found that certain topics come up frequently, in the form of best practices that can help you keep your ServiceNow instances running smoothly. This series targets those topics so that you and your organization can benefit from our collective expertise. If you have a best practices topic you&#39;d like us to cover in this series, please let us know in the comments below.</p>
<p> </p>
<p>To access all of the blog posts in this series, see our <a title="" href="community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" rel="nofollow">NOWSupport best practices series list.</a></p>
<p> </p>