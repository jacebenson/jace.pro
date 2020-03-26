---
title: "Search for Duplicates  Delete Based on  Columns"
date: 2019-06-28T20:56:20.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=656b373ddb96ff401cd8a345ca961958"
---
<p>You must have seen many articles on community informing about how to find duplicates in particular table with single column.</p>
<p>Links: <a href="https://www.servicenowelite.com/blog/2013/11/22/duplicate-record-scripts" rel="nofollow">https://www.servicenowelite.com/blog/2013/11/22/duplicate-record-scripts</a></p>
<p>The above is widely referred link.</p>
<p>But those links won&#39;t be helpful if you want to search for duplicates using multiple columns i.e. 2 columns etc</p>
<p>Real Time Scenario: There could be a scenario that Group Membership Table (sys_user_grmember) has duplicate records for User and Group. Ideally this should not be allowed.</p>
<p>Example: User A belongs to Group A; There could be 2 records for the same User &#43; Group combination.</p>
<p>Here is the script which you can use to search for duplicates and delete those records if required. You can enhance the script for 3 columns etc.</p>
<p>As of now this doesn&#39;t work in scoped application since function addHaving() is not allowed in scope. This should run smoothly in global scope.</p>
<p>Ensure you print the information first before deleting the actual records.</p>
<pre class="language-css"><code>deleteDuplicates(&#39;sys_user_grmember&#39;, &#39;user&#39;, &#39;group&#39;);

function deleteDuplicates(tableName, field1, field2){

// declare an array
var dupRecords &#61; [];
var duplicateCheck &#61; new GlideAggregate(tableName);
duplicateCheck.addNotNullQuery(field1);
duplicateCheck.addNotNullQuery(field2);
duplicateCheck.groupBy(field1);
duplicateCheck.groupBy(field2);
duplicateCheck.addHaving(&#39;COUNT&#39;, &#39;&gt;&#39;, 1); // addHaving func won&#39;t work in scope app
duplicateCheck.query();
while(duplicateCheck.next()) {
var jsonObj &#61; {}; // declare a json object
jsonObj[field1] &#61; duplicateCheck[field1].toString();
jsonObj[field2] &#61; duplicateCheck[field2].toString()
dupRecords.push(jsonObj);
}

var jsonString &#61; JSON.stringify(dupRecords); // convert json object to string

var parser &#61; new JSONParser();
var parsedData &#61; parser.parse(jsonString);
var length &#61; parsedData.length;

for(var i&#61;0; i&lt;length; i&#43;&#43;){

var encodedQuery &#61; field1 &#43; &#39;&#61;&#39; &#43; parsedData[i][field1] &#43; &#39;^&#39; &#43; field2 &#43; &#39;&#61;&#39; &#43; parsedData[i][field2];

var tableRec &#61; new GlideRecord(tableName);
tableRec.addEncodedQuery(encodedQuery);
tableRec.query();
if(tableRec.next()){
gs.info(&#39;Repeated Data is: User -&gt; &#39; &#43; tableRec.getDisplayValue(&#39;user&#39;) &#43; &#39; Group -&gt; &#39; &#43; tableRec.getDisplayValue(&#39;group&#39;));
tableRec.deleteRecord();
}
}
}</code></pre>
<p class="ng-scope">Kindly do not forget to like or bookmark this post if it helps you.</p>
<p class="ng-scope">Kindly input your suggestions if any once you use this.</p>