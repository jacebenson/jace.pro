---
title: "A different way to do data"
date: 2015-07-09T19:10:58.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=1f8c6ae1dbd0dbc01dcaf3231f961943"
---
<p>For years, if I wanted to move data through the system, I would export XML, go to the next instance, import the XML, etc.   I never really though about it; I thought this was the way to do it and that was it.   Then, recently, a colleague showed me something he does:</p><p></p><p><img   alt="Capture.PNG" class="image-1 jive-image" src="1b267739dbd05704ed6af3231f9619ea.iix" style="height: 378px; width: 620px;"/></p><p>He uses it to create backout update sets that can just be applied to revert changes.   But, all it does is save the XML of the current record.   He uses it to make originals of scripts he touches.   But, this got me thinking.   I could use it to save the XML of data used to support my releases.</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_143679779612940" jivemacro_uid="_143679779612940">
<p>var table = current.getTableName();</p>
<p>var sysID = current.sys_id + '';</p>
<p></p>
<p>addToUpdateSet(table, sysID);</p>
<p></p>
<p>function addToUpdateSet(table, recordId)</p>
<p>{</p>
<p>   var um;</p>
<p>   if (typeof GlideUpdateManager2 != 'undefined'){</p>
<p>   um = new GlideUpdateManager2();</p>
<p>   }</p>
<p>   else{</p>
<p>   um = new Packages.com.glide.update.UpdateManager2();</p>
<p>   }</p>
<p>   var rec = new GlideRecord(table);</p>
<p>   rec.get(recordId);</p>
<p>   um.saveRecord(rec);</p>
<p>}</p>
<p></p>
<p></p>
<p></p>



</pre><p></p><p>So, let's say I am adding a group to support my release:</p><p></p><p>The Group:</p><p><img   alt="Capture.PNG" class="image-0 jive-image" src="ee095582dbd813043eb27a9e0f9619e8.iix" style="height: 84px; width: 620px;"/></p><p></p><p>The Update Set:</p><p></p><p><img   alt="Capture.PNG" class="jive-image image-2" src="b159b402db1097049c9ffb651f9619e0.iix" style="height: 266px; width: 620px;"/></p><p>The Data:</p><p><img   alt="Capture.PNG" class="jive-image image-3" src="51a5d44adb589704ed6af3231f961931.iix" style="height: 257px; width: 620px;"/></p><p></p><p>So, now it is just one step.   Deploy all your code AND all the data to support it in a single update set.</p><p></p><p>The only gotchas are the same gotchas that exist with pure XML insert: if you have any other unique columns, it will conflict if it exists in your target instance.   But you can go in and manually change the XML in sys_update_xml if that conflict happens.</p>