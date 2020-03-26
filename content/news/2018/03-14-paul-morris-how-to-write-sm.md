---
title: "How to Write Smart GlideAjax Quickly Part "
date: 2018-03-13T14:24:11.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=53333bbddbb813404837f3231f9619d7"
---
<h1>How to Write Smart GlideAjax Quickly</h1>
<h3>Contents</h3>
<h4><a href="community?id&#61;community_blog&amp;sys_id&#61;f8ccee25dbd0dbc01dcaf3231f961978" rel="nofollow">Part 1</a> - The Approach</h4>
<h4><a href="community?id&#61;community_blog&amp;sys_id&#61;b23deae5dbd0dbc01dcaf3231f961992" rel="nofollow">Part 2</a> - Reusability</h4>
<h4>Part 3 - Extending Functionality</h4>
<h4><a href="community?id&#61;community_blog&amp;sys_id&#61;a7e599d1db2a97400be6a345ca96192a" target="_blank" rel="nofollow">Part 4</a> - Implementing GlideAjax with 1 LOC</h4>
<p> </p>
<h2>Extending Functionality</h2>
<p>In Part 2, we created a re-usable Script Include for getting a field from any given Reference field, to be called by a Client Script.</p>
<p>Today, we are going to extend this to handle multiple fields.</p>
<h2>Why Stop At One - Handle for Multiple Fields</h2>
<p>Let&#39;s first take a look at our existing function from <strong>ShackleFreeAjax</strong></p>
<pre class="language-javascript"><code>getPairValueDisplay: function(table, sysId, fieldName) {
	var gr &#61; new GlideRecordSecure(table);

	if (gr.get(sysId)) {

		return {
			value: gr.getValue(fieldName),
			displayValue: gr.getDisplayValue(fieldName)
		}
	}

} ;</code></pre>
<p>Lets extend this Function to handle multiple field names instead of just one.</p>
<p>In order to do this, we will need to do the following</p>
<ul><li>Accept multiple field names as a parameter</li><li>
<ul><li>Lets use an Array</li></ul>
</li><li>Return field values and display for multiple fields</li><li>
<ul><li>Lets store the pairs in a struct</li></ul>
</li></ul>
<p>We will add plurals to our function name to make it clear that the output is different.</p>
<pre class="language-javascript"><code>getPairValuesDisplays: function(table, sysId, fieldNames) {
		var fieldsPairValues &#61; {}; // New Structure to contain all our field values and displays
		var gr &#61; new GlideRecordSecure(table);

		if (gr.get(sysId)) {
			//Iterate through all our field names
			for(var f in fieldNames) { 
				var fieldName &#61; fieldNames[f];
				
				var value &#61;  gr.getValue(fieldName);
				if (value !&#61; null) { //Value is null if user has no read access
					var fieldValueDisplay &#61; {
						value: gr.getValue(fieldName),
						displayValue: gr.getDisplayValue(fieldName)
					};
					fieldsPairValues[fieldName] &#61; fieldValueDisplay; //Add field data
				}
				
			}
		}
		
		return fieldsPairValues;
		
	},</code></pre>
<p>We will also need to make some changes to our client data handler function.</p>
<p>Lets keep separations of concerns here - </p>
<ul><li>We will now expect a comma separated list of field names</li><li>
<ul><li>This will have to be turned into an Array</li></ul>
</li><li>Call a different function</li></ul>
<pre class="language-javascript"><code>	ajaxClientDataHandler: function() {

		//Get data from the form
		var tableName &#61; this.getParameter(&#39;sysparm_tablename&#39;);
		var sysId &#61; this.getParameter(&#39;sysparm_sysid&#39;);
		//Handle multiple field names
		var commaSeperatedFields &#61; this.getParameter(&#39;sysparm_fieldnames&#39;); 
		var fieldNames &#61; commaSeperatedFields.split(&#34;,&#34;);
		//Setup data to return to form
		var answer&#61;{};
		
		//Do server side stuff
		answer &#61; this.getPairValuesDisplays(tableName, sysId, fieldNames);

		//Encode data to send back to the form
		return new JSON().encode(answer);

	},</code></pre>
<p> </p>
<p>Out new Script Include, WhyStopAtOneAjax now looks like this</p>
<p> </p>
<pre class="language-javascript"><code>var WhyStopAtOneAjax &#61; Class.create();

