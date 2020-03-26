---
title: "FpcUser  A More Useful User Object"
date: 2019-03-11T07:15:21.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=343a6f2adb84f70023f4a345ca96195d"
---
<h5>Included in the <a href="community?id&#61;community_blog&amp;sys_id&#61;b3c843aadb892b40fece0b55ca961906" rel="nofollow">Developer Toolbox</a> Update Set available on Share (link in the &#34;Developer Toolbox&#34; post).</h5>
<p> </p>
<p>The <a href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;madrid&amp;id&#61;GUserAPI" rel="nofollow">GlideUser</a> API gives us some nice methods to retrieve information on the currently logged-in user.  Things like the display name, first/last name, username, email address, etc...  Pretty limited though.  There&#39;s an undocumented &#34;getRecord()&#34; method that allows you get some more information, but because it is undocumented, it is difficult to use.</p>
<p>We are all used to using GlideRecords, so I figured why not create a class that will return an actual GlideRecord we can use and exploit.  Here&#39;s the details on the Script Include:</p>
<p>Name:  FpcUser<br />Client callable: NOT checked<br />Accessible from: All application scopes<br />Active: Checked<br />Script:</p>
<pre class="language-javascript"><code>var FpcUser &#61; Class.create();
FpcUser.prototype &#61; {
	initialize: function() {
	},

	getUserRecord: function(user){
		var user &#61; (typeof user !&#61;&#61; &#34;undefined&#34;) ?  user : gs.getUserID();
		if (user.trim() &#61;&#61; &#34;&#34;) {
			user &#61; gs.getUserID();
		}
		var result &#61; &#34;&#34;;
		var gr &#61; new GlideRecord(&#34;sys_user&#34;);
		//try getting the record with a sys_id first
		if (gr.get(user)){
			result &#61; gr;
		} else if (gr.get(&#34;user_name&#34;, user)){  //or the user_name
			result &#61; gr;
		}
		return result;
	},

	type: &#39;FpcUser&#39;
};</code></pre>
<p>You pass in a sys_id or user_name as a parameter in order to specify a specific user record that you want.  Or if you want the currently logged-in user, just skip the parameter and the method will default to the logged-in user&#39;s record.</p>
<p>Here&#39;s an example script which uses both the gs.getUser() and the new class to retrieve some information:</p>
<pre class="language-javascript"><code>var user &#61; &#34;&#34;;
var log &#61; [];

//get some user info using gs.getUser()
gsUser &#61; gs.getUser().getRecord();
log.push(gsUser);
log.push(gs.getUser().getDisplayName());
log.push(gs.getUser().getName());
log.push(gs.getUser().getEmail());
log.push(gsUser.getValue(&#34;title&#34;));
log.push(gsUser.getDisplayValue(&#34;manager&#34;));
log.push(gsUser.manager.user_name);
log.push(gsUser.manager.title);

//now with the new FpcUser class
var fpcUser &#61; new FpcUser().getUserRecord(user);
log.push(fpcUser);
log.push(fpcUser.getDisplayValue());
log.push(fpcUser.getValue(&#34;user_name&#34;));
log.push(fpcUser.getValue(&#34;email&#34;));
log.push(fpcUser.getValue(&#34;title&#34;));
log.push(fpcUser.manager.getDisplayValue());
log.push(fpcUser.manager.user_name);
log.push(fpcUser.manager.title);
log.push(fpcUser.manager.email.toString());

log;</code></pre>
<p>Change the first line to include a sys_id or a user_name to return a specific record.</p>
<p>If you run the script in the excellent <a href="https://developer.servicenow.com/app.do#!/share/contents/9650888_xplore_developer_toolkit?t&#61;PRODUCT_DETAILS" rel="nofollow">Xplore: Developer Toolkit</a>, you&#39;ll see some interesting results:</p>
<p><img src="https://community.servicenow.com/b27337aadb08f70023f4a345ca961918.iix" /></p>
<p>First thing you will notice is the getRecord() method does not return an actual GlideRecord, but the class does.  When I try to get some info on the manager, you&#39;ll see I can&#39;t dot-walk to get more info with getRecord(), but the new class allows full dot-walking because of the GlideRecord that is returned.  Maybe there is a way with getRecord(), but again, it&#39;s undocumented, so good luck using it.</p>
<p>And there&#39;s an added benefit to using the new class - it will return the most current information in the records, and not cached information from the last login.</p>
<p>Here are some example use cases:</p>
<p>Example use cases:</p>
<pre class="language-javascript"><code>Get the logged-in user&#39;s Manager&#39;s email address
var managerEmail &#61; new FpcUser().getUserRecord().manager.email.toString();

Get the logged-in user&#39;s phone number:
var phone &#61; new FpcUser().getUserRecord().getValue(&#34;phone&#34;);

Set default value to logged-in users&#39;s email address:
javascript:new FpcUser().getUserRecord().getValue(&#34;email&#34;);

Set default value to logged-in users&#39;s email address, but from a scoped app (thanks John):
javascript:new global.FpcUser().getUserRecord().getValue(&#34;email&#34;)</code></pre>
<p>I&#39;ve attached an XML export of the Script Include record if you want to just import it into your instance.  Remember to try it out in your own personal dev instance first.</p>