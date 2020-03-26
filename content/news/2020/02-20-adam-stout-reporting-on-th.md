---
title: "Reporting on the Latest Status  Part  on Conquer Challenging Reports by Leveraging the Now Platform"
date: 2020-02-20T05:57:49.000Z
authors: ["Adam Stout"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=37c045cadbcf409023f4a345ca961921"
---
<p>This post is part one of a three-part series on how to leverage the Now Platform to easily solve otherwise tough reporting problems.  This is a followup to the <a href="https://community.servicenow.com/community?id&#61;community_event&amp;sys_id&#61;169b4b61db682f8ca39a0b55ca9619a7&amp;view_source&#61;featuredList" rel="nofollow">Performance Analytics and Reporting Office Hours</a> from 2/12/2020.  If you would like to hear me explain this, you can check out the recording and presentation <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;0740de96dbcf889023f4a345ca96195d" rel="nofollow">here</a>.</p>
<h2>The Business Case</h2>
<p>Beki, a Portfolio Manager in our Project Management Office, came to me and said:</p>
<p style="padding-left: 30px;"><em>I often find myself chasing project updates and it is such a mundane task. I must go into each project’s related details to determine the current status. I spend a couple of hours every week just clicking through all these projects. What I would give to have a better way and nudge folks to keep the project up to date...</em></p>
<p style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/c621090edbcf409023f4a345ca9619cc.iix" /></p>
<p>Who wants to spend their time clicking through a list record by record and sending emails and making calls all the time? There must be something we can do for Beki to make the process flow better. Something to help us get better outcomes with less manual effort to free Beki up to focus on high-value activities.</p>
<p>This is ServiceNow, of course there is something we can do here. Let’s walk through how to make work, work better for Beki.</p>
<h2>Before we get started</h2>
<p>If you haven’t read it yet, I recommend you start by reading the post, “<a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;2f99990fdbee5b00fece0b55ca9619fb" rel="nofollow">It&#39;s Just a &#34;Reporting&#34; Field...</a>” which discusses why it is so important to build analytics into your application rather than just creating important reporting fields outside of your operational system.</p>
<p>It’s ok; I’ll wait. Go ahead and read it. It is short. Here is the link again: “<a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;2f99990fdbee5b00fece0b55ca9619fb" rel="nofollow">It&#39;s Just a &#34;Reporting&#34; Field...</a>”</p>
<p>OK, now that you are back, let’s talk about how to make this work.</p>
<h2>Leveraging the Now Platform</h2>
<p>Before we get too far, you need to have a working understanding of the <a href="https://docs.servicenow.com/bundle/newyork-platform-administration/page/get-started/servicenow-overview/reference/r_AdministerServiceNow.html" rel="nofollow">Now Platform</a>. If you haven’t done so, I recommend the <a href="https://nowlearning.service-now.com/lxp?id&#61;overview&amp;sys_id&#61;e4383a8cdb5eff40de3cdb85ca96190e&amp;type&#61;course" rel="nofollow">ServiceNow Fundamentals instructor lead (3-day) class</a>. I prefer the instructor-led, but if that isn’t an option, you can take the <a href="https://nowlearning.service-now.com/lxp?id&#61;overview&amp;sys_id&#61;6b78901c1b748050b1c7fe631a4bcb73&amp;type&#61;path" rel="nofollow">ServiceNow Fundamentals self-paced version</a>. [As a bonus, if you complete the self-paced version before the end of March 2020, it looks like they are offering a free voucher to take the ServiceNow Certified System Administrator (CSA) exam]. Here is some <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;cb32f1b4db7a88d413b5fb2439961972" rel="nofollow">information comparing the different versions</a> available to you.</p>
<p>If you are considering taking the Performance Analytics Certified Application Specialist exam, you’ll see the ServiceNow Fundamentals is the first step in the <a href="https://nowlearning.service-now.com/lxp?id&#61;overview&amp;sys_id&#61;e02227a7db537304de3cdb85ca9619d0&amp;type&#61;path" rel="nofollow">learning path</a>.</p>
<p>The better you understand the Now Platform, the easier your life will be working with Performance Analytics and Reporting in ServiceNow. Analytics is not separate; it is part of the Now Platform.</p>
<h2>Use Case Specifics</h2>
<p>Now that we know the why and what, let’s walk through a specific use case...</p>
<p>On the Project table (pm_project) there is a one to many relationship with Status Reports (project_status). Every week, a status report is (or at least should be) submitted. We need to report on easily:</p>
<ul><li>Projects that have not had a status report submitted in the last week</li><li>Projects that have not had a status report submitted at all</li><li>Projects, including the date of the latest status report as well as including fields from the latest status report</li></ul>
<h2>Proposed Solution</h2>
<p>Add a field to the base table and a Business Rule on the child to keep the new field up to date. By adding this new field, we can easily report on the information contained in the latest status report along when reporting on the project table itself without having to worry about missing status reports or multiple status reports.</p>
<h2>What Else We Get</h2>
<p>Now that we have this data easy to access, we can create Performance Analytics Indicators on project, including the latest status report information. Adding a breakdown by latest overall status is interesting as well.</p>
<p>In addition to Reporting and Performance Analytics, we can drive the desired action we have as well. For instance, adding a warning to the project that you need to file a status report.</p>
<p>To track how our processes are improving over time, we can add a KPI for project managers tracking how well they are keeping their projects up to date and to help the project managers add a KPI that can alert them that certain projects have not had a timely update.</p>
<p>We can also now use the latest project status to build interactive filters on the project.</p>
<h2>Solution Walk Through</h2>
<h3>Create a new field</h3>
<p>On the Project table (pm_project), create a new field to hold the reference to the latest Status Report.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/1ef14102db03809023f4a345ca9619fc.iix" /></p>
<p>You can name this field anything that makes sense in your organization. Typically, I use “Latest Status Report”. I recommend that you make this read-only so it is only populated via the business rule that we will be creating in the next step. Be sure to remember what the physical name of this field is (u_latest_status_report in this example).</p>
<h3>Add Business Rule</h3>
<p>Next, we add a Business Rule to the Status Report table (project_status) so that every time a status report is entered or (#1) the project or date changes, we update the appropriate Project to match.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/29024502db03809023f4a345ca961922.iix" /> </p>
<p>Be sure to set this to run after the status report is saved to the database (async may be OK here too). We also need to be sure to run this on (#2) Insert/Update/Delete to cover all the cases when we would need to update the Project.</p>
<p>The “Advanced” tab (#3) is where the magic happens.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/09128902db03809023f4a345ca9619ea.iix" /></p>
<p> </p>
<p>This logic should probably live in a <a href="https://docs.servicenow.com/bundle/newyork-application-development/page/script/server-scripting/concept/c_ScriptIncludes.html" rel="nofollow">Script Include</a> instead of in the Business Rule, but for this example, I put it here directly. Wherever you put it, be sure to create a test for this in the <a href="https://docs.servicenow.com/bundle/newyork-application-development/page/administer/auto-test-framework/concept/automated-test-framework.html" rel="nofollow">Automated Test Framework</a> to ensure this continues to work going forward.</p>
<p>Here is some example logic to get you started, and as with all examples, be sure to test that this meets your needs prior to deploying this in a production environment.</p>
<pre class="language-javascript"><code>(function executeRule(current, previous /*null when async*/) { 
var getLatestStatusReport &#61; function (project) 
{ 
var lastStatus &#61; new GlideRecord(&#39;project_status&#39;); 
lastStatus.addQuery(&#39;project&#39;, &#39;&#61;&#39;, project.getValue(&#39;sys_id&#39;)); 
lastStatus.orderByDesc(&#39;as_on&#39;); 
lastStatus.setLimit(1); 
lastStatus.query(); 
if(lastStatus.next()) 
{ 
return lastStatus; 
} else { 
return false; 
} 
}; 
var setLatestStatusReport &#61; function (project) 
{ 
var proj &#61; new GlideRecord(&#39;pm_project&#39;); 
proj.get(project.getValue(&#39;sys_id&#39;)); 
var statusReport &#61; getLatestStatusReport(project); 
if(statusReport &#61;&#61; false) 
{ 
gs.info(&#39;No status report found for &#39; &#43; project.getDisplayValue()); 
return; 
} 
gs.info(&#39;Status report found for &#39; &#43; project.getDisplayValue() &#43; &#39; - &#39; &#43; statusReport.as_on); 
proj.setValue(&#39;u_latest_status_report&#39;, statusReport.getValue(&#39;sys_id&#39;)); 
// turn off the audit, just update the status report 
proj.setWorkflow(false); 
proj.autoSysFields(false); 
proj.setEngines(false); 
proj.update(); 
return; 
}; 
gs.addInfoMessage(&#39;Latest status report updated on current project: &#39; &#43; current.project.getDisplayValue()); 
setLatestStatusReport(current.project); 
if(current.project !&#61; previous.project &amp;&amp; !gs.nil(previous.project)) 
{ 
gs.addInfoMessage(&#39;Latest status report updated on previous project: &#39; &#43; previous.project.getDisplayValue()); 
setLatestStatusReport(previous.project); 
} 
})(current, previous);</code></pre>
<h3>Run Fix Script</h3>
<p>We are all set up to populate the data going forward, but we need to fix all the existing Projects. We need to run a <a href="https://docs.servicenow.com/bundle/orlando-application-development/page/build/applications/concept/c_FixScripts.html" rel="nofollow">Fix Script</a> to find the latest status reports and update all the existing projects to which they belong. If we used a script include (HINT!) in the BR, this would be easier, but we’ll copy and paste for this example.</p>
<pre class="language-javascript"><code>var getLatestStatusReport &#61; function (project) 
{ 
var lastStatus &#61; new GlideRecord(&#39;project_status&#39;); 
lastStatus.addQuery(&#39;project&#39;, &#39;&#61;&#39;, project.getValue(&#39;sys_id&#39;)); 
lastStatus.orderByDesc(&#39;as_on&#39;); 
lastStatus.setLimit(1); 
lastStatus.query(); 
if(lastStatus.next()) 
{ 
return lastStatus; 
} else { 
return false; 
} 
}; 
var setLatestStatusReport &#61; function (project) 
{ 
var proj &#61; new GlideRecord(&#39;pm_project&#39;); 
proj.get(project.getValue(&#39;sys_id&#39;)); 
var statusReport &#61; getLatestStatusReport(project); 
if(statusReport &#61;&#61; false) 
{ 
gs.info(&#39;No status report found for &#39; &#43; project.getDisplayValue()); 
return; 
} 
gs.info(&#39;Status report found for &#39; &#43; project.getDisplayValue() &#43; &#39; - &#39; &#43; statusReport.as_on); 
proj.setValue(&#39;u_latest_status_report&#39;, statusReport.getValue(&#39;sys_id&#39;)); 
// turn off the audit, just update the status report 
proj.setWorkflow(false); 
proj.autoSysFields(false); 
proj.setEngines(false); 
proj.update(); 
return; 
}; 
var getAllProjectsWithStatus &#61; function () 
{ 
var proj &#61; new GlideRecord(&#39;pm_project&#39;); 
proj.addEncodedQuery(&#39;RLQUERYproject_status.project,&gt;&#61;1^ENDRLQUERY&#39;); 
proj.query(); 
return proj; 
}; 
var project &#61; getAllProjectsWithStatus(); 
gs.info(project.getRowCount() &#43; &#39; projects to update&#39;); 
while(project.next()) 
{ 
setLatestStatusReport(project); 
} 
gs.info(&#39;Update complete&#39;);</code></pre>
<p> </p>
<h2>Work is Better</h2>
<p>Now Beki can use her dashboard to quick browse projects based on the Overall Status from their latest status report. She can see when the last status report was submitted as well as seeing which projects are missing their status reports completely.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/8e424d42db03809023f4a345ca9619b9.iix" /></p>
<p>Using a report as an Interactive Filter makes it easy to review and focus on the problem projects.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/11524182db03809023f4a345ca9619a0.iix" /></p>
<p>I’m pretty sure Beki is going to buy me a donut once she sees this.</p>
<p> </p>
<h2>Other Use Cases</h2>
<p>This same technique can be used wherever you have a one to many relationships. I commonly see it used when we have a specific child record we need want to report on. In this case, the latest status report but it could just as easily be the “active task”. You need to be able to set the logic to pick the appropriate task.</p>
<p>This technique also works to summarize the child records. For instance, you could add some integer fields to count the number of Problem Tasks (total and open) for a Problem record if this was something that you need to quickly report on and wanted to integrate in the workflow for Problems.</p>
<h2>Wrapping Up</h2>
<p>Analytics are an integral part of the Now Platform. Do not restrict yourself to just Reporting or just Performance Analytics! Use the Now Platform to get the most out of your ServiceNow investment and optimize your workflow.</p>
<p>With a small amount of effort (this should have taken you less than 15 minutes to do), you now have greatly expanded your analytics capabilities with a solution you can use across the platform, not just in a one-off report.</p>
<h2>Up Next</h2>
<p>In the next installment of this series, we’ll cover reporting on prefixes and other substrings. Check back next week to learn more about how to Conquer Challenging Reports by Leveraging the Now Platform.</p>