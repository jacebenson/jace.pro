---
title: "CMS Content Management System overview"
date: 2015-11-13T03:49:41.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=cf6caea1dbd0dbc01dcaf3231f961959"
---
<p>The <a title="ki.servicenow.com/index.php?title&#61;Content_Management_-_Versions_Prior_to_Fuji#The_ESS_Portal&amp;gsc.tab&#61;0" href="http://wiki.servicenow.com/index.php?title&#61;Content_Management_-_Versions_Prior_to_Fuji#The_ESS_Portal&amp;gsc.tab&#61;0" rel="nofollow">Content Management System (CMS)</a> is an application that provides users the ability to create a custom interface for the ServiceNow platform and custom interfaces for other applications. The CMS (plugin is com.glide.cms) is automatically in the base instance at no extra charge (OOB) and includes these applications and modules:</p>
<p><img class="image-4 jive-image" style="width: 134px; height: 363.266px; float: right;" src="0162e946db5c130468c1fb651f9619bd.iix" alt="Screen Shot 2015-11-03 at 4.04.39 PM.JPG" width="135" height="364" /></p>
<ul><li>Sites</li><li>Pages</li><li>Blocks - change headers, navigation menus, lists, dynamic and static HTML</li><li>Specialty Content - Flash movies, content links, iFrames</li><li>Design - create themes, style sheets, layouts, frames, and add images</li><li>Configuration - access the Configuration page, page detail settings, content types, list definitions, and login rules.</li></ul>
<p> </p>
<p> </p>
<p>With CMS you can turn project ideas into a reality. You&#39;ve heard that with ServiceNow you can build anything right? Well, with CMS it can bring your websites, pages and portals to life.</p>
<ul><li>Design a company-wide service catalog that offers a collection of services.</li><li>Present a customized UI for a Knowledge Base.</li><li>Create customized login pages, search pages, views of lists, tables, charts and graphs.</li><li>Design a complete website.</li><li>Integrate ServiceNow with other company applications.</li><li>Build a tailored self-service portal for end users that is in compliance with a<a title="" href="community/service-automation-platform/cms/blog/2015/11/09/styling-your-cms-website" rel="nofollow"> corporate style guide</a>.</li></ul>
<p> </p>
<p> </p>
<p>CMS Components</p>
<p>The following are the basic building blocks provided with the CMS application that are used to create a fully functional website quickly!   The Employee Self-Service is an sample website that is made out-of-box and it utilizes these elements.   This site provides existing working examples of each which can be used like templates to build your own site!</p>
<p><img class="image-7 jive-image" style="height: 292px; width: 370.984px; display: block; margin-left: auto; margin-right: auto;" src="e335c9c6dbd013043eb27a9e0f96191a.iix" alt="Screen Shot 2015-11-03 at 4.27.15 PM.JPG" width="371" height="292" /></p>
<h1><strong>Content Site</strong></h1>
<p>A <a title="ocs.servicenow.com/administer/content_management/task/t_CreateANewSite.html" href="https://docs.servicenow.com/administer/content_management/task/t_CreateANewSite.html" rel="nofollow">site</a> is a group of related content pages that will have the same basic theme, layout and URL suffix.   This is typically the interface for &#34;self-service&#34;, a simplified front end to make requests, view articles, submit incidents and interact through live feedThe following is the out-of-box site or portal:</p>
<p><img class="image-31 jive-image" style="height: 234px; width: 718.217821782178px; display: block; margin-left: auto; margin-right: auto;" src="f07689cadb10d304b322f4621f961944.iix" alt="content site cms.jpg" width="718" height="235" /></p>
<h3>Content Page</h3>
<p>A <a title="ocs.servicenow.com/administer/content_management/task/t_CreateAContentPage.html" href="https://docs.servicenow.com/administer/content_management/task/t_CreateAContentPage.html" rel="nofollow">content page</a> within the CMS is a web page which basically displays blocks of content.   The following is one page from the out-of-box Employee Self-Service site.   Notice the page has a specific path or url that corresponds to a unique &#34;filename&#34; (create_incident) which is the &#39;URL suffix&#39; of the content page [content_page] record:</p>
<p><img class="image-32 jive-image" style="height: 342px; width: 711.543624161074px; display: block; margin-left: auto; margin-right: auto;" src="50e3e082db90dfc03eb27a9e0f961927.iix" alt="content page cms.jpg" width="712" height="342" /></p>
<p> </p>
<h3>Content Type</h3>
<p>A <a title="ocs.servicenow.com/administer/content_management/task/t_CreateAContentType.html" href="https://docs.servicenow.com/administer/content_management/task/t_CreateAContentType.html" rel="nofollow">Content Type</a> is a way to provide site-specific control of how the system data defined as templates is rendered.   It determines how the CMS displays a list -or- record whenever a particular database table (ie incident, kb_knowledge) is accessed.   Content Types have two fields for custom Jelly (Summary Template for lists and Detail Template for form) and a link to a Content Page to display the content.   To see an out-of-box example along with how content types can be customized, checkout this post: <a class="jive_macro_thread jive_macro" title="CMS and Content Types" href="community?id&#61;community_question&amp;sys_id&#61;44b1cb69db98dbc01dcaf3231f96195b" rel="nofollow">CMS and Content Types</a></p>
<p><img class="image-33 jive-image" style="height: 397px; width: 705.272206303725px; display: block; margin-left: auto; margin-right: auto;" src="1d760842dbdc5704ed6af3231f961939.iix" alt="content type cms.jpg" width="705" height="397" /></p>
<p><strong>Layout</strong></p>
<p>A <a title="ocs.servicenow.com/administer/homepage_administration/concept/c_CustomLayouts.html" href="https://docs.servicenow.com/administer/homepage_administration/concept/c_CustomLayouts.html" rel="nofollow">Layout</a> is actually a UI Macro (reusable Jelly snippet) that is used to define an HTML structure.   It uses table formatting and special id&#39;s in the HTML to define dropzones which contain content blocks that make up a content page:</p>
<p><img class="image-34 jive-image" style="height: 332px; width: 776.754716981132px; display: block; margin-left: auto; margin-right: auto;" src="6dc063fddbd01704ed6af3231f961944.iix" alt="cms layouts.jpg" width="777" height="332" /></p>
<p><strong>Dropzones</strong></p>
<p><a title="ocs.servicenow.com/administer/homepage_administration/concept/c_LayoutConcepts.html" href="https://docs.servicenow.com/administer/homepage_administration/concept/c_LayoutConcepts.html" rel="nofollow">Dropzones</a> are defined in the Layout; the Layout is specified in the Content Page.   Dropzones are where you place the content blocks that make up the page.</p>
<p><img class="image-2 jive-image" style="height: 322px; width: 764.904px; display: block; margin-left: auto; margin-right: auto;" src="7f2f7779db18d3041dcaf3231f961973.iix" alt="Screen Shot 2015-11-03 at 3.55.33 PM.JPG" width="765" height="322" /></p>
<p><strong>Content Block</strong><br /><a title="ocs.servicenow.com/administer/content_management/reference/r_TypesOfContentBlocks.html" href="https://docs.servicenow.com/administer/content_management/reference/r_TypesOfContentBlocks.html" rel="nofollow">Content blocks</a> are the chunks of actual HTML that make up a Content Page. They might be dynamically rendered but in the end they are output as HTML.   <img class="image-35 jive-image" style="height: auto; display: block; margin-left: auto; margin-right: auto;" src="aa63c98adbdc9304b322f4621f9619d4.iix" alt="content block cms.jpg" /></p>
<p> </p>
<p> </p>
<p> </p>
<p>The CMS provides a number of specific <a title="ocs.servicenow.com/administer/content_management/task/t_HeaderBlock.html" href="https://docs.servicenow.com/administer/content_management/task/t_HeaderBlock.html" rel="nofollow">Content block types</a> you can use; the following are some examples utilized within the out-of-box Employee Self-Service portal:</p>
<p> </p>
<p><strong>Content Block Types - Headers</strong></p>
<p>A <a title="ocs.servicenow.com/administer/content_management/task/t_HeaderBlock.html" href="https://docs.servicenow.com/administer/content_management/task/t_HeaderBlock.html" rel="nofollow">header block</a> is a visual element placed at the top of pages. The header block provides a place for branding and areas for important site-wide functionality.</p>
<p><img class="image-23 jive-image" style="height: 69px; width: 838.824px; display: block; margin-left: auto; margin-right: auto;" src="575c37f5db94d3041dcaf3231f9619ee.iix" alt="Screen Shot 2015-11-04 at 10.08.53 AM.JPG" width="839" height="69" /></p>
<p> </p>
<p><strong>Content Block Types - Dynamic</strong></p>
<p>Use <a title="ocs.servicenow.com/administer/content_management/task/t_DynamicBlock.html" href="https://docs.servicenow.com/administer/content_management/task/t_DynamicBlock.html" rel="nofollow">dynamic blocks</a> to script (using Jelly) or pull information from the system:</p>
<p><img class="image-38 jive-image" style="width: 620px; height: 233px; display: block; margin-left: auto; margin-right: auto;" src="d976c9c6db549f048c8ef4621f961964.iix" alt="dynamic content blocks.jpg" /></p>
<p><strong><strong>Content Block Types - List</strong></strong></p>
<p><a title="ocs.servicenow.com/administer/content_management/concept/c_ListBlocks.html" href="https://docs.servicenow.com/administer/content_management/concept/c_ListBlocks.html" rel="nofollow">List blocks</a> are content blocks that dynamically generate a list of links to records within the ServiceNow instance. The list can be made using a simple query on any table or by scripting a more advanced query. When a user clicks a link in a list block, the associated information is displayed in a detail page determined by a Content Type record defined for the table (ie incident in the example below):</p>
<p><strong><strong><img class="image-39 jive-image" style="width: 620px; height: 293px; display: block; margin-left: auto; margin-right: auto;" src="cde36ccadb50dfc068c1fb651f9619dd.iix" alt="list blocks.jpg" /><br /></strong></strong></p>
<p><strong><strong>Content Block Types - Static</strong></strong></p>
<p>A <a title="ocs.servicenow.com/administer/content_management/task/t_StaticHTMLBlock.html" href="https://docs.servicenow.com/administer/content_management/task/t_StaticHTMLBlock.html" rel="nofollow">static block</a> allows you to define scripted conditions and HTML code to be run within a page:</p>
<p><strong><strong><img class="image-40 jive-image" style="width: 620px; height: 253px; display: block; margin-left: auto; margin-right: auto;" src="357688cedb1c5fc03eb27a9e0f96191e.iix" alt="static block.jpg" /><br /></strong></strong></p>
<p> </p>
<p><strong>Specialty Content Block Types - Detailed Content</strong></p>
<p><span style="color: #333333; font-family: Omnes-pro, Arial, Verdana, sans-serif;">A <a title="ocs.servicenow.com/administer/content_management/task/t_DetailedContentBlock.html" href="https://docs.servicenow.com/administer/content_management/task/t_DetailedContentBlock.html" rel="nofollow">detailed content block</a> displays the content of an existing document, such as incident, knowledge article or a service catalog request, as a block on a content page.   This block works in conjunction with and is referenced in the &#39;Default detail page&#39; field within a <a title="ocs.servicenow.com/administer/content_management/task/t_CreateAContentType.html" href="https://docs.servicenow.com/administer/content_management/task/t_CreateAContentType.html" rel="nofollow">Content Type</a> record.   This detail block displays the document list or form determined by the &#39;Type&#39; (ie table) specified in the Content Type.</span></p>
<p><span style="color: #333333; font-family: Omnes-pro, Arial, Verdana, sans-serif;"><img class="image-41 jive-image" style="width: 620px; height: 155px; display: block; margin-left: auto; margin-right: auto;" src="86c067fddbd01704ed6af3231f9619f4.iix" alt="detailed block.jpg" /><br /></span></p>
<p> </p>
<p><strong>Specialty Content Block Types - Content Links</strong></p>
<p>A <a title="ocs.servicenow.com/administer/content_management/concept/c_NavigationMenusAndContentLinks.html" href="https://docs.servicenow.com/administer/content_management/concept/c_NavigationMenusAndContentLinks.html" rel="nofollow">Content Link</a> block provides a way to specify a URL link.</p>
<p><strong><img class="image-42 jive-image" style="width: 620px; height: 159px; display: block; margin-left: auto; margin-right: auto;" src="df630d0edb9013043eb27a9e0f961976.iix" alt="content links.jpg" /></strong></p>
<p><strong>Specialty Content Block Types - iframe</strong></p>
<p>An <a title="ocs.servicenow.com/administer/content_management/task/t_IFrame.html" href="https://docs.servicenow.com/administer/content_management/task/t_IFrame.html" rel="nofollow">iFrame</a> embeds a URL on a page within a frame. It can be used to embed external pages or to render ServiceNow content within the content page.   The following are a couple examples:</p>
<p><img class="image-43 jive-image" style="width: 620px; height: 265px; display: block; margin-left: auto; margin-right: auto;" src="ae43604edb105f048c8ef4621f9619f4.iix" alt="iframe blocks.jpg" /></p>
<p> </p>
<p>The following provides an example of how <a title="ocs.servicenow.com/administer/homepage_administration/concept/c_DefineALayout.html" href="https://docs.servicenow.com/administer/homepage_administration/concept/c_DefineALayout.html" rel="nofollow">Content Blocks can be added </a>to build a page within the CMS:</p>
<p><img class="image-36 jive-image" style="width: 620px; height: 406px; display: block; margin-left: auto; margin-right: auto;" src="b143a0c6db5457041dcaf3231f9619e2.iix" alt="content block css.JPG" /></p>
<h2><strong>Themes and Style Sheets</strong></h2>
<p>A <a title="ocs.servicenow.com/administer/content_management/concept/c_DesignThemes.html" href="https://docs.servicenow.com/administer/content_management/concept/c_DesignThemes.html" rel="nofollow">theme</a> is a collection of one or more style sheets (CSS files) that define a consistent look for the site (a set of pages).   This is the theme associated to the out-of-box Employee Self-Service site:</p>
<p><img class="image-37 jive-image" style="width: 620px; height: 447px; display: block; margin-left: auto; margin-right: auto;" src="01a1e7bddb585b048c8ef4621f96195f.iix" alt="style themes.jpg" /></p>
<p> </p>
<p> </p>
<p> </p>
<p><a title="ocs.servicenow.com/administer/content_management/concept/c_StyleSheets.html" href="https://docs.servicenow.com/administer/content_management/concept/c_StyleSheets.html" rel="nofollow">Style Sheets</a> are standard Cascading Style Sheets (CSS) that define the look and feel of all elements within the interface. <em>Content pages do not reference style sheets directly</em>. To invoke a style sheet, you must assign the style sheet to a Theme using the related list on the Theme form.</p>
<p> </p>
<p>CSS can either be internal (stored in the database) or external (hosted on the server), based on organizational needs. To define an internal style sheet, use standard CSS in the style field:</p>
<p><img class="image-44 jive-image" style="width: 620px; height: 329px; display: block; margin-left: auto; margin-right: auto;" src="e7628c0edb98d3049c9ffb651f9619cd.iix" alt="style sheets.jpg" /></p>
<p>Using external CSS allows the Content Management System to use exactly the same CSS as a corporate website or other online resource. Use an external style sheet by defining a URL that points to the .cssx file.   <a title="ocs.servicenow.com/use/using_forms/concept/c_UploadingAttachments.html" href="https://docs.servicenow.com/use/using_forms/concept/c_UploadingAttachments.html" rel="nofollow">Upload</a> the external CSS file to the platform via the Attachments [sys_attachment] table and then the .cssx file can then be referenced using a URL.   In a similar way, custom fonts can also be <a title="" href="community/service-automation-platform/cms/blog/2015/10/15/how-to-put-a-ttf-font-file-into-service-now-cms" rel="nofollow">uploaded</a> and referenced within the Style Sheet:</p>
<p><img class="image-22 jive-image" style="height: auto;" src="db4f5c02db10d704ed6af3231f961947.iix" alt="Screen Shot 2015-11-04 at 9.56.25 AM.JPG" /></p>
<p>Style Sheet are then broken down into <a title="w.w3schools.com/css/css_syntax.asp" href="http://www.w3schools.com/css/css_syntax.asp" rel="nofollow">CSS declarations</a> where style properties and values are specified:</p>
<p><img class="image-45 jive-image" style="width: 620px; height: 238px; display: block; margin-left: auto; margin-right: auto;" src="6920e3b5dbd01704ed6af3231f961972.iix" alt="css declarations.jpg" /></p>
<p>Also see <a class="jive_macro jive_macro_blogpost" title="Changing the font size in your Instance." href="community?id&#61;community_blog&amp;sys_id&#61;114ee2addbd0dbc01dcaf3231f9619a7" rel="nofollow">Changing the font size in your Instance.</a></p>
<p> </p>
<p> </p>
<h2>So, what&#39;s the next step? Get started creating your own site!   There are two ways:</h2>
<p>You can <a title="ocs.servicenow.com/administer/content_management/task/t_CreateANewSite.html" href="https://docs.servicenow.com/administer/content_management/task/t_CreateANewSite.html" rel="nofollow">create a site from scratch</a>:</p>
<p><img class="image-51 jive-image" style="width: 620px; height: 86px; display: block; margin-left: auto; margin-right: auto;" src="31aec582db54d344e9737a9e0f961932.iix" alt="create new cms site.jpg" /></p>
<p>-or-</p>
<p> </p>
<p><a title="ocs.servicenow.com/administer/content_management/task/t_CopyASite.html" href="https://docs.servicenow.com/administer/content_management/task/t_CopyASite.html" rel="nofollow">Copy the existing Employee Self-Service site</a>:</p>
<p><img class="image-52 jive-image" style="width: 620px; height: 203px; display: block; margin-left: auto; margin-right: auto;" src="d3d6a086db109344e9737a9e0f96197e.iix" alt="copy existing cms site.jpg" /></p>
<p> </p>
<p>This method builds a new site quickly by cloning a new site record and elements prefixed by the name entered above:</p>
<p><img class="image-53 jive-image" style="width: 620px; height: 191px; display: block; margin-left: auto; margin-right: auto;" src="10c8cccadb109704ed6af3231f96190e.iix" alt="cloning new site.jpg" /></p>
<p> </p>
<p>...scroll down to the Pages related list to see the pages are cloned as well:</p>
<p><img class="image-54 jive-image" style="width: 620px; height: 484px; display: block; margin-left: auto; margin-right: auto;" src="fdf46b39db1493041dcaf3231f961950.iix" alt="pages cloned.jpg" /></p>
<p>Launch the url to display the newly cloned site:</p>
<p><img class="image-55 jive-image" style="width: 620px; height: 263px; display: block; margin-left: auto; margin-right: auto;" src="6d55c886db9cd3049c9ffb651f96190a.iix" alt="new cloned site.jpg" /></p>
<p>Using the out-of-box elements as a guide, you can customize the site to meet your business needs.</p>