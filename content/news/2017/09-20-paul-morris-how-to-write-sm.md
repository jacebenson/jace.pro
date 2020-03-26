---
title: "How to Write Smart GlideAjax Quickly Part "
date: 2017-09-19T16:52:36.000Z
authors: ["Paul Morris"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=f8ccee25dbd0dbc01dcaf3231f961978"
---
<h1>How to Write Smart GlideAjax Quickly</h1>
<h3>Contents</h3>
<h4>Part 1 - The Approach</h4>
<h4><a href="community?id&#61;community_blog&amp;sys_id&#61;b23deae5dbd0dbc01dcaf3231f961992" rel="nofollow">Part 2</a> - Reusability</h4>
<h4><a href="community?id&#61;community_blog&amp;sys_id&#61;53333bbddbb813404837f3231f9619d7" rel="nofollow">Part 3</a> - Extending Functionality</h4>
<h4><a href="community?id&#61;community_blog&amp;sys_id&#61;a7e599d1db2a97400be6a345ca96192a" target="_blank" rel="nofollow">Part 4</a> - Implementing GlideAjax with 1 LOC</h4>
<h2>Introduction</h2>
<p>ServiceNow is a fantastic platform that is easy to learn - but hard to master. Despite having a thriving, friendly online community to ask for help, it can be very daunting as a beginner when you are enthusiastically bombarded with multiple solutions. You finally get a solution that seems to make sense, and seems to work - when an expert with even more points and badges tells you that what you are doing &#34;is not best practice&#34;. You&#39;re then provided with 100 lines of code, that need to be added in multiple different places in the system, that all need to link up together somehow It&#39;s all very confusing and you don&#39;t understand any of it! And yes, I&#39;m talking about GlideAjax.</p>
<p> </p>
<p>Rarely a day goes by when someone isn&#39;t reaching out for help with Client Scripts. It is very easy to get a value from any table in ServiceNow from business rules and Script Includes, but Client Scripts are so much harder! The API is similar - yet different. It&#39;s hard to know what functions work on both client side and server side. You&#39;re suddenly told not to use GlideRecord Queries - or that you must have a callback method. The next developer will tell you that you must use GlideAjax and write lines and lines of code. But how - and why?</p>
<p> </p>
<p>You finally get a grasp of the code, after 10 posts back and forth through 5 different people in 3 different time zones. You&#39;ve got your Client Script, you&#39;ve got your Script Include - and it finally works! That is until you realize your original requirement won&#39;t do exactly what your boss wants. You have no idea how and where to change the code and in the process of it your code doesn&#39;t work at all anymore! You wish you understood how you got there in the first place.</p>
<p> </p>
<p>Well, you&#39;re in luck. Today I am going to go through my process of writing GlideAjax scripts, which I have learned from years of writing Client Scripts and GlideAjax Script Includes for customers and helping ServiceNow community members. I will show you the order I write them in and compartmentalize them - all testable along the way - and leave you with a library to reuse in future. I highly recommend installing <a title="erviceportal.io/xplore-the-ultimate-exploratory-scripting-tool/" href="https://serviceportal.io/xplore-the-ultimate-exploratory-scripting-tool/" rel="nofollow">Xplore </a>in your instance before proceeding - however, I will also show you how OOB tools can be used.</p>
<p> </p>
<ol><li><strong>Proof of concept your Client Script (with getReference callback)</strong></li><li><strong>Create a testable GlideAjax Script Include</strong></li><li><strong>Refactor &amp; Bring it all together</strong></li><li><strong>Make your existing GlideAjax scripts reusable (Part 2)</strong></li></ol>
<p> </p>
<p><span style="font-size: 14pt;"><strong>Proof of concept your Client Script <strong>(with getReference callback)</strong></strong></span></p>
<p>Let&#39;s refactor an established OOB Client Script to be GlideAjax - <strong>(BP) Set Location to User. </strong>Add the Location field to the Incident form, under the Caller field, if it is not already present.</p>
<p>There is nothing wrong with using getReference as a quick way to setup a proof of concept for a requirement. See the client script code below.</p>
<p> </p>
<p>function onChange(control, oldValue, newValue, isLoading) {</p>
<p>    if (isLoading)</p>
<p>          return;</p>
<p> </p>
<p>    if (newValue &#61;&#61; &#39;&#39;) {</p>
<p>          g_form.setValue(&#39;location&#39;, &#39;&#39;);</p>
<p>          return;</p>
<p>    }</p>
<p> </p>
<p>    if (!g_form.getControl(&#39;location&#39;))</p>
<p>          return;</p>
<p> </p>
<p>    var caller &#61; g_form.getReference(&#39;caller_id&#39;, setLocation);</p>
<p>}</p>
<p> </p>
<p>function setLocation(caller) {</p>
<p>    if (caller)</p>
<p>            g_form.setValue(&#39;location&#39;, caller.location);</p>
<p>}</p>
<p><strong>         </strong></p>
<p><strong><span style="font-size: 14pt;">Create a testable GlideAjax Script Include</span><br /></strong>Navigate to &#34;System Definition &gt; Script Includes&#34; and click &#34;New&#34;. Populate the &#39;Name&#39; field with something meaningful (like UserAjaxUtil) and click the &#39;Client callable&#39; checkbox. This will automatically add the code to extend your script from AbstractAjaxProcessor, so you&#39;ll be able to call it from your Client Script. Save the record.</p>
<p><strong>   </strong></p>
<p><strong><span style="font-size: 12pt;">Separate Logic from Input</span><br /></strong>Create two functions in your Script Include as shown below. The golden rule of programming is that a complex problem is just a many simple problems that you need to solve at the same time. So break everything down into its problems! We have two problems to solve here:</p>
<ul><li>Get data to and from the form</li><li>Do something with the data</li></ul>
<p>As a first step, I like to create separate functions for your input from the client and your server side logic, so it becomes testable with different input parameters.</p>
<p>This is the pattern I use for all my GlideAjax scripts.</p>
<p> </p>
<p>var UserAjaxUtil &#61; Class.create();</p>
<p>UserAjaxUtil.prototype &#61; Object.extendsObject(AbstractAjaxProcessor, {</p>
<p> </p>
<p>        ajaxClientDataHandler: function() {</p>
<p>                  //Get data from the form</p>
<p>                  var gformData1 &#61; this.getParameter(&#39;sysparm_parm1&#39;);</p>
<p>                  //Setup data to return to form</p>
<p>                  var answer&#61;{};</p>
<p>                  //Do server side stuff</p>
<p>                  answer[&#39;location&#39;] &#61; this.doServerSideStuff(gformData1);</p>
<p>                  //Encode data to send back to the form</p>
<p>                  return new JSON().encode(answer);</p>
<p>        },</p>
<p> </p>
<p>        doServerSideStuff: function() {</p>
<p>                  //Put your logic here</p>
<p>        },</p>
<p> </p>
<p>      type: &#39;UserAjaxUtil&#39;</p>
<p>});</p>
<p> </p>
<p>Now, let&#39;s put our logic into the doServideStuff() function</p>
<p> </p>
<p><span style="color: rgba(0, 0, 0, 0); font-family: Consolas, &#39;Courier New&#39;, Courier, mono, serif; font-size: 12px;">doServerSideStuff</span>: function(userUID) {</p>
<p>        var grUser &#61; new GlideRecordSecure(&#39;sys_user&#39;);</p>
<p>        if (grUser.get(userUID)) {</p>
<p>                  return grUser.getValue(&#39;u_location&#39;);</p>
<p>        }</p>
<p>},</p>
<p> </p>
<p>Notice that I have used <strong>GlideRecordSecure</strong>. Whenever you expose API to the client side, you want to ensure it enforces ACL&#39;s - otherwise you are introducing a security hole into your system.<br />Now, your function is testable using any given user.</p>
<p> </p>
<p>Now you can call this doServerSideStuff() function using your favorite code testing tool.</p>
<p> </p>
<p>var userAjaxUtil &#61; new UserAjaxUtil();</p>
<p>userAjaxUtil.doServerSideStuff(gs.getUserID());</p>
<p> </p>
<p><strong>Output</strong></p>
<pre class="jive_macro_quote jive_text_macro"><strong>2c22f8536f541200bbf707574f3ee44f</strong></pre>
<p><strong>         </strong></p>
<p>This way, we can test our logic is sound before we call the script from the Client Side and just &#39;hope for the best&#39;.</p>
<p> </p>
<p>Now you can simulate values that the client would be sending the Script Include. You can also write all the appropriate Unit Tests if you are doing Automated Testing.</p>
<p>Let&#39;s write the ajax input function now too. The whole code will look like this:</p>
<p> </p>
<p>var UserAjaxUtil &#61; Class.create();  </p>
<p>UserAjaxUtil.prototype &#61; Object.extendsObject(AbstractAjaxProcessor, {  </p>
<p> </p>
<p>        ajaxClientDataHandler: function() {  </p>
<p>                  //Get data from the form</p>
<p>                  var gformData1 &#61; this.getParameter(&#39;sysparm_parm1&#39;);</p>
<p>                  //Setup data to return to form</p>
<p>                  var answer&#61;{};</p>
<p>                  //Do server side stuff</p>
<p>                  answer[&#39;location&#39;] &#61; this.doServerSideStuff(gformData1);</p>
<p>                  //Encode data to send back to the form</p>
<p>                  return new JSON().encode(answer);</p>
<p>        },  </p>
<p> </p>
<p>        doServerSideStuff: function(userUID) {  </p>
<p>                  var grUser &#61; new GlideRecordSecure(&#39;sys_user&#39;);  </p>
<p>                  if (grUser.get(userUID)) {  </p>
<p>                            return grUser.getValue(&#39;location&#39;);  </p>
<p>                  }</p>
<p>        },  </p>
<p> </p>
<p>      type: &#39;UserAjaxUtil&#39;  </p>
<p>});  </p>
<p> </p>
<p><span style="font-size: 14pt;"><strong>Refactor &amp; Bring it all together</strong></span></p>
<p>Next up, we will need to alter our original onChange Client Script.</p>
<p> </p>
<p>function onChange(control, oldValue, newValue, isLoading) {</p>
<p>    if (isLoading)</p>
<p>          return;</p>
<p> </p>
<p> </p>
<p>    if (newValue &#61;&#61; &#39;&#39;) {</p>
<p>          g_form.setValue(&#39;location&#39;, &#39;&#39;);</p>
<p>          return;</p>
<p>    }</p>
<p> </p>
<p> </p>
<p>    if (!g_form.getControl(&#39;location&#39;))</p>
<p>          return;</p>
<p> </p>
<p>        var ga &#61; new GlideAjax(&#39;UserAjaxUtil&#39;); //Name of the Ajax Script Inclide</p>
<p>        ga.addParam(&#39;sysparm_name&#39;,&#39;ajaxClientDataHandler&#39;); //Method to call</p>
<p>        ga.addParam(&#39;sysparm_parm1&#39;,newValue); //Parm1</p>
<p>        ga.getXML(userCallback);</p>
<p>}</p>
<p> </p>
<p> </p>
<p>function userCallback(response) {</p>
<p>        var answer &#61; response.responseXML.documentElement.getAttribute(&#34;answer&#34;);</p>
<p>        answer &#61; answer.evalJSON();</p>
<p>        g_form.addInfoMessage(answer.location);</p>
<p>        setLocation(answer);</p>
<p>}</p>
<p> </p>
<p> </p>
<p>function setLocation(caller) {</p>
<p>    if (caller)</p>
<p>            g_form.setValue(&#39;location&#39;, caller.location);</p>
<p>}</p>
<p> </p>
<p>You can see below that the old Line of code has been commented out and replaced with the GlideAjax code. This is only for instructional purposes - it is generally a bad idea to comment out code with no explanation. If it&#39;s not needed - it should be removed. ServiceNow has Version Control via Update Sets, so you can always go back and look at past state.</p>
<p> </p>
<p><span style="font-size: 14pt;"><strong>Make your existing GlideAjax scripts reusable</strong></span></p>
<p>You&#39;ve now been given a procedure for writing GlideAjax that hopefully makes it a much more enjoyable process. You&#39;re happy that you&#39;ve learned something new and that you&#39;ve been able to implement a requirement using Best Practice. That is until your boss gives you a new requirement. He wants the Callers job title shown on the screen as well. Never fear - we have already written the foundations to make this a whole lot easier!</p>
<p> </p>
<p><span style="text-decoration: underline;"><a class="jive_macro jive_macro_blogpost" title="How to Write Smart GlideAjax Quickly [Part 2]" href="community?id&#61;community_blog&amp;sys_id&#61;b23deae5dbd0dbc01dcaf3231f961992" rel="nofollow">How to Write Smart GlideAjax Quickly [Part 2]</a> </span></p>