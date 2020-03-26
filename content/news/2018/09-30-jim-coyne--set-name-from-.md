---
title: "Set Name from Source Table Tool"
date: 2018-09-30T00:21:43.000Z
authors: ["Jim Coyne"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=1ef93b12db74670054250b55ca9619bc"
---
<h5>Included in the <a href="community?id&#61;community_blog&amp;sys_id&#61;b3c843aadb892b40fece0b55ca961906" rel="nofollow">Developer Toolbox</a> Update Set available on Share (link in the &#34;Developer Toolbox&#34; post).</h5>
<p> </p>
<p>Another one of those lazy/productivity tools:</p>
<ul><li><a href="community?id&#61;community_blog&amp;sys_id&#61;bb590faedb892b40fece0b55ca9619cb" rel="nofollow">&#34;Set Value from Label&#34; Tool</a></li><li><a href="community?id&#61;community_blog&amp;sys_id&#61;ab7990cfdb852300fece0b55ca96194b" rel="nofollow">&#34;Set Name from Question&#34; Tool</a></li><li><a href="community?id&#61;community_blog&amp;sys_id&#61;7c06b4d7dbcd2300fece0b55ca96191e" rel="nofollow">&#34;Set Value from Text&#34; Tool</a></li></ul>
<p>This one really walks that fine line between laziness and productivity.   :-)</p>
<p>I like to name my Table Transform Maps the same as the import table name so it is easy to find and match them up, so I wrote a Related Link UI Action to insert the display name of the selected Source table into the Name field client-side.</p>
<p><img src="cf6a5067db742f4067a72926ca9619c7.iix" width="578" height="308" /></p>
<p> </p>
<p><img src="14aad4a7db742f4067a72926ca9619a4.iix" width="578" height="308" /> </p>
<p>I&#39;ve been working on a lot of imports lately and got tired of entering the name time after time (lazy).  The nice thing is the name will be exactly as I like it - the same as the name of the table (productive).</p>
<p>Here are the UI Action settings:</p>
<p>Name: Set Name from Source Table<br />Table: Table Transform Map [sys_transform_map]<br />Order: 100,000<br />Action name: u_fpc_set_name_from_source_table<br />Show insert: checked<br />Show update: checked<br />Client: checked<br />Form link: checked<br />Hint: Populate the Name field from the selected Source Table name<br />Onclick: u_fpcSetNameFromSourceTable();<br />Condition: current.canWrite();<br />Script:</p>
<pre class="language-javascript"><code>function u_fpcSetNameFromSourceTable(){
	var control &#61; g_form.getControl(&#34;sys_transform_map.source_table&#34;);
	if (control) {
		if (g_form.getValue(&#34;name&#34;).trim() !&#61; &#34;&#34;){
			if (!confirm(&#34;Are you sure you want to replace the contents of the Name field?&#34;))
				return;
		}

		var selected &#61; control.selectedIndex;
		var value &#61; control.options[selected].value.toString();
		var text &#61; control.options[selected].text.toString();
		var stripText &#61; &#34; [&#34; &#43; value &#43; &#34;]&#34;;

		g_form.setValue(&#34;name&#34;, text.replace(stripText, &#34;&#34;));
	} else {
		console.log(&#34;Could not find the &#39;Source table&#39; control&#34;);
	}
}</code></pre>
<p>I&#39;ve attached an XML file of the exported UI Action record if you want to use that.  As always, try it out in your company&#39;s development instance first, or better yet, your own personal development instance.</p>