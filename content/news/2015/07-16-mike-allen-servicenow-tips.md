---
title: "ServiceNow Tips and Tricks"
date: 2015-07-15T22:21:49.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=da0deaa5dbd0dbc01dcaf3231f96197b"
---
<p><span style="; font-size: 14pt; text-decoration: underline;"><strong>Useful External Websites</strong></span></p>
<p> </p>
<p><span style="font-size: 10pt;">These sites are some that I have found in my work as a SN developer.   These are independent of SN, for the most part, but all have useful info and should be included in everyone&#39;s toolbelt.<br /></span></p>
<p><span style="font-size: 10pt;"><a title="https://www.youtube.com/user/servicenowinc" href="https://www.youtube.com/user/servicenowinc" rel="nofollow">ServiceNow Inc - YouTube</a> </span></p>
<p><span style="font-size: 10pt;"><a title="https://styleguide.service-now.com/styles/styleguide/index.html?t&#61;2016-01-07%2011:33:29" href="https://styleguide.service-now.com/styles/styleguide/index.html?t&#61;2016-01-07%2011:33:29" rel="nofollow">https://styleguide.service-now.com/styles/styleguide/index.html?t&#61;2016-01-07%2011:33:29</a> </span></p>
<p><span style="font-size: 10pt;"><a title="http://www.servicenowguru.com/" href="http://www.servicenowguru.com/" rel="nofollow">http://www.servicenowguru.com/</a></span></p>
<p><span style="font-size: 10pt;"><a title="http://servicenowdeveloper.com/" href="http://servicenowdeveloper.com/" rel="nofollow">ServiceNow Developer | ServiceNow tips, tricks and tutorials.</a></span></p>
<p><span style="font-size: 10pt;"><a title="http://www.john-james-andersen.com/" href="http://www.john-james-andersen.com/" rel="nofollow">John Andersen-Personal &amp; Professional Website</a></span></p>
<p><span style="font-size: 10pt;"><a title="http://www.snc-blog.com/" href="http://www.snc-blog.com/" rel="nofollow">http://www.snc-blog.com/</a></span></p>
<p><span style="font-size: 10pt;"><a title="http://www.servicenowdiary.com/" href="http://www.servicenowdiary.com/" rel="nofollow">http://www.servicenowdiary.com/</a></span></p>
<p><span style="font-size: 10pt;"><a title="http://garrettnow.com/" href="http://garrettnow.com/" rel="nofollow">GarrettNow | Bite Sized ServiceNow</a></span></p>
<p><span style="font-size: 10pt;"><a title="http://the.servicenowscoop.com/" href="http://the.servicenowscoop.com/" rel="nofollow">http://the.servicenowscoop.com/</a></span></p>
<p><span style="font-size: 10pt;"><a title="http://www.servicenowelite.com/" href="http://www.servicenowelite.com/" rel="nofollow">ServiceNow ELITE.com</a></span></p>
<p><span style="font-size: 10pt;"><a title="http://snaug.com/" href="http://snaug.com/" rel="nofollow">Snaug | ServiceNow Advanced Users Group</a></span></p>
<p><span style="font-size: 10pt;"><a title="http://servicenowcms.com/" href="http://servicenowcms.com/" rel="nofollow">http://servicenowcms.com/</a><br /></span></p>
<p><a title="http://servicenowgems.com/" href="http://servicenowgems.com/" rel="nofollow">Service Now Gems</a></p>
<p><a title="http://www.servicenowprotips.com/" href="http://www.servicenowprotips.com/" rel="nofollow">ServiceNow Pro Tips</a></p>
<p>https://serviceportal.io/</p>
<p> </p>
<p><span style="font-size: 10pt;">This is by no means comprehensive.   But, apart from the community, this is where I find a large portion of my answers.<br /></span></p>
<p> </p>
<p><span style="text-decoration: underline; font-size: 14pt;"><strong>CTRL &#43; G</strong></span></p>
<p>In the script editor, after using CTRL &#43; F to find some string in the code, CTRL &#43; G forwards to the next instance of that search term.  I stumbled upon that and was amazed.</p>
<p><span style="; font-size: 14pt; text-decoration: underline;"><strong>cancel_my_transaction.do</strong></span></p>
<p>We have all been there.   We run something in production that should take no time and it is, for some reason, not behaving the way it did in sub-prod.   What can you do?   You try to open a new browser window, but you are stuck with this long-running transaction.   In the past, I&#39;d get one of my peers to attempt to lock me out, force the transaction to stop, restart the instance, anything, panicked, just to get it to stop.</p>
<p> </p>
<p>Well, here is your answer.   <a class="jive-link-external-small" title="k-external-small" href="https://instance.service-now.com/cancel_my_transaction.do" target="_blank" rel="noopener noreferrer nofollow">https://instance.service-now.com/cancel_my_transaction.do</a>.     This should be your new first line of defense against runaway transactions.   It won&#39;t cancel every time, but it will save your bacon as it has saved mine.</p>
<p> </p>
<p><span style="; font-size: 14pt; text-decoration: underline;"><strong>GlideMultipleUpdate</strong></span></p>
<p> </p>
<p>When you absolutely, positively have to change every record in the table, accept no substitutes.</p>
<p> </p>
<p>var mu &#61; new GlideMultipleUpdate(table_name);</p>
<p>mu.addQuery(&#39;field_name&#39;, value);</p>
<p>mu.setValue(&#39;field_name&#39;,   value);</p>
<p>mu.execute();</p>
<pre class="jive_macro_code _jivemacro_uid_14398282652183967 jive_text_macro">       </pre>
<p> </p>
<p>This will update all records that follow the query set.   It is very fast, does not touch any system fields (sys_updated_on, sys_updated_by, etc.) and does not run any business rules, so its usefulness is limited to just that.   If you have to update 600k records, and you do not care that the system fields are not updated, use this.</p>