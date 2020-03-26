---
title: "Show All The Variables In A Structured Tabular Format In The Email Body"
date: 2019-03-04T16:17:59.000Z
authors: ["amlanpal"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ee8519acdb00bfc42be0a851ca961921"
---
<p>Hello All,</p>
<p> </p>
<p style="text-align: justify;">This Blog covers a quick and hopefully a useful solution to a commonly asked requirement, i.e., <span style="font-family: arial, helvetica, sans-serif;"><em><strong>h</strong></em><strong><em>ow can we show all the filled in variables in the email body in a structured tabular format?</em></strong></span></p>
<p style="text-align: justify;">A common answer to the above scenario is via using an Email Script. Now, let&#39;s jump into the resolution here. For demonstration purpose I have created a mock-up catalog item which looks like the below image. On submission of which the approver will be expecting to get an email with all the filled details in a structured format.</p>
<p><img src="https://community.servicenow.com/0fc599a0db40bfc42be0a851ca961922.iix" /> </p>
<p> </p>
<p style="text-align: justify;">To achieve the same, we need to write the Email Script which will fetch all the variables and then show them with the details being fetched dynamically in a tabular format. Then all we need to do, is to call the Email Script in your Email body (in the field &#39;Message HTML&#39;) as ${mail_script:email_script_name}.</p>
<p style="text-align: justify;">Below is the code snippet to be embedded in Email Script which you can always modify/tweak as per your requirement. <span style="font-family: arial, helvetica, sans-serif;"><em>Please note that the below script is defined to be worked in Global Scope.</em> </span></p>
<pre class="language-javascript"><code>var table &#61; current.getTableName();
var count &#61; 0;
if (table &#61;&#61; &#39;sysapproval_approver&#39;) {
	count &#61; 1;
} else {
	for(vars in current.variable_pool){
		count&#43;&#43;;
		break;
	}
}

if(count &gt; 0){
	var mvalue &#61; &#39;&#39;;
	var list &#61; [];
	var display &#61; [];
	template.print(&#39;&lt;table border&#61;&#34;1&#34;&gt;&#39;);
	
	//Query for the non-empty variables for this record
	//Catalog item and task variables pull from &#39;sc_item_option_mtom&#39; table
	if(table &#61;&#61; &#39;sc_req_item&#39; || table &#61;&#61; &#39;sc_task&#39; || table &#61;&#61; &#39;sysapproval_approver&#39;) {
		var itemVars &#61; new GlideRecord(&#39;sc_item_option_mtom&#39;);
		
		if(table &#61;&#61; &#39;sc_req_item&#39;){
			itemVars.addQuery(&#39;request_item&#39;, current.sys_id);
			
		}
		if(table &#61;&#61; &#39;sc_task&#39;){
			itemVars.addQuery(&#39;request_item&#39;, current.request_item.sys_id);
			
		}
		if(table &#61;&#61; &#39;sysapproval_approver&#39;){
			itemVars.addQuery(&#39;request_item&#39;, current.sysapproval.sys_id);
		}
		itemVars.addNotNullQuery(&#39;sc_item_option.value&#39;);
		
		//Exclude Label and Container variables
		itemVars.addQuery(&#39;sc_item_option.item_option_new.type&#39;, &#39;!&#61;&#39;, 11);
		itemVars.addQuery(&#39;sc_item_option.item_option_new.type&#39;, &#39;!&#61;&#39;, 19);
		itemVars.addQuery(&#39;sc_item_option.item_option_new.type&#39;, &#39;!&#61;&#39;, 20);
		itemVars.addQuery(&#39;sc_item_option.item_option_new.type&#39;, &#39;!&#61;&#39;, 24);
		itemVars.orderBy(&#39;sc_item_option.order&#39;);
		
		itemVars.query();
		while(itemVars.next()){
			template.print(&#34;&lt;tr&gt;&#34;);
			template.print(&#34;&lt;td&gt;&#34;&#43;itemVars.sc_item_option.item_option_new.question_text&#43;&#34;&lt;/td&gt;&#34;);
			mvalue &#61; itemVars.sc_item_option.value;
			
			// Check if the value is from the reference field
			if (itemVars.sc_item_option.item_option_new.type &#61;&#61; &#39;8&#39;) {
				var grRefTable &#61; new GlideRecord(itemVars.sc_item_option.item_option_new.reference);
				grRefTable.addQuery(&#39;sys_id&#39;,mvalue);
				grRefTable.query();
				if (grRefTable.next()) {
					mvalue &#61; grRefTable.getDisplayValue();
				}
				template.print(&#34;&lt;td&gt;&#34;&#43;mvalue&#43;&#34;&lt;/td&gt;&#34;);
				template.print(&#34;&lt;/tr&gt;&#34;);
			}
			
			// Check if the type is List Collector
			if(itemVars.sc_item_option.item_option_new.type &#61;&#61; &#39;21&#39;) {
				list &#61; itemVars.sc_item_option.value.split(&#39;,&#39;);				
				for(var i&#61;0; i&lt;list.length; i&#43;&#43;){
					var grListTable &#61; new GlideRecord(itemVars.sc_item_option.item_option_new.list_table);
					grListTable.addQuery(&#39;sys_id&#39;,list[i]);
					grListTable.query();
					if (grListTable.next()) {
						display.push(grListTable.getDisplayValue());						
					}
				}
				template.print(&#34;&lt;td&gt;&#34;&#43;display&#43;&#34;&lt;/td&gt;&#34;);
				template.print(&#34;&lt;/tr&gt;&#34;);
			}
			
			// Check if the type is Select Box
			if(itemVars.sc_item_option.item_option_new.type &#61;&#61; &#39;5&#39;) {
				var grQuestion &#61; new GlideRecord(&#39;question_choice&#39;);
				grQuestion.addQuery(&#39;question&#39;, itemVars.sc_item_option.item_option_new);
				grQuestion.addQuery(&#39;value&#39;, itemVars.sc_item_option.value.toString());
				grQuestion.query();
				if(grQuestion.next()){
					mvalue &#61; grQuestion.getValue(&#39;text&#39;);
				}
				template.print(&#34;&lt;td&gt;&#34;&#43;mvalue&#43;&#34;&lt;/td&gt;&#34;);
				template.print(&#34;&lt;/tr&gt;&#34;);
			}
			
			//For rest of the types
			if(itemVars.sc_item_option.item_option_new.type !&#61; &#39;21&#39; &amp;&amp; itemVars.sc_item_option.item_option_new.type !&#61; &#39;8&#39; &amp;&amp; itemVars.sc_item_option.item_option_new.type !&#61; &#39;5&#39; )
				{
				template.print(&#34;&lt;td&gt;&#34;&#43;mvalue&#43;&#34;&lt;/td&gt;&#34;);
				template.print(&#34;&lt;/tr&gt;&#34;);
			}
		}
	}
	template.print(&#34;&lt;/table&gt;&#34;);
}
</code></pre>
<p> </p>
<p>So, as per my demo requirement the approver will get an email notification once the item is submitted successfully. And that email should contain the filled questionnaires in a tabular format. Here is the snapshot how this will look like.</p>
<p><img src="https://community.servicenow.com/e10bdda0db04bfc42be0a851ca96199b.iix" /></p>
<p> </p>
<p style="text-align: justify;">Any suggestions/improvement recommendations/feedback on this blog are welcomed!</p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif;"><em>Cheers!</em></span></p>
<p><span style="font-family: arial, helvetica, sans-serif;"><em>Amlan</em></span></p>