---
title: "Get Started with Search Facets for Simple Search Sources in London"
date: 2018-08-27T19:37:19.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=6e6cb8b7db8cef8467a72926ca961933"
---
<div>
<p>With the London release, a new feature is being added to the search interface in service portal called <a href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/build/service-portal/task/enable-facets.html" target="_blank" rel="nofollow">Search Facets</a>. Search facets work a lot like the filters you are probably used to seeing on your popular online retail sites. They allow users to further refine the results of a search by adding additional filters to the result set. </p>
<p> </p>
<h1>Here are a few key aspects of Search Facets to get started:</h1>
<ul><li>Different types of Search Facets</li><li>Facets for Scripted Search Sources</li><li>Creating Facets for a Simple Search Source</li><li>Use Mapped Facet Filters</li></ul>
<p style="margin-right: 0in; margin-left: 0in; font-size: 12pt; font-family: &#39;Times New Roman&#39;, serif;"><img src="7fcd783fdb8cef8467a72926ca96195f.iix" /></p>
<p> </p>
<strong>Types of Facets</strong></div>
<div>
<p>There are two types of search facets available: Single Selection, and Multiple Selection. A single selection facet will allow a user to filter on a single option, for example category is &#34;email.&#34; A multiple selection allows a user to filter on multiple options using an OR query (category is email OR outlook 2010).</p>
</div>
<div>
<p style="margin-right: 0in; margin-left: 0in; font-size: 12pt; font-family: &#39;Times New Roman&#39;, serif;"><img src="c2ed78bfdb8cef8467a72926ca961997.iix" /></p>
<p>Let’s imagine for example, that you are searching the knowledge base and use the Author facet to allow users to narrow down the results to those written by a specific author. Here is what the widget on the new search page will do:</p>
<ol><li>Make a GlideAggregate query grouped by Author to get a list of all available authors.</li><li>Perform ACL checks against the search results to make sure no authors are shown in the list which will not have results visible to the user.</li><li>The search code takes the values selected in the facets, adds them to the search query and re-runs the search.
<ul><li>This results in a query like &#34;Keywords are &lt;whatever you searched for&gt; AND author is Boris Catino&#34;</li><li>If you select the category email and the author Boris Catino, the query will look like this: &#34;keywords are&lt;whatever you searched for&gt; AND category is email AND author is Boris Catino&#34;.</li></ul>
</li></ol>
</div>
<p>So as you can see, it’s a pretty simple way to add filters to the results returned by a search on the fly that will help users get a lot more value out of their searches in the portal. Your users will actually be able to find what they’re looking for without having to comb the desert.</p>
<p style="margin-right: 0in; margin-left: 0in; font-size: 12pt; font-family: &#39;Times New Roman&#39;, serif;"><img style="max-width: 100%; max-height: 480px;" src="4c6ef8f3dbccef8467a72926ca961918.iix" /></p>
<p><strong>Facets for Scripted Search Sources</strong></p>
<p>Search Facets are available for both simple and scripted search sources. Implementing facets for a scripted search source requires use of the  facetService API in the new Facet Generation Script field, which was added to search source definitions in London. I’ll go more in-depth into this in a future post, so be on the lookout for that in the coming weeks.</p>
<p> </p>
<p> </p>
<p><strong>Creating Facets for a Simple Search Source</strong></p>
<p><a href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/build/service-portal/task/create-search-filter.html" target="_blank" rel="nofollow">Creating a search facet </a>for a simple search source is fairly… wait for it… <em>simple</em>!</p>
<ol><li>Locate the search source you want to add facets to either in the sp_search_source table or using the related list on the record for your portal in the sp_portal table.</li><li>Once that is open, as long as the search source is simple (uses a filter instead of a data fetch script) you will see a related list for Facets on the form. Click the New button on that related list.</li><li>Fill out all of the necessary fields on the form.</li><li>
<ol><li>The name should be be something that will make sense to the users. If it filters on category, call it Category.</li><li>Selection type is where you specify whether the filter can accept a single value or multiple values.</li><li>The Order field determines which order this facet will display in the new “Filters” panel on the search page.</li><li>Field determines which field from the searched table the facet will use in it&#39;s filter.<img src="867e3cf3dbccef8467a72926ca9619da.iix" /></li></ol>
</li></ol>
<table border="1"><tbody><tr><td><center>NOTE: You will get the best results out of your search facets if you create them for fields that are not expected to have a lot of unique values. For example, category, assignment group or priority. Creating a search facet on short_description will not work well as there will be a very large number of options in the filter.</center></td></tr></tbody></table>
<p> </p>
<p> </p>
<p><strong>Use Mapped Facet Filters</strong></p>
<p>The checkbox “use mapped facet filters” which you see in the above screenshot provides a way to handle those fields which have more unique data, or cases where you may want a filter that applies to several fields at once. If you select that checkbox, you will see that the field dropdown is hidden. Once you save your new facet record, a new related list called “Facet Filters” will appear on the form.</p>
<p><img src="ce8ebcf3dbccef8467a72926ca9619be.iix" /> </p>
<p>Creating a new Facet Filter record allows you to define the available options for that facet and how those options will function. For example, in the screenshot above, I created two facet filters “Last Year” and “This Year”. Looking at the filter created for those, they will add a filter “created on last year” or “created on this year”. This allows me to build a useable filter from a field which will have almost completely unique values.</p>
<p> <img src="fc125f48db90a7c08e7c2926ca9619b5.iix" /></p>
<p>Now, when a user selects “This Year” in the created facets in the filters panel on the search page, the filter defined in this record will be applied to their search results.</p>
<p style="margin-right: 0in; margin-left: 0in; font-size: 12pt; font-family: &#39;Times New Roman&#39;, serif;"><span style="font-size: 10.5pt; font-family: &#39;Calibri&#39;,sans-serif; color: #303a46;"> <img src="6caef837dbccef8467a72926ca9619a9.iix" /></span></p>
<p><strong>Things to Consider</strong></p>
<p>There are a few things to consider when setting up the facets for a search source.</p>
<ol><li>Which fields will users want to use to narrow down their results? This feature will only be as good as the options you provide your users with in the UI.</li><li>Will this field be useful as a search facet? Or are there too many unique values?</li><li>Will users want to see results from multiple options at once?</li></ol>
<p>Asking those questions before you begin your implementation will help make sure you are providing the best possible options for your users.</p>
<p>One other thing to consider is that search facets do have the potential to introduce a slight performance overhead to your page load. While in most cases this should be minimal, it is important to know that it is a possibility.</p>
<ul><li>We already discussed the fact that the system will use a GlideAggregate query with a group_by to get all of the available options for the fields you use in your facets. The system then checks ACLs against the result set in order to ensure that your users will not see filter options which return no results. This introduces a little bit of overhead during the page load. If it ends up having too high of an impact, you can disable facets for a search source using the steps from our <a href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/build/service-portal/task/disable-search-facets.html" target="_blank" rel="nofollow">product documentation.</a></li></ul>
<p style="margin-right: 0in; margin-left: 0in; font-size: 12pt; font-family: &#39;Times New Roman&#39;, serif;"><span style="font-size: 10.5pt; font-family: &#39;Calibri&#39;,sans-serif; color: #303a46;">That should get you up and running with search facets in London. Check back for part 2 in the coming weeks where we’ll look at implementing search facets for scripted search sources.</span></p>