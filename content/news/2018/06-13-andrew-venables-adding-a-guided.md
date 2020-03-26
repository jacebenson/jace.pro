---
title: "Adding a Guided Setup to your Store app"
date: 2018-06-12T13:40:12.000Z
authors: ["andrew.venables"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=d2d19417dba61f002be0a851ca9619fc"
---
<p>Guided setup is a fantastic platform feature that allows for a step by step guide to configuring a ServiceNow application.</p>
<p>There are a couple of great examples in the base platform for: ITSM, ITOM, APM, Event Management, ITFM, HR, Performance Analytics and Instance Security.</p>
<p> </p>
<p><img src="13229cd7dba61f002be0a851ca9619f7.iix" width="600" /></p>
<p><strong>Image1:</strong> ITSM Guided Setup is provided out of the box in ServiceNow instances and is a great way to get started in configuring ITSM.</p>
<p> </p>
<p>But as of the Kingston release the Guided Setup feature is not available to partners (or customers) to build their own... well not available without a small configuration change that is. This has led to some partners creating their own setup pages (usually in UI Pages with plenty of jelly) to walk customers through their app setup.</p>
<p>ServiceNow acknowledges that partners would rather use an out of the box feature than recreating their own and so the building of Guided Setups by admins has been added to the platform roadmap, currently targeted for the Madrid release. </p>
<p>The purpose of this post is to show partners how they can build a guided setup today with a simple configuration change and include a Guided Setup in their Store application. You&#39;ll have to wait to a future release though for the official documentation on how to build a Guided Setup but i&#39;ll try and give some pointers below that get you started.</p>
<p> </p>
<p><strong>Getting Started</strong></p>
<p>The Guided Setup functionality uses a number of tables to hold the content for each setup, each of these tables has the prefix &#34;gsw_&#34;. The main table is &#34;gsw_content&#34; which holds the content of each guided setup and its content. Take a minute to explore these tables in your own instance, the ITSM Guided Setup is a nice example to walk through from both sides to get a feel for the structure.</p>
<p>You may have noticed that you can&#39;t create or edit any of the Guided Setup tables and if you inspect the ACLs for the tables you&#39;ll see that they are locked down so even instance admins don&#39;t have permissions to create new or modify existing. But thanks to the way ACLs work in ServiceNow we can easily adjust this:</p>
<p style="padding-left: 30px;">Because ACLs in ServiceNow work in an OR operation the platform will allow a CRUD operation on a table if there is atleast one ACL that evaluates successfully. So all we need to do is add new ACLs for the Guided Setup tables alongside the existing ones. </p>
<p> </p>
<p>Let&#39;s do this now,</p>
<p><strong>Step 1</strong> First make sure you are logged in as an admin, in global scope (as we don&#39;t want these changes captured as part of an app), and elevate privileges (security_admin role). </p>
<p><strong>Step 2</strong> Then let&#39;s navigate to the gsw_content table, right click the header and Configure &gt; Security Rules. This is where we can add new ACLs to the gsw_content table. Click the &#34;New&#34; button and configure the record as below:</p>
<p><strong>Type:</strong> record<br /> <strong>Operation:</strong> create<br /> <strong>Admin overrides:</strong> true<br /> <strong>Name:</strong> Guided Setup Content [gsw_content] . &lt;none&gt;<br /> <strong>Active:</strong> true<br /> <strong>Requires role:</strong> admin</p>
<p><img style="max-width: 100%; max-height: 480px;" src="0885a01fdb2e1f002be0a851ca961984.iix" /></p>
<p> </p>
<p><strong>Step 3 </strong>Repeat step 2 above but for an ACL with <strong>Operation: </strong>update. Optionally you may want to repeat for an ACL with <strong>Operation: </strong>delete.</p>
<p><strong>Step 4 </strong>Now repeat step 2 above again, but this time for <strong>Table: </strong>Guided Setup Information [gsw_content_information] . &lt;none&gt; and <strong>Operation: </strong>create and update.</p>
<p><strong>Step 5</strong> Lastly repeat step 2 again, but this time for <strong>Table: </strong>Guided Setup Group [gsw_content_group] . &lt;none&gt; and <strong>Operation: </strong>create and update.</p>
<p>That&#39;s it, we&#39;ve successfully altered the platform to allow us to create the records needed for a Guided Setup!</p>
<p> </p>
<p><strong>Building a Guided Setup</strong></p>
<p>Before we get started lets take a look at the structure of a guided setup.</p>
<p>The Guided Setup [gsw_content] table has two extensions: <strong>Guided Setup Group</strong> [gsw_content_group] and <strong>Guided Setup Information</strong> [gsw_content_information]. As the names suggest these act either as a grouping of tasks in the guided setup or an actual task to be completed.</p>
<p>The two diagrams below illustrate the hierarchy, the diagram on the left shows the generic data model and how they relate, the diagram on the left we will use as a design for an example Guided Setup we will step through.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="659ee05fdbee1f002be0a851ca961998.iix" /> </p>
<p><strong>Step 6 </strong>Before we start, make sure you are in your application scope (since we want the guided setup to be included in our app),</p>
<p><strong>Step 7 </strong>Lets get started by browsing to the list of Guided Setups, this is easiest done by typing &#34;gsw_content.list&#34; in the left filter navigation. </p>
<p><strong>Step 8 </strong>In the list that opens you will see all of the guided setups in the platform. Click the <strong>New</strong> button and you should be presented with an interceptor that asks you to choose whether you are creating a group or configuration pages.</p>
<p><strong>Step 9 </strong>Since this first record will represent the top level setup we should choose to create a group.</p>
<p><img src="d91698afdb5b93809d612926ca96190e.iix" width="400" /></p>
<p><strong>Step 10 </strong>On the form that is created fill it out as follows:</p>
<p><strong>Title: </strong>My App Setup<br /> <strong>Is root content: true</strong><br /> <strong>Order: </strong>0<br /> <strong>Active: </strong>true<br /> <strong>Description: </strong>Hello World<br /> <strong>Maximum children to display:</strong> 5</p>
<p>Save the record by right clicking the header and selecting <strong>Save</strong>. This will ensure you&#39;re returned to the record afterwards.</p>
<p> </p>
<p>When the new Guided Setup Group record has saved and reopened, scroll to the bottom of the form where you should see a new related list of &#34;Guided Setup Contents&#34;, these are the child records of the top (root) level guided setup. They can themselves be groups of other contents as per our diagram.</p>
<p><strong>Step 11 </strong>Click the <strong>New</strong> button to create a child content.</p>
<p><img src="ad8898ebdb9b93809d612926ca96195d.iix" /></p>
<p> </p>
<p>Again you will be taken to the interceptor to choose between a group and configuration pages. Again lets select a group as per our data model diagram.</p>
<p><strong>Step 12 </strong>On the form that is created fill it out as follows:</p>
<p><strong>Title: </strong>Integration Account<br /><strong>Is root content: </strong>false<br /> <strong>Parent Content:</strong> My App Setup <br /><strong>Order: </strong>100<br /><strong>Active: </strong>true<br /><strong>Description: </strong>Setup the inbound integration user account</p>
<p> </p>
<p>Save the record by right clicking the header again.</p>
<p><img src="a16a1827dbdb93809d612926ca96193e.iix" /></p>
<p> </p>
<p><strong>Step 13 </strong>Now that we have create the sub group we can add the individual configuration tasks, again scroll to the bottom of the form and select <strong>New</strong> under the <strong>Guided Setup Contents</strong> list. This time on the interceptor choose &#34;Content that navigates users to configuration pages&#34;. </p>
<p><strong>Step 14 </strong>Fill out the form as below:</p>
<p><strong>Title: </strong>Create Integration User<br /><strong>Parent Content:</strong> Integration Account<br /><strong>Order: </strong>100<br /><strong>Weight: </strong>1<br /><strong>Active: </strong>true<br /><strong>End Point Type: </strong>Custom<br /><strong>End point open mode: </strong>Open in modal window<br /><strong>End point: </strong>sys_user.do?sys_user&#61;-1<br /><strong>Article: </strong>Create the user account for the inbound integration user</p>
<p>Save the record by clicking the <strong>Update</strong> button to be returned to the parent &#34;Integration Account&#34; record.</p>
<p> </p>
<p><strong>Step 15 </strong>Repeat steps 13 and 14 with the following info:</p>
<p><strong>Title: </strong>Assign Role<br /><strong>Parent Content:</strong> Integration Account<br /><strong>Order: </strong>200<br /><strong>Weight: </strong>1<br /><strong>Active: </strong>true<br /><strong>End Point Type: </strong>--None--<br /><strong>Article: </strong>Assign the x_12345_integration role to the newly created user</p>
<p>Save the record by clicking the <strong>Update</strong> button to be returned to the parent &#34;Integration Account&#34; record.</p>
<p> </p>
<p>Now we have successfully created the left hand branch of the guided setup from our data model diagram. Next we&#39;ll create the right hand branch:</p>
<p> </p>
<p><strong>Step 16 </strong>Navigate back to the &#34;My App Setup&#34; guided setup group record, you should be able to do this by clicking the <strong>Parent Content</strong> reference.</p>
<p><strong>Step 17 </strong>Repeat steps 11 - 15 but for the right hand branch of the data model diagram, use the following info:</p>
<p>(Step 12)<br /><strong>Title: </strong>Application Configuration<br /><strong>Is root content: </strong>false<br /><strong>Parent Content:</strong> My App Setup <br /><strong>Order: </strong>200<br /><strong>Active: </strong>true<br /><strong>Description: </strong>Configure the application</p>
<p>(Step 14)<strong><br />Title: </strong>Configure Integration Endpoint<br /><strong>Parent Content:</strong> Application Configuration<br /><strong>Order: </strong>100<br /><strong>Weight: </strong>1<br /><strong>Active: </strong>true<br /><strong>End Point Type: </strong>Property<br /><strong>End point open mode: </strong>Open inline<br /><strong>Property name: </strong>x_12345_endpoint<br /><strong>Property value: </strong>&lt;blank&gt; <br /><strong>Article: </strong>Set the property to the integration endpoint URL</p>
<p>(Step 15)<strong><br />Title: </strong>Enable Integration<br /><strong>Parent Content:</strong> Application Configuration<br /><strong>Order: </strong>200<br /><strong>Weight: </strong>1<br /><strong>Active: </strong>true<br /><strong>End Point Type: </strong>Property<strong><br />End point open mode: </strong>Open inline<strong><br />Property name: </strong>x_12345_enable<strong><br />Property value: </strong>&lt;blank&gt; <br /><strong>Article: </strong>Enable the integration</p>
<p>Once complete you should have a fully configured guided setup.</p>
<p> </p>
<p>So now its time to test!</p>
<p> </p>
<p><strong>Step 18</strong> Next we need to get the sys_id of the top level Guided Setup Group named <strong>My App Setup</strong>, navigate back to this record, right-click the header and choose <strong>Copy sys_id</strong>.</p>
<p><strong>Step 19 </strong>Now we can create a new module on the left hand navigation to launch our guided setup. Either in Studio or in the main UI open a new <strong>Module</strong> record (sys_app_module) and configure as below, remembering to add the sys_id from step 18 in the arguments field.</p>
<p><strong>Title: </strong>Guided Setup<br /><strong>Application menu:</strong> My App<br /><strong>Order: </strong>0<br /><strong>Active: </strong>true<br /><strong>Link Type: </strong>URL (from Arguments:)<strong><br />Arguments: </strong>$guided_setup.do#/content/<em>&lt;sys_id from step 18&gt;</em><strong><br /><br /></strong></p>
<p><strong>Step 20</strong> Reload the UI and click your new <strong>Guided Setup</strong> link on the left hand side, your new guided setup should open and you can walk through the setup testing each of the tasks. </p>
<p> </p>
<p><strong>Summary</strong></p>
<p>Congratulations, you&#39;ve now created your first guided setup and included it in your Store application to make setting up your app simple and straightforward for your customers.</p>
<p>Enjoy!</p>