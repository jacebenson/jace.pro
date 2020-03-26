---
title: "Hiding the Benchmark client application module for ITIL users"
date: 2018-05-04T06:23:34.000Z
authors: ["yandyo"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=82e73d2adbb11b002328f3231f96193e"
---
<p class="p1">Are you unable to hide the <a title="Benchmark" href="https://docs.servicenow.com/bundle/kingston-it-service-management/page/product/benchmarks/reference/r_Benchmarks.html" target="_blank" rel="nofollow">Benchmark</a> client application module from ITIL users? Users that upgrade to Kingston from a previous release will notice “Benchmarks Client Application” in their left navigation even if you have not opted into using this module. Upon going to edit the roles on this module, you will see that it is private and, hence, uneditable.</p>
<p class="p4"> </p>
<p class="p4"><strong><img style="max-width: 100%; max-height: 480px;" src="d2798238db5e97404837f3231f96196f.iix" /></strong></p>
<h1 class="p4">How to hide the Benchmark Application for ITIL users in Kingston</h1>
<p class="p4">Starting in Kingston the ITIL role contains the role “sn_bm_client.benchmark_data_viewer.” This means that all ITIL user will have this role inherited and will have access to the Benchmark application module, which might not be desirable by all.</p>
<p class="p4">In Kingston, the Benchmark application is set to “private,” this means that no user, including the Admin, will be able to change records under that application scope.</p>
<p class="p4">This issue is fixed in Kingston Patch 5, so upgrading will help prevent seeing the Benchmark client application to ITIL users. If you cannot upgrade, I suggest downloading the XML in <a title="After Kingston upgrade, cannot hide the Dashboards module installed as part of the Benchmark Client application" href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0682425" target="_blank" rel="nofollow">After Kingston upgrade, cannot hide the Dashboards module installed as part of the Benchmark Client application</a> and follow the workaround steps.</p>
<p class="p4" style="text-align: center;"><strong>PLEASE TEST THE WORKAROUND IN A SUBPRODUCTION INSTANCE FIRST.</strong></p>
<p class="p4">Hope this helps!</p>