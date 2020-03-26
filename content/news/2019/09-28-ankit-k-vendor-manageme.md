---
title: "Vendor Management Workspace FAQs"
date: 2019-09-27T21:29:17.000Z
authors: ["Ankit K"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=af9be017dbccc4100be6a345ca961924"
---
<p><span style="font-size: 24pt;"><strong>Vendor Management Workspace FAQ&#39;s</strong></span></p>
<p> </p>
<p><span style="font-size: 12pt;">Before I dive right into this, the following articles are a good read to understand Vendor Management and how ServiceNow is changing the way IT works in relation to it.</span></p>
<p><span style="font-size: 12pt;"> </span></p>
<ul><li><span class="ng-binding" style="font-size: 12pt;"><a class="result-primary" href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;fdd638c5db63bfc02be0a851ca96197b&amp;view_source&#61;searchResult" rel="nofollow">Vendor Management Workspace Overview</a></span></li></ul>
<ul><li><span style="font-size: 12pt;"><span class="ng-binding"><a class="result-primary" href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;0a3ba12bdb67f3085ed4a851ca9619e5&amp;view_source&#61;searchResult" rel="nofollow">Digital transformation and the role of your vendors</a> (A must-read)</span></span></li></ul>
<p><span style="font-size: 12pt;"> </span></p>
<p><span style="font-size: 12pt;"><strong><span class="ng-binding">How do I activate Vendor Management Workspace and get a feel for it?</span></strong></span></p>
<p><span class="ng-binding" style="font-size: 12pt;">Vendor Management Workspace is activated by a plugin of the same name. This plugin is not available on personal demo instances yet. Customer should reach out to their respective account executives who can help get the administrative right for the plugin(s) needed. There are some implicit dependancies on Service Portfolio Management and Agent Workspace. </span></p>
<p><span style="font-size: 12pt;"> </span></p>
<p><span style="font-size: 12pt;"><strong><span class="ng-binding">What is not included / getting deprecated in the new Vendor Management Workspace?</span></strong></span></p>
<p><span class="ng-binding" style="font-size: 12pt;">The Vendor Manager Workspace is a new feature and is not a successor to the Vendor Performance plugin. The legacy vendor performance product (com.snc.vendor_performance) will eventually be deprecated in Paris, and will no longer be supported after Paris release. The Vendor Performance plugin also is no longer available in New York instance.</span></p>
<p><span style="font-size: 12pt;"> </span></p>
<p><span style="font-size: 12pt;"><strong><span class="ng-binding">How does this work with Service Owner Workspace?</span></strong></span></p>
<p><span style="font-size: 12pt;">A vendor can view the corresponding Service Offering metrics from the Vendor Manager Workspace. They are their own individual workspaces within the same window.It is easy to transition from one workspace to another to view corresponding performance metrics. Vendor Management uses the performance calculations for service offerings and their rollup to services. Vendor managers can view the cumulative performance score based on service offerings from VMW. They can also view information related to the service offering such as owners, total cost, business criticality, status etc.</span></p>
<p><span class="ng-binding" style="font-size: 12pt;"><strong> </strong></span></p>
<p><span class="ng-binding" style="font-size: 12pt;"><strong>Is the </strong><strong>feature</strong><strong> available to OnPrem customers?</strong></span></p>
<p><span class="ng-binding" style="font-size: 12pt;">Yes. Works on both MySQL and Oracle. No additional hardware or infrastructural requirements.</span></p>
<p><span style="font-size: 12pt;"> </span></p>
<p><span style="font-size: 12pt;"><strong><span class="ng-binding">Once activated is demo data available?</span></strong></span></p>
<p><span class="ng-binding" style="font-size: 12pt;">Yes, the feature does come with demo data if the customer wants to use it and quick start tests.</span></p>
<p><span style="font-size: 12pt;"> </span></p>
<p><span style="font-size: 12pt;"><strong><span class="ng-binding">Do we have guided setups to help deploy Vendor Management Workspace?</span></strong></span></p>
<p><span class="ng-binding" style="font-size: 12pt;">Short answer not yet in NY release, planned for upcoming releases.</span></p>
<p><span class="ng-binding" style="font-size: 12pt;"> </span></p>
<p><span style="font-size: 12pt;"><strong><span class="ng-binding">Can we trend on the vendor metrics available on the Vendor Manager Workspace?</span></strong></span></p>
<p><span style="font-size: 12pt;">Yes, if you refer to the snapshot below it is easy to view the breakdowns for metrics such as Average Performance Score and Vendor Satisfaction over a period of 12 months.</span></p>
<p><span style="font-size: 10pt;"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/43a0c1d3dbcc08100be6a345ca961984.iix" width="393" height="203" /></span></p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/e1120993db0048100be6a345ca961968.iix" /></p>
<p><span style="font-size: 12pt;"><strong><span class="ng-binding">Is there a way to configure certain lists in the Vendor Manager Workspace per user preference?</span></strong></span></p>
<p><span style="font-size: 12pt;">Yes customizations of list vendor score column is controlled through field styles. Adding additional columns to their vendor manager workspace or remove some existing ones is available. A quick way for example to achieve that would be to save your own list on the vendor manager workspace. Then following it up by &#39;right clicking&#39; on the cog wheel(on the far right of the window) bringing up the <em>personalize columns choice </em>to change columns per preference.</span></p>
<p><span style="font-size: 12pt;"> </span></p>