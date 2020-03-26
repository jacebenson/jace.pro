---
title: "CMDB   What is a configuration management database and why do you need one"
date: 2018-04-11T19:46:22.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=e913125fdbd9d7404837f3231f9619de"
---
<p>Can you answer the following questions about your IT service delivery?</p>
<ul><li>Do you know what is being used within your IT environments, as well as how it&#39;s being used?</li><li>Is that information current and accurate?</li></ul>
<p>In this installment of our <a title="" href="community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" rel="nofollow">NOWSupport best practices series</a>, we provide a primer on the Configuration Management Database (CMDB) application within ServiceNow, and provide you with resources to learn more.</p>
<p>Be sure to check out our <a href="https://www.youtube.com/watch?v&#61;zuZFEEW0wTs&amp;feature&#61;youtu.be" rel="nofollow">CMDB Overview video</a>, available now on our <a href="https://www.youtube.com/user/servicenowdemo" rel="nofollow">NOWsupport YouTube channel</a>, for more detailed info and some specific example  scenarios that will give you a better understanding of how CMDB works within your instance.</p>
<p><iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/zuZFEEW0wTs"></iframe></p>
<p> </p>
<h2>What&#39;s a CMDB?</h2>
<p>A CMDB is primarily a data repository, used to store information describing configuration items, or CIs, as well as some asset-related information. The CMDB also contains the relationships between CIs.</p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="814deadbdbd91b404837f3231f961998.iix" /></p>
<p style="text-align: center;"> </p>
<h2>What&#39;s a CI?</h2>
<p>A CI is a uniquely identified component used to deliver a service for which changes are controlled. A CI can be a a physical entity (like a server), a logical entity (like an application), or an operational construct (like a cluster of servers).</p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="36dd2adfdbd91b404837f3231f961959.iix" /></p>
<p style="text-align: center;"> </p>
<h2 style="text-align: left;">What are the benefits of maintaining a CMDB?</h2>
<p>The benefits of maintaining a CMDB (with an underlying <a href="https://www.servicenow.com/content/dam/servicenow/documents/infographics/info-elements-of-an-initial-configuration-management-capability.pdf" rel="nofollow">configuration management capability</a>) include: </p>
<ul><li><a href="https://docs.servicenow.com/bundle/kingston-service-management-for-the-enterprise/page/product/it-services/concept/c_ServiceManagement.html" rel="nofollow">Service Management</a></li><li><a href="https://docs.servicenow.com/bundle/kingston-it-service-management/page/product/asset-management/concept/c_AssetManagement.html" rel="nofollow">Asset Management</a></li><li><a href="https://docs.servicenow.com/bundle/kingston-it-operations-management/page/product/it-operations-management/reference/r_ITOMApplications.html" rel="nofollow">Operations Management</a></li><li><a href="https://docs.servicenow.com/bundle/kingston-security-management/page/product/planning-and-policy/concept/c_SecurityManagement.html" rel="nofollow">Information Security</a></li><li><a href="https://docs.servicenow.com/bundle/kingston-it-operations-management/page/product/cloud-management-v2/concept/cloud-management-v2-landing-page.html" rel="nofollow">Cloud Operations</a></li><li><a href="https://docs.servicenow.com/bundle/kingston-governance-risk-compliance/page/product/grc-policy-and-compliance/reference/r_PolicyComplianceMgmt.html" rel="nofollow">Compliance</a>  </li></ul>
<p> </p>
<h2>How do you populate your CMDB?</h2>
<p>With the ServiceNow Configuration Management Database (CMDB) application, you can <a href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/product/configuration-management/concept/c_OptionsToPopulateCMDB.html" rel="nofollow">populate your ServiceNow CMDB </a>three ways:</p>
<ol><li>Manually populate the CMDB using import sets</li><li>By integrating with an existing external CMDB</li><li>Automatically, via ServiceNow <a href="https://docs.servicenow.com/bundle/kingston-it-operations-management/page/product/discovery/reference/r-discovery.html" rel="nofollow">Discovery</a> and <a href="https://docs.servicenow.com/bundle/kingston-it-operations-management/page/product/service-mapping/reference/c_ServiceMappingOverview.html" rel="nofollow">Service Mapping</a> applications </li></ol>
<p> </p>
<h2>How can ServiceNow help you manage your CMDB?</h2>
<h3>Discovery </h3>
<p>The ServiceNow Discovery application uses a process called horizontal discovery to find applications and devices on your network and the important attributes of those devices. It updates the CMDB with the information it finds, but does not draw relationships between CIs that are part of specific business services.</p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="93ef803fdb9917002328f3231f961978.iix" /></p>
<p style="text-align: center;"> </p>
<h3>Service Mapping</h3>
<p>The ServiceNow Service Mapping application provides a complimentary capability to Discovery, by using top-down mapping to find and map CIs that are part of a business service, such as an email service. This allows you to visualize all CIs that are used to deliver a service.</p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="f90014ffdb9917002328f3231f96197d.iix" /></p>
<p style="text-align: center;"> </p>
<h3>CMDB Health, CMDB Reconciliation and CMDB Lifecycle Management</h3>
<p>The ServiceNow Configuration Management Database (CMDB) application also provides the <a href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/product/configuration-management/concept/c_CMDBHealth.html" rel="nofollow">CMDB Health</a>, <a href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/product/configuration-management/concept/c_CMDBIdentifyandReconcile.html" rel="nofollow">CMDB Identification and Reconciliation</a>, and <a href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/product/configuration-management/concept/cmdb-ci-lifecycle-mgmt.html" rel="nofollow">CMDB CI Lifecycle Management</a> features to monitor and detect health issues, reconcile data integrity issues, and manage data life cycle.</p>
<p>The CMDB Health Dashboard helps you measure and manage the health of your CMDB. The scorecard provides an aggregate score of the data quality in your CMDB based on:</p>
<ul><li>Completeness, or the percentage of the necessary attributes that are currently populated,</li><li>Compliance, which tells you what percentage of the CI data adheres to the pre-defined compliance audits, and </li><li>Correctness, which indicates whether the CIs are representing the current state.</li></ul>
<p>You can customize the weighting rules for scoring in each of these categories, as well as how the scores are aggregated.</p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="5d56547fdb5d17002328f3231f96192b.iix" /></p>
<p style="text-align: center;"> </p>
<h2>For more information </h2>
<p><a href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/product/configuration-management/concept/c_ITILConfigurationManagement.html" rel="nofollow">Configuration Management Database (CMDB)</a> (product documentation)</p>
<p><a href="https://www.servicenow.com/content/dam/servicenow/documents/datasheets/ds-configuration-management.pdf" rel="nofollow">ServiceNow Configuration Management Database</a> (datasheet)</p>
<p><a title="CMDB Design" href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0552867" target="_blank" rel="noopener noreferrer nofollow">CMDB Design</a> (KB article)</p>
<p><a href="https://docs.servicenow.com/bundle/kingston-it-operations-management/page/product/discovery/reference/r-discovery.html" rel="nofollow">Discovery</a> (product documentation)</p>
<p><a href="https://docs.servicenow.com/bundle/kingston-it-operations-management/page/product/service-mapping/reference/c_ServiceMappingOverview.html" rel="nofollow">Service Mapping</a> (product documentation) </p>
<p><a href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/product/configuration-management/concept/c_CMDBHealth.html" rel="nofollow">CMDB Health</a> (product documentation)</p>
<p><a href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/product/configuration-management/concept/c_CMDBIdentifyandReconcile.html" rel="nofollow">CMDB Identification and Reconciliation</a> (product documentation)</p>
<p><a href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/product/configuration-management/concept/cmdb-ci-lifecycle-mgmt.html" rel="nofollow">CMDB CI Lifecycle Management</a> (product documentation)</p>
<p> </p>
<p>--</p>
<p>Behind the scenes here at ServiceNow, the Knowledge Management and Multimedia teams work closely with subject matter experts to disseminate critical information to our customers. We&#39;ve found that certain topics come up frequently, in the form of best practices that can help you keep your ServiceNow instances running smoothly. This series targets those topics so that you and your organization can benefit from our collective expertise. If you have a best practices topic you&#39;d like us to cover in this series, please let us know in the comments below.</p>
<p> </p>
<p>To access all of the blog posts in this series, see our <a title="" href="community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" rel="nofollow">NOWSupport best practices series list.</a></p>
<p> </p>