---
title: "Untranslated Catalog item FieldsVariables in Service Portal"
date: 2018-06-27T03:32:04.000Z
authors: ["mohankrishna"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=1086533fdb761304b2102926ca9619da"
---
<p class="p1" style="text-align: left;">Users on <a href="https://docs.servicenow.com/bundle/kingston-release-notes/page/release-notes/quality/kingston-patch-2.html" target="_blank" rel="nofollow">Kingston Patch 2</a> may notice that when you are viewing a catalog item from Service Portal in another language, other than English, some of the fields are not translated to the selected language after upgrading.</p>
<p class="p1" style="text-align: left;"> </p>
<h3 class="p1">Wrong language in System localization on Service Portal catalog fields</h3>
<p class="p1" style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="50745733db761304b2102926ca9619ff.iix" width="540" height="310" /></p>
<p class="p1"> </p>
<p class="p1">This occurs when the <a href="https://docs.servicenow.com/bundle/kingston-platform-administration/page/administer/localization/task/set-localization-props.html" rel="nofollow"><span class="s1">System Localized</span></a> language (<strong><span class="s2">glide.sys.language</span></strong>) is different than the <a href="https://docs.servicenow.com/bundle/kingston-platform-administration/page/administer/localization/reference/r_UserSpecificLanguage.html" rel="nofollow"><span class="s1">user selected language</span></a>.</p>
<p class="p1"><span class="s1">This behavior is fixed in Kingston Patch 5 and later. For more information and notifications on changes to this issue, subscribe to <a href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0683964" rel="nofollow"><span class="s2">[Service Portal] Catalog item fields are not getting translated in the service portal widget &#34;SC Catalog Item&#34; caused by the wrong language in System Localization</span></a>.</span></p>