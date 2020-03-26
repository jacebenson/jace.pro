---
title: "Set Value from Label Tool"
date: 2018-10-13T01:43:33.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=bb590faedb892b40fece0b55ca9619cb"
---
<h5>Included in the <a href="community?id&#61;community_blog&amp;sys_id&#61;b3c843aadb892b40fece0b55ca961906" rel="nofollow">Developer Toolbox</a> Update Set available on Share (link in the &#34;Developer Toolbox&#34; post).</h5>
<p> </p>
<p>Another one of those lazy/productivity tools:</p>
<ul><li><a href="community?id&#61;community_blog&amp;sys_id&#61;1ef93b12db74670054250b55ca9619bc" rel="nofollow">&#34;Set Name from Source Table&#34; Tool</a></li><li><a href="community?id&#61;community_blog&amp;sys_id&#61;ab7990cfdb852300fece0b55ca96194b" rel="nofollow">&#34;Set Name from Question&#34; Tool</a></li><li><a href="community?id&#61;community_blog&amp;sys_id&#61;7c06b4d7dbcd2300fece0b55ca96191e" rel="nofollow">&#34;Set Value from Text&#34; Tool</a></li></ul>
<p>As a general rule, I&#39;ll set the Value field to a lowercase version of the Label field because it makes it easier to use when comparing the strings in script.  This tool will do that for me automatically.  It will also prefix the string with the value of the Dependent value field.</p>
<p>Any special characters are replaced with an underscore character (anything other than a-z, 0-9).</p>
<p><img src="43cd701bdb016300fece0b55ca961911.iix" /></p>
<p>Here are the details of the UI Action</p>
<p>Name: Set Value from Label<br />Table: Choice [sys_choice]<br />Order: 100,000<br />Action name: u_fpc_set_value_from_label<br />Active: checked<br />Show insert: checked<br />Show update: checked<br />Client: checked<br />Form link: checked<br />Hint: Create a string for the Value field based on the Label and Dependent value fields<br />Onclick: u_fpcSetValueFromLabel();<br />Condition: current.canWrite();<br />Script:</p>
<pre class="language-javascript"><code>function u_fpcSetValueFromLabel() {
	if (g_form.getValue(&#34;value&#34;).trim() !&#61; &#34;&#34;){
		if (!confirm(&#34;Are you sure you want to replace the contents of the Value field?&#34;))
			return;
	}

	var msg &#61; &#34;The Label field is empty&#34;;
	var type &#61; &#34;error&#34;;
	var value &#61; (g_form.getValue(&#34;dependent_value&#34;).toLowerCase().replace(/[^a-z0-9]/g, &#34;_&#34;)).trim();
	value &#43;&#61; &#34;_&#34; &#43; (g_form.getValue(&#34;label&#34;).toLowerCase().replace(/[^a-z0-9]/g, &#34;_&#34;)).trim();
	value &#61; value.replace(/_&#43;/g,&#34;_&#34;);   // replaces any one or more instances of _ with only one _
	value &#61; value.replace(/^\_&#43;|\_&#43;$/g, &#34;&#34;);   // replaces all leading or trailing _ with an empty string
	if (value !&#61; &#34;&#34;){
		g_form.setValue(&#34;value&#34;, value);
		msg &#61; &#34;Populated the Value field based on the Label and Dependent value fields&#34;;
		type &#61; &#34;info&#34;;
	}
	g_form.showFieldMsg(&#34;value&#34;, msg, type);
}</code></pre>
<p>I&#39;ve attached an XML file so you can just import it into your instance. As always, try it out in your company&#39;s development instance first, or better yet, your own personal development instance.</p>