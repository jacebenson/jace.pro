---
title: "Export to XML NOT Complete Tool"
date: 2018-10-16T03:20:45.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=a46cf66bdbc1eb00a8562926ca961939"
---
<h5>Included in the <a href="community?id&#61;community_blog&amp;sys_id&#61;b3c843aadb892b40fece0b55ca961906" rel="nofollow">Developer Toolbox</a> Update Set available on Share (link in the &#34;Developer Toolbox&#34; post).</h5>
<p> </p>
<p>I&#39;m always having to export Update Sets that are not yet completed, either while preparing for a Clone, when sharing with someone, or when posting an article here in the Community.  OOB, the &#34;Export XML&#34; UI Action only appears when the State is &#34;Complete&#34;, so this one shows up when the State is NOT &#34;Complete&#34;.  It&#39;s based on the OOB one.</p>
<p><img src="8b3c7ee7dbc1eb00a8562926ca961950.iix" /></p>
<p> </p>
<p>Here are the details of the UI Action:</p>
<p>Name: Export to XML (NOT Complete)<br />Table: Update Sets [sys_update_set]<br />Order: 100,000<br />Action name: u_fpc_export_to_xml_not_complete<br />Active: Checked<br />Show update: Checked<br />Form link: Checked<br />Hint: Download a &#34;Retrieved Update Set&#34; in XML format<br />Condition: current.state !&#61; &#34;complete&#34;<br />Script:</p>
<pre class="language-javascript"><code>(function() {
	var updateSetExport &#61; new UpdateSetExport();
	var sysid &#61; updateSetExport.exportUpdateSet(current);

	action.setRedirectURL(&#34;export_update_set.do?sysparm_sys_id&#61;&#34; &#43; sysid &#43; &#34;&amp;sysparm_delete_when_done&#61;true&#34;);
})();</code></pre>
<p> </p>
<p>I&#39;ve attached an XML file so you can just import it into your instance. As always, try it out in your company&#39;s development instance first, or better yet, your own personal development instance.</p>