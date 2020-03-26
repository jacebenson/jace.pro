---
title: "Besides the Crown Jewels what does London have for us"
date: 2018-07-29T15:19:24.000Z
authors: ["Göran Lundqvist"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ed4bae5adbef17449d612926ca9619ea"
---
<p>It&#39;s time for another drill down of a new ServiceNow release. I kind of skipping all of those big things since they being covered both inside and out. I try to focus on the smaller things that the release have for us and hopefully can give us a big &#34;YES!&#34; or &#34;Finally!&#34;. I did it for Jakarta and Kingston which you can find here:</p>
<p><a title="Hidden diamonds of Jakarta" href="community?id&#61;community_blog&amp;sys_id&#61;9aedaee9dbd0dbc01dcaf3231f961997" target="_blank" rel="nofollow">Hidden diamonds of Jakarta</a></p>
<p><a title="Lost treasures of Kingston" href="community?id&#61;community_blog&amp;sys_id&#61;d0ecaa65dbd0dbc01dcaf3231f9619d4" target="_blank" rel="nofollow">Lost treasures of Kingston</a></p>
<p>So lets see what London release has for us.</p>
<h3><strong>Flow designer goes into the Service Catalog:</strong></h3>
<p>One of the raising stars in Kingston was the Flow designer and in London we don&#39;t get disappointed. I really like the flow designer and have the privilege of being a member of the Designer Partner Program with the flow designer. So I crossed my fingers for this to get into this release and it has. Now it&#39;s possible to choose if you want a catalog item to have a workflow or a flow doing the magic in the background. And this is just one of the things in London release that is new with Flow Designer, but I see it as a big shout out &#34;I&#39;m here to stay, use me!&#34; and we probably see it take even more spotlight in Madrid release.</p>
<p>More info: <a title="Create a flow with a Service Catalog trigger" href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/administer/flow-designer/task/create-sc-flow.html" target="_blank" rel="nofollow">Create a flow with a Service Catalog trigger</a></p>
<p> </p>
<h3><strong>List v3 heading off the into the night:</strong></h3>
<p>I can&#39;t say I used the List v3 a lot. There was some nice features with it, but I myself always experienced some kind of small performance issues making me not use it so much. Why the List v3 is leaving us is unclear, but I believe that the Agent workspace is one of the biggest reasons for it to go away. Having issues with it and having a new framework coming on strong doesn&#39;t really give the meaning of spending time on something that will soon go away.</p>
<p>More info: <a title="Pretty far down in this summary" href="https://docs.servicenow.com/bundle/london-release-notes/page/release-notes/summary/rn-summary-upgrade-info.html" target="_blank" rel="nofollow">Pretty far down in this summary</a></p>
<p> </p>
<h3><strong>Multi-row set in Catalog variables:</strong></h3>
<p>Back to the Service Catalog and there are many new cool features in it in the London release.<br />I&#39;ve see a lot of questions and solutions for this on the community over the years and now it&#39;s finally here as a OOTB solution. Everyone probably have requirement that a user should be able to within e.g. a record producer have a multi-row varible where it can fill in more that 1 CI or user and in a dynamic way choosing how may rows you want to use for each form. This new functionality also works in the Service Portal which I really hope all new stuff in the Service Catalog will do, forever :)</p>
<p>More info: <a title="Multi-row variable set" href="https://docs.servicenow.com/bundle/london-it-service-management/page/product/service-catalog-management/concept/c_ServiceCatalogVariableSets.html" target="_blank" rel="nofollow">Multi-row variable set</a></p>
<p> </p>
<h3><strong>Permission for Service Catalog variables:</strong></h3>
<p>And let&#39;s keep heading down the Service Catalog road. Another great feature in my eyes are the possibility to now be able to set permissions on a variable. Now you can set who is allowed to read/write/create data in a variable before and after it&#39;s being submitted. Right now, you can only set it through roles, but hopefully this feature will expand and perhaps a condition builder or similar will be available as well since roles are to cumbersome in some situations to handle access.</p>
<p>More info: <a title="A bit down in this link" href="https://docs.servicenow.com/bundle/london-it-service-management/page/product/service-catalog-management/task/t_CreateAVariableForACatalogItem.html" target="_blank" rel="nofollow">A bit down in this link</a></p>
<p> </p>
<h3><strong>Create standard change from incident:</strong></h3>
<p>I know as a former customer I really was annoyed that there wasn&#39;t a easy way to create a standard change from an incident. Not all incidents were solved with emergency changes. But now there is a functionality to do this. It&#39;s connected to the standard change catalog and if you haven&#39;t start using that yet, I recommend reading up on it and see how it fit your organisation.</p>
<p>More info: <a title="New features in Incident Management" href="https://docs.servicenow.com/bundle/london-release-notes/page/release-notes/it-service-management/incident_management-rn.html" target="_blank" rel="nofollow">New features in Incident Management</a></p>
<p> </p>
<h3><strong>New way to see change schedule:</strong></h3>
<p>I don&#39;t think I&#39;m the only one that have gotten questions how to get a good overview of the changes that are in play and something that at least looks like the schedule in the CAB workbench. Now with London there be some nice new features in this area and finally there is a nice view to go to for this purpose. Change process might not be the most fun process in the block, but with this, it steps up a few places.</p>
<p>More info: <a title="Change schedule" href="https://docs.servicenow.com/bundle/london-it-service-management/page/product/change-management/concept/change-schedule.html" target="_blank" rel="nofollow">Change schedule</a></p>
<p> </p>
<h3><strong>Validation scripts for service portal:</strong></h3>
<p>I really like how I see OOTB functionality comes along that I can trace back to many questions on the community about and custom solution. Here we are talking about validating so what the user has inputted is what we want. E.g. it&#39;s a correct email or similar. This can applied for a specific field type and works in the Service Portal as well. Depending on your are getting a fresh London release or upgrading you might need to go through a few extra steps to activate it for the mobile/Service Portal.</p>
<p>More info: <a title="Activate Service Portal validation scripts" href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/build/service-portal/task/activate-sp-validation-scripts.html" target="_blank" rel="nofollow">Activate Service Portal validation scripts</a></p>
<p> </p>
<h3><strong>Custom URL:</strong></h3>
<p>Seen in many other cloud companies, this finally arrived to ServiceNow as well. When I started out as a customer this was something we wanted and sadly the only solution for it was through a reverse proxy at our infrastructure which sadly would give us a SPOF which we didn&#39;t like. But now you can get ride of your xxxx.service-now.com URLs and instead easy have your goranlundqvist.com visible for the users instead. Your old url will still work as well which is good to have. Another nice feature here is that you can have multiple custom URLS that e.g. points at different portals and so on. This also give a better layer of good looking so the user can&#39;t just remove the suffix of the portal and get to the &#34;normal&#34; login screen/UI and so on.</p>
<p> More info: <a title="Associating custom URLs to your instance" href="https://docs.servicenow.com/bundle/london-platform-administration/page/integrate/authentication/concept/custom-url.html" target="_blank" rel="nofollow">Associating custom URLs to your instance</a></p>
<p> </p>
<h3><strong>Slack &amp; Microsoft Team as notification channel:</strong></h3>
<p>More and more integrations with other systems creates more and more requirements on how to handle notifications and so on. Now it&#39;s possible to setup so instead of having a notification as email or SMS you can send it as a message to the user in Slack or Microsoft Team.</p>
<p>More info: <a title="Create a messaging notification" href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/administer/notification/task/create-messaging-notification.html" target="_blank" rel="nofollow">Create a messaging notification</a></p>
<p> </p>
<p><br />This is just a small selection of the small things there are and if you think I missed something, please just write a comment about it to let me and others know about it.</p>
<p>//Göran</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="fba317d6db2757449d612926ca9619ee.iix" /></p>