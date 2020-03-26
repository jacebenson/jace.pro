---
title: "Custom Auditing"
date: 2015-07-09T19:34:14.000Z
authors: ["Mike Allen"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=4ccdaea9dbd0dbc01dcaf3231f961935"
---
<p style="font-size: 13.3333330154419px;">Auditing in ServiceNow can be a tricky proposition.   The sys_audit table is large, and searching it effectively can be a chore, especially if you are doing so in production.   ServiceNow has provided us an example of how to not use the sys_audit table, but create our own custom auditing, instead.</p><p style="font-size: 13.3333330154419px;"></p><p style="font-size: 13.3333330154419px;"><span style="; font-size: 14pt; text-decoration: underline;"><strong>Auditing Roles</strong></span></p><p style="font-size: 13.3333330154419px;"></p><p style="font-size: 13.3333330154419px;">Auditing of the sys_user_has_role table is not done in the sys_audit table.   Changing the collection to be audit = true has no effect.   ServiceNow has created a separate table to audit these very changes, sys_audit_role, so let's take a look.</p><p style="font-size: 13.3333330154419px;"></p><p style="font-size: 13.3333330154419px;"><img  __jive_id="23189" alt="Capture.PNG" class="image-0 jive-image jiveImage" src="83439ccadb1817049c9ffb651f9619a1.iix" style="height: 268px; width: 620px;"/></p><p style="font-size: 13.3333330154419px;">This is a very interesting way to audit things, and a way we have used in our own development.   If you need to audit small chunks of data, create your own table.   Leave the OOB sys_audit table for auditing the OOB system and create your own table and business rule to audit your own creations.</p><p style="font-size: 13.3333330154419px;"></p><p style="font-size: 13.3333330154419px;">Here is the business rule (<a title="" _jive_internal="true" href="/" rel="nofollow" target="_blank">https://</a>&lt;instance&gt;.service-now.com/nav_to.do?uri=sys_script.do?sys_id=543b6f4f0a0a0b2c01214113f49f0c6f) that audits this table:</p><p style="font-size: 13.3333330154419px;"></p><p style="font-size: 13.3333330154419px;"><img  __jive_id="23222" alt="Capture.PNG" class="image-0 jive-image jiveImage" src="a3e2b339db9c1fc068c1fb651f9619e7.iix" style="height: 243px; width: 620px;"/></p><p style="font-size: 13.3333330154419px;">Advanced tab looks like this:</p><p style="font-size: 13.3333330154419px;"></p><pre __default_attr="javascript" __jive_macro_name="code" class="_jivemacro_uid_14365457990666661 jive_text_macro jive_macro_code" jivemacro_uid="_14365457990666661">
<p>auditRoleChange();</p>
<p></p>
<p></p>
<p>function auditRoleChange() {</p>
<p>     var auditRole = new GlideRecord("sys_audit_role");</p>
<p>     if (!auditRole.isValid())</p>
<p>           return;</p>
<p></p>
<p></p>
<p>     auditRole.user = current.user;</p>
<p>     auditRole.role = current.role;</p>
<p>     auditRole.changed_by = gs.getUserID();</p>
<p>     auditRole.granted_by_group = current.granted_by;</p>
<p>     switch (current.operation()) {</p>
<p>           case "update":</p>
<p>                 auditRole.operation = "Updated";</p>
<p>                 break;</p>
<p>           case "delete":</p>
<p>                 auditRole.operation = "Removed";</p>
<p>                 break;</p>
<p>           default: // it's an insert</p>
<p>                 auditRole.operation = "Added";</p>
<p>     }</p>
<p>     auditRole.count_after_change = countInstances();</p>
<p>     auditRole.insert();</p>
<p>}</p>
<p></p>
<p></p>
<p>function countInstances() {</p>
<p>     var count = new GlideAggregate("sys_user_has_role");</p>
<p>     count.addQuery("user", current.user);</p>
<p>     count.addQuery("role", current.role);</p>
<p>     count.addAggregate("COUNT");</p>
<p>     count.query();</p>
<p>     var instances = 0;</p>
<p>     if (count.next())</p>
<p>           instances = count.getAggregate('COUNT');</p>
<p>     return instances;</p>
<p>}</p>

</pre><p style="font-size: 13.3333330154419px;"></p><p style="font-size: 13.3333330154419px;">This gives the perfect blueprint as to how to make your own custom auditing table.   <span style="font-size: 13.3333330154419px;">We created a module in User Administration that allows us to view the role changes at any point.   </span>Just remember some things, since this table does have the potential to grow large:</p><p style="font-size: 13.3333330154419px;"></p><p style="font-size: 13.3333330154419px;">Remember to exclude the table for clones:</p><p style="font-size: 13.3333330154419px;"><img  __jive_id="23219" alt="Capture.PNG" class="image-1 jive-image jiveImage" src="b3e7d18adb9813043eb27a9e0f96190a.iix" style="height: 153px; width: 620px;"/></p><p style="font-size: 13.3333330154419px;"></p><p style="font-size: 13.3333330154419px;"><img  __jive_id="23218" alt="Capture.PNG" class="image-0 jive-image jiveImage" src="fa46fc8edb1cdfc068c1fb651f961966.iix" style="height: 64px; width: 620px;"/></p><p style="font-size: 13.3333330154419px;"></p><p style="font-size: 13.3333330154419px;">And set up either rotation (if you only need to edit a particular period of time, i.e. the last 3 months) or extension (if you want to keep the data for longer periods of time):</p><p style="font-size: 13.3333330154419px;"></p><p style="font-size: 13.3333330154419px;"><img  __jive_id="23220" alt="Capture.PNG" class="jive-image image-2 jiveImage" src="ac2114c6db949704ed6af3231f961958.iix" style="height: 287px; width: 620px;"/></p><p style="font-size: 13.3333330154419px;"><img  __jive_id="23221" alt="Capture.PNG" class="jive-image image-3 jiveImage" src="b87f2379db1c93041dcaf3231f961922.iix" style="height: 80px; width: 620px;"/></p><p style="font-size: 13.3333330154419px;"></p><p style="font-size: 13.3333330154419px;">What can you do with this?   With such an emphasis on Custom Applications, you can control the auditing aspect of your own app.   Or you can <span style="font-size: 13.3333330154419px;">add it to modules and allow the support tiers to view the changes.</span></p><p><span style="font-size: 13.3333330154419px;"><br/></span></p>