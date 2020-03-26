---
title: "Upgrade to Madrid Patch  if you are seeing a javalangNullPointerException when updating variable value to null on RITM"
date: 2019-07-17T21:49:15.000Z
authors: ["deepthij"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=0abd7144db76f3c01cd8a345ca9619a3"
---
<p><span style="font-size: 12pt;"><strong>Issue:</strong></span> In Madrid when assigning the variable to null can cause java.lang.NullPointerException and this can also result in variables not displayed on lists/reports.</p>
<p><span style="font-size: 12pt;"><strong>Steps to Confirm:</strong></span> Please run the below script in background to confirm whether the issue exists in Madrid or not:</p>
<p>1) Login to your instance as &#34;Admin&#34;<br />2) Run the following background script:<br />var gr &#61; new GlideRecord(&#34;sc_req_item&#34;);<br /> gr.addQuery(&#34;number&#34;,&#34;&lt;put the number of the Requested item&gt;&#34;);<br />gr.query(); <br />gr.next(); <br />gr.variables.&lt;put the name of the variable here&gt; &#61; null;<br />gr.update();<br />3) Exception is encountered.</p>
<p><span style="font-size: 12pt;"><strong>Resolution:</strong></span> There is a Know error article for the issue. Please find the KE article here - <a href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0748703" rel="nofollow">KB0748703</a></p>
<p><span style="font-size: 12pt;"><strong>Workaround:</strong></span> Find the requested item that has the issue and identify variable that is set as null. Then run the below script in background.</p>
<p>var gr &#61; new GlideRecord(&#34;sc_req_item&#34;);<br />gr.addQuery(&#34;number&#34;,&#34;&lt;Put the requested item number here&gt;&#34;);<br />gr.query(); <br />gr.next(); <br />gr.variables.&lt;put the name of the variable&gt; &#61; &#39;&#39;;<br />gr.update();</p>
<p><span style="font-size: 12pt;"><strong>Note:</strong></span> You should test in sub prod first (make sure sub prod is a recent clone of PROD or clone your prod to a sub prod environment) to confirm and then apply the changes in PROD.</p>