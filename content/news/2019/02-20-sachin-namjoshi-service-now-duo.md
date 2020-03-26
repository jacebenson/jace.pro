---
title: "Service Now DUO Integration"
date: 2019-02-20T01:41:38.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=14e958a0db7be7402be0a851ca9619f9"
---
<p>DUO Security application allows users to access their company network remotely using DUO token.</p>
<p>DUO provides REST API which can be consumed by external application to create users, enroll users, creating token for users in DUO application.</p>
<p>This document mentions detailed steps to integrate service now with DUO REST API so that you can use service now catalog item, workflow and python scripts to automate below use cases for service now DUO Integration.</p>
<p>A) Create Users</p>
<p>B) Enroll User</p>
<p>C) Adding User to DUO Group ( File Generation)</p>
<p> </p>
<p> </p>
<p>Purpose of this blog is to document code needed to integrate Service now with DUO REST API</p>
<p> </p>
<p> A) <strong>Create User</strong></p>
<p> </p>
<p><strong>Python Script:</strong></p>
<p>&#34;&#34;&#34;</p>
<p>JSON format for the input parameters, all paremeters are required</p>
<p>&#34;{</p>
<p>     &#39;ikey&#39;:&#39;xxx&#39;,</p>
<p>     &#39;skey&#39;:&#39;xxx&#39;,</p>
<p>     &#39;host&#39;:&#39;api-xxxxxx.duosecurity.com&#39;,</p>
<p>     &#39;username&#39;:&#39;xxxx&#39;,</p>
<p>     &#39;realname&#39;:&#39;Tom Alter&#39;,</p>
<p>     &#39;email&#39;:&#39;tomalter&#64;gmail.com&#39;,</p>
<p>     &#39;alias1&#39;:tomr&#39;, #login name</p>
<p>     &#39;alias2&#39;:&#39;global\tomr&#39;,</p>
<p>     &#39;notes&#39;:&#39;test account&#39;,</p>
<p>     &#39;firstname&#39;:&#39;Tom&#39;,</p>
<p>     &#39;lastname&#39;:&#39;Alter&#39;    </p>
<p>}&#34;</p>
<p> </p>
<p>ARGS</p>
<p>        ikey - integration key</p>
<p>        skey - secret key</p>
<p>        host - admin api url</p>
<p>        username - Username</p>
<p>        realname - User&#39;s real name (optional)</p>
<p>        status - User&#39;s status, defaults to ACTIVE</p>
<p>        notes - Comment field (optional)</p>
<p>        email - Email address (optional)</p>
<p>        firstname - User&#39;s given name for ID Proofing (optional)</p>
<p>        lastname - User&#39;s surname for ID Proofing (optional)</p>
<p>        alias1..alias4 - Aliases for the user&#39;s primary username (optional)</p>
<p> </p>
<p>Returns newly created user object.</p>
<p>&#34;&#34;&#34;</p>
<p> </p>
<p>#!/usr/bin/python</p>
<p>from __future__ import absolute_import</p>
<p>from __future__ import print_function</p>
<p>import pprint</p>
<p>import sys</p>
<p>import json</p>
<p>import duo_client</p>
<p>from six.moves import input</p>
<p> </p>
<p>#jsonData &#61; json.loads(sys.argv[1].replace(&#34;&#39;&#34;, &#39;&#34;&#39;))</p>
<p>#print(str(jsonData))</p>
<p>IKEY&#61;sys.argv[1]</p>
<p>SKEY&#61;sys.argv[2]</p>
<p>HOST&#61;sys.argv[3]</p>
<p>USERNAME&#61;sys.argv[4]</p>
<p>REALNAME&#61;sys.argv[5]</p>
<p>EMAIL&#61;sys.argv[6]</p>
<p>ALIAS1&#61;sys.argv[7]</p>
<p>ALIAS2&#61;sys.argv[8]</p>
<p>NOTES&#61;sys.argv[9]</p>
<p>FIRSTNAME&#61;sys.argv[10]</p>
<p>LASTNAME&#61;sys.argv[11]</p>
<p> </p>
<p># Configuration and information about objects to create.</p>
<p>admin_api &#61; duo_client.Admin(</p>
<p>    ikey&#61;IKEY,</p>
<p>    skey&#61;SKEY,</p>
<p>    host&#61;HOST,</p>
<p>)</p>
<p> </p>
<p># Create and return a new user object.</p>
<p>user &#61; admin_api.add_user(</p>
<p>    username&#61;USERNAME,</p>
<p>    realname&#61;REALNAME,</p>
<p>    email&#61;EMAIL,</p>
<p>    alias1&#61;ALIAS1,</p>
<p>    alias2&#61;ALIAS2,</p>
<p>    notes&#61;NOTES,</p>
<p>    firstname&#61;FIRSTNAME,</p>
<p>    lastname&#61;LASTNAME,</p>
<p>)</p>
<p> </p>
<p>#print(&#39;Created user:&#39;)</p>
<p>pprint.pprint(user)</p>
<p> </p>
<p><strong>Workflow Activity To Run Python Script:</strong></p>
<p> </p>
<p>var dataObj &#61; {</p>
<p>                &#39;ikey&#39;: &#39;xxx&#39;,</p>
<p>                &#39;skey&#39;: &#39;xxx&#39;,</p>
<p>                &#39;host&#39;: &#39;xxx.duosecurity.com&#39;,</p>
<p>                &#39;username&#39;: current.variable_pool.requested_for.email,</p>
<p>                &#39;realname&#39;: current.variable_pool.requested_for.name,</p>
<p>                &#39;email&#39;: current.variable_pool.requested_for.email,</p>
<p>                &#39;alias1&#39;: current.variable_pool.requested_for.user_name,</p>
<p>                &#39;alias2&#39;: &#39;global\\&#39;&#43;current.variable_pool.requested_for.user_name,</p>
<p>                &#39;notes&#39;: current.number,</p>
<p>                &#39;firstname&#39;: current.variable_pool.requested_for.first_name,</p>
<p>                &#39;lastname&#39;: current.variable_pool.requested_for.last_name</p>
<p>};</p>
<p>var filePath &#61; &#34;scripts\\Python\\DUO\\create_user.py&#34;;</p>
<p>var midServer &#61; &#39;mid.server.&#39;&#43;gs.getProperty(&#34;mid.server.rba_default&#34;);</p>
<p>var commandLine &#61; &#34;python &#34;&#43;filePath &#43;&#34; &#34;&#43; dataObj.ikey &#43;&#34; &#34;&#43;  dataObj.skey &#43;&#34; &#34;&#43; dataObj.host &#43;&#34; &#34;&#43; dataObj.username &#43;&#39; \&#34;&#39;&#43; dataObj.realname &#43;&#39;\&#34; &#39; &#43;dataObj.email &#43;&#34; &#34;&#43; dataObj.alias1 &#43;&#34; &#34;&#43; dataObj.alias2 &#43;&#39; \&#34;&#39;&#43; dataObj.notes &#43;&#39;\&#34;&#39;&#43;&#34; &#34;&#43; &#39;\&#34;&#39; &#43;dataObj.firstname&#43; &#39;\&#34;&#39; &#43;&#34; &#34;&#43; &#39;\&#34;&#39; &#43;dataObj.lastname&#43; &#39; \&#34;&#39;;</p>
<p>var eccResponse &#61; new CommandProbe(gs.getProperty(&#34;mid.server.rba_default&#34;), &#34;127.0.0.1&#34;).execute(true, commandLine);</p>
<p>var retObj &#61; new Object();</p>
<p>retObj.output &#61; JSON.stringify(eccResponse.output).replace(&#34;\n&#34;,&#34;&#34;);</p>
<p>retObj.error &#61; eccResponse.error;</p>
<p> </p>
<p>if(retObj.error &amp;&amp; retObj.error !&#61; null){</p>
<p>                current.work_notes &#61; retObj.error;</p>
<p>                activity.result &#61; &#34;failed&#34;;</p>
<p>} else{</p>
<p>                activity.result &#61; &#34;success&#34;;</p>
<p>                var jsonOutput &#61; new JSON().decode(JSON.parse(retObj.output));</p>
<p>                workflow.scratchpad.user_id &#61; jsonOutput .user_id;</p>
<p>}</p>
<p> </p>
<p> B) <strong>Enroll User</strong></p>
<p> </p>
<p><strong><u>Python Script:</u></strong></p>
<p> </p>
<p>&#34;&#34;&#34;</p>
<p>JSON format for the input parameters, all paremeters are required</p>
<p>&#34;{</p>
<p>      &#39;ikey&#39;:&#39;xxx&#39;,</p>
<p>      &#39;skey&#39;:&#39;xxx&#39;,</p>
<p>      &#39;host&#39;:&#39;api-xxxxxx.duosecurity.com&#39;,</p>
<p>      &#39;username&#39;:&#39;tomalter&#64;gmail.com&#39;,</p>
<p>      &#39;email&#39;:&#39;tomalter&#64;gmail.com&#39;</p>
<p>}&#34;</p>
<p> </p>
<p>ARGS</p>
<p>        ikey - integration key</p>
<p>        skey - secret key</p>
<p>        host - admin api url</p>
<p>        username - Username</p>
<p>        email - Email address</p>
<p>        valid_secs - Seconds before the enrollment link expires</p>
<p>                     (if 0 it never expires)</p>
<p> </p>
<p>Returns nothing</p>
<p>&#34;&#34;&#34;</p>
<p> </p>
<p>#!/usr/bin/python</p>
<p>from __future__ import absolute_import</p>
<p>from __future__ import print_function</p>
<p>import pprint</p>
<p>import sys</p>
<p>import json</p>
<p> </p>
<p>import duo_client</p>
<p>from six.moves import input</p>
<p> </p>
<p>#jsonData &#61; json.loads(sys.argv[1].replace(&#34;&#39;&#34;, &#39;&#34;&#39;))</p>
<p>#print(str(data))     </p>
<p>IKEY&#61;sys.argv[1]</p>
<p>SKEY&#61;sys.argv[2]</p>
<p>HOST&#61;sys.argv[3]</p>
<p>USERNAME&#61;sys.argv[4]</p>
<p>EMAIL&#61;sys.argv[5]</p>
<p> </p>
<p># Configuration and information about objects to create.</p>
<p>admin_api &#61; duo_client.Admin(</p>
<p>    ikey&#61;IKEY,</p>
<p>    skey&#61;SKEY,</p>
<p>    host&#61;HOST,</p>
<p>)</p>
<p> </p>
<p>#enroll user and enrollment email</p>
<p>admin_api.enroll_user(</p>
<p>    username&#61;USERNAME,</p>
<p>    email&#61;EMAIL,</p>
<p>    valid_secs&#61;86400,</p>
<p>)</p>
<p>#print(&#39;Enrollment email has been to user at &#39;, user[&#39;email&#39;])</p>
<p> </p>
<p><strong><u>Workflow Activity to call Python Script</u></strong></p>
<p> </p>
<p>var dataObj &#61; {</p>
<p>                &#39;ikey&#39;: &#39;xxx&#39;,</p>
<p>                &#39;skey&#39;: &#39;xxx&#39;,</p>
<p>                &#39;host&#39;: &#39;xxx.duosecurity.com&#39;,</p>
<p>                &#39;username&#39;: current.variable_pool.requested_for.email,</p>
<p>                &#39;email&#39;: current.variable_pool.requested_for.email</p>
<p>};</p>
<p>var filePath &#61; &#34;scripts\\Python\\DUO\\enroll_user_and_email.py&#34;;</p>
<p>var midServer &#61; &#39;mid.server.&#39;&#43;gs.getProperty(&#34;mid.server.rba_default&#34;);</p>
<p>var commandLine &#61; &#34;python &#34;&#43;filePath &#43;&#34; &#34;&#43; dataObj.ikey &#43;&#34; &#34;&#43;  dataObj.skey &#43;&#34; &#34;&#43; dataObj.host &#43;&#34; &#34;&#43; dataObj.username &#43;&#34; &#34;&#43; dataObj.email;</p>
<p>var eccResponse &#61; new CommandProbe(gs.getProperty(&#34;mid.server.rba_default&#34;), &#34;127.0.0.1&#34;).execute(true, commandLine);</p>
<p>var retObj &#61; new Object();</p>
<p>retObj.output &#61; JSON.stringify(eccResponse.output).replace(&#34;\n&#34;,&#34;&#34;);</p>
<p>retObj.error &#61; eccResponse.error;</p>
<p> </p>
<p>if(retObj.error &amp;&amp; retObj.error !&#61; null){</p>
<p>                current.work_notes &#61; retObj.error;</p>
<p>                activity.result &#61; &#34;failed&#34;;</p>
<p>} else{</p>
<p>                activity.result &#61; &#34;success&#34;;</p>
<p>}</p>
<p> </p>
<p>C). <strong>Add User to DUO Group</strong></p>
<p> </p>
<p><strong><u>Python Script:</u></strong></p>
<p>&#34;&#34;&#34;</p>
<p>JSON format for the input parameters, all paremeters are required</p>
<p>&#34;{</p>
<p>      &#39;ikey&#39;:&#39;xxx&#39;,</p>
<p>      &#39;skey&#39;:&#39;xxx&#39;,</p>
<p>      &#39;host&#39;:&#39;api-xxxxxxxx.duosecurity.com&#39;,</p>
<p>      &#39;user_id&#39;:&#39;xxx&#39;,</p>
<p>      &#39;group_id&#39;:&#39;xxx&#39;</p>
<p>}&#34;</p>
<p> </p>
<p>ARGS</p>
<p>        ikey - integration key</p>
<p>        skey - secret key</p>
<p>        host - admin api url</p>
<p>        user_id - User ID</p>
<p>        group_id - Group ID</p>
<p> </p>
<p>Returns nothing</p>
<p>&#34;&#34;&#34;</p>
<p> </p>
<p>#!/usr/bin/python</p>
<p>from __future__ import absolute_import</p>
<p>from __future__ import print_function</p>
<p>import pprint</p>
<p>import sys</p>
<p>import json</p>
<p> </p>
<p>import duo_client</p>
<p>from six.moves import input</p>
<p> </p>
<p>#jsonData &#61; json.loads(sys.argv[1].replace(&#34;&#39;&#34;, &#39;&#34;&#39;))</p>
<p>#print(str(data)) </p>
<p>IKEY&#61;sys.argv[1]</p>
<p>SKEY&#61;sys.argv[2]</p>
<p>HOST&#61;sys.argv[3]</p>
<p>USERID&#61;sys.argv[4]</p>
<p>GROUPID&#61;sys.argv[5]</p>
<p> </p>
<p># Configuration and information about objects to create.</p>
<p>admin_api &#61; duo_client.Admin(</p>
<p>    ikey&#61;IKEY,</p>
<p>    skey&#61;SKEY,</p>
<p>    host&#61;HOST,</p>
<p>)</p>
<p> </p>
<p>#add user to group</p>
<p>admin_api.add_user_group(</p>
<p>    user_id&#61;USERID,</p>
<p>    group_id&#61;GROUPID,</p>
<p>)</p>
<p> </p>
<p><strong><u>Workflow Activity to execute Python Script:</u></strong></p>
<p> </p>
<p>var dataObj &#61; {</p>
<p>                &#39;ikey&#39;: &#39;xxx&#39;,</p>
<p>                &#39;skey&#39;: &#39;xxx&#39;,</p>
<p>                &#39;host&#39;: &#39;api-xxx.duosecurity.com&#39;,</p>
<p>                &#39;user_id&#39;: workflow.scratchpad.user_id,</p>
<p>                &#39;group_id&#39;: &#39;xxx&#39;</p>
<p>};</p>
<p> </p>
<p>var filePath &#61; &#34;scripts\\Python\\DUO\\add_user_to_group.py&#34;;</p>
<p>var midServer &#61; &#39;mid.server.&#39;&#43;gs.getProperty(&#34;mid.server.rba_default&#34;);</p>
<p>var commandLine &#61; &#34;python &#34;&#43;filePath &#43;&#34; &#34;&#43; dataObj.ikey &#43;&#34; &#34;&#43; dataObj.skey &#43;&#34; &#34;&#43; dataObj.host &#43;&#34; &#34;&#43; dataObj.user_id &#43;&#34; &#34;&#43; dataObj.group_id;</p>
<p>var eccResponse &#61; new CommandProbe(gs.getProperty(&#34;mid.server.rba_default&#34;), &#34;127.0.0.1&#34;).execute(true, commandLine);</p>
<p>var retObj &#61; new Object();</p>
<p>retObj.output &#61; JSON.stringify(eccResponse.output).replace(&#34;\n&#34;,&#34;&#34;);</p>
<p>retObj.error &#61; eccResponse.error;</p>
<p> </p>
<p>if(retObj.error &amp;&amp; retObj.error !&#61; null){</p>
<p>                current.work_notes &#61; retObj.error;</p>
<p>                activity.result &#61; &#34;failed&#34;;</p>
<p>} else{</p>
<p>                activity.result &#61; &#34;success&#34;;</p>
<p>}</p>
<p> </p>
<p>Regards,</p>
<p>Sachin</p>