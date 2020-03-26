---
title: "Unlearn Series  Create Or Update Record With Encoded Query"
date: 2020-02-07T13:14:22.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=e7086f35db7604d84819fb24399619e1"
---
<p><span style="font-family: verdana, geneva; font-size: 12pt;">There are many hidden gems in ServiceNow which are undocumented for some reason or the other. One such thing is a interesting function that I found while looking into the script include &#39;StdChangeUtilsSNC&#39;, called <strong>applyEncodedQuery</strong>() of GlideRecord.</span></p>
<p> </p>
<p><span style="font-family: verdana, geneva; font-size: 12pt;">Let&#39;s just say you have a use case where you have a encoded query and want to create or update a record using it. Here comes <strong>applyEncodedQuery</strong>() to your rescue. </span><span style="font-family: verdana, geneva; font-size: 12pt;">Below is a quick sample on how you can use the function.</span></p>
<p> </p>
<pre class="language-javascript"><code>var filter &#61; &#39;caller_id&#61;javascript:gs.getUserID()^active&#61;true^short_description&#61;Test^state&#61;2&#39;;
var records &#61; new GlideRecord(&#39;incident&#39;);
records.initialize();
records.applyEncodedQuery(filter);
records.insert();</code></pre>
<p> </p>
<p><span style="font-family: verdana, geneva; font-size: 12pt;">The above code creates a incident with caller, short description and state being &#39;In Progress&#39;. </span></p>
<p><strong>Note: </strong>Tested the function in global scope.</p>
<p> </p>
<p><em>If you liked the content, please share, click helpful, bookmark or leave your valuable comments.</em></p>