---
title: "Make Better Looking Dashboards with Content Blocks"
date: 2018-02-07T05:48:14.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=29ec2e65dbd0dbc01dcaf3231f9619a4"
---
<p>The discussion below is intended for any person building Dashboards.   No JavaScript or Performance Analytics experience is required.   A working knowledge of HTML is useful but not required.</p>
<h1>Introduction</h1>
<p>We often focus on getting important data to be displayed on a dashboard.   Of course, this is important but sometimes we need more than just Reports and Performance Analytics Widgets.   In this discussion, we will look at one of the many tools you have access to as part of the NOW Platform, <a title="ocs.servicenow.com/bundle/kingston-servicenow-platform/page/administer/content-management/concept/c_ContentBlocks.html" href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/administer/content-management/concept/c_ContentBlocks.html" rel="nofollow">Content Blocks</a>, to improve the aesthetics and usability of your dashboards.</p>
<p><strong style="color: red;">To create and modify Content Blocks, you will need the content_admin or admin role.</strong></p>
<p>Here are a few things we will cover:</p>
<p> </p>
<table class="jiveBorder" style="border: 1px solid #c6c6c6;" border="1"><tbody><tr><th style="text-align: left; background-color: #f2f2f2; color: #505050; padding: 6px;" valign="middle"><strong>Use Case</strong></th><th style="text-align: left; background-color: #f2f2f2; color: #505050; padding: 6px;" valign="middle"><strong>Example</strong></th></tr><tr><td style="padding: 6px;">
<p><strong>Section Headers</strong></p>
<p>On an Executive Dashboard with many different widgets, it is sometimes difficult to group related widgets together.   This can be addressed with Section Headers.</p>
</td><td style="padding: 6px;"><img class="image-7 jive-image" style="max-width: 300px; width: 500px; height: auto;" src="b8aa054adb1c97041dcaf3231f96191e.iix" alt="2018-01-31_13-48-31.png" /></td></tr><tr><td style="padding: 6px;">
<p><strong>Dashboard Footer</strong></p>
<p>What should a user do if they have a question?   Add a standard footer with some quick links to request help via your Service Catalog.</p>
</td><td style="padding: 6px;"><img class="image-8 jive-image" style="max-width: 300px; width: 500px; height: auto;" src="a85ecd42db94130468c1fb651f9619a2.iix" alt="2018-01-31_16-11-11.png" /></td></tr><tr><td style="padding: 6px;">
<p><strong>In-Line Help</strong></p>
<p>When first deploying Performance Analytics users may be a little overwhelmed by all the information they can now see.   Adding some in-line help can help your user get familiar with how they can interact with what they are seeing and provide some more explanation of what they are seeing.</p>
</td><td style="padding: 6px;"><img class="image-12 jive-image" style="max-width: 300px; width: 500px; height: auto;" src="3af7e331db181fc03eb27a9e0f9619c0.iix" alt="2018-01-31_16-42-29.png" /></td></tr><tr><td style="padding: 6px;">
<p><strong>List of Links</strong></p>
<p>Drive users to take action by adding some links to commonly used items.   These can be internal or external to the instance.</p>
</td><td style="padding: 6px;"><img class="image-10 jive-image" style="max-width: 300px; width: 500px; height: auto;" src="22c86046dbd457049c9ffb651f9619d2.iix" alt="2018-02-01_13-52-15.png" /></td></tr><tr><td style="padding: 6px;">
<p><strong>Adding a KB Article</strong></p>
<p>Provide in-depth explanations of the indicators and the process behind them via Knowledge articles embedded in the Dashboard.</p>
</td><td style="padding: 6px;"><img class="image-11 jive-image" style="max-width: 300px; width: 500px; height: auto;" src="06078402db9c5fc068c1fb651f9619d2.iix" alt="2018-02-01_14-34-30.png" /></td></tr></tbody></table>
<p> </p>
<p>For the best user experience, be sure your content blocks are &#34;responsive&#34; [<span style="color: #1287b5;"><a title="n.wikipedia.org/wiki/Responsive_web_design" href="https://en.wikipedia.org/wiki/Responsive_web_design" rel="nofollow">https://en.wikipedia.org/wiki/Responsive_web_design</a></span>] and should be tested for export to PDF (especially the ones which will pull in resources external to the platform).</p>
<p> </p>
<h1>Use Case Walkthrough</h1>
<p> </p>
<h3>Use Case: Section Headers</h3>
<p>Adding Sections Headers gives a little more formatting to your dashboard and can be a nice way to help new users transition from consuming their data in slide decks to consuming it in ServiceNow.</p>
<p> </p>
<p>1) Create a new <strong>*New Static HTML</strong> content block on your dashboard and click <strong>Click here</strong> to edit the new Content Block.</p>
<p><img class="image-14 jive-image" style="width: 620px; height: 329px;" src="7b57ec86db9457049c9ffb651f9619c1.iix" alt="2018-02-02_14-01-59.png" /></p>
<p>2) Use the WYSIWYG editor to create your header.</p>
<p>You can include images from the image library on your instance or you can attach the image to the content block itself which is useful to keep the block self-contained.   Try just cutting and pasting an image into the WYSIWG editor.   <a title="ocs.servicenow.com/bundle/kingston-platform-administration/page/use/using-forms/task/t_EmbeddingImagesInHTMLFields.html" href="https://docs.servicenow.com/bundle/kingston-platform-administration/page/use/using-forms/task/t_EmbeddingImagesInHTMLFields.html" rel="nofollow">Here is more information on adding images to your Content Blocks</a>.</p>
<p><img class="image-20 jive-image" style="width: 620px; height: 222px;" src="6340eb39db185b048c8ef4621f96190f.iix" alt="2018-01-29_14-44-26.png" /></p>
<p>If the editor adds extra spaces or &#34;&lt;p&gt;&#34; tags, you can edit the HTML directly via the &#34;&lt;&gt;&#34; icon or in the list view.</p>
<p> </p>
<p>Here is an example of the HTML in this example:</p>
<pre class="language-javascript"><code>&lt;div style&#61;&#34;text-align: center; width: 100%;&#34;&gt;&lt;img style&#61;&#34;align: baseline;&#34; src&#61;&#34;/sys_attachment.do?sys_id&#61;b9836d32db426a0066d8f4bbaf96199e&#34;

