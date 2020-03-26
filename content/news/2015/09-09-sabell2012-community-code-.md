---
title: "Community Code Snippets  Scripting Memory Management"
date: 2015-09-08T23:58:27.000Z
authors: ["sabell2012"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=21fde22ddbd0dbc01dcaf3231f9619c6"
---
<p>Because JavaScript does it for us we don't often have to consider memory management.   However, I bring this up because I have run into a problem with server resources myself; from time-to-time.   It is possible to run out of memory!   If you are working on a really large object array (several million records); you must remember that all of that is in the server's memory.   If you keep adding to it you risk the possibility of running into problems with your instance such as impacting performance.   Perhaps severely. </p><p></p><p>For example, let's say you are working with pulling data from a number of GlideRecord record sets. </p><p></p><p>Pseudo code:</p><p></p><p style="padding-left: 30px;">1. Get GlideRecord Incident (all records)</p><p style="padding-left: 30px;">2. Loop through all records and store lots of data into an object array.</p><p style="padding-left: 30px;">3. Get GlideRecord Change (all records)</p><p style="padding-left: 30px;">4. Loop through all records and store lots more data into our object array.</p><p style="padding-left: 30px;">5. Get CMDB_CI (all records)</p><p style="padding-left: 30px;">6. Loop through all records and store lots more data into our object array.</p><p></p><p>and so on.   Remember this is hypothetical and not necessarily something you would really want to do!   :-)</p><p></p><p>Now ALL of this stuff is in memory, and it could be literally millions of records!</p><p></p><p>The poor server on the ServiceNow side is trying to keep up with you, paging memory to disk, juggling things around to improve performance, but you are merciless, and keep throwing more stuff for it to manipulate...and it slowly goes to it's metaphorical knees.</p><p></p><p>So, what do you do?   You free up what you no longer need!</p><p></p><p>Back to our Pseudo code:</p><p></p><p style="padding-left: 30px;">1. Get GlideRecord Incident (all records)</p><p style="padding-left: 30px;">2. Loop through all records and store lots of data into an object array.</p><p style="padding-left: 30px;"><span style="color: #339966;"><strong>3. Set the Incident GlideRecord to null.</strong></span></p><p style="padding-left: 30px;">4. Get GlideRecord Change (all records)</p><p style="padding-left: 30px;">5. Loop through all records and store lots more data into our object array.</p><p style="padding-left: 30px;"><span style="color: #339966;"><strong>6. Set the Change GlideRecord to null.</strong></span></p><p style="padding-left: 30px;">7. Get CMDB_CI (all records)</p><p style="padding-left: 30px;">8. Loop through all records and store lots more data into our object array.</p><p style="padding-left: 30px;"><span style="color: #339966;"><strong>9. Set the CMDB_CI GlideRecord to null.</strong></span></p><p></p><p>So here is an example:</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14417387031393494" jivemacro_uid="_14417387031393494">
<p>var incidentRecords = new GlideRecord('incident');</p>
<p>incidentRecords.addActiveQuery();</p>
<p>incidentRecords.query();</p>
<p></p>
<p>var stuff = {};</p>
<p>var stuffList = [];</p>
<p></p>
<p>while (incidentRecords.next()) {</p>
<p>   <span style="font-size: 13.3333px;">   </span>stuff = {};</p>
<p>   <span style="font-size: 13.3333px;">   </span>stuff.number = incidentRecords.number + '';</p>
<p>   <span style="font-size: 13.3333px;">   </span>stuff.status = incidentRecords.status + '';</p>
<p>   <span style="font-size: 13.3333px;">   </span>stuff.assigned_to = incidentRecords.assigned_to.getDisplayValue();</p>
<p>   <span style="font-size: 13.3333px;">   </span>stuffList.push(stuff);</p>
<p>}</p>
<p></p>
<p><span style="font-size: 13.3333px;">incidentRecords = null; // This frees up the memory that incidentRecords is using.</span></p>
<p><span style="font-size: 13.3333px;"><br/></span></p>

</pre><p></p><p>Obviously this is a best practice when manipulating large objects in memory, and a good general practice otherwise.</p><p></p><p>Steven Bell</p>