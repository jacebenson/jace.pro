---
title: "Importing Slack Users ID to SN  Map it to User Record based on email  Part "
date: 2019-05-23T18:31:01.000Z
authors: ["Mike Patel"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=92e0c69edba5f344f7fca851ca961949"
---
<p>Do steps on part 1 before doing this </p>
<p>Part 1 - <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;e28f251adbe5b344f7fca851ca961961" rel="nofollow">https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;e28f251adbe5b344f7fca851ca961961</a></p>
<p>Login into your SN instance ad admin and create field on user table called Slack ID</p>
<p><img src="https://community.servicenow.com/a6bb715edb61f344f7fca851ca96199a.iix" /></p>
<p><img src="https://community.servicenow.com/24fbf112dba1f344f7fca851ca961922.iix" /></p>
<p>Once you have created Slack ID field create Rest Message. It should create Default Get automatically. Open that</p>
<p><img src="https://community.servicenow.com/e36cf9d6dba1f344f7fca851ca9619ce.iix" /></p>
<p>Change endpoint. Make sure to add token that you got from part 1.</p>
<p><img src="https://community.servicenow.com/0fec7d12dbe1f344f7fca851ca961937.iix" /></p>
<p>once you save the changes click on Preview Script Usage and copy code.</p>
<p><img src="https://community.servicenow.com/f45df51adbe1f344f7fca851ca9619cc.iix" /></p>
<p>Go to sys_script_include.list and create new script called SlackUsers</p>
<p>Script:</p>
<pre class="language-javascript"><code>var SlackUsers &#61; Class.create();
SlackUsers.prototype &#61; {

	getUser: function(){
		var r &#61; new sn_ws.RESTMessageV2(&#39;Slack Users&#39;, &#39;Default GET&#39;);
		var response &#61; r.execute();
		var responseBody &#61; response.getBody();
		var httpStatus &#61; response.getStatusCode();

		if(httpStatus &#61;&#61; 200){
			var parser &#61; new JSONParser();
			var parameterArr &#61; parser.parse(responseBody);
			for (var i &#61; 0; i &lt; parameterArr.members.length; i&#43;&#43;) {
				if(parameterArr.members[i].profile.email){
					var gr &#61; new GlideRecord(&#34;sys_user&#34;);
					gr.addQuery(&#34;email&#34;, parameterArr.members[i].profile.email);
					gr.query();
					if (gr.next()) {
						gr.u_slack_id &#61; parameterArr.members[i].id;
						gr.update();
					}

				}
			}
		}
	},

	type: &#39;SlackUsers&#39;
};</code></pre>
<p>To run it daily/weekly/Monthly</p>
<p>Create scheduled job</p>
<p>go to sysauto.list and click on New</p>
<p><img src="https://community.servicenow.com/67108e16dba5f344f7fca851ca961990.iix" /></p>
<p><img src="https://community.servicenow.com/f391ce1edbe5f344f7fca851ca961975.iix" /></p>
<p>That should import slack id on user record.</p>
<p><img src="https://community.servicenow.com/57a086dadba5f344f7fca851ca9619fa.iix" /></p>
<p> </p>
<p>I&#39;ll be creating another blog on how you can post interactive message that can be used for Approvals.</p>
<p> </p>