---
title: "PowerShell Probe Script Utility"
date: 2012-12-03T21:37:09.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=04fd622ddbd0dbc01dcaf3231f9619c2"
---
<p>This was created based on Chris Maloy's Command Line Probe Script Utility Blog (http://community.servicenow.com/blog/christophermaloy/command-line-probe-script-include)<br /><br />I modified this to send PowerShell scripts to the MID server.<br /><br />Example of script to call it:<br /><pre __default_attr="plain" __jive_macro_name="code" class="jive_text_macro jive_macro_code"><br /><br />var powerShellProbe = new PowershellProbeES("MIDServer1");<br />powerShellProbe.setScript("get-process | where-object {$_.WS -ge 1048576} | where-object {$_.processname -ne 'powershell'} | sort-object WS —descending | convertto-html -property Name,WS &gt; c:\\Inetpub\\wwwroot\\ps.html");<br />powerShellProbe.create();<br /></pre></p>