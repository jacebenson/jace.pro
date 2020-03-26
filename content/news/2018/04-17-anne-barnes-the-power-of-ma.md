---
title: "The Power of Major Incident Management  Part  The Major Incident Management Process"
date: 2018-04-16T19:00:06.000Z
authors: ["Anne Barnes"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=e8787bf4dbed5fc0fc5b7a9e0f96192f"
---
<p>This is part 2 of a three part series on Major Incident Management (MIM).  In <a href="community?id&#61;community_blog&amp;sys_id&#61;9583147adb995b00fc5b7a9e0f961901" rel="nofollow">Part 1</a> we discussed Activation and Properties.  In this blog we will talk about MIM features and process.  However, before that, a quick recap of what is <a href="https://docs.servicenow.com/bundle/kingston-it-service-management/page/product/incident-management/concept/major-incident-management.html" rel="nofollow">Major Incident Management.</a></p>
<h2>Major Incidents and their Financial Impact</h2>
<p>A Major Incident (MI) is defined as an incident that results in significant disruption to the business and which demands a response beyond the routine incident management process.  These disruptions can cause a variety of problems including:</p>
<ul><li>Business Disruption</li><li>Brand Reputation Damage</li><li>Data Loss</li><li>Lost Revenue</li></ul>
<p>According to <a href="http://itic-corp.com/blog/2016/08/cost-of-hourly-downtime-soars-81-of-enterprises-say-it-exceeds-300k-on-average/" rel="nofollow">Information Technology Intelligence Consulting </a> 98% of organizations say that a single hour of downtime costs $100,000 with a record third of the organizations saying that downtime costs between $1 to $5 million.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="0875dc3adb1d5b00fc5b7a9e0f96196e.iix" /></p>
<p> </p>
<h2>What is ServiceNow Major Incident Management in Kingston?</h2>
<p>Major Incident Management in Kingston provides a process flow for handling these high-impact incidents by improving the integration between existing products such as Incident, Incident Alert, Outage, etc.  Major Incident Management also includes these new features: Major Incident Criteria, Incident Response Flow, and a Major Incident Workbench that will help to streamline the major incident identification and response process.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="e95fdd0bdbd913407b337a9e0f9619df.iix" /></p>
<p><em>Major Incident Management Workbench</em></p>
<p>With this new application you will get:</p>
<ol><li>A single pane for major incident visibility (MI Dashboard)</li><li>Early MI detection</li><li>Major Incident workbench for better MI handling and SME collaboration</li><li>Conditional trigger options</li></ol>
<h2> </h2>
<h2>Major Incident Management Features</h2>
<p>In this Part 2 blog we will discuss:</p>
<p style="padding-left: 30px;">1. Create Major Incident Candidates</p>
<p style="padding-left: 60px;">a. Trigger Rules</p>
<p style="padding-left: 60px;">b. Manually Identify a Major Incident Candidate</p>
<p style="padding-left: 60px;">c. Direct Creation of a Major Incident Candidate</p>
<p style="padding-left: 30px;">2. Create a Major Incident</p>
<p style="padding-left: 60px;">a. Accept or Reject the Major Incident Candidate</p>
<p style="padding-left: 60px;">b. Direct Creation of a Major Incident</p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;">3. Summary</p>
<p style="padding-left: 30px;"> </p>
<h3>1. Create Major Incident Candidates</h3>
<p style="padding-left: 30px;">The first step of the Major Incident Management Process is to identify an incident as a MIM candidate.  There are several ways in which you can mark an incident as a major incident candidate:</p>
<ul><li>Trigger Rules</li><li>Mark an Existing Incident as a Candidate</li><li>Direct Creation of a Candidate</li></ul>
<h4 style="padding-left: 30px;">a. Trigger Rules</h4>
<p style="padding-left: 30px;">Some customers have well defined rules that help to identify a major incident.  You can create a Major Incident Trigger Rules to automatically mark any incident as a major incident candidate based upon criteria in the incident.</p>
<p style="padding-left: 30px;">There are three OOB trigger rules delivered when you activate the MIM plugin.  These rules are set to inactive by default.  You may also create additional trigger rules based upon your criteria.</p>
<p style="padding-left: 30px;">Trigger rules can be created or edited by the admin user role and viewed by the major incident management user role.</p>
<p style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="9a6af77cdb219fc0fc5b7a9e0f9619f5.iix" /></p>
<p style="padding-left: 30px;"><em>OOB Major Incident Trigger Rules</em></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;">As an example, if you want to identify every incident affecting a critical business service to be marked as a major incident, you can enter the criteria as follows:</p>
<p style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="05cdfb30dbe19fc0fc5b7a9e0f9619dc.iix" /></p>
<p style="padding-left: 30px;"><em>Critical Business Service Trigger Rule</em></p>
<p style="padding-left: 30px;"> </p>
<h4 style="padding-left: 30px;">b. Mark an Existing Incident as a Candidate</h4>
<p style="padding-left: 30px;">The second method for identifying a major incident candidate is directly from an incident record.</p>
<p style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="77d084cddb259fc0fc5b7a9e0f961910.iix" /></p>
<p style="padding-left: 30px;"><em>Mark existing incident as a candidate</em></p>
<p style="padding-left: 30px;"> </p>
<h4 style="padding-left: 30px;">c. Directly Create a Candidate</h4>
<p style="padding-left: 30px;">The final way to identify a major incident candidate is to directly create a major incident candidate.  When you choose this option from the left navigation pane, an incident form will be opened.  When the record is saved, it will be marked as a major incident candidate.</p>
<p style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="5343c0c5dba59fc0fc5b7a9e0f9619a0.iix" /></p>
<p style="padding-left: 30px;"><em>Create MIM Candidate</em></p>
<p style="padding-left: 30px;"> </p>
<h3>2. Create Major Incident </h3>
<p style="padding-left: 30px;">Once a MIM candidate is created, the Major Incident Management notification group will receive a notification about a potential major incident.  The Major Incident Manager will then review the candidate and determine if the candidate should now be a Major Incident.  </p>
<h4 style="padding-left: 30px;">a. Accept or Reject the Major Incident Candidate</h4>
<p style="padding-left: 30px;">The Major Incident Manager can navigate to Major Incidents &gt; Candidates and open and review a candidate.  By right clicking on the header of the candidate, the manager will either &#39;Promote to Major Incident&#39; or &#39;Reject Major Incident Candidate&#39;.</p>
<p style="padding-left: 30px;"><em><img style="max-width: 100%; max-height: 480px;" src="b8798c8ddba99fc0fc5b7a9e0f9619c7.iix" /></em></p>
<p style="padding-left: 30px;"><em>Accept/Reject Major Incident Candidate</em></p>
<p style="padding-left: 30px;"> <strong></strong></p>
<h4 style="padding-left: 30px;">b. Direct Creation of a Major Incident</h4>
<p style="padding-left: 30px;">There may be times when an event occurs where you need to immediately initiate a Major Incident immediately and bypass the candidate process.  The Major Incident Manager can use the &#39;Create Major Incident&#39; item on the left navigation and immediately create a Major Incident.</p>
<p style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="e56a4c05dbe99fc0fc5b7a9e0f9619ff.iix" /></p>
<p style="padding-left: 30px;"><em>Create Major Incident</em></p>
<h3>3. Summary</h3>
<p>The Major Incident Management process provides you with a method to manage critical business events which can cause severe disruption to your organization.  Used in conjunction with Problem and Change Management, you can improve your customer experience by:</p>
<ul><li>Increasing stability and availability</li><li>Increasing customer satisfaction</li><li>Increasing service and support availability</li><li>Decreasing time-to-resolutuon</li><li>Decreasing cost per case</li><li>Decreasing recurring incidents</li></ul>
<p>Stay tuned for The Power of Major Incident Management - Part 3 The Major Incident Management Workbench, where we will learn how to manage and collaborate on a Major Incident.</p>
<h2>Major Incident Management Resources</h2>
<p>For more information about Major Incident Management in Kingston, check out these resources:</p>
<ul><li><a href="https://docs.servicenow.com/bundle/kingston-it-service-management/page/product/incident-management/concept/major-incident-management.html" rel="nofollow">Major Incident Management Overview Product Documentation</a></li><li><a href="community?id&#61;community_blog&amp;sys_id&#61;9583147adb995b00fc5b7a9e0f961901" rel="nofollow">The Power of Major Incident Management - Part 1, Activation and Properties</a></li></ul>