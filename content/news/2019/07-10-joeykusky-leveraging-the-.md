---
title: "Leveraging the MS Teams Spoke in Integration Hub"
date: 2019-07-10T01:30:29.000Z
authors: ["joeykusky"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=3ca3a969db62bfc0d82ffb2439961962"
---
<p> </p>
<p><span style="font-weight: 400;">The large majority of the organizations I work with have invested in an Enterprise Collaboration tool.  In the market, there are two major players that often come up in conversations</span><span style="font-weight: 400;"> - </span><span style="font-weight: 400;">Slack and Microsoft Teams.  <br /></span></p>
<p><span style="font-weight: 400;">ServiceNow IntegrationHub has introduced spokes to integrate with both of these platforms.  Both of these spokes are in our IntegrationHub Fremium package</span><span style="font-weight: 400;">, </span><span style="font-weight: 400;">which includes the spokes as well as </span><span style="font-weight: 400;">one-</span><span style="font-weight: 400;">million transactions.  If you have a question on this package, please contact your ServiceNow sales team with questions.  <br /></span></p>
<p><span style="font-weight: 400;">In a previous blog post, </span><a href="https://community.servicenow.com/community?id&#61;community_user_profile&amp;user&#61;86001225db581fc09c9ffb651f9619ab" rel="nofollow"><span style="font-weight: 400;">vNickNow</span></a><span style="font-weight: 400;"> covered integration into Slack with the Blog Post Embedding </span><a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;d97f2f52dbd82300d58ea345ca961914" rel="nofollow"><span style="font-weight: 400;">ServiceNow IT Ops into Slack</span></a><span style="font-weight: 400;"> .  In this blog post, I am going to cover integration into Microsoft Teams.  <br /></span></p>
<p> </p>
<p><span style="text-decoration: underline;"><strong>Step 1: Preparing Microsoft Teams</strong></span></p>
<p><span style="font-weight: 400;">In order to integrate ServiceNow into Microsoft Teams, you will first want to identify a team you want to send messages to.  In my example, I created a new team called </span><strong>ITOM ihub MS Teams, </strong><span style="font-weight: 400;">although you can use any existing team.</span><strong>  </strong><span style="font-weight: 400;">Once you have a team identified, you will need to add an app for the incoming webhook.  In the Microsoft Teams app</span><span style="font-weight: 400;">, </span><span style="font-weight: 400;">go into apps and search </span><span style="font-weight: 400;">“</span><span style="font-weight: 400;">incoming</span><span style="font-weight: 400;">”</span><span style="font-weight: 400;"> to find the </span><strong>Incoming Webhook</strong><span style="font-weight: 400;"> application.  </span></p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/fca02e44db32f7c01cd8a345ca9619fb.iix" width="644" height="196" /></p>
<p>Next you will add a team to the webhook and provide a name</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/9bc0ae48db32f7c01cd8a345ca961947.iix" width="443" height="423" /></p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/50f0e28cdb32f7c01cd8a345ca9619f6.iix" width="469" height="352" /></p>
<p> </p>
<p>When you have finished creating the webhook, be sure to copy the link for later use in ServiceNow.</p>
<p> </p>
<p><strong><u>Step 2: Preparing ServiceNow</u></strong></p>
<p> </p>
<p>Prerequisites:</p>
<ul><li>IntegrationHub plugins are installed on the instance you are using.  Go to System Definition – plugins and search for “flow” to see all of the plugins listed.  All of the plugins starting with the word flow should be in the installed state.<img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/b1316ac0db72f7c01cd8a345ca9619b6.iix" /></li></ul>
<ul><li>Ensure your user account in ServiceNow has the flow_designer role assigned.  Contact your ServiceNow administrator to request this access.</li></ul>
<p><strong><span style="text-decoration: underline;">Step 3: Creating Flows</span> </strong></p>
<p><strong>Example Scenario:</strong></p>
<p>The Security Operations team primarily uses Microsoft Teams for team communication.  They have asked about leveraging Microsoft Teams to see incidents in ServiceNow.  You want to create a flow that takes all new incidents assigned to the Security Operations assignment group and posts them into a Microsoft Teams Channel. </p>
<p> </p>
<ul><li>Open Flow Designer and create a new flow <img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/05912ac8db72f7c01cd8a345ca961992.iix" /></li></ul>
<ul><li>Name your flow and add it to the Global <img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/09b12200dbb2f7c01cd8a345ca961934.iix" /></li></ul>
<ul><li>Create your trigger conditions</li></ul>
<ol style="padding-left: 30px;"><li><ul><li>New records (created) on the incident table</li></ul>
<ul><li>Filter by assignment group – Security Operations <br /><br /><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/6912aec4dbb2f7c01cd8a345ca961945.iix" /></li></ul>
<ul><li>Create your actions</li></ul>
<ol><li><ol><li>Under Add an actions select Microsoft Teams and Post Incident Detail <img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/5bd2a248dbf2f7c01cd8a345ca96196a.iix" /></li></ol>
<ul><li>Add your webhook URL, Drag the Incident Record Pill over to the incident field, and create a title for your post <img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/f303e2c8dbf2f7c01cd8a345ca96191e.iix" /></li></ul>
<ul><li>Click Done</li></ul>
</li></ol>
</li></ol>
<ul><li>Save and Test your flow</li><li><ul><li>Save the flow</li><li>Identify or create an incident record already assigned to the security operations group and copy that record</li><li>Click the test button on the top right hand of the flow</li><li>Choose your incident record</li><li>Watch your Microsoft Teams Channel to see if the test was successful.  You should see the following in your channel <img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/47536ec0db36f7c01cd8a345ca9619dd.iix" /></li></ul>
</li></ul>
<p><span style="text-decoration: underline;"><strong>Summary</strong></span></p>
<p>Using the standard Microsoft Teams spoke you can post messages, incident details, change details and problem details into a Microsoft Teams channel creating better collaboration in your enterprise.</p>
<p>In the next blog post, we dive into management of Channels and Teams using the Microsoft Teams Graph Spoke released in the ServiceNow store.</p>
<p>Notes:</p>
<p>Microsoft Teams Documentation<br /> <a href="https://docs.servicenow.com/bundle/madrid-servicenow-platform/page/administer/integrationhub/reference/microsoft-teams-spoke.html" rel="nofollow">https://docs.servicenow.com/bundle/madrid-servicenow-platform/page/administer/integrationhub/reference/microsoft-teams-spoke.html</a></p>
<p>Slack and Microsoft Teams: Is Enterprise Collaboration a Two Horse Race? <a href="https://www.cmswire.com/digital-workplace/slack-and-microsoft-teams-is-enterprise-collaboration-a-two-horse-race/" rel="nofollow">https://www.cmswire.com/digital-workplace/slack-and-microsoft-teams-is-enterprise-collaboration-a-two-horse-race/</a></p>
<p style="padding-left: 30px;"> </p>