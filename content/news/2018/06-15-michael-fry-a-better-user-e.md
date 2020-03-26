---
title: "A better user experience for Transferring an Incident to a Request"
date: 2018-06-15T00:43:48.000Z
authors: ["Michael Fry"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=daecfc84dbb2db40b2102926ca961969"
---
<p>Ever try to create a Request from an Incident?</p>
<p><img src="49523c40dbbe9b40b2102926ca9619f6.iix" /></p>
<p>How many actually remember to navigate back to the Incident? What about if you want to transfer an Incident to a Request?</p>
<p>If you&#39;re ever used the HR application, there is a great Transfer Case UI action available that allows you to transfer a case from one case to another. The UI action calls a UI page, and the UI page gets some data from a script includes. With a few small changes, you can create a similar experience when transferring an Incident to a Request. (BTW - You can also make a solution to create a STD Change from an Incident and have the two records linked together - finally!)</p>
<p>In the UI action - new dialogClass(&#39;Transfer incident&#39;) makes the call to the UI Page:</p>
<pre class="language-markup"><code>function transferCase() {
	var sysId &#61; g_form.getUniqueValue();
	var dialogClass &#61; GlideModal ? GlideModal : GlideDialogWindow;
	var dialog &#61; new dialogClass(&#39;Transfer incident&#39;);
	dialog.setTitle(getMessage(&#39;Transfer Incident&#39;));
	dialog.setPreference(&#39;sysparm_sys_id&#39;, sysId);
	dialog.setPreference(&#39;sysparm_table_name&#39;, g_form.getTableName());
	dialog.setPreference(&#39;sysparm_subject_person&#39;, g_form.getValue(&#39;subject_person&#39;));
	dialog.render();
}</code></pre>
<p> </p>
<p>In the UI Page, HTML section, new TransfertoRequest().getCatItems() is the call to the script includes. You can see the area&#39;s to change any of the wording inside the dialog box:</p>
<p><img src="cb9530c8dbfe9b40b2102926ca96199c.iix" alt="" /></p>
<p>We&#39;ll get back to the UI Page Processing Script. In the script includes, we&#39;re just querying the catalog items we want to present as options for transferring too. We&#39;ve filtered out record producers, and STD Change Templates:</p>
<pre class="language-markup"><code>var TransferToRequest &#61; Class.create();
TransferToRequest.prototype &#61; {
	initialize: function() {
	},
	getCatItems: function() {
		var catitems &#61; new GlideRecord(&#34;sc_cat_item&#34;);
		catitems.addActiveQuery();
		catitems.addQuery(&#39;sc_catalogs&#39;,&#39;e0d08b13c3330100c8b837659bba8fb4&#39;);
		//filter out Record Producers
		catitems.addQuery(&#39;sys_class_name&#39;, &#34;!&#61;&#34;, &#39;sc_cat_item_producer&#39;);
		//filter out STD Change Templates
		catitems.addQuery(&#39;sys_class_name&#39;, &#34;!&#61;&#34;, &#39;std_change_record_producer&#39;);
		catitems.orderBy(&#34;sc_catalog&#34;);
		catitems.orderBy(&#34;name&#34;);
		catitems.query();
		var result &#61; [];
		var categories &#61; {};
			while (catitems.next()) {
				
				var categorySysId &#61; catitems.category.sys_id;
				var category &#61; catitems.category.title.toString();
				
				
				if (!categories[categorySysId]) {
					categories[categorySysId] &#61; {
						display: category,
						children: []
					};
					result.push(categories[categorySysId]);
				}
				categories[categorySysId].children.push({
					sys_id : catitems.getUniqueValue(),
					display : catitems.getDisplayValue(),
					//template : catitems.getValue(&#34;template&#34;),
					parent : category

</code></pre>
<p>Now for the UI Page Processing Script. This is where all the work is done! If you&#39;re using New Call, this script looks very similar to the business rule CallTypeChanged to Request. We&#39;re sending some data to the cart, inserting the new record, and then cancelling the Incident since we&#39;ve transferred it to a Request.</p>
<pre class="language-markup"><code>(function(_this) {
	var originalTask &#61; new GlideRecord(task_table_name);
	if (!originalTask.get(task_sys_id)) {
		gs.addErrorMessage(gs.getMessage(&#34;Could not find original case&#34;));
		return;
	}
	
	var reqFor &#61; originalTask.caller_id;
	var location &#61; originalTask.caller_id.location;
	var reqItem &#61; selected_service;
	var desc &#61; originalTask.description;
	var sdsc &#61; originalTask.short_description;
	
	//NEW_INCI_REF will trigger business rule Link back to the call that generated it
	var comments &#61; &#34;NEW_INCI_REF:&#34;&#43;originalTask.sys_id&#43;&#34; - &#34;&#43;originalTask.description.substring(0,100);
	
	var url &#61; &#34;com.glideapp.servicecatalog_cat_item_view.do?sysparm_id&#61;&#34; &#43; reqItem
	&#43; &#34;&amp;sysparm_user&#61;&#34; &#43; GlideStringUtil.urlEncode(reqFor)
	&#43; &#34;&amp;sysparm_location&#61;&#34; &#43; GlideStringUtil.urlEncode(location)
	&#43; &#34;&amp;sysparm_special_instructions&#61;&#34; &#43; GlideStringUtil.urlEncode(comments)
	//&#43; &#34;&amp;sysparm_stack&#61;&#34; &#43; current.getLink()
	&#43; &#34;&amp;sysparm_sdsc&#61;&#34; &#43; sdsc
	&#43; &#34;&amp;sysparm_comments&#61;&#34; &#43; originalTask.comments;
	
	
	response.sendRedirect(url);
	
	getCart();
	
	function getCart() {
		var cart &#61; new GlideRecord(&#39;sc_cart&#39;);
		var userid &#61; gs.getUserID();
		cart.addQuery(&#39;user&#39;, userid);
		cart.query();
		if (cart.next()) {
			// We already have a cart so override the requested for value and empty it
			cart.source_table &#61; &#39;incident&#39;;
			cart.requested_for &#61; reqFor;
			cart.special_instructions &#61; comments;
			cart.update();
			var cartItems &#61; new GlideRecord(&#39;sc_cart_item&#39;);
			cartItems.addQuery(&#39;cart&#39;, cart.sys_id);
			cartItems.deleteMultiple();
		} else {
			cart.initialize();
			cart.user &#61; userid;
			cart.requested_for &#61; reqFor;
			cart.special_instructions &#61; comments;
			cart.insert();
		}
		
		// Cancel original case
		originalTask.state &#61; 8;
		originalTask.close_code &#61; &#39;Resolved&#39;;
		originalTask.close_notes &#61; &#39;Incident transferred to a Request&#39;;
		//Populate group manager in assigned to if executed as admin
		if (gs.hasRole(&#39;admin&#39;) &amp;&amp; originalTask.assigned_to.nil())
			originalTask.assigned_to &#61; originalTask.assignment_group.manager;
		if(originalTask.assigned_to.nil())
			originalTask.assigned_to &#61; gs.getUserID();
		
		originalTask.comments &#61; gs.getMessage(&#34;Incident was cancelled and transferred to a Request&#34;);
		if (!originalTask.update()) {
			gs.addErrorMessage(gs.getMessage(&#34;Failed to close original case&#34;));
			return;
		}
	}
})(this);</code></pre>
<p> - - - - The end result - - - -</p>
<p><img src="a80df8c4dbb2db40b2102926ca961951.iix" alt="" /></p>
<p>We have a couple of helper business rules. One to query any open Incident Task(s) and close them if the parent state changes to Canceled. Another to pull some data from the Incident into the request, including setting the parent field on the request with the incident, so the two are linked together for reference in the future.</p>
<p>I&#39;ve attached an update set if you want to check it out. I hope you find this information helpful!</p>
<p>We are already working on another for creating a STD Change from an Incident.</p>
<p> </p>