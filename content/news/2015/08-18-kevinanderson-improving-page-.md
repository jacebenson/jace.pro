---
title: "Improving pageload performance for readonly form variables"
date: 2015-08-17T20:47:26.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=aecd62e9dbd0dbc01dcaf3231f9619c1"
---
<p><span style="font-size: 10.0pt;">Our team had an issue arise recently that was an interesting problem to correct.   We have quite a few Catalog Item forms built on top of the tables sc_task and sc_req_item.   A request was made a few development cycles ago to apply a read only state to all form variables when the user is viewing a submitted form as a part of a RITM.</span></p><p><span style="font-size: 10.0pt;">The original solution that was developed, introduced a severe client-side performance hit that was resulting in load times that were as long almost 1 minute for the form to fully render client side.     The performance issue was due to the manner that the client side script was setting the variable fields to the read only state.   The original code leveraged client side GlideRecord queries that used synchronous database requests for each field.   Some of our forms could have 40   or more variables on them, and with each variable field related query taking on average 0.3 seconds, we began to get complaints from users experiencing painfully long page load times.</span></p><p><span style="font-size: 10.0pt;"><br/></span></p><p style="padding-left: 30px;"><strong>Original client side code</strong></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14404435551082223" jivemacro_uid="_14404435551082223">
<p style="margin-left: .25in;"><span style="font-size: 8.0pt;">//Client script - Set Variables Read-Only</span></p>
<p style="margin-bottom: .0001pt;">                             <span style="font-size: 8.0pt;">// if (g_user.hasRole('admin'))</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                       //                                 return;</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                       </span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                       var map = gel('variable_map');</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                       var cat_form = new ServiceCatalogForm('ni', true, true);</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                     var items = map.getElementsByTagName("item");</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                       for (var i = 0; i &lt; items.length; i++) {</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                               var item = items.item(i);</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                               var id = item.id;</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                               var name = item.getAttribute('qname');</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                               var optionId = getItemOptionID(id);</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                               var nm = new NameMapEntry(name, "ni.VE" + optionId);</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                               cat_form.addNameMapEntry(nm);</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                               if(g_form.getValue(name)=='' || g_form.getValue(name)=='false')</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                                           {</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                                                                       cat_form.setDisplay(name,false);</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                                           }</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                             else</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                                               {</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                                                                       cat_form.setReadonly(name,true);</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                                                                       if(name=='comments') //Hide Comments container if comments field is blank</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                                                                       {</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                                                                                                               if(g_form.getValue('comments') == '')</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                                                                                                               {</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                                                                                                                                                       g_form.setDisplay('commContainerStart',false);</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                                                                                                               }</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                                                                       }</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                       </span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                                                                       // Added this to Hide the fields without any value</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                               </span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                               </span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                               }</span></p>
<p style="margin-bottom: .0001pt; text-indent: .5in;"><span style="font-size: 8.0pt;">}</span></p>
<p></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">function getItemOptionID(id) {</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                       var item_option = new GlideRecord('sc_item_option_mtom');</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                       item_option.addQuery('request_item', g_form.getUniqueValue());</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                       item_option.addQuery('sc_item_option.item_option_new', id);</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                       item_option.query();</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                       if(item_option.next())</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">                                                                               return item_option.sc_item_option;</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 8.0pt;">}</span></p>



