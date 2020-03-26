---
title: "The Power of Major Incident Management  Part  Activation and Properties"
date: 2018-04-09T21:12:04.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=9583147adb995b00fc5b7a9e0f961901"
---
<p>This is Part 1 of a three-part series on Major Incident Management (MIM). </p>
<p>ServiceNow continues to innovate with the creation of a new application in <a href="community?id&#61;community_blog&amp;sys_id&#61;d10daaa5dbd0dbc01dcaf3231f96191e" rel="nofollow">Kingston IT Service Management</a>.  In this blog we will deep dive into <a href="https://docs.servicenow.com/bundle/kingston-it-service-management/page/product/incident-management/concept/major-incident-management.html" rel="nofollow">Major Incident Management</a>.  </p>
<h2>Major Incidents and their Financial Impact</h2>
<p>A Major Incident (MI) is defined as an incident that results in significant disruption to the business and which demands a response beyond the routine incident management process.  These disruptions can cause a variety of problems including:</p>
<ul><li>Business Disruption</li><li>Brand Reputation Damage</li><li>Data Loss</li><li>Lost Revenue</li></ul>
<p>According to <a href="http://itic-corp.com/blog/2016/08/cost-of-hourly-downtime-soars-81-of-enterprises-say-it-exceeds-300k-on-average/" rel="nofollow">Information Technology Intelligence Consulting </a> 98% of organizations say that a single hour of downtime costs $100,000 with a record third of the organizations saying that downtime costs between $1 to $5 million.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="0875dc3adb1d5b00fc5b7a9e0f96196e.iix" /></p>
<p> </p>
<h2>What is ServiceNow Major Incident Management in Kingston?</h2>
<p>Major Incident Management in Kingston provides a process flow for handling these high-impact incidents by improving the integration between existing products such as Incident, Incident Alert, Outage, etc.  Major Incident Management also includes these new features: Major Incident Criteria, Incident Response Flow, and a Major Incident Workbench that will help to streamline the major incident identification and response process.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="e95fdd0bdbd913407b337a9e0f9619df.iix" /></p>
<p><em>Major Incident Management Workbench</em></p>
<p> </p>
<p>With this new application you will get:</p>
<ol><li>A single pane for major incident visibility (MI Dashboard)</li><li>Early MI detection</li><li>Major Incident workbench for better MI handling and SME collaboration</li><li>Conditional trigger options</li></ol>
<p> </p>
<h2>Major Incident Management Features</h2>
<p>In this blog we will discuss:</p>
<p style="padding-left: 30px;">1. MIM Activation</p>
<p style="padding-left: 60px;">a. Major Incident Management Plugins</p>
<p style="padding-left: 60px;">b. Roles</p>
<p style="padding-left: 60px;">c. Major Incident Management Navigation</p>
<p style="padding-left: 30px;">2. MIM Properties</p>
<p style="padding-left: 60px;">a. Major Incident Creation</p>
<p style="padding-left: 60px;">b. Alert Tasks Types</p>
<p style="padding-left: 30px;">3. Summary</p>
<p style="padding-left: 30px;"> </p>
<h3>1. MIM Activation</h3>
<h4 style="padding-left: 30px;">a. Major Incident Management Plugins</h4>
<p style="padding-left: 30px;">A new plugin <strong>Incident Management - Major Incident Management</strong><strong> [com.snc.incident.mim]</strong> has been introduced for Major Incident Management.  This plugin will beed to be activated for both new and existing customers, and can be activated by someone with the admin role.  The following plugins are required and activated when the Incident Management - Major Incident Management plugin is activated:</p>
<ul style="padding-left: 30px;"><li>
<ul><li>Incident Alert Management [com.snc.iam]</li><li>Incident Updates [com.snc.incident.updates]</li><li>Task-Outage Relationship [com.snc.task.outage]</li></ul>
</li></ul>
<p style="padding-left: 30px;">The following optional features may be used with Major Incident Management, and depend upon plugins:</p>
<ul style="padding-left: 30px;"><li>
<ul><li>Notify [com.snc.notify]</li><li>On-Call Scheduling [com.snc.on_call_rotation]</li></ul>
</li></ul>
<p> <img style="max-width: 100%; max-height: 480px;" src="b864d147db5513407b337a9e0f961946.iix" /></p>
<p><em>Major Incident Management Plugin</em></p>
<p> </p>
<h4 style="padding-left: 30px;">b. Roles</h4>
<p style="padding-left: 30px;">Two new roles are introduced with Major Incident Management.  One existing role has added responsibilities.</p>
<ul><li>
<ul><li>Major Incident Manager [major_incident_manager] - NEW</li><li>Communication Manager [communication_manager] - NEW</li><li>Incident Manager [incident_manager] - EXISTING WITH ADDED RESPONSIBILITIES</li></ul>
</li></ul>
<p><img style="max-width: 100%; max-height: 480px;" src="8fd55dcfdb5513407b337a9e0f9619a1.iix" /></p>
<p><em>Major Incident Management Roles</em></p>
<p> </p>
<h4 style="padding-left: 30px;">c. Major Incident Management Navigation</h4>
<p style="padding-left: 30px;">With the plugin activated, you will see the Major Incident Management modules on the left navigation pane.  All of the modules are available to ITIL users with the exception of Create Major Incident and Administration.</p>
<p style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="ca171dcbdb9513407b337a9e0f9619f7.iix" /></p>
<p style="padding-left: 30px;"><em>Major Incident Management Navigation Pane for the Major Incident Manager Role</em></p>
<p style="padding-left: 30px;"> </p>
<h3>2. Properties</h3>
<p>There are two properties for the Major Incident Management process.</p>
<h4 style="padding-left: 30px;">a. Major Incident Creation</h4>
<p style="padding-left: 30px;">This property determines how a major incident is created from a candidate.  The options are:</p>
<ul style="padding-left: 30px;"><li>
<ul><li>Promote candidate to a major incident - The candidate is promoted to a major incident.  <strong>This is the best practice and recommended setting.</strong></li><li>Create major incident from candidate - A new incident is created from the candidate as a major incident.  The candidate is associated with the new incident as a child.</li></ul>
</li></ul>
<h4 style="padding-left: 30px;">b. Alert Task Types</h4>
<p style="padding-left: 30px;">The task types which can have a Compose Email option on the Major Incident Dashboard.</p>
<p style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="32d81dc7dbd513407b337a9e0f96190d.iix" /></p>
<p style="padding-left: 30px;"><em>Major Incident Management Properties (available to the admin role)</em></p>
<p style="padding-left: 30px;"> </p>
<h3>3. Summary</h3>
<p>The Major Incident Management process provides you with a method to manage critical business events which can cause severe disruption to your organization.  Used in conjunction with Problem and Change Management, you can improve your customer experience by:</p>
<ul><li>Increasing stability and availability</li><li>Increasing customer satisfaction</li><li>Increasing service and support availability</li><li>Decreasing time-to-resolutuon</li><li>Decreasing cost per case</li><li>Decreasing recurring incidents</li></ul>
<p>Stay tuned for The Power of Major Incident Management - Part 2 The Major Incident Management Process, where we will discuss how to create a Major Incident Candidate and turn a candidate into a Major Incident.</p>
<p> </p>
<h2>Major Incident Management Resources</h2>
<p>For more information about Major Incident Management in Kingston, check out these resources:</p>
<ul><li><a href="https://docs.servicenow.com/bundle/kingston-it-service-management/page/product/incident-management/concept/major-incident-management.html" rel="nofollow">Major Incident Management Overview Product Documentation</a></li></ul>