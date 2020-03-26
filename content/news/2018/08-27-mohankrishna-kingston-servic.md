---
title: "Kingston Service Catalog form Issues and How to Workaround them"
date: 2018-08-27T03:29:51.000Z
authors: ["mohankrishna"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=eefed16bdb8cab040be6a345ca961920"
---
<p class="p1">Starting with Kingston, Service Catalog was introduced with a newer version of “g_form.” Due to this new version of g_form, you may face some unexpected challenges when using catalog forms on an instance running on Kingston.</p>
<h2 class="p1">Here are some known issues caused by new g_form:</h2>
<ol class="ol1"><li><span class="s2"><a href="https://hi.service-now.com/kb_view.do?sys_kb_id&#61;80586ce8dbcb53449d612926ca961941" rel="nofollow">Checkbox variable in variable editor on sc_task form throws Uncaught TypeError: Cannot read property &#39;value&#39; of null error</a></span></li><li><span class="s2"><a href="https://hi.service-now.com/kb_view.do?sys_kb_id&#61;f067391ddb5797805ed4a851ca9619ed" rel="nofollow">Catalog task cannot be saved or closed because mandatory fields checks fails.</a></span></li><li><span class="s2"><a href="https://hi.service-now.com/kb_view.do?sys_kb_id&#61;5b7e2f10db2317c054250b55ca961933" rel="nofollow">Mandatory variables are not becoming not mandatory when using UI Policies. This causes issues when trying to close a RITM or task.</a></span></li><li><span class="s2"><a href="https://hi.service-now.com/kb_view.do?sys_kb_id&#61;1ffeaca1dbd8db484fc2f4621f961923" rel="nofollow">After upgrading to Kingston, setting a variable to non-mandatory and hidden on forms is not honored</a></span></li><li><span class="s2"><a href="https://hi.service-now.com/kb_view.do?sys_kb_id&#61;34127477dbb693045ed4a851ca9619dc" rel="nofollow">List collector variables with a mandatory UI Policy on a catalog item do not load on the submitted Requested Item [sc_req_item] form in the variable editor UI formatter</a></span></li><li><span class="s2"><a href="https://hi.service-now.com/kb_view.do?sys_kb_id&#61;10bc372adbc5df44b61ff3231f9619bf" rel="nofollow">Kingston Issue: Not able to update the RITM/Task tickets even after providing the value in mandatory radio button variables</a></span></li><li><span class="s2"><a href="https://hi.service-now.com/kb_view.do?sys_kb_id&#61;bf4427b6db4e53447b337a9e0f96192f" rel="nofollow">Issue with non-visible mandatory variables</a></span></li><li><a href="https://hi.service-now.com/kb_view.do?sys_kb_id&#61;a3471f32dbd71b4054250b55ca961935" rel="nofollow"><span class="s2">Clearing the value of a reference variable via g_form.clearValue does not allow it to pass validation &#34;The following fields contain invalid text:&#34;</span></a></li></ol>
<h3 class="p1">How to workaround g_form issues on Kingston:</h3>
<p class="p1">If you are experiencing one of the issues above, you can fallback to a previous version g_form to stop seeing the issue.</p>
<p class="p1">How to revert g_form to an older version:</p>
<ul><li>
<p class="p1"><em>In the Application Navigator type </em><strong><em>sys_properties.list</em></strong><em> </em></p>
</li><li>
<p class="p1"><em>Click </em><strong><em>New</em></strong></p>
</li><li>
<p class="p1"><em>Create a new system property with these values: <br /></em><em>Name: </em><strong><em>glide.sc.use_sc_form_v2</em></strong><em> <br /></em><em>Type: </em><strong><em>true|false</em></strong><em> <br /></em><em>Value: </em><strong><em>false<br /></em></strong><em>Click </em><strong><em>Save</em></strong></p>
</li><li>
<p class="p1"><em>In the Application Navigator perform </em><strong><em>cache.do</em></strong></p>
</li></ul>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="cb979177dbcce78454250b55ca9619ab.iix" /></p>