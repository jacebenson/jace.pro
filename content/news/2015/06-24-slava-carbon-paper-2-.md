---
title: "Carbon Paper "
date: 2015-06-24T01:38:47.000Z
authors: ["Slava"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=e45d2629dbd0dbc01dcaf3231f96192d"
---
<p style="text-align: justify;">It is no secret for any ServiceNow administrator that there are lots of situations where you need to copy information from one record to another or even create a new record as a copy of another record. The easiest way to do it programmatically is to execute a script similar to this:</p><p style="text-align: justify;"></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14350919848193347" jivemacro_uid="_14350919848193347">
<p>var usr_id = 'ddc2b4edfc81b800f0d8e21d514cc2a4';</p>
<p>var gr = new GlideRecord('sys_user');</p>
<p>gr.get(usr_id);</p>
<p>gr.insert();</p>

</pre><p style="text-align: justify;"></p><p style="text-align: justify;">The script above finds a user record by sys_id and uses insert() method to create an exact copy. Of course, two identical user records is probably not something you would really like to have in your application. In a real-life scenario, you will most likely want to change at least the name of the user. Here is a way to do it:</p><p style="text-align: justify;"></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14350919847965964" jivemacro_uid="_14350919847965964">
<p>var usr_id = 'ddc2b4edfc81b800f0d8e21d514cc2a4';</p>
<p>var gr = new GlideRecord('sys_user');</p>
<p>gr.get(usr_id);</p>
<p>gr.first_name = 'John';</p>
<p>gr.last_name = 'Smith';</p>
<p>gr.insert();</p>

</pre><p style="text-align: justify;"></p><p style="text-align: justify;">There are, however, at least three things that will not be copied by a script like this.</p><p style="text-align: justify;"></p><p style="text-align: justify;"><strong>1. Journal fields</strong></p><p style="text-align: justify;"></p><p style="text-align: justify;">The contents of all journal fields in the system are actually stored in Journal Entry [sys_journal_field] table. You will need to query that table to copy Work Notes or Additional Comments.</p><p style="text-align: justify;"></p><p style="text-align: justify;"><strong>2. Attachments</strong></p><p style="text-align: justify;"></p><p style="text-align: justify;">When you attach a file to any record in ServiceNow, it is saved in Attachment [sys_attachment] table. To copy attachments, use the following piece of code:</p><p style="text-align: justify;"></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14350919847566513" jivemacro_uid="_14350919847566513">
<p>if (typeof GlideSysAttachment != 'undefined') {</p>
<p>     // for Calgary and newer versions</p>
<p>     GlideSysAttachment.copy('source_table', 'sys_id', 'target_table', 'sys_id');</p>
<p>} else {</p>
<p>     // for Berlin and older versions</p>
<p>     Packages.com.glide.ui.SysAttachment.copy('source_table', 'sys_id', 'target_table', 'sys_id');</p>
<p>}</p>

</pre><p style="text-align: justify;"><strong><br/></strong></p><p style="text-align: justify;"><strong>3. Image and video fields</strong></p><p style="text-align: justify;"></p><p style="text-align: justify;">There are two types of image fields in ServiceNow: <strong>image</strong> (e.g. Icon field in Module records) and <strong>user_image</strong> (e.g. Photo field in User records). The former contains a link to an image. The latter contains… nothing. You can easily verify that by exporting any user record that has a photo to XML. In fact, images uploaded into user_image fields are physically stored in Attachment [sys_attachment] table, the only difference from usual attachments being ZZ_YY prefix in the Table Name attribute. The same is valid for <strong>video</strong> type fields. As a result, anything you upload to Images [db_image] or Video [db_video] tables ends up in Attachments [sys_attachment] table.</p>