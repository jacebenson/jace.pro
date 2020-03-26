---
title: "Community Code Snippets  Doing a SELECT DISTINCT on a GlideRecord"
date: 2015-08-24T00:48:11.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=c4ccee25dbd0dbc01dcaf3231f961904"
---
<p><span style="font-size: 12pt;">So a different problem presented itself awhile ago, and I thought I would share the solution. </span></p><p></p><p><span style="font-size: 12pt;">How do I do a distinct on multiple fields inside of a GlideRecord? </span></p><p></p><p><span style="font-size: 12pt;">As you are aware a GlideRecord does what amounts to a SQL "SELECT * FROM...". So the problem was how do you do something like the following:</span></p><p></p><p style="padding-left: 30px;"><span style="font-family: 'courier new', courier; font-size: 12pt;">SELECT DISTINCT(*) FROM incident WHERE active=1</span></p><p></p><p><span style="font-size: 12pt;">Well, you can't exactly, but you can come close:</span></p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14405975865113702" jivemacro_uid="_14405975865113702">
<p><span style="font-size: 12pt;">var incidentRecords = new GlideRecord('incident');</span></p>
<p><span style="font-size: 12pt;">incidentRecords.addActiveQuery();</span></p>
<p><span style="font-size: 12pt;">incidentRecords.query();</span></p>
<p></p>
<p><span style="font-size: 12pt;">var incidentList = [];</span></p>
<p></p>
<p><span style="font-size: 12pt;">while (incidentRecords.next()) {</span></p>
<p><span style="font-size: 12pt;">     // combine the fields into a single record and push onto the one-dimensional array</span></p>
<p><span style="font-size: 12pt;">     incidentList.push(incidentRecords.cmdb_ci + '|' + incidentRecords.assigned_to);</span></p>
<p><span style="font-size: 12pt;">}</span></p>
<p></p>
<p><span style="font-size: 12pt;">// now we can run the distinct</span></p>
<p><span style="font-size: 12pt;">incidentList = new ArrayUtil().unique(incidentList);</span></p>
<p></p>
<p><span style="font-size: 12pt;">// we have the result set with all dups removed and can now break it apart to do work on it.</span></p>
<p><span style="font-size: 12pt;">for (var i=0; i &lt; incidentList.length; i++) {</span></p>
<p><span style="font-size: 12pt;">     // now you can reconstitute the fields       </span></p>
<p><span style="font-size: 12pt;">     var incidentSplit = incidentList[i].split('|');</span></p>
<p><span style="font-size: 12pt;">     var cmdb_ci = incidentSplit[0];</span></p>
<p><span style="font-size: 12pt;">     var assigned_to = incidentSplit[1];</span></p>
<p></p>
<p><span style="font-size: 12pt;">     // do more work</span></p>
<p><span style="font-size: 12pt;">}</span></p>





</pre><p></p><p></p><p><span style="font-size: 12pt;">BTW, I hash this out in more detail in an article I wrote here: </span><a href="https://www.cloudsherpas.com/partner-servicenow/servicenow-admin-101-can-distinct-queries-using-gliderecord/" title="https://www.cloudsherpas.com/partner-servicenow/servicenow-admin-101-can-distinct-queries-using-gliderecord/"><span style="font-size: 12pt;">ServiceNow Admin 101: You Too Can Do DISTINCT Queries Using GlideRecord - Cloud Sherpas</span></a></p><p></p><p><span style="font-size: 12pt;">Steven Bell</span></p><p></p><p><span style="color: #800080; font-size: 12pt; font-family: arial, sans-serif;">If you find this article helps you, don't forget to "like" it!</span></p>