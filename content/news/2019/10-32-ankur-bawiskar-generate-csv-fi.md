---
title: "Generate csv file with the catalog variables and attaching to RITM record"
date: 2019-10-31T12:41:48.000Z
authors: ["Ankur Bawiskar"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=e4f8bd4edbbc881014d6fb243996190e"
---
<p>Recently I have see many questions regarding how to generate csv file with the catalog item variable values in it. The header row of csv should be the Variable Label and the rows should be the variable values.</p>
<p><a href="https://community.servicenow.com/community?id&#61;community_question&amp;sys_id&#61;f8bb21861b3c8090fff162c4bd4bcbe2" rel="nofollow">https://community.servicenow.com/community?id&#61;community_question&amp;sys_id&#61;f8bb21861b3c8090fff162c4bd4bcbe2</a></p>
<p>So here is an approach on achieving this:</p>
<p>1) Create an after insert business rule on sc_req_item table</p>
<p>2) Have below script in the business rule</p>
<p>You can also embed the script in the Run script activity of the workflow being attached to the Catalog Item</p>
<p>This will generate a csv file and add it as an attachment to the RITM record</p>
<p><strong>Note:</strong> Give file name as per your convenience; For example I have given catalog_variables</p>
<p><strong>Note:</strong> This will work only global scope and not for custom scoped application as GlideappVariablePoolQuestionSet() is not allowed in scoped app. To make it work for scoped app you need to do following:</p>
<p>a) query item_option_new table with the catalog item</p>
<p>b) iterate over every record and get the Label from Question column and get the variable value</p>
<p><strong>For Global Scope:</strong></p>
<pre class="language-markup"><code>var ritmSysId &#61; current.sys_id;
var set &#61; new GlideappVariablePoolQuestionSet();
set.setRequestID(ritmSysId);
set.load();
var vs &#61; set.getFlatQuestions();

var valuesArray &#61; [];

var csvHeader &#61; [];

for(var i&#61;0;i&lt;vs.size();i&#43;&#43;){

var variableLabel &#61; vs.get(i).getLabel();

csvHeader.push(variableLabel.toString());

var variableValue &#61; vs.get(i).getDisplayValue();

valuesArray.push(variableValue.toString());

}

var csvHeaderRow &#61; csvHeader.toString();
var valueRow &#61;  valuesArray.toString();
var sa &#61; new GlideSysAttachment();

var document &#61; csvHeaderRow &#43; &#34;\n&#34; &#43; valueRow;

var ritmRec &#61; new GlideRecord(&#39;sc_req_item&#39;);
ritmRec.get(ritmSysId);

sa.write(ritmRec, &#34;catalog_variables.csv&#34;, &#34;test/csv&#34;, document);</code></pre>
<p><strong>For Scoped App:</strong></p>
<pre class="language-markup"><code>
var csvHeader &#61; [];
var valuesArray &#61; [];

var gr &#61; new GlideRecord(&#39;item_option_new&#39;);
gr.addEncodedQuery(&#39;cat_item&#61;&#39; &#43; current.cat_item);
gr.query();
while(gr.next()){
var label &#61; gr.question_text;
var value &#61; current.variables[gr.name]

csvHeader.push(label.toString());
valuesArray.push(value.toString());
}

var csvHeaderRow &#61; csvHeader.toString();
var valueRow &#61;  valuesArray.toString();
var sa &#61; new GlideSysAttachment();

var document &#61; csvHeaderRow &#43; &#34;\n&#34; &#43; valueRow;

var ritmRec &#61; new GlideRecord(&#39;sc_req_item&#39;);
ritmRec.get(ritmSysId);

sa.write(ritmRec, &#34;catalog_variables.csv&#34;, &#34;test/csv&#34;, document);
</code></pre>
<p class="ng-scope"><strong>Note: As of now the above scripts don&#39;t take into account the multi row variable set &amp; list collector</strong></p>
<p class="ng-scope"><strong>Thanks for reading the blog and do provide your inputs/suggestions if any.</strong></p>
<p class="ng-scope"><strong>Hope you find this article helpful. Don’t forget to Mark it Helpful, Bookmark.<br />Thanks,<br />Ankur Bawiskar</strong></p>
<div class="cm-attachments-body"> </div>