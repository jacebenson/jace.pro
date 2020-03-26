---
title: "Understanding write access with the knowledge manager role pertaining to article versioning"
date: 2019-12-02T21:37:13.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=e8a8d0601ba9c4d4d01143f6fe4bcb5c"
---
<p>With article versioning, it is important to keep in mind the access of the knowledge manager. This information will assist with determining if the correct role is being assigned to users or if other roles need to be considered. Knowing which article states managers have write access for will also prevent confusion of users. Outlined below is the different article states and the access the knowledge manager will have in each.</p>
<p> </p>
<p class="p"><strong>Draft</strong>  - Only the knowledge admin, knowledge owner, or reviser has the ability to edit this record.</p>
<p class="p"><em><strong>Note</strong></em>: <em><span style="background-color: #ffffff;">This is true even when the user is the manager of the base in which the article is held, as a manager the user will not have write access.</span></em></p>
<p class="p">Documentation for changes made with article versioning: <a href="https://docs.servicenow.com/bundle/madrid-servicenow-platform/page/product/knowledge-management/concept/article-versioning-changes.html" target="_blank" rel="noopener noreferrer nofollow">Article versioning changes</a></p>
<p class="p"><strong>Published</strong> - The knowledge manager will not have access to edit an article in this state unless the &#39;glide.knowman.versioning.enable_minor_edits&#39; is set to true. This will allow write access for managers on the fields defined without checking out the article. The fields are defined with property &#39;glide.knowman.versioning.minor_edit_fields&#39;.</p>
<p class="title-sm">Documentation for the system properties: <a title="Article versioning properties" href="https://docs.servicenow.com/bundle/madrid-servicenow-platform/page/product/knowledge-management/reference/article-versioning-properties.html" target="_blank" rel="noopener noreferrer nofollow">Article versioning properties</a>  </p>
<p class="p"><em><strong>Note</strong></em>: <em>The user will also have to be a manager of the knowledge base the article is held within.</em></p>
<p class="p"><strong>Review/Pending retirement</strong> - The knowledge manager will have write access to articles in this case as long as they are a listed approver for the article (this will likely be the case if they are the manager of the base in which the article is held). </p>
<p class="p"><strong>Retired/Outdated</strong> - There is not an out of box knowledge role that will allow write access in these states.</p>
<p class="p">The script include which defines the write access for the articles is held within &#39;KBVersioningSNC&#39;. The logic is held within the &#39;canWrite&#39; method found in this script include.</p>
<p class="p">Below are possible options for allowing the knowledge manager to edit articles: </p>
<ul><li>Users can be added to the Ownership group. This will allow users to edit articles in the draft state. Please keep in mind this is not the specific purpose of ownership groups. It will also provide additional accessibility to users as well. 
<p>Documentation for ownership groups: <a href="https://docs.servicenow.com/bundle/madrid-servicenow-platform/page/product/knowledge-management/concept/enable-ownership-group.html" target="_blank" rel="noopener noreferrer nofollow">Enable ownership groups</a> </p>
</li><li>Utilize the minor editing system properties, this will allow the knowledge managers edit access in published state.</li><li>Override the canWrite method in the &#39;KBVersioning&#39; script include to fit your business requirements. This script include allows the ability to override the code held within the &#39;KBVersioningSNC&#39; script include without modifying the base code.</li></ul>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/c689251fdb79cc90feb1a851ca9619e1.iix" /></p>
<p> </p>