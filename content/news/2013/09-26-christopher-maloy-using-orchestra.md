---
title: "Using Orchestration to move an AD user to another OU container"
date: 2013-09-26T01:38:54.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=f35d2a29dbd0dbc01dcaf3231f9619a9"
---
<p>This blog is a followup to the previous blog I did about using AD CMDLETS:<br />http://community.servicenow.com/blog/christophermaloy/running-active-directory-cmdlets-your-workflow-powershell<br /><br />This is a specific example of using ServiceNow Orchestration to move an AD user to another OU.<br /><br />You have to use the Run Powershell Activity, but this, with the leverage of the AD CMDLET API, makes AD system administration very easy.<br />Hopefully the images below are self explanatory. <br /><br /><img src="http://www.hobbycache.com/images/servicenow/WorkflowActivities/Workflow.jpg" width="500" height="200" /><br /><p><br /><img src="http://www.hobbycache.com/images/servicenow/WorkflowActivities/Powershell2.jpg" width="560" height="430" /></p></p>