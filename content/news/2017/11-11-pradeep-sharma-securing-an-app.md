---
title: "Securing an application using Cross Scope Access Application Access Settings  Restrict Table Choices"
date: 2017-11-10T06:49:31.000Z
authors: ["Pradeep Sharma"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=44ad22a9dbd0dbc01dcaf3231f961921"
---
<p>While developing a <a title="ocs.servicenow.com/bundle/jakarta-application-development/page/build/applications/concept/c_ApplicationScope.html" href="https://docs.servicenow.com/bundle/jakarta-application-development/page/build/applications/concept/c_ApplicationScope.html" rel="nofollow">scoped application,</a> you may want to secure scoped applications against other applications. Securing application helps the author to have control of their application and prevents customers from interacting with any other artifacts without the author&#39;s knowledge. Below are the ways in which <a title="ocs.servicenow.com/bundle/helsinki-application-development/page/build/applications/concept/c_DefaultDesignAccessPermissions.html" href="https://docs.servicenow.com/bundle/helsinki-application-development/page/build/applications/concept/c_DefaultDesignAccessPermissions.html" rel="nofollow">design time permissions </a>on the scoped application can be granted or restricted</p>
<p> </p>
<h1>3 ways to secure your application</h1>
<ol><li><a title="ocs.servicenow.com/bundle/jakarta-application-development/page/build/applications/concept/c_ApplicationAccessSettings.html" href="https://docs.servicenow.com/bundle/jakarta-application-development/page/build/applications/concept/c_ApplicationAccessSettings.html" rel="nofollow">Application Access Setting</a></li><li><a title="ocs.servicenow.com/bundle/jakarta-application-development/page/build/applications/reference/c_CrossScopePrivilegeRecord.html" href="https://docs.servicenow.com/bundle/jakarta-application-development/page/build/applications/reference/c_CrossScopePrivilegeRecord.html" rel="nofollow">Cross Scope Access</a></li><li>Restrict Table Choices</li></ol>
<p> </p>
<p>In this post, I will show you how to utilize Cross Scope Access, Application access setting and Restrict Table Choices to secure your scoped apps against other applications. I&#39;ll give you examples of how to use Application Access Setting, Restrict Table Choices, Cross Scope Access to enable access, disable access, and track your scoped apps across the platform.</p>
<p> </p>
<h2>Application Access Setting</h2>
<p><a title="eveloper.servicenow.com/app.do#!/document/content/app_store_doc_parts_of_application_jakarta_c_ApplicationAccessSettings?v&#61;jakarta" href="https://developer.servicenow.com/app.do#!/document/content/app_store_doc_parts_of_application_jakarta_c_ApplicationAccessSettings?v&#61;jakarta" rel="nofollow">Application Access Setting</a> is defined to specify what application artifacts are available to other custom applications in different application scopes. These permissions are in addition to the standard access controls (ACLs) that determine whether users can access data in the custom application.</p>
<p> </p>
<ol style="list-style-type: decimal;"><li>On your instance navigate to <strong>System Applications &gt; Studio</strong></li><li>Click on <strong>open Studio</strong> tab.</li><li>Click on the application and then select the tables whose application access setting needs to be modified. You will see the below image once you click on any table.</li></ol>
<p style="text-align: center;"><img class="image-9 jive-image" style="width: 620px; height: 145px;" src="02f13ff1db1cdfc0b322f4621f961920.iix" alt="scoped application access.jpg" /></p>
<p>The Can read, Can write, Can update, and Can delete Application Access options, grant scripts from other application scopes the ability to perform database operations against the table records. In the default case, all application scope scripts can read the table&#39;s records but cannot perform any other database operations.</p>
<p> </p>
<p> </p>
<pre class="jive_text_macro jive_macro_alert">&#34;Allow configuration&#34; restricts whether out-of-scope applications can create application files like Business rules, New fields, Client script and UI actions.</pre>
<p> </p>
<h3>Restrict application on a scoped app</h3>
<p>I can restrict other applications from doing any operation (Create, Read, Update, Delete, Web Service Interaction) on this scoped app by selecting the &#34;Accessible from&#34; value to &#34;This application scope only.&#34; Other application can only interact when the value is set to   &#34;All application scopes.&#34; Depending on the requirement and the use case, you can select all or either on this checkbox to grant permission for other applications.</p>
<p> </p>
<p>For other artifacts like <a title="ocs.servicenow.com/bundle/jakarta-servicenow-platform/page/script/server-scripting/concept/c_ScriptIncludes.html" href="https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/script/server-scripting/concept/c_ScriptIncludes.html" rel="nofollow">Script Include,</a> access is granted or restricted depending on the value set on &#34;Accessible from&#34; field. This field defines whether a script is public or private.</p>
<p> </p>
<h4>Making a script public</h4>
<p>A public script is a script available to all applications. To make a script public, set the &#34;a<span class="ph uicontrol">ccessible from&#34;</span> field on the Script Include   to a<span class="ph uicontrol">ll application scopes</span>. Any changes to a public script include must be done carefully to prevent breaking applications that depend on it.</p>
<p> </p>
<h4>Making a script private</h4>
<p>A private script is a script which is specific to the application which it is defined.To make a script private and inaccessible from other applications, set the &#34;<span class="ph uicontrol">Accessible from&#34;</span> field to <span class="ph uicontrol">This application scope only</span>. This allows the script to be called only by code within the defined application scope and prevents code in other application scopes from accessing the script. By setting scripts to private, application developers can easily modify or refactor scripts in future versions since no other applications depend on it.</p>
<p> </p>
<table border="1" width="100%"><tbody><tr><td>
<p><strong>Example of creating a Record in a Group Table:</strong></p>
<p> </p>
<p>Application access settings are different on each OOTB tables. For example, the default Group table allows another application scope Web Service access and Read access. However, other permissions are restricted. <span style="color: #333333; font-family: &#39;Gotham SSm A&#39;, &#39;Gotham SSm B&#39;, Arial, Helvetica, sans-serif;">If a script attempts to perform an operation that is not allowed, admin users see a message:</span></p>
<p>Execute operation on API &#39;GlideRecord.insert&#39; from scope &#39;CSA&#39; was denied. The application &#39;CSA&#39; must declare a cross scope access privilege. Please contact the application author to update their privilege requests.</p>
<p>Evaluator: com.glide.script.fencing.CrossScopeAccessNotAllowedException: Access to GlideRecord.insert from scope x_13241_csa not allowed</p>
<p>In the above case, &#34;Can Create&#34; checkbox has to be set to true to be able to create the records in Group table.</p>
</td></tr></tbody></table>
<p> </p>
<p> </p>
<table border="1"><tbody><tr><td>
<p><strong>Example of making a call to JSUtill from a scoped application:</strong></p>
<p> </p>
<p>In the below screenshot we can see JSUtil cannot be called from any other application as the accessible value OOTB is set to &#34;This application scope only&#34;.</p>
<p style="text-align: center;"><img class="image-10 jive-image" style="width: 620px; height: 54px;" src="be63a5c6dbdc13043eb27a9e0f96196d.iix" alt="jsutill scoped app.jpg" /></p>
<p>In the above case, accessible from has to be changed to &#34;All application scope&#34; to ensure JSUtill works across applications.</p>
<p> </p>
<p>Please be aware any changes made on global artifacts will be in the global update set.</p>
</td></tr></tbody></table>
<p> </p>
<p style="text-align: center;"><em>Please work out with ServiceNow Certification Team in case you have <a title="ocs.servicenow.com/bundle/jakarta-application-development/page/build/applications/task/t_SetApplicationAccess.html" href="https://docs.servicenow.com/bundle/jakarta-application-development/page/build/applications/task/t_SetApplicationAccess.html" rel="nofollow">modified the application access</a> setting (Global or base system tables) and the app is intended to be submitted to store. We will approve or reject apps on the store based on the application use case. The same case applies to any modification made (Accessible From value) on base system artifacts like script include.</em></p>
<h2> </h2>
<h2>Cross Scope Access</h2>
<p>Cross scope access allows administrators to manage out-of-scope access to application resources by creating a list of operations and runtime privileges that the application authorizes to run on the target instance. A cross scope is applicable only if the author of the app sets the <a title="ocs.servicenow.com/bundle/jakarta-application-development/page/build/applications/reference/c_CrossScopePrivilegeRecord.html" href="https://docs.servicenow.com/bundle/jakarta-application-development/page/build/applications/reference/c_CrossScopePrivilegeRecord.html" rel="nofollow">Runtime access value to Tracking or Enforcing</a>. This helps the author to have control on their application and prevents customers from interacting with any other artifacts without the author&#39;s knowledge once the app is downloaded on the target instances.</p>
<p> </p>
<p>Cross-scope privileges can be granted for:</p>
<ul><li><strong>Table</strong>: Read, write, create, delete records</li><li><strong>Script Include</strong>: Execute API</li><li><strong>Scriptable (script objects)</strong>: Execute API</li></ul>
<p> </p>
<h3>Enabling Cross Scope Access</h3>
<ol style="list-style-type: decimal;"><li>On your instance navigate to <strong>System Applications &gt; Studio</strong></li><li>Click on application i.e for ex : CSA ( This is the custom application I have created on my instance)
<p style="text-align: center;"><img class="image-11 jive-image" style="width: 620px; height: 174px;" src="cd0bbc8adb109f048c8ef4621f96190e.iix" alt="create scope access.jpg" /></p>
</li><li>Open the File menu and select the Settings menu item. The default value for the Runtime Access Tracking field is set to Tracking.
<p style="text-align: center;"><img class="image-12 jive-image" style="width: 620px; height: 122px;" src="a88910cadb945344e9737a9e0f96194d.iix" alt="scoped app tracking.jpg" /></p>
</li></ol>
<p> </p>
<ul style="list-style-type: disc;"><li><strong>None</strong>: All cross scope privileges are granted automatically at runtime.</li><li><strong>Tracking</strong>: Allows application scripts to access resources from other applications. A record for the access is automatically inserted in the cross-scope access table with a Status value of Allowed. This is the default setting.</li><li><strong>Enforcing</strong>: Allows application scripts to access resources from other applications only after an admin authorizes the access. A record is automatically added to the cross-scope access table with a Status value of Requested.</li></ul>
<p> </p>
<p style="background: white;">A custom application which have &#34;runtime access &#34; set to tracking will be changed to enforced automatically during app installation on the target instance.</p>
<p style="background: white;"> </p>
<p style="background: white;">During testing, application developers should run all of their application scripting logic to ensure the system creates any necessary cross-scope privilege records. After application publication, the system only allows runtime requests to run that have a valid cross-scope privilege record.</p>
<p> </p>
<table border="1"><tbody><tr><td>
<p><strong>Example of across access scoped application:</strong></p>
<p> </p>
<p>Let&#39;s assume I have a business rule on the custom table which creates a record on Incident table. To make this app work on other instance, I as an author should ensure that this script is at least once executed on my dev instance. You will see an entry in cross scope table as soon as this script is executed on dev instance before the app is published.</p>
<p> </p>
<p>Here we are assuming <a title="ocs.servicenow.com/bundle/jakarta-application-development/page/build/applications/concept/c_RuntimeAccessTracking.html" href="https://docs.servicenow.com/bundle/jakarta-application-development/page/build/applications/concept/c_RuntimeAccessTracking.html" rel="nofollow">Runtime Access Tracking</a> is set to Enforcing.</p>
<p>var gr &#61; new GlideRecord(&#39;incident&#39;);</p>
<p>gr.initialize();</p>
<p>gr.short_description &#61; &#39;This is a test for CSA&#39;;</p>
<p>gr.insert();</p>
<p> </p>
<p>When the script executes, ServiceNow checks to see if the cross-scope access between the CSA scope and the Global scope table is allowed. In this case, it is not because the Enforcing setting requires an admin to authorize the access. This is a snippet of the error from the System Log:</p>
<p>Security restricted: Execute operation on API &#39;GlideRecord.insert&#39; from scope &#39;CSA&#39; was denied. The application &#39;CSA&#39; must declare a cross scope access privilege. Please contact the application author to update their privilege requests.</p>
<p>Evaluator: com.glide.script.fencing.CrossScopeAccessNotAllowedException: Access to GlideRecord.insert from scope x_13241_csa not allowed</p>
<p> </p>
<ol><li>Open the Application Cross-Scope Access module by navigating to <strong>System Application&gt; Application Cross-Scope Access</strong></li><li>Search for all records with a <strong>Status field</strong> value of <strong>Requested</strong></li><li>To grant access, an admin user must click the <strong>Open record</strong> icon to open the record for editing.</li><li>Change the Status to <strong>Allowed</strong> then click the <strong>Update</strong> button.</li></ol>
<p style="text-align: center;"><img class="image-13 jive-image" style="width: 620px; height: 114px;" src="252ab771db545fc068c1fb651f96196e.iix" alt="access cross scope app.jpg" /></p>
</td></tr></tbody></table>
<p>The above case is only when the author chose to set runtime access to enforcing. By default, runtime access is set to tracking on the application and at runtime, cross scope privilege records are automatically granted access.</p>
<p> </p>
<p> </p>
<h2>Restrict Table Choices in a scoped application</h2>
<p>To get to Restrict Table Choices, follow the same steps 1, 2 and 3 as mentioned in cross scope section above. Restrict Table Choices application <a title="ocs.servicenow.com/bundle/jakarta-application-development/page/build/applications/reference/r_CreationRestrsAcrossAppScopes.html" href="https://docs.servicenow.com/bundle/jakarta-application-development/page/build/applications/reference/r_CreationRestrsAcrossAppScopes.html" rel="nofollow">sets limits</a> on an application file configuration to only tables from the current application. This setting can be defined at each application level. By default, the checkbox is set to <strong>false</strong>. You can set the value to <strong>true</strong> depending on your app requirements.</p>
<p> </p>
<table border="1"><tbody><tr><td>
<p><strong>Example of restricting table choices:</strong></p>
<p> </p>
<p>Let&#39;s assume I have set Restrict table choice checkbox to true. In that case, we can only select tables which are in the same scope. This will be true for any artifact created in scoped app for ex: Client script, UI Policy Etc.</p>
<p style="text-align: center;"><img class="image-14 jive-image" style="width: 620px; height: 76px;" src="dd3b51cedbd813043eb27a9e0f961976.iix" alt="restrict table choices.jpg" /></p>
</td></tr></tbody></table>
<p> </p>
<p>We have successfully covered how Cross Access Tracking manages out-of-scope access to application resources, Application Access restricts database operations, and Restrict Table Choices application to limit application files configuration. Utilizing Cross Scope and Application Access Setting are key components of scoped applications and its success.</p>
<p><iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/t4r8xhn3NHs"></iframe><span style="color: #666666; font-family: arial, sans-serif;">For additional help on this topic, see what other customers have asked:</span></p>
<p><span style="color: #666666; font-family: arial, sans-serif;"><a class="jive_macro_thread jive_macro" title="cross scope privileges denied by table cross scope" href="community?id&#61;community_question&amp;sys_id&#61;d9dfc3a5dbdcdbc01dcaf3231f961922" rel="nofollow">cross scope privileges denied by table cross scope</a> </span></p>
<p><span style="color: #666666; font-family: arial, sans-serif;"><a class="jive_macro jive_macro_message" title="Cross scope privilege issue in Scoped Application" href="community?id&#61;community_question&amp;sys_id&#61;884003a1db98dbc01dcaf3231f961907" rel="nofollow">Cross scope privilege issue in Scoped Application</a> </span></p>
<p><span style="color: #666666; font-family: arial, sans-serif;"><a class="jive_macro_thread jive_macro" title="access to api refused" href="community?id&#61;community_question&amp;sys_id&#61;9690cb25db98dbc01dcaf3231f961991" rel="nofollow">access to api refused</a> </span></p>
<p><span style="color: #666666; font-family: arial, sans-serif;"><a class="jive_macro_thread jive_macro" title="Scoped apps - can I allow scripted read access to global scope without allowing creation of business rules, too?" href="community?id&#61;community_question&amp;sys_id&#61;9d95c7eddbd8dbc01dcaf3231f9619f5" rel="nofollow">Scoped apps - can I allow scripted read access to global scope without allowing creation of business rules, too?</a> </span></p>
<p><span style="color: #666666; font-family: arial, sans-serif;">Additional Resource :</span></p>
<p><span style="color: #666666; font-family: arial, sans-serif;"><a title="https://servicenowben.wordpress.com/2018/09/27/cross-scope-privileges/" href="https://servicenowben.wordpress.com/2018/09/27/cross-scope-privileges/" target="_blank" rel="nofollow">https://servicenowben.wordpress.com/2018/09/27/cross-scope-privileges/</a> By my good friend Ben Philips</span></p>