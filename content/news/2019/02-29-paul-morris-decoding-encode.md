---
title: "Decoding Encoded Queries"
date: 2019-02-28T14:40:29.000Z
authors: ["Paul Morris"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=cfd850dbdbb36f00fece0b55ca9619f4"
---
<p>Like Regular Expression, Encoded Queries are incredibly useful to write but incredibly hard to read.<br />To help with this, I created a diagram to help Decode Encoded Queries.</p>
<h3>Converting Filters to Encoded Queries</h3>
<p>Please see the color-coded diagram below. Please note that it uses <a href="https://docs.servicenow.com/bundle/madrid-platform-user-interface/page/use/using-lists-v3/task/t_CreatingFiltersListV3.html" rel="nofollow">Condition Builder v3</a>, as it is easier to read and allows for Related List conditions.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/e00c145fdbf36f00fece0b55ca96191f.iix" /></p>
<h4><span style="background-color: #ffffff; color: #000000;">Encoded Query</span></h4>
<pre class="language-markup"><code>active&#61;true^short_descriptionLIKEIssue^ORshort_descriptionLIKEProblem^NQactive&#61;false^close_code&#61;Not Solved (Not Reproducible)^RLQUERYtask_ci.task,&gt;&#61;1,m2m^ci_item.assignment_groupNSAMEASchange_control^ENDRLQUERY</code></pre>
<p><span style="background-color: #00ff00;">active&#61;true<strong>^</strong></span><span style="background-color: #ff9900;">short_descriptionLIKEIssue<strong>^OR</strong>short_descriptionLIKEProblem</span><span style="background-color: #cc99ff;"><strong>^NQ</strong>active&#61;false<strong>^</strong>close_code&#61;Not Solved (Not Reproducible)</span><span style="background-color: #ffff99;"><strong>^RLQUERY</strong>task_ci.task,&gt;&#61;1,m2m^ci_item.assignment_groupNSAMEASchange_control<strong>^ENDRLQUERY</strong></span></p>
<h3>Converting to Code</h3>
<p>^ &#61; <span style="color: #339966;">AND</span></p>
<pre class="language-javascript"><code>// active&#61;true
var gr &#61; new GlideRecord(&#39;incident&#39;);
gr.addQuery(&#39;active&#39;,&#39;true&#39;);

// Alternative 1
gr.addCondition(&#39;active&#39;,&#39;true&#39;);

// Alternative 2
gr.addActiveQuery();</code></pre>
<p>^OR &#61; <span style="color: #ff6600;">OR<br /></span></p>
<pre class="language-javascript"><code>//active&#61;true^short_descriptionLIKEIssue^ORshort_descriptionLIKEProblem
var qc &#61; gr.addQuery(&#39;active&#39;,true);
qc.addOrCondtion(&#39;short_description&#39;,&#39;CONTAINS&#39;,&#39;Issue&#39;);
qc.addOrCondtion(&#39;short_description&#39;,&#39;CONTAINS&#39;,&#39;Problem&#39;);

//Alternative
gr.addQuery(&#39;active&#39;,true).addOrCondtion(&#39;short_description&#39;,&#39;CONTAINS&#39;,&#39;Issue&#39;).addOrCondtion(&#39;short_description&#39;,&#39;CONTAINS&#39;,&#39;Problem&#39;);</code></pre>
<p>^NQ &#61; <span style="color: #cc99ff;">NEW QUERY / CRITERIA</span></p>
<pre class="language-javascript"><code>// ^NQactive&#61;false^close_code&#61;Not Solved (Not Reproducible)
var nq &#61; new GlideRecord(&#39;incident&#39;);
nq.addQuery(&#39;active&#39;,false);
nq.addQuery(&#39;close_code&#39;,&#39;Not Solved (Not Reproducible)&#39;);

var queries &#61; [];
queries.push(gr.getEncodedQuery());
queries.push(nq.getEncodedQuery());

var finalQry &#61; queries.join(&#34;^NQ&#34;);

var gr &#61; new GlideRecord(&#39;incident&#39;);
gr.addEncodedQuery(finalQry);
</code></pre>
<p> </p>
<h4>On Related List Conditions</h4>
<p>These can be used in code, and Reference Qualifer Script Includes, but do not worked when pasted directly as an encoded query into a reference qualifier field.<br /><br />See <a title="https://docs.servicenow.com/bundle/helsinki-platform-user-interface/page/use/using-lists/concept/c_EncodedQueryStrings.html" href="https://docs.servicenow.com/bundle/helsinki-platform-user-interface/page/use/using-lists/concept/c_EncodedQueryStrings.html" rel="nofollow">Encoded query strings</a> for more documentation on the operators.</p>