---
title: "How to Fix your Catalog Search on Service Portal if Type Ahead Search Doesnt Return Results in Kingston"
date: 2019-03-26T17:42:52.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=93a9cbe7db9c7f88d82ffb24399619b7"
---
<p class="p1">If you have recently upgraded to <a href="https://docs.servicenow.com/bundle/kingston-release-notes/page/release-notes/quality/kingston-patch-12.html" rel="nofollow"><span class="s1">Kington patch 12</span></a>, you may notice that your catalog search in Service Portal isn’t returning any results. This behavior can be seen when you are using the <strong>type ahead search</strong> and <strong>Search page </strong>widgets in Service Portal but when you global search the catalog item you would see results.</p>
<p class="p1">Example of No Catalog results on Service Portal Search:</p>
<p class="p1"><img src="https://community.servicenow.com/1cb8c3afdb5c7f88d82ffb2439961912.iix" width="758" height="258" /></p>
<p class="p1">In the Global Search (Platform UI), we see that the catalog items are indeed there. It is just in the Service Portal search that they are not appearing.</p>
<p class="p1"><img src="https://community.servicenow.com/13e88b63db9c7f88d82ffb2439961906.iix" width="754" height="444" /></p>
<p class="p1">Want to fix your type ahead Service Portal search bar to search Catalog items again? Here is an article which might be helpful: <a href="http://bit.ly/KB0718619" rel="nofollow"><span class="s1">Service Portal type ahead search does not work for catalog items.</span></a></p>
<p class="p1">An official Fix is available in <a href="https://docs.servicenow.com/bundle/kingston-release-notes/page/release-notes/quality/kingston-patch-14.html" rel="nofollow"><span class="s1"><strong>Kingston Patch 14</strong></span></a> and <a href="https://docs.servicenow.com/bundle/london-release-notes/page/release-notes/available-versions.html" rel="nofollow"><span class="s1"><strong>London</strong></span></a> version of ServiceNow. For customers who cannot upgrade to these versions, please use the workaround to get your Service Portal to return results again</p>
<p class="p2"> </p>
<p class="p1"><strong>Workaround:</strong></p>
<p class="p1">You can resolve the issue by editing line 16 of the <em>Data Fetch Script</em> field of the Service Catalog <a href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/build/service-portal/task/add-table-search-source.html" rel="nofollow"><span class="s1">Search Source</span></a></p>
<p class="p1">/nav_to.do?uri&#61;sp_search_source.do?sys_id&#61;c96eb1686721220023c82e08f585efff </p>
<p class="p1"><em>if (!catalog_item.canViewOnSearch() || !catalog_item.getFirstAccessibleCategoryForSearch()) {</em> <br /> <br /> To:</p>
<p class="p1"><br /> <em>if (!catalog_item.canViewOnSearch() || !catalog_item.getFirstAccessibleCategoryForSearch(portalValue)) { </em></p>
<p class="p1">Note: Please revert this search source to the latest version after upgrading to the fixed version (Can be switched from Version Tab in the related list).</p>