---
title: "Community Code Snippets  Current Factory"
date: 2015-08-27T18:07:10.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=9bcda2e9dbd0dbc01dcaf3231f9619e5"
---
<p><span style="font-size: 10pt; line-height: 1.5em;">When testing out new code in either Fix Scripts or Scripts - Background I find it difficult to test Background Scripts or gs.eventQueue code without having the current object around.   There are a couple of approaches you could take when creating this.   One is only OK, and the other is well...right on!</span></p><p></p><p>The OK approach:</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14412267948024308" jivemacro_uid="_14412267948024308">
<p>var current = {};</p>
<p>current.assigned_to = {};</p>
<p>current.assigned_to.sys_id = "&lt;&lt;your favorite user's sysid here&gt;&gt;";</p>
<p>current.assigned_to.name = "Fred Flintstone";</p>
<p>current.assigned_to.manager = {};</p>
<p>current.assigned_to.manager.sys_id = "&lt;&lt;your favorite user's manager sysid here&gt;&gt;";</p>
<p>current.assigned_to.manager.name = "Wilma Flintstone";</p>
<p>current.number = 'INC1234567';</p>
<p>current.state = 1;</p>
<p>current.short_description = 'This is a test.';</p>
<p>// ... and so on.</p>
<p></p>
<p>gs.print('Assigned To Manager: ' + current.assigned_to.manager.name);</p>




</pre><p></p><p>Yuck.   Oh, and did I mention this approach, while interesting, does not create a true GlideRecord object?   It has it's uses.</p><p></p><p>My favorite approach is to create a current "Factory" that will produce a current object according to my specifications.   You could place this Factory into a Function Script Include and call it as needed from your Fix Script or Scripts-Background.</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14412267947842859" jivemacro_uid="_14412267947842859">
<p>var tableName = 'incident';</p>
<p>var order = {type:'descending', field:'sys_updated'};</p>
<p>var encodedQuery = ''; // in case there is a constraint needed like: sys_id=...</p>
<p></p>
<p>var current = currentFactory(tableName, order, encodedQuery);</p>
<p></p>
<p>gs.print('---&gt;\Number: ' + current.number + '\nState: ' + current.state + '\nShort Description:' + current.short_description);</p>
<p></p>
<p></p>
<p>function currentFactory(tableName, order, encodedQuery) {</p>
<p>   var currentRecords = new GlideRecord(tableName);</p>
<p></p>
<p>   if (JSUtil.notNil(encodedQuery)) {</p>
<p>   <span style="font-size: 13.3333330154419px;">   </span>currentRecords.addEncodedQuery(encodedQuery);</p>
<p>   }</p>
<p></p>
<p>   if (JSUtil.notNil(order)) {</p>
<p>   <span style="font-size: 13.3333330154419px;">   </span>if (order.type == 'descending') {</p>
<p><span style="font-size: 13.3333330154419px;">   <span style="font-size: 13.3333330154419px;">   </span></span>   currentRecords.orderByDesc(order.field);</p>
<p>   <span style="font-size: 13.3333330154419px;">   </span>}</p>
<p>   <span style="font-size: 13.3333330154419px;">   </span>else {</p>
<p>   <span style="font-size: 13.3333330154419px;">   <span style="font-size: 13.3333330154419px;">   </span></span>currentRecords.orderBy(order.field);</p>
<p>   <span style="font-size: 13.3333330154419px;">   </span>}</p>
<p>   }</p>
<p></p>
<p>   currentRecords.setLimit(1); // there is always ONLY one record in current</p>
<p>   currentRecords.query();</p>
<p></p>
<p>   if (currentRecords.hasNext()) {</p>
<p>   <span style="font-size: 13.3333330154419px;">   </span>currentRecords.next();</p>
<p>   }</p>
<p></p>
<p>   return currentRecords;</p>
<p>}</p>




</pre><p></p><p>I have added this functionality to a Script Include utility and placed it out on ServiceNow <a title="hare.servicenow.com/app.do#/detailV2/66ab74c1555646007c3953512138ef39/overview" href="https://share.servicenow.com/app.do#/detailV2/66ab74c1555646007c3953512138ef39/overview">Share</a>.</p><p></p><p>Anything to make unit testing easier!</p><p></p><p>Steven Bell</p><p></p><p><span style="color: #800080; font-family: arial, sans-serif; font-size: 16px;"><br/></span></p><p><span style="color: #800080; font-family: arial, sans-serif; font-size: 16px;">If you find this article helps you, don't forget to "like" it!</span></p>