</pre><p></p><p></p><p style="margin-bottom: .0001pt;"><span style="font-size: 10pt;">After doing a thorough analysis of the situation, and feedback from an ACE report from ServiceNow, I set about to remove the synchronous ajax calls from the process.   My first task was to group all the variable data collection into a javascript object, and then move the "getItemOptionID"   function to a script include class.   The data flow I decided on was to collect for form variable information on page load,   call a server side function via an asynchronous ajax call that would   submit ALL the variable data .   The script include class would provide an endpoint to receive all the form data, perform the </span>necessary<span style="font-size: 10pt;">   database queries on each variable, and send all the results back as a single javascript object.   On the client, the DB response would be received, and the javascript object contained in the response would be de-serialized (from json), and looped over to apply the hide/read-only state to each variable.</span></p><p style="margin-bottom: .0001pt;"><span style="font-size: 10pt;"><br/></span></p><p style="margin-bottom: .0001pt;"><span style="font-size: 10pt;">The solution works very well, reducing client side render time for these forms by 30-60%.   The only downside is that the fields are open for editing for a second or so as the page completes the asynchronous transaction to get all of the variable information from the database.<br/></span></p><p></p><p><img   alt="ajax_flow.png" class="image-0 jive-image" src="5d3d4946db9413043eb27a9e0f9619a3.iix" style="height: 335px; width: 620px;"/></p><p></p><p><strong>Final Scripts:</strong></p><p>Client Script: Set Variables Read-Only (attached to the target tables,   <span style="font-size: 10.0pt; font-family: 'Calibri','sans-serif';">sc_task and sc_req_item</span> )</p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14404435550351246" jivemacro_uid="_14404435550351246">
<p>/**</p>
<p>   call the UI scripts that collect all the form variables and submit back to server to retrieve the variable element ids</p>
<p>   then process each variable and set to read only or hidden</p>
<p>   @method onLoad</p>
<p>*/</p>
<p></p>
<p>// set variables read only on table sc_req_item</p>
<p></p>
<p>document.write('&lt;script&gt;&lt;\/script&gt;');</p>
<p>function onLoad() {</p>
<p></p>
<p>   var rfv = new ReadOnlyFormVariables();</p>
<p>   rfv.collectFormVariableData("sc_req_item");</p>
<p>   rfv.getVariableDataGlideAjax();</p>
<p></p>
<p></p>
<p></p>
<p>}</p>
<p></p>
<p>//-----------------------------------------</p>
<p></p>
<p>// Set Variables Read Only on Task</p>
<p></p>
<p></p>
<p>/**</p>
<p>   call the UI scripts that collect all the form variables and submit back to server to retrieve the variable element ids</p>
<p>   then process each variable and set to read only or hidden</p>
<p>   @method onLoad</p>
<p>*/</p>
<p></p>
<p></p>
<p>document.write('&lt;script&gt;&lt;\/script&gt;');</p>
<p>function onLoad() {</p>
<p></p>
<p></p>
<p>   var rfv = new ReadOnlyFormVariables();</p>
<p>   rfv.collectFormVariableData("sc_task");</p>
<p>   rfv.getVariableDataGlideAjax();</p>
<p></p>
<p></p>
<p></p>
<p>}</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>



</pre><p></p><p>Script Include: GetFormVariableIds</p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14404435548592502" jivemacro_uid="_14404435548592502">
<p></p>
<p>var GetFormVariableIds = Class.create();</p>
<p>GetFormVariableIds.prototype = Object.extendsObject(AbstractAjaxProcessor, {</p>
<p>     /**</p>
<p>         process the array of variable information and fetch the id for each variable</p>
<p>         @method GetFormVariableIds</p>
<p>     */</p>
<p>     GetFormVariableIds: function() {</p>
<p>           var json = new JSON();</p>
<p>           var data = json.decode(this.getParameter('sysparm_data'));</p>
<p>           result = [];</p>
<p></p>
<p></p>
<p>     if (data &amp;&amp; data.length){</p>
<p>                   var obj = {};</p>
<p>     for (var i=0, len = data.length; i &lt; len; i++ ){</p>
<p>   try {</p>
<p>   if (this._has(data[i], 'id') &amp;&amp; this._has(data[i], 'request_item')){</p>
<p>   obj = data[i];</p>
<p>   obj['option_id'] = this._getItemOptionID(data[i].id, data[i].request_item);</p>
<p>   }</p>
<p>   else {</p>
<p>   var key = "error_" +i;</p>
<p>   obj[key] =   "Error: the required properties \"id\" and \"request_item\" were not found - GetFormVariableIds";</p>
<p>   }</p>
<p></p>
<p>   }</p>
<p>   catch(e){</p>
<p>   var key = "error_" +i;</p>
<p>   obj[key] =   "Error: "+e.message+" - GetFormVariableIds";</p>
<p>   }</p>
<p>   result.push(obj);</p>
<p></p>
<p>     }</p>
<p></p>
<p></p>
<p>           }</p>
<p>     else{</p>
<p>     result.push({'error': 'data parameter is undefined'});</p>
<p></p>
<p>     }</p>
<p></p>
<p></p>
<p>           return json.encode(result);</p>
<p>     },</p>
<p>   /**</p>
<p>   provate method to test if an object contaisna   property</p>
<p>   @method _has</p>
<p>   @param {object} obj</p>
<p>   @param {string} prop object key to verify exist in object</p>
<p>   */</p>
<p>   _has: function(obj, prop) { // this function is not client callable   </p>
<p>   var result = false;</p>
<p>   if (typeof obj === "object" &amp;&amp; typeof prop === 'string' &amp;&amp; obj &amp;&amp; prop.length){</p>
<p>   if (obj.hasOwnProperty(prop)){</p>
<p>   result = true;</p>
<p>   }</p>
<p></p>
<p>   }</p>
<p>   return result;</p>
<p>   },</p>
<p></p>
<p>   /**</p>
<p>     Is a given variable an object?</p>
<p>     @method isObject</p>
<p>     @param {object} obj</p>
<p><span>     @link </span><a title="k-external-small" class="jive-link-external-small" href="https://github.com/jashkenas/underscore/blob/master/underscore.js" rel="nofollow" target="_blank">https://github.com/jashkenas/underscore/blob/master/underscore.js</a></p>
<p>   */</p>
<p>   _isObject : function(obj) {</p>
<p>   var type = typeof obj;</p>
<p>   return type === 'function' || type === 'object' &amp;&amp; !!obj;</p>
<p>   },</p>
<p></p>
<p></p>
<p>   /**</p>
<p>     determine if parameter is a string</p>
<p>     @method _isString</p>
<p>     @param {object} str</p>
<p><span>     @link </span><a title="k-external-small" class="jive-link-external-small" href="https://github.com/jashkenas/underscore/blob/master/underscore.js" rel="nofollow" target="_blank">https://github.com/jashkenas/underscore/blob/master/underscore.js</a></p>
<p>   */</p>
<p>   _isString : function(str) {</p>
<p>         return Object.prototype.toString.call(str) === '[object String]';</p>
<p>   },</p>
<p></p>
<p></p>
<p>   /**</p>
<p>     lookup the</p>
<p>     @method _getItemOptionID</p>
<p>     @param p_id</p>
<p>   */</p>
<p>   _getItemOptionID : function(p_id, p_request_item) {</p>
<p>   if (this._isString(p_id) &amp;&amp; this._isString(p_request_item)){</p>
<p>   //Variable Ownership sc_item_option_mtom</p>
<p>   var item_option = new GlideRecord('sc_item_option_mtom');</p>
<p>   item_option.addQuery('request_item', p_request_item);</p>
<p>   item_option.addQuery('sc_item_option.item_option_new', p_id);</p>
<p>   item_option.query();</p>
<p>   if(item_option.next()){</p>
<p>   return item_option.sc_item_option + '';</p>
<p>   }</p>
<p>   else{</p>
<p>   return "no db match for params: "+p_id+" - "+p_request_item;</p>
<p>   }</p>
<p>   }</p>
<p>   else{</p>
<p>   return "not string params"</p>
<p></p>
<p>   }</p>
<p>   },</p>
<p></p>
<p></p>
<p>});</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p>});</p>



