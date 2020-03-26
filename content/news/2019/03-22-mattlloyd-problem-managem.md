---
title: "Problem Management  Whats new in Madrid"
date: 2019-03-21T22:16:59.000Z
authors: ["mattlloyd"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=b578524edb14bf8454250b55ca96193d"
---
<p>Last time we looked at <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;bcd7de82db14bf8454250b55ca9619f1" rel="nofollow">the feedback that led to the Madrid baseline</a>.</p>
<p><em>** Updated to mention this applies to Madrid and later releases.</em></p>
<p>What’s new at a glance in Madrid (introduced as part of Madrid, but also applies to later releases):</p>
<ul><li>Automated Test Framework (ATF) tests</li><li>New roles</li><li>Additional fields for documenting the problem</li><li>Search for problems</li><li>Notify when related problem tasks and change requests are done</li><li>Communicate a workaround or fix</li><li>Problem overview dashboard</li><li>Create known error articles for incident deflection</li><li>New states and guided actions to help manage a problem</li><li>Configurable properties</li></ul>
<p>Now, we’ll dig into those features in more detail, in the order of the plugin they belong to.</p>
<h2>Problem Management – ATF Tests plugin</h2>
<p><em>Activated by default.</em></p>
<p>Automated Test Framework (ATF) tests can be run after you make configuration changes such as apply an upgrade or develop an application to make sure problem management still works correctly.</p>
<h2>Problem Management Best Practice – Madrid plugin</h2>
<p><em>Activated by default for new customers (zbooted instance). </em></p>
<p><em>Not activated for upgrade customers, an administrator can activate this plugin.</em></p>
<h3>New roles</h3>
<p>New roles for managing problems:</p>
<table style="border-color: #cccccc;" border="1" cellpadding="3"><tbody><tr><td><strong>New Role</strong></td><td><strong>Description</strong></td></tr><tr><td>Problem Task Analyst</td><td>
<p>Works on a Problem Task and manages it through its lifecycle.</p>
<p>This can include your subject matter experts and technical teams.</p>
<p>Allows people outside of your service desk to work on problem tasks including application developers or legal team.</p>
<p><em>Inherits roles: N/A – this is the minimum permission to manage problem tasks.</em></p>
<p><em>Note: They are still tracked as fulfillers for licensing purposes, but you do not need to give them full ITIL permissions.</em></p>
</td></tr><tr><td>Problem Coordinator</td><td>
<p>Works on a Problem or Problem Task and manages it through its lifecycle.</p>
<p>If they need help on a problem, they create problem tasks and assign them to problem task analysts.</p>
<p><em>Inherits roles: Problem Task Analyst and ITIL user.</em></p>
</td></tr><tr><td>Problem Manager</td><td>
<p>Responsible for the overall Problem Management process and can configure Problem Management properties as well as act as a Problem Coordinator.</p>
<p><em>Inherits roles: Problem Coordinator.</em></p>
</td></tr><tr><td>Problem Admin</td><td>
<p>A Problem Manager who can also delete Problems and Problem Tasks.</p>
<p><em>Inherits roles: Problem Manager.</em></p>
</td></tr></tbody></table>
<h3>Additional fields</h3>
<p>Baseline fields for documenting the problem:</p>
<table style="border-color: #cccccc;" border="1" cellpadding="3"><tbody><tr style="height: 13.1875px;"><td style="height: 13.1875px;"><strong>Field Name</strong></td><td style="height: 13.1875px;"><strong>Description</strong></td></tr><tr style="height: 26px;"><td style="height: 26px;">First reported by</td><td style="height: 26px;">The task that first reported this problem, useful when you have multiple incidents associated with a problem. This is pre-filled when a problem is created from an incident.</td></tr><tr style="height: 26px;"><td style="height: 26px;">Category and Subcategory</td><td style="height: 26px;">This is the same capability as already exists for incident management.</td></tr><tr style="height: 26px;"><td style="height: 26px;">Problem statement</td><td style="height: 26px;">This is the short description field with a new label. This is based on customer feedback that people tend to provide a better short description when it is called the problem statement.</td></tr></tbody></table>
<p><img style="max-width: 100%; max-height: 480px; display: block; margin-left: auto; margin-right: auto;" src="https://community.servicenow.com/8bdef69edb18f348fece0b55ca9619c4.iix" /></p>
<table style="border-color: #cccccc;" border="1" cellpadding="3"><tbody><tr style="height: 13.1875px;"><td style="height: 13.1875px;"><strong>Field Name</strong></td><td style="height: 13.1875px;"><strong>Description</strong></td></tr><tr style="height: 52px;"><td style="height: 52px;">Workaround</td><td style="height: 52px;">Document the steps to work around this problem to help the service desk team resolve incidents. This field can be used for filtering and reporting.<br /><em>Note: This replaces the older workaround field that was part of the activity stream because that field could not be used for filtering or reporting. That older field is now hidden.</em></td></tr><tr style="height: 13px;"><td style="height: 13px;">Cause notes</td><td style="height: 13px;">Document the root cause of this problem.</td></tr></tbody></table>
<p><img style="max-width: 100%; max-height: 480px; display: block; margin-left: auto; margin-right: auto;" src="https://community.servicenow.com/9f3ffad2db58f348fece0b55ca9619cf.iix" /></p>
<p> </p>
<table style="border-color: #cccccc;" border="1" cellpadding="3"><tbody><tr style="height: 13.1875px;"><td style="height: 13.1875px;"><strong>Field Name</strong></td><td style="height: 13.1875px;"><strong>Description</strong></td></tr><tr style="height: 13px;"><td style="height: 13px;">Fix notes</td><td style="height: 13px;">Document the steps to permanently fix this problem.</td></tr></tbody></table>
<p><img style="max-width: 100%; max-height: 480px; display: block; margin-left: auto; margin-right: auto;" src="https://community.servicenow.com/ac8f761adb58f348fece0b55ca961947.iix" /></p>
<p> </p>
<h3>Search for problems</h3>
<p>Contextual Search (aka Related Search Results) now supports searching for incidents and problems within the context of the record you are working on.</p>
<p><img style="max-width: 100%; max-height: 480px; display: block; margin-left: auto; margin-right: auto;" src="https://community.servicenow.com/8e40c756db98f348fece0b55ca9619d9.iix" /></p>
<ul><li>The problem coordinator working on a problem can search for incidents.</li><li>An agent working on an incident can search for a problem.</li></ul>
<p>Contextual Search also now supports linking certain records together from the preview window. This saves time as there were multiple steps required to link the records on your own.</p>
<ul><li>Link an incident to a problem.</li><li>Link a problem to an incident.</li><li>Link an incident to another incident.</li></ul>
<p><img style="max-width: 100%; max-height: 480px; display: block; margin-left: auto; margin-right: auto;" src="https://community.servicenow.com/d5b00b9adb98f348fece0b55ca96198c.iix" /></p>
<h3>Notify when related problem tasks and change requests are done</h3>
<p>Notify the problem coordinator that is assigned to the problem when:</p>
<ul><li>All related problem tasks for this problem are completed or canceled.</li><li>All related fixes for this problem are completed or canceled. Fixes refer to:
<ul><li>Change Requests.</li><li>Defects, Enhancement or Releases (if you have Agile 2.0 from IT Business Management).</li></ul>
</li></ul>
<p>This means the problem coordinator doesn’t have to keep checking back to see the progress for those related records, instead, the problem coordinator can wait until they receive a notification that all related problem tasks or fixes are completed or canceled and then decide what to do next.</p>
<h3>Communicate a workaround or fix</h3>
<p>The problem coordinator can communicate when:</p>
<ul><li>A documented workaround is available for this problem using the Communicate Workaround related link action.</li><li>A documented fix is available for this problem using the Communicate Fix related link action.</li></ul>
<p>Behind the scenes these actions raise an event communicate_workaround or communicate_fix which is handled by the incident or case process. For example: unresolved incidents add the workaround information to themselves when a workaround is communicated.</p>
<h3>Problem overview dashboard</h3>
<p>The previous problem overview homepage has been converted to a dashboard based on recommendations from the performance analytics team.</p>
<h2>Problem Management Best Practice – Madrid – Knowledge Integration plugin</h2>
<p><em>Not activated by default, an administrator can activate this plugin.</em></p>
<p>The Knowledge Integration uses Knowledge Templates from Knowledge Management Advanced to configure and create Known Error articles. The template specifies which fields from the problem should be copied to the new Known Error article.</p>
<p>You can relate a Known Error article to a problem using the Primary Known Error article reference field in the Analysis Information tab.</p>
<p><em>Note: If the Primary Known Error article field is empty when you use Contextual Search to attach a Known Error article to a problem, the field is updated to refer to the attached article.</em> </p>
<h3>Create Known Error articles for Incident Deflection</h3>
<p>Use the Create Known Error article related link to create a Known Error article from this problem.</p>
<p><em>Note: The create Known Error article related link is only shown when the Primary Known Error article field is empty.</em></p>
<p>When you save the Known Error article, it will be added to the Primary Known Error article reference field.</p>
<p>Publish the Known Error article to make it available to users including those outside the service desk. When a user goes to the Service Portal to create an Incident (<strong>Get Help</strong> &gt; <strong>Create Incident</strong>) any related Known Error articles will be displayed which can help with Incident Deflection.</p>
<h2>Problem Management Best Practice – Madrid – State Model plugin</h2>
<p><em>Activated by default for new customers (zbooted instance). </em></p>
<p><em>Note: This plugin cannot be directly activated by upgrade customers because it introduces a workflow that requires migration from the previous problem management. Please refer to the <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;1bb8d282db54bf8454250b55ca961938" rel="nofollow">upgrade path for existing customers</a> for more information on getting access to this plugin.</em></p>
<p>This plugin includes the best practice states, mandatory fields and actions that the problem team can use to navigate the lifecycle of a problem or problem task.</p>
<h3>New states and guided actions to help manage a problem</h3>
<p>The new states are: <strong>New</strong>&gt; <strong>Assess </strong>&gt; <strong>Root Cause Analysis </strong>&gt; <strong>Fix in Progress </strong>&gt; <strong>Resolved </strong>&gt; <strong>Closed</strong></p>
<p>You can read the documentation for more information about the <a href="https://docs.servicenow.com/bundle/madrid-it-service-management/page/product/problem-management/concept/understanding-state-mgmt-transitions.html" rel="nofollow">lifecycle of a problem</a>.</p>
<p><em>Note: Only users who have the problem coordinator, problem manager or problem admin role can manage a problem though its lifecycle. </em> </p>
<p>The guided lifecycle actions are shown in the problem form header. If more information is required to move to the next stage of the lifecycle a popup will display the necessary mandatory fields.</p>
<p>There are two types of problem task you can create in Madrid:</p>
<table style="border-color: #cccccc;" border="1" cellpadding="3"><tbody><tr><td><strong>Problem Task Type</strong></td><td><strong>Description</strong></td></tr><tr><td>Root Cause Analysis</td><td>When you need help to investigate the root cause and the resolution for a problem.</td></tr><tr><td>General</td><td>Used for any other kind of task.</td></tr></tbody></table>
<p>The new problem task states are: <strong>New </strong>&gt; <strong>Assess </strong>&gt; <strong>Work in Progress </strong>&gt; <strong>Closed</strong></p>
<p>You can read the documentation for more information about the <a href="https://docs.servicenow.com/bundle/madrid-it-service-management/page/product/problem-management/concept/understanding-state-trans-prob-task.html" rel="nofollow">lifecycle of a problem task</a>.</p>
<p><em>Note: Only users who have one of the problem management roles can move a problem task through its lifecycle.</em></p>
<p>The guided lifecycle actions are shown in the problem task form header. If more information is required to move to the next stage of the lifecycle a popup will display the necessary mandatory fields.</p>
<h3>Configurable properties</h3>
<p>Problem managers can configure the problem management properties including:</p>
<ul><li>The problem roles that can request to re-analyze a closed problem.</li><li>The problem roles that can request to re-assess a closed problem task.</li></ul>
<h2>Next steps</h2>
<p>Now that we have covered the new features available in Madrid, you may also want to watch this quick <a href="https://www.youtube.com/watch?v&#61;elS1hKNnhcE&amp;list&#61;PLCOmiTb5WX3pPvDYOKedpmnHmKLI75Nzo&amp;index&#61;6&amp;t&#61;0s" rel="nofollow">Problem Management</a> ServiceNow deskside chat where I caught up with <a href="https://community.servicenow.com/community?id&#61;community_user_profile&amp;user&#61;a7009625db581fc09c9ffb651f96195a" rel="nofollow">Manjeet Singh</a> to discuss the best practices for problem management and where we are also looking to employ intelligence to help working with problems in the future.</p>
<p>For existing customers looking to upgrade to Madrid (or a later release) please continue to part-3 on the <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;1bb8d282db54bf8454250b55ca961938" rel="nofollow">upgrade path for existing customers</a>.</p>