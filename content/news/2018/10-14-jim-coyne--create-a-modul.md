---
title: "Create a Module for this Instance Tool"
date: 2018-10-14T03:22:07.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=d189ac87db092300fece0b55ca961991"
---
<h5>Included in the <a href="community?id&#61;community_blog&amp;sys_id&#61;b3c843aadb892b40fece0b55ca961906" rel="nofollow">Developer Toolbox</a> Update Set available on Share (link in the &#34;Developer Toolbox&#34; post).</h5>
<p> </p>
<p>I&#39;m always trying to squeeze a little bit of extra productivity out of the platform everyday.  This tool simply creates a new Module in the System Update Sets Application which allows you to open the Remote Instance directly where you can then retrieve completed Update Sets.</p>
<p>It just ends up saving you a mouse click, but hey, work smarter, not harder.</p>
<p>It&#39;s a Related Links UI Action that appears on the Remote Instance form:</p>
<p><img src="93a928c7db092300fece0b55ca96193c.iix" /></p>
<p> </p>
<p>Clicking OK will then create the new Module: </p>
<p><img src="99c9e8c7db092300fece0b55ca9619c0.iix" /></p>
<p> </p>
<p>Here are the details for the UI Action:</p>
<p>Name: Create a Module for this Instance<br />Table: Remote Instance [sys_update_set_source]<br />Order: 100,000<br />Action name: u_fpc_create_instance_module<br />Active: checked<br />Show update: checked<br />Client: checked<br />Form link: checked<br />Hint: Create a link to this record in the Navigator<br />Onclick: u_fpcCreateInstanceModule();<br />Condition: gs.hasRole(&#34;admin&#34;)<br />Script:</p>
<pre class="language-javascript"><code>//client function that runs &#39;onclick&#39;
function u_fpcCreateInstanceModule() {
	if(confirm(&#34;Are you sure you want to create a new Module for this instance?&#34;)) {
		gsftSubmit(null, g_form.getFormElement(), &#34;u_fpc_create_instance_module&#34;);   //MUST call the &#39;Action name&#39; set in this UI Action
	}
}

//code that runs on server
//ensure call to server-side function with no browser errors
(function() {
	if (typeof window !&#61; &#34;undefined&#34;) {
		//drop out if running in a browser
		return;
	}

	//create a new Module record
	var gr &#61; new GlideRecord(&#34;sys_app_module&#34;);
	gr.initialize();
	//gr.setWorkflow(false);
	gr.u_preserve_during_clone &#61; true;  //field added by &#34;Preserve During Clone&#34; Update Set, if loaded
	gr.title &#61; &#34;Update Source - &#34; &#43; current.getValue(&#34;name&#34;);
	gr.name &#61; &#34;sys_update_set_source&#34;;
	gr.order &#61; 150;
	gr.application.setDisplayValue(&#34;System Update Sets&#34;);
	gr.link_type &#61; &#34;DETAIL&#34;;
	//gr.image &#61; &#34;images/icons/update_source.gif&#34;;
	gr.query &#61; &#34;sys_id&#61;&#34; &#43; current.getValue(&#34;sys_id&#34;);  //Arguments field
	var newId &#61; gr.insert();
	if (newId) {
		gs.addInfoMessage(&#34;A new Module, &lt;a href&#61;&#39;&#34; &#43; gr.getLink() &#43; &#34;&#39;&gt;&#34; &#43; gr.getValue(&#34;title&#34;) &#43; &#34;&lt;/a&gt;, was added to the System Update Sets Application&#34;);
	}
})();</code></pre>
<p> </p>
<p>What I normally do during the initial implementation is create the Remote Instance records for all the instances, create a module for them all and then deactivate the ones we would not be pulling in Update Sets into production from.  Once you clone down to your sub-production instances, set the Active field on the appropriate Modules.</p>
<p>So if you have a total of 3 instances, production, test and dev, you would have the following 2 modules:</p>
<ul><li>Update Source - dev</li><li>Update Source - test</li></ul>
<p>The &#34;Update Source - dev&#34; Module would only be active in the test instance so you can perform the first pull of your Updates Sets and the &#34;Update Source - test&#34; Module would only be active in the production instance so you can pull them into that one.  The dev instance would not need any of the Modules to be active because you would not be pulling in any Update Sets from another instance.</p>
<p>I then add a Clone Data Preserver which keeps the proper Modules active in your sub-production instances.  This is how I set it up:</p>
<p><img src="7c67e54fdb412300fece0b55ca961959.iix" /></p>
<p> </p>
<p>I&#39;ve attached the XML for the UI Action and Clone Data Preserver.</p>
<p>As always, try it out in your company&#39;s development instance first, or better yet, your own personal development instance.</p>