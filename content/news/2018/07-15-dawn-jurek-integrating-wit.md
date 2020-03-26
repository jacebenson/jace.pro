---
title: "Integrating with First Advantage and other thirdparty HR background check systems"
date: 2018-07-15T02:08:08.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=12efeba9db9fd7800be6a345ca9619bd"
---
<p>In our last article, <a title="The basics of integrating with SuccessFactors and other HR management systems" href="community?id&#61;community_blog&amp;sys_id&#61;2cf37273db2d5b40852c7a9e0f961920" target="_blank" rel="nofollow">The basics of integrating with SuccessFactors and other HR management systems</a>, we showed you the process for integrating with third-party HR management systems.</p>
<p>Did you know you can also leverage the power of the ServiceNow platform to streamline and automate background checks?</p>
<p>In this installment of our <a style="font-weight: inherit; font-style: inherit; font-family: inherit; color: #3778c7;" href="community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" target="_blank" rel="nofollow">NOWSupport best practices series</a>, we cover the basics of integrating with HR background check systems, including a quick primer on how the ServiceNow platform can evolve your HR services to a new level with <a href="https://www.servicenow.com/products/hr-service-delivery.html" target="_blank" rel="nofollow">HR Service Delivery</a>.</p>
<p>Check out our video below, which guides you through the process of integrating your HR background check system with ServiceNow in the Kingston release, and provides examples of everything discussed in this article.</p>
<p> <iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/Suh67ITavKg"></iframe></p>
<h2>What&#39;s ServiceNow HR Service Delivery?</h2>
<p>ServiceNow HR Service Delivery is a suite of applications designed to provide HR services within your organization with a consumer-like service experience, while increasing HR productivity.</p>
<p>HR Service Delivery applications include:</p>
<p style="padding-left: 30px;"><a href="https://docs.servicenow.com/bundle/kingston-hr-service-delivery/page/product/human-resources/reference/case-knowledge-management-landing-page.html" target="_blank" rel="nofollow">Case and Knowledge Management</a> - standardize the documentation, interaction, and fulfillment of employee inquiries and requests.</p>
<p style="padding-left: 30px;"><a href="https://docs.servicenow.com/bundle/kingston-hr-service-delivery/page/product/human-resources/reference/employee-service-center-landing-page.html" target="_blank" rel="nofollow">Employee Service Center</a> - provide a single place for employees to quickly and easily get all the HR services they need.</p>
<p style="padding-left: 30px;"><a href="https://docs.servicenow.com/bundle/kingston-hr-service-delivery/page/product/human-resources/reference/enterprise-onboarding-transitions-landing-page.html" target="_blank" rel="nofollow">Enterprise Onboarding and Transitions</a> - easily set up and manage lifecycle events such as employee onboarding, offboarding, relocation, leaves of absence, and other processes that span across multiple departments on a single service delivery platform.</p>
<h2>What third-party HR background check systems can ServiceNow integrate with?</h2>
<p>You can integrate HR Service Delivery with any HR background check system that uses SOAP or REST services.</p>
<p>The HR Integrations application provides a base integration for <strong>First Advantage</strong> in Kingston, that you can use as-is, or customize as needed.</p>
<h2>What are the steps to integrating with a third-party background check system?</h2>
<p>The process boils down to four steps. You must have the HR integrations admin role (<strong>sn_hr_integrations.admin</strong>) to configure an integration.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="08e3b7e1dbdfd7800be6a345ca961992.iix" /></p>
<p style="padding-left: 30px;"> </p>
<h3 style="padding-left: 30px;">Step 1. Provide the source credentials</h3>
<p style="padding-left: 60px;">In this step, you navigate to <strong>HR Integrations Sources</strong>, and either edit the existing source credentials already set up for First Advantage, or add a credential for another third-party system. This is where you define the SOAP credentials, if applicable.</p>
<p style="padding-left: 60px;"><img style="max-width: 100%; max-height: 480px;" src="6b787be9dbdfd7800be6a345ca9619de.iix" /></p>
<p style="padding-left: 60px;"> </p>
<p style="padding-left: 60px;">Some third-party systems require additional inputs, which you configure in the <strong>HR Integrations Additional Inputs</strong> tab. For example, First Advantage requires a <strong>parent account</strong>, <strong>account</strong>, and<strong> requestor</strong> <strong>email address</strong>.</p>
<p style="padding-left: 60px;"><img style="max-width: 100%; max-height: 480px;" src="914a3baddbdfd7800be6a345ca961980.iix" /></p>
<p style="padding-left: 30px;"> </p>
<h3 style="padding-left: 30px;">Step 2. Configure and/or verify the integration</h3>
<p style="padding-left: 60px;">For integrating with First Advantage, you verify the base configuration provided in the system for the following items. For other third-party systems, you need to configure them.</p>
<p style="padding-left: 60px;"><strong>a. HR Service</strong> - Define or configure the HR service. For First Advantage, the <strong>Request Background Check by First Advantage</strong> HR service is provided. Note that you must have the HR core admin role (sn_hr_core.admin) to create or edit HR services.</p>
<p style="padding-left: 60px;"><strong>b. HR Web Services</strong> - Configure SOAP and/or REST credentials that communicate with the third-party system.</p>
<p style="padding-left: 90px;"><strong>Note: </strong>For background check systems using REST services<strong> </strong>integrations, you need to configure the REST credentials in a new REST Message record by navigating to <strong>HR REST Services</strong>.</p>
<p style="padding-left: 90px;"><strong><img style="max-width: 100%; max-height: 480px;" src="3e4df325db131b800be6a345ca961938.iix" /></strong></p>
<p style="padding-left: 60px;"><strong>c. HR Service Mapping</strong> - Map the HR services to the appropriate HR web services.</p>
<p style="padding-left: 60px;"><strong>d. HR Outbound Schema Mapping </strong>- Map data fields from the HR source tables to the appropriate fields in the third-party system.</p>
<p style="padding-left: 60px;"><strong>e. HR Schema Mapping</strong> - Map data fields from the third-party system to the appropriate fields in the HR staging tables.</p>
<p style="padding-left: 60px;"><strong>e. HR Transform Maps </strong>- Map the HR staging table to the appropriate HR target tables.</p>
<p style="padding-left: 90px;"> </p>
<h3 style="padding-left: 30px;">Step 3. Add the background check packages</h3>
<p style="padding-left: 60px;">A background check package is a set of activities defined by the third-party system to be included in a background check, identified by a <strong>Package ID</strong>.</p>
<p style="padding-left: 60px;">To add a background check package, navigate to <strong>HR Integrations&gt; Background Check Package</strong>. You can set up more that one background check package. For example, you may have a background check package for background checks only, and one that includes a drug check as well.</p>
<p style="padding-left: 60px;"> <img style="max-width: 100%; max-height: 480px;" src="3862883ddb131b800be6a345ca961960.iix" /></p>
<h3 style="padding-left: 30px;">Step 4. Create cases to request background checks by the third-party system</h3>
<p style="padding-left: 60px;">Now that the integration is configured and you have at least one background check package set up, HR agents with the HR case writer role (<strong>sn_hr_core.case_writer</strong>) can create cases to request background checks for prospective or existing employees.</p>
<p style="padding-left: 60px;">When creating a case, you must select <strong>HR Talent Management Case</strong> for the <strong>COE</strong>, then select the appropriate background check package.</p>
<p style="padding-left: 60px;"><img style="max-width: 100%; max-height: 480px;" src="bfa48c31db531b800be6a345ca96195a.iix" /> </p>
<h2>What happens after the HR agent requests a background check?</h2>
<p style="padding-left: 30px;">After the case writer requests the background check, the third-party system pushes updates to ServiceNow, then ServiceNow takes care of updating the case details. </p>
<p style="padding-left: 30px;">Here&#39;s the entire process:</p>
<p><img style="max-width: 100%; max-height: 480px;" src="02c5e892db13170023f4a345ca961930.iix" /></p>
<h3>For more information</h3>
<p><a href="https://docs.servicenow.com/bundle/kingston-hr-service-delivery/page/product/human-resources/concept/scoped-hr-third-party-integrations.html" target="_blank" rel="nofollow">HR integrations</a> (product documentation)</p>
<p><a href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0678031" target="_blank" rel="nofollow">HR Integrations FAQ</a> (knowledge base article)</p>
<p><a href="community?id&#61;community_question&amp;sys_id&#61;903f7558dba81780fc5b7a9e0f961929&amp;view_source&#61;searchResult" target="_blank" rel="nofollow">The Ins and Outs of the Kingston HR Integrations Module</a> (video presentation by <a href="community?id&#61;community_user_profile&amp;user&#61;717eca69dbd41fc09c9ffb651f961905" target="_blank" rel="nofollow">Michael Sheridan</a>)</p>
<p> </p>
<p>--</p>
<p> </p>
<p>Behind the scenes here at ServiceNow, the Knowledge Management and Multimedia teams work closely with subject matter experts to disseminate critical information to our customers. We&#39;ve found that certain topics come up frequently, in the form of best practices that can help you keep your ServiceNow instances running smoothly. This series targets those topics so that you and your organization can benefit from our collective expertise. If you have a best practices topic you&#39;d like us to cover in this series, please let us know in the comments below.</p>
<p> </p>
<p>To access all of the blog posts in this series, see our <a style="font-weight: inherit; font-style: inherit; font-family: inherit; color: #3778c7;" href="community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" target="_blank" rel="nofollow">NOWSupport best practices series list.</a></p>