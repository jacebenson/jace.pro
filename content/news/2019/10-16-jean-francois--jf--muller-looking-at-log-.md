---
title: "Looking at Log in context from a Service Map with Elasticsearch Log UI"
date: 2019-10-15T14:06:15.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=4dd27778db6c441c0be6a345ca9619fd"
---
<p><strong>The what and why…</strong></p>
<p>Having visibility in component logs will help augment any of those observability scenarios that you may or may not have to do when using ServiceNow Application service map views.<br />Over the years the <a href="https://www.elastic.co/products/log-monitoring" target="_blank" rel="noopener noreferrer nofollow">Elastic Stack</a> has been significantly enhanced and powerful capabilities for logging and observability have been added.<br />One of the big things that has been released and enhanced over the last couple of Elastic Stack release is the Logs UI.<br />With the Logs UI, Elasticsearch offer the same super-fast search capability on top of logs and allows to pinpoint any errors or things coming together.</p>
<p>The integration described and developed in this document is aimed to link ServiceNow Operator Workspace / Event Management and his Topology Map UI and Elasticsearch as a centralised Log Management solution.</p>
<p>This extension allows an operator to select a specific CI in ServiceNow ServiceMap UI and to query Elasticsearch logs UI in the context of the select CI. See it in action below. </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/e09473bcdbec441c0be6a345ca96191d.iix" /></p>
<p><strong>How…</strong></p>
<ol><li>Apply the update set linked to this blogpost (<a href="https://github.com/JefMuller/ServiceNow-ITOM-ElasticSearch" target="_blank" rel="noopener noreferrer nofollow">here</a>) to you instance.</li><li>Go to Event Management – Map Menu Action menu</li><li>Edit the Menu Action called “Show CI logs Elasticsearch (last hour)”</li><li>Adjust the value of: elasticSearchHost &amp; elasticSearchPort to match your environment. (See below)</li></ol>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/18a43330db20841c0be6a345ca961986.iix" /></p>
<p>Ensure that Active checkbox is checked.</p>
<p><br />You can test your settings from the ServiceMap UI opened via “Operator Workspace” or “Event Management Dashboard”.</p>
<p>Select a CI in the map, right click it to open the menu and select &#34;Show CI logs Elasticsearch (last hour)&#34; menu option.</p>
<p>A new browser with Elasticsearch Log UI will appear and display the log using the CI name as host value for the log query.</p>
<p> </p>
<p>Feel free to provide feedback and to mark this blog if useful.</p>