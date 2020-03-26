---
title: "Controlling Knowledge Article fieldlevel visibility"
date: 2016-08-16T20:58:59.000Z
authors: ["Sarup Paul"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=919c2ee1dbd0dbc01dcaf3231f96192f"
---
<p>&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;Update Oct 15 2019 &#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;</p>
<p>This feature is now supported OOB through Article Templates (released in Kingston, and available via <a href="https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/product/knowledge-management/task/activate-knowledge-advanced-plugin.html" rel="nofollow">Knowledge Advanced plugin</a>).</p>
<p><a href="https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/product/knowledge-management/concept/knowledge-article-templates.html" rel="nofollow">Article Templates</a></p>
<p><a href="https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/product/knowledge-management/task/secure-field-article-template.html" rel="nofollow">Restricted fields</a> </p>
<p>&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;Update Oct 15 2019 &#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;&#61;</p>
<p> </p>
<p>We received a few questions on how to limit the visibility of specific content, to specific audiences for knowledge articles, without having to create a new article. For example, if you have an article, in which different teams in your support organization (e.g. Tier 0, Tier 1, and Tier 2), should see different content- it is possible to separate that out in a single article. The obvious benefit is that you would not need to maintain multiple articles on the same subject matter for different audiences, which increases the chances of inconsistent information.</p>
<p> </p>
<p>For example, see the hierarchical access structure below. The Tiers 0-2 represent your users with different roles (access control). Let&#39;s say you are creating an article on &#34;<span style="color: #3334ca;">Issues with wifi in the break room area.</span>&#34; You can write a single article, with fields/sections of the content that are</p>
<ul><li>Visible to all i.e. Tier 0. This could have &#34;<span style="color: #3334ca;">Instructions on how to stop/start your wifi on your device</span>&#34;</li><li>Only visible if you are Tier 1 or higher. This could have Tier 1 agent instructions on &#34;<span style="color: #3334ca;">Instructions on how to remotely reset the wifi access point</span>&#34;</li><li>Only visible if you are Tier 2 or higher. This could have Tier 2 agent instructions &#34;<span style="color: #3334ca;">How to call the network service provider to service the wifi access point</span>&#34;</li></ul>
<p> </p>
<p><img class="image-18 jive-image" style="height: auto; display: block; margin-left: auto; margin-right: auto;" src="9af7f33ddb145704ed6af3231f96193d.iix" alt="article level visibility.png" /></p>
<p><span style="line-height: 1.5;">This is achievable with the use of </span><a style="line-height: 1.5;" title="ocs.servicenow.com/bundle/helsinki-servicenow-platform/page/administer/contextual-security/concept/access-control-rules.html" href="https://docs.servicenow.com/bundle/helsinki-servicenow-platform/page/administer/contextual-security/concept/access-control-rules.html" rel="nofollow">Field Level Access Control Lists (ACLs)</a><span style="line-height: 1.5;">, on a field in the Knowledge table, that you want to secure by role.</span></p>
<h3> </h3>
<h2><span style="line-height: 1.5;">How ACLs work</span></h2>
<p><img class="image-13 jive-image" style="height: auto; display: block; margin-left: auto; margin-right: auto;" src="44921002db949fc068c1fb651f9619bc.iix" alt="acl flow.jpg" /></p>
<p> </p>
<p>After the Field-Level ACLs have been setup, you&#39;ll need to customize kb_view to include the new field.   Since the Field-Level ACLs have been applied, only users who have Tier 1 or Tier 2 access, will be able to see this information on the kb_view UI page.<span style="color: #eb7a3d;"><br /></span></p>
<p> </p>
<h1><strong>How to add field level security to Knowledge Articles</strong></h1>
<p>The example below shows a <span style="text-decoration: underline;">two-level</span> field level access control, where ITIL role has access to a field that a non-ITIL role does not:</p>
<p> </p>
<ol><li>On Knowledge form, configure an additional field. In this case, we are creating a custom string field e.g. &#34;Additional Comments&#34;
<p><img class="image-10 jive-image" style="width: 620px; height: 349px; display: block; margin-left: auto; margin-right: auto;" src="3298bff9db101304b322f4621f961923.iix" alt="custom string field km.jpg" /></p>
</li><li>Add a field level ACL that gives READ access to only users having &#34;ITIL&#34; role.</li></ol>
<p><img class="image-11 jive-image" style="width: 620px; height: 293px; display: block; margin-left: auto; margin-right: auto;" src="3b6555cadb5813043eb27a9e0f961945.iix" alt="read acl.png" /></p>
<p> </p>
<ul><li>Add the field on kb_view UI Page (article view).</li><li>If you are using the out-of-box page, this can be done via <strong>UI Macro</strong> &gt; <strong>kb_view_common_content</strong></li><li>Add a code snippet in the xml, as show below</li></ul>
<p><img class="image-12 jive-image" style="width: 620px; height: 239px; display: block; margin-left: auto; margin-right: auto;" src="de36bcc6db989344e9737a9e0f96194e.iix" alt="kb xml.png" /></p>
<p> </p>
<h1>Testing a new field on a Knowledge Article</h1>
<p>So now that we have both the Field configured and the Article view UI macro updated, it&#39;s time to test. We want to see that content meant for ITIL user is only available to them, and not to non-ITIL user.</p>
<ol><li><ol><li>Impersonate any <strong>ITIL</strong> user and confirm that the added field is available.
<p> </p>
<p><img class="image-14 jive-image" style="width: 620px; height: 350px; display: block; margin-left: auto; margin-right: auto;" src="1d313335db5c1fc068c1fb651f96197e.iix" alt="additional comments km.jpg" /><img class="image-15 jive-image" style="width: 620px; height: 349px; display: block; margin-left: auto; margin-right: auto;" src="c99c198edb1cd344e9737a9e0f961966.iix" alt="field added to the KB.jpg" />The ITIL user should be able to see the &#34;Additional Comments&#34; field on the knowledge table in the platform as well as in the knowledge article view page.</p>
<p> </p>
</li><li>Next, impersonate any <strong>Non-ITIL</strong> user. The Non-ITIL user should be able to see the &#34;Additional Comments&#34; field on the knowledge table in the platform as well as in the knowledge article view page.
<p><img class="image-16 jive-image" style="width: 620px; height: 377px; display: block; margin-left: auto; margin-right: auto;" src="ae88f4cadbdc57049c9ffb651f961971.iix" alt="non itil field.jpg" /></p>
<p><img class="image-17 jive-image" style="width: 620px; height: 306px; display: block; margin-left: auto; margin-right: auto;" src="06317379db9c93049c9ffb651f961990.iix" alt="non itil kb 2.jpg" /></p>
</li></ol>
</li></ol>
<p> </p>
<p>Using Field level ACLs, you can easily setup the same article to provide different sets of information, based upon the user&#39;s roles. This can greatly reduce the need to have duplicate content, increasing the need for extra maintenance and overhead. Hope you found this useful. We are planning to add easier configurability for implementing Article Section/Attribute level security in the upcoming releases.</p>
<p> </p>
<p>Thank you to Authors/Contributors: <a class="jive_macro jive_macro_user" title="britt.champeau" href="/community?id&#61;community_user_profile&amp;user&#61;c060d269db581fc09c9ffb651f961941" rel="nofollow">britt.champeau</a> <a class="jive_macro jive_macro_user" title="abhishek.rakshe" href="/community?id&#61;community_user_profile&amp;user&#61;01a15e2ddb981fc09c9ffb651f961997" rel="nofollow">abhishek.rakshe</a></p>