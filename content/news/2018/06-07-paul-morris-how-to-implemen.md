---
title: "How To Implement GlideAjax with  LOC"
date: 2018-06-06T13:29:48.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=a7e599d1db2a97400be6a345ca96192a"
---
<h1>How to Write Smart GlideAjax Quickly</h1>
<h3>Contents</h3>
<h4><a href="community?id&#61;community_blog&amp;sys_id&#61;f8ccee25dbd0dbc01dcaf3231f961978" rel="nofollow">Part 1</a> - The Approach</h4>
<h4><a href="community?id&#61;community_blog&amp;sys_id&#61;b23deae5dbd0dbc01dcaf3231f961992" rel="nofollow">Part 2</a> - Reusability</h4>
<h4><a href="community?id&#61;community_blog&amp;sys_id&#61;53333bbddbb813404837f3231f9619d7" rel="nofollow">Part 3 </a>- Extending Functionality</h4>
<h4>Part 4 - Implementing GlideAjax in 1 LOC</h4>
<h2>Implementing GlideAjax in 1 LOC</h2>
<p>In Part 3 of this serious, we looked at how to use Client Scripts and Script Includes to make server side calls for data. We solved the Too Much Information and Round Trip problems present with the existing g_form.getReference() and created a re-usable Ajax Script include we can re-use for any given table and fields. Our code is looking good, but there is still room for improvement. We are still having to write the same Client Scripts for each time we want to get data:</p>
<pre class="language-javascript"><code>var ga &#61; new GlideAjax(&#39;WhyStopAtOneAjax&#39;); 
ga.addParam(&#39;sysparm_name&#39;,&#39;ajaxClientDataHandler&#39;); 
ga.addParam(&#39;sysparm_tablename&#39;,table); 
ga.addParam(&#39;sysparm_sysid&#39;,newValue); 
ga.addParam(&#39;sysparm_fieldnames&#39;,fieldNames); 
ga.getXML(userCallback);

function userCallback(response) {
	var answer &#61; response.responseXML.documentElement.getAttribute(&#34;answer&#34;);
	answer &#61; answer.evalJSON();
	doSomething(answer);
}</code></pre>
<p>Surely this can be made to be more simple and re-usable like g_form.getReference().</p>
<h3>1 LOC like getReference()</h3>
<p>Part of the reason we liked getReference() so much was that it made it easy to return data from the server with one line of code! If only it didn&#39;t suffer from the Too Much Information and Round Trip problem. <br /><br />In this tutorial, we will take you through how to make your own have getReference() function that uses a similar callback but returns display values and only the data you need. You&#39;ll be able to go back to your existing g_form.getReference() code and do your server side calls with one line of code.</p>
<p>Firstly, let&#39;s make some changes to our existing Script Include &#34;WhyStopAtOneAjax&#34; from Part 3. In this example, we will create a new Script Include called SmartAjaxDataLookup. We will modify our getPairValuesDisplays() to store our values and displays in separate structures.</p>
<pre class="language-javascript"><code>var SmartAjaxDataLookup &#61; Class.create();

SmartAjaxDataLookup.prototype &#61; Object.extendsObject(AbstractAjaxProcessor, {
	
	ajaxClientDataHandler: function() {
		//Get data from the form
		var tableName &#61; this.getParameter(&#39;sysparm_tablename&#39;);
		var sysId &#61; this.getParameter(&#39;sysparm_sysid&#39;);
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
		var fieldsPairValues &#61; {};
		fieldsPairValues._displayValues &#61; {}; // Store display values separately
		var gr &#61; new GlideRecordSecure(table);
		if (gr.get(sysId)) {
			for(var f in fieldNames) {
				var fieldName &#61; fieldNames[f];
				var value &#61;  gr.getValue(fieldName);
				if (value !&#61; null) {
					fieldsPairValues._displayValues[fieldName] &#61; gr.getDisplayValue(fieldName);
					fieldsPairValues[fieldName] &#61; value;
				}
			}
		} 
		
		return fieldsPairValues;
	},
	
	type: &#39;SmartAjaxDataLookup&#39;
			
});</code></pre>
<h3>Create UI Script</h3>
<p>Just like our Server-side GlideAjax Script, Client Scripts can be made re-usable too via UI Scripts. </p>
<p>Let&#39;s add the common Client Script code to a Globally Scoped UI Script. We will want this object shared amongst all our scripts, so we only need one instance and will implement as a Singleton class.</p>
<p>We will also separate our GlideAjax and callback functions into functions.</p>
<p>processResponse() will also return a .getDisplayValue() function that we will use to get our display values.</p>
<pre class="language-javascript"><code>var s_ajax &#61; (function () {
	&#34;use strict&#34;;
	
	return {
		// Public Functions
		getReference: function(fieldName, tableName, callbackFunc, fieldsToGet) {
				
			var fieldValue &#61; g_form.getValue(fieldName);
			
			var ga &#61; new GlideAjax(&#39;AjaxSmartDataLookup&#39;); //Name of the Ajax Script Inclide
			ga.addParam(&#39;sysparm_name&#39;,&#39;ajaxClientDataHandler&#39;); //Method to call
			ga.addParam(&#39;sysparm_tablename&#39;,tableName); //Table name
			ga.addParam(&#39;sysparm_sysid&#39;, fieldValue); //newValue
			ga.addParam(&#39;sysparm_fieldnames&#39;,fieldsToGet.join(&#34;,&#34;)); //Field names we want to retrieve
			ga.getXML(
				function(response) {
					processResponse(response,callbackFunc);
				}
			);
		},
		
		type: &#39;SmartAjax&#39;
	};
	
	// Private Functions
	function processResponse(response,callbackFunc) {
		var answer &#61; response.responseXML.documentElement.getAttribute(&#34;answer&#34;);
		answer &#61; JSON.parse(answer);
		console.log(answer);
		answer.getDisplayValue &#61; function(fieldName) {
			if (this._displayValues.hasOwnProperty(fieldName))
				return this._displayValues[fieldName];
			else
				throw(&#34;Error - Provided field &#39;&#34; &#43; fieldName &#43; &#34;&#39; is an invalid field and has no Display Value!&#34;);
		};
		callbackFunc(answer);
	}
	
})();</code></pre>
<p><strong>Developer Note</strong><br /><br />While making changes to UI Scripts, ensure you clear your browsers cache.<br />Refreshing the browser with cntrl-F5 or running cache.do usually does the trick.</p>
<p><a name="global_ui_script"></a></p>
<h4>Global UI Script</h4>
<p>Unlike Server-Side scripts, Global UI Scripts are loaded on to every page (with the exclusion of Service Portal, which we will address later). If you don&#39;t plan on using this script across your entire implementation, you might want to deselect the &#39;Gobal&#39; flag. This will stop the script from loading in every page. You&#39;ll have to add the code below to get access to SmartAjax Script Include.</p>
<pre class="language-javascript"><code>function onLoad() {
        //Type appropriate comment here, and begin script below
        ScriptLoader.getScripts(&#39;SmartAjax.jsdbx&#39;, function(){});
}

</code></pre>
<h5>Limitations</h5>
<p>Using a non-global UI Script, you can not reliably use the SmartAjax functionality in an onLoad script. Sometimes the UI Script will load in time, sometimes it won&#39;t. If you need to run any SmartAjax code onLoad, you will have to place it in the second parameter function.<br />Make sure all your onChange scripts that call SmartAjax have an isLoading check before any code runs.</p>
<pre class="language-javascript"><code>if (isLoading) {
	return;
}</code></pre>
<p>If you need to do any logic on load, it is generally best to minimise server lookups and find alternatives to GlideAjax, such as Scratchpad and Business Rules.</p>
<p> </p>
<h4>Smarter coding</h4>
<p>Good function should have as few parameters as possible. Our getReference() function is starting to get a little messy, with four parameters being passed in.</p>
<pre class="language-javascript"><code>getReference: function(fieldName, tableName, callbackFunc, fieldsToGet) {</code></pre>
<p>We can derive the Table name from the field being passed in using the g_from API.<br />To access it from this script, we need to reference it from window.</p>
<pre class="language-javascript"><code>getReference: function(fieldName, callbackFunc, fieldsToGet) {
		
	var tableName &#61; window.g_form.getGlideUIElement(fieldName).reference;
	var fieldValue &#61; window.g_form.getValue(fieldName);
	
	var ga &#61; new GlideAjax(&#39;SmartAjaxDataLookup&#39;); //Name of the Ajax Script Inclide
	ga.addParam(&#39;sysparm_name&#39;,&#39;ajaxClientDataHandler&#39;); //Method to call
	ga.addParam(&#39;sysparm_tablename&#39;,tableName); //Table name
	ga.addParam(&#39;sysparm_sysid&#39;, fieldValue); //newValue
	ga.addParam(&#39;sysparm_fieldnames&#39;,fieldsToGet.join(&#34;,&#34;)); //Field names we want to retrieve
	ga.getXML(
		function(response) {
			processResponse(response,callbackFunc);
		}
	);
	return fieldValue;
},</code></pre>
<h3>Client Script</h3>
<p>Lets take a look at my favorite OOTB example from previous entries in the series, Client Script &#34;(BP) Set Location to User&#34;</p>
<pre class="language-javascript"><code>onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || (g_form.isLiveUpdating &amp;&amp; g_form.isLiveUpdating()))
      return;

   if (newValue &#61;&#61; &#39;&#39;) {
      g_form.setValue(&#39;location&#39;, &#39;&#39;);
      return;
   }
   if (!g_form.hasField(&#39;location&#39;))
      return;
   var caller &#61; g_form.getReference(&#39;caller_id&#39;, setLocation);
}

function setLocation(caller) {
   if (caller)
       g_form.setValue(&#39;location&#39;, caller.location);
}</code></pre>
<p>We can improve the performance of this Script easily now using g_ajax.</p>
<ul><li>Substitute g_form.getReference() call with s_ajax.getReference()</li><li>Add third parameter array of fields to retrieve</li><li>Add third parameter to g_form.setValue() caller.getDisplayValue(&#39;location&#39;)</li></ul>
<p> </p>
<pre class="language-javascript"><code>function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading)
      return;
	
	if (newValue &#61;&#61; &#39;&#39;) {
      g_form.setValue(&#39;location&#39;, &#39;&#39;);
      return;
   }
	
   if (!g_form.hasField(&#39;location&#39;))
      return;
	
   var caller &#61; s_ajax.getReference(&#39;caller_id&#39;,setLocation,[&#39;location&#39;]);
}

function setLocation(caller) { 
	if (caller) {
		g_form.setValue(&#39;location&#39;, caller.location, caller.getDisplayValue(&#39;location&#39;)); //set value to avoid round-trip
	}
}</code></pre>
<p>We have refactored our AJAX code down to 1 LOC!</p>
<p>But our journey isn&#39;t over yet.</p>
<p>There is a bit of work involved with getting this working in Service Portal.</p>
<p><a name="working_with_sp"></a></p>
<h3>Working with Service Portal </h3>
<p>To get this Script working in Service Portal, we will need to fix the following problems:</p>
<ul><li>UI Scripts do not have access to g_form in Service Portal</li><li>ServicePortal GlideForm does not have getGlideUIElement to get the table name</li></ul>
<h4>Where did GlideForm go?</h4>
<p>UI Scripts in Service Portal do not have access to window.g_form.<br />Not only that, they do not have access to g_form at all. There is currently no way (that  I am aware of) to call g_form API directly from a UI Script in Service Portal. This isn&#39;t a deal breaker though - we will just need to pass it in.</p>
<p>First, create a global variable called formHandler and replace all existing window.g_form with the new variable.</p>
<pre class="language-markup"><code>	&#34;use strict&#34;;
	
	//Class variables
	var formHandler;</code></pre>
<p>Create a public function to set the formHandler:</p>
<pre class="language-javascript"><code>//Service Portal does not have access to g_form, so need to pass it in for SP use
//use s_ajax.setFormHandler(g_form) in onLoad Client Script of order 1, SP only
setFormHandler: function(newFormHandler) {
	formHandler &#61; newFormHandler;
},</code></pre>
<p>Create a private function to default the formHandler when window.g_form is accessible:</p>
<pre class="language-javascript"><code>function setDefaultFormHandlerWhenUndefined() {
	if (formHandler &#61;&#61; undefined)
		formHandler &#61; window.g_form;
}</code></pre>
<p>Replace all existing window.g_form with the new variable:</p>
<pre class="language-javascript"><code>setDefaultFormHandlerWhenUndefined();	
var tableName &#61; formHandler.getGlideUIElement(fieldName).reference;
var fieldValue &#61; formHandler.getValue(fieldName);</code></pre>
<p>Your code should now look like this</p>
<pre class="language-javascript"><code>var s_ajax &#61; (function () {
	&#34;use strict&#34;;
	
	//Class variables
	var formHandler;
	
	return {
		
		/* Public Functions */
		
		//Service Portal does not have access to g_form, so need to pass it in for SP use
		//use s_ajax.setFormHandler(g_form) in onLoad Client Script of order 1, SP only
		setFormHandler: function(newFormHandler) {
			formHandler &#61; newFormHandler;
		},
		
		getReference: function(fieldName, callbackFunc, fieldsToGet) {
			setDefaultFormHandlerWhenUndefined();	
			var tableName &#61; formHandler.getGlideUIElement(fieldName).reference;
			var fieldValue &#61; formHandler.getValue(fieldName);
			
			var ga &#61; new GlideAjax(&#39;SmartAjaxDataLookup&#39;); //Name of the Ajax Script Inclide
			ga.addParam(&#39;sysparm_name&#39;,&#39;ajaxClientDataHandler&#39;); //Method to call
			ga.addParam(&#39;sysparm_tablename&#39;,tableName); //Table name
			ga.addParam(&#39;sysparm_sysid&#39;, fieldValue); //newValue
			ga.addParam(&#39;sysparm_fieldnames&#39;,fieldsToGet.join(&#34;,&#34;)); //Field names we want to retrieve
			ga.getXML(
				function(response) {
					processResponse(response,callbackFunc);
				}
			);
			return fieldValue;
		},
		
		type: &#39;SmartAjax&#39;
	};
	
	//Private Functions
	function setDefaultFormHandlerWhenUndefined() {
		if (formHandler &#61;&#61; undefined)
			formHandler &#61; window.g_form;
	}
	
	function processResponse(response,callbackFunc) {
		var answer &#61; response.responseXML.documentElement.getAttribute(&#34;answer&#34;);
		answer &#61; JSON.parse(answer);
		console.log(answer);
		answer.getDisplayValue &#61; function(fieldName) {
			if (this._displayValues.hasOwnProperty(fieldName))
				return this._displayValues[fieldName];
			else
				throw(&#34;Error - Provided field &#39;&#34; &#43; fieldName &#43; &#34;&#39; is an invalid field and has no Display Value!&#34;);
		};
		callbackFunc(answer);
	}
	
})();</code></pre>
<h4>Alternative to getGlideUIElement </h4>
<p>GlideForm has 3 different implementations depending on which interface you are using (Service Portal, Catalogue Items and Forms).<br />You can find a list of <a href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/build/service-portal/concept/unsupported_client_scripts.html" rel="nofollow">supported client side APIs</a> for Service Portal on the Product Documentation web site, where you will see g_form.getGlideUIElement() is not supported. I have tested it just in case and can confirm that the function does not work. We will need to find another function that will give us an alternative.</p>
<p>After some experimentation, I found that we can use use g_form.getField() and then the .refTable property to get the Table name anyway.<br />Please note that this function is <strong>not supported or documented</strong>, but I was not able to find any alternative. Please let me know in the comments below if you have any alternative solutions.</p>
<p>Carrying on, lets make a private function to handle the different interfaces:</p>
<pre class="language-javascript"><code>function getTableName(fieldName) {
	var tableName&#61;&#39;&#39;;
	try {
		tableName &#61; formHandler.getGlideUIElement(fieldName).reference;
	} catch (e) {
		tableName &#61; formHandler.getField(fieldName).refTable; //SP does not support getGlideUIElement
	}
	return tableName;
}</code></pre>
<p>And substitute it with our existing code</p>
<pre class="language-javascript"><code>var tableName &#61; getTableName(fieldName);</code></pre>
<p>Our getReference() function should look like this </p>
<pre class="language-javascript"><code>getReference: function(fieldName, callbackFunc, fieldsToGet) {
	setDefaultFormHandlerWhenUndefined();
	
	var tableName &#61; getTableName(fieldName);
	var fieldValue &#61; formHandler.getValue(fieldName);
	
	var ga &#61; new GlideAjax(&#39;OneLOCAjax&#39;); //Name of the Ajax Script Inclide
	ga.addParam(&#39;sysparm_name&#39;,&#39;ajaxClientDataHandler&#39;); //Method to call
	ga.addParam(&#39;sysparm_tablename&#39;,tableName); //Table name
	ga.addParam(&#39;sysparm_sysid&#39;, fieldValue); //newValue
	ga.addParam(&#39;sysparm_fieldnames&#39;,fieldsToGet); //Field names we want to retrieve
	ga.getXML(
		function(response) {
			processResponse(response,callbackFunc);
		}
	);
},</code></pre>
<h4>Passing in the form handler</h4>
<p>One last step to get this working in Service Portal.<br />For any Catalog Item or Table you need this script, create a new onLoad Client Script.<br /><br />In this example, we will create a Catalog Client Script.<br />Be sure to set the &#39;UI Type&#39; to &#34;Mobile / Service Portal&#34; so it only runs for Service Portal.<br />Ensure your Client Script loads after the ScriptLoader call (if not using global UI Script) but before any other Client Script that calls s_ajax.</p>
<p><img src="4b0f4c29dbfa5b40200f0b55ca96196b.iix" /><img style="max-width: 100%; max-height: 480px;" src="undefined.iix" /></p>
<p>This is needed for your other Client Scripts that use s_ajax to work in Service Portal, without needing to create separate scripts. You can simply use your existing code.</p>
<p> </p>
<p><img src="daaf006ddbfa5b40200f0b55ca9619a8.iix" /><img style="max-width: 100%; max-height: 480px;" src="undefined.iix" /></p>
<h4>Adding the UI Script to your Service Portal Theme</h4>
<p>Now that all our code is setup, we need to add the UI Script to our Service Portal theme - even if you have set the &#39;Global&#39; flag.<br /><br />Navigate to &#34;Service Portal &gt; Themes&#34; and select the theme being used by your Service Portal.<br />Scroll to the bottom of the Theme form to the Related Lists.<br />Select &#39;JS Includes&#39; and click New<br /><br /></p>
<p><img src="1456dca1dbbe5b40200f0b55ca9619b8.iix" /></p>
<p>With &#39;Source&#39; set as &#34;UI Script&#34;, select the UI Script that contains your GlideAjax code and select Save.</p>
<p>Your 1 LOC Ajax is now usable in Service Portal.</p>
<h3>Final Code</h3>
<p>Your final UI Script should look like this</p>
<pre class="language-javascript"><code>var s_ajax &#61; (function () {
	&#34;use strict&#34;;
	
	//Class variables
	var formHandler;
	
	return {
		
		/* Public Functions */
		
		//Service Portal does not have access to g_form, so need to pass it in for SP use
		//use s_ajax.setFormHandler(g_form) in onLoad Client Script of order 1, SP only
		setFormHandler: function(newFormHandler) {
			formHandler &#61; newFormHandler;
		},
		
		getReference: function(fieldName, callbackFunc, fieldsToGet) {
			setDefaultFormHandlerWhenUndefined();	
			var tableName &#61; getTableName(fieldName);
			var fieldValue &#61; formHandler.getValue(fieldName);
			
			var ga &#61; new GlideAjax(&#39;SmartAjaxDataLookup&#39;); //Name of the Ajax Script Inclide
			ga.addParam(&#39;sysparm_name&#39;,&#39;ajaxClientDataHandler&#39;); //Method to call
			ga.addParam(&#39;sysparm_tablename&#39;,tableName); //Table name
			ga.addParam(&#39;sysparm_sysid&#39;, fieldValue); //newValue
			ga.addParam(&#39;sysparm_fieldnames&#39;,fieldsToGet.join(&#34;,&#34;)); //Field names we want to retrieve
			ga.getXML(
				function(response) {
					processResponse(response,callbackFunc);
				}
			);
			return fieldValue;
		},
		
		type: &#39;SmartAjax&#39;
	};
	
	//Private Functions
	function setDefaultFormHandlerWhenUndefined() {
		if (formHandler &#61;&#61; undefined)
			formHandler &#61; window.g_form;
	}
	
	function getTableName(fieldName) {
		var tableName&#61;&#39;&#39;;
		try {
			tableName &#61; formHandler.getGlideUIElement(fieldName).reference;
		} catch (e) {
			tableName &#61; formHandler.getField(fieldName).refTable; //SP does not support getGlideUIElement
		}
		return tableName;
	}
	
	function processResponse(response,callbackFunc) {
		var answer &#61; response.responseXML.documentElement.getAttribute(&#34;answer&#34;);
		answer &#61; JSON.parse(answer);
		console.log(answer);
		answer.getDisplayValue &#61; function(fieldName) {
			if (this._displayValues.hasOwnProperty(fieldName))
				return this._displayValues[fieldName];
			else
				throw(&#34;Error - Provided field &#39;&#34; &#43; fieldName &#43; &#34;&#39; is an invalid field and has no Display Value!&#34;);
		};
		callbackFunc(answer);
	}
	
})();</code></pre>
<h3><br />Conclusion</h3>
<p>You now have a API to use GlideAjax to retrieve data from the server with 1 LOC.!</p>
<pre class="language-javascript"><code>var fieldValue &#61; s_ajax.getReference(referenceField,callbackFunction, arrayOfFieldsToGet);</code></pre>
<p>In a Client Script:</p>
<pre class="language-markup"><code>function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading)
      return;
	
	if (newValue &#61;&#61; &#39;&#39;) {
      g_form.setValue(&#39;location&#39;, &#39;&#39;);
      return;
   }
	
   if (!g_form.hasField(&#39;location&#39;))
      return;
	
   var caller &#61; s_ajax.getReference(&#39;caller_id&#39;,setLocation,[&#39;location&#39;]);
}

function setLocation(caller) { 
	if (caller) {
		g_form.setValue(&#39;location&#39;, caller.location, caller.getDisplayValue(&#39;location&#39;)); //set value to avoid round-trip
	}
}</code></pre>
<p>The final code can be downloaded via the Share Project page <a href="https://developer.servicenow.com/app.do#!/share/contents/5672333_smartajax_write_glideajax_data_lookups_in_1_loc?v&#61;1.01&amp;t&#61;PRODUCT_DETAILS" target="_blank" rel="nofollow">SmartAjax - Write GlideAjax Data Lookups in 1 L.O.C.</a></p>
<p>If you found this content useful, please bookmark and rate the Share App :) :) :)<br /><br />Thanks! </p>