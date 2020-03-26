---
title: "Upgrades and their relation to customizations Updated for Geneva"
date: 2015-02-25T01:55:37.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=1dace225dbd0dbc01dcaf3231f96194a"
---
<p><span style="font-size: 10pt;">Often</span> times when reviewing their <a href="community?id&#61;community_blog&amp;sys_id&#61;ca7d2269dbd0dbc01dcaf3231f9619a8" rel="nofollow">upgrade history</a>, customers will notice records that were skipped during the upgrade. This tends to start the waterfall of questions around why the upgrade to a specific Out-of-the-Box (OOTB) record was skipped.</p>
<p> </p>
<p>Generally speaking, upgrades skip records because a previous version of that OOTB record was customized and the record is no longer OOTB. A record of this customization gets recorded within the Customer Updates table, sys_update_xml. The easiest way to determine if a custom record exists for the skipped record update is to pull the file name for the record from the upgrade history record.</p>
<p> </p>
<h2>How to determine if a custom record exists for this case:</h2>
<p> </p>
<p>First, pull the file name for the record from the upgrade history record.</p>
<p><img class="image-0 jive-image" style="height: 86px; width: 620px; display: block; margin-left: auto; margin-right: auto;" src="5c3437fddb98df04e9737a9e0f9619b1.iix" alt="ServiceNow upgrade history fuji.JPG" /></p>
<p>Next, search for it in the &#39;name&#39; field within sys_update_xml.</p>
<p><img class="image-1 jive-image" style="height: 90px; width: 620px; display: block; margin-left: auto; margin-right: auto;" src="90dc91c6dbdc9f048c8ef4621f961942.iix" alt="ServiceNow ugrade history fuji 1.JPG" /></p>
<p> </p>
<p>Once you have located the record you can then choose one of three options:</p>
<ol><li>Keep the record and have your customization remain, but not get the new OOTB update.</li><li>Manually merge the new update into your existing customization, creating a new better one.</li><li>Revert the record to OOTB from the upgrade history by right-clicking on the record row and choosing &#39;Revert to Out-of-box&#39; (&#39;Revert to Base System&#39; in Geneva):</li></ol>
<p><img class="image-2 jive-image" style="height: 133px; width: 620px; display: block; margin-left: auto; margin-right: auto;" src="65eff04edbd497041dcaf3231f9619b1.iix" alt="ServiceNow upgrade history fuji 2.JPG" /></p>
<p>It is also good to note that certain updates made to OOTB records, while producing Customer Update records, will not prevent the record from being skipped on upgrade, and some updates do not produce a Customer Update record at all. To understand the reasons behind both of these caveats, lets look at them in additional detail by reviewing the following scenarios:</p>
<p> </p>
<p style="padding-left: 30px;"><span style="; font-size: 10.0pt; text-decoration: underline; font-family: Calibri;"><strong><em>I deactivated an OOTB record, will this prevent the record from being updated?</em></strong></span></p>
<p style="padding-left: 30px;">No. When simply changing the Active Flag on an OOTB record from TRUE to FALSE (or vice versa), a Customer Update record will be created, however the Replace-on-Upgrade flag for the record will be set to TRUE, meaning that the record will still be upgraded during upgrades, but the record will not be reactivated. In short, the record will get upgraded, but it will still be inactive.</p>
<p> </p>
<p style="padding-left: 30px;"><span style="; font-size: 10.0pt; text-decoration: underline; font-family: Calibri;"><strong><em>I removed an attribute on an OOTB sys_dictionary record, and it was replaced on upgrade, why?</em></strong></span></p>
<p style="padding-left: 30px;">The way that attributes are treated by the upgrade is different than other elements within a record, as updates to attributes are not recorded within the Customer Updates table. During an upgrade the process simply looks to see if the attribute is present or not. IF present on the OOTB sys_dictionary collection record, even if customized, it will not update the attribute or replace it with the OOTB version. If however you have removed the attribute from the sys_dictionary record, the upgrade will re-add the OOTB attribute to the sys_dictionary collection record because it is &#39;missing&#39;.</p>
<p> </p>
<p style="padding-left: 30px;"><span style="; font-size: 10.0pt; text-decoration: underline; font-family: Calibri;"><strong><em>I made a customization to an OOTB record but it was not recorded in Customer Updates and the customization was returned to OOTB upon upgrade, why?</em></strong></span></p>
<p style="padding-left: 30px;">Customer Update records are only created for those tables that have the <a title="ki.servicenow.com/index.php?title&#61;System_Update_Sets#The_update_synch_Attribute" href="http://wiki.servicenow.com/index.php?title&#61;System_Update_Sets#The_update_synch_Attribute" rel="nofollow">update_synch&#61;true</a> attribute OOTB, not only is this attribute required for the creation of Customer Update records but also for the capturing of customer updates within Update Sets, without it updates to records will not be recorded. This is rare however, as ServiceNow does not typically update records in tables where update_synch is not true.</p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-size: 10.0pt; font-family: Calibri;"><em>PLEASE NOTE:</em><span style="color: #262626; font-size: 10pt;"><em>Do not add the update_synch attribute to a dictionary record. When improperly used, this attribute can cause major performance issues or cause the instance to become unavailable. Adding this attribute is <strong>not supported</strong>.</em></span></span></p>
<p style="padding-left: 30px;"> </p>
<p><span style="color: #262626; text-decoration: underline; font-size: 12pt; font-family: Calibri;"><em><strong>Geneva Update:</strong></em></span></p>
<p><span style="color: #262626; font-size: 12pt; font-family: Calibri;">A new feature was included within the Geneva release that allows you to capture your revert to out-of-box actions in an update set, and move these choices to each instance, post-upgrade to Geneva. In this way you will only need to review the skipped records once on your first Geneva upgrade, decide which items to revert to out-of-box, revert them, and then commit your &#39;revert&#39; update set to each instance instead of needing to track and manually repeat all of your reverts on each subsequent upgrade.</span></p>