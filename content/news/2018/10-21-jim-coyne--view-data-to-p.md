---
title: "View Data to Preserve Tool"
date: 2018-10-20T17:49:48.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=c2a96241db99a340a39a0b55ca96194e"
---
<h5>Included in the <a href="community?id&#61;community_blog&amp;sys_id&#61;b3c843aadb892b40fece0b55ca961906" rel="nofollow">Developer Toolbox</a> Update Set available on Share (link in the &#34;Developer Toolbox&#34; post).</h5>
<p> </p>
<p>Continuing my theme of helpful features (<a title="" href="community?id&#61;community_question&amp;sys_id&#61;07b18f69db98dbc01dcaf3231f9619c6" rel="nofollow">&#34;Preview GlideRecord Script&#34; Tool,</a> <a title="" href="community?id&#61;community_question&amp;sys_id&#61;60fc4369db9cdbc01dcaf3231f961947" rel="nofollow">&#34;Grab Group Information&#34; Tool)</a>, I present the &#34;View Data to Preserve&#34; Related Links UI Action:</p>
<p><img src="9b39ae8ddb59a340a39a0b55ca961944.iix" /></p>
<p> </p>
<p>I&#39;ve been working with the System Clone Application quite a bit lately and developed this in order to confirm the data that would be returned by the Conditions query built in the Clone Data Preserver form.   Clicking on the link will open up a new tab/window with the results of the query:</p>
<p><img src="dd59a6cddb59a340a39a0b55ca96199c.iix" /></p>
<p> </p>
<p>Here are the UI Action details:</p>
<p>Name: View Data to Preserve<br />Table: Clone Data Preserver [clone_data_preserver]<br />Order: 100,000<br />Action name: u_fpc_view_data_to_preserve<br />Active: Checked<br />Show insert: Checked<br />Show update: Checked<br />Client: Checked<br />Form link: Checked<br />Hint: Open list of records matching the current condition filter in a new tab/window<br />OnClick: u_fpcViewDataToPreserve();<br />Condition: current.canWrite();<br />Script:</p>
<pre class="language-javascript"><code>function u_fpcViewDataToPreserve(){
	var condition &#61; g_form.getValue(&#34;condition&#34;);
	var url &#61; g_form.getValue(&#34;table&#34;) &#43; &#34;_list.do&#34;;
	if (condition !&#61; &#34;&#34;) {
		url &#43;&#61; &#34;?sysparm_query&#61;&#34; &#43; condition;
	}
	window.open(url, &#34;_blank&#34;);
}</code></pre>
<p>I&#39;ve attached the UI Action record as an XML file you can just import into your instance.   Always test it out in your company&#39;s development or personal development instance first.</p>