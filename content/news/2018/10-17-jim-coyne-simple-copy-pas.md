---
title: "Simple CopyPaste UI Page"
date: 2018-10-16T10:21:30.000Z
authors: ["Jim Coyne"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=00bc1c33db85eb00b2102926ca9619f3"
---
<h5>Included in the <a href="community?id&#61;community_blog&amp;sys_id&#61;b3c843aadb892b40fece0b55ca961906" rel="nofollow">Developer Toolbox</a> Update Set available on Share (link in the &#34;Developer Toolbox&#34; post).</h5>
<p> </p>
<p>This is a UI Page that I use with a couple of my other tools to simply display some text on screen where the user can copy it if needed:</p>
<ul><li><a href="community?id&#61;community_blog&amp;sys_id&#61;561235c3dbc12300fece0b55ca9619df" rel="nofollow">&#34;GlideRecord Script&#34; Tools</a></li><li><a href="community?id&#61;community_blog&amp;sys_id&#61;020a592bdb49a700200f0b55ca961991" rel="nofollow">&#34;Grab Grouped Information&#34; Tool</a></li><li><a href="community?id&#61;community_blog&amp;sys_id&#61;090d6aa5dbd0dbc01dcaf3231f9619a3" rel="nofollow">&#34;Show Contents of g_scratchpad&#34; Tool</a></li></ul>
<p>Here are the results of those tools, shown with this UI Page:</p>
<p><img src="439e507bdb85eb00b2102926ca961949.iix" /></p>
<p> </p>
<p><img src="998ed83bdb85eb00b2102926ca961968.iix" /></p>
<p> </p>
<p><img src="d4de14fbdb85eb00b2102926ca9619e5.iix" /></p>
<p> </p>
<p>Here are the details of the UI Page record:</p>
<p>Name: u_fpc_simple_copy_paste<br />Category: General<br />HTML:</p>
<pre class="language-markup"><code>&lt;textarea id&#61;&#34;u_text_area&#34; style&#61;&#34;width: auto; height: auto;&#34; rows&#61;&#39;15&#39; cols&#61;&#39;100&#39; title&#61;&#34;Text you can copy and paste&#34;&gt;
&lt;/textarea&gt;
&lt;div align&#61;&#34;right&#34;&gt;
	&lt;button class&#61;&#34;btn btn-default&#34; id&#61;&#34;cancel_button&#34; onclick&#61;&#34;(window.GlideDialogWindow || window.GlideModalForm).prototype.locate(this).destroy(); return false&#34; style&#61;&#34;min-width: 5em;&#34; title&#61;&#34;&#34; type&#61;&#34;button&#34;&gt;Close&lt;/button&gt;
&lt;/div&gt;</code></pre>
<p> </p>
<p>Client Script:</p>
<pre class="language-javascript"><code>try {
	var search &#61; &#34;~~~newline~~~&#34;;  //text we want to replace
	var replace &#61; &#34;\n&#34;;  //the text we want to use
	var textArea &#61; gel(&#34;u_text_area&#34;);
	//set the text string into the text area control, first decoding it and replacing the search string with the replacement string to insert proper line breaks
	textArea.innerHTML &#61; (decodeURIComponent(&#34;${sysparm_text}&#34;)).replace(new RegExp(search, &#39;g&#39;), replace);
	//auto-select the entire text
	textArea.select();
} catch(err) {}</code></pre>
<p> </p>
<p>Here&#39;s an example, from the &#34;GlideRecord Script - Preview&#34; UI Action, of how I call it:</p>
<pre class="language-javascript"><code>function u_fpcPreviewGlideRecordScript(){
	var newLine &#61; &#34;~~~newline~~~&#34;;
	var script &#61; &#34;(function() {&#34; &#43; newLine;
	script &#43;&#61; &#34;    var gr &#61; new GlideRecord(&#39;&#34; &#43; g_form.getTableName() &#43; &#34;&#39;);&#34; &#43; newLine;
	script &#43;&#61; &#34;    gr.addEncodedQuery(&#39;sys_id&#61;&#34; &#43; g_form.getUniqueValue() &#43; &#34;&#39;)&#34; &#43; newLine;
	script &#43;&#61; &#34;    //gr.setLimit(100);&#34; &#43; newLine;
	script &#43;&#61; &#34;    //gr.setWorkflow(false);&#34; &#43; newLine;
	script &#43;&#61; &#34;    //gr.autoSysFields(false);&#34; &#43; newLine;
	script &#43;&#61; &#34;    gr.query();&#34; &#43; newLine;
	script &#43;&#61; &#34;    while (gr.next()) {&#34; &#43; newLine;
	script &#43;&#61; &#34;        &#34; &#43; newLine;
	script &#43;&#61; &#34;    }&#34; &#43; newLine;
	script &#43;&#61; &#34;})();&#34;;

	//encode the string so it can be passed to the UI Page properly and then decoded there
	script &#61; encodeURIComponent(script);

	//open the dialog window
	var gdw &#61; new GlideDialogWindow(&#34;u_fpc_simple_copy_paste&#34;);
	gdw.setTitle(&#34;GlideRecord Script - Preview&#34;);
	gdw.setSize(650, 500);
	gdw.setPreference(&#34;sysparm_text&#34;, script);
	gdw.render();
}</code></pre>
<p> </p>
<p>The newline characters (&#34;\n&#34;) were not translating over properly for some reason, so I build my strings with &#34;~~~newline~~~&#34; as a delimiter instead, and the client script in the UI Page automatically looks for that to replace with &#34;\n&#34; before displaying it.  It works for me like that, so I have not bothered going back to fix it properly.  It&#39;s on the list of things to do, but that&#39;s a long list.</p>
<p>I figured it might be useful for someone out there.</p>
<p>I&#39;ve attached an XML file so you can just import it into your instance. As always, try it out in your company&#39;s development instance first, or better yet, your own personal development instance.</p>