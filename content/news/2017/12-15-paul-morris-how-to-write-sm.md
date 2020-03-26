---
title: "How to Write Smart GlideAjax Quickly Part "
date: 2017-12-14T12:26:10.000Z
authors: ["Paul Morris"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=b23deae5dbd0dbc01dcaf3231f961992"
---
<h1>How to Write Smart GlideAjax Quickly</h1>
<h3>Contents</h3>
<h4><a href="community?id&#61;community_blog&amp;sys_id&#61;f8ccee25dbd0dbc01dcaf3231f961978" rel="nofollow">Part 1 </a>- The Approach</h4>
<h4>Part 2 - Reusability</h4>
<h4><a href="community?id&#61;community_blog&amp;sys_id&#61;53333bbddbb813404837f3231f9619d7" rel="nofollow">Part 3</a> - Extending Functionality</h4>
<h4><a href="community?id&#61;community_blog&amp;sys_id&#61;a7e599d1db2a97400be6a345ca96192a" target="_blank" rel="nofollow">Part 4</a> - Implementing GlideAjax with 1 LOC</h4>
<p> </p>
<h2><span style="color: #666666; font-family: arial, sans-serif;">Reusability</span></h2>
<p><span style="color: #666666; font-family: arial, sans-serif;">You&#39;ve now been given a procedure for writing GlideAjax that hopefully makes it a much more enjoyable process. You&#39;re happy that you&#39;ve learned something new and that you&#39;ve been able to implement a requirement using Best Practice. That is until your boss gives you a new requirement. He wants the Callers job title shown on the screen as well. Never fear - we have already written the foundations to make this a whole lot easier!</span></p>
<p> </p>
<ol><li><span style="color: #666666; font-family: arial, sans-serif;"><strong>Free The Shackles: Make your GlideAjax Table Agnostic</strong></span></li><li><span style="color: #666666; font-family: arial, sans-serif;"><strong>The Problem With getReference()</strong></span>
<ul><li><span style="color: #666666; font-family: arial, sans-serif;"><strong>Too Much Information</strong></span></li><li><span style="color: #666666; font-family: arial, sans-serif;"><strong>Round Trip Problem</strong></span></li></ul>
</li><li><span style="color: #666666; font-family: arial, sans-serif;"><strong>Don&#39;t Forget the Client</strong></span></li></ol>
<p> </p>
<p><span style="color: #666666; font-family: arial, sans-serif; font-size: 18pt;"><strong>Free The Shackles: Make your GlideAjax Table Agnostic</strong></span></p>
<p> </p>
<p>Let&#39;s familiarise ourselves with our previous code example from <a class="jive_macro jive_macro_blogpost" title="How to Write Smart GlideAjax Quickly" href="community?id&#61;community_blog&amp;sys_id&#61;f8ccee25dbd0dbc01dcaf3231f961978" rel="nofollow">How to Write Smart GlideAjax Quickly</a></p>
<p> </p>
<p>var UserAjaxUtil &#61; Class.create();      </p>
<p>UserAjaxUtil.prototype &#61; Object.extendsObject(AbstractAjaxProcessor, {      </p>
<p>     </p>
<p>        ajaxClientDataHandler: function() {      </p>
<p>                  //Get data from the form  </p>
<p>                  var gformData1 &#61; this.getParameter(&#39;sysparm_parm1&#39;);  </p>
<p>                  //Setup data to return to form  </p>
<p>                  var answer&#61;{};  </p>
<p>                  //Do server side stuff  </p>
<p>                  answer[&#39;location&#39;] &#61; this.doServerSideStuff(gformData1);  </p>
<p>                  //Encode data to send back to the form  </p>
<p>                  return new JSON().encode(answer);    </p>
<p>        },      </p>
<p>     </p>
<p>        doServerSideStuff: function(userUID) {      </p>
<p>                  var grUser &#61; new GlideRecordSecure(&#39;sys_user&#39;);      </p>
<p>                  if (grUser.get(userUID)) {      </p>
<p>                            return grUser.getValue(&#39;location&#39;);      </p>
<p>                  }  </p>
<p>        },      </p>
<p>     </p>
<p>      type: &#39;UserAjaxUtil&#39;      </p>
<p>});  </p>
<p> </p>
<p><span style="color: #666666; font-family: arial, sans-serif;">Make a copy of this Script Include and call it &#39;ShackleFreeAjax&#39;<a title="https://community.servicenow.com/community/develop/blog/2017/09/19/i-keep-being-told-that-glideajax-is-best-practice-but-how" href="community?id&#61;community_blog&amp;sys_id&#61;f8ccee25dbd0dbc01dcaf3231f961978" rel="nofollow"><br /></a></span></p>
<p> </p>
<p><span style="color: #666666; font-family: arial, sans-serif;">To make our Script Include Table Agnostic, we will need two additional parameters:</span></p>
<ul><li><span style="color: #666666; font-family: arial, sans-serif;">Table Name</span></li><li><span style="color: #666666; font-family: arial, sans-serif;">Field Name</span></li></ul>
<p> </p>
<p>Let&#39;s create a new function called &#39;getPairValueDisplay&#39;.</p>
<p>Our function will now need to take these as parameters, as well as a sys_id.</p>
<p>We will also return the display value.</p>
<p> </p>
<p>getPairValueDisplay: function(<span style="color: rgba(0, 0, 0, 0); font-family: Consolas, &#39;Courier New&#39;, Courier, mono, serif; font-size: 12px;">tableName</span>, sys_id, fieldName) {      </p>
<p>  var gr &#61; new GlideRecordSecure(tableName);      </p>
<p>  if (gr.get(sys_id)) {      </p>
<p>    return { //We want to get the display value too</p>
<p>    value: gr.getValue(field),</p>
<p>    displayValue: gr.getDisplayValue(fieldName)</p>
<p>    } ;</p>
<p>  }  </p>
<p>},      </p>
<p> </p>
<p>In Part 1, we recommended splitting your client handler and server-side logic into functions, so you can test them separately.</p>
<p>Make sure you test your server side function in isolation before proceeding.</p>
<p> </p>
<p>So, why are we returning the display value?</p>
<p> </p>
<p>You may have already noticed from our previous example that the display value always auto-populates, even if we are just returning the sys_id.</p>
<p> </p>
<p>Isn&#39;t it just adding needless complexity?</p>
<p> </p>
<p>To answer this, we must first address some of the problems with g_form.getReference()</p>
<p> </p>
<p><span style="font-size: 18pt;"><strong>The problem with getReference()</strong></span></p>
<p> </p>
<p><span style="font-size: 14pt;"><strong>Too Much Information!</strong></span></p>
<p>Let&#39;s take a look at the classic example from the ServiceNow Wiki - soon to be from the archives (The ServiceNow wiki is being archived on December 10). Every developer has probably seen and/or implemented this example at some stage in their career. The classic Alert if User is VIP example. While I do detest the use of alert, this example serves our purpose.</p>
<p> </p>
<p><span class="kd" style="color: #008000; font-weight: bold;">function</span> <span class="nx">onChange</span><span class="p">(</span><span class="nx">control</span><span class="p">,</span> <span class="nx">oldValue</span><span class="p">,</span> <span class="nx">newValue</span><span class="p">,</span> <span class="nx">isLoading</span><span class="p">)</span> <span class="p">{</span></p>
<p>    <span class="kd" style="color: #008000; font-weight: bold;">var</span> <span class="nx">caller</span> <span class="o" style="color: #666666;">&#61;</span> <span class="nx">g_form</span><span class="p">.</span><span class="nx">getReference</span><span class="p">(</span><span class="s1" style="color: #ba2121;">&#39;caller_id&#39;</span><span class="p">,</span> <span class="nx">doAlert</span><span class="p">);</span> <span class="c1" style="color: #408080; font-style: italic;">// doAlert is our callback function</span></p>
<p><span class="p">}</span></p>
<p><span class="kd" style="color: #008000; font-weight: bold;">function</span> <span class="nx">doAlert</span><span class="p">(</span><span class="nx">caller</span><span class="p">)</span> <span class="p">{</span> <span class="c1" style="color: #408080; font-style: italic;">//reference is passed into callback as first arguments</span></p>
<p>  <span class="k" style="color: #008000; font-weight: bold;">if</span> <span class="p">(</span><span class="nx">caller</span><span class="p">.</span><span class="nx">vip</span> <span class="o" style="color: #666666;">&#61;&#61;</span> <span class="s1" style="color: #ba2121;">&#39;true&#39;</span><span class="p">)</span></p>
<p>    <span class="nx">alert</span><span class="p">(</span><span class="s1" style="color: #ba2121;">&#39;Caller is a VIP!&#39;</span><span class="p">);</span></p>
<p><span class="p">}</span></p>
<p><a title="http://wiki.servicenow.com/index.php?title&#61;GlideForm_(g_form)#getReference" href="http://wiki.servicenow.com/index.php?title&#61;GlideForm_%28g_form%29#getReference" rel="nofollow">http://wiki.servicenow.com/index.php?title&#61;GlideForm_(g_form)#getReference</a></p>
<p> </p>
<p>Now, let&#39;s take a look at what ServiceNow returns to the client.</p>
<p> </p>
<p>&lt;?xml version&#61;&#34;1.0&#34; encoding&#61;&#34;UTF-8&#34;?&gt;</p>
<p>&lt;xml sysparm_chars&#61;&#34;sys_id&#61;6816f79cc0a8016401c5a33be04be441&#34; sysparm_max&#61;&#34;15&#34; sysparm_name&#61;&#34;sys_user&#34; sysparm_processor&#61;&#34;AJAXGlideRecord&#34; sysparm_type&#61;&#34;query&#34;&gt;</p>
<p>    &lt;item sys_id&#61;&#34;6816f79cc0a8016401c5a33be04be441&#34;&gt;</p>
<p>          &lt;active&gt;true&lt;/active&gt;</p>
<p>          &lt;building /&gt;</p>
<p>          &lt;business_criticality&gt;3&lt;/business_criticality&gt;</p>
<p>          &lt;calendar_integration&gt;1&lt;/calendar_integration&gt;</p>
<p>          &lt;city /&gt;</p>
<p>          &lt;company /&gt;</p>
<p>          &lt;cost_center /&gt;</p>
<p>          &lt;country /&gt;</p>
<p>          &lt;date_format /&gt;</p>
<p>          &lt;department&gt;a581ab703710200044e0bfc8bcbe5de8&lt;/department&gt;</p>
<p>          &lt;edu_status /&gt;</p>
<p>          &lt;email&gt;<a class="jive-link-email-small" title="k-email-small" href="mailto:admin&#64;example.com" rel="nofollow">admin&#64;example.com</a>&lt;/email&gt;</p>
<p>          &lt;employee_number /&gt;</p>
<p>          &lt;failed_attempts /&gt;</p>
<p>          &lt;first_name&gt;System&lt;/first_name&gt;</p>
<p>          &lt;gender /&gt;</p>
<p>          &lt;home_phone /&gt;</p>
<p>          &lt;internal_integration_user&gt;false&lt;/internal_integration_user&gt;</p>
<p>          &lt;introduction /&gt;</p>
<p>          &lt;last_login /&gt;</p>
<p>          &lt;last_login_device&gt;125.209.179.222&lt;/last_login_device&gt;</p>
<p>          &lt;last_login_time&gt;2017-11-29 12:33:06&lt;/last_login_time&gt;</p>
<p>          &lt;last_name&gt;Administrator&lt;/last_name&gt;</p>
<p>          &lt;last_password /&gt;</p>
<p>          &lt;location&gt;f69521b437d0200044e0bfc8bcbe5d6e&lt;/location&gt;</p>
<p>          &lt;manager /&gt;</p>
<p>          &lt;middle_name /&gt;</p>
<p>          &lt;mobile_phone /&gt;</p>
<p>          &lt;name&gt;System Administrator&lt;/name&gt;</p>
<p>          &lt;notification&gt;2&lt;/notification&gt;</p>
<p>          &lt;phone /&gt;</p>
<p>          &lt;photo /&gt;</p>
<p>          &lt;preferred_language /&gt;</p>
<p>          &lt;schedule /&gt;</p>
<p>          &lt;source /&gt;</p>
<p>          &lt;state /&gt;</p>
<p>          &lt;street /&gt;</p>
<p>          &lt;sys_class_name&gt;sys_user&lt;/sys_class_name&gt;</p>
<p>          &lt;sys_created_by&gt;fred.luddy&lt;/sys_created_by&gt;</p>
<p>          &lt;sys_created_on&gt;2007-07-03 18:48:47&lt;/sys_created_on&gt;</p>
<p>          &lt;sys_domain&gt;global&lt;/sys_domain&gt;</p>
<p>          &lt;sys_domain_path&gt;/&lt;/sys_domain_path&gt;</p>
<p>          &lt;sys_id&gt;6816f79cc0a8016401c5a33be04be441&lt;/sys_id&gt;</p>
<p>          &lt;sys_mod_count&gt;74&lt;/sys_mod_count&gt;</p>
<p>          &lt;sys_updated_by&gt;admin&lt;/sys_updated_by&gt;</p>
<p>          &lt;sys_updated_on&gt;2017-11-28 11:55:50&lt;/sys_updated_on&gt;</p>
<p>          &lt;time_format /&gt;</p>
<p>          &lt;time_zone /&gt;</p>
<p>          &lt;title&gt;System Administrator&lt;/title&gt;</p>
<p>          &lt;user_name&gt;admin&lt;/user_name&gt;</p>
<p>          &lt;vip&gt;false&lt;/vip&gt;</p>
<p>          &lt;web_service_access_only&gt;false&lt;/web_service_access_only&gt;</p>
<p>          &lt;zip /&gt;</p>
<p>    &lt;/item&gt;</p>
<p>&lt;/xml&gt;</p>
<p> </p>
<p>Whoah!</p>
<p> </p>
<p>All I wanted to know was if the user was a VIP.</p>
<p>Instead, things got a little personal and were provided with all the user data that ACL&#39;s allows me to see.</p>
<p> </p>
<p><strong>Too much information!</strong></p>
<p> </p>
<p>You&#39;ll also notice that there is no display values returned!</p>
<p>How does ServiceNow magically know what the display value is?</p>
<p> </p>
<p><span style="font-size: 14pt;"><strong>Round Trip Problem</strong></span></p>
<p> </p>
<p>When your web browser receives the payload shown above, it doesn&#39;t know the display values.</p>
<p>So what actually happens when you try and populate a Reference field with only a sys_id?</p>
<p> </p>
<p><span class="log-time CLIENT" style="color: #2f96b4; font-family: Arial; font-size: 13px;">2</span><span class="log-time CLIENT" style="color: #2f96b4; font-family: Arial; font-size: 13px;">1:36:08 (094)</span><span class="log-category" style="color: #666666; margin-left: 10px; font-family: Arial; font-size: 13px;">incident.do</span><span class="log-message" style="margin-left: 5px; color: #343d47; font-family: Arial; font-size: 13px;">[00:00:00.644] *** WARNING *** GlideAjax.getXMLWait - synchronous function - processor: AjaxClientHelper</span></p>
<p>The calling card of the Round Trip problem.</p>
<p> </p>
<p>You&#39;ve probably seen this flying around your logs.</p>
<p>Chances are, you are seeing a lot of them.</p>
<p> </p>
<p>In fact, you would have been seeing them in the first example too.</p>
<p>You might be thinking you are doing the right thing! You&#39;re not using getXMLWait, you&#39;re using getXML with a callback!</p>
<p> </p>
<p>What is going on?</p>
<p> </p>
<p>ServiceNow is automatically going back to the server to get the display value for you with a getXMLWait call thrown in.</p>
<p>Let&#39;s take a look at the API reference for g_form.setValue()</p>
<p> </p>
<p><a title="" href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;jakarta&amp;id&#61;r_GlideFormSetValue_String_String" target="_blank" rel="nofollow">https://developer.servicenow.com/app.do#!/api_doc?v&#61;jakarta&amp;id&#61;r_GlideFormSetValue_String_String</a></p>
<p> </p>
<p>It is right there in the documentation! (Yes, it is ironic that the OOTB Client Script BP - Set Caller doesn&#39;t set the display value)</p>
<p> </p>
<p>To improve performance by preventing a round trip, include a display value in addition to the value, <strong>use setValue(fieldName, value, displayValue).</strong></p>
<p> </p>
<p>Good thing we are getting the display value now!</p>
<p> </p>
<p>These two problems in isolation aren&#39;t a big deal. The VIP getReference example is even considered certifiable code for the App Store (as long as the callback is present!)</p>
<p>As more and more client scripts get added to the system, it will slowly start impacting on the end user experience. Too much information, paired with multiple round trips - your users will end up feeling the pain from the coding decisions you made.</p>
<p> </p>
<p><span style="font-size: 18pt;"><strong>Don&#39;t Forget the Client</strong></span></p>
<p> </p>
<p>We can&#39;t forget about the Client Script.</p>
<p>Let&#39;s update our onChange function to use the new Script Include</p>
<p> </p>
<p>function onChange(control, oldValue, newValue, isLoading, isTemplate) {</p>
<p>        if (isLoading || newValue &#61;&#61;&#61; &#39;&#39;) {</p>
<p>                  return;</p>
<p>        }</p>
<p> </p>
<p>        var ga &#61; new GlideAjax(&#39;ShackleFreeAjax&#39;); //Name of the Ajax Script Inclide</p>
<p>        ga.addParam(&#39;sysparm_name&#39;,&#39;ajaxClientDataHandler&#39;); //Method to call</p>
<p>        //Add new parameters for our new GlideAjax Class</p>
<p>        ga.addParam(&#39;sysparm_tablename&#39;,&#39;sys_user&#39;); //Table name</p>
<p>        ga.addParam(&#39;sysparm_sysid&#39;,newValue); //newValue</p>
<p>        ga.addParam(&#39;sysparm_fieldname&#39;,&#39;location&#39;); //Field name we want to retrieve</p>
<p>        ga.getXML(userCallback);</p>
<p>}</p>
<p> </p>
<p>Modify our setLocation function to set the display value.</p>
<p> </p>
<p>function setLocation(caller) { //returns only the values we need</p>
<p>        if (caller) {</p>
<p>                  g_form.setValue(</p>
<p>                            &#39;location&#39;,</p>
<p>                            caller.location.value, // use value</p>
<p>                            caller.location.displayValue //set value to avoid round-trip</p>
<p>                  );</p>
<p>        }</p>
<p>}</p>
<p> </p>
<p>Notice there is now no Round Trip!</p>
<p> </p>
<p>Full code below.</p>
<p> </p>
<p>function onChange(control, oldValue, newValue, isLoading, isTemplate) {</p>
<p>        if (isLoading || newValue &#61;&#61;&#61; &#39;&#39;) {</p>
<p>                  return;</p>
<p>        }</p>
<p> </p>
<p>        var ga &#61; new GlideAjax(&#39;ShackleFreeAjax&#39;); //Name of the Ajax Script Inclide</p>
<p>        ga.addParam(&#39;sysparm_name&#39;,&#39;ajaxClientDataHandler&#39;); //Method to call</p>
<p>        //Add new parameters for our new GlideAjax Class</p>
<p>        ga.addParam(&#39;sysparm_tablename&#39;,&#39;sys_user&#39;); //Table name</p>
<p>        ga.addParam(&#39;sysparm_sysid&#39;,newValue); //newValue</p>
<p>        ga.addParam(&#39;sysparm_fieldname&#39;,&#39;location&#39;); //Field name we want to retrieve</p>
<p>        ga.getXML(userCallback);}</p>
<p> </p>
<p> </p>
<p>function userCallback(response) {</p>
<p>        var answer &#61; response.responseXML.documentElement.getAttribute(&#34;answer&#34;);</p>
<p>        answer &#61; answer.evalJSON();</p>
<p>        setLocation(answer);</p>
<p>}</p>
<p> </p>
<p>function setLocation(caller) { //returns only the values we need</p>
<p>        if (caller) {</p>
<p>                  g_form.setValue(</p>
<p>                            &#39;location&#39;,</p>
<p>                            caller.location.value, // use value</p>
<p>                            caller.location.displayValue //set value to avoid round-trip</p>
<p>                  );</p>
<p>        }</p>
<p>}</p>
<p> </p>
<p>And the Script Include, in full:</p>
<p> </p>
<p>var ShackleFreeAjax &#61; Class.create();</p>
<p>ShackleFreeAjax.prototype &#61; Object.extendsObject(AbstractAjaxProcessor, {</p>
<p> </p>
<p>ajaxClientDataHandler: function() {</p>
<p>//Get data from the form</p>
<p>var tableName &#61; this.getParameter(&#39;sysparm_tablename&#39;);</p>
<p>var sysId &#61; this.getParameter(&#39;sysparm_sysid&#39;);</p>
<p>var fieldName &#61; this.getParameter(&#39;sysparm_fieldname&#39;);</p>
<p>//Setup data to return to form</p>
<p>var answer&#61;{};</p>
<p>//Do server side stuff</p>
<p>answer[fieldName] &#61; this.getPairValueDisplay(tableName, sysId, fieldName);</p>
<p>//Encode data to send back to the form</p>
<p>return new JSON().encode(answer);</p>
<p>},</p>
<p> </p>
<p>getPairValueDisplay: function(table, sysId, fieldName) {</p>
<p>var gr &#61; new GlideRecordSecure(table);</p>
<p>if (gr.get(sysId)) {</p>
<p>return {</p>
<p>value: gr.getValue(fieldName),</p>
<p>displayValue: gr.getDisplayValue(fieldName),</p>
<p>toString: function() {return gr.getValue(fieldName);}</p>
<p>} ;</p>
<p>}</p>
<p>},</p>
<p> </p>
<p> </p>
<p>type: &#39;ShackleFreeAjax&#39;</p>
<p>});</p>
<p> </p>
<p><span style="color: #666666; font-size: 12pt; font-family: arial, sans-serif;"><strong>Next time...</strong></span></p>
<p><span style="font-size: 12pt;">Why Stop At One - Handle for Multiple Fields</span></p>
<p><span style="font-size: 12pt;">GlideAjax in One Line of Code!</span></p>
<p> </p>
<p><span style="color: #666666; font-family: arial, sans-serif;"><strong>Please like/endorse/share if you found this helpful and keep this community great!</strong></span></p>