alt&#61;&#34;&#34; width&#61;&#34;595&#34; height&#61;&#34;90&#34; align&#61;&#34;baseline&#34; /&gt;&lt;/div&gt;</code></pre>
<p>  </p>
<p>3) Click <strong>Submit</strong> and repeat the procedure for all the headers you need.   You could end up with a dashboard like this:</p>
<p><img class="image-19 jive-image" style="width: 620px; height: 294px;" src="8bf580cadb5cd3041dcaf3231f9619ad.iix" alt="2018-01-31_13-48-31.png" /></p>
<p> </p>
<p> </p>
<h3>Use Case: Dashboard Footer</h3>
<p> </p>
<p>1) Create a new <strong>Static HTML</strong> content block on your dashboard and click <strong>Click here</strong> to edit the new Content Block.</p>
<p> </p>
<p>2) Use the WYSIWYG editor to create your footer:</p>
<p><img class="image-18 jive-image" style="width: 620px; height: 208px;" src="0273684edb50dfc03eb27a9e0f961994.iix" alt="2018-01-31_16-09-00.png" /></p>
<p> </p>
<p>Here is the HTML for this example:</p>
<pre class="language-javascript"><code>&lt;p style&#61;&#34;text-align: right;&#34;&gt;
&lt;span style&#61;&#34;text-align: right;&#34;&gt;&lt;img src&#61;&#34;/sys_attachment.do?sys_id&#61;3911bf7813c8db0005ef54c32244b05b&#34; /&gt;Questions about this dashboard? Contact &lt;/span&gt;&lt;a style&#61;&#34;text-align: right;&#34; title&#61;&#34;Operational Analytics&#34; href&#61;&#34;/com.glideapp.servicecatalog_cat_item_view.do?sysparm_id&#61;96c7fdc167132200e9b7808bd485ef49&#34;
target&#61;&#34;_blank&#34;&gt;Operational Analytics&lt;/a&gt;&lt;/p&gt;</code></pre>
<p>  </p>
<p>3) Click <strong>Submit</strong> and we should be sent back to the dashboard with the Dashboard Footer now displayed like this:</p>
<p><img class="image-17 jive-image" style="width: 620px; height: 274px;" src="13c6c14adb5497049c9ffb651f9619e1.iix" alt="2018-01-31_16-11-11.png" /></p>
<h3>Use Case: In-Line Help</h3>
<p> </p>
<p>1) Create a new <strong>Static HTML</strong> content block on your dashboard and click <strong>Click here</strong> to edit the new Content Block.</p>
<p> </p>
<p>2) Use the WYSIWYG editor to create a small block of help for your users:</p>
<p><img class="image-16 jive-image" style="width: 620px; height: 308px;" src="71b5e3f5db941fc03eb27a9e0f9619d5.iix" alt="2018-01-31_16-27-09.png" /></p>
<p> </p>
<p>3) Click <strong>Submit</strong> and we should be sent back to the dashboard with the in-line help now displayed like this:<img class="image-15 jive-image" style="width: 620px; height: 297px;" src="11f48442db9c5704ed6af3231f96196b.iix" alt="2018-01-31_16-42-29.png" /></p>
<p> </p>
<h3><strong>Use Case: List of Links</strong></h3>
<p> </p>
<p>1) Create a new <strong>Static HTML</strong> content block on your dashboard and click <strong>Click here</strong> to edit the new Content Block.</p>
<p> </p>
<p>2) Use the WYSIWYG editor to create a bulleted list of links you want to include:</p>
<p><img class="image-13 jive-image" style="width: 620px; height: 346px;" src="b189c94edb90d344e9737a9e0f961951.iix" alt="2018-02-01_13-49-36.png" /></p>
<p> </p>
<p>3) Click <strong>Submit</strong> and we should be sent back to the dashboard with the links now displayed like this:</p>
<p><img class="image-5 jive-image" style="width: 620px; height: 330px;" src="43a66375dbd0dfc0b322f4621f961943.iix" alt="2018-02-01_13-52-15.png" /></p>
<p> </p>
<h3> </h3>
<h3>Use Case: Adding a KB Article</h3>
<p>Some dashboards contain data that require a deeper explanation than just the report titles and series labels.     In these cases, I like to add a separate tab with a User Guide or F.A.Q. that includes a Knowledge Article.</p>
<p> </p>
<p>1) Create a new <strong>*New Detail</strong> content block on the new and empty tab of your dashboard</p>
<p><img class="image-2 jive-image" style="width: 255px; height: 437.613px;" src="48aac5cedb9497049c9ffb651f961920.iix" alt="2018-02-01_14-29-09.png" width="255" height="438" /></p>
<p> </p>
<p> </p>
<p>2) Once the new block has been added, click on the link to <strong>Click here</strong>:</p>
<p><img class="image-3 jive-image" style="width: 620px; height: 310px;" src="6e2a24c2db1857049c9ffb651f9619de.iix" alt="2018-02-01_14-30-26.png" /></p>
<p> </p>
<p>3) On the Detailed Content form, <strong>Name</strong> the Content Block (which will be displayed as the widget name on the Dashboard) and select the KB Article you want to include by browsing the <strong>Model document</strong>:</p>
<p><img class="image-4 jive-image" style="width: 620px; height: 203px;" src="22e88c06dbdc5fc068c1fb651f96192b.iix" alt="2018-02-01_14-31-43.png" /></p>
<p> </p>
<p> </p>
<p>4) Click <strong>Submit</strong> and we should be redirected to the Dashboard that now looks like this:</p>
<p> </p>
<p><img class="image-1 jive-image" style="height: 297px; width: 716.498px;" src="5573e84adb5457041dcaf3231f96191f.iix" alt="2018-02-01_14-34-30.png" width="716" height="297" /></p>
<p> </p>
<p>This example works for non-versioned KB articles if you have KB Versioning enabled, see how to accomplish the same use case with a Scripted Detail Content Block <a title="" href="/community?id=community_article&sys_id=fcccee25dbd0dbc01dcaf3231f9619b9" rel="nofollow">here</a>.</p>
<p> </p>
<h1>Conclusion</h1>
<p>Dashboards are not limited to just Reports and Performance Analytics.   Dashboards are part of the NOW Platform and can include anything we have in the Platform.   Not just Static HTML and Knowledge Articles but Service Catalog Items and Custom UI pages as well.</p>
<p> </p>
<p>Your Dashboards can&#39;t just display data, they must drive action.   Use all the tools at your disposal to make that happen.</p>