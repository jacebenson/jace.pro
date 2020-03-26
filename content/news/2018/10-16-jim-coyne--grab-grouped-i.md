---
title: "Grab Grouped Information Tool"
date: 2018-10-15T20:11:01.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=020a592bdb49a700200f0b55ca961991"
---
<h5>Included in the <a href="community?id&#61;community_blog&amp;sys_id&#61;b3c843aadb892b40fece0b55ca961906" rel="nofollow">Developer Toolbox</a> Update Set available on Share (link in the &#34;Developer Toolbox&#34; post).</h5>
<p> </p>
<p>Along the same lines as the <a title="" href="community?id&#61;community_question&amp;sys_id&#61;07b18f69db98dbc01dcaf3231f9619c6" rel="nofollow">&#34;Preview GlideRecord Script&#34; Tool</a>, this tool will grab the grouped information from a List View when you group on a column:</p>
<p><img src="89e999e7db49a700200f0b55ca9619cc.iix" /></p>
<p>This makes it easy to grab the number of records that have the same data in a particular field.</p>
<p>There are 2 parts to the solution, a Context Menu that grabs the information and a simple UI Page used to display the results:</p>
<p>1. Context Menu</p>
<p>Table: Global<br />Menu: List Header<br />Type: Action<br />Name: Grab Grouped Information<br />Order: 100,000<br />Condition: gs.hasRole(&#34;admin&#34;)<br />Action script:</p>
<pre class="language-javascript"><code>(function(){
	try {
		var newLine &#61; &#34;~~~newline~~~&#34;;
		var message &#61; &#34;&#34;;
		var allElements &#61; $$(&#34;span.list_group&#34;);
		var element;
		for (var i &#61; 0; (element &#61; allElements[i]) !&#61; null; i&#43;&#43;) {
			message &#43;&#61; element.innerHTML &#43; newLine;
		}
		message &#61; message.trim();
		
		var gdw &#61; new GlideDialogWindow(&#34;u_fpc_simple_copy_paste&#34;);
		gdw.setTitle(&#34;Grab Grouped Information&#34;);
		gdw.setPreference(&#34;sysparm_text&#34;, encodeURI(message));
		gdw.render();
	} catch(err) {}
})();</code></pre>
<p> </p>
<p>2. UI Page</p>
<p>Name: u_fpc_simple_copy_paste<br />Category: General<br />HTML:</p>
<pre class="language-markup"><code>&lt;textarea id&#61;&#34;u_text_area&#34; style&#61;&#34;width: auto; height: auto;&#34; rows&#61;&#39;15&#39; cols&#61;&#39;100&#39; title&#61;&#34;Text you can copy and paste&#34;&gt;
&lt;/textarea&gt;
&lt;div align&#61;&#34;right&#34;&gt;
	&lt;button class&#61;&#34;btn btn-default&#34; id&#61;&#34;cancel_button&#34; onclick&#61;&#34;(window.GlideDialogWindow || window.GlideModalForm).prototype.locate(this).destroy(); return false&#34; style&#61;&#34;min-width: 5em;&#34; title&#61;&#34;&#34; type&#61;&#34;button&#34;&gt;Close&lt;/button&gt;
&lt;/div&gt;</code></pre>
<div> </div>
<p>Client script:</p>
<pre class="language-javascript"><code>try {
	var search &#61; &#34;~~~newline~~~&#34;;  //text we want to replace
	var replace &#61; &#34;\n&#34;;  //the text we want to use
	var textArea &#61; gel(&#34;u_text_area&#34;);
	//set the text string into the text area control, first decoding it and replacing the search string with the replacement string to insert proper line breaks
	textArea.innerHTML &#61; (decodeURIComponent(&#34;${sysparm_text}&#34;)).replace(new RegExp(search, &#39;g&#39;), replace);
	//auto-select the entire text
	textArea.select();
} catch(err) {}</code></pre>
<p>I&#39;ve included XML files of both so you can just import them into your instance.  As always, try it out in your company&#39;s development instance first, or better yet, your own personal development instance.</p>