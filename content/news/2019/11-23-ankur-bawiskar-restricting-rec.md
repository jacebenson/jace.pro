---
title: "Restricting records in Survey for Question with data type as Reference"
date: 2019-11-22T12:48:46.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=cacff2c5dbd14c541cd8a345ca96190f"
---
<p>Many a times we use reference data type in Surveys as questions. One limitation of using reference data type in Survey is about filtering the records from the reference table i.e. out of the box reference qualifier cannot be applied for reference data type question in Surveys.</p>
<p class="ng-scope">https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/administer/survey-administration/concept/c_SurveyDesignerElements_1.html</p>
<p class="ng-scope">Consider an example that you are having a survey with question with data type as reference and pointing to Incident (incident) table and you want to show only those incidents where logged in user is the caller of incident. So you can use the below solution/approach:</p>
<ul><li>Create a query business rule on incident table</li><li>In the condition of the business rule ensure it checks for interactive session and doesn&#39;t run for admin users</li><li>Restrict this query business rule to run only when someone opens incident table records from the survey page reference question and not from any other place in the native UI/instance.</li><li>In this way this query business rule will filter and show only the required/filtered records on the survey page and it won&#39;t affect any other place.</li></ul>
<p>Business Rule:</p>
<p>When: before</p>
<p>Table: Incident</p>
<p>Query: TRUE </p>
<p>Condition: gs.getSession().isInteractive()<strong> </strong>&amp;&amp; !gs.hasRole(&#34;admin&#34;)</p>
<p>Script:</p>
<pre class="language-markup"><code>(function executeRule(current, previous /*null when async*/) {

	var url &#61; gs.action.getGlideURI().getMap().get(&#39;sysparm_target&#39;);
		
	if(url.indexOf(&#39;ASMTQUESTION&#39;) &gt;&#61; 0){
		current.addQuery(&#39;caller_id&#39;, gs.getUserID());
	}

})(current, previous);</code></pre>
<p><strong>Approach/Solution:</strong> Whenever user opens the question of type reference to select the incident; it open ups the URL and the URL contains the url parameter as sysparm_target with value as <em><strong>ASMTQUESTION:sys_id</strong></em> which indicates this incident list is being opened up from the survey page. This helps us in identifying from where the incident list is being opened up and apply the query business rule accordingly. You can try printing the URL in the logs and confirm the same. This business rule will only work when someone tries to open incident list from survey.</p>
<p><strong>Note:</strong> This would work in Global and Custom scope as well. As of now this business rule would work or filter incident records for all the surveys which has Data Type as Reference and table as Incident.</p>
<p><strong>Additional Note:</strong> In order to make this work only for the question of type reference for particular Survey; check the URL in the logs or check the URL when you open up the incident list from the question and update script as below as per the sys_id you are getting; I have added it as per my sys_id showing up in the URL</p>
<pre class="language-markup"><code>(function executeRule(current, previous /*null when async*/) {

	var url &#61; gs.action.getGlideURI().getMap().get(&#39;sysparm_target&#39;);
		
	if(url &#61;&#61; &#39;ASMTQUESTION:d89d7a414f598410fc11fa218110c77f&#39;){
		current.addQuery(&#39;caller_id&#39;, gs.getUserID());
	}

})(current, previous);</code></pre>
<p>Screenshots below:</p>
<p><img src="https://community.servicenow.com/938ebac1db914c541cd8a345ca96198c.iix" /></p>
<p>Incidents where System Admin is caller: 237</p>
<p><img src="https://community.servicenow.com/49ceb2c5db914c541cd8a345ca961936.iix" /></p>
<p class="ng-scope"><strong>Thanks for reading the blog and do provide your inputs/suggestions if any.</strong></p>
<p class="ng-scope"><strong>Hope you find this article helpful. Don’t forget to Mark it Helpful, Bookmark.<br />Thanks,<br />Ankur Bawiskar</strong></p>