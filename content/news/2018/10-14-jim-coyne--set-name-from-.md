---
title: "Set Name from Question Tool"
date: 2018-10-14T02:12:05.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ab7990cfdb852300fece0b55ca96194b"
---
<h5>Included in the <a href="community?id&#61;community_blog&amp;sys_id&#61;b3c843aadb892b40fece0b55ca961906" rel="nofollow">Developer Toolbox</a> Update Set available on Share (link in the &#34;Developer Toolbox&#34; post).</h5>
<p> </p>
<p>Another one of those lazy/productivity tools:</p>
<ul><li><a href="community?id&#61;community_blog&amp;sys_id&#61;1ef93b12db74670054250b55ca9619bc" rel="nofollow">&#34;Set Name from Source Table&#34; Tool</a></li><li><a href="community?id&#61;community_blog&amp;sys_id&#61;bb590faedb892b40fece0b55ca9619cb" rel="nofollow">&#34;Set Value from Label&#34; Tool</a></li><li><a href="community?id&#61;community_blog&amp;sys_id&#61;7c06b4d7dbcd2300fece0b55ca96191e" rel="nofollow">&#34;Set Value from Text&#34; Tool</a></li></ul>
<p>I usually set the Name field for variables to something very similar to the Question field.  This Related Link UI Action will populate the &#34;Name&#34; field with a lowercase version of the Question field.  It will also replace any special characters with an underscore character (anything other than a-z, 0-9).</p>
<p><img src="679dfd0bdb052300fece0b55ca961943.iix" /></p>
<p>Saves on potential typos and a bit of time, especially when you have to create a lot of variables.</p>
<p>Here are the details of the UI Action</p>
<p>Name: Set Name from Question<br />Table: Variable [item_option_new]<br />Order: 100,000<br />Action name: u_fpc_set_name_from_question<br />Active: checked<br />Show insert: checked<br />Show update: checked<br />Client: checked<br />Form link: checked<br />Hint: Creates a string for the Name field based on the Question field<br />Onclick: u_fpcSetNameFromQuestion();<br />Condition: current.canWrite();<br />Script:</p>
<pre class="language-javascript"><code>function u_fpcSetNameFromQuestion(){
	if (g_form.getValue(&#34;name&#34;).trim() !&#61; &#34;&#34;){
		if (!confirm(&#34;Are you sure you want to replace the contents of the Name field?&#34;))
			return;
	}

	var msg &#61; &#34;The Question field is empty&#34;;
	var type &#61; &#34;error&#34;;
	var value &#61; (g_form.getValue(&#34;question_text&#34;).toLowerCase().replace(/[^a-z0-9]/g, &#34;_&#34;)).trim();
	value &#61; value.replace(/_&#43;/g,&#34;_&#34;);   // replaces any one or more instances of &#34;__&#34; with only one &#34;_&#34;
	value &#61; value.replace(/^\_&#43;|\_&#43;$/g, &#34;&#34;);   // replaces all leading or trailing &#34;_&#34; with an empty string
	if (value !&#61; &#34;&#34;){
		g_form.setValue(&#34;name&#34;, value);
		msg &#61; &#34;Populated the Name field based on the Question field&#34;;
		type &#61; &#34;info&#34;;
	}
	g_form.showFieldMsg(&#34;name&#34;, msg, type);
}</code></pre>
<p>I&#39;ve attached the XML of the record so you can just import it.  As always, try it out in your company&#39;s development instance first, or better yet, your own personal development instance.</p>