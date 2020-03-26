---
title: "Creating a Custom AutoNumber Counter"
date: 2018-10-23T20:20:23.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=85e8eac6dbd96b40b1b102d5ca96192a"
---
<p>Ever need an auto-incrementing number for a custom string field?  Just like the OOB Number field on the Task tables?  As usual, the simplest way is to leverage OOB functionality.</p>
<p>1. Create a new custom table:</p>
<p><img src="2be26a4edb956b40b1b102d5ca9619e7.iix" /></p>
<p>Uncheck the &#34;Create module&#34; field because you won&#39;t really need access to the table - we will NOT be creating any records in it.  Add a new String field called &#34;Number&#34;.</p>
<p>You can either use that new table as is, or as I like to do, use the new one as the Parent and create Child tables to do the actual counting.  I usually do it this way because you just know if you need 1 counter, you&#39;ll need another at some point.  That&#39;s why I check the &#34;Extensible&#34; field on this table and create child tables, keeping them together and sharing the one &#34;Number&#34; field.</p>
<p> </p>
<p><img src="8ad462c2db196b40b1b102d5ca961981.iix" /></p>
<p> </p>
<p>2. Create another table, extending it from the previous &#34;Custom Counter Base&#34; table:</p>
<p><img src="88c526cedb196b40b1b102d5ca9619c8.iix" /></p>
<p>Again, you can uncheck the &#34;Create module&#34; field.  Check the &#34;Auto-number&#34; field and fill in the details of the number you need created.  That will create the &#34;Number&#34; record which will do all the work for you.</p>
<p>Now that you have the tables setup, you can then use the following script to create new numbers:</p>
<pre class="language-javascript"><code>var nm &#61; new NumberManager(&#34;u_custom_counter_item&#34;);
var number &#61; nm.getNextObjNumberPadded();

or chain it all together

var number &#61; new NumberManager(&#34;u_custom_counter_item&#34;).getNextObjNumberPadded();

or set a field&#39;s default value

javascript:new NumberManager(&#34;u_custom_counter_item&#34;).getNextObjNumberPadded();</code></pre>
<p> </p>
<p>Creating the tables is unfortunately only required in order to create the Number record as it now has a reference field to the &#34;Table&#34; table.  You used to be able to enter names in a plain string field so no new tables were required to add this functionality.  A little bit of overhead, but nothing that will affect the platform.  Oh, well, progress and all.  :-)</p>
<p><strong>Note:</strong> setting a Service Catalog variable&#39;s &#34;Default value&#34; field to create a new value will increment the number counter by 2 for some reason.  And if used in a Service Portal, the number jumps by 8.  Not sure why this is happening, but you can use a GlideAjax call in an onLoad Catalog Client Script to get the number and have it increment properly by just 1.</p>
<p>Here&#39;s what your Script Include would look like:</p>
<pre class="language-javascript"><code>var CustomAjaxUtils &#61; Class.create();
CustomAjaxUtils.prototype &#61; Object.extendsObject(AbstractAjaxProcessor, {

	getCounterNumber: function() {
		var dataToReturn &#61; {};
		var tableName &#61; this.getParameter(&#34;sysparm_table_name&#34;);
		if (tableName){
			var nm &#61; new NumberManager(tableName);
			dataToReturn.number &#61; nm.getNextObjNumberPadded();		
		}
		return JSON.stringify(dataToReturn);
	},

	type: &#34;CustomAjaxUtils&#34;
});</code></pre>
<p>And your Catalog Client Script:</p>
<pre class="language-javascript"><code>function onLoad() {
	//get a new number
	var ga &#61; new GlideAjax(&#34;CustomAjaxUtils&#34;);  //name of the Script Include
	ga.addParam(&#34;sysparm_name&#34;, &#34;getCounterNumber&#34;);  //name of the function we want to call
	ga.addParam(&#34;sysparm_table_name&#34;, &#34;u_custom_counter_item&#34;);
	ga.getXML(u_displayData);

	function u_displayData(response){
		var answer &#61; JSON.parse(response.responseXML.documentElement.getAttribute(&#34;answer&#34;));  //convert the returned JSON string to an object
		g_form.setValue(&#34;number&#34;, answer.number);
	}
}</code></pre>
<p>Set the Catalog Client Script to only run on the Catalog Item view so the number is only generated when ordering the item.</p>