---
title: "Is Not Allowed In Scope The Only Workaround Guide You Need"
date: 2019-06-05T17:34:54.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=72b0f06adb3d33801cd8a345ca96194d"
---
<h3>Contents</h3>
<h5><a href="#introduction" rel="nofollow">Introduction</a></h5>
<h5><a href="#globalworkaround" rel="nofollow">Workaround for almost all Scoping Issues (The Last Resort)<br /><br /></a><a href="#setnumericvalue" rel="nofollow">GlideDateTime().setNumericValue()</a></h5>
<h5><a href="#getmygroups" rel="nofollow">GlideUser().getMyGroups()</a></h5>
<h5><a href="#sleep" rel="nofollow">gs.sleep()</a></h5>
<h5><a href="#dateDiff" rel="nofollow">gs.dateDiff()</a></h5>
<h5><a href="#applyTemplate" rel="nofollow">GlideRecord().applyTemplate()</a></h5>
<h5><a href="#executenow" rel="nofollow">SncTriggerSynchronizer.executeNow()</a></h5>
<h5><a href="#impersonate" rel="nofollow">GlideImpersonate().impersonate()</a></h5>
<h5><a href="#b4query" rel="nofollow">Bypassing Untouchable Before Query Rules</a></h5>
<p> </p>
<h4><a name="introduction"></a>Introduction</h4>
<p>JavaException: java.lang.SecurityException: XYZ is not allowed in scoped applications.</p>
<p> <img src="https://community.servicenow.com/5697f82edb7173801cd8a345ca96195a.iix" /></p>
<p>The bane of every ServiceNow Application Developers existence!</p>
<p>Some functions are not allowed in scope for a good reason ( like gs.getSession().impersonate() ) while others seem to be arbitrarily not available ( like applyTemplate() ).</p>
<p>If you want to know exactly what is and is not in callable in scope, it is all in the API documentation.</p>
<p><a href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;jakarta&amp;id&#61;no-namespace" rel="nofollow">Scoped Server Side</a></p>
<p><a href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;jakarta&amp;id&#61;server_legacy" rel="nofollow">Legacy Server Side</a></p>
<p><a name="globalworkaround"></a></p>
<h4>Working around almost all Scoping issues (The Last Resort)</h4>
<p>You can work around all API limitations by creating a Global Script Include that is callable in all scopes containing all the global functions you need:</p>
<p><img src="https://community.servicenow.com/6e4b67afdbbd7f40feb1a851ca9619d8.iix" /></p>
<p><span style="text-decoration: underline;"><strong>Why shouldn&#39;t I just do this every time I see the dreaded not in scope error?</strong></span><br /><br />Because:</p>
<ul><li>The Script Include cannot be packaged into your application</li><li>That feature cannot be included if you plan to publish to the App Store</li><li>Scoped applications cannot handle some objects that are returned from global API such as Java Arrays</li><li>Creating an Application in Scope forces you to make design decisions to minimize customization and reduce coupling</li><li>It is fun and oddly satisfying to find workarounds to these problems</li></ul>
<p>Alas, it is best to minimize your dependency on custom global script includes.</p>
<p>This guideline will outline every workaround I have found to get around these limitations <span style="text-decoration: underline;">while staying in Scope!<br /><br /></span></p>
<p><a name="setnumericvalue"></a></p>
<h4>GlideDateTime().setNumericValue()</h4>
<pre class="language-javascript"><code>var desiredMS &#61; &#39;176024386630&#39;; // same as value in setNumericValue()
var dt &#61; new GlideDateTime();
var ms &#61; dt.getNumericValue();
dt.add(desiredMs - ms);</code></pre>
<p> </p>
<p><a name="getmygroups"></a></p>
<h4>GlideUser().getMyGroups()</h4>
<pre class="language-javascript"><code>function getMyGroups() {
	var groups &#61; [];
	var grmember &#61; new GlideRecord(&#39;sys_user_grmember&#39;);
	grmember.addQuery(&#39;user&#39;, gs.getUserID());
	grmember.addQuery(&#39;group.active&#39;, true);
	grmember.query();
	while(grmember.next()){
		groups.push(grmember.getValue(&#39;group&#39;));
	}
	// add all parent groups (this is global.getMyGroups behaviour)
	var children &#61; groups;
	while(children.length &gt; 0) {
		var grp &#61; new GlideAggregate(&#39;sys_user_group&#39;);
		grp.addQuery(&#39;active&#39;, true);
		grp.addQuery(&#39;sys_id&#39;, &#39;IN&#39;, children.join(&#39;,&#39;));
		grp.addEncodedQuery(&#39;parentISNOTEMPTY&#39;);
		grp.groupBy(&#39;parent&#39;);
		grp.query();
		children &#61; [];
		while(grp.next()) {
			var parent_id &#61; grp.getValue(&#39;parent&#39;);
			if (groups.indexOf(parent_id) &#61;&#61; -1) {
				groups.push(parent_id);
				children.push(parent_id);
			}
		}
	}
	return groups;
}</code></pre>
<p>From user Tim2222 on <a href="https://community.servicenow.com/community?id&#61;community_question&amp;sys_id&#61;308eac4cdbcb5304b2102926ca9619fd&amp;view_source&#61;searchResult" rel="nofollow">this </a>thread. This workaround respects the parent hierarchy.<br /><a name="sleep"></a></p>
<p> </p>
<h4>gs.sleep()</h4>
<pre class="language-javascript"><code>function sleep(ms) {
  var endSleep &#61; new GlideDuration().getNumericValue() &#43; ms;
  while ( new GlideDuration().getNumericValue() &lt; endSleep) {
   //wait 
  }

  return;
}</code></pre>
<p><a name="dateDiff"></a></p>
<h4>gs.dateDiff()</h4>
<pre class="language-javascript"><code>var gdtFutureDate &#61; new GlideDateTime(&#34;2020-01-01 05:00:00&#34;);
var gdtPastDate &#61; new GlideDateTime(&#34;2019-12-12 08:00:00&#34;); 

// Convert from MS as required
var durationInMs &#61; GlideDateTime.subtract(gdtFutureDate, gdtPastDate); 


</code></pre>
<p><a name="applyTemplate"></a></p>
<h4>GlideRecord().applyTemplate()</h4>
<pre class="language-javascript"><code>var sys_id_of_template &#61; &#39;56a8e507db6b26405accd5f0cf96190b&#39;;   
var grObj &#61; new GlideRecord(&#39;incident&#39;);   
var t &#61;   new GlideTemplate.get(sys_id_of_template);   
t.apply(grObj); </code></pre>
<p> </p>
<p><a name="impersonate"></a></p>
<h4>GlideImpersonate().impersonate()</h4>
<p>This one is kind of complicated and is only a half-workaround. <br />In a Scoped Application, you can create Scheduled Jobs. Add the field &#39;Run as&#39; to the form.</p>
<p><img src="https://community.servicenow.com/924038a2db3d33801cd8a345ca961923.iix" /></p>
<p>Within the Script field, you can then evaluate any code you wish to as the user by using the GlideScopedEvaluator to point at any script field you have in the system (of the same application).</p>
<pre class="language-javascript"><code>var evaluator &#61; new GlideScopedEvaluator(); 
gr &#61; new GlideRecord(&#39;x_app_table&#39;); 
gr.addQuery(&#39;short_description&#39;,&#39;Testing GlideScopedEvaluator&#39;); 
gr.query(); 
if (gr.next()) { 
    gs.info(evaluator.evaluateScript(gr, &#39;test_script&#39;, vars));
}</code></pre>
<p><a href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;madrid&amp;id&#61;r_ScopedGlideEvaluatorGlideScopedEvaluator" rel="nofollow">https://developer.servicenow.com/app.do#!/api_doc?v&#61;madrid&amp;id&#61;r_ScopedGlideEvaluatorGlideScopedEvaluator</a></p>
<p>Update the Schedule Job &#39;Run as&#39; field as the user you wish to impersonate.</p>
<p>Then, use <a href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;madrid&amp;id&#61;r_SGSYS-executeNow_GR" rel="nofollow">GlideSystem.executeNow()</a> in your code to run the Scheduled job.</p>
<p><a name="executenow"></a></p>
<h4>SncTriggerSynchronizer.executeNow()</h4>
<pre class="language-javascript"><code>gs.executeNow(grScheduledJob);</code></pre>
<p>While only a half workaround (only works server-side) it may still meet the requirement.</p>
<p><a name="b4query"></a></p>
<h4>Bypassing Untouchable Before Query Rules </h4>
<p>There may be some Before Query rules that are hiding records that you need for your Scoped Application and from your Scope, you can&#39;t touch them.<br />One example of these is the &#39;user query&#39; Business Rule on the User table. It hides all inactive user records from non-admin. It is also untouchable from an Application Scope.</p>
<p><img src="https://community.servicenow.com/fcc6bbf9db49cc1813b5fb24399619ff.iix" /></p>
<p>If you are building an Application for the Store or for other customers, you may not be in a position to modify this. Remember, changes to this rule cannot be packaged in your Scoped Application.</p>
<p>But you have a requirement for your Application to return some details about inactive Users!</p>
<p>What can you do?</p>
<p>Luckily for us, REST does not respect before query Business Rules.</p>
<p>Using the REST API explorer, you can write some code to use REST to get inactive User data.</p>
<pre class="language-javascript"><code>var request &#61; new sn_ws.RESTMessageV2();
var instanceURL &#61; gs.getProperty(&#39;glide.servlet.uri&#39;);
var restQry &#61; &#34;api/now/table/sys_user?sysparm_query&#61;active%3Dfalse&amp;sysparm_limit&#61;1&#34;;
request.setEndpoint(baseUrl&#43;restQry); 
request.setHttpMethod(&#39;GET&#39;);</code></pre>
<p>Credit to <sn-mention class="sn-mention" table="live_profile" sysid="da3196a5db981fc09c9ffb651f961999">&#64;jnovack</sn-mention> for asking the question and <sn-mention class="sn-mention" table="live_profile" sysid="cc8092e9db581fc09c9ffb651f96196b">&#64;MB</sn-mention> for providing the solution in <a href="https://community.servicenow.com/community?id&#61;community_question&amp;sys_id&#61;776a5025db0580d423f4a345ca961992" target="_blank" rel="noopener noreferrer nofollow">this</a> thread.</p>
<p>**</p>
<p> </p>
<p><strong>Post any of your workarounds in the comments below!</strong></p>
<p><a name="applyTemplate"></a></p>
<p>If you enjoyed this blog, please see <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;12d41149db7b67805129a851ca961966" target="_blank" rel="noopener noreferrer nofollow">here</a> for my full series of ServiceKnow-How blogs!</p>