---
title: "Alert Suppression During Maintenance Windows and Change Implementations"
date: 2018-09-12T19:51:12.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=3d099378db286744200f0b55ca96190d"
---
<p><strong><u>Alert Suppression During Maintenance Windows and Change Implementations</u></strong></p>
<p>Most organizations have gotten proficient at monitoring their critical services and infrastructure.  In the majority of the environments I encounter there are anywhere from 3-10 monitoring tools generating events tools for monitoring user experience at the application level, synthetic user transactions, Operating System monitoring, database monitoring, network monitoring, storage monitoring…etc.  With all of this monitoring capacity, many companies are struggling to operationalize all of the generated events.  Event Management becomes that operationalization layer.  In this post we are going to focus on change and maintenance event suppression functionality in the Event Management module and how it helps to operationalize maintenance windows.</p>
<p>For the scenarios in this blog, I have made a few assumptions:</p>
<ol><li>There is a good CMDB with relationship data from Discovery.</li><li>Event Management is configured to receive alerts from your monitoring systems.</li><li>You have some best practices in place to add CIs to your change requests.</li></ol>
<p><strong><u>Alert Suppression During Planned Changes</u></strong></p>
<p>When a change is within its <strong>change window</strong> and is moved into the <strong>implementation</strong> phase, the CI for that change is automatically moved into maintenance.  Moving a CI into maintenance adds it to the table em_impact_maint_ci.  If you want to watch this behavior, you can open the table to see which CIs are currently in maintenance.  If you are not familiar with this process, you can open up the table in a new tab by typing em_impact_maint_ci.LIST in your navigator.</p>
<p> <img src="961c47b0dbe06744200f0b55ca9619a2.iix" /></p>
<p>Once a CI has been moved into maintenance, the default behavior is to suppress any alerts for that CI.  If you look at the default filter in the alert console, you can see that CIs in maintenance are filtered out.  Open up the alert console and take a look at the filter.</p>
<p><img src="e82ccbb0dbe06744200f0b55ca9619dc.iix" /> </p>
<p>While in maintenance, any events generated and sent to Event Management will be stored in the appropriate tables; however, alert rules will not be processed for those alerts while the CI is in maintenance.  When the change is closed, the CI will be removed from maintenance, and rules will be processed if any new events are received.   </p>
<p>Taking a deeper look, you can open up Maintenance rules under event management:</p>
<p> <img src="003ccbb0dbe06744200f0b55ca96193e.iix" /></p>
<p>There are two maintenance rules by default.  The first is the change scenario described above.  The second is to eliminate events from a CI marked as retired.</p>
<p>Let’s look at creating a custom rule.  We will start with a simple scenario.  There is a company-wide DR test going on over the weekend.  During the cutover, the standby/DR systems will need to be rebooted several times to get the failover completed.  There has been a request to suppress alerts for the DR systems during the DR test.</p>
<p>Under Maintenance Rules, I create a new rule with the following conditions:<img src="984c03f0dbe06744200f0b55ca96197e.iix" /></p>
<p>The scheduled job for maintenance impact calculation runs every minute (you can see it under scheduled jobs with the job name of Event Management – Maintenance Calculator).  When this job runs the CIs with an operational status of DR Standby will enter maintenance mode.  When the weekend is over, you can set the rule to inactive, and the job will remove the CIs from maintenance when the job executes again. </p>
<p>Hopefully the information in this post helps provide some clarity on maintenance rules and how they can be used to help operationalize event data and drive efficiency.   Look out for more blogs on this and other topics. </p>
<p> </p>