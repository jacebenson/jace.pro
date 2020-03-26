---
title: "Try It Portal Tool"
date: 2017-05-05T00:48:44.000Z
authors: ["Jim Coyne"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=c66e22eddbd0dbc01dcaf3231f96190f"
---
<h5>Included in the <a href="community?id&#61;community_blog&amp;sys_id&#61;b3c843aadb892b40fece0b55ca961906" rel="nofollow">Developer Toolbox</a> Update Set available on Share (link in the &#34;Developer Toolbox&#34; post).</h5>
<p> </p>
<p>Here&#39;s &#34;Try It (Portal)&#34;, a new tool in my useful tools series.   It&#39;s a &#34;Form button&#34; UI Action that will open up a new tab/window and load the current catalog item within the Service Portal:</p>
<p><img class="image-1 jive-image" style="width: 620px; height: 154px;" src="402c64c2db1c57041dcaf3231f96194b.iix" alt="_Screenshot.png" /></p>
<p>It&#39;s very similar to the OOB &#34;Try It&#34; UI Action that redirects the current window to the catalog item, but this one will open the Service Portal in a new tab/window for you.   There&#39;s nothing really special about it, but it saves you from loading the portal and trying to find it in order to test it out.</p>
<p> </p>
<p>UI Action details:</p>
<p><span style="font-family: &#39;courier new&#39;, courier;">Name: Try It (Portal)<br /></span><span style="font-family: &#39;courier new&#39;, courier;">Table: Catalog Item [sc_cat_item]<br /></span><span style="font-family: &#39;courier new&#39;, courier;">Order: 100<br /></span><span style="font-family: &#39;courier new&#39;, courier;">Action name: u_fpc_try_it_portal<br /></span><span style="font-family: &#39;courier new&#39;, courier;">Active: checked<br /></span><span style="font-family: &#39;courier new&#39;, courier;">Show update: checked<br /></span><span style="font-family: &#39;courier new&#39;, courier;">Form button: checked<br /></span><span style="font-family: &#39;courier new&#39;, courier;">Client: checked<br /></span><span style="font-family: &#39;courier new&#39;, courier;">Onclick: u_fpcTryInPortal()<br /></span><span style="font-family: &#39;courier new&#39;, courier;">Hint: View this item within the Service Portal (opens a new tab/window)<br /></span><span style="font-family: &#39;courier new&#39;, courier;">Condition: current.canWrite()<br /></span><span style="font-family: &#39;courier new&#39;, courier;">Script:</span></p>
<pre class="language-javascript"><code>function u_fpcTryInPortal(){
	//view this item within the Service Portal in a new tab/window
	window.open(&#34;sp?id&#61;sc_cat_item&amp;sys_id&#61;&#34; &#43; g_form.getUniqueValue(), &#34;_blank&#34;);
}</code></pre>
<p> </p>
<p>If your Service Portal has a different URL suffix, just change the &#34;sp&#34; on line 3 to whatever is appropriate for your instance.</p>
<p style="font-weight: inherit; font-style: inherit; font-family: inherit;">I&#39;ve attached an XML export of my UI Action record if you want to just import that.   Try it out in a personal dev instance first.</p>
<p style="font-weight: inherit; font-style: inherit; font-family: inherit;"><strong>Updated October 15, 2018 with new condition and script.</strong></p>
<p style="font-weight: inherit; font-style: inherit; font-family: inherit;"> </p>