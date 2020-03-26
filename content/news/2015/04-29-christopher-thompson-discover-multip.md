---
title: "Discover multiple CIs with the same serial number  Part I"
date: 2015-04-29T02:06:50.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=c75de629dbd0dbc01dcaf3231f9619c9"
---
<p><span style="color: #1287b5; text-align: center;"><em>This is in regards to the legacy CI identifiers used prior to the Geneva release and without Service Mapping. For information on how to handle this scenario using the new CI identifiers, please reference the second part of this series: <a href="community?id&#61;community_blog&amp;sys_id&#61;a71da2e5dbd0dbc01dcaf3231f961963" target="_blank" rel="nofollow">Discover multiple CIs with the same serial number - Part II</a></em></span></p>
<p>A common issue that seems to occur is if you have some virtual devices or cloned devices that have the same Serial Number, Discovery is unable to differentiate these devices and instead will either skip creating some of these CI&#39;s or will override currently existing records.</p>
<p> </p>
<table border="1"><tbody><tr><td>
<p>For example, let&#39;s say I have 2 AIX LPAR&#39;s that have these values.</p>
<p> </p>
<p>1)</p>
<p>Name: Server 1</p>
<p>IP: 10.10.10.1</p>
<p>Serial Number: abc123</p>
<p> </p>
<p>2)</p>
<p>Name: Server 2</p>
<p>IP: 10.10.10.2</p>
<p>Serial Number: abc123</p>
<p> </p>
<p>If we scan &#34;Server 1&#34; first, we will create a new AIX server record with its values.</p>
<p>It will look something like below.</p>
<p><img class="image-5 jive-image" style="height: 97.0666666666667px; width: 624px;" src="d39a7c0adb109f048c8ef4621f96199a.iix" alt="Screen Shot 2015-04-28 at 1.12.44 PM.JPG" width="624" height="97" /></p>
<p><span style="font-size: 10pt; line-height: 1.5em;">However, if we then scan &#34;Server 2&#34;, what will happen is that Discovery will search the CMDB based on the Serial Number and find that we have &#34;one exact match&#34; already in our database and it will just update the CI record it matched against with the new Name and IP values we just discovered.</span></p>
<p><span style="font-size: 10pt; line-height: 1.5em;"><img class="jive-image image-4" style="height: 98.2287234042553px; width: 626px;" src="ca41e1c6db10d7049c9ffb651f9619de.iix" alt="Screen Shot 2015-04-28 at 1.11.04 PM.JPG" width="626" height="98" /><br /></span></p>
<p><span style="font-size: 10pt; line-height: 1.5em;">Thus, we will no longer have any reference to the &#34;Server 1&#34; device information.</span></p>
</td></tr></tbody></table>
<p> </p>
<p>The reason this occurs is because by default, we assume that the Serial Number of any device that we scan is a <a title="ki.servicenow.com/index.php?title&#61;Discovery_Identifiers#How_Identifiers_Work" href="http://wiki.servicenow.com/index.php?title&#61;Discovery_Identifiers#How_Identifiers_Work" rel="nofollow">unique identifier </a>for these devices.</p>
<p> </p>
<p>If you look in the &#34;CI Identifiers&#34; table (located under &#34;Discovery Definition &gt; CI Identification &gt; Identifiers) you will see that with the exception of a few special type of Identifiers (such as ESX UUID and Storage Server), the first Identifiers that will be used against most types of devices are &#34; Serial Number Table &amp; Class Name&#34; and &#34;Serial Number &amp; Class Name.&#34;</p>
<p style="text-align: center;"> </p>
<p>Using the Serial Number as the main unique identifier is preferred because it&#39;s more likely that other values like Name or IP Address can be changed or are not unique.</p>
<p> </p>
<p>For example, if a company uses dynamic<a title="ki.servicenow.com/index.php?title&#61;Discovery_Status#IP_Address_Scan_Data" href="http://wiki.servicenow.com/index.php?title&#61;Discovery_Status#IP_Address_Scan_Data" rel="nofollow"> IP address assignment where a device&#39;s IP may change regularly</a> or if a user decides to change the name of their computer, these actions will alter certain values in subsequent <a title="" href="community/blogs/blog/2014/10/15/saving-time-and-effort-with-good-behaviors" rel="nofollow">Discovery scans</a> of these machines. <span style="font-size: 10pt; line-height: 1.5em;">In these cases, while the IP and/or name may be getting changed, we still want to associate this device when scanned to the same CI record and because the serial number typically is not changed, this is why we use this primarily to identify what CI record to update.</span></p>
<p> </p>
<p>However, in this scenario, where we actually have separate devices we are scanning with this same serial number value, this behavior will not work. <span style="font-size: 10pt; line-height: 1.5em;">Overall, the best way to address this issue is to be able to modify the duplicated serial numbers so that you don&#39;t have any of these in your environment. </span><span style="font-size: 10pt; line-height: 1.5em;">However, this may not be a feasible solution is some cases.</span></p>
<p> </p>
<p>So, as an alternative to address this type of issue, there are some possible &#34;workarounds&#34; that you can implement. <span style="font-size: 10pt; line-height: 1.5em;">Now, to be clear, none of these suggestions are an &#34;absolute&#34; way to fix this issue, because there are a lot of other varying factors to consider as I will mention below. </span></p>
<p> </p>
<h1>3 Ways to Discover Multiple CIs with duplicate serial numbers:</h1>
<p> </p>
<h3><strong>Create the CI Records Manually</strong></h3>
<p>If you have an environment where you know ahead of time what servers may be having these duplicate serial numbers, an easy way to workaround this issue is to create records manually for these CI&#39;s that can be referenced when scanning these devices later.</p>
<p> </p>
<p>Using my initial example for reference, if I were to manually create 2 AIX server records in my CMDB for these 2 servers, what will happen when we scan these devices is that because we won&#39;t find &#34;one exact match&#34; with the Serial Number (because we will have 2 records with this same value), the &#34;Serial Number&#34; Identifiers will be skipped, and then we will proceed to try to use other values that may be unique, for example the &#34;Name&#34;.</p>
<p> </p>
<p>So, as long as the name is unique for these devices, then we can make the exact match based on this and update the appropriate CI records accordingly.</p>
<p> </p>
<p>Now, with this possible solution, there are several factors to consider.</p>
<p> </p>
<p>1) Along with creating the CI records and putting the Serial Number in the CI records themselves, you will also need to create corresponding records in the &#34;cmdb_serial_number&#34; table as well. <span style="font-size: 10pt; line-height: 1.5em;">This is because for the &#34;Serial Number Table &amp; Class Name&#34; Identifier, we also check for the serial number we find in Discovery with records in this cmdb_serial_number table that link to the corresponding CI records. So, for each CI with this same Serial Number you create, you also need to create a matching &#34;cmdb_serial_number&#34; record as well.</span></p>
<p> </p>
<p>2) While this may be effective if you only have a few devices where this issue is occurring, this may be more difficult if you have hundreds of these devices with the same serial number or if the number is unknown.</p>
<p> </p>
<p>3) As mentioned, with this process we will skip over the &#34;Serial Number&#34; identifiers and use other identifiers like &#34;Name and Class Name.&#34;</p>
<p> </p>
<p>However, if the names of these devices are not unique as well, or if they could be changed, then this presents other issues as well.</p>
<p> </p>
<h3><strong>Deactivate the &#34;Serial Number&#34; Identifiers</strong></h3>
<p>Similar to the behavior mentioned from suggestion 1, by deactivating the &#34;<span style="color: #535353;">Serial Number Table &amp; Class Name&#34; and &#34;Serial Number &amp; Class Name&#34; identifiers, this will cause us to rely on using another Identifier to be able to distinguish CI&#39;s, such as &#34;Name &amp; Class Name&#34; or &#34;Network&#34; or even some others in the CI Identifiers table that are inactive by default.</span></p>
<p> </p>
<p>This is a little more helpful in the case of the scenario where you have a large number or unknown amount of these devices, however, you still have to be cautious that you need to make sure that ALL your devices (not only just these ones with the same serial number) have a unique name or IP address or whatever you decide to use to try to identify these devices uniquely.</p>
<p> </p>
<p>Plus, this will affect other device types as well, so even if you have just have this issue with some AIX servers, deactivating these Identifiers will also affect how we are identifying all your Solaris Servers, Windows Servers, Routers, etc. also.</p>
<p> </p>
<h3><strong>Modify the &#34;Serial Number&#34; Identifiers</strong></h3>
<p>Of these suggestions, this is probably the most effective one. <span style="color: #535353; font-size: 10pt; line-height: 1.5em;">For this method, you will need to have some understanding of your environment in that you will need to know what type of devices in your environment are having this issue.</span></p>
<p> </p>
<table border="1"><tbody><tr><td>For example, if this issue is only for some of your AIX servers, then we only need to make a simple modification in the Serial Number Identifiers to essentially skip over using them if scanning AIX servers, but still allow us to use them for other types of devices as normal.</td></tr></tbody></table>
<p> </p>
<p>To do this, we need to modify the query in the &#34;Serial Number&#34; identifiers that searches for existing records.</p>
<p> </p>
<table border="1"><tbody><tr><td>
<p>For example, in the &#34;Serial Number Table &amp; Class Name&#34; Identifier, you would add an additional line to the query as such.</p>
<p> </p>
<p><strong>CURRENT:</strong></p>
<p>var gr &#61; new GlideAggregate(&#39;cmdb_serial_number&#39;);</p>
<p>…</p>
<p>gr.addQuery(&#39;valid&#39;, &#39;true&#39;);</p>
<p>gr.addQuery(&#39;absent&#39;, &#39;false&#39;);</p>
<p>…</p>
<p>gr.query();</p>
<p><img class="image-10 jive-image" style="height: 336px; width: 680.7843137254902px;" src="1cbaedcedb505b04ed6af3231f96191d.iix" alt="Screen Shot 2015-04-28 at 1.22.15 PM.JPG" width="681" height="336" /></p>
<p> </p>
<p><strong>NEW:</strong></p>
<p><br />var gr &#61; new GlideAggregate(&#39;cmdb_serial_number&#39;);</p>
<p>…</p>
<p>gr.addQuery(&#39;valid&#39;, &#39;true&#39;);</p>
<p>gr.addQuery(&#39;absent&#39;, &#39;false&#39;);</p>
<p>//Added line below</p>
<p>gr.addQuery(&#39;cmdb_ci.sys_class_name&#39;, &#39;!&#61;&#39;, &#39;cmdb_ci_aix_server&#39;);</p>
<p>…</p>
<p>gr.query();</p>
<p><img class="image-11 jive-image" style="height: 349.1516129032258px; width: 662px;" src="72b44582db10d304b322f4621f9619fb.iix" alt="Screen Shot 2015-04-28 at 1.23.30 PM.JPG" width="662" height="349" /></p>
<p> </p>
<p>You may also need to add a similar line in the &#34;Serial Number &amp; Class Name&#34; identifier as well, where instead of &#34;cmdb_ci.sys_class_name&#34;, you would just need to use &#34;sys_class_name&#34;, since we are querying the CI records themselves.</p>
</td></tr></tbody></table>
<p> </p>
<p style="text-align: center;"><em>**One recommendation I do have is that instead of modifying the out-of-box records, you may want to make a copy of these records, and then make your changes on the copied records and just deactivate the OOB records, this way if we later update these identifiers in a future version, you can still get the updates on the out-of-box records instead of them being skipped over because you made customizations on them.**</em></p>
<p> </p>
<p>Again, all we are doing is just skipping to use these identifiers for the potential duplicates that may occur, but with this method, we will at least allow these identifiers to be used if you are scanning the other types of devices like the Windows servers, Routers, etc.</p>
<p> </p>
<p>Also, another benefit is that you can modify these identifier queries even more specifically if you have more details.</p>
<p> </p>
<table><tbody><tr><td>
<p>For example, if you know the exact serial numbers that can have this issue, you can modify the query to only not check against that specific serial number instead of using the entire class, and in this case you will still be able to use these Identifiers for other devices in the same class as long as they don&#39;t have the serial number you have specified in the query.</p>
</td></tr></tbody></table>
<p> </p>
<p>Now, there are still some drawbacks with this method. <span style="font-size: 10pt; line-height: 1.5em;">Let&#39;s say, for instance, that later on you do change the name or IP address of one of these records with the duplicate serial number. </span><span style="font-size: 10pt; line-height: 1.5em;">In the next scan of this device, instead of us being able to identify this as the same CI, we may instead see this as a separate device (since we would have a different name and/or IP address) and therefore may create a new CI record when we shouldn&#39;t be.</span></p>
<p> </p>
<p>So, while none of these methods are an &#34;absolute&#34; solution for this issue, I hope this can help to at least provide you with some ways to be able to at least assist if you have these duplicate serial number devices on your environment.</p>
<p> </p>
<p>See also, <a title="i.service-now.com/kb_view.do?sysparm_article&#61;KB0540193" href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0540193" rel="nofollow">Discovery and MID Server Resources</a> for additional context and assistance with troubleshooting.</p>
<p> </p>
<p style="text-align: center;">If you have some other methods or ways you think may be better to handle this scenario, I would love to hear other suggestions as well.</p>