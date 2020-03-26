---
title: "getReferenceAdvanced gformgetReference and GlideAjax Alternatives"
date: 2017-05-26T16:47:39.000Z
authors: ["Michael Ritchie"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=32cca265dbd0dbc01dcaf3231f96197a"
---
<p>A common use case in ServiceNow is to have data driven forms that fill themselves in based input from other fields.   For example after selecting a user, fill in location fields, department fields, etc based upon the selected user&#39;s information.   This is typically accomplished using a ServiceNow client script using the out of the box <a title="ki.servicenow.com/index.php?title&#61;GlideForm_(g_form)#getReference" href="http://wiki.servicenow.com/index.php?title&#61;GlideForm_%28g_form%29#getReference" rel="nofollow">g_form.getReference()</a> function.   While this function is useful, it has its shortcomings including the ability to &#34;dot-walk&#34; into the referenced record&#39;s references.   For example if your form needs to display the user&#39;s location information like street, city, state, and zip, the getReference() function cannot &#34;dot-walk&#34; into the user&#39;s location record to gather these attributes because &#34;location&#34; is a reference on the user record.   The typical answer to solving this requirement is <a title="ocs.servicenow.com/bundle/istanbul-servicenow-platform/page/script/server-scripting/reference/r_GlideAjax.html" href="https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/script/server-scripting/reference/r_GlideAjax.html" rel="nofollow">GlideAjax</a> that includes a client side call to a server side script to gather the details and then pass it back to the client.   GlideAjax is quite useful and very powerful, however it can be difficult to setup since it requires somewhat complicated step by step instructions to make it work.</p>
<p> </p>
<p>On top of detailed step by step instructions, GlideAjax setup is different between the desktop UI and the service portal UI.   If you are not careful, you can have GlideAjax &#34;sprawl&#34; where you have many script include records for point solutions.   There have been several ideas on the ServiceNow Community discussing how to solve this problem such as <a class="jive_macro jive_macro_user" title="goranlundqvist" href="/community?id&#61;community_user_profile&amp;user&#61;eb4f86e5db181fc09c9ffb651f961907" rel="nofollow">goranlundqvist</a>&#39;s &#34;<a title="" href="/community?id&#61;community_blog&amp;sys_id&#61;884d6ee5dbd0dbc01dcaf3231f9619c0" rel="nofollow">Lets make GlideAjax a little more dynamic</a>&#34; and <a class="jive_macro jive_macro_user" title="tim.harris" href="/community?id&#61;community_user_profile&amp;user&#61;ba215a65db981fc09c9ffb651f961903" rel="nofollow">tim.harris</a>&#39;s &#34;<a title="" href="/community?id&#61;community_blog&amp;sys_id&#61;4a1d22e5dbd0dbc01dcaf3231f961976" rel="nofollow">Standardizing GlideAjax Calls to Prevent Script Include Sprawl</a>&#34;.   Those posts have been very useful in getting people going with GlideAjax.</p>
<p> </p>
<p>&#34;getReferenceAdvanced&#34; is an easier solution that is a simple function call form a client script.   In this function call, you can specify one or more attributes that you want from the referenced record including &#34;dot-walk&#34; attributes.   A global UI script enables this functionality on any form or service portal in your instance.</p>
<p> </p>
<p><strong>Note</strong>: The mobile app and UI do not support UI Scripts so this solution will not work for the app store mobile app or the mobile browser ($m.do) at this time.</p>
<p> </p>
<p>Another challenge with GlideAjax is queries are happening server side by a system process and if you are not careful you may be exposing more data than the logged in user is supposed to have access to.   You will find many comments on the Community about this.   This solution solves that issue by using <a title="ocs.servicenow.com/bundle/istanbul-servicenow-platform/page/script/glide-server-apis/concept/c_UsingGlideRecordSecure.html" href="https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/script/glide-server-apis/concept/c_UsingGlideRecordSecure.html" rel="nofollow">GlideRecordSecure</a> instead of GlideRecord thus enforcing ACLs.</p>
<p> </p>
<p><span style="text-decoration: underline;"><strong>The Use Case:</strong></span></p>
<p>I searched the Community for common use cases where the getReference function wasn&#39;t working and GlideAjax was proposed.   One customer had a form with a location reference field and the location&#39;s street, city, state, and zip needed to be filled into separate fields on the form.   Another user needed to fill in separate fields for email, department name, and department cost center&#39;s code after filling in the caller.   These are both excellent examples of where the coding to accomplish this use case can be complicated.</p>
<p> </p>
<p>The getReferenceAdvanced solution is much simpler.   In testing, I setup a catalog item form that prompts for a &#34;Requested For&#34; user which is pretty typically across any type of task/case intake form.   Once the user is selected details from the user&#39;s profile are filled in below the Requested For including location and department information.   Below is a screenshot of this form indicating the source of data when the getReferenceAdvanced function runs:</p>
<p><img class="image-1 jive-image" style="max-width: 1200px; max-height: 900px;" src="79826482db50dfc03eb27a9e0f9619f9.iix" alt="" /></p>
<p> </p>
<p><span style="text-decoration: underline;"><strong>The Code:</strong></span></p>
<p>This solution involves several components that is available for download from ServiceNow Share: <a href="https://developer.servicenow.com/app.do#!/share/contents/8781058_getreferenceadvanced_client_script_function_a_glideajax_alternative?v&#61;1&amp;t&#61;PRODUCT_DETAILS" rel="nofollow">getReferenceAdvanced Client Script Function, a GlideAjax Alternative</a>.   <strong>Download the update set from Share, load/preview/commit it, and then you can leverage it in your client scripts.</strong></p>
<p> </p>
<ul><li>UI Script called getReferenceAdvanced: The getReferenceAdvanced* functions are part of a global UI script which make it available to a client script on any form in any scope in your ServiceNow instance.   This client script validates the data passed to it and then makes a REST web service call back to the instance to gather data.
<ul><li>For security purposes the user&#39;s security token is passed to the REST web service which prevents unauthorized access to instance data as well as enforcing ACL&#39;s for the logged in user.</li></ul>
</li><li>Scripted REST API called getReferenceAdvanced: The getReferenceAdvanced UI Script passes data to this Scripted REST API that then gathers the data requested and passes it back to the client script.   A Scripted REST API was used instead of GlideAjax because calling a web service behaves the same in the Desktop UI and the Service Portal UI which simplifies the code.   This web service requires authentication for security purposes and the user&#39;s session token is used for the authentication.</li></ul>
<p> </p>
<p><span style="text-decoration: underline;"><strong>The Setup:</strong></span></p>
<p>The desktop UI and the Service Portal UI behave a little differently so two different function calls are provided for the two different UIs:</p>
<ul><li>Desktop:
<ul><li>getReferenceAdvancedDesktop(&#34;REFERENCE-FIELD-NAME&#34;, &#34;SEMICOLON-SEPARATED-LIST-OF-FIELDS-YOU-WANT&#34;);</li></ul>
</li><li>Service Portal:
<ul><li>getReferenceAdvancedPortal(g_form, &#34;REFERENCE-FIELD-NAME&#34;, &#34;SEMICOLON-SEPARATED-LIST-OF-FIELDS-YOU-WANT&#34;);</li><li>Notice the getReferenceAdvancedPortal function has a third input of &#34;g_form&#34;.   This is a required input and is basically an object containing all the details about the form being displayed.   For some reason the g_form object is not passed to the UI Script from the Service Portal like it is with the desktop UI so it is required that it is passed.</li></ul>
</li></ul>
<p> </p>
<p>The getReferenceAdvancedDesktop and getReferenceAdvancedPortal return a JSON object (name/value pair) with the field requested and its value from the reference record.   Because the data is returned in an Object, all the &#34;dots&#34; that were passed into the function are changed to underscores so that you can call out each data element individually.   For example the value of &#34;location.street&#34; is stored in the &#34;location_street&#34; attribute within the returned object.   This data can then be combined with the g_form.setValue() function to set values on the form.</p>
<p> </p>
<p>OK so this sound complicated, how is this simpler and how do I use it?!!   Considering use case mentioned above and the test form screenshot, the following code is used in an onChange client script to fill in the form.</p>
<p> </p>
<p>Desktop Script:</p>
<p>function onChange(control, oldValue, newValue, isLoading) {</p>
<p>      if (isLoading || newValue &#61;&#61; &#39;&#39;) {</p>
<p>              return;</p>
<p>      }</p>
<p>     </p>
<p>      var reqFor &#61; getReferenceAdvancedDesktop(&#34;requested_for&#34;, &#34;location.street;location.city;location.state;location.zip;department;department.dept_head;department.cost_center.code&#34;);</p>
<p>      g_form.setValue(&#34;street&#34;, reqFor.location_street);</p>
<p>      g_form.setValue(&#34;city&#34;, reqFor.location_city);</p>
<p>      g_form.setValue(&#34;state&#34;, reqFor.location_state);</p>
<p>      g_form.setValue(&#34;department&#34;, reqFor.department);</p>
<p>      g_form.setValue(&#34;department_manager&#34;, reqFor.department_dept_head);</p>
<p>      g_form.setValue(&#34;department_cc_code&#34;, reqFor.department_cost_center_code);      </p>
<p>}</p>
<p> </p>
<p>Service Portal Script:</p>
<p>function onChange(control, oldValue, newValue, isLoading) {</p>
<p>      if (isLoading || newValue &#61;&#61; &#39;&#39;) {</p>
<p>              return;</p>
<p>      }</p>
<p>     </p>
<p>      var reqFor &#61; getReferenceAdvancedPortal(g_form, &#34;requested_for&#34;, &#34;location.street;location.city;location.state;location.zip;department;department.dept_head;department.cost_center.code&#34;);</p>
<p>      g_form.setValue(&#34;street&#34;, reqFor.location_street);</p>
<p>      g_form.setValue(&#34;city&#34;, reqFor.location_city);</p>
<p>      g_form.setValue(&#34;state&#34;, reqFor.location_state);</p>
<p>      g_form.setValue(&#34;department&#34;, reqFor.department);</p>
<p>      g_form.setValue(&#34;department_manager&#34;, reqFor.department_dept_head);</p>
<p>      g_form.setValue(&#34;department_cc_code&#34;, reqFor.department_cost_center_code);</p>
<p>     </p>
<p>}</p>
<p> </p>
<p>As you can see in the example script, instead of making multiple getReference calls, only one was made with a semicolon separated list of the attributes needed from the Requested For&#39;s user record.   This has a performance benefit because less database calls are being made as well as huge user experience increase because the user is waiting less time for the form data to be filled in.</p>
<p> </p>
<p>Notice the getReferenceAdvanced* call is set to the &#34;answer&#34; variable that is then used for the setValue() function calls.   Again each of the attributes requested using &#34;dot-walking&#34; are updated with an underscore but using the same name.   If only one attribute is needed from the reference record, either of the following scripts will work.   In this example the user&#39;s department&#39;s manager (dept_head) is needed:</p>
<p>g_form.setValue(&#34;department_manager&#34;, getReferenceAdvancedDesktop(&#34;requested_for&#34;, &#34;department.dept_head&#34;).department_dept_head);</p>
<p> </p>
<p>--OR--</p>
<p> </p>
<p>var reqFor &#61; getReferenceAdvancedDesktop(&#34;requested_for&#34;, &#34;department.dept_head&#34;);</p>
<p>g_form.setValue(&#34;department_manager&#34;, reqFor.department_dept_head);</p>
<p> </p>
<p>In order to use the getReferenceAdvanced UI script working in your Service Portal(s), you will need to configure your Service Portal Theme.   As specified by <a class="jive_macro jive_macro_user" title="James.Neale" href="/community?id&#61;community_user_profile&amp;user&#61;5cc1daaddb981fc09c9ffb651f961987" rel="nofollow">James.Neale</a> in <a title="" href="/community?id&#61;community_question&amp;sys_id&#61;e2c113addbdcdbc01dcaf3231f961980" rel="nofollow">this Community Article</a>:</p>
<ol><li>Navigate to Service Portal\Themes and select your theme.   If you are using the OOB Service Portal, click Stock.</li><li>Scroll down to the &#34;JS Includes&#34; Related List and click New.</li><li>Set the name to getReferenceAdvanced or whatever makese sense to you, Source should be set to UI Script and then select the getReferenceAdvanced UI Script and click Submit.</li><li>Repeat steps 1-3 if you have multiple Service Portals that need this capability.</li></ol>
<p> </p>
<p><span style="text-decoration: underline;"><strong>Error Handling/Troubleshooting:</strong></span></p>
<p>To make this as painless as possible to setup, error handling has been set in the getReferenceAdvanced UI Script.   These alert popup messages will appear when testing your client script:</p>
<ul><li>If you call getReferenceAdvanced* in your client script and forget to specify a reference field, you will receive the following message: The getReferenceAdvanced() function requires a field to be passed.</li><li>If you call getReferenceAdvanced* in your client script and is NOT a reference field, you will receive the following message: The getReferenceAdvanced() function only works with reference fields.   The field specified is not a reference field.</li><li>If you call getReferenceAdvanced<strong>Portal</strong> in your client script and you don&#39;t pass the g_form object, you will receive the following message: The getReferenceAdvanced() function requires the g_form object to be passed from the Service Portal.   Please pass that as the first parameter.
<ul><li>Remember that Service Portal client scripts (Type is Mobile/Service Portal) require you to use the getReferenceAdvancedPortal() function and the first parameter needs to be g_form as shown on the example scripts above.</li></ul>
</li><li>If you call getReferenceAdvanced* in your client script and you don&#39;t pass the fields needed from the reference record, you will receive the following message: The getReferenceAdvanced() function requires a string of field(s) you wish to return.</li><li>If you call getReferenceAdvanced* in your client script and the field passed does not have a value, you will receive the following message: The getReferenceAdvanced() function requires the field &#39;FIELD-NAME&#39; to have a value.</li></ul>