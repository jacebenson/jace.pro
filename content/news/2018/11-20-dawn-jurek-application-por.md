---
title: "Application Portfolio Managementa better way to herd cats"
date: 2018-11-20T04:46:14.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=1fd1d372dbf967409a64e15b8a9619fa"
---
<p>Managing a company’s software applications can be like herding cats. Over the years, many enterprises accumulate a large—and unruly!—inventory of apps. Over time, some become obsolete, or they’re duplicated by others, or they’re underutilized, or they’re no longer aligned with the company’s goals. ServiceNow’s <strong>Application Portfolio Management</strong> (APM) application helps you manage all those apps to get the best value out of them.</p>
<p>In this installment of our <a title="NOWSupport best practices series" href="community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" target="_blank" rel="nofollow">NOWSupport best practices series</a>, we’ll take a look at APM and show you where you can learn more about it.</p>
<p>To help you get started, check out our <a title="Application Portfolio Management (APM) playlist" href="https://www.youtube.com/playlist?list&#61;PLCOmiTb5WX3o2ZlBuZqIJiDZ_Hz4I3zJv" target="_blank" rel="nofollow">Application Portfolio Management (APM) playlist</a> on our <a title="NOWsupport YouTube channel" href="https://www.youtube.com/user/servicenowdemo" target="_blank" rel="nofollow">NOWsupport YouTube channel</a>, starting with this video:</p>
<p><iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/uMK-2C4fpeg"></iframe></p>
<h3>The big picture</h3>
<p>Before we zoom in on APM, let’s step back for a wider view. APM is part of a suite of ServiceNow applications for managing IT resources in the context of the business functions they support, like a customer website or an email service. Let’s take a look at that application suite and how APM fits into it.</p>
<p><img style="max-width: 100%; max-height: 480px; display: block; margin-left: auto; margin-right: auto;" src="e0e393bedbf967409a64e15b8a96198d.iix" width="438" height="325" /></p>
<p>At the base of the application suite is the <strong>Discovery</strong> application. Discovery searches your network for hardware and software configuration items (CIs) and adds them to the ServiceNow configuration management database (CMDB).</p>
<p>The <strong>Service Mapping</strong> application takes discovery a step farther. It uses a top-down approach to capture the relationships between CIs and the business functions they support. It typically starts at a user entry point to a business service, like the URL of a web page or the domain name of an email service, and drills down to identify the hardware and software CIs that support that service. APM uses this information to understand your applications, and to identify your business services and the underlying technologies (software models) they use.</p>
<p><img style="max-width: 100%; max-height: 480px; display: block; margin-left: auto; margin-right: auto;" src="e5349bfedbf967409a64e15b8a96191d.iix" width="237" height="377" /></p>
<p>Meanwhile, the <strong>Software Asset Management</strong> (SAM) application uses the software CIs from Discovery to build an inventory of software models, license allocations, and usage across the company. APM’s <strong>Technology Portfolio Management</strong> (TPM) feature uses the SAM software inventory to manage the vendor and internal life cycles for each technology. Finally, you link each business service to its underlying technologies by creating entries in the Business Service Software Models table.</p>
<p>Together, APM and its application suite let you manage your enterprise apps in alignment with the business services they support and the business capabilities they’re used for.</p>
<h3>APM 101</h3>
<p>So with that big picture as the background, what can APM do for you? To put it simply, APM helps you take control of that potentially messy inventory of apps. In particular, APM helps you:</p>
<p>- Find out what apps you have.</p>
<p>- Collect metrics for each app, like quality, cost, usage and risk.</p>
<p>- Assess the value of each app to your business.</p>
<p>- Decide whether to invest in the app, maintain it as is, replace it, or retire it.</p>
<p>- Take action to carry out your decision.</p>
<p>Let’s take a look at some features. First off, the APM <strong>application list</strong> shows you what apps you have, with details like architecture type, number of users, age, and contract end date.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="5d745f32db3d67409a64e15b8a96199e.iix" /></p>
<p>The <strong>application landscape</strong> gives you an overview of your entire inventory, like the top ten apps by usage and the number of apps broken down in many ways.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="7294df72db3d67409a64e15b8a961995.iix" /></p>
<p>The <strong>group analysis</strong> lets you look at your app categories in light of different measures, or <em>indicators</em>, like business value, number of users, or cost of support.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="fea453b2db3d67409a64e15b8a96195e.iix" /></p>
<p>Clicking a category gives you a closer look at the individual apps in terms of those indicators. This chart plots the business value of each app against the technical risk.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="94c413f2db3d67409a64e15b8a9619cc.iix" /></p>
<p>The <strong>technology portfolio</strong> shows the life cycles for each technology used by the app—both the software publisher’s life cycle and your company’s internal life cycle. This information helps you evaluate risk and plan upgrades.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="40d417f2db3d67409a64e15b8a9619b0.iix" /></p>
<p>The <strong>Capability Map</strong> gives you information on your various business capabilities and their supporting applications.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="7ce4dff2db3d67409a64e15b8a961990.iix" /></p>
<p>And the Technology Risk display shows you which business capabilities are at risk from their underlying technologies.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="12f4d336db3d67409a64e15b8a961930.iix" /></p>
<p>With these features, APM helps you manage your enterprise applications and keep them aligned with your business goals.</p>
<h3>For more information</h3>
<p>To learn more about APM, check out these resources:</p>
<p><a title="APM video playlist" href="https://www.youtube.com/playlist?list&#61;PLCOmiTb5WX3o2ZlBuZqIJiDZ_Hz4I3zJv" target="_blank" rel="nofollow">APM video playlist</a> (NOWsupport YouTube channel)</p>
<p><a title="Application Portfolio Management" href="https://docs.servicenow.com/bundle/london-it-business-management/page/product/application-portfolio-management/concept/application-portfolio-management.html" target="_blank" rel="nofollow">Application Portfolio Management</a> (product documentation)</p>
<p>--</p>
<p>Behind the scenes here at ServiceNow, the Knowledge Management and Multimedia teams work closely with subject matter experts to deliver critical information to our customers. We’ve found that certain topics come up frequently, in the form of best practices that can help you keep your ServiceNow instances running smoothly. This series targets those topics so that you and your organization can benefit from our collective expertise. If you have a best practices topic you&#39;d like us to cover in this series, please let us know in the comments below.</p>
<p> </p>
<p>To access all the blog posts in this series, see our <a title="NOWSupport best practices series list" href="community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" target="_blank" rel="nofollow">NOWSupport best practices series list</a>.</p>