---
title: "Create a Module from this Query Tool"
date: 2015-08-25T08:42:28.000Z
authors: ["Jim Coyne"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=fc2e266ddbd0dbc01dcaf3231f96196f"
---
<h5>Included in the <a href="community?id&#61;community_blog&amp;sys_id&#61;b3c843aadb892b40fece0b55ca961906" rel="nofollow">Developer Toolbox</a> Update Set available on Share (link in the &#34;Developer Toolbox&#34; post).</h5>
<p> </p>
<p>Another entry to the useful tools series (<a class="jive_macro_thread jive_macro" title="" href="community?id&#61;community_question&amp;sys_id&#61;07b18f69db98dbc01dcaf3231f9619c6" rel="nofollow">&#34;Preview GlideRecord Script&#34; Tool</a>, <a class="jive_macro_thread jive_macro" title="" href="community?id&#61;community_question&amp;sys_id&#61;60fc4369db9cdbc01dcaf3231f961947" rel="nofollow">&#34;Grab Grouped Information&#34; Tool</a>, <a class="jive_macro_thread jive_macro" title="" href="community?id&#61;community_question&amp;sys_id&#61;16434fe1dbd8dbc01dcaf3231f9619c4" rel="nofollow">&#34;View Data to Preserve&#34; Tool</a> and <a class="jive_macro jive_macro_blogpost" title="" href="community?id&#61;community_blog&amp;sys_id&#61;06ade2a9dbd0dbc01dcaf3231f961997" rel="nofollow">&#34;Clear User Settings&#34; Tool</a>), here is the &#34;Create a Module from this Query&#34; tool.   It came to be because I was searching through some records and thought that I really should add a Module for the admins and then I wished I could just turn this query into a Module.</p>
<p> </p>
<p>A <a title="ki.servicenow.com/index.php?title&#61;Context_Menus#gsc.tab&#61;0" href="http://wiki.servicenow.com/index.php?title&#61;Context_Menus#gsc.tab&#61;0" rel="nofollow">UI Context Menu</a>, it allows you to create a module from a List View that you have filtered down (or not) to a specific set of criteria.   Just go to a list of records, filter it down to what records you want to see and then select the &#34;Create a Module from this Query&#34; menu item from the List View&#39;s header context menu (it only appears for users with the &#34;admin&#34; role):</p>
<p><img src="b8b84553db816300fece0b55ca96196f.iix" /></p>
<p>You&#39;ll get a confirmation dialog...</p>
<p><img src="464945d3db816300fece0b55ca961972.iix" /></p>
<p>...and once you confirm, the Module record will be created and you&#39;ll be redirected to the record to finish configuring it:</p>
<p><img class="jive-image image-2" style="height: 242px; width: 620px;" src="1c9298c6dbd49704ed6af3231f961968.iix" alt="_Screenshot_003.png" /></p>
<p>It creates the record with the table name, view and condition(s).   Add the Title, the Application menu it should show up in, the Order, etc... and you are all set.   I tried to write it without creating the record first, but the Filter field would not default properly past the first condition.</p>
<p> </p>
<p> </p>
<p>Here&#39;s the details for the UI Context Menu record you need to create:</p>
<p>Table: Global [global]</p>
<p>Menu: List Header</p>
<p>Type: Action</p>
<p>Name: Create a Module from this Query</p>
<p>Order: 100,000</p>
<p>Active: checked</p>
<p>Condition: gs.hasRole(&#34;admin&#34;)</p>
<p>Action Script:</p>
<pre class="language-javascript"><code>(function u_createModuleFromQuery(){
	//skip the creation unless confirmed by the user
	if(!confirm(&#34;Are you sure you want to create a new Module?\n\nA new record will be created and you will be redirected to it in order to finish its configuration.&#34;))
		return;

	//create the record
	var gr &#61; new GlideRecord(&#34;sys_app_module&#34;);
	gr.initialize();
	gr.link_type &#61; &#34;LIST&#34;;
	gr.name &#61; g_list.tableName;
	gr.filter &#61; g_list.getQuery();
	gr.view_name &#61; g_list.getView();
	var newModule &#61; gr.insert();
	//and then redirect the user to the new record
	var gu &#61; new GlideURL(&#34;sys_app_module.do&#34;);
	gu.addParam(&#34;sys_id&#34;, newModule);
	window.location &#61; gu.getURL();
})();</code></pre>
<p> </p>
<p>You will not use it often, but it&#39;s worth having for those times you do need it.  </p>
<p>I&#39;ve attached an XML file so you can just import it into your instance. As always, try it out in your company&#39;s development instance first, or better yet, your own personal development instance.</p>
<p><strong>Updated October 14, 2018 with new name, script and screenshots.</strong></p>