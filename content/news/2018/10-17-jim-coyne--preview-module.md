---
title: "Preview Module Tool"
date: 2018-10-16T06:44:34.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=520baba3db89ab00b2102926ca96196a"
---
<h5>Included in the <a href="community?id&#61;community_blog&amp;sys_id&#61;b3c843aadb892b40fece0b55ca961906" rel="nofollow">Developer Toolbox</a> Update Set available on Share (link in the &#34;Developer Toolbox&#34; post).</h5>
<p> </p>
<p>The &#34;Preview Module&#34; Related Links UI Action will open a new tab/window to display the records or page based on the current settings of the Link Type tab.  It&#39;s kind of the reverse functionality of the <a href="community?id&#61;community_blog&amp;sys_id&#61;fc2e266ddbd0dbc01dcaf3231f96196f&amp;view_source&#61;searchResult" rel="nofollow">&#34;Create a Module from this Query&#34; Tool</a>.</p>
<p>So, if you have the following setup:</p>
<p><img src="f0e6d4f3db05eb00b2102926ca9619b2.iix" /></p>
<p> </p>
<p>...the following list view will appear in a new tab/window:</p>
<p><img src="4b439c73dbc1eb00b2102926ca961935.iix" /></p>
<p> </p>
<p>Only the Table, View name and Filter fields are currently supported as well as the following Link types:</p>
<ul><li>-- None --</li><li>List Filter</li><li>List of Records</li><li>Single Record</li></ul>
<p>It assumes a Link type of &#34;-- None --&#34; to be &#34;List of Records&#34;, just like the platform does.</p>
<p>The nice thing about this UI Action is you can modify the settings of the Module and test it out without having to save the record each time, so you can make tweaks and test without waiting for the form to refresh and then select the Module.  The UI Action does NOT save the record or make any changes, it just opens the new tab/window.</p>
<p>Here are the details of the UI Action record:</p>
<p>Name: Preview Module<br />Table: Module [sys_app_module]<br />Order: 100,000<br />Action name: u_fpc_preview_module<br />Active: Checked<br />Show insert: Checked<br />Show update: Checked<br />Client: Checked<br />Form link: Checked<br />Hint: Preview the result of the Module settings in a new tab/window<br />Onclick: u_fpcPreviewModule();<br />Condition: current.canWrite()<br />Script:</p>
<pre class="language-javascript"><code>function u_fpcPreviewModule(){
	var linkType &#61; g_form.getValue(&#34;link_type&#34;).toLowerCase();
	if (!linkType)
		linkType &#61; &#34;list&#34;;  //default to &#34;List of Records&#34;

	if ([&#34;detail&#34;, &#34;filter&#34;, &#34;list&#34;].indexOf(linkType) &gt; -1) {
		var tableName &#61; g_form.getValue(&#34;name&#34;);
		var viewName &#61; g_form.getValue(&#34;view_name&#34;);
		var condition &#61; g_form.getValue(&#34;filter&#34;);
		var base &#61; &#34;&#34;;
		switch(linkType) {
			case &#34;detail&#34;:   //Single Record
				base &#61; tableName &#43; &#34;.do&#34;;  //show form
				break;
			case &#34;list&#34;:       //List Filter
			case &#34;filter&#34;:     //List of Records
				base &#61;  tableName &#43; &#34;_list.do&#34;;  //show list
				break;
		}
		//build the proper URL
		var url &#61; new GlideURL(base);
		if (viewName) {
			url.addParam(&#34;sysparm_view&#34;, viewName);
		}
		if (condition !&#61; &#34;&#34;) {
			url.addParam(&#34;sysparm_query&#34;, condition);
		}
		if (linkType &#61;&#61; &#34;filter&#34;) {
			url.addParam(&#34;sysparm_filter_only&#34;, &#34;true&#34;);
		}
		window.open(url.getURL(), &#34;_blank&#34;);
	} else {
		g_form.addErrorMessage(&#34;Sorry, only the following Link types are currently supported: List Filter, List of Records and Single Record&#34;);
	}
}</code></pre>
<p> </p>
<p>I&#39;ve attached an XML file so you can just import it into your instance. As always, try it out in your company&#39;s development instance first, or better yet, your own personal development instance.</p>