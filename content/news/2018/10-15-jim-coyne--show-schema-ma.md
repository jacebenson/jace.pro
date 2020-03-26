---
title: "Show Schema Map Tools"
date: 2018-10-15T01:06:26.000Z
authors: ["Jim Coyne"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=eb04199fdbc16300fece0b55ca96195e"
---
<h5>Included in the <a href="community?id&#61;community_blog&amp;sys_id&#61;b3c843aadb892b40fece0b55ca961906" rel="nofollow">Developer Toolbox</a> Update Set available on Share (link in the &#34;Developer Toolbox&#34; post).</h5>
<p> </p>
<p>Here are some <a href="https://docs.servicenow.com/bundle/kingston-platform-administration/page/administer/navigation-and-ui/task/t_CreateAContextMenu.html" rel="nofollow">Context Menus</a> and <a href="https://docs.servicenow.com/bundle/kingston-platform-administration/page/administer/list-administration/concept/c_UIActions.html" rel="nofollow">UI Actions</a> that will open the schema map UI Pages in a new tab/window in your browser.  The &#34;(Old)&#34; versions will open the pre-Calgary (but still shipping) &#34;schema_map2&#34; UI Page and the others will open the newer &#34;generic_hierarchy_erd&#34; page.</p>
<p>They appear in the context menus for both forms and lists (including related lists):</p>
<p><img src="1ec799d3db056300fece0b55ca961930.iix" /></p>
<p> </p>
<p><img src="41381117db056300fece0b55ca96190d.iix" /></p>
<p> </p>
<p>Here is the newer page:</p>
<p><img src="b589d15bdb056300fece0b55ca96192d.iix" /></p>
<p> </p>
<p> </p>
<p>And the older one (pre-Calgary):</p>
<p><img src="22395197db056300fece0b55ca96193c.iix" width="645" height="598" /></p>
<p> </p>
<p>Here are the details of the list Context Menus:</p>
<p>Name: <strong>Show Schema Map</strong><br />Table: Global [global]<br />Menu: List Header<br />Type: Action<br />Order: 100,000<br />Active: checked<br />Condition: gs.hasRole(&#34;admin&#34;)<br />Action script:</p>
<pre class="language-javascript"><code>(function(){
	var url &#61; &#34;generic_hierarchy_erd.do?sysparm_attributes&#61;table_history&#61;,table&#61;&#34; &#43; g_list.tableName;
	url &#43;&#61; &#34;,show_internal&#61;true,show_referenced&#61;true,show_referenced_by&#61;true&#34;;
	url &#43;&#61; &#34;,show_extended&#61;true,show_extended_by&#61;true,table_expansion&#61;,spacing_x&#61;60,spacing_y&#61;90,nocontext&amp;sysparm_stack&#61;no&#34;;
	getTopWindow().popupOpenFocus(url, &#39;super_schema&#39;, 950, 700, &#39;&#39;, false, false);
})();</code></pre>
<p> </p>
<p>Name: <strong>Show Schema Map (Old)</strong><br />Table: Global [global]<br />Menu: List Header<br />Type: Action<br />Order: 100,000<br />Active: checked<br />Condition: gs.hasRole(&#34;admin&#34;)<br />Action script:</p>
<pre class="language-javascript"><code>(function u_showSchemaMapFromList(){
	getTopWindow().popupOpenFocus(&#39;schema_map2.do?sysparm_stack&#61;no&amp;sysparm_attributes&#61;table&#61;&#39; &#43; g_list.tableName, &#39;super_schema_old&#39;, 950, 700, &#39;&#39;, false, false);
})();</code></pre>
<p> </p>
<p>And the details on the form UI Actions:</p>
<p>Name: <strong>Show Schema Map</strong><br />Table: Global [global]<br />Order: 100,000<br />Action name: u_fpc_show_schema_map2<br />Active: checked<br />Show insert: checked<br />Show update: checked<br />Client: checked<br />Form context menu: checked<br />Hint: Display a schema map of this table in a new tab/window<br />Onclick: u_fpcShowSchemaMap2()<br />Condition: gs.hasRole(&#34;admin&#34;)<br />Script:</p>
<pre class="language-javascript"><code>function u_fpcShowSchemaMap2(){
	var url &#61; &#34;generic_hierarchy_erd.do?sysparm_attributes&#61;table_history&#61;,table&#61;&#34; &#43; g_form.tableName;
	url &#43;&#61; &#34;,show_internal&#61;true,show_referenced&#61;true,show_referenced_by&#61;true,show_extended&#61;true,show_extended_by&#61;true,&#34;;
	url &#43;&#61; &#34;table_expansion&#61;,spacing_x&#61;60,spacing_y&#61;90,nocontext&#34;;
	getTopWindow().popupOpenFocus(url, &#34;super_schema&#34;, 950, 700, &#34;&#34;, false, false);
}</code></pre>
<p> </p>
<p>Name: <strong>Show Schema Map (Old)</strong><br />Table: Global [global]<br />Order: 100,000<br />Action name: u_fpc_show_schema_map<br />Active: checked<br />Show insert: checked<br />Show update: checked<br />Client: checked<br />Form context menu: checked<br />Hint: Display a schema map of this table in a new tab/window<br />Onclick: u_fpcShowSchemaMap2()<br />Condition: gs.hasRole(&#34;admin&#34;)<br />Script:</p>
<pre class="language-javascript"><code>function u_fpcShowSchemaMap(){
	getTopWindow().popupOpenFocus(&#34;schema_map2.do?sysparm_stack&#61;no&amp;sysparm_attributes&#61;table&#61;&#34; &#43; g_form.tableName, &#34;super_schema_old&#34;, 950, 700, &#34;&#34;, false, false);
}</code></pre>
<p>I&#39;ve attached XML files so you can just import them into your instance. As always, try it out in your company&#39;s development instance first, or better yet, your own personal development instance.</p>
<p>Note: Based on an article by Mark Stanger over on the <a href="http://www.servicenowguru.com/system-ui/ui-actions-system-ui/schema-map-any-form" rel="nofollow">ServiceNowGuru site</a>.</p>
<p>Note: Updated version of this article - <a href="community?id&#61;community_blog&amp;sys_id&#61;e26e22eddbd0dbc01dcaf3231f9619f9" rel="nofollow">Showing a Schema Map From a List View</a></p>