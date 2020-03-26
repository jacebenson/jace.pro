---
title: "Hiding modules from nonmanagers"
date: 2014-11-20T20:46:16.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=4c9caae1dbd0dbc01dcaf3231f9619b1"
---
<p>I got a request to hide a couple of modules from non-managers.   Here is how I did it:</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14164944744562111" jivemacro_uid="_14164944744562111" modifiedtitle="true">
<p>var GMF_ClientUserUtil = Class.create();</p>
<p>GMF_ClientUserUtil.prototype = Object.extendsObject(AbstractAjaxProcessor, {</p>
<p></p>
<p> //Given a user sys_id get the manager</p>
<p>   isManager: function(userId) {</p>
<p></p>
<p>   var returnVal;</p>
<p></p>
<p>   try{</p>
<p>       //if the param is null, use the current user's ID</p>
<p>       if(JSUtil.nil(userId)){</p>
<p>             userId = gs.getUserID();</p>
<p>       }</p>
<p></p>
<p>       var util = new GMF_UserUtil();</p>
<p>       returnVal = util.isManager(userId);</p>
<p>       }catch(e){</p>
<p>           gs.logError(e.message,'SI:GMF_ClientUserUtil-&gt;isManager()');</p>
<p>       }</p>
<p></p>
<p>       return returnVal;</p>
<p>   }</p>
<p></p>
<p>});</p>
</pre><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14164934738751157" jivemacro_uid="_14164934738751157" modifiedtitle="true">
<p>var GMF_UserUtil = Class.create();</p>
<p>GMF_UserUtil.prototype = {</p>
<p><span style="font-size: 9pt; line-height: 12pt;"> </span></p>
<p>   initialize: function () {</p>
<p>   },</p>
<p></p>
<p>   //Check to see if the user is anyone's manager (only looks at active users)</p>
<p>   isManager: function(userId){</p>
<p>             var gr = new GlideAggregate('sys_user');</p>
<p>             gr.addActiveQuery();</p>
<p>             gr.addQuery('manager', userId);</p>
<p>             gr.addAggregate('COUNT');</p>
<p>             gr.query();</p>
<p>             gr.next();</p>
<p></p>
<p>             if( gr.getAggregate('COUNT') &gt; 0 ){ </p>
<p>                       return true;</p>
<p>             }</p>
<p></p>
<p>             return false;</p>
<p>   },</p>
<p></p>
<p>   type: 'GMF_UserUtil'</p>
<p>}</p>
</pre><p></p><p></p><p>I created a global UI Script:   (The syntax highlighter gave me &gt; 10 minutes worth of grief when trying to format this so I gave up.)</p><p></p><table><tbody><tr><td>document.observe("dom:loaded", function() {</td><td></td><td></td></tr><tr><td>     var ga = new GlideAjax('GMF_ClientUserUtil');</td><td></td></tr><tr><td>       ga.addParam('sysparm_name', 'isManager');</td><td></td></tr><tr><td>     ga.getXML(isManagerCallback);</td><td></td><td></td></tr></tbody></table><p>});</p><p></p><table><tbody><tr><td>function isManagerCallback(response){</td><td></td><td></td></tr></tbody></table><p>     var answer = response.responseXML.documentElement.getAttribute("answer");</p><p></p><p>     //Hide the "Incident - Manager" module</p><p>   if (answer == 'false' &amp;&amp; parent.frames[0].document.getElementById('module.b2ca14786f319500b8d923fc5d3ee4c7')) {</p><table><tbody><tr><td>     </td><td> parent.frames[0].document.getElementById('module.b2ca14786f319500b8d923fc5d3ee4c7').style.display = 'none';</td><td></td><td></td></tr></tbody></table><p>     }</p><p></p><p>     //Hide the "Request Items - Manager" module</p><p>     if (answer == 'false' &amp;&amp; parent.frames[0].document.getElementById('module.d335eefd6f1f5900aaaa23fc5d3ee403')) {</p><table><tbody><tr><td>         </td><td>parent.frames[0].document.getElementById('module.d335eefd6f1f5900aaaa23fc5d3ee403').style.display = 'none';</td><td></td><td></td></tr></tbody></table><p>     }</p><p>}</p>