---
title: "Easy steps to make your portals SEO friendly"
date: 2020-02-26T12:36:26.000Z
authors: ["Divya Balasubramanian"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ad959508db130c906064eeb5ca961901"
---
<p><span style="font-family: helvetica; font-size: 12pt;">Search Engine Optimization (SEO) is the science behind optimizing a website’s content so that the search engines are more likely to show it as a top result for relevant keyword searches. ServiceNow offers OOTB capabilities to support customers in making their portal SEO friendly.  We believe that many of our customers are aware that their users rely on organic search engines to surface customer-focused and detailed help content to address their issues. So, to help customers setup their portal in a way they can get the relevant help information easier and quicker, some simple configuration and customization steps have been listed below.</span></p>
<p><span style="font-family: helvetica; font-size: 12pt;">Why is SEO important?</span></p>
<ul><li><span style="font-family: helvetica; font-size: 12pt;">Improving discovery of content via all channels and connecting customers to that useful content</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Helps deliver better/relevant information and content for search engines</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Increasing quality and quantity of traffic through “organic” search engines</span></li></ul>
<p><span style="font-family: helvetica; font-size: 12pt;">Search engines are smart, but they still need our help!</span></p>
<p><span style="font-family: helvetica; font-size: 12pt;">And also, just to add more weight to that, 75% of searchers begin their search on Google and 67% of the clicks come from the first five results.  That means, if you are not in the top 5 results of a search engine then a lot of users who could not find what they were looking for in your website. So, in this blog we will provide some suggestions on how you can setup your portal to be SEO-friendly.</span></p>
<p><span style="font-size: 12pt;"><span style="font-family: helvetica;">In this blog we will be walking you through the different capabilities ServiceNow offers and the steps to setup these capabilities for your portal. The key capabilities such as:</span><span style="font-family: helvetica;"> </span></span></p>
<ul><li><span style="font-family: helvetica; font-size: 12pt;">Configuring and setting-up Page title and description which will be displayed on search results</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Configuring different meta tags which helps search engines easily understand the content and improve searchability</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Setting up Robots.txt file</span></li></ul>
<h1><span style="color: #003366;"><strong><span style="font-family: helvetica; font-size: 12pt;">Steps to setup SEO for your Knowledge portal:</span></strong></span></h1>
<h2><strong><span style="font-family: helvetica; font-size: 12pt; color: #003366;">Setting up Page title and description to be displayed on search results</span></strong></h2>
<ul><li><span style="font-family: helvetica; font-size: 12pt;">Add a static or dynamic variable value to be displayed as Page title which will be displayed based on the page content on Browser Tab information and Search results page.</span></li></ul>
<p><strong><span style="font-family: helvetica; font-size: 12pt;"><span style="color: #003366;">Steps to setup Dynamic Page Title</span> (<a href="https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/build/service-portal/concept/seo-sp.html" rel="nofollow">DOCS Link</a>)</span></strong></p>
<p><span style="color: #993300;"><em><span style="font-family: helvetica; font-size: 12pt;">      (Role required – Admin)</span></em></span></p>
<ul><li><span style="font-family: helvetica; font-size: 12pt;">Navigate to <strong>Service Portal</strong> &gt; <strong>Pages</strong>.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Open a page.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Add one or more variables to the <strong>Dynamic page title</strong> field</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Click the <strong>Dynamic page title variables</strong> related list tab.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Click <strong>New</strong> to create a new variable.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">To setup a dynamic parameter, associate a field with the query parameter.</span></li><li>Complete the form.</li></ul>
<p style="text-align: center;"> </p>
<table style="width: 723px; border-color: #c0c0c0; background-color: #e5e9ee; float: left;" border="		#C0C0C0"><thead><tr style="height: 46px;"><td style="width: 187px; height: 46px;">
<p style="text-align: center;"><strong><span style="font-family: helvetica; font-size: 12pt;">Field</span></strong></p>
</td><td style="width: 524px; height: 46px;">
<p style="text-align: center;"><strong><span style="font-family: helvetica; font-size: 12pt;">Description</span></strong></p>
</td></tr></thead><tbody><tr style="height: 64px;"><td style="width: 187px; height: 64px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Name</span></p>
</td><td style="width: 524px; height: 64px;">
<p><span style="font-family: helvetica; font-size: 12pt;">The variable to store the value. Must begin with <strong>%</strong> and cannot contain spaces. This value must match one of the variables defined in the <strong>Dynamic page title</strong> field.</span></p>
</td></tr><tr style="height: 46px;"><td style="width: 187px; height: 46px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Application</span></p>
</td><td style="width: 524px; height: 46px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Application scope of the page. This value is read-only.</span></p>
</td></tr><tr style="height: 46px;"><td style="width: 187px; height: 46px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Page</span></p>
</td><td style="width: 524px; height: 46px;">
<p><span style="font-family: helvetica; font-size: 12pt;">The page to apply the dynamic variable to.</span></p>
</td></tr><tr style="height: 64px;"><td style="width: 187px; height: 64px;">
<p><span style="font-family: helvetica; font-size: 12pt;">URL query parameter</span></p>
</td><td style="width: 524px; height: 64px;">
<p><span style="font-family: helvetica; font-size: 12pt;">The URL parameter that determines the record to display.</span></p>
</td></tr><tr style="height: 46px;"><td style="width: 187px; height: 46px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Table</span></p>
</td><td style="width: 524px; height: 46px;">
<p><span style="font-family: helvetica; font-size: 12pt;">The source table of the URL query parameter record.</span></p>
</td></tr><tr style="height: 64.9219px;"><td style="width: 187px; height: 64.9219px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Table field</span></p>
</td><td style="width: 524px; height: 64.9219px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Select a field from the table defined in the <strong>Table</strong> field. This field is used to generate the dynamic page title.</span></p>
</td></tr></tbody></table>
<p style="text-align: center;"> </p>
<p style="text-align: center;"> </p>
<p style="text-align: left;"><span style="font-family: helvetica; font-size: 12pt;">Example output:</span></p>
<p><span style="font-family: helvetica; font-size: 12pt;"><img src="https://community.servicenow.com/faa35d88dbdfc8906064eeb5ca961939.iix" /></span></p>
<p><span style="font-family: helvetica; font-size: 12pt;"> </span></p>
<p> </p>
<p><span style="font-family: helvetica; font-size: 12pt; color: #003366;"><strong>Steps to setup Meta tags/Description  for knowledge articles (</strong><a style="color: #003366;" href="https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/product/knowledge-management/task/configure-SEO-article-template.html" rel="nofollow"><strong>DOCS link</strong></a><strong>)</strong></span></p>
<h2><span style="font-family: helvetica; font-size: 12pt;">Meta tags help search engine crawlers improve the searchability of portal pages and can provide name and description attributes of a page which may be displayed on search results.</span></h2>
<h2><em><span style="font-family: helvetica; font-size: 12pt; color: #800000;">    (Role required – Admin or SP_Admin)</span></em></h2>
<ul><li><span style="font-family: helvetica; font-size: 12pt;">Navigate to </span><strong style="font-family: helvetica; font-size: 12pt;">Service Portal</strong><span style="font-family: helvetica; font-size: 12pt;"> &gt; </span><strong style="font-family: helvetica; font-size: 12pt;">Pages</strong><span style="font-family: helvetica; font-size: 12pt;">.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Open a page.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Check if </span><strong style="font-family: helvetica; font-size: 12pt;">Public</strong><span style="font-family: helvetica; font-size: 12pt;"> is selected. Pages that are not public are not indexed by external search engines.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Click the </span><strong style="font-family: helvetica; font-size: 12pt;">Meta tags</strong><span style="font-family: helvetica; font-size: 12pt;"> related list tab.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Click <strong>New</strong> to create a new meta tag.</span></li><li><span style="font-family: helvetica; font-size: 12pt;"><strong>Robots -</strong> The HTML meta description attribute.If <strong>ROBOTS</strong> is defined in the <strong>Name</strong> field, you can add one of the following content values:</span>
<ul><li><span style="font-family: helvetica; font-size: 12pt;"><strong>INDEX, FOLLOW</strong>: The search engine shows the page in search results and trusts any links in the page. This is the default value.</span></li><li><span style="font-family: helvetica; font-size: 12pt;"><strong>NOINDEX, FOLLOW</strong>: The search engine does not show the page in search results, but trusts any links in the page.</span></li><li><span style="font-family: helvetica; font-size: 12pt;"><strong>INDEX, NOFOLLOW</strong>: The search engine shows the page in the search results, but does not trust links in the page.</span></li><li><span style="font-family: helvetica; font-size: 12pt;"><strong>NOINDEX, NOFOLLOW</strong>: The search engine does not show the page in search results and does not trust links in the page.</span></li></ul>
</li><li><span style="font-family: helvetica; font-size: 12pt;"><strong>Description – </strong>Two kinds of variable settings could be used to set the meta tag called description.</span></li></ul>
<p><span style="font-family: helvetica; font-size: 12pt;"> </span></p>
<p><span style="font-family: helvetica; font-size: 12pt; color: #003366;"><strong>Create meta tag via service portal(<a style="color: #003366;" href="https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/product/knowledge-management/task/configure-SEO-article-template.html" rel="nofollow">DOCS link</a>)</strong></span></p>
<p><em><span style="font-family: helvetica; font-size: 12pt; color: #800000;">  (Role required – Admin or SP_Admin)</span></em></p>
<ul><li><span style="font-family: helvetica; font-size: 12pt;">Create a content variable to populate the content tag with record data.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">If the page loads record data based on one or more URL parameters, you can add meta tags generated from the record data.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Open a meta tag record and check that the <strong>Content</strong> field contains a variable, or add a variable.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Depending on the available URL parameters and the meta tag you would like to define, you can add the following types of values:</span></li></ul>
<p> </p>
<p> </p>
<table style="width: 636px; border-color: #c0c0c0; background-color: #e5e9ee; margin-left: auto; margin-right: auto;" border="	#C0C0C0"><thead><tr><td style="width: 153px;">
<p style="text-align: center;"><strong><span style="font-family: helvetica; font-size: 12pt;">Value types</span></strong></p>
</td><td style="width: 255px; text-align: center;">
<p><strong><span style="font-family: helvetica; font-size: 12pt;">Description</span></strong></p>
</td><td style="width: 210px;">
<p style="text-align: center;"><strong><span style="font-family: helvetica; font-size: 12pt;">Example value</span></strong></p>
</td></tr></thead><tbody><tr><td style="width: 153px;">
<p><span style="font-family: helvetica; font-size: 12pt;">One URL parameter variable</span></p>
</td><td style="width: 255px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Populates the content tag with the value defined in the associated content variables record.</span></p>
</td><td style="width: 210px;">
<p><span style="font-family: helvetica; font-size: 12pt;">%description</span></p>
</td></tr><tr><td style="width: 153px;">
<p><span style="font-family: helvetica; font-size: 12pt;">More than one URL parameter variable</span></p>
</td><td style="width: 255px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Populates the content tag with the values defined in the associated content variables records.</span></p>
</td><td style="width: 210px;">
<p><span style="font-family: helvetica; font-size: 12pt;">%description %price</span></p>
</td></tr><tr><td style="width: 153px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Static value and a URL parameter variable</span></p>
</td><td style="width: 255px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Populates the content tag with a static value and the associated content variables record.</span></p>
</td><td style="width: 210px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Catalog item: %description</span></p>
</td></tr></tbody></table>
<p> </p>
<ul><li><span style="font-family: helvetica; font-size: 12pt;">In the <strong>Content variables</strong> related list, click <strong>New</strong>.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">The <strong>Content variables</strong> related list is only available after saving the meta tag record.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Complete the form.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Associate a field with a URL query parameter. When the value of the query parameter is used to display content, a field from the same record is used to generate the content tag. You can define the field to generate the content tag through the <strong>Table field</strong> field.</span></li></ul>
<p style="text-align: center;"> </p>
<table style="width: 697px; border-color: #c0c0c0; background-color: #e5e9ee; margin-left: auto; margin-right: auto;" border="	#C0C0C0"><thead><tr><td style="width: 193px;">
<p style="text-align: center;"><strong><span style="font-family: helvetica; font-size: 12pt;">Field</span></strong></p>
</td><td style="width: 494px;">
<p style="text-align: center;"><strong><span style="font-family: helvetica; font-size: 12pt;">Description</span></strong></p>
</td></tr></thead><tbody><tr><td style="width: 193px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Name</span></p>
</td><td style="width: 494px;">
<p><span style="font-family: helvetica; font-size: 12pt;">The variable to store the value. Must begin with <strong>%</strong> and cannot contain spaces. This value must match one of the variables defined in the <strong>Content</strong> field in the Meta tag record.</span></p>
</td></tr><tr><td style="width: 193px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Application</span></p>
</td><td style="width: 494px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Application scope of the page. This value is read-only.</span></p>
</td></tr><tr><td style="width: 193px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Metatag</span></p>
</td><td style="width: 494px;">
<p><span style="font-family: helvetica; font-size: 12pt;">The meta tag to apply the dynamic variable to.</span></p>
</td></tr><tr><td style="width: 193px;">
<p><span style="font-family: helvetica; font-size: 12pt;">URL query parameter</span></p>
</td><td style="width: 494px;">
<p><span style="font-family: helvetica; font-size: 12pt;">The URL parameter that determines the record to display.</span></p>
</td></tr><tr><td style="width: 193px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Table</span></p>
</td><td style="width: 494px;">
<p><span style="font-family: helvetica; font-size: 12pt;">The source table of the URL query parameter record.</span></p>
</td></tr><tr><td style="width: 193px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Table field</span></p>
</td><td style="width: 494px;">
<p><span style="font-family: helvetica; font-size: 12pt;">Select a field from the table defined in the <strong>Table</strong> field. This field is used to generate the value of the content tag.</span></p>
</td></tr></tbody></table>
<ul><li style="text-align: left;"> If more than one content variables match a variable defined in the <strong>Content</strong> field of the meta tag record, the record with the earliest Created date is used.</li><li><span style="font-family: helvetica; font-size: 12pt;">Click <strong>Submit</strong>.</span></li></ul>
<h2><span style="font-family: helvetica; font-size: 12pt; color: #003366;"><strong>Setting up at Knowledge templates</strong> (<a style="color: #003366;" href="https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/product/knowledge-management/task/configure-SEO-article-template.html" rel="nofollow">Docs Link</a>)</span></h2>
<h2><em><span style="font-family: helvetica; font-size: 12pt; color: #800000;">(Role required – Admin or Knowledge Admin)</span></em></h2>
<ol><li><span style="font-family: helvetica; font-size: 12pt;">Navigate to <strong>Knowledge</strong> &gt; <strong>Article Templates</strong>.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Select an article template.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">In the <strong>SEO Description Tag</strong> field, select an article template field.</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Then follow the same steps as above and add the reference table field as Meta description from the table kb_knowledge as shown below.</span></li></ol>
<p><span style="font-family: helvetica; font-size: 12pt;">   <img src="https://community.servicenow.com/4824914cdbdfc8906064eeb5ca961982.iix" /></span></p>
<p><span style="font-family: helvetica; font-size: 12pt;">The number of characters to be chosen to set the meta description can be controlled using the below property - <strong><u>glide.knowman.seo.pages.meta_description.length</u></strong></span></p>
<p> </p>
<p><em><span style="color: #993300;"><span style="font-family: helvetica;">Note: The meta description field of Knowledge table can be still used as a reference variable even if standard template is not used. The system will by default use the description field to populate the configured length of meta description tag.</span>  Also, for the meta tags to be visible to crawlers, ensure the fields selected for the meta tags should have the necessary ACLs to be public.</span></em></p>
<h1><span style="font-family: helvetica; font-size: 12pt; color: #003366;"><strong>Setting up robots.txt</strong></span></h1>
<p><span style="font-family: helvetica; font-size: 12pt;">Robots.txt files control crawler access to certain areas of your site. This will ensure the crawlers can index and rank only intended pages of the website.</span><span style="font-family: helvetica; font-size: 12pt;"> </span></p>
<ul><li><span style="font-family: helvetica; font-size: 12pt;">Identify clearly which pages you do not intend to be displayed as part of the search results page</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Robots.txt can be setup using a <strong>Google custom search integration plugin </strong>(this needs to be requested by the customer)(<a href="https://docs.servicenow.com/bundle/newyork-platform-administration/page/administer/search-administration/task/t_ActivaGoogCustmSrchIntegr.html" rel="nofollow">Docs link</a>)</span></li><li><span style="font-family: helvetica; font-size: 12pt;">Clearly state which pages you do not want the crawlers to index or follow.</span></li></ul>
<p><span style="font-family: helvetica; font-size: 12pt;">The Values should be defined as mentioned below to ensure you indicate the pages you would like crawlers to index and rank.</span></p>
<p><span style="font-family: helvetica; font-size: 12pt;"><strong>INDEX, FOLLOW</strong>: The search engine shows the page in search results and trusts any links in the page. This is the default value.</span></p>
<p><span style="font-family: helvetica; font-size: 12pt;"><strong>NOINDEX, FOLLOW</strong>: The search engine does not show the page in search results, but trusts any links in the page.</span></p>
<p><span style="font-family: helvetica; font-size: 12pt;"><strong>INDEX, NOFOLLOW</strong>: The search engine shows the page in the search results, but does not trust links in the page.</span></p>
<p><span style="font-family: helvetica; font-size: 12pt;"><strong>NOINDEX, NOFOLLOW</strong>: The search engine does not show the page in search results and does not trust links in the page.</span></p>
<p><span style="font-family: helvetica; font-size: 12pt; color: #003366;"><em>Best Practice : To add noindex, nofollow for any pages that require user login. Please add a reference to sitemap of your website if sitemap is available on the robots.txt file.</em></span></p>
<h2> </h2>