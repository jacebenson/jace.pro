---
title: "Unlearn Series  Check Your SQL Query And Its Performance"
date: 2020-02-02T12:39:06.000Z
authors: ["Kalaiarasan Pushpanathan"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=2a007dd0db7648d414d6fb24399619fd"
---
<p><span style="font-family: verdana, geneva; font-size: 12pt;">As a follow up to my earlier <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;1a5a7fdedb34c850d82ffb2439961996&amp;view_source&#61;searchResult" rel="nofollow">blog</a>, I was checking some of my old notes (can&#39;t find it now on community search) and stumbled upon a function that will let you check the SQL query and it&#39;s performance. <strong>gs.trace() </strong>appears to be yet another undocumented function in ServiceNow that will let you see the SQL query that the system generates whenever we issue a query() command. Along with the SQL query, it also let&#39;s you know how much time the system took to perform the query. </span></p>
<p><span style="font-family: verdana, geneva; font-size: 12pt;"><strong>Where can I use this?</strong> </span></p>
<p><span style="font-family: verdana, geneva; font-size: 12pt;">- During development on your development instance to fine tune your query for performance, evaluate which version of query/script works best, etc.</span></p>
<p><strong><span style="font-family: verdana, geneva; font-size: 12pt;">Sample:</span></strong></p>
<p> </p>
<pre class="language-javascript"><code>var tableName &#61; &#39;task&#39;;
var filterString &#61; &#39;active&#61;true&#39;;
var answer &#61; false;

var getRecord &#61; new GlideRecord(tableName);
getRecord.addEncodedQuery(filterString);
getRecord.setLimit(1);
gs.trace(true);
getRecord.query();
gs.trace(false); //set this to false to get only the current query
if (getRecord.hasNext()) {
    answer &#61; true;
}

gs.print(&#39;Record found:&#39; &#43; answer);</code></pre>
<p><strong><span style="font-family: verdana, geneva; font-size: 12pt;">Note: trace() </span></strong><span style="font-family: verdana, geneva; font-size: 12pt;">works only in global scope and </span><span style="font-family: verdana, geneva; font-size: 12pt;">seems to be working like session flag. So you have to reset it to false to stop seeing the SQL queries. </span></p>
<p> </p>
<p><span style="font-family: verdana, geneva; font-size: 12pt;"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/d91c229cdbba04181cd8a345ca961985.iix" /></span></p>
<p> </p>
<p><span style="font-family: verdana, geneva; font-size: 12pt;"><em>If you liked the content, please share, click helpful, bookmark or leave your valuable comments.</em></span></p>