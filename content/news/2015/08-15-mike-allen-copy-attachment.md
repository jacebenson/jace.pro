---
title: "Copy Attachments"
date: 2015-08-14T17:16:53.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=9a2d66e5dbd0dbc01dcaf3231f9619c2"
---
<p>The use case was to allow users to have the call record as their main entry point.   So, anytime they want to attach something to their case, they would attach it to the call.   This attachment does not copy over to the related incident.   I scripted a business rule that sits on sys_attachment to do the copy.</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="_jivemacro_uid_14395634971388415 jive_text_macro jive_macro_code" jivemacro_uid="_14395634971388415" modifiedtitle="true">
<p>var call = new GlideRecord('new_call');</p>
<p>call.addQuery('sys_id', current.table_sys_id);</p>
<p>call.addQuery('transferred_to', '!=', '');</p>
<p>call.query();</p>
<p>if(call.next()){</p>
<p>   var att = new GlideRecord('sys_attachment');</p>
<p>   att.initialize();</p>
<p>   att.file_name = current.file_name;</p>
<p>   att.content_type = current.content_type;</p>
<p>   att.compressed = current.compressed;</p>
<p>   att.table_name = call.call_type;</p>
<p>   att.size_bytes = current.size_bytes;</p>
<p>   att.size_compressed = current.size_compressed;</p>
<p>   att.table_sys_id = call.transferred_to;</p>
<p>   var attRec = att.insert();</p>
<p></p>
<p>   var attDoc = new GlideRecord('sys_attachment_doc');</p>
<p>   attDoc.addQuery('sys_attachment', current.sys_id);</p>
<p>   attDoc.query();</p>
<p>   while(attDoc.next()){</p>
<p>           var attDocCopy = new GlideRecord('sys_attachment_doc');</p>
<p>           attDocCopy.initialize();</p>
<p>           attDocCopy.sys_attachment = attRec;</p>
<p>           attDocCopy.position = attDoc.position;</p>
<p>           attDocCopy.length = attDoc.length;</p>
<p>           attDocCopy.data = attDoc.data;</p>
<p>           attDocCopy.insert();</p>
<p>       }</p>
<p>}</p>

</pre><p></p><p>It should be said that there is a method in GlideSysAttachment to copy (<span style="font-size: 13.3333330154419px;">GlideSysAttachment.copy('sourcetable', 'sys_id', 'destinationtable', 'sys_id');).   However, it is flawed for my purposes.   It copies every attachment sitting on a particular record over to another record.   Calling it within a script will copy, and the next time it is called, it copies everything, including that which it has already copied, creating duplication.</span></p>