---
title: "Approval Summarizer for Group Approvals"
date: 2019-09-21T22:38:17.000Z
authors: ["Ankur Bawiskar"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=fbd102d9db0c881414d6fb24399619aa"
---
<p>Recently I have see many questions regarding showing approval summary on Group approval which is not available out of the box; so I thought of creating a blog for same.</p>
<p>https://community.servicenow.com/community?id&#61;community_question&amp;sys_id&#61;a6f6f66cdb0c809023f4a345ca9619f8</p>
<p>https://community.servicenow.com/community?id&#61;community_question&amp;sys_id&#61;119c822fdb333b005ed4a851ca96196d</p>
<p>https://community.servicenow.com/community?id&#61;community_question&amp;sys_id&#61;c2a4f224db48809023f4a345ca961918</p>
<p>This blog gives you an overview on how to display approval summary for Groups Approvals which is not present out of the box. It would display the variable name and their values corresponding to the RITM for which group approval is present.</p>
<p>For User Approvals there is an Approval Summarizer which displays the information about the RITM along with all the details.</p>
<p>But such approval summary is not available for Group Approvals. So here is the custom code to show the approval information.</p>
<p>You can add your customization as per your own need here and enhance the code the way you want i.e. the html table style, extra information etc</p>
<p>Note: Currently it would show information for only those variables which are having value and not for empty variables.</p>
<p>Also it will display information only when table is RITM; for all other Group approval it will display static message</p>
<p><strong>Steps:</strong></p>
<ol><li>Create an UI Macro</li><li>Create a formatter and link the macro created in step 1</li><li>Add this formatter on Group Approval form layout</li></ol>
<p>1) UI Macro:</p>
<p>Name: custom_display_variable_summary</p>
<p>XML:</p>
<pre class="language-markup"><code>&lt;?xml version&#61;&#34;1.0&#34; encoding&#61;&#34;utf-8&#34; ?&gt;
&lt;j:jelly trim&#61;&#34;false&#34; xmlns:j&#61;&#34;jelly:core&#34; xmlns:g&#61;&#34;glide&#34; xmlns:j2&#61;&#34;null&#34; xmlns:g2&#61;&#34;null&#34;&gt;
&lt;!-- 
	&lt;style&gt;
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
&lt;/style&gt;
	 --&gt;
	
	&lt;style&gt;
  table {
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }
  tr:nth-child(even) {
    background-color: #eee;
  }
  tr:nth-child(odd) {
    background-color: #fff;
  }            
&lt;/style&gt;

	
	&lt;b&gt;Variable Summary&lt;/b&gt;
	&lt;br/&gt;
	
	&lt;g2:evaluate var&#61;&#34;jvar_rec&#34; jelly&#61;&#34;true&#34; object&#61;&#34;true&#34;&gt;
		var tableName &#61; current.parent.sys_class_name;
		tableName;
	&lt;/g2:evaluate&gt;

		&lt;j2:choose&gt;	
			&lt;j2:when test&#61;&#34;$[tableName &#61;&#61; &#39;sc_req_item&#39;]&#34;&gt;
	&lt;g2:evaluate var&#61;&#34;jvar_jsonObj&#34; jelly&#61;&#34;true&#34; object&#61;&#34;true&#34;&gt;
		var ritmSysId &#61; current.getValue(&#39;parent&#39;);
		var set &#61; new GlideappVariablePoolQuestionSet();
		set.setRequestID(ritmSysId);
		set.load();
		var vs &#61; set.getFlatQuestions();
		vs;
	&lt;/g2:evaluate&gt;

	&lt;table cellspacing&#61;&#34;0&#34; cellpadding&#61;&#34;0&#34; width&#61;&#34;100%&#34;&gt;
		&lt;th&gt;NAME&lt;/th&gt;
		&lt;th&gt;VALUE&lt;/th&gt;
	 &lt;j2:forEach var&#61;&#34;jvar_json&#34; items&#61;&#34;$[vs]&#34;&gt; 
		&lt;j2:if test &#61; &#34;$[jvar_json.getLabel()!&#61; &#39;&#39; &amp;amp;&amp;amp; jvar_json.getDisplayValue()!&#61; &#39;&#39;]&#34;&gt; 
			&lt;tr&gt;&lt;td class&#61;&#34;block&#34;&gt; $[jvar_json.getLabel()] &lt;/td&gt;&lt;td class&#61;&#34;block&#34;&gt;$[jvar_json.getDisplayValue()] &lt;/td&gt;&lt;/tr&gt;
		&lt;/j2:if&gt; 
	&lt;/j2:forEach&gt;
		&lt;/table&gt;
			&lt;/j2:when&gt;
			&lt;j2:otherwise&gt;
			&lt;p&gt;No variable summary to display&lt;/p&gt;
			&lt;/j2:otherwise&gt;
			&lt;/j2:choose&gt;
			
&lt;/j:jelly&gt;</code></pre>
<p>2) Formatter: In left navigation type formatters; give below details</p>
<p>Name: Approval Group Summary</p>
<p>Formatter: custom_display_variable_summary.xml</p>
<p>Table: Group approval (sysapproval_group)</p>
<p>Type: Formatter</p>
<p>Screenshot below</p>
<p><img src="https://community.servicenow.com/fd0f7191db0c881414d6fb2439961964.iix" /></p>
<p>3) Add the formatter to the form layout of Group approval; see the Formatter added at the end in the Selected list in right hand side</p>
<p><img src="https://community.servicenow.com/685ffd91db0c881414d6fb2439961935.iix" /></p>
<p> </p>
<p> </p>
<p> </p>
<p>Example: As you can see the RITM has all the variable information:</p>
<p><img src="https://community.servicenow.com/337f31d1db0c881414d6fb24399619bb.iix" /></p>
<p>Variable Summary on Group Approval:</p>
<p><img src="https://community.servicenow.com/ee408e95db0c881414d6fb2439961942.iix" /></p>
<p>Hope this helps the community team members.</p>
<p>Regards</p>