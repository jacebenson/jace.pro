---
title: "Solution to empty variables on RITMs when created through Service Portal"
date: 2019-04-25T20:33:20.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=3060d211db81fb80fff8a345ca9619d2"
---
<p class="p1">If you have seen a few Requested Item records intermittently created with no Variable data. It could be because you might be initializing to a new catalog form.</p>
<p class="p1">This behavior can be caused by <a href="https://docs.servicenow.com/bundle/helsinki-servicenow-platform/page/build/service-portal/concept/c_Scripting.html" rel="nofollow"><span class="s1"><em>server.update()</em></span></a> on the client script of the SC Catalog Item widget before submitting the catalog item. This <em>server.update()</em> is essentially used to perform some service side action for additional functionality on Catalog Item widget.</p>
<p class="p1" style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/2e947f1ddb0df3c023f4a345ca961929.iix" /></p>
<p class="p1"><strong>server.update() re-Initializes the catalog form</strong></p>
<p class="p1">Once the variable values are filled for a catalog item in Service Portal, These values are stored in the angular scope. However, When you perform a <em>server.update() </em>after filling in these variables the Server script is rerun and initialize the catalog form.</p>
<p class="p3"><span class="s1"><em>“</em></span><strong><em>Note:</em></strong><em> After calling </em><strong><em>server.update()</em></strong><em> the client script’s </em><strong><em>data</em></strong><em> object is automatically overwritten with the server’s data object.</em><span class="s1"><em>”</em></span></p>
<p class="p1">Since these variables values in DOM and $scope are single way bound, The end user will still see the values on Catalog Form UI but when submitting the end user is submitting a new Catalog item form (initialized by <em>server.update()</em>). Thus, fulfillers will see empty RITMs created without any values</p>
<p class="p1"><strong>Resolution:</strong></p>
<p class="p1">Switch to OOB SC Catalog Item widget, If you don’t know already follow the steps below,</p>
<ol class="ol1"><li class="li1"> Navigate to &lt;yourInstance&gt;.service-now.com</li><li class="li1">Navigate to sp_page_list.do</li><li class="li1">Filter by Page ID, here it is “sc_cat_item”</li><li class="li1">Open the widget instance associated to the <em>SC Catalog Item</em> Widget</li></ol>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/bb5e0e9ddbcdbb80fff8a345ca96196d.iix" /></p>
<p class="p1" style="padding-left: 30px;">5. In the widget Instance record,<span class="Apple-converted-space">  </span>Change the widget field from <em>Custom SC Catalog Item</em> widget to <strong><em>SC Catalog Item</em></strong> Widget</p>
<p class="p1" style="padding-left: 30px;"><img src="https://community.servicenow.com/bbbe4695db01fb80fff8a345ca96195e.iix" /></p>
<p class="p1"><strong>Possible Workaround:</strong></p>
<p class="p1">1. Add a conditional wrapper around the OOB Server Script for SC Catalog item widget</p>
<ol class="ol1"><li class="li2"><em>(<span class="s1"><strong>function</strong></span> () {</em></li><li class="li2"><em>// Server Code of the SC Catalog Item widget</em></li><li class="li3"><em><span class="s1"><strong>if</strong></span><span class="s2">(input.</span><span class="s3">&lt;</span><span class="s2">variable</span><span class="s3">&gt;</span><span class="s2">){ </span>//&lt;variable&gt; place holder for input variable object</em></li><li class="li2"><em>Perform the action initiated from the client</em></li><li class="li2"><em>Custom feature</em></li><li class="li2"><em>} <span class="s1"><strong>else</strong></span> {</em></li><li class="li2"><em>OOB SC Catalog Item code</em></li><li class="li2"><em>}</em></li><li class="li2"><em>})()</em></li></ol>
<p><em>2. Create another widget with the custom feature and perform server.update()</em></p>
<p class="p1"><strong>Additional Links:</strong></p>
<div class="snc-article-header-title">
<div id="articleTitleReadonly" class="snc-article-header-title-readonly snc-article-header-toolbar-title-no-image">
<ul><li><a href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0747577" target="_blank" rel="noopener noreferrer nofollow">Empty variables on RITM&#39;s when created through Service Portal</a></li><li><span class="s1"><a href="https://docs.servicenow.com/bundle/helsinki-servicenow-platform/page/build/service-portal/concept/c_Scripting.html" rel="nofollow">Widget Scripting</a></span></li></ul>
</div>
</div>