</pre><p></p><p>UI Script: ReadOnlyFormVariables</p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_1440443554384310" jivemacro_uid="_1440443554384310" modifiedtitle="true">
<p>/**</p>
<p>   UI script</p>
<p>   collect all the form variables and submit back to server to retrieve the variable element ids</p>
<p>   then process each variable and set to read only or hidden</p>
<p>   @method onLoad</p>
<p>*/</p>
<p>/*</p>
<p>//usage example</p>
<p>function onLoad() {</p>
<p></p>
<p></p>
<p></p>
<p>   var rfv = new ReadOnlyFormVariables();</p>
<p>   rfv.collectFormVariableData("sc_req_item" );</p>
<p></p>
<p></p>
<p>}</p>
<p>*/</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p>/**</p>
<p>   collect variables off the ServiceNow form,</p>
<p>   and query the DB via glidejax to determine which variables to hide / set read-only</p>
<p>   @class ReadOnlyFormVariables</p>
<p>*/</p>
<p>function ReadOnlyFormVariables (obj) {</p>
<p>   this.variables = [];</p>
<p>}</p>
<p></p>
<p>ReadOnlyFormVariables.prototype = {</p>
<p>       constructor : ReadOnlyFormVariables,</p>
<p></p>
<p>   /**</p>
<p>     read the variables off the form and create an array of objects</p>
<p>     containing the   properties "id","request_item","name"</p>
<p>     @method collectFormVariableData</p>
<p>     @param {string} p_srctable - current expects either "sc_task" or "sc_req_item"</p>
<p>   */</p>
<p>   collectFormVariableData : function(p_srctable){</p>
<p>   var context = this;</p>
<p>   if (this._isString(p_srctable)){</p>
<p>   var map = gel('variable_map');</p>
<p>   if(map) {</p>
<p>   var cat_form = new ServiceCatalogForm('ni', true, true);</p>
<p>   var items = map.getElementsByTagName("item");</p>
<p></p>
<p></p>
<p>   /**</p>
<p>     for the sc_task table there is a db request to be made for a field sysid.</p>
<p>     this callback allows that db request to complete before further processing the field values</p>
<p>     @method callback</p>
<p>     @param the request item id (sysid or unique for id)</p>
<p>   */</p>
<p>   var callback = function(caller){</p>
<p>   for (var i = 0; i &lt; items.length; i++) {</p>
<p>   var item = items.item(i);</p>
<p></p>
<p></p>
<p>   if (caller &amp;&amp; context._has(caller, 'sys_id') &amp;&amp; caller.sys_id.length){</p>
<p>   var target_el = {</p>
<p>   /*item : items.item(i),*/</p>
<p>   id: item.id,</p>
<p>   name : item.getAttribute('qname'),</p>
<p>   request_item: (caller.sys_id + '')</p>
<p>   }</p>
<p>   context.variables.push(target_el);</p>
<p>   }</p>
<p>   else{</p>
<p>   context._log("Error: invalid callback parameter \"caller\" - ReadOnlyFormVariables::collectFormVariableData");</p>
<p>   }</p>
<p></p>
<p>   }</p>
<p>   // query the database to get data necessary to hide the form variables</p>
<p>   context.getVariableDataGlideAjax();</p>
<p></p>
<p>   }</p>
<p></p>
<p></p>
<p>   switch (p_srctable.toLowerCase()) {</p>
<p>   case 'sc_task':</p>
<p>   g_form.getReference('request_item', callback);</p>
<p>   break;</p>
<p>   case 'sc_req_item':</p>
<p>   var req_item = {};</p>
<p>   req_item['sys_id'] = g_form.getUniqueValue() + '';</p>
<p>   callback(req_item);</p>
<p>   break;</p>
<p></p>
<p>   }</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p>   }</p>
<p>   else{</p>
<p>   context._log("Error: GEL variable map is null. Process halted - ReadOnlyFormVariables::collectFormVariableData");</p>
<p>   }</p>
<p>   }</p>
<p>   else{</p>
<p></p>
<p>   }</p>
<p></p>
<p>   },</p>
<p></p>
<p>   /**</p>
<p>     perform the ajax request for the variable ids that occur on the form based on their glide properties</p>
<p>     @method getVariableDataGlideAjax</p>
<p></p>
<p>   */</p>
<p>   getVariableDataGlideAjax : function (){</p>
<p>   var context = this;</p>
<p>   if (this.variables &amp;&amp; this.variables.hasOwnProperty('length') &amp;&amp; this.variables.length){</p>
<p></p>
<p>   // next line is dependant on prototype - ie8 may not have the json encode method</p>
<p>   var json_data = Object.toJSON(this.variables);</p>
<p></p>
<p>   //context._log(json_data);</p>
<p></p>
<p>   var ga = new GlideAjax('GetFormVariableIds');</p>
<p>   ga.addParam('sysparm_name','GetFormVariableIds');</p>
<p>   ga.addParam('sysparm_data',json_data);</p>
<p></p>
<p></p>
<p>   /**</p>
<p>     process the response from the ajax request</p>
<p>     @method anonymous callback function</p>
<p>     @param {object} response - xml server response</p>
<p>   */</p>
<p>   ga.getXML(function (response) {</p>
<p>   var data, answer = response.responseXML.documentElement.getAttribute("answer");</p>
<p>   if (context._isString(answer)){</p>
<p>   // prototype dependcy -   json parser</p>
<p></p>
<p>   data = answer.evalJSON(true)</p>
<p>   context._log('DATA RECIEVED');</p>
<p></p>
<p>   if (data &amp;&amp; data.hasOwnProperty('length') &amp;&amp; data.length){</p>
<p></p>
<p>   for (var i = 0; i &lt; data.length; i++) {</p>
<p>   context._log(data[i]);</p>
<p>   context.setVariableReadOnly(data[i]);</p>
<p>   }</p>
<p>   }</p>
<p>   else{</p>
<p>   context._log("Error: ajax response payload is not of type \"array\". Process halted - ReadOnlyFormVariables::getVariableDataGlideAjax")</p>
<p>   }</p>
<p>   }</p>
<p>   else{</p>
<p>   context._log("Error: invalid data type for the ajax response payload. Process halted - ReadOnlyFormVariables::getVariableDataGlideAjax")</p>
<p>   }</p>
<p></p>
<p></p>
<p>   });</p>
<p>   }</p>
<p>   else{</p>
<p>   context._log("Error: the array of form variable data is empty or invalid. Process halted - ReadOnlyFormVariables::getVariableDataGlideAjax");</p>
<p>   }</p>
<p>   },</p>
<p></p>
<p></p>
<p></p>
<p>   /**</p>
<p>     process the results from the DB ajax request on the variable list and set the identified variables as read-only</p>
<p></p>
<p></p>
<p>     @method setVariablesReadOnly</p>
<p>     @param {object} p_obj contains the properties "id","request_item","name", and "option_id" used to identify a variable on the form</p>
<p>   */</p>
<p>   setVariableReadOnly : function(p_obj){</p>
<p>   var context = this;</p>
<p>   if (this._isObject(p_obj) &amp;&amp; this._has(p_obj, 'name') &amp;&amp; this._has(p_obj, 'option_id')){</p>
<p></p>
<p>   var nm = new NameMapEntry(p_obj.name, "ni.VE" + p_obj.option_id);</p>
<p></p>
<p></p>
<p>   var cat_form = new ServiceCatalogForm('ni', true, true);</p>
<p>   cat_form.addNameMapEntry(nm);</p>
<p></p>
<p>   if(g_form.getValue(p_obj.name) === '' || g_form.getValue(p_obj.name) === 'false'){</p>
<p>   cat_form.setDisplay(p_obj.name,false);</p>
<p>   }</p>
<p>   else{</p>
<p>   cat_form.setReadonly(p_obj.name,true);</p>
<p>   }</p>
<p></p>
<p></p>
<p>   if(p_obj.name === 'comments'){ //Hide Comments container if comments field is blank</p>
<p>   if(g_form.getValue('comments') === ''){</p>
<p>   g_form.setDisplay('commContainerStart',false);</p>
<p>   }</p>
<p>   }</p>
<p>   }</p>
<p>   else{</p>
<p>   context._log("Error: missing keys from the variable data object - setVariableReadOnly::getVariableDataGlideAjax")</p>
<p></p>
<p>   }</p>
<p>   },</p>
<p>   /**</p>
<p>   private method to test if an object contains a   property</p>
<p>   @method _has</p>
<p>   @param {object} obj</p>
<p>   @param {string} prop</p>
<p>   */</p>
<p>   _has: function(obj, prop) { // this function is not client callable   </p>
<p>   var result = false;</p>
<p>   if (this._isObject(obj) &amp;&amp; this._isString(prop) &amp;&amp; obj &amp;&amp; prop.length){</p>
<p>   if (obj.hasOwnProperty(prop)){</p>
<p>   result = true;</p>
<p>   }</p>
<p></p>
<p>   }</p>
<p>   return result;</p>
<p>   },</p>
<p></p>
<p>   /**</p>
<p>     Is a given variable an object?</p>
<p>     @method isObject</p>
<p><span>     @link </span><a title="k-external-small" class="jive-link-external-small" href="https://github.com/jashkenas/underscore/blob/master/underscore.js" rel="nofollow" target="_blank">https://github.com/jashkenas/underscore/blob/master/underscore.js</a></p>
<p>   */</p>
<p>   _isObject : function(obj) {</p>
<p>   var type = typeof obj;</p>
<p>   return type === 'function' || type === 'object' &amp;&amp; !!obj;</p>
<p>   },</p>
<p></p>
<p></p>
<p>   /**</p>
<p>     determine if parameter is a string</p>
<p>     @method _isString</p>
<p>     @param object</p>
<p><span>     @link </span><a title="k-external-small" class="jive-link-external-small" href="https://github.com/jashkenas/underscore/blob/master/underscore.js" rel="nofollow" target="_blank">https://github.com/jashkenas/underscore/blob/master/underscore.js</a></p>
<p>   */</p>
<p>   _isString : function(str) {</p>
<p>         return Object.prototype.toString.call(str) === '[object String]';</p>
<p>   },</p>
<p></p>
<p>   /**</p>
<p>     prevent console.log errors in ie8</p>
<p>     @method _log</p>
<p>   */</p>
<p>   _log : function(str){</p>
<p>   if (typeof console === 'undefined'){</p>
<p>   /**</p>
<p>     ie8 console.log shim</p>
<p><span>     @link </span><a title="k-external-small" class="jive-link-external-small" href="http://stackoverflow.com/questions/690251/what-happened-to-console-log-in-ie8" rel="nofollow" target="_blank">http://stackoverflow.com/questions/690251/what-happened-to-console-log-in-ie8</a></p>
<p>   */</p>
<p>   !window.console &amp;&amp; (window.console = { log: function () { } });</p>
<p>   }</p>
<p>   console.log(str);</p>
<p>   }</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p>};</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p><span style="color: #575757; font-family: arial, helvetica, sans-serif; font-size: 10pt; line-height: 1.5em;"><br/></span></p>



</pre>