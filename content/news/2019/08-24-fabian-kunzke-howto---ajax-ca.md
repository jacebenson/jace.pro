---
title: "HowTo  Ajax Calls Use GlideRecords on the client side easy"
date: 2019-08-23T18:07:30.000Z
authors: ["Fabian Kunzke"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=2ecdab3bdbd3ff405ed4a851ca9619c5"
---
<p>When working on different projects i often hear the same question: Why do i have to use a Glide Ajax here? It&#39;s just a Glide Record. Can&#39;t i just use that instead. Often times Glide Ajax is not used because it seems to be very time consuming to establish. Within the following few lines i&#39;ll provide a short and easy way of using GlideRecords on the client side. With this, there should no longer be an excuse to not use client scripts with ajax calls.</p>
<p>(short note: The example below is just an introduction to Glide Ajax. The main advantage of GlideAjax is to do more complex datamanipulation than &#34;just&#34; a GlideRecord without impacting the client side interactions of the user. If your goal is to just retrieve record information or related information use the GlideRecoord or <a href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;istanbul&amp;id&#61;r_GlideFormGetReference_String_Function" target="_blank" rel="noopener noreferrer nofollow">.getReference()</a>) (thanks to <a href="https://community.servicenow.com/community?id&#61;community_user_profile&amp;user&#61;2d6e8a29dbd41fc09c9ffb651f961910" target="_blank" rel="noopener noreferrer nofollow">&#64;David Dubuis</a> for this addition)</p>
<p>This essentially contains a generic server side script include as well as some easy GlideAjax. You can just copy and paste the code examples below.</p>
<p> </p>
<p>Generic server side script include:</p>
<p>On the form of the script-include ensure to check the box &#34;Client callable&#34; (thanks to <a href="https://community.servicenow.com/community?id&#61;community_user_profile&amp;user&#61;169ecae9dbd41fc09c9ffb651f961975" target="_blank" rel="noopener noreferrer nofollow">&#64;Allen A.</a> for this addition):</p>
<p><img src="https://community.servicenow.com/0c457f3fdb5bff405ed4a851ca961990.iix" width="922" height="82" /></p>
<p>Within the script part add: </p>
<pre class="language-javascript"><code>var AJAXGlideRecord &#61; Class.create();
AJAXGlideRecord.prototype &#61; Object.extendsObject(AbstractAjaxProcessor, {
	
	getRecord: function()
	{
		
		var table &#61; this.getParameter(&#39;sysparm_table&#39;);
		var query &#61; this.getParameter(&#39;sysparm_query&#39;);
		
		var record &#61; new GlideRecord(table);
		record.addEncodedQuery(query);
		record.query();
		if(record.next())
			return JSON.stringify(record);
		
		return;
	},
	
	type: &#39;AJAXGlideRecord&#39;
});</code></pre>
<p>Generic AjaxCall:</p>
<pre class="language-javascript"><code>function doTheAjaxCallForTheGlideRecord()
{
	var glideAjax &#61; new GlideAjax(&#39;AJAXGlideRecord&#39;);
	glideAjax.addParam(&#39;sysparm_name&#39;, &#39;getRecord&#39;);
	glideAjax.addParam(&#39;sysparm_table&#39;, &#39;insert tablename here&#39;);
	glideAjax.addParam(&#39;sysparm_query&#39;, &#39;insert encoded query here&#39;);
	glideAjax.getXML(doSomethingWithMyRecord);
}

function doSomethingWithMyRecord(response)
{
	var recordAsJSON &#61; response.responseXML.documentElement.getAttribute(&#34;answer&#34;);
	var record &#61; JSON.parse(recordAsJSON);
	// &#61;&gt; do some stuff with the record here
}
</code></pre>
<p>Now you can reuse this ajax call wherever you need a single GlideRecord record within the client side based on providing a table name as well as an encoded query. If you want, you can extend the server side script include with more functions. Here are some ideas i use frequently:</p>
<p>- A function that returns a glideAggregate for reporting<br />- A function that returns all related childs of a child table<br />- A function that returns the only child record of a parent<br />- A function that returns a cmdb-relationship-path with all CIs from a starting CI all the way up to the Business Service<br /><a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;08d34055dbafffc013b5fb24399619a5" target="_blank" rel="noopener noreferrer nofollow">- A function that returns a generic Chart.js object (great for service portal reports where the oob reports are not enough)</a></p>
<p>These functions can be coded in a similar fashion. Remember to build them as a reusable function library. That way GlideAjax won&#39;t be a &#34;oh no not this again&#34; matter.</p>
<p>Super secret reoccurring coding advice: Templates can be used for Client Scripts! If you know a client script uses something like this, have a template ready to save some time.</p>
<p>Regards</p>
<p>Fabian</p>
<p> </p>
<p>ps.: if i find the time i will expand this blog with the examples stated.</p>