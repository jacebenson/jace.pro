---
title: "How To Write GlideRecord Queries Like A Pro"
date: 2018-01-09T18:16:27.000Z
authors: ["Paul Morris"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=392d66e5dbd0dbc01dcaf3231f96192c"
---
<h3>4 Simple Steps To Write GlideRecord Queries Like A Pro</h3>
<p>The GlideRecord API is probably the most used Object in any ServiceNow Instance.<br />It can also be one of the most frustrating!<br /><br />Code like this is commonplace:</p>
<p> </p>
<pre class="language-javascript"><code>var gr &#61; new GlideRecord(&#39;some_table&#39;);
var gc &#61; gr.addQuery(&#39;field_a&#39;,&#39;value&#39;);
gc.addOrCondition(&#39;field_b&#39;,;&#39;Complex Query&#39;)
gr.addQuery(&#39;another_ field&#39;, &#39;more complexity&#39;);
gr.addQuery(&#39;field_x&#39;,&#39;furthermore complex&#39;);
gr.query();
while (gr.next()) {
//Why am I not getting the record result I want!!!
//Someone please help me!
}</code></pre>
<p>Given how often we need to write this code, it pays off to take the time to develop a methodology to write them faster. </p>
<p>In this blog, I will show you my method of writing these queries, which I have refined over years of experience developing in the platform.</p>
<h3>Example: Catalog Item Variables </h3>
<p>Let&#39;s take querying Catalog Item variables as an example. You&#39;ve identified the table <strong>Variable Ownerships [sc_item_option_mtom]</strong> and your code looks something like this:</p>
<p> </p>
<pre class="language-javascript"><code>var grVariableOwnerships &#61; new GlideRecord(&#39;sc_item_option_mtom&#39;); // Name your variable after the table name. Make it obvious what records you are dealing with
grVariableOwnerships.addQuery(&#39;field_a&#39;,value);
//Complex query here
grVariableOwnerships.query();
while( grVariableOwnerships.next() {
	processVariableOwnerships(grVariableOwnerships); //Made up function Separate your processing into a separate function for unit testing
}</code></pre>
<p>I have discovered 4 simple steps that will allow you to write your GlideRecord Queries like a Pro and get them right every time! </p>
<ol><li>
<h4>Check the Dictionary Entry to confirm Field Names and Labels<img class="image-2 jive-image" style="max-width: 1200px; max-height: 900px;" src="9a46ab31dbd0dfc0b322f4621f961989.iix" /></h4>
<p>This will ensure you don&#39;t make typos in your field names, and will be useful in step 2.</p>
<p> </p>
</li><li>
<h4>Build the Filter in a List</h4>
<p><img class="image-1 jive-image" style="max-width: 1200px; max-height: 900px;" src="d355dd8adb5813043eb27a9e0f961959.iix" /></p>
<p>From Step 1, you will be able to align the Field Labels with the Column Labels.</p>
<p>Modify the query until you get the result list you want.</p>
<p> </p>
</li><li>
<h4>Copy the Query from the Bread Crumb</h4>
<p><img class="image-3 jive-image" style="max-width: 1200px; max-height: 900px;" src="70b0f00adbdc57041dcaf3231f961913.iix" /></p>
Your query will look something like this:<br />
<pre class="language-markup"><code>sc_item_option.valueISNOTEMPTY^sc_item_option.value!&#61;false^sc_item_option.value!&#61;undefined^request_item.cat_item&#61;0241d1b2db4e4700821a3e5c7c9619b8</code></pre>
</li><li>
<h4>Paste it into your code</h4>
<pre class="language-javascript"><code>var encQry &#61; &#39;sc_item_option.valueISNOTEMPTY^sc_item_option.value!&#61;false^sc_item_option.value!&#61;undefined^request_item.cat_item&#61;0241d1b2db4e4700821a3e5c7c9619b8&#39;;
var grVariableOwnerships &#61; new GlideRecord(&#39;sc_item_option_mtom&#39;); // Name your variable after the table name. Make it obvious what records you are dealing with
grVariableOwnerships.addEncodedQuery(encQry);
grVariableOwnerships.query();

while( grVariableOwnerships.next() {
	processVariableOwnerships(grVariableOwnerships); //Made up function Separate your processing into a separate function for unit testing
}​</code></pre>
<p>Using the <a title="eveloper.servicenow.com/app.do#!/api_doc?v&#61;jakarta&amp;id&#61;r_ScopedGlideRecordAddEncodedQuery_String" href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;jakarta&amp;id&#61;r_ScopedGlideRecordAddEncodedQuery_String" rel="nofollow">addEncodedQuery </a>API, you can paste your query that you already know works straight into your code!</p>
Sometimes, your query values will be based on existing variables. This is easy to integrate into your copied encoded query:
<pre class="language-javascript"><code>var value0 &#61; &#39;some_value&#39;;
var value1 &#61; &#39;another_value&#39;;
var value2 &#61; &#39;1234567890&#39;;
var encQry &#61; gs.getMessage(
  &#39;sc_item_option.valueISNOTEMPTY^sc_item_option.value!&#61;{0}^sc_item_option.value!&#61;{1}^request_item.cat_item&#61;{2}&#39;,
  [value0, value1, value2]
);</code></pre>
<pre class="language-markup"><code>sc_item_option.valueISNOTEMPTY^sc_item_option.value!&#61;some_value^sc_item_option.value!&#61;another_value^request_item.cat_item&#61;1234567890</code></pre>
<p>Using to <a title="eveloper.servicenow.com/app.do#!/api_doc?v&#61;jakarta&amp;id&#61;r_ScopedGlideSystemGetMessage_String_Object" href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;jakarta&amp;id&#61;r_ScopedGlideSystemGetMessage_String_Object" rel="nofollow">getMessage </a>API you can easily incorporate values into your queries and still use the query you know that works.<br />Feel free to refactor your code back into addQuery if you feel it makes your code more maintainable and readable. You can always use <a title="eveloper.servicenow.com/app.do#!/api_doc?v&#61;jakarta&amp;id&#61;r_ScopedGlideRecordGetEncodedQuery" href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;jakarta&amp;id&#61;r_ScopedGlideRecordGetEncodedQuery" rel="nofollow">getEncodedQuery </a>to confirm that your refactored query matches the original. Best of all, you can apply this approach to any GlideRecord query problem you have</p>
<p> </p>
</li></ol>
<h4>API Used</h4>
<p>No animals were harmed in the making of this blog post.<br />However, the following API was used/abused:</p>
<table class="jiveBorder" style="border: 1px solid #c6c6c6; width: 372px; height: 201px;" border="1" width="370"><tbody><tr><th style="text-align: left; background-color: #f2f2f2; color: #505050; padding: 6px;" valign="middle"><strong>Class</strong></th><th style="text-align: left; background-color: #f2f2f2; color: #505050; padding: 6px;" valign="middle"><strong>Method</strong></th></tr><tr><td style="padding: 6px;">GlideRecord</td><td style="padding: 6px;">addEncodedQuery</td></tr><tr><td style="padding: 6px;">GlideRecord</td><td style="padding: 6px;">getEncodedQuery</td></tr><tr><td style="padding: 6px;">GlideRecord</td><td style="padding: 6px;">query</td></tr><tr><td style="padding: 6px;">GlideSystem</td><td style="padding: 6px;">getMessage</td></tr></tbody></table>
<p> </p>
<p>I hope this blog post was useful!</p>
<p> Please bookmark, like or provide feedback</p>