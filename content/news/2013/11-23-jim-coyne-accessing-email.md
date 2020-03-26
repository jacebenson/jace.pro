---
title: "Accessing Email Record from Inbound Email Actions"
date: 2013-11-22T08:27:05.000Z
authors: ["Jim Coyne"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=589caae1dbd0dbc01dcaf3231f9619f1"
---
<p>I talked about performing a sanity check on Inbound Email Actions in my last blog entry - http://community.servicenow.com/blog/jimcoyne/inbound-email-actions-sanity-check<br /><br />The Inbound Email Action would fire an event if there were more than 20 lines in the email message. An Email Notification was setup to listen for that event and would notify the administrators of the problem email. I wanted to include a link to that problem email so the admins could just click on the link to go directly to it instead of forcing them to look for it. After a lot of digging around, I finally found a way to do it properly.<br /><br />The Inbound Email Action fires an event with the following line of code:</p>
<pre class="language-javascript"><code>gs.eventQueue(&#34;sys_email.u.mail_integration.max.records.exceeded&#34;, sys_email, null, null);</code></pre>
<p>The trick is the &#34;sys_email&#34; variable - it is actually a record of the email the Inbound Email Action is working on. It is not currently documented in the Inbound Email Action wiki article, but I found it buried in some release notes for the Spring 2009 release - http://wiki.servicenow.com/index.php?title&#61;Spring_2009_Notable_Changes#New_.22sys_email.22_global_variable_available_to_Inbound_Email_Actions.<br /><br />So by including it in the eventQueue call and configuring the notification on the &#34;Email [sys_email]&#34; table, the event is tied to the email record and we can access the record with &#34;current&#34; in some mail_script within the message of the notification:</p>
<pre class="language-javascript"><code>An email has been received which exceeds the number of expected records.

&lt;mail_script&gt;
   var url &#61; gs.getProperty(&#34;glide.servlet.uri&#34;) &#43; &#34;nav_to.do?uri&#61;sys_email.do?sys_id&#61;&#34; &#43; current.getValue(&#34;sys_id&#34;) &#43; &#34;%26sysparm_view&#61;inbox&#34;;
   template.print(&#34;&lt;a href&#61;&#39;&#34; &#43; url &#43; &#34;&#39;&gt;Click this link to view the email.&lt;/a&gt;&#34;);
&lt;/mail_script&gt;</code></pre>
<p> </p>
<p>And the result is the following:</p>
<p><br /><img src="1dd24e3cdbb2eb00656a5583ca961998.iix" /></p>