---
title: "HR Centers of Excellence What are they and why do you need them"
date: 2018-08-14T03:36:02.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=9eb3221fdbf7df0067a72926ca96199c"
---
<p>Not every HR case is alike. Cases involving sensitive information must be accessible only by select HR agents. The process required to enroll an employee into the company medical plan bears no resemblance to that needed to fulfill a work visa transfer request. And all HR cases can&#39;t be lumped into one generic report, either. Organizational leadership wants to see specifics: How well is the onboarding process working? How many employees reported a payroll discrepancy last quarter?</p>
<p>So how do you differentiate your HR cases to ensure privacy, control processing and provide relevant reporting and metrics? That&#39;s where the HR Centers of Excellence, or COEs, come into play.</p>
<p>In this installment of our <a title="NOWSupport best practices series" href="community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" target="_blank" rel="nofollow">NOWSupport best practices series</a>, we provide a quick overview of the HR COEs:</p>
<ul><li>What is the HR COE data model?</li><li>How do I get the HR COEs on my instance?</li><li>What are the options for configuring a COE?</li><li>What&#39;s the best way to handle a request for a new HR COE?</li></ul>
<p>For more details and screen demos, be sure to watch our video <a title="HR Centers of Excellence | Overview" href="https://www.youtube.com/watch?v&#61;1vDI-y2xltU" target="_blank" rel="nofollow">HR Centers of Excellence | Overview</a>, embedded below. For more about HR in ServiceNow, see our <a title="Getting Started with HR video playlist" href="https://www.youtube.com/playlist?list&#61;PLCOmiTb5WX3oNJglvD4AFse05DZ4WgFAH" target="_blank" rel="nofollow">Getting Started with HR video playlist</a> on the <a title="NOWsupport Youtube channel" href="https://www.youtube.com/channel/UCQjE37R-Y4DTq7kUWPO83Wg" target="_blank" rel="nofollow">NOWsupport Youtube channel</a>.</p>
<h3>What is the HR COE data model?</h3>
<p>The HR COEs are tables that extend the HR Case Core table. Each COE contains Topic Categories, which contain Topic Details, which contain HR Services. See our video below for an example.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="787eaea3dbbf9f00fff8a345ca96191d.iix" /></p>
<h3>How do I get the HR COEs?</h3>
<p>HR COEs are installed with the HR Service Management application as of the Istanbul release. As of the Kingston release, these pre-defined COEs are:</p>
<ul><li><strong>HR Employee Relations Case </strong>[sn_hr_core_case_relations]</li><li><strong>HR Payroll Case </strong>[sn_hr_core_case_payroll]</li><li><strong>Talent Management </strong>[sn_hr_core_talent_management]</li><li><strong>HR Total Rewards Case </strong>[sn_hr_core_case_total_rewards]</li><li><strong>HR Workforce Administration Case </strong>[sn_hr_core_case_workforce_admin]</li><li><strong>HR Lifecycle Events Case </strong>[sn_hr_le_case] - Available when you install the <strong><span class="ph uicontrol">Human Resources Scoped App: Lifecycle Events</span></strong> [com.sn_hr_lifecycle_events] plugin. </li></ul>
<h3>What are the options for configuring a COE?</h3>
<p>You can configure data, services and processes for each COE. See our video below for a demo of how to create a new Topic Category.</p>
<p>You can also disable or enable COEs via the <strong>COE Configuration</strong> form. Navigate to <strong>HR Administration &gt; COE Configuration</strong> to enable or disable COEs in your instance. </p>
<p> <img style="max-width: 100%; max-height: 480px;" src="b739cf2bdbfbdf00fff8a345ca9619e4.iix" /></p>
<p> </p>
<h3>What&#39;s the best way to handle a request for a new HR COE?</h3>
<p>Creating a new HR COE shouldn&#39;t be necessary. See our video below for an example of how simply adding a new Topic Category and HR Service negates the need to create a new COE. </p>
<p> </p>
<p><iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/1vDI-y2xltU"></iframe></p>
<h3>For more information</h3>
<p><a title="COE Configuration" href="https://docs.servicenow.com/bundle/london-hr-service-delivery/page/product/human-resources/task/COEConfiguration.html" target="_blank" rel="nofollow">COE Configuration</a> (product documentation)</p>
<p><a title="View or modify Center of Excellence (COE)" href="https://docs.servicenow.com/bundle/london-hr-service-delivery/page/product/human-resources/task/t_CreateOrModifyCOE.html" target="_blank" rel="nofollow">View or modify Center of Excellence (COE)</a> (product documentation)</p>
<p><a title="Getting Started with HR video playlist" href="https://www.youtube.com/playlist?list&#61;PLCOmiTb5WX3oNJglvD4AFse05DZ4WgFAH" target="_blank" rel="nofollow">Getting Started with HR video playlist</a>  (NOWsupport YouTube channel)</p>
<p>--</p>
<p>Behind the scenes here at ServiceNow, the Knowledge Management and Multimedia teams work closely with subject matter experts to disseminate critical information to our customers. We&#39;ve found that certain topics come up frequently, in the form of best practices that can help you keep your ServiceNow instances running smoothly. This series targets those topics so that you and your organization can benefit from our collective expertise. If you have a best practices topic you&#39;d like us to cover in this series, please let us know in the comments below.</p>
<p>To access all of the blog posts in this series, see our <a href="community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" rel="nofollow">NOWSupport best practices series list</a>.</p>