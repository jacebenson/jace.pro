---
title: "HR lifecycle events What are they and how do you configure them"
date: 2018-12-04T02:15:31.000Z
authors: ["Dawn Jurek"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=8ca5be97dbc2e780f0612183ca961986"
---
<p style="text-align: left;">During their journey with your company, employees will probably make requests of your HR department. With HR Service Delivery on the Now Platform, you can automate fulfillment of these requests so that employees can self-serve whenever possible, and minimize the number of tasks that HR agents need to perform.</p>
<p style="text-align: left;">Many of these requests are pretty straightforward to fulfill:</p>
<p style="text-align: left; padding-left: 30px;">&#34;Can I get more information about dental benefits?&#34;</p>
<p style="text-align: left; padding-left: 30px;">&#34;I want to change my retirement contribution.&#34;</p>
<p style="text-align: left; padding-left: 30px;">&#34;I need an employment verification letter.&#34;</p>
<p style="text-align: left;">But some requests get more complicated, as multiple activities and departments are required. Take this employee maternity leave process, for example. How can you automate a complex process like this? Automation of more complicated processes is accomplished using lifecycle events.</p>
<p style="text-align: left; padding-left: 30px;"><strong>Example Maternity Leave Process</strong></p>
<ul><li><strong>Employee</strong> requests maternity leave.</li><li><span style="color: #339966;"><strong>HR department</strong></span> approves the request and creates the HR case.</li><li><strong>Employee</strong> uploads medical documentation to verify pregnancy.</li><li><strong>Employee</strong> reviews corporate discounts offered for baby products.</li><li><span style="color: #800080;"><strong>Manager</strong> </span>sends flowers to employee after the birth.</li><li><strong>Employee</strong> uploads birth certificate.</li><li><strong>Employee</strong> enrolls baby in benefits</li><li><strong>Employee</strong> can request flexible working schedule by signing flex letter by deadline.</li><li><span style="color: #339966;"><strong>HR department</strong></span> approves flexible work schedule request.</li><li><span style="color: #3366ff;"><strong>IT department</strong></span> fulfills request for work at home package if flex letter signed by deadline.</li><li>OR <span style="color: #3366ff;"><strong>IT department</strong></span> suspends employee accounts until employee returns to work, and re-enables upon return to work.</li><li><strong>Employee</strong> reviews options for quiet/nursing rooms in the facility.</li><li><strong>Employee</strong> takes maternity leave survey.</li></ul>
<h3>What&#39;s a lifecycle event?</h3>
<p>Two of the most familiar examples of a “lifecycle event” include onboarding and offboarding, but a lifecycle event can include any process that reflects a change for an employee.</p>
<p>Here are some more examples:</p>
<ul><li>Leave of absence - paternity, medical, or military</li><li>Relocation </li><li>Promotion</li><li>Retirement</li></ul>
<p style="text-align: left;">The HR Service Delivery Enterprise Onboarding and Transitions application provides the tools to help you automate these complex, multi-department processes without complex coding, process maps or workflow editors. Everyone involved has insight into the entire process, and the activities that they&#39;re responsible for.</p>
<p>In this installment of our <a title="NOWSupport best practices series" href="community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" target="_blank" rel="nofollow">NOWSupport best practices series</a>, we give you the full overview of lifecycle events:</p>
<ul><li>Watch our video below for an overview of lifecycle events, and to see a demo of a lifecycle event—from initial request to fulfillment—within the Employee Service Center.<br /><br /></li><li>Review the steps below for configuring a lifecycle event, and see our configuration video for a full demo and more details.</li></ul>
<p><iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/zu34s165J10"></iframe></p>
<h3>Configuring a lifecycle event - the best practices approach</h3>
<h4 style="text-align: left;">Step 1 - Define and Document your Process </h4>
<p>What are all of the steps? What person or department is responsible for each step? List these out, then group activities into logical sets of activities for each phase of the process. Be sure everyone involved in the process gets a chance to provide input, and that it&#39;s documented.</p>
<p>Here&#39;s the list from the top of this article, broken down into activity sets. Notice that we also indicated which activities require an action, versus those that provide information. We can make these information-only activities optional.</p>
<p><img style="max-width: 100%; max-height: 480px; display: block; margin-left: auto; margin-right: auto;" src="b6a12723db4ea384107d5583ca961974.iix" /></p>
<p>Notice too that we included two conditional activities for the IT department in the <strong>On Leave</strong> activity set. If the condition is met, one activity is triggered, and if not, the other activity is triggered.</p>
<h4>Step 2 - Identify/Build Technical Requirements</h4>
<p>Second, you identify the technical requirements you&#39;ll need such as HR templates, owning groups, etc. The great news here is that you can reuse items used in other processes.</p>
<h4>Step 3 - Build your Lifecycle Event</h4>
<p>Third, you build your lifecycle event by creating an Activity Set Type, and then adding the Activity Sets and Activities identified in Step 1. For each Activity set, you specify what triggers it - another activity set, a date, etc.</p>
<h4>Step 4 - Build an HR Service for your Lifecycle Event</h4>
<p>The last step is to build an HR service to trigger your lifecycle event. <a title="Create or modify an HR service" href="https://docs.servicenow.com/bundle/london-hr-service-delivery/page/product/human-resources/task/t_CreateOrModifyHRServices.html" target="_blank" rel="nofollow">Create or modify an HR service</a> provides detailed documentation of this process.</p>
<p><iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/O0U8NdWYMHc"></iframe></p>
<h3>For more information:</h3>
<p><a title="Getting Started with HR video playlist" href="https://www.youtube.com/playlist?list&#61;PLCOmiTb5WX3oNJglvD4AFse05DZ4WgFAH" target="_blank" rel="nofollow">Getting Started with HR video playlist</a> on the <a title="NOWsupport YouTube channel" href="https://www.youtube.com/user/servicenowdemo" target="_blank" rel="nofollow">NOWsupport YouTube channel</a></p>
<p><a title="Enterprise Onboarding and Transitions" href="https://docs.servicenow.com/bundle/london-hr-service-delivery/page/product/human-resources/reference/enterprise-onboarding-transitions-landing-page.html" target="_blank" rel="nofollow">Enterprise Onboarding and Transitions</a> (product documentation)</p>
<p>--</p>
<p>Behind the scenes here at ServiceNow, the Knowledge Management and Multimedia teams work closely with subject matter experts to deliver critical information to our customers. We’ve found that certain topics come up frequently, in the form of best practices that can help you keep your ServiceNow instances running smoothly. This series targets those topics so that you and your organization can benefit from our collective expertise. If you have a best practices topic you&#39;d like us to cover in this series, please let us know in the comments below.</p>
<p>To access all the blog posts in this series, see our <a title="NOWSupport best practices series list" href="community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" target="_blank" rel="nofollow">NOWSupport best practices series list</a>.</p>