WhyStopAtOneAjax.prototype &#61; Object.extendsObject(AbstractAjaxProcessor, {
	
	ajaxClientDataHandler: function() {

		//Get data from the form
		var tableName &#61; this.getParameter(&#39;sysparm_tablename&#39;);
		var sysId &#61; this.getParameter(&#39;sysparm_sysid&#39;);
		//Handle multiple field names
		var commaSeperatedFields &#61; this.getParameter(&#39;sysparm_fieldnames&#39;); 
		var fieldNames &#61; commaSeperatedFields.split(&#34;,&#34;);
		//Setup data to return to form
		var answer&#61;{};
		
		//Do server side stuff
		answer &#61; this.getPairValuesDisplays(tableName, sysId, fieldNames);

		//Encode data to send back to the form
		return new JSON().encode(answer);

	},
		
	getPairValuesDisplays: function(table, sysId, fieldNames) {
		var fieldsPairValues &#61; {}; // New Structure to contain all our field values and displays
		var gr &#61; new GlideRecordSecure(table);

		if (gr.get(sysId)) {
			//Iterate through all our field names
			for(var f in fieldNames) { 
				var fieldName &#61; fieldNames[f];
				
				var value &#61;  gr.getValue(fieldName);
				if (value !&#61; null) { //Value is null if user has no read access
					var fieldValueDisplay &#61; {
						value: gr.getValue(fieldName),
						displayValue: gr.getDisplayValue(fieldName)
					};
					fieldsPairValues[fieldName] &#61; fieldValueDisplay; //Add field data
				}
				
			}
		}
		
		return fieldsPairValues;
		
	},
	
	type: &#39;WhyStopAtOneAjax&#39;
			
});</code></pre>
<p> </p>
<p>Like good programmers, we are going to test our code before even thinking about our Client Script.</p>
<p>This is <strong>key </strong>to not wasting hours mucking around with Client Scripts! <strong>Make sure your server code</strong> <strong>works first!</strong></p>
<p>Below shows a quick little Test Harness I did to make sure the Display Values are being returned.</p>
<p>Use whatever tools you have at your disposal.</p>
<p>Let&#39;s focus on Department and Location fields, which will be our next requirement client side.</p>
<h3>User Profile</h3>
<p><img src="0d66e682db899784fc5b7a9e0f961939.iix" /></p>
<h3>Test Harness (Basic Example)</h3>
<pre class="language-javascript"><code>function positiveTestOne() {
  var table &#61; &#39;sys_user&#39;;
  var sysid &#61; gs.getUserID();
  var fields &#61; [&#39;department&#39;,&#39;location&#39;];
  var ajaxTest &#61; new WhyStopAtOneAjax();
  var answer &#61; ajaxTest.getPairValuesDisplays(table,sysid,fields);
  if (answer.department.displayValue !&#61; &#34;IT&#34;) {
    throw(&#39;FAIL: Department NOT IT&#39;);
  }
  if (answer.location.displayValue !&#61; &#34;Australia&#34;) {
    throw(&#39;FAIL: Location NOT America&#39;);
  }
}  

try{
  positiveTestOne();
} catch (e) {
  gs.addErrorMessage(e);
} finally {
  gs.addInfoMessage(&#39;Test Complete&#39;);
}</code></pre>
<p> </p>
<h2>Client Side</h2>
<p>A new requirement has emerged - retrieving Location and Company! We have already tested our code, so we are confident that this can work with Company instead of Department.</p>
<h3>Old code - Get Location</h3>
<p> </p>
<pre class="language-javascript"><code>function onChange(control, oldValue, newValue, isLoading, isTemplate) {

	if (isLoading || newValue &#61;&#61;&#61; &#39;&#39;) {
		return;
	}

	var ga &#61; new GlideAjax(&#39;ShackleFreeAjax&#39;); //Name of the Ajax Script Inclide
	ga.addParam(&#39;sysparm_name&#39;,&#39;ajaxClientDataHandler&#39;); //Method to call
	
	//Add new parameters for our new GlideAjax Class
	ga.addParam(&#39;sysparm_tablename&#39;,&#39;sys_user&#39;); //Table name
	ga.addParam(&#39;sysparm_sysid&#39;,newValue); //newValue
	ga.addParam(&#39;sysparm_fieldname&#39;,&#39;location&#39;); //Field name we want to retrieve
	ga.getXML(userCallback);}

function userCallback(response) {
	var answer &#61; response.responseXML.documentElement.getAttribute(&#34;answer&#34;);
	answer &#61; answer.evalJSON();
	setLocation(answer);
}

function setLocation(caller) { //returns only the values we need

	if (caller) {
		g_form.setValue(
			&#39;location&#39;, 
			caller.location.value, // use value
			caller.location.displayValue //set value to avoid round-trip
		);
	}

}</code></pre>
<h3>New code - Get Location &amp; Company</h3>
<p>We need to change the code to</p>
<ul><li>Use new Script Include</li><li>Pass multiple fields to server</li><li>Set Company field</li><li>Change function names to reflect code changes</li></ul>
<pre class="language-javascript"><code>function onChange(control, oldValue, newValue, isLoading, isTemplate) {

	if (isLoading || newValue &#61;&#61;&#61; &#39;&#39;) {
		return;
	}
	jslog(&#39;hi&#39;);
	var ga &#61; new GlideAjax(&#39;WhyStopAtOneAjax&#39;); //Name of the Ajax Script Inclide
	ga.addParam(&#39;sysparm_name&#39;,&#39;ajaxClientDataHandler&#39;); //Method to call
	
	//Add new parameters for our new GlideAjax Class
	ga.addParam(&#39;sysparm_tablename&#39;,&#39;sys_user&#39;); //Table name
	ga.addParam(&#39;sysparm_sysid&#39;,newValue); //newValue
	ga.addParam(&#39;sysparm_fieldnames&#39;,&#39;location,company&#39;); //Field name we want to retrieve
	ga.getXML(userCallback);
}

function userCallback(response) {
	var answer &#61; response.responseXML.documentElement.getAttribute(&#34;answer&#34;);
	answer &#61; JSON.parse(answer);
	setLocationAndCompany(answer);
}

function setLocationAndCompany(caller) { //returns only the values we need

	if (caller) {
		g_form.setValue(&#39;location&#39;, caller.location.value, caller.location.displayValue); //set value to avoid round-trip
		g_form.setValue(&#39;company&#39;, caller.company.value, caller.company.displayValue); //set value to avoid round-trip
	}

}</code></pre>
<p> </p>
<p>So there you have it!</p>
<p>You now have a GlideAjax Script include that can handle any table and fields!</p>
<p>See <a href="community?id&#61;community_blog&amp;sys_id&#61;a7e599d1db2a97400be6a345ca96192a" target="_blank" rel="nofollow">Part 4: Implementing GlideAjax with 1 LOC</a></p>