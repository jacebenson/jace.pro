---
title: " Instance Upgrade Tips for Moving from London to Madrid  Dos  Donts"
date: 2019-04-22T03:53:27.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=3cce07c4db81b300d82ffb24399619db"
---
<p>Upgrading your production instance requires a lot of planning, testing, and follow-through. The upgrade should be tested thoroughly in sub-production instances before proceeding with production upgrade.</p>
<p style="text-align: center;"><em><a href="http://bit.ly/KB0745434" target="_blank" rel="noopener noreferrer nofollow">Check out my guide for validating upgrades.</a></em></p>
<p>But then still, there are surprises! You might experience an issue on your production upgrade which was not encountered in sub-production upgrade testing. However, many of these can easily be avoided. This post serves as a quick guide to upgrading your ServiceNow instance. It includes 10 upgrade tips (dos and don&#39;ts, if you will) to help you go from our London release to our Madrid release.</p>
<h1>Top 10 instance upgrade tips - do&#39;s &amp; don&#39;ts</h1>
<p>Below is a run-down of the top 10 instance upgrade do&#39;s &amp; don&#39;t list that everyone needs to ensure they have gone through prior to upgrading. </p>
<ol><li>
<p>Review ServiceNow Upgrade Resources</p>
</li><li>
<p>&#34;Full clone&#34; for sub-production testing</p>
</li><li>
<p>Validate schema changes during upgrade</p>
</li><li>
<p>Validate user experience in lower environments during upgrade</p>
</li><li>
<p>Create a Plugin activation and update sets checklist</p>
</li><li>
<p>Test with Automated Test Framework</p>
</li><li>
<p>Validate and compare instance upgrades</p>
</li><li>
<p>Check when the Upgrade is scheduled to run in HI</p>
</li><li>
<p>Check the Timezone of your account on HI</p>
</li><li>
<p> Review the features impacted during an upgrade</p>
</li></ol>
<h2>1. Do Review ServiceNow Upgrade Resources</h2>
<p>The product documentation is your go-to guide to instance upgrades!</p>
<p>ServiceNow product docs, release notes and knowledge articles comprehensively cover all the steps you need to follow to ensure a smooth instance upgrade experience. These should be reviewed well before in time to ensure you are aware of what new features/fixes will come as part of the package of upgrading the instance. The resources listed below should be your go-to resource when you are planning to upgrade:</p>
<ul><li><a href="https://docs.servicenow.com/bundle/london-release-notes/page/release-notes/upgrades/concept/upgrades-overview.html" rel="nofollow">Upgrade your instance</a></li><li><a href="https://docs.servicenow.com/bundle/london-release-notes/page/release-notes/upgrades/reference/upgrade.html" rel="nofollow">How to upgrade</a></li><li><a href="https://docs.servicenow.com/csh?topicname&#61;upgrades-planning-checklist.html" rel="nofollow">Upgrade planning checklists (per release)</a></li><li><a href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0546812" rel="nofollow">Upgrade and patching resources</a></li><li><a href="https://www.servicenow.com/success/instance-upgrades.html" rel="nofollow">Instance upgrades - Customer Success</a></li><li><a href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0678054" rel="nofollow">Upgrade FAQ (Frequent queries received as tickets to tech support)</a></li></ul>
<p> </p>
<h2>2. Do a &#34;Full clone&#34; for sub-production testing</h2>
<p>I am sure everyone is aware that upgrades should always be tested in sub-production instances before upgrading your production instance. However, the catch here is to ensure it is a full clone.</p>
<p>A <em><strong>full clone</strong></em> is one in which you make sure that all the clone options are unchecked except &#39;Preserve theme&#39; as shown below:</p>
<p><img src="https://community.servicenow.com/cbc74fb0db49fb405129a851ca961937.iix" /> </p>
<p>Also, you need to make sure that while doing the upgrade testing in lower environments, test the upgrade in instances that are closest in infrastructure setup as production. So if you have gateways (shards) configured in production, test your upgrade on a lower instance that also has gateways (shards) configured. </p>
<p> </p>
<h2>3. Do validate schema changes during upgrade</h2>
<p>Any schema change made during an alter is recorded in the <em><strong>sys_schema_change</strong></em> table. This table lists all the schema changes made on the instance. Filter the results on this table based on &#39;Created&#39; between the time of the upgrade as shown below where the instance was upgraded between:</p>
<p><img src="https://community.servicenow.com/3dabffc0db49b300d82ffb2439961977.iix" /></p>
<p>Check the &#39;State&#39; field of these records to make sure they are in the &#39;Complete&#39; state and gives an error message. If you see any as schema change errors, <a href="https://hi.service-now.com/hisp" target="_blank" rel="noopener noreferrer nofollow">contact ServiceNow Customer Support</a> to validate the issue. Best to do this in your lower environment prior to the production upgrade to make sure you are not up for surprises.</p>
<p> </p>
<h2>4. Validate user experience in lower environments during upgrade</h2>
<p>When your sub-production instance is upgrading, log into the instance and perform a few basic test use cases like accessing dashboards, reviewing knowledge articles etc to ensure that you do not see any impact on user experience during the upgrade. If there is, feel free to reach out to ServiceNow Customer Support to understand if it is expected behaviour or not.</p>
<p> </p>
<h2>5. Do create a Plugin activation and update sets checklist</h2>
<p>The most common activity post-upgrade is to commit update sets which migrate your customizations from your development to production instance.  This activity should be thoroughly tested in a recently cloned and upgraded sub-production instance (not your development instance) to ensure the update sets commit activity does not run into errors.</p>
<p>Many times, these customizations are on top of some plugins activated in development instance. When you migrate these update sets to production, prior to committing, make sure the relevant dependent plugins are committed. If these plugins are not activated prior to committing of update sets, it can lead to unexpected results. So to avoid this issue from happening, <strong>create a plugin activation and update set checklist during your testing phase. </strong></p>
<p>Also, some plugins require a subscription in production. Make sure you have the associated subscription beforehand as subscription requires a few business days to process through.</p>
<p> </p>
<h2>6. Don&#39;t get frustrated with instance upgrade testing</h2>
<p>Automated Test Framework (ATF) to the rescue!</p>
<p>Test, test and retest! Upgrade testing can be time-consuming and resource intensive but ServiceNow&#39;s ATF framework can help ease out that frustration. In Madrid, you can copy and customize <span class="ph">ServiceNow</span>-provided quick start tests to validate that your instance still works after you make any configuration changes such as apply an upgrade or develop an application. </p>
<p><iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/wp8NOxYeTDE"></iframe></p>
<p>Use this feature to ease your way through upgrade testing and have reusable test cases to use over and over again with each new upgrade.</p>
<ul><li><a href="https://docs.servicenow.com/bundle/madrid-application-development/page/administer/auto-test-framework/concept/automated-test-framework.html" rel="nofollow">Automated Test Framework</a></li><li><a href="https://docs.servicenow.com/bundle/madrid-application-development/page/administer/auto-test-framework/concept/atf-intro.html" rel="nofollow">Getting started with Automated Test Framework</a></li></ul>
<p> </p>
<h2>7. Do validate and compare instance upgrades</h2>
<p>ServiceNow&#39;s &#34;Upgrade History&#34; module is your go-to place to validate an instance upgrade. It will list all the changes applied or skipped by the upgrade. Review these skipped changes to ensure that you are not missing on any new enhancement - may be a chance to revert your customization in favor of improved platform in-built feature.</p>
<p style="text-align: center;"><em>As they say, the lesser the customizations, the lesser the hassle to validate each upgrade.</em></p>
<p>If you notice any customization that was updated by the upgrade when it shouldn&#39;t have or the number of updates applied across two instances does not match, review these using the troubleshooting tips mentioned here to confirm if it was a valid update or not.</p>
<p>For more information see <a href="http://bit.ly/KB0745434" target="_blank" rel="noopener noreferrer nofollow">How to validate and compare upgrades.</a></p>
<p>  </p>
<h2>8. Do double-check when the Upgrade is scheduled to run in HI</h2>
<p><em>&#34;I have resources waiting on an upgrade to complete that hasn&#39;t started! Help! - Part 1&#34;</em></p>
<p>On the day of the upgrade, you&#39;ll have done all your pre-upgrade activities and have resources on standby for post upgrade activities and then you notice that at the time of the scheduled start of the upgrade, the upgrade does not kick in. The upgrade change request in HI has not moved to &#39;Implement&#39; state. But why?</p>
<p>The most common reason for this is the &#39;Next action&#39; field on the Upgrade job. The timestamp here will determine when the upgrade will kick off on the instance. This job is an hourly job so in the worst case, the upgrade will kick in within an hours time from the scheduled start time of the upgrade. But to avoid this time lost, remember to always schedule your change request for Upgrade around the time the hourly upgrade job will run.</p>
<p>The hourly job is defined here in the instance <strong>System Scheduler-&gt; Scheduled Jobs -&gt; Search for job called Upgrade</strong>:</p>
<p><img src="https://community.servicenow.com/27bb4890db4db300d82ffb2439961977.iix" /></p>
<p>In the above instance, the upgrade runs every hour at around the 37th min. If the upgrade is scheduled for, say 2019-04-22 10:00:00 in HI, the upgrade won&#39;t be picked by the instance till 10:37 as that is when the job runs. The best time, in this case, would be to schedule the upgrade at 2019-04-22 10:30:00.</p>
<p> </p>
<h2>9. Do check the Timezone of your account on HI</h2>
<p><em>&#34;I have resources waiting on an upgrade to complete that hasn&#39;t started! Help! - Part 2&#34;</em></p>
<p>It can also be that the scheduled time on the upgrade in HI was not set properly. It has happened that sometimes, the user setting up the change request for an upgrade in HI, sets up the upgrade start time based on their instance timezone but their timezone in HI is different. Always ensure that your timezone in HI matches your timezone in the instance. So if you are planning to upgrade the instance on say, 2019-04-22 10:30:00 PDT in the instance, make sure you set your timezone as PDT in HI before submitting the change request.</p>
<p>Timezones can make a big difference! </p>
<p> </p>
<h2>10. Do review the features impacted during an upgrade </h2>
<p>Make sure you have an understanding of <a href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0622951" rel="nofollow">what features are impacted during upgrades</a> to avoid any surprises!</p>
<p>One, in particular, to know beforehand is that during an upgrade, only upgrade safe jobs run. What that means is jobs in the sys_trigger table that have the &#34;Upgrade Safe&#34; flag set as true will be the only jobs that run during the upgrade.</p>
<p><img src="https://community.servicenow.com/2ead40d8db4db300d82ffb243996193b.iix" /></p>
<p>All upgrade unsafe jobs continue execution as soon as the upgrade completes.</p>
<p><em><strong>Note: </strong></em></p>
<ul><li>Do not change the upgrade_safe flag on any record to upgrade_safe&#61;true.</li><li>All custom sys_triggers <strong>must</strong> be marked upgrade_safe&#61;false to avoid any unexpected results during upgrades.</li></ul>
<p>---</p>
<p> </p>
<p> </p>
<p> Each ServiceNow release offers new and interesting features, applications, and functionality to enhance your work experience. To take advantage of these benefits, a safe and efficient upgrade can make it easy to move from London to Madrid! I hope these 10 Instance Upgrade tips have been helpful. </p>
<p style="text-align: center;">Also, check out my <a href="http://bit.ly/KB0745434" target="_blank" rel="noopener noreferrer nofollow">guide for validating and comparing upgrades</a>.</p>
<p style="text-align: center;">If you have upgrade questions feel free to drop them below!</p>
<p> </p>