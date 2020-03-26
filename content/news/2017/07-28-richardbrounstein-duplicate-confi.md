---
title: "Duplicate Configuration Items in the ServiceNow CMDB"
date: 2017-07-27T07:46:32.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=3efc66a5dbd0dbc01dcaf3231f96193b"
---
<p>Update for <strong>New York</strong> Release: A new field has been introduced into the cmdb_ci table:  Duplicate Of (duplicat_of).  This field is a reference to Configuration Items.  On the insert of a CI with the Identification and Reconciliation Engine, if the CI is detected to be a duplicate of 2 or more CIs already in that CMDB table, then the CI with the earliest &#34;created&#34; date will be referenced by each duplicate CI from the Duplicate Of field.</p>
<p>The updates from the inserted CI are updated to the CI with the oldest created field unless the <em>glide.identification_engine.skip_duplicates </em>is set to &#34;false&#34;.  In that case, the insert is rejected.</p>
<p>Review the documentation here:  <a href="https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/product/configuration-management/concept/de-duplication-tasks.html" rel="nofollow">https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/product/configuration-management/concept/de-duplication-tasks.html</a></p>
<p>Update for <strong>London</strong> Release: To remediate duplicate CIs, a CI Duplicate remediation wizard was introduced to resolve all the issues with duplicate CIs: <a href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/product/configuration-management/task/reconcile-dup-task.html" rel="nofollow">https://docs.servicenow.com/bundle/london-servicenow-platform/page/product/configuration-management/task/reconcile-dup-task.html</a></p>
<p><span style="font-size: 14.0pt;"><strong>The Problem with Duplicate CIs</strong></span></p>
<p style="margin-top: 6.0pt;"> </p>
<p style="margin-top: 6.0pt;">Duplicate configuration items are a serious problem for any Configuration Management Database:</p>
<ul style="list-style-type: disc;"><li>Inaccurate inventory asset reports</li><li>Could cost your company money on new licenses and maintenance</li><li>Creates confusion when users are submitting ticket requests</li><li>Makes it difficult to report on incident, change and problem trends</li><li>Makes configuration management more difficult</li><li>Can undermine the trust in configuration management</li></ul>
<p style="margin-top: 6.0pt;">Getting rid of duplicate CIs is always a high priority for any configuration management team.</p>
<p style="margin-top: 6.0pt;"><span style="font-size: 14.0pt;"><strong>ServiceNow Discovery Preventing Duplicates</strong></span></p>
<p style="margin-top: 6.0pt;">Each configuration item record is uniquely identified based on one or more field values specified in a CI Identifier Rule. A configuration item record is considered duplicate if the field values that uniquely identify it match the field values of another record of the same class.   By default, configuration items of class <em>Hardware</em> and all subclasses (<em>Computer</em>,<em> Server</em>, <em>Unix Server</em>, <em>Windows Server</em>) use the OS Serial Number as a unique identifier.   When SN Discovery or Service Mapping discovers a CI, the sensors and patterns use the internal function <em>SNC.IdentificationEngineScriptableApi.createOrUpdateCI</em> to send the CI to the CMDB.   If a CI already exists with the identifier attributes for that particular class, it is overwritten, otherwise a new CI is inserted. Here is sample JavaScript code invoking this function:</p>
<p style="margin-top: 6.0pt;">_________________________________________________________________________</p>
<p style="margin-top: 6.0pt;"><span style="font-size: 10.0pt;">var payload &#61; {</span></p>
<p><span style="font-size: 10.0pt;">                       items: [{</span></p>
<p><span style="font-size: 10.0pt;">                           className: &#39;cmdb_ci_aix_server&#39;,</span></p>
<p><span style="font-size: 10.0pt;">                           values: {</span></p>
<p><span style="font-size: 10.0pt;">                               name: &#39;Aix Server 900&#39;,</span></p>
<p><span style="font-size: 10.0pt;">                               asset_tag: &#39;Asset 900&#39;,</span></p>
<p><span style="font-size: 10.0pt;">                               ip_address: &#39;10.20.30.11&#39;,</span></p>
<p><span style="font-size: 10.0pt;">                               mac_address: &#39;ABCD1234&#39;,</span></p>
<p><span style="font-size: 10.0pt;">                               ram: &#39;4096&#39;,</span></p>
<p><span style="font-size: 10.0pt;">                               cpu_name: &#39;SNow&#39;,</span></p>
<p><span style="font-size: 10.0pt;">                               serial_number: &#39;123456783&#39;,</span></p>
<p><span style="font-size: 10.0pt;">                               cpu_type: &#39;SNow&#39;</span></p>
<p><span style="font-size: 10.0pt;">                           }</span></p>
<p><span style="font-size: 10.0pt;">                       }]</span></p>
<p><span style="font-size: 10.0pt;">};</span></p>
<p> </p>
<p><span style="font-size: 10.0pt;">var jsonUtil &#61; new JSON();</span></p>
<p><span style="font-size: 10.0pt;">var input &#61; jsonUtil.encode(payload);</span></p>
<p><span style="font-size: 10.0pt;">var output &#61; SNC.IdentificationEngineScriptableApi.createOrUpdateCI ( &#39;ServiceNow&#39;, input);</span></p>
<ol style="list-style-type: lower-alpha;"><li><span style="font-size: 10.0pt;">gs.print ( output);</span></li></ol>
<p><span style="font-size: 10.0pt;">______________________________________________________________________________________</span></p>
<p> </p>
<p style="margin-top: 6.0pt;">Since Geneva, the CI Identifier rules can be edited via a simple user interface from the CI Class Manager.   It allows users to select which attributes will be used to identify CIs for a particular class and even allows for multiple identification rules to be applied.</p>
<p style="text-align: center;"><img class="image-1 jive-image" style="width: 620px; height: 439px;" src="e1068046db5c5fc068c1fb651f961956.iix" alt="ci_id.png" /></p>
<p style="text-align: center;" align="center"><span style="font-size: 10.0pt;"><strong>The CI identification Rules for the Hardware Class</strong></span></p>
<p> </p>
<p><span style="font-size: 14.0pt;"><strong>How Duplicate CIs Get Into the CMDB</strong></span></p>
<p style="margin-top: 6.0pt;">For better or worse, there are many ways to insert CI records into the CMDB without any checking to see if another CI is already there.   The REST API Explorer and GlideRecord object are just two mechanisms used to insert records into tables where no checking with the identification rules exists.   Unfortunately, CI Records with identical attributes will always find their way into the CMDB.</p>
<p style="margin-top: 6.0pt;"><span style="font-size: 14.0pt;"><strong>Detecting Duplicate CIs on Discovery</strong></span></p>
<p style="margin-top: 6.0pt;">When a CI payload is inserted with the SNC.IdentificationEngineScriptableApi.createOrUpdateCI function, it does more than just check whether a CI exists to overwrite it.   It also checks for multiple CIs that might already be in the CMDB.   If more than one CI matches the identification attributes for that class, then a de-duplication task is created that points to all the duplicate CIs.   In addition, the <em>discover_source</em> field is updated in each duplicate record with the text &#34;duplicate&#34; so the records are now marked. These configuration items are now identified as duplicate CIs and will appear as duplicates on the CMDB Health Dashboard.</p>
<p style="margin-top: 6.0pt;">When duplicates are detected, the CI payload still may or may not be written to a record in the CMDB.   This depends on the system property named <em>glide.identification_engine.skip_duplicates</em>.   This is an internal system property in the <em>sys_properties</em> table.   By default, the skip_duplicates property is set to true (default value).   This means that if duplicate CIs are detected by the <em>IdentificationEngineScriptableApi</em> function, the CI payload will overwrite the oldest duplicate CI.   That is the CI with the oldest date/time in the updated field.   If skip_duplicates is set to false, then the CI is rejected and none of its fields are written to the CMDB.</p>
<p style="margin-top: 6.0pt;"><span style="font-size: 14.0pt;"><strong>The CMDB Health Dashboard Duplicate Detection</strong></span></p>
<p style="margin-top: 6.0pt;">The Configuration Management Database Health Dashboard was introduced in the Helsinki release.   It measures many important metrics in the CMDB and to display the results on an interactive dashboard. Duplicate CIs is one of the correctness rules that it measures.</p>
<p><img class="image-2 jive-image" style="width: auto; height: auto;" src="003063f9dbdc53049c9ffb651f9619ac.iix" alt="dup2.png" /></p>
<p><img class="image-3 jive-image" style="width: 620px; height: 202px;" src="fc468d02db50d344e9737a9e0f961904.iix" alt="dup3.png" /></p>
<p style="margin-top: 6.0pt;">The Health Dashboard runs a scheduled job called the <em>Correctness Score Calculation</em> which is available as a list of Scheduled Jobs available on CMDB Health Preference.   The Correctness job scans the records in the CMDB (cmdb_ci) that have discovery_source set to empty.   It checks each CI against the CI Identification Rules for their particular class to see if they are duplicates.   If they are, then they get assigned to a de-duplication task and are marked as &#34;duplicate&#34;.   If they are not duplicates, then the discovery_source is set to &#34;Unknown&#34;.   If something changes in the CI marked with discovery_source as &#34;Unknown&#34;, it is set to an empty value.</p>
<p><img class="image-4 jive-image" style="width: 620px; height: 199px;" src="70a168c6db5c5304b322f4621f9619f4.iix" alt="dup4.png" /></p>
<p style="margin-top: 6.0pt;">After running the correctness score calculation, the CMDB Dashboard correctness dashboard is updated.   If you run this job manually, make sure to check the status of the job execution in the cmdb_health_metric_status table and clear the browser cache.</p>
<p style="margin-top: 6.0pt;"><span style="font-size: 14.0pt;"><strong>Visual Workflow of the Duplicate Detection Jobs</strong></span></p>
<p> </p>
<p><img class="image-5 jive-image" style="width: 620px; height: 852px;" src="18e08c0edb94db048c8ef4621f961978.iix" alt="dup5.png" /></p>
<p><img class="image-6 jive-image" style="width: 620px; height: 630px;" src="15df5331db1c9f04e9737a9e0f961932.iix" alt="dup6.png" /></p>