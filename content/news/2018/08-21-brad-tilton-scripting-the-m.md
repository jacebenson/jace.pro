---
title: "Scripting the Multirow Variable Set"
date: 2018-08-21T02:45:45.000Z
authors: ["Brad Tilton"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=865b5aeddbc023c0feb1a851ca9619f9"
---
<p>In <a href="community?id&#61;community_blog&amp;sys_id&#61;7cc66514db882380e0e80b55ca961965" rel="nofollow">my last post</a>, we created a multi-row variable set, added variables, then showed it in action by filling out the variables and checking out. In this post we&#39;ll use some of the new methods described <a href="https://docs.servicenow.com/bundle/london-application-development/page/script/server-scripting/concept/c_ScriptableServiceCatalogVariables.html#d1031449e133" rel="nofollow">here</a> to access and set values. For the purposes of this post we&#39;re going to be using background scripts (<a href="community?id&#61;community_blog&amp;sys_id&#61;27804903db63530054250b55ca961938" rel="nofollow">which received some new functionality in London</a>) in the global scope. </p>
<p>The first thing we&#39;ll look at is the JSON object returned by referencing the MRVS. In the following script we&#39;re using the sys_id of therequest item ordered in the last post to get the GlideRecord object for that request item. Then we&#39;re populating the mrvs variable with the <strong>access_list</strong> variable set.</p>
<pre class="language-javascript"><code>var mrvs;
var itemID &#61; &#39;70506da8db002300e69dfbef2996194a&#39;;
var ritmGR &#61; new GlideRecord(&#39;sc_req_item&#39;);
if (ritmGR.get(itemID)) {
    mrvs &#61; ritmGR.variables.access_list;
}
gs.print(mrvs);</code></pre>
<p>Returns:</p>
<pre class="language-markup"><code>*** Script: [ {
  &#34;application&#34; : &#34;829e953a0ad3370200af63483498b1ea&#34;,
  &#34;access_level&#34; : &#34;read&#34;
}, {
  &#34;application&#34; : &#34;2811a2efc0a8000b0069bb464f215ff5&#34;,
  &#34;access_level&#34; : &#34;full&#34;,
  &#34;business_justification&#34; : &#34;This field is mandatory because I selected full access&#34;
}, {
  &#34;application&#34; : &#34;28110ea1c0a8000b003abee48ecbc3fa&#34;,
  &#34;access_level&#34; : &#34;read_write&#34;
} ]</code></pre>
<p>The first thing I noticed was that it appears that only variables with values are included in the json object as the first and third elements don&#39;t have a business_justification. From here, we can get more granular.</p>
<p>NOTE: In order to save space the following scripts will assume we have the variable <strong>mrvs</strong> from the first script above that represents the multi-row variable set. </p>
<pre class="language-javascript"><code>//get all the values in a single column
gs.print(mrvs.application);
//get the number of rows in the multi-row variable set
gs.print(mrvs.getRowCount());</code></pre>
<p>Returns:</p>
<pre class="language-markup"><code>*** Script: [829e953a0ad3370200af63483498b1ea, 2811a2efc0a8000b0069bb464f215ff5, 28110ea1c0a8000b003abee48ecbc3fa]
*** Script: 3</code></pre>
<p>Based on this we see that we can use the variableset.variablename will give us all of the values from the variables column in an array. This could be useful if we wanted to do some sort of check against the applications before looking at the level of access needed. We also see that we have the familiar getRowCount() to use to see how many rows are in the MRVS. We can also usevariableset &#61; &lt;JSON Object&gt; and variableset.variablename &#61; &lt;Array of values&gt; to set values or the whole variable set or all rows in a column.</p>
<p>Now we&#39;ll use getRowCount and getRow to iterate through the rows, and then getRow to print the values of our application and access_level variables:</p>
<pre class="language-javascript"><code>var rowCount &#61; mrvs.getRowCount();
for (var i &#61; 0; i &lt; rowCount; i&#43;&#43;) {
	var row &#61; mrvs.getRow(i);
	var app &#61; row.application;
	var accessLevel &#61; row.access_level;
	gs.print(app &#43; &#39; &#39; &#43; accessLevel);
}</code></pre>
<p>Returns:</p>
<pre class="language-markup"><code>*** Script: 829e953a0ad3370200af63483498b1ea read
*** Script: 2811a2efc0a8000b0069bb464f215ff5 full
*** Script: 28110ea1c0a8000b003abee48ecbc3fa read_write</code></pre>
<p>Now we&#39;re going to use addRow to add a row and populate the variables in the row using setCellValue and setting it directly using the row objects property for the variable:</p>
<pre class="language-javascript"><code>var newRow &#61; mrvs.addRow();
//set the value using row.setCellValue(&#39;&lt;var_name&gt;&#39;,value)
newRow.setCellValue(&#39;application&#39;, &#39;829e953a0ad3370200af63483498b1ea&#39;);
//set the value using row.&lt;var_name&gt; &#61; value
newRow.access_level &#61; &#39;read_write&#39;;
gs.print(mrvs);</code></pre>
<p>Returns:</p>
<pre class="language-markup"><code>*** Script: [ {
  &#34;application&#34; : &#34;829e953a0ad3370200af63483498b1ea&#34;,
  &#34;access_level&#34; : &#34;read&#34;
}, {
  &#34;application&#34; : &#34;2811a2efc0a8000b0069bb464f215ff5&#34;,
  &#34;access_level&#34; : &#34;full&#34;,
  &#34;business_justification&#34; : &#34;This field is mandatory because I selected full access&#34;
}, {
  &#34;application&#34; : &#34;28110ea1c0a8000b003abee48ecbc3fa&#34;,
  &#34;access_level&#34; : &#34;read_write&#34;
}, {
  &#34;application&#34; : &#34;829e953a0ad3370200af63483498b1ea&#34;,
  &#34;access_level&#34; : &#34;read_write&#34;
} ]</code></pre>
<p>We now have a fourth row in the catalog table variable with the values we set in the script. Notice that both methods worked to set the values. There&#39;s also a method for deleting a row, but I&#39;m usually against deleting anything in ServiceNow so I&#39;m not going to use it here. </p>
<p>Lastly, I wanted to post the notes and limitations from the docs article here as they&#39;re important to know when working with the MRVS:</p>
<ol id="c_ScriptableServiceCatalogVariables__ol_am5_zq4_pp" class="ol"><li class="li">You can only set a variable in a before business rule. Variables set in an after rule are not written to the database.</li><li class="li">There is nothing in place to prevent namespace collision with variables. Creating two variables named computer_speed would result in only one of them showing up; the second one would overwrite the first one.</li><li class="li">Date/time variables use the same time zone formatting and storage rules as all other dates in the system. They are stored internally in GMT, but translated into the user&#39;s local time zone and format for display.</li></ol>
<p>I hope this post was helpful as you&#39;re exploring how to use the values from London&#39;s new Multi-row variable set in your workflows, scheduled jobs, and business rules.</p>
<p> </p>