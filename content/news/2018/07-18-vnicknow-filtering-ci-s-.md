---
title: "Filtering CIs A Reference Qualifier Example"
date: 2018-07-17T19:28:40.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=7b3139aedb9b9f002be0a851ca961909"
---
<p>So you&#39;ve worked hard getting your CMDB populated with all the objects that should fall under configuration management and/or be part of your service management processes like incident, problem, and change.  It is very likely that you now have hundreds, thousands, or even millions of CI&#39;s from which to choose when you are handling an incident or performing a change.  How can a user reasonably sort through them and choose the correct one?</p>
<p>While there are many strategies for creating filters in ServiceNow, in this short article I hope to provide an example of how you can use advanced <a title="Reference Qualifiers" href="https://docs.servicenow.com/bundle/kingston-platform-administration/page/script/server-scripting/concept/c_ReferenceQualifiers.html" target="_blank" rel="nofollow">reference qualifiers</a> on forms like incident or problem to narrow the available list of CI&#39;s so that the appropriate item is selected and tracked through its lifecycle.</p>
<p>The process requires the following 2 steps:</p>
<ol><li>Create a script include with the filter logic</li><li>Create dictionary override to use filter method on configuration item attribute</li></ol>
<p>Step 1 - Create script include</p>
<p><img src="9ca9bdaedbdf9f002be0a851ca961980.iix" width="605" height="194" /></p>
<p style="text-align: center;">Script Include Definition</p>
<p>Below is sample code that can be used for the script include to take a parameter of the current record and then evaluate the category value to create the filter.  Adjustments to the category switch will be required to match the categories used within your own organization.</p>
<pre class="language-javascript"><code>var RefQualUtils &#61; Class.create();
RefQualUtils.prototype &#61; {
	initialize: function() {		
	},
	
	getCIRefQual : function() {
		
		var filter &#61; &#39;sys_class_nameINSTANCEOFcmdb_ci^operational_status&#61;1&#39;;
		
		var cat &#61; current.category &#43; &#39;&#39;;
		
		switch(cat) {
			case &#39;software&#39;:
                  filter &#61; &#34;sys_class_nameINSTANCEOFcmdb_ci_appl^operational_status&#61;1&#34;;
                  break;
			case &#39;hardware&#39;:
                  filter &#61; &#34;sys_class_nameINSTANCEOFcmdb_ci_hardware^operational_status&#61;1&#34;;
                  break;
			case &#39;network&#39;:
                  filter &#61; &#34;sys_class_nameINSTANCEOFcmdb_ci_netgear^operational_status&#61;1&#34;;
                  break;
			case &#39;database&#39;:
                  filter &#61; &#34;sys_class_nameINSTANCEOFcmdb_ci_db_instance^operational_status&#61;1&#34;;
                  break;
			default:
                  filter &#61; &#34;sys_class_nameINSTANCEOFcmdb_ci^operational_status&#61;1&#34;;
                  break;
		}
		
		return filter;
	},

	type: &#39;RefQualUtils&#39;
};

</code></pre>
<p style="text-align: center;">Code Sample for Reference Qualifier</p>
<p>It is useful to note that the &#34;INSTANCEOF&#34; qualifier is needed if you want the define class and all of its child classes.  If you only set the class name to a specific class, then you will only get CIs within that one class.  One easy way to update the encoded queries used in the example is to open the list of CI (cmdb_ci.LIST in the filter navigator), and then create your own filter to show what you want for a given category.  Once you have the filter defined, just right-click on the right-most breadcrumb of the filter definition and choose &#34;Copy query&#34;.  You should then be able to paste it into the script include and have it applied as the filter for that category.</p>
<p>Step 2 - Define a dictionary override</p>
<p>The steps for specifying the reference qualifier may differ depending on your preference for navigating to the dictionary entry, but the following steps are based on how I get there using a Kingston instance.  First, open the table definition for the incident table and find the Column Name cmdb_ci.  When you open that record, you should be taken to the Dictionary Entry for configuration item.</p>
<p><img src="5fbc7962db93df002be0a851ca96194e.iix" width="595" height="228" /></p>
<p style="text-align: center;">Dictionary Entry for Configuration Item</p>
<p>Notice how the table reference changes to &#34;Task&#34; because incident is extended from class.  We do NOT want to change the Reference Qualifier definition as it exists on the task table, so we need to scroll down to the related lists and defined a dictionary override.</p>
<p><img src="553efd6edb93df002be0a851ca961919.iix" width="634" height="200" /></p>
<p style="text-align: center;">Dictionary Overrides on Task Table</p>
<p>You will likely need to create a New override for the incident table (the screenshot above has already done this).  Once in the New definition, simply choose the parameters as noted below and paste in the code sample provided.</p>
<p><img src="22be3de2dbd3df002be0a851ca9619ea.iix" width="593" height="197" /></p>
<p style="text-align: center;">Override the Reference Qualifier for the Incident table</p>
<p>This code sample is what is noted in the screenshot and calls our previously defined script include and passes in the current record for evaluation.</p>
<pre class="language-javascript"><code>javascript: new RefQualUtils().getCIRefQual(current);</code></pre>
<p> </p>
<p>That&#39;s it!  You can now test the functionality by going to the incident form, choose a category, then choose the configuration item explorer, and watch the available CIs change as you change the category type.</p>