---
title: "Consolidating External Sources into Knowledge v search"
date: 2016-05-12T08:29:51.000Z
authors: ["Sarup Paul"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=e39dae69dbd0dbc01dcaf3231f96199c"
---
<p>Knowledge v2 (Eureka and earlier) had a feature called <a title="ki.servicenow.com/index.php?title&#61;Legacy:Setting_Up_Knowledge_Management#Navigation_Add-ons&amp;gsc.tab&#61;0" href="http://wiki.servicenow.com/index.php?title&#61;Legacy:Setting_Up_Knowledge_Management#Navigation_Add-ons&amp;gsc.tab&#61;0" rel="nofollow">Navigation Add-ons</a>. It was used to show search results from external sources. However, the user experience wasn&#39;t ideal, and hence it was deprecated. In our roadmap, we plan to provide a more robust solution.</p>
<p> </p>
<p>The HI team, at ServiceNow, (way to go!! <a class="jive_macro jive_macro_user" title="zirnhelt" href="community?id&#61;community_user_profile&amp;user&#61;66be0e6ddbd41fc09c9ffb651f9619bd" rel="nofollow">zirnhelt</a>) has leveraged our platform&#39;s amazing customizability and developed a framework to crawl external sources such as Documentation and Community. We wanted to share some of those ideas, so that you could implement them for your requirements. The framework uses scheduled jobs to extract the content from other sources and falls back on <a title="ocs.servicenow.com/bundle/helsinki-security-management/page/administer/search-administration/concept/c_ZingTextSearch.html" href="https://docs.servicenow.com/bundle/helsinki-security-management/page/administer/search-administration/concept/c_ZingTextSearch.html" rel="nofollow">Zing Search</a> to index and provide search results. The diagram below shows the flow of data.</p>
<p><img class="image-3 jive-image" style="display: block; margin-left: auto; margin-right: auto; height: 504px; width: 844.541px;" src="e4d97002dbdcdfc03eb27a9e0f9619ab.iix" alt="zing doc community kb.jpg" width="845" height="504" /></p>
<p> </p>
<p>Let&#39;s walk through this and understand the various components and where customizations have been done.</p>
<p> </p>
<h3>Scheduled Job</h3>
<p>The framework is mostly housed within a scheduled job that uses APIs of the external content source to extract content. The scheduled job then saves the sources as individual articles in a separate Knowledge Base. Using periodic runs of the scheduled job, the content will be synched over to the KB.</p>
<p> </p>
<p>In order to manage multiple content sources effectively, you need to have a configuration object.</p>
<p> </p>
<h3>Configuration Object</h3>
<p>The config object stores the details about the external content source, and how the content will be mapped into the Knowledge Base within your instance. Here are some of the details that you should consider managing:</p>
<p> </p>
<table border="1"><tbody><tr><td>Target Knowledge Base</td><td>The KB where the extracted content would be transformed into individual articles. You should create the Target Knowledge base before you configure this.</td></tr><tr><td>Security</td><td>Setup access to the articles that are being created through the scheduled job from a particular source</td></tr><tr><td>Source URL endpoint (or other config)</td><td>A config or URL that can be used by the scheduled job to call the external content source</td></tr><tr><td>Redirect URL</td><td>When returning search results, you may need a base URL to use to build the final URL for the source content</td></tr><tr><td>Security</td><td>Define the content security</td></tr><tr><td>Category Mapping</td><td>Define which KB categories will be assigned to articles that are being created by the content source. You should create the categories in the Target Knowledge base, before you define this mapping.</td></tr></tbody></table>
<p> </p>
<p><img class="image-4 jive-image" style="display: block; margin-left: auto; margin-right: auto; height: 341px; width: 797.811px;" src="ea19944adb989fc068c1fb651f961922.iix" alt="category mapping.jpg" width="797" height="341" /></p>
<h3>Synchronization Logic</h3>
<p>Once the content is extracted, you should check against existing articles. A checksum is a good way to verify changes.</p>
<ul><li>If the content is new, then <em>Create</em> a new article.</li><li>If the content exists in the KB, but is updated, then <em>Update</em> the article.</li><li>If the content exists in the KB, but is not modified, <em>Ignore.</em></li><li>If the content exists in the KB, but is no longer found in content source, then <em>Expire</em> the &#39;containing article&#39; so that it&#39;s no longer available in search.</li></ul>
<p> </p>
<h3>Incremental crawl vs. Full crawl</h3>
<p>The synchronization process should be fine tuned based on how frequently the external content source is modified.</p>
<ul><li>Adding and updating existing articles (<em>Incremental</em>) may be performed more frequently.</li><li>A <em>Full</em> crawl (which will include comparing existing content for deletes) should be done less frequently. The process would hit the source content system heavily, and hence some degree of planning and throttling would be a good idea.</li></ul>
<p> </p>
<h3>Wrapper/Holding Article</h3>
<p>The article that is created as a result of this process will need have a few other values that need to be set.</p>
<p> </p>
<table border="1"><tbody><tr><td>Knowledge Base</td><td>Set the Knowledge base with regards to the config object for that particular external source.</td></tr><tr><td>Category</td><td>Set the category based on the config object that maps an attribute of the source (like URL) to a particular category defined for that Knowledge Base.</td></tr><tr><td>Roles</td><td>The Roles for which the external content will be available to.</td></tr><tr><td>Language</td><td>The language under which the imported article will be available to.</td></tr><tr><td>Text Body</td><td>It&#39;s advisable to strip off the HTML from the external content and store only the text of the article within the wrapper article.</td></tr><tr><td>Meta</td><td>You may use an external service to generate meta that will be associated with that article.</td></tr><tr><td>Valid to date</td><td>The date until which this wrapper article will be available (recommended to keep it less, so that stale articles are not indexed).</td></tr><tr><td>Workflow State</td><td>Make sure that the article state is set to Published, to ensure visibility to all. Also don&#39;t set any workflows.</td></tr><tr><td>Click-through URL</td><td>The default Article URL needs to be replaced with the URL of the source. You will typically need to concatenate a base URL of the content source with the URL for that article.</td></tr></tbody></table>
<p> </p>
<p> </p>
<p>I know some of you may request an update set for you to achieve this, but at this time we are unable to share it. We hope that this framework provides a guideline for you to implement external source searching for your instance.</p>
<p> </p>
<p>&#61;&#61;&#61;&#61;&#61;Update April 21, 2018&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;</p>
<p>In Kingston, we have released a feature that relies on the above methodology to search external content. See more details here <a href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/product/knowledge-management/concept/knowledge-external-content-integration.html" rel="nofollow">Kingston Docs- External Content Integration for Knowledge</a></p>
<p> </p>
<p> </p>