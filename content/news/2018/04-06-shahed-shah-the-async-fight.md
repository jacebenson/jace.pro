---
title: "The Async Fight  getReference and GlideRecord"
date: 2018-04-05T21:44:01.000Z
authors: ["Shahed Shah"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ee747f51db9d57487b337a9e0f96196d"
---
<p>So, you&#39;ve spent a lot of time and drank a whole lot of coffee (yuck) and finally got your Client Script working. You know. That script that fetches values from another table and populates a field on your form using something like <strong>g_form.getReference</strong> or <strong>GlideRecord</strong>. Beaming with pride you present that script for a peer review which is shot down almost immediately. There&#39;s that feeling right?</p>
<p style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="c5273b95dbdd57487b337a9e0f9619d6.iix" /></p>
<p>So, what went wrong? The first usual suspect is whether the script itself &#34;async&#34;. Queue a confused Kevin, again.</p>
<h2>What does &#34;Async&#34; mean?</h2>
<p>Let&#39;s get the first thing out of the way. Async is short for asynchronous. To understand let&#39;s think of how we program. Usually when we enter the code, it is entered as a block of statements in sequence, where each statement is executed after waiting for the previous statement to execute. Here, we get the impression of code executing in a &#34;synchronous&#34; nature.</p>
<p>With asynchronous code, the execution takes the code outside of the main flow of the program and is executed without waiting.</p>
<h2>What Async means for the ServiceNow APIs</h2>
<p>When using the <a title="Developer Docs: getReference" href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;kingston&amp;id&#61;r_GlideFormGetReference_String_Function" target="_blank" rel="nofollow">g_form.getReference</a> function or the <a title="Developer Doc: GlideRecord" href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;kingston&amp;id&#61;c_GlideRecordClientSideAPI" target="_blank" rel="nofollow">GlideRecord API</a>, you will notice that the developer docs describe a <strong>callback</strong> function. This makes the calls run asynchronously. To understand why this is a good thing, let&#39;s look at an example:</p>
<pre class="language-javascript"><code>var grUsers &#61; new GlideRecord(&#39;sys_user&#39;);
grUsers.addQuery(&#39;active&#39;, &#39;true&#39;);
grUsers.query();
while (grUsers.next()) {
   console.log(grUsers.getValue(&#34;name&#34;));
}</code></pre>
<p>The <strong>User [sys_user]</strong> table was chosen for the example as many companies can have a ginourmous amount of user records. If you were to add this to an onChange Client Script for any field (I&#39;m not telling you to do this by the way), you will notice that the browser will briefly pause (is unresponsive) for a moment. Let&#39;s break down what&#39;s happening (from a high level):</p>
<ol><li>The browser is assembling a request to get all the active records from the user table</li><li>The request is sent and the browser waits</li><li>On the server-side, it receives the request and builds the query</li><li>The query is executed and all the records are brought back to the server</li><li>The results is assembled into an XML response and sent back</li><li>The XML response is received by the client (the browser)</li><li>This response (via the ServiceNow API) compiles the response into a JavaScript object</li><li>With that done, the browser has the object in memory and is no longer waiting</li></ol>
<p>That is a lot! And I didn&#39;t even go into all the specifics (especially network wait times). All this is being done and the browser waits for a response, which is why we experience what some describe as a &#34;lock&#34; where the browser is unresponsive for a moment. How long depends on the amount of data that is brought back and what is done with the records afterwards.</p>
<p>Here&#39;s how it looks for an almost out-of-the-box Instance</p>
<p><img style="max-width: 100%; max-height: 480px;" src="d72140e5db1597487b337a9e0f9619df.iix" /></p>
<p>That green? That&#39;s how long the browser waited (2.78s).</p>
<p>So, how do we make this asynchronous? Add a callback. So I could change the above code to something along the lines of:</p>
<pre class="language-javascript"><code>var grUsers &#61; new GlideRecord(&#39;sys_user&#39;);
grUsers.addQuery(&#39;active&#39;, &#39;true&#39;);
grUsers.query(function(gr) {
  while (gr.next()) {
    console.log(gr.getValue(&#34;name&#34;));
  }
});</code></pre>
<p>The timings will be the same, but the browser and the user can get on with other things while the browser is waiting on the response.</p>
<h2>So, what&#39;s the fight?</h2>
<p>Okay. It&#39;s not really a fight. When you have read the Developer Documentation links I provided earlier (<a title="Developer Docs: getReference" href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;kingston&amp;id&#61;r_GlideFormGetReference_String_Function" target="_blank" rel="nofollow">g_form.getReference</a> and <a title="Developer Doc: GlideRecord" href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;kingston&amp;id&#61;c_GlideRecordClientSideAPI" target="_blank" rel="nofollow">GlideRecord API</a>), you will understand that the <strong>getReference</strong> is a short-cut to building up a GlideRecord request for a particular Reference field. However, I have seen that the GlideRecord API was used for the same purpose. But. But, there is a difference. More typing!</p>
<p>Let&#39;s look at an example of using <strong>getReference</strong> on the <strong>Assigned to</strong> field of an Incident:</p>
<p><img style="max-width: 100%; max-height: 480px;" src="73e3c86ddb5597487b337a9e0f96197b.iix" /></p>
<p>What I will do is return the object into the console so that we can have a look at what we have.</p>
<pre class="language-javascript"><code>g_form.getReference(&#39;assigned_to&#39;, function(gr) { 
  console.log(gr); 
});</code></pre>
<p>inspecting the browser console shows</p>
<p><img style="max-width: 100%; max-height: 480px;" src="fee408e1db9597487b337a9e0f96194a.iix" /></p>
<p>As you can see I expanded the arrow to see a list of fields and values. Essentially all the fields for that record have been returned. Even if you want just one field, you&#39;re still getting the entire record.</p>
<p>This is where the fight (or area of contention) comes in... this still occupies browser memory. If you go crazy will lots of async requests onLoad and onChange, especially if querying the same record multiple times, you&#39;re not doing the browser (even the user as a matter of fact) any favours. First off, the platform is handling the record collection and querying, then the browser stores that into memory.</p>
<h2>Settling things</h2>
<p>If you&#39;ve read through all that and go this part in the hope of improving things, bravo! So what can you do to improve the experience for the users?</p>
<p>Here&#39;s a quick list of docs that would be a good starting point:</p>
<ul><li>Think about controlling when Client Scripts should run. See <a title="Best Practice: Run Only Necessary Client Scripts" href="https://developer.servicenow.com/app.do#!/document/content/app_store_doc_technical_best_practices_kingston_run_only_necessary_client_scripts?v&#61;kingston" target="_blank" rel="nofollow">Run Only Necessary Client Scripts</a> for more information.</li><li>Minimise how often server lookups are triggered</li><li><ul><li>Can you use <a title="Documentation: g_scratchpad" href="https://docs.servicenow.com/bundle/kingston-application-development/page/script/client-scripts/concept/client-script-best-practices.html#d343455e136" target="_blank" rel="nofollow">g_scratchpad</a> on load of the record?</li><li>Bury the async requests inside an <strong>if</strong> statement to minimise on how often the lookups run</li></ul>
</li><li>If you&#39;ve got something complex to process and return, consider using the <a title="Developer Docs: GlideAjax API" href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;kingston&amp;id&#61;c_GlideAjaxV3API" target="_blank" rel="nofollow">GlideAjax API</a>.</li><li><ul><li>Here&#39;s a good use case for using GlideAjax: <a title="Blog: Lets make GlideAjax a little more dynamic" href="community?id&#61;community_blog&amp;sys_id&#61;884d6ee5dbd0dbc01dcaf3231f9619c0" target="_blank" rel="nofollow">Lets make GlideAjax a little more dynamic</a>.</li></ul>
</li><li>While drafting this blog up, I came across this useful article in the Product Documentation: <a title="Docs: Client script design and processing" href="https://docs.servicenow.com/bundle/kingston-application-development/page/script/client-scripts/concept/client-script-best-practices.html" target="_blank" rel="nofollow">Client script design and processing</a>.</li><li><ul><li>Other tidbits in the article shows a way to <a title="Docs: populate a reference field" href="https://docs.servicenow.com/bundle/kingston-application-development/page/script/client-scripts/concept/client-script-best-practices.html#ariaid-title4" target="_blank" rel="nofollow">populate a reference field</a>.</li></ul>
</li></ul>
<p>Try maximising the usage of the <strong>g_form.getReference</strong> function as the results are cached. If the a request was already made and a record already exists in the local cache, the platform will skip making a request and use the cached result instead.</p>
<p>Did you know that the <strong>g_scratchpad</strong> object is still available in the client side? Here&#39;s an idea. If you have retrieved a record, how about serialising it to the <strong>g_scratchpad</strong>? If you are about to retrieve the same record again, you can check in <strong>g_scratchpad</strong> first. It probably wasn&#39;t designed for that purpose, but hey, there&#39;s a way to &#34;cache&#34; a result. </p>
<h2>For the obsessive</h2>
<p>Now, you&#39;re probably thinking: what else can I do to minimise on the memory usage? Here&#39;s a little tidbit I worked on for a colleague as a proof of concept. Using <strong>GlideAjax</strong> to act like a GlideRecord/getReference, but to get one field value only. It&#39;s probably overkill, but it still convinced them of the benefits of using GlideAjax.</p>
<p>The first step was to create a Script Include that does the work:</p>
<pre class="language-javascript"><code>var GetFieldValueAjax &#61; Class.create();
GetFieldValueAjax.prototype &#61; Object.extendsObject(AbstractAjaxProcessor, {

	getFieldValue: function() {
		var tableName &#61; this.getParameter(&#34;sysparm_table_name&#34;),
			sys_id &#61; this.getParameter(&#34;sysparm_sys_id&#34;),
			fieldName &#61; this.getParameter(&#34;sysparm_field_name&#34;),
			fieldValue &#61; &#34;&#34;;
		
		var gr &#61; new GlideRecord(tableName);
		if (gr.get(sys_id)) {
			// Try to get the display value in case it&#39;s a date/time, reference field, etc
			fieldValue &#61; gr.getDisplayValue(fieldName); 
		}
		
		return fieldValue;
	},

    type: &#39;GetFieldValueAjax&#39;
});</code></pre>
<p>Then, let&#39;s create a helper function to call this Script Include. Now I decided to create this as a global UI Script to show that the helper function can be used anywhere: </p>
<pre class="language-javascript"><code>function getFieldNameClient(sourceField, fieldName, callback) {
  var sourceFieldValue &#61; g_form.getValue(sourceField), 
    sourceFieldTable &#61; g_form.getGlideUIElement(sourceField).reference,
    ga &#61; new GlideAjax(&#39;GetFieldValueAjax&#39;);
	
  ga.addParam(&#39;sysparm_name&#39;, &#39;getFieldValue&#39;);        // The Script Include function
  ga.addParam(&#39;sysparm_sys_id&#39;, sourceFieldValue);     // Target record&#39;s Sys ID
  ga.addParam(&#39;sysparm_table_name&#39;, sourceFieldTable); // Target record&#39;s table
  ga.addParam(&#39;sysparm_field_name&#39;, fieldName);        // What field value is wanted
  ga.getXML(function(response) {
    var answer &#61; response.responseXML.documentElement.getAttribute(&#34;answer&#34;);
    callback(answer);
  });
}</code></pre>
<p>Barring the lack of validation and coding style, you can observe that you pass in your <strong>callback</strong> function to do something with the result. So, it would get called like this in the Client Script</p>
<pre class="language-javascript"><code>getFieldNameClient(&#39;caller_id&#39;, &#39;name&#39;, function(res) { 
  console.log(res); 
});</code></pre>
<p>In this example, <em>caller_id</em> is the field on the form we are currently on and the helper function will pick it up to find out what table to query and what <strong>Sys ID</strong> is needed, and <em>name</em> is the field value we want to get for the record. The final parameter is a function to do something with the response from <strong>GlideAjax</strong>, in this case it&#39;s outputting the results to the browser console.</p>
<p>For proof that it works (despite the non-existent testing) and coz I love screenshots...</p>
<p><img style="max-width: 100%; max-height: 480px;" src="6df310e9db9d97487b337a9e0f961964.iix" /></p>
<p>Of course, for the heavy coders out there, there&#39;s many ways to improve on this (validation, add it to the g_form prototype, whatever). But I do hope that this demonstrates the usefulness of using the GlideAjax API.</p>
<h2>Summary</h2>
<p>So, there you have it. Along the way we have seen how utilising async code can improve the end user experience. Then, to further enhance the experience, looked at ways to minimise how often to do this. I have attached an Update Set for the &#34;obsessive&#34; example for you to peruse and do what you want with it.</p>
<p>Have you discovered anything else of use to improve on the user experience in Client Scripts?</p>