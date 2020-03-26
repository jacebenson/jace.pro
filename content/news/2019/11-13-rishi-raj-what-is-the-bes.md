---
title: "What is the best way of using HR Criteria without impacting application performance"
date: 2019-11-12T19:41:45.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=4e6ef0c61b85c8107a5933f2cd4bcb5f"
---
<p>HR criteria defines the audience for HR content, services, or cases. You can make information available to or create an HR case for specific groups, individuals, or to all employees using HR criteria.</p>
<p>It allows you to create conditions on custom tables and/or custom columns. At the same time you can create conditions on existing non-indexed columns. <span class="apple-converted-space"> </span></p>
<p class="p1"><strong>To ensure that such HR Criteria’s don’t adversely impact the performance of the system when they are executed, it is essential that you review the selectivity of the columns used in the condition AND appropriately create indexes on those columns.</strong></p>
<p class="p2"><span style="text-decoration: underline;"><strong><em>Ex:</em></strong></span></p>
<p class="p1"><em>Let us say you create a column in sn_hr_core_profile, called u_tax_jurisdiction. You expect this field to be selective, having values like Americas, EU, Latin America, Asia, etc.</em></p>
<p class="p1"><em>If this col doesn’t have an INDEX and you build an HR Criteria like</em></p>
<p class="p1"><em>Name: Latin America Tax Jurisdictions</em></p>
<p class="p1"><em>Table&#61;sn_hr_core_profile</em></p>
<p class="p1"><em>User Col&#61;user</em></p>
<p class="p1"><em>Condition</em></p>
<p class="p1"><em>u_tax_jurisdiction&#61;‘Latin America’</em></p>
<p class="p1"><strong>Then this HR Criteria can significantly impact the performance where ever used, as it will do a full table scan, given no indexed column is used in the filter condition.</strong></p>
<p class="p1"><span style="text-decoration: underline;">However, when you create an index on u_tax_jurisdiction field - the database will use the relevant index and the query will perform better.</span></p>
<p class="p1"> </p>
<p class="p1"><span style="text-decoration: underline;">Related Documents on Indexing tables:-</span></p>
<p class="p1"><em>1. Adding index to column:- <a href="https://docs.servicenow.com/bundle/geneva-servicenow-platform/page/administer/table_administration/task/t_CreateCustomIndex.html" rel="nofollow">https://docs.servicenow.com/bundle/geneva-servicenow-platform/page/administer/table_administration/task/t_CreateCustomIndex.html</a></em></p>
<p class="p1"><em>2. Use slow query Log to identify queries impacting performance:- <a href="https://docs.servicenow.com/bundle/newyork-platform-administration/page/administer/platform-performance/task/t_UseASlowQueryLog.html" rel="nofollow">https://docs.servicenow.com/bundle/newyork-platform-administration/page/administer/platform-performance/task/t_UseASlowQueryLog.html</a></em></p>
<p class="p1"><em>3. Index suggestions for slow queries:- <a href="https://docs.servicenow.com/bundle/newyork-platform-administration/page/administer/platform-performance/concept/index-suggestions.html" rel="nofollow">https://docs.servicenow.com/bundle/newyork-platform-administration/page/administer/platform-performance/concept/index-suggestions.html</a></em></p>
<p class="p1"><em>4. Generate an Index creation for a slow query:- <a href="https://docs.servicenow.com/bundle/newyork-platform-administration/page/administer/platform-performance/task/generate-index-suggestion.html" rel="nofollow">https://docs.servicenow.com/bundle/newyork-platform-administration/page/administer/platform-performance/task/generate-index-suggestion.html</a></em></p>
<p class="p1"> </p>