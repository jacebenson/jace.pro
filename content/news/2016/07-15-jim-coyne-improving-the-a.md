---
title: "Improving the Attachments List View"
date: 2016-07-15T00:57:58.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=1e5eaaaddbd0dbc01dcaf3231f961939"
---
<p>In a related article, <a class="jive_macro jive_macro_blogpost" title="" href="community?id&#61;community_blog&amp;sys_id&#61;928c2ae1dbd0dbc01dcaf3231f961927" rel="nofollow">&#34;Related Attachments&#34; Related List</a>, I talk about creating a Defined Related List to pull together attachments from related records so they can show up on the form view of all those records (e.g. Service Desk Calls and Incidents):</p>
<p> </p>
<p><img class="image-5 jive-image" style="width: 868px; height: 228.2px;" src="6a5ce8cedbd4dfc03eb27a9e0f9619ee.iix" width="868" height="228" /></p>
<p> </p>
<p>It&#39;s nice to have them all in one place, but the &#34;Table name&#34; and &#34;Table sys ID&#34; fields are not very useful.   Luckily we can improve on that.</p>
<p> </p>
<p>We simply need to create a new calculated field called &#34;Record&#34; of type &#34;Document ID&#34; on the Attachment table.   To do this, enter &#34;sys_attachment.list&#34; in the Navigator filter - this will display a list of attachment records.   Then right-click on the list header and select Configure \ Dictionary.   Create a new record with the following settings (you may have to click on the Advanced View Related Link to show some of these fields):</p>
<p> </p>
<p><span style="font-family: &#39;courier new&#39;, courier;">Table:                       Attachment [sys_attachment]</span></p>
<p><span style="font-family: &#39;courier new&#39;, courier;">Type:                        Document ID</span></p>
<p><span style="font-family: &#39;courier new&#39;, courier;">Column label:                Record (or whatever else you prefer)</span></p>
<p><span style="font-family: &#39;courier new&#39;, courier;">Use dependent field:         checked</span></p>
<p><span style="font-family: &#39;courier new&#39;, courier;">Dependent on field:          Table name</span></p>
<p><span style="font-family: &#39;courier new&#39;, courier;">Calculated:                  checked</span></p>
<p><span style="font-family: &#39;courier new&#39;, courier;">Calculation:</span></p>
<pre class="language-javascript"><code>(function calculatedFieldValue(current) {
  return current.getValue(&#34;table_sys_id&#34;);
})(current);</code></pre>
<p> </p>
<p><span style="line-height: 1.5;">I normally steer everyone away from Calculated fields because they can be expensive in terms of database cycles, however, I am told that creating a calculated field from values that are available on the same record is indeed safe.</span></p>
<p> </p>
<p><span style="line-height: 1.5;">Now we can have a useful Related List on the appropriate forms by replacing the fields that are displayed (right-click Configure \ List Layout) by removing the &#34;Table name&#34; and &#34;Table sys ID&#34; fields and adding the new &#34;Record&#34; field:</span></p>
<p> </p>
<p><img class="jive-image image-4" style="height: 229px; width: 871.416px;" src="ee9b4dcedb90d304b322f4621f961922.iix" width="871" height="229" /></p>
<p> </p>
<p>Now you can see the record the attachment is actually on, and even click on the link to go to that particular record.</p>
<p> </p>
<p> </p>
<p> </p>
<p><strong>NOTE:</strong> My earlier blog post, <a class="jive_macro jive_macro_blogpost" title="A Better Requested Item Attachments Related List" href="community?id&#61;community_blog&amp;sys_id&#61;adfce2a5dbd0dbc01dcaf3231f961934" rel="nofollow">A Better Requested Item Attachments Related List</a>, got a little messy so I split it into 2 different posts so it would be easier to read and update.   This post is the second of those 2 new posts.</p>