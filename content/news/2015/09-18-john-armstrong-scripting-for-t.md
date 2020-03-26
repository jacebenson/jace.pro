---
title: "Scripting for the Classic Mobile UI"
date: 2015-09-18T04:14:11.000Z
authors: ["John Armstrong"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=9bbd2ea9dbd0dbc01dcaf3231f96198f"
---
<p>If you&#39;re using the Mobile UI for the first time, you&#39;ll want to make sure your custom scripts function the way you expect as part of your testing process.   There are some limitations in the Mobile UI that may require changes in any custom created scripts, or scripts that have been modified from their out of box versions.</p>
<p><strong> </strong></p>
<h2><span style="text-decoration: underline;">Where to Look</span></h2>
<p>The differences between the two UIs are on the client side (scripts running on your browser as opposed to the server).   The following elements make use of client side scripting, and may need changes to work as expected in the Mobile UI.</p>
<p> </p>
<ul><li>Client Scripts (Including Catalog Client Scripts)</li><li>UI Policies</li><li>Navigator Modules</li><li>UI Actions</li></ul>
<p> </p>
<p>Note that the out of box versions of these elements have either been updated to work in the Mobile UI, or marked to only run in the UI in which they function.   When you start using the Mobile UI, you&#39;ll be looking for customized   elements, which won&#39;t necessarily be compatible.</p>
<p> </p>
<p> </p>
<p><strong>What to Look For</strong></p>
<p>The first thing we need to do is find <a title="ki.servicenow.com/index.php?title&#61;Mobile_Client_GlideForm_(g_form)_Scripting#Do_Not_Use_Deprecated_Methods" href="http://wiki.servicenow.com/index.php?title&#61;Mobile_Client_GlideForm_%28g_form%29_Scripting#Do_Not_Use_Deprecated_Methods" rel="nofollow">deprecated methods</a>, <a title="ki.servicenow.com/index.php?title&#61;Mobile_Client_GlideForm_(g_form)_Scripting#Do_Not_Use_Methods_Unavailable_on_the_Mobile_Platform" href="http://wiki.servicenow.com/index.php?title&#61;Mobile_Client_GlideForm_%28g_form%29_Scripting#Do_Not_Use_Methods_Unavailable_on_the_Mobile_Platform" rel="nofollow">unsupported methods</a>,   and <a title="ki.servicenow.com/index.php?title&#61;Mobile_Client_GlideForm_(g_form)_Scripting#Do_Not_Reference_Unsupported_Browser_Objects" href="http://wiki.servicenow.com/index.php?title&#61;Mobile_Client_GlideForm_%28g_form%29_Scripting#Do_Not_Reference_Unsupported_Browser_Objects" rel="nofollow">unsupported browser objects</a> in the existing scripts.</p>
<p> </p>
<p><strong>Deprecated Methods</strong></p>
<ul><li>getControl</li><li>getElement</li><li>getFormElement</li><li>getOption</li></ul>
<p><strong>Unsupported Methods</strong></p>
<ul><li>showRelatedList</li><li>hideRelatedList</li><li>showRelatedLists</li><li>hideRelatedLists</li><li>flash</li><li>getSections</li><li>enableAttachments</li><li>disableAttachments</li><li>setReadonly (Note that setReadOnly is available)</li><li>getParameter</li></ul>
<p><strong>Unsupported Browser Objects</strong></p>
<ul><li>Window</li><li>jQuery or Prototype ($, $j, or $$)</li><li>Document</li></ul>
<p> </p>
<p><strong>Multiple Functions</strong></p>
<p>The Mobile UI expects a single function within a client script.   Each Client script contains an onChange, onCellEdit, onLoad, or onSubmit function, depending on it&#39;s type.   All script in a client script needs to be contained within this function.   Additional functions are allowed, as long as they&#39;re contained within the top level script.</p>
<p> </p>
<p><strong> </strong></p>
<h2><span style="text-decoration: underline;">What To Do About It</span></h2>
<p><strong>Deprecated Methods</strong></p>
<p>Deprecated methods are not available in the Mobile UI, but their functionality has been replaced with new methods.   Unsupported Methods and Objects do not have replacement methods, and should not be used in the Mobile UI.   For example, while getControl cannot be used, methods like g_form.hasField g_form.addDecoration can be used to achieve the same goals.</p>
<p> </p>
<p>The complete list of methods added for use in the Mobile UI can be found in the <a title="ki.servicenow.com/index.php?title&#61;Mobile_GlideForm_(g_form)_API_Reference" href="http://wiki.servicenow.com/index.php?title&#61;Mobile_GlideForm_%28g_form%29_API_Reference" rel="nofollow">Mobile GlideForm API Reference</a> in the wiki.</p>
<p> </p>
<p><strong>Unsupported Methods</strong></p>
<p>Unsupported are method that cannot be used due to the limitations of the Mobile UI.   When run in mobile, these methods will perform no action, so nothing will happen when they are run.   Unlike the deprecated methods, there are not mobile equivalents of these methods.</p>
<p> </p>
<p><strong>Unsupported Objects</strong></p>
<p>Direct access to the Document and HTML elements are not allowed in the Mobile UI, as a result, the objects listed above are not supported.   Attempts to get values from these objects will return values of &#39;undefined&#39;.</p>
<p> </p>
<p><strong>Multiple Functions</strong></p>
<p>Functions of than the onLoad function (or whichever one is used) can be created, but need to be contained within the top level function.</p>
<p> </p>
<p><strong>Specifying Desktop or Mobile UI (or Both)</strong></p>
<p>While the Mobile UI has it&#39;s own <a title="ki.servicenow.com/index.php?title&#61;Configuring_the_Smartphone_Interface#Defining_Smartphone_Application_Menus_and_Modules" href="http://wiki.servicenow.com/index.php?title&#61;Configuring_the_Smartphone_Interface#Defining_Smartphone_Application_Menus_and_Modules" rel="nofollow">Navigator Modules</a> and <a title="ki.servicenow.com/index.php?title&#61;Configuring_the_Smartphone_Interface#Adding_UI_Actions_on_the_Smartphone_Interface" href="http://wiki.servicenow.com/index.php?title&#61;Configuring_the_Smartphone_Interface#Adding_UI_Actions_on_the_Smartphone_Interface" rel="nofollow">UI Actions</a>, it shares it&#39;s Client Scripts and UI Policies with the Desktop UI.   Fortunately, you can specify which UI Type these execute in.   You can have these execute in both UI types, which will save you time when a script is valid in both Mobile and Desktop.     You can also set scripts only to run in one UI or the other.   That way you can have a script that uses the full functionality of the Desktop UI, and maintain a separate script for the Mobile UI that works within Mobile&#39;s limitations.</p>
<p> </p>
<p><strong>Client Scripts</strong></p>
<p><a title="ki.servicenow.com/index.php?title&#61;Configuring_the_Smartphone_Interface#Enabling_Client_Scripts_for_the_Smartphone_Interface" href="http://wiki.servicenow.com/index.php?title&#61;Configuring_the_Smartphone_Interface#Enabling_Client_Scripts_for_the_Smartphone_Interface" rel="nofollow">Client scripts</a> have a field called &#39;UI Type&#39; which can be set to Desktop, Mobile, or Both.</p>
<p><strong> </strong></p>
<p><strong>UI Policies</strong></p>
<p><a title="ki.servicenow.com/index.php?title&#61;Configuring_the_Smartphone_Interface#Enabling_UI_Policies_for_the_Smartphone_Interface&amp;gsc.tab&#61;0" href="http://wiki.servicenow.com/index.php?title&#61;Configuring_the_Smartphone_Interface#Enabling_UI_Policies_for_the_Smartphone_Interface&amp;gsc.tab&#61;0" rel="nofollow">UI Policies</a> have a field called &#34;Run scripts in UI type&#34; which can be set to Desktop, Mobile, or Both.</p>
<p> </p>
<p> </p>
<table border="1"><tbody><tr><td>
<p>Let&#39;s Take an example script that has been made usable in the Mobile UI.   The Example we&#39;re using is the out of box client script   &#34;(BP) Set Location to User.&#34;   This script is triggered when the Caller field on the incident form is changed.   It checks the for the new Caller&#39;s location, and updates the Location field on the incident form to match.</p>
<p> </p>
<p>This has already been fixed in Dublin and up, but here&#39;s how it originally looked in Calgary, back before the Mobile UI was introduced:</p>
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
<p> </p>
<p> </p>
<p>There are a few things that needed to be changed to make this compatible with the Mobile UI.   Here&#39;s what we did.</p>
<p> </p>
<p> </p>
<p><strong>Replace getControl</strong></p>
<p>Our First issue is on line 10, we check to see if the location field is on the form using getControl.   This is one of those methods we can&#39;t use in mobile.   Fortunately there&#39;s a working alternate called <a title="ki.servicenow.com/index.php?title&#61;Mobile_GlideForm_(g_form)_API_Reference#hasField.28fieldName.29" href="http://wiki.servicenow.com/index.php?title&#61;Mobile_GlideForm_%28g_form%29_API_Reference#hasField.28fieldName.29" rel="nofollow">hasField</a> we can use instead.   So, we need to change line as shown below.   (Note that in instances Fuji, this has already been done).</p>
<p> </p>
<p>From:</p>
<p>if (!g_form.getControl(&#39;location&#39;))</p>
<p> </p>
<p>To:</p>
<p>if (!g_form.hasField<span style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">(&#39;location&#39;))</span></p>
<p> </p>
<p><strong>Make getReference calls Asynchronous</strong></p>
<p>The next issue is on lines 13-19.   On line 13, the script uses getReference to get the value of the caller_id field.   It a function called setLocation as a callback function.   This is good idea in general, but especially important in mobile, where it is <a title="ki.servicenow.com/index.php?title&#61;Mobile_Client_GlideForm_(g_form)_Scripting#Do_Not_Make_Synchronous_JavaScript_Calls" href="http://wiki.servicenow.com/index.php?title&#61;Mobile_Client_GlideForm_%28g_form%29_Scripting#Do_Not_Make_Synchronous_JavaScript_Calls" rel="nofollow">required</a>. The function itself is on lines 16-19.</p>
<p> </p>
<p>While the asynchronous call is already handled, there&#39;s an issue, which is that the setLocation function is outside the onChange function, which is another thing that we can&#39;t do in Mobile.   The easiest solution is to just copy the setLocation function into the onChange function, so it appears after the place where it&#39;s called on line 13, but before the bracket that ends the onChange function on line 14.</p>
<p> </p>
<p><strong>Change the UI Type</strong></p>
<p>Now that we&#39;ve got a compatible script, we need to change the <strong>UI Type</strong> field.   By default, it&#39;s set to &#34;Desktop,&#34; but now that we&#39;ve made our changes we can set it to &#34;Both&#34; so it will run on either UI.</p>
<p> </p>
<p>Here&#39;s how the script looks with the changes in place:</p>
<p> </p>
<p>function onChange(control, oldValue, newValue, isLoading) {</p>
<p>      if (isLoading)</p>
<p>              return;</p>
<p> </p>
<p>      if (newValue &#61;&#61; &#39;&#39;) {</p>
<p>              g_form.setValue(&#39;location&#39;, &#39;&#39;);</p>
<p>              return;</p>
<p>      }</p>
<p> </p>
<p>      if (!g_form.hasField(&#39;location&#39;))</p>
<p>              return;</p>
<p> </p>
<p>      var caller &#61; g_form.getReference(&#39;caller_id&#39;, setLocation);</p>
<p> </p>
<p> </p>
<p> </p>
<p>      function setLocation(caller) {</p>
<p>              if (caller)</p>
<p>                      g_form.setValue(&#39;location&#39;, caller.location);</p>
<p>      }</p>
<p>}</p>
</td></tr></tbody></table>
<p>This is a simple example, but Illustrates a lot of the above points.   The links below provide additional information and instruction, as well as a few documented problems to be aware of.</p>
<p> </p>
<p> </p>
<p><span style="font-size: 18px;"><strong>Further Reading</strong></span></p>
<p><strong>Product Documentation</strong></p>
<ul><li><a title="ki.servicenow.com/index.php?title&#61;Configuring_the_Smartphone_Interface" href="http://wiki.servicenow.com/index.php?title&#61;Configuring_the_Smartphone_Interface" rel="nofollow">Configuring the Smartphone Interface</a></li><li><a title="ki.servicenow.com/index.php?title&#61;Mobile_Client_GlideForm_(g_form)_Scripting" href="http://wiki.servicenow.com/index.php?title&#61;Mobile_Client_GlideForm_%28g_form%29_Scripting" rel="nofollow">Mobile Client GlideForm (g form) Scripting</a></li><li><a title="ki.servicenow.com/index.php?title&#61;Mobile_GlideForm_(g_form)_API_Reference" href="http://wiki.servicenow.com/index.php?title&#61;Mobile_GlideForm_%28g_form%29_API_Reference" rel="nofollow">Mobile GlideForm (g form) API Reference</a></li></ul>
<p> </p>
<p><strong>Knowledge Base</strong></p>
<ul><li><a title="i.service-now.com/kb_view.do?sys_kb_id&#61;a0c1329c0fd24a0098f7982be1050ea3" href="https://hi.service-now.com/kb_view.do?sys_kb_id&#61;a0c1329c0fd24a0098f7982be1050ea3" rel="nofollow">KB0551285</a>:   Using Asynchronous Calls in Mobile UI Scripting</li><li><a title="i.service-now.com/kb_view.do?sys_kb_id&#61;046d0c246f8682802c9f8e4c2c3ee48b" href="https://hi.service-now.com/kb_view.do?sys_kb_id&#61;046d0c246f8682802c9f8e4c2c3ee48b" rel="nofollow">KB0551074</a>:   Mobile View Basics</li><li><a title="i.service-now.com/kb_view.do?sys_kb_id&#61;776185a20fdc86002f42938172050e20" href="https://hi.service-now.com/kb_view.do?sys_kb_id&#61;776185a20fdc86002f42938172050e20" rel="nofollow">KB0549860</a>:   Client Script or UI Policy is not running.</li><li><a title="i.service-now.com/kb_view.do?sys_kb_id&#61;fa3ad4476f0e02002c9f8e4c2c3ee487" href="https://hi.service-now.com/kb_view.do?sys_kb_id&#61;fa3ad4476f0e02002c9f8e4c2c3ee487" rel="nofollow">KB0551212</a>:   Mobile UI limitations</li></ul>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><strong>Community</strong></p>
<ul><li><a title="" href="/community/service-automation-platform/user-interface/blog/2015/08/26/debugging-the-mobile-ui-on-the-desktop" rel="nofollow">Debugging the Mobile UI from your Desktop</a></li><li><a title="" href="/community/service-automation-platform/scripting/blog/2015/09/17/using-asynchronous-calls-in-the-mobile-ui" rel="nofollow">Using Asynchronous Calls in the Mobile UI</a></li></ul>