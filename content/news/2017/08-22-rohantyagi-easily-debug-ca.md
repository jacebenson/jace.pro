---
title: "Easily debug catalog customizations in Jakarta"
date: 2017-08-21T22:50:21.000Z
authors: ["rohantyagi"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ed9c2ee1dbd0dbc01dcaf3231f96198d"
---
<p>One of the key features of the ServiceNow platform is its flexibility. You can almost build anything on the platform OR modify and customize a number of existing features, like the Service Catalog. Sometimes the customization is really required to cater to a unique business requirement. Other times, it is about bringing a small change in the look and feel of a page or to accommodate a specific user behavior. Well, it all goes well and looks cool until some of these customizations start breaking the catalog interface; or bringing a new custom code breaks the functionality for a set of users.</p>
<p><img class="image-1 jive-image" style="height: 252px; width: 401.166px; display: block; margin-left: auto; margin-right: auto;" src="bf40ac06db9c1f048c8ef4621f9619f7.iix" width="401" height="252" /></p>
<p> </p>
<p>It becomes a challenge to identify the root cause of the issue. Or in other words, it becomes hard to fix a broken catalog. While we work on bringing more features and enhancements to the product with every release, we also try to bring useful self diagnostic tools in the product. Not only can you troubleshoot the issues yourself and get them fixed faster, but also learn the product better and drive toward using best practices.</p>
<p> </p>
<h1>Debugging catalog customizations</h1>
<p>ServiceNow has three diagnostic tools introduced in the Jakarta release to debug catalog customizations.</p>
<h2> </h2>
<h2>Troubleshooting the Catalog UI page</h2>
<p><a title="ocs.servicenow.com/bundle/jakarta-it-service-management/page/product/service-catalog-management/task/debug-ui-customization-catalog-page.html" href="https://docs.servicenow.com/bundle/jakarta-it-service-management/page/product/service-catalog-management/task/debug-ui-customization-catalog-page.html" rel="nofollow">Debug UI customizations on Service Catalog UI page</a>&#34;: A catalog UI page consists of various UI macros, for example a shopping cart is a UI macro. There are many other UI macros that are developed out of the box and constitute a standard catalog page, however customers also tend to develop their own UI macros, or modify some of the out of the box macros to meet their needs. Understanding <a title="ocs.servicenow.com/bundle/jakarta-it-service-management/page/product/service-catalog-management/task/debug-ui-customization-catalog-page.html" href="https://docs.servicenow.com/bundle/jakarta-it-service-management/page/product/service-catalog-management/task/debug-ui-customization-catalog-page.html" rel="nofollow">how to debug your catalog page</a> is necessary if you are modifying it.</p>
<p><img class="image-2 jive-image" style="margin-right: auto; margin-left: auto; width: 537px; height: 345.585px; display: block;" src="2cfd7f31db585704ed6af3231f961915.iix" width="537" height="346" /></p>
<p>Watch the video to learn how this tool lists all the UI macros that are available on a UI page, and how you can easily compare and revert to a version that was working.</p>
<p> </p>
<center>
<p><iframe id="video_tinymce_9380" style="width: 100%; height: 480px;" src="https://youtube.com/embed/8csjl8vWhfo?showinfo&#61;0"></iframe></p>
</center>
<p> </p>
<h2>Troubleshooting with the Variable Action Logger</h2>
<p>The other diagnostic tool that we brought in Jakarta is <a title="ocs.servicenow.com/bundle/jakarta-it-service-management/page/product/service-catalog-management/task/debug-actions-on-catalog-item-variables.html" href="https://docs.servicenow.com/bundle/jakarta-it-service-management/page/product/service-catalog-management/task/debug-actions-on-catalog-item-variables.html" rel="nofollow">Variable Action Logger</a>.</p>
<p><img class="image-3 jive-image" style="width: 529px; height: 310.574px; display: block; margin-left: auto; margin-right: auto;" src="20c4a906db105b04ed6af3231f96194d.iix" width="529" height="311" /></p>
<p>With the logger you can analyze the client-side actions affecting the state and values of all variables on a catalog form. Watch the video below to see how you can use it.</p>
<p> </p>
<center>
<p><iframe id="video_tinymce_9379" style="width: 100%; height: 480px;" src="https://youtube.com/embed/kq2dZQbJKs0?showinfo&#61;0"></iframe></p>
</center>
<p> </p>
<p> </p>
<h2>Troubleshooting with the Variable Watcher</h2>
<p>You can also use a third tool for troubleshooting customizations: <a title="ocs.servicenow.com/bundle/jakarta-it-service-management/page/product/service-catalog-management/task/watch-a-service-catalog-variable.html" href="https://docs.servicenow.com/bundle/jakarta-it-service-management/page/product/service-catalog-management/task/watch-a-service-catalog-variable.html" rel="nofollow">Variable Watcher</a>. We enabled the platform <a href="https://docs.servicenow.com/bundle/kingston-application-development/page/script/debugging/concept/c_FieldWatcher.html" target="_blank" rel="nofollow">field watcher </a>feature on catalog variables so you can use the variable watcher to <a title="ocs.servicenow.com/bundle/jakarta-it-service-management/page/product/service-catalog-management/task/watch-a-service-catalog-variable.html" href="https://docs.servicenow.com/bundle/kingston-it-service-management/page/product/service-catalog-management/task/debug-a-service-catalog-variable.html" target="_blank" rel="nofollow">monitor changes</a> in the state and the value of a Service Catalog variable due to catalog client scripts, catalog UI policies, and catalog data lookups.</p>
<p> </p>
<p>Wait, that&#39;s not all; we developed an <a title="ocs.servicenow.com/bundle/jakarta-it-service-management/page/product/service-catalog-management/concept/c_ItemDiagnostic.html" href="https://docs.servicenow.com/bundle/jakarta-it-service-management/page/product/service-catalog-management/concept/c_ItemDiagnostic.html" rel="nofollow">Item Diagnostics Report</a> back in the Istanbul release. See my demo for how to <a class="jive_macro jive_macro_blogpost" title="Troubleshoot a broken catalog item," href="/community?id=community_blog&sys_id=e06caaa1dbd0dbc01dcaf3231f9619b1" rel="nofollow">Troubleshoot a broken catalog item</a></p>