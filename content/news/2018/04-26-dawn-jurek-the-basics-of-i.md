---
title: "The basics of integrating with SuccessFactors and other HR management systems"
date: 2018-04-25T21:42:36.000Z
authors: ["Dawn Jurek"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=2cf37273db2d5b40852c7a9e0f961920"
---
<p>Did you know you can leverage the power of the ServiceNow platform to streamline and automate your HR services even if you&#39;re using a third-party system for managing your HR data?</p>
<p>In this installment of our <a style="font-weight: inherit; font-style: inherit; font-family: inherit; color: #3778c7;" title="" href="community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" rel="nofollow">NOWSupport best practices series</a>, we cover the basics of integrating with HR management systems, including a quick primer on how the ServiceNow platform can evolve your HR services to a new level with <a href="https://www.servicenow.com/products/hr-service-delivery.html" rel="nofollow">HR Service Delivery</a>.</p>
<p>Check out our video below, which guides you through the process of integrating your HR management system with ServiceNow starting in the Kingston release, and provides examples of everything discussed in this article.</p>
<p><iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/-wF70Lls6UI"></iframe></p>
<h2>What&#39;s ServiceNow HR Service Delivery?</h2>
<p>ServiceNow HR Service Delivery is a suite of applications designed to provide HR services within your organization with a consumer-like service experience, while increasing HR productivity.</p>
<p>HR Service Delivery applications include:</p>
<p style="padding-left: 30px;"><a href="https://docs.servicenow.com/bundle/kingston-hr-service-delivery/page/product/human-resources/reference/case-knowledge-management-landing-page.html" rel="nofollow">Case and Knowledge Management</a> - standardize the documentation, interaction, and fulfillment of employee inquiries and requests.</p>
<p style="padding-left: 30px;"><a href="https://docs.servicenow.com/bundle/kingston-hr-service-delivery/page/product/human-resources/reference/employee-service-center-landing-page.html" rel="nofollow">Employee Service Center</a> - provide a single place for employees to quickly and easily get all the HR services they need.</p>
<p style="padding-left: 30px;"><a href="https://docs.servicenow.com/bundle/kingston-hr-service-delivery/page/product/human-resources/reference/enterprise-onboarding-transitions-landing-page.html" rel="nofollow">Enterprise Onboarding and Transitions</a> - easily set up and manage lifecycle events such as employee onboarding, offboarding, relocation, leaves of absence, and other processes that span across multiple departments on a single service delivery platform.</p>
<h3>What third-party HR management systems can ServiceNow integrate with?</h3>
<p>You can integrate HR Service Delivery with any HR management system that uses SOAP or REST services.</p>
<p>The HR Integrations application provides a base integration for <strong>SAP SuccessFactors</strong> in Kingston, that you can use as-is, or customize as needed. </p>
<h3>What are the steps to integrating with a third-party HR management system?</h3>
<p>So what does it take to integrate with a third-party HR management system? The process boils down to four steps. </p>
<p><strong>Note:</strong> There&#39;s no outbound integration for SuccessFactors.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="e4a2538ddb0faf00fb4ae15b8a961933.iix" /></p>
<h3 style="padding-left: 30px;">Step 1. Provide the source credentials</h3>
<p style="padding-left: 60px;">In this step, you navigate to <strong>HR Integrations Sources</strong>, and either edit the existing source credentials already set up for SuccessFactors, or add a credential for another third-party system. This is where you define the SOAP credentials, if applicable.</p>
<p style="padding-left: 60px;"><strong>Note: </strong>For <strong>SuccessFactors </strong>integrations, you need to enter your <strong>company_id</strong> in the <strong>HR Integrations Additional Inputs</strong> list:</p>
<p style="padding-left: 60px;"><img src="467c5898db7dd700fac7f4621f96194a.iix" /> </p>
<h3 style="padding-left: 30px;"> Step 2. Configure and/or verify the inbound integration</h3>
<p style="padding-left: 60px;">For integrating with SuccessFactors, you verify the base configuration provided in the system for the following items. For other third-party systems, you need to configure them.</p>
<p style="padding-left: 60px;"><strong>a. HR Integrations Services</strong> - Define the HR staging tables that data from the third-party system will be pulled to.</p>
<p style="padding-left: 60px;"><strong>b. HR Web Services</strong> - Configure SOAP and/or REST credentials that communicate with the third-party system.</p>
<p style="padding-left: 90px;"> <strong>Note: </strong>For <strong>SuccessFactors </strong>integrations, you need to configure the REST credentials in the <strong>Basic auth profile:</strong> </p>
<p style="padding-left: 60px;"><img src="d5103458dbf11b00fac7f4621f9619cf.iix" /></p>
<p style="padding-left: 60px;"><strong>c. HR Service Mapping</strong> - Map the HR Integration services to the appropriate HR web services.</p>
<p style="padding-left: 60px;"><strong>d. HR Schema Mapping </strong>- Map data fields from the third-party system to the appropriate fields in the HR staging tables.</p>
<p style="padding-left: 60px;"><strong>e. HR Transform Maps </strong>- Define the relationship between fields in an import set and fields in an existing ServiceNow table. </p>
<h3 style="padding-left: 30px;">Step 3. Configure the outbound integration</h3>
<p style="padding-left: 60px;">For integrating with third-party systems other than SuccessFactors, you need to configure the outbound integration.</p>
<p style="padding-left: 60px;">Note that you don&#39;t need to configure or verify an outbound configuration for SuccessFactors.</p>
<p style="padding-left: 60px;"><strong>a. HR Integration Outbound Services or HR Service</strong>- Define the HR tables or services that data is pushed from.</p>
<p style="padding-left: 60px;"><strong>b. HR Web Services</strong> - Configure SOAP and/or REST credentials that communicate with the third-party system.</p>
<p style="padding-left: 60px;"><strong>c. HR Service Mappings</strong> - Map the HR integration outbound services or HR services to the appropriate HR web services.</p>
<p style="padding-left: 60px;"><strong>d. HR Outbound Schema Mappings</strong> - Map data fields from the source tables to appropriate fields in the target system. </p>
<h3 style="padding-left: 30px;">Step 4. Schedule the integrations job</h3>
<p style="padding-left: 60px;">You can schedule the integrations job to run on a daily, weekly or monthly basis, or even on demand. </p>
<p style="padding-left: 60px;"><img style="max-width: 100%; max-height: 480px;" src="b11b9633db961b042d1efb651f96194d.iix" /></p>
<p style="padding-left: 60px;">You can monitor the progress of an integrations job in the <strong>HR Integration Job Trackers</strong> list.  </p>
<h3>For more information</h3>
<p><a title="HR integrations" href="https://docs.servicenow.com/bundle/kingston-hr-service-delivery/page/product/human-resources/concept/scoped-hr-third-party-integrations.html" target="_blank" rel="noopener noreferrer nofollow">HR integrations</a> (product documentation)</p>
<p><a title="HR Integrations FAQ" href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0678031" target="_blank" rel="noopener noreferrer nofollow">HR Integrations FAQ</a> (knowledge base article)</p>
<p>--</p>
<p>Behind the scenes here at ServiceNow, the Knowledge Management and Multimedia teams work closely with subject matter experts to disseminate critical information to our customers. We&#39;ve found that certain topics come up frequently, in the form of best practices that can help you keep your ServiceNow instances running smoothly. This series targets those topics so that you and your organization can benefit from our collective expertise. If you have a best practices topic you&#39;d like us to cover in this series, please let us know in the comments below.</p>
<p> </p>
<p>To access all of the blog posts in this series, see our <a style="font-weight: inherit; font-style: inherit; font-family: inherit; color: #3778c7;" title="NOWSupport best practices series list" href="community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" target="_blank" rel="noopener noreferrer nofollow">NOWSupport best practices series list</a>.</p>