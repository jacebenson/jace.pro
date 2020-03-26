---
title: "How to Setup your portal for Public Users"
date: 2020-03-02T12:22:34.000Z
authors: ["Divya Balasubramanian"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ba528ba5dbd344106064eeb5ca9619bf"
---
<p><span style="font-family: helvetica;"> </span><span style="font-family: helvetica; font-size: 12pt;">There are many discussions/questions on how to setup different entities of Portal to be available for unauthenticated public users. This will help customers setup self-service options for public users who do not want to login to be able to access them.</span></p>
<p><span style="font-family: helvetica; font-size: 12pt;">In this blog, I will be walking through different steps for configuring the following portal components to be available for public:</span></p>
<ul><li><span style="font-family: helvetica; font-size: 12pt;"><strong>Make your service portal page public</strong></span></li><li><span style="font-family: helvetica; font-size: 12pt;"><strong>Make a widget public</strong></span></li><li><span style="font-family: helvetica; font-size: 12pt;"><strong>Make your knowledge articles public</strong></span></li><li><span style="font-family: helvetica; font-size: 12pt;"><strong>Make your community content/forum public </strong></span></li></ul>
<p><span style="font-family: helvetica; font-size: 12pt;"> </span><span style="font-family: helvetica; font-size: 12pt;"> </span></p>
<p><span style="font-size: 14pt; font-family: helvetica;"><strong><span style="color: #003366;">How to setup a service portal page to be visible for public users?</span></strong></span></p>
<p><span style="font-family: helvetica; font-size: 12pt;">Often, the customers need to have the landing page to be visible to public users if they need to allow unauthenticated users to be able to access self-service portal. This could be the most common scenario, however the below steps will help you configure all pages that you would like to make available publicly.</span></p>
<p><span style="font-family: helvetica; font-size: 12pt;">These steps are intended for users with little to no coding experience. The Service Portal Designer includes several layers of customization from simply adding widgets in a particular configuration on a page, to adding CSS classes.</span></p>
<p><span style="text-decoration: underline; font-size: 12pt; font-family: helvetica;"><span style="color: #003366;"><strong>Procedure</strong></span></span></p>
<ul><li><span style="font-size: 12pt; font-family: helvetica;">Navigate to Service Portal &gt; Service Portal Configuration.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Click Designer.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Switch to the portal you want to design pages for by selecting the portal name in the header.</span></li></ul>
<p><span style="font-family: helvetica; font-size: 12pt;"><a href="https://docs.servicenow.com/bundle/orlando-servicenow-platform/page/build/service-portal/image/DesignerSwitchPortal.png" rel="nofollow"><img src="https://community.servicenow.com/39af3e69db9344106064eeb5ca961978.iix" /></a></span></p>
<ul><li><span style="font-family: helvetica; font-size: 12pt;">From the Service Portal Designer, select a page to customize or click Add a new page.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Under Layouts, select Container and drag it onto the page.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Drag one of the other layouts and drop it in the container.</span></li></ul>
<p><span style="font-family: helvetica; font-size: 12pt;">This layout defines the structure of your page and the space available to drop widgets. The structure of the layout aligns with the Bootstrap grid template and always adds up to 12.</span></p>
<ul><li><span style="font-family: helvetica; font-size: 12pt;">Use the filter to search for a widget, then drag the widget to the layout.</span></li></ul>
<p><span style="font-family: helvetica; font-size: 12pt;">Drag containers, layouts, then widgets onto a page<br /><img src="https://community.servicenow.com/e842c3a5dbd344106064eeb5ca9619fb.iix" width="660" height="382" /><br /></span></p>
<ul><li><span style="font-family: helvetica; font-size: 12pt;">(Optional) Edit page properties.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Click Edit Page Properties.The page record from the Pages table [sp_page] opens.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Edit the form.</span></li></ul>
<p><span style="font-family: helvetica; font-size: 12pt;"> </span></p>
<div>
<table style="width: 755px; height: 61px;" title="" border="1" summary="" cellspacing="0" cellpadding="0"><tbody><tr><td style="width: 59px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Public</span></p>
</td><td style="width: 690px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Enables the page to be accessed without the need for authentication. If Public is selected, all users can view the page no matter the roles listed.</span></p>
</td></tr></tbody></table>
</div>
<p><span style="font-family: helvetica; font-size: 12pt;"> </span></p>
<p><span style="font-family: helvetica; font-size: 12pt;"><em><span style="color: #993300;"> Note : Although, the page is public to allow users to view the content on the page the widget has to be configured to be available for public users. Please follow the next steps to configure a widget for public users.</span></em></span></p>
<p><span style="font-family: helvetica; font-size: 12pt;">Configure widget security to ensure that your widget is being accessed only by the intended audience.</span></p>
<p><span style="font-family: helvetica;"> </span></p>
<p><span style="font-size: 14pt; font-family: helvetica;"><span style="color: #003366;"><strong>How to setup a service portal widget to be visible for public users?</strong></span> </span></p>
<p><span style="font-family: helvetica; font-size: 12pt;">Role required: admin or sp_admin</span></p>
<p><span style="font-family: helvetica; font-size: 12pt;">To allow public users to view certain widgets on a page, the widget security needs to be configured for the following: </span></p>
<ul><li><span style="font-family: helvetica; font-size: 12pt;">Make the widget public to unauthenticated users</span></li></ul>
<p><span style="font-family: helvetica; font-size: 12pt;">When you configure widget security, configure the page security accordingly so that users can access the widget via the page on which it appears. For more information, see <a href="https://docs.servicenow.com/bundle/orlando-servicenow-platform/page/build/service-portal/task/configure-page-security.html" rel="nofollow">Configure page security by role</a>.</span></p>
<p><span style="text-decoration: underline; font-family: helvetica; font-size: 12pt;"><span style="color: #003366;"><strong>Procedure</strong></span></span></p>
<ul><li><span style="font-family: helvetica; font-size: 12pt;">Navigate to Service Portal &gt; Widgets.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Open the record of the widget to configure.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">On the form, configure the widget security.</span></li></ul>
<div>
<table style="width: 726px; height: 130px;" title="" border="1" summary="" cellspacing="0" cellpadding="0"><tbody><tr><td style="width: 281px;">
<p style="text-align: center;"><span style="font-family: helvetica; font-size: 12pt;"><strong><span style="color: #333399;">Option</span></strong></span></p>
</td><td style="width: 439px;">
<p style="text-align: center;"><span style="font-family: helvetica; font-size: 12pt;"><strong><span style="color: #333399;">Procedure</span></strong></span></p>
</td></tr><tr><td style="width: 281px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Make the widget public to unauthenticated users</span></p>
</td><td style="width: 439px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Select the Public check box.</span></p>
<p><span style="font-family: helvetica; font-size: 12pt;"><em><span style="color: #993300;">Note: If you select Public and add a list of roles, the widget is still accessible by any user.</span></em></span></p>
</td></tr></tbody></table>
</div>
<ul><li><span style="font-family: helvetica; font-size: 12pt;">  Click Update.</span></li></ul>
<p><span style="font-family: helvetica; font-size: 12pt;"> </span></p>
<p><span style="font-size: 12pt;"><span style="font-family: helvetica;">This will ensure the widgets which display the content is visible to all public users.</span><span style="font-family: helvetica;"> </span></span></p>
<p><span style="font-family: helvetica; font-size: 12pt;"><em><span style="color: #993300;">Note: To ensure that the users can view the data in the widget, you will need to update the ACL’s for the relevant tables to allow public read/write depending on the requirements.</span></em></span></p>
<p><span style="font-family: helvetica;"> </span></p>
<p><span style="color: #003366; font-size: 14pt; font-family: helvetica;"><strong>How to setup knowledge articles to be visible for public users?</strong></span></p>
<p><span style="font-family: helvetica; font-size: 12pt;">Enable knowledge articles on the Knowledge Management Service Portal to be visible to external or public users.</span></p>
<p><span style="font-family: helvetica; font-size: 12pt;">Before you begin</span></p>
<p><span style="font-size: 12pt;"><strong><span style="font-family: helvetica;">The Knowledge Management Service Portal plugin (com.snc.knowledge_serviceportal) must be enabled.</span></strong></span></p>
<p><span style="font-size: 12pt;"><strong><span style="font-family: helvetica;">Role required: admin</span></strong></span></p>
<p><span style="font-family: helvetica; font-size: 12pt;">About this task</span></p>
<p><span style="font-family: helvetica; font-size: 12pt;">If you are using Knowledge Management within the Customer Service application, you can automatically make knowledge public by activating and running the Make KM Service Portal Pages Public fix script after you install the Customer Service Management plugin (com.sn_customerservice).</span></p>
<p><span style="font-family: helvetica; font-size: 12pt;">If you are using Knowledge Management as a standalone application, perform the steps in this procedure.</span></p>
<p><span style="text-decoration: underline; color: #003366; font-family: helvetica; font-size: 12pt;"><strong>Procedure</strong></span></p>
<ul><li><span style="font-family: helvetica; font-size: 12pt;">Navigate to Service Portal &gt; Pages.</span></li></ul>
<table title="" border="1" summary="" cellspacing="0" cellpadding="0"><tbody><tr><td>
<p style="text-align: center;"><span style="color: #333399; font-family: helvetica; font-size: 12pt;"><strong>To</strong></span></p>
</td><td style="text-align: center;">
<p><span style="color: #333399; font-family: helvetica; font-size: 12pt;"><strong>Do this</strong></span></p>
</td></tr><tr style="text-align: center;"><td>
<p><span style="font-family: helvetica; font-size: 12pt;">Make knowledge service portal pages visible to public users</span></p>
</td><td>
<ol><li>Select the Public check box.</li><li>Click Update.</li></ol>
</td></tr><tr><td style="text-align: center;">
<p><span style="font-family: helvetica; font-size: 12pt;">Make knowledge service portal pages visible to external users</span></p>
</td><td>
<ol><li><span style="font-family: helvetica; font-size: 12pt; text-align: center;">Click the edit user roles icon.</span></li><li><span style="font-family: helvetica; font-size: 12pt; text-align: center;">Select snc_external and click Done.</span></li><li><span style="font-family: helvetica; font-size: 12pt; text-align: center;">Click Update.</span></li></ol>
</td></tr></tbody></table>
<ul><li><span style="font-size: 12pt;">Search for kb_home and open it.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">You have to be in the Global application to edit. If a message appears, click here to edit.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Perform one of the following actions.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Repeat these steps for kb_article_view and kb_search.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Perform one of the following actions.</span></li></ul>
<p><span style="font-family: helvetica; font-size: 12pt;"> </span></p>
<div>
<table style="width: 730px; height: 130px;" title="" border="1" summary="" cellspacing="0" cellpadding="0"><tbody><tr><td style="width: 296px;">
<p style="text-align: center;"><span style="font-family: helvetica; font-size: 12pt;"><strong><span style="color: #333399;">To</span></strong></span></p>
</td><td style="text-align: center; width: 428px;">
<p><span style="font-family: helvetica; font-size: 12pt;"><strong><span style="color: #333399;">Do this</span></strong></span></p>
</td></tr><tr style="text-align: center;"><td style="width: 296px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Enable access to the knowledge base for public users</span></p>
</td><td style="width: 428px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Ensure that no Can Read user criteria is defined in the knowledge bases you want to give access to.</span></p>
</td></tr><tr><td style="text-align: center; width: 296px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Enable access to the knowledge base for external users</span></p>
</td><td style="width: 428px;">
<p style="text-align: center;"><span style="font-family: helvetica; font-size: 12pt;">Add Can Read access to the knowledge base.</span></p>
</td></tr></tbody></table>
</div>
<p><span style="font-family: helvetica; font-size: 12pt;">  </span></p>
<p><span style="font-family: helvetica; font-size: 12pt;">Note: To ensure the knowledge articles harvested from community to be visible to external or public users, snc_external roles need to be mandatorily added.</span></p>
<p><span style="font-family: helvetica; font-size: 14pt;"><br /> </span></p>
<p><span style="color: #003366; font-size: 14pt; font-family: helvetica;"><strong>How to setup Public forums in customer facing community? </strong></span></p>
<p><span style="font-family: helvetica; font-size: 12pt;">Create a forum to provide a place for users to share content. You can configure forums for membership that registered community users request access to join. You can also configure forums to convert unstructured conversations to structured knowledge articles.</span></p>
<p><span style="font-family: helvetica; font-size: 12pt;">Before you begin</span></p>
<p><span style="font-family: helvetica; font-size: 12pt;">Role required: sn_communities.admin or sn_communities.forum_admin</span></p>
<p><span style="font-family: helvetica; font-size: 12pt;">A forum can be configured in the following ways.</span></p>
<div>
<table style="width: 689px; height: 67px;" title="" border="1" summary="" cellspacing="0" cellpadding="0"><tbody><tr><td style="width: 52px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Public</span></p>
</td><td style="width: 631px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Visible to all users, including non-logged in users. All users have content_read access to questions and answers in public forums. Configure public forms by adding a <a href="https://docs.servicenow.com/bundle/orlando-customer-service-management/page/product/customer-communities/task/add-user.html#create-forum-user" rel="nofollow">forum user</a> of the type public.</span></p>
</td></tr></tbody></table>
</div>
<p><span style="font-family: helvetica; font-size: 12pt;">To Setup forum user of the type public follow the steps below</span></p>
<p><span style="text-decoration: underline; font-family: helvetica; font-size: 12pt;"><span style="color: #003366;"><strong>Procedure</strong></span></span></p>
<ul><li><span style="font-family: helvetica; font-size: 12pt;">Navigate to Community &gt; Administration &gt; Forum Users.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Click New.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">On the form, fill in the fields.</span></li></ul>
<div>
<table style="width: 567px; height: 265px;" title="" border="1" summary="" cellspacing="0" cellpadding="0"><tbody><tr><td style="width: 142px;">
<p style="text-align: center;"><span style="font-size: 12pt; font-family: helvetica;"><strong><span style="color: #333399;">Forum User form</span></strong></span></p>
</td><td style="text-align: center; width: 419px;">
<p><span style="font-size: 12pt; font-family: helvetica;"><strong><span style="color: #333399;">Values </span></strong></span></p>
</td></tr><tr style="text-align: center;"><td style="width: 142px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Field</span></p>
</td><td style="width: 419px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Description</span></p>
</td></tr><tr style="text-align: center;"><td style="width: 142px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Name</span></p>
</td><td style="width: 419px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Name of the user.</span></p>
</td></tr><tr style="text-align: center;"><td style="width: 142px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Description</span></p>
</td><td style="width: 419px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Description of the user.</span></p>
</td></tr><tr><td style="text-align: center; width: 142px;">
<p><span style="font-family: helvetica; font-size: 12pt;">User type</span></p>
</td><td style="width: 419px;">
<p style="text-align: center;"><span style="font-family: helvetica; font-size: 12pt;">Public</span></p>
<p style="text-align: center;"><span style="font-family: helvetica; font-size: 12pt;">Public users can view the community without logging in. By default, public users have content_read access to questions and answers in public forums.</span></p>
</td></tr></tbody></table>
</div>
<ul><li><span style="font-family: helvetica; font-size: 12pt;">Click Submit.</span></li></ul>
<p><span style="font-family: helvetica; font-size: 12pt;"> </span></p>
<p><span style="font-family: helvetica; font-size: 12pt;">The forum user is created and added to the Forum Users list.</span></p>
<p><span style="font-family: helvetica;"><span style="text-decoration: underline;"><strong><span style="color: #003366; font-size: 12pt; text-decoration: underline;">Procedure to setup public forum</span></strong></span> </span></p>
<ul><li><span style="font-family: helvetica; font-size: 12pt;">Navigate to Community &gt; Administration &gt; Forums.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">In the Forums list, click New.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Fill in the fields on the form as appropriate.</span></li></ul>
<p><span style="font-family: helvetica;"> </span></p>
<div>
<table style="width: 680px; height: 344px;" title="" border="1" summary="" cellspacing="0" cellpadding="0"><tbody><tr><td style="width: 238px;">
<p style="text-align: center;"><span style="color: #333399; font-family: helvetica;"><strong><span style="font-size: 12pt;">Forum form</span></strong></span></p>
</td><td style="text-align: center; width: 436px;">
<p><span style="color: #333399; font-family: helvetica;"><strong><span style="font-size: 12pt;"> Values</span></strong></span></p>
</td></tr><tr style="text-align: center;"><td style="width: 238px;">
<p style="text-align: center;"><span style="font-family: helvetica; font-size: 12pt;">Field</span></p>
</td><td style="width: 436px; text-align: center;">
<p style="text-align: center;"><span style="font-family: helvetica; font-size: 12pt;">Description</span></p>
</td></tr><tr style="text-align: center;"><td style="width: 238px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Name</span></p>
</td><td style="width: 436px;">
<p style="text-align: center;"><span style="font-family: helvetica; font-size: 12pt;">Name of the forum.</span></p>
</td></tr><tr style="text-align: center;"><td style="width: 238px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Description</span></p>
</td><td style="width: 436px;">
<p style="text-align: center;"><span style="font-family: helvetica; font-size: 12pt;">A short description that defines the forum.</span></p>
</td></tr><tr style="text-align: center;"><td style="width: 238px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Image</span></p>
</td><td style="width: 436px;">
<p style="text-align: center;"><span style="font-family: helvetica; font-size: 12pt;">An image that provides a visual reference to describe the forum.</span></p>
</td></tr><tr style="text-align: center;"><td style="width: 238px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Order</span></p>
</td><td style="width: 436px;">
<p><span style="font-family: helvetica; font-size: 12pt;">The order that forums are displayed in. By default, the display is alphabetical. Enter a numerical value to set the order that forums are displayed in. You can combine both options.</span></p>
</td></tr><tr style="text-align: center;"><td style="width: 238px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Parent</span></p>
</td><td style="width: 436px;">
<p style="text-align: left;"><span style="font-family: helvetica; font-size: 12pt;">The parent forum, if required. This lists the forum as a sub forum of the parent forum.</span></p>
</td></tr><tr><td style="width: 238px; text-align: center;">
<p><span style="font-family: helvetica; font-size: 12pt;">Knowledge Base used for harvesting</span></p>
</td><td style="width: 436px;">
<p style="text-align: center;"><span style="font-family: helvetica; font-size: 12pt;">The knowledge base used for harvesting community discussions to knowledge articles.</span></p>
</td></tr></tbody></table>
</div>
<p><span style="font-family: helvetica; font-size: 12pt;">Two default permissions are added to the forum in the Forum Permissions related list.</span></p>
<ul><li><span style="font-family: helvetica; font-size: 12pt;">Default Permission for Memberships: Read and write access to questions and answers for users who are forum members.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Forum Visible: Read access to the name and description of the forum for registered users. To access content, users must request forum membership.</span></li><li><span style="font-size: 12pt;"><span style="font-family: helvetica;">If required, you can add a </span><a style="font-family: helvetica;" href="https://docs.servicenow.com/bundle/orlando-customer-service-management/page/product/customer-communities/task/create-forum-permission.html#create-permission-segment" rel="nofollow">new forum permission</a><span style="font-family: helvetica;"> and set it as the default using the sn_communities.default_permission_for_forum_memberships property.</span></span></li></ul>
<p><span style="font-family: helvetica; font-size: 12pt;">To add public users to view content in the forum to attract them to become members, create a forum permission as follows:</span></p>
<ul><li><span style="font-family: helvetica; font-size: 12pt;">Forum User: Public.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Permission: Question &amp; Answer Read.</span></li></ul>
<ul><li><span style="font-family: helvetica; font-size: 12pt;">Click Update.</span></li></ul>
<p><span style="font-family: helvetica; font-size: 12pt;">You may also want to see this blog if you are interested in <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;ad959508db130c906064eeb5ca961901" target="_blank" rel="noopener noreferrer nofollow">setting up a SEO friendly public portal</a></span></p>