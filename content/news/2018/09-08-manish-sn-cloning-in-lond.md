---
title: "Cloning in London results in partial clone of task table"
date: 2018-09-07T19:09:45.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=b19f959fdb10a7c8a39a0b55ca9619a2"
---
<p>With the ServiceNow London release, we introduced a new feature in system clone to achieve quicker &#39;task&#39; table alteration in the Sub Prods. This new field is called &#34;<strong>Amount of data copied from the Task table</strong>&#34; on the clone request form.</p>
<p style="text-align: center;">To request a clone see: <a href="https://docs.servicenow.com/bundle/london-platform-administration/page/administer/managing-data/task/t_StartAClone.html?cshalt&#61;yes" rel="nofollow">Requesting clone in London release</a></p>
<p>The &#34;Amount of data copied from the Task table&#34; field allows you to select the amount of data to clone from the source instance Task table. By default, the target instance receives the last 90 days of Task table records from the source instance.</p>
<p> </p>
<center>
<p><img style="max-width: 100%; max-height: 480px;" src="bd51ad53db90a7c8a39a0b55ca9619d9.iix" /></p>
</center>
<p> </p>
<h2>Cloning in London results in partial clone of &#39;task&#39; table.</h2>
<p>After upgrading your instance to &#39;London&#39;, if you are not seeing this field, please <a href="https://docs.servicenow.com/bundle/london-platform-administration/page/administer/form-administration/concept/configure-form-layout.html" rel="nofollow">configure the form layout</a> and bring this field on the &#34;Clone request&#34; form.</p>
<p>By default, there are two choices to select.</p>
<ol><li>Last 90 days</li><li>Full</li></ol>
<p style="text-align: center;"> </p>
<p style="text-align: center;"><em><strong>Note:</strong> &#34;Last 90 days&#34; will bring all records from the &#39;task&#39; table, which are created in the last 90 days. &#34;Full&#34; will bring all records from the &#39;task&#39; table, way it used to work before London release.</em></p>
<p> </p>
<p>You asked and we listened, this feature was added to London thanks to those of you who submitted an enhancement request. Customers on earlier releases will have to request truncation of data from the &#39;task&#39; table, as an additional step after clones.</p>
<p>If &#34;Last 90 days&#34; is used for the cloning, this will improve the performance in the Sub Production, especially when performing Table Alter [ Modifying column of the table from the &#39;task&#39; or extending to task ]. If &#39;Null&#39; is selected, this will behave as same, as it was working before in Pre-London releases. Entire records set will be observed in &#39;task&#39; table.</p>
<p> </p>
<p>Have questions about this? Comment below. </p>