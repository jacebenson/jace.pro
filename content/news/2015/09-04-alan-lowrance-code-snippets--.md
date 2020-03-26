---
title: "Code Snippets Related Attachments seeing ParentChildSibling attachments from current record"
date: 2015-09-03T21:43:13.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=d01e6e2ddbd0dbc01dcaf3231f9619de"
---
<p>We often are working catalog tasks and see that someone mentioned that something's attached and were sick of climbing up to the parent (sc_req_item) and possibly up again to the request in order to see that attachment (and any other tiered tickets like change_request/change_task, etc.).   So I made a related list that you can put in its own content tab on any tables you wish to see more associated attachments on.</p><p><span style="font-size: 8pt;"><em>The only thing I would say to look out for is make sure that your Requested Items have a parent field pointing to the Request and not just the Request reference field.   To do this, I added a script activity in the REQ workflow to search for its own children and set their 'parent' as itself.   Seems that all other task-type tickets in the system use the parent field already, but if your REQ is created by bundling all the RITMs, the linkage won't be there unless its WF fills it.</em></span></p><p></p><p>First we need the back-end logic [non-client callable SCRIPT INCLUDE] that all the other components will use to make the list of related attachments:</p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14422538047234297" jivemacro_uid="_14422538047234297">
<p>function commaSeparatedTaskFamily(fromtable, recid){</p>
<p>   var family = ''; //building comma-separated list of related sysids</p>
<p>   var gr = new GlideRecord('task');</p>
<p>   if (fromtable == 'sysapproval_approver'){ //sysapprovals are different since they don't have parents</p>
<p>   var aprv = new GlideRecord('sysapproval_approver');</p>
<p>   aprv.get(recid);</p>
<p>   gr.get(aprv.sysapproval);</p>
<p>   family += (gr.sys_id + ', ');</p>
<p>   }</p>
<p>   else</p>
<p>   gr.get(recid); //gr will be the source record</p>
<p>   //STEP 1 up &amp; across</p>
<p>   if (gr.parent){</p>
<p>   family += (gr.parent + ', ');</p>
<p>   var pfind = new GlideRecord('task');</p>
<p>   pfind.get(gr.parent);</p>
<p>   while (pfind.parent){ //not sure if .get() inside the loop will change this or not</p>
<p>   family += (pfind.parent + ', ');</p>
<p>   pfind.get(pfind.parent);</p>
<p>   }</p>
<p>   if (fromtable != 'sysapproval_approver'){ //we don't want approvals seeing siblings</p>
<p>   var sfind = new GlideRecord('task');</p>
<p>   sfind.query('parent',gr.parent);</p>
<p>   while (sfind.next()){</p>
<p>   if (sfind.sys_id != gr.sys_id) //don't want it finding itself</p>
<p>   family += (sfind.sys_id + ', ');</p>
<p>   }</p>
<p>   }</p>
<p>   }</p>
<p>   //STEP 2 down &amp; down</p>
<p>   var cfind = new GlideRecord('task');</p>
<p>   cfind.query('parent',gr.sys_id);</p>
<p>   while (cfind.next()){</p>
<p>   family += (cfind.sys_id + ', ');</p>
<p>   var gcfind = new GlideRecord('task');</p>
<p>   gcfind.query('parent',cfind.sys_id);</p>
<p>   while (gcfind.next())</p>
<p>   family += (gcfind.sys_id + ', ');</p>
<p>   }</p>
<p>   return family;</p>
<p>}</p>






</pre><p></p><p>Then, for every table you want to display this on, you'll need to create a [System Definitions &gt; Relationships] entry that will query from the sys_attachment table.   Thanks <a title="Steve Bell (Cloud Sherpas)" __default_attr="7849" __jive_macro_name="user" class="jive_macro_user jive_macro" data-orig-content="Steve Bell (Cloud Sherpas)" href="/community?id=community_user_profile&user=838f86e9db181fc09c9ffb651f9619d9">Steve Bell (Cloud Sherpas)</a> for simplifying this for me!</p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14422538047101567" jivemacro_uid="_14422538047101567">
<p>(function() {</p>
<p>   var csfam = commaSeparatedTaskFamily('WHATEVER TABLE THIS IS APPLIED TO',parent.sys_id);//parent is just what is displaying this list</p>
<p>   current.addQuery('table_sys_id', 'IN', csfam);</p>
<p>})()</p>





</pre><p></p><p>Then, similarly if you want to list all these attachments in an email notification you just add this to mail scripts and put into your template with ${mail_script:attach_links}</p><pre __default_attr="javascript" __jive_macro_name="code" class="_jivemacro_uid_14422538046919591 jive_text_macro jive_macro_code" jivemacro_uid="_14422538046919591">
<p>attachLinks();</p>
<p>function attachLinks() {</p>
<p>   var gr = new GlideRecord('sys_attachment');</p>
<p>   if (!current.sys_class_name) //APPROVALS DONT HAVE CLASS NAMES</p>
<p>     var rectype = 'sysapproval_approver';</p>
<p>   else</p>
<p>     var rectype = current.sys_class_name;</p>
<p>   var csfam = commaSeparatedTaskFamily(rectype,current.sys_id);</p>
<p>   gr.addQuery('table_sys_id', current.sys_id).addOrCondition('table_sys_id', 'IN', csfam);</p>
<p>   gr.query();</p>
<p>   if(gr.hasNext()){</p>
<p>     template.print("Attachments: ");</p>
<p>     while (gr.next()) {</p>
<p>       var attachLink = '&lt;a href="' + gs.getProperty("glide.servlet.uri") + gs.generateURL(gr.getTableName(),gr.sys_id) +   '"&gt;' + gr.file_name + '&lt;/a&gt;';</p>
<p>       template.print(attachLink);</p>
<p>       if(gr.hasNext())</p>
<p>         template.print(",   ");</p>
<p>       else</p>
<p>         template.print("\n");</p>
<p>     }</p>
<p>   }</p>
<p>}</p>





</pre><p></p><p>What it looks like on the record (for this case, the top list are its children, and the bottom show its sibling attachment (4th tier), both children's attachments (5th tier), parent's (3rd tier), parent's parent (2nd tier), and parent's parent's parent (top tier).   But it won't show it's sibling's children's attachments and won't show it's parent's sibling's or their children's.   In other words, no aunts/uncles, nieces/nephews, or cousins! (but its possible, I just didn't want to include those because they shouldn't be relevant to what task is currently being worked).</p><p><img   alt="Capture.JPG" class="image-0 jive-image" src="71fe3406db901b04ed6af3231f9619ab.iix" style="height: 324px; width: 620px;"/></p><p>And here's what it looks like on the email (not same ticket so that's why number of attachments differ) and this is from an approval email, so it doesn't show any siblings for those because they shouldn't be relevant, you'd only be approving something directly on or under the sysapproval.</p><p><img   alt="Capture2.JPG" class="jive-image image-2" src="9700210adb1c130468c1fb651f961908.iix" style="height: auto;"/></p><p><em><strong>9/14/15 EDIT: Noticed that approvals weren't showing the attachments of what they were approving so add line 8 to the Script Include.</strong></em></p>