---
title: "Pragmatic Patterns  Hybrid Business Service Management Patterns"
date: 2016-09-22T07:12:53.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=5c5ee6addbd0dbc01dcaf3231f9619e0"
---
<p style="font-family: arial, sans-serif; color: #666666;"><span style="font-weight: bold; font-style: inherit; font-family: Arial;">NOTE</span><span style="font-weight: inherit; font-style: inherit; font-family: Arial;">: MY POSTINGS REFLECT MY OWN VIEWS AND DO NOT NECESSARILY REPRESENT THE VIEWS OF MY EMPLOYER, ACCENTURE.</span></p>
<p style="font-family: arial, sans-serif; color: #666666;"> </p>
<p style="font-family: arial, sans-serif; color: #666666;"><span style="font-weight: inherit; font-style: inherit; font-size: 14.6667px; font-family: Arial;">DIFFICULTY LEVEL:   </span><span style="font-weight: bold; font-style: inherit; font-size: 14.6667px; font-family: Arial; color: #7f6000;">INTERMEDIATE</span></p>
<p style="font-family: arial, sans-serif; color: #666666;"><span style="font-weight: inherit; font-style: inherit; font-size: 14.6667px; font-family: Arial;">Assumes basic knowledge and/or familiarity of CMDB and CI Relationships in ServiceNow.</span></p>
<p style="font-family: arial, sans-serif; color: #666666;"><span style="font-weight: inherit; font-style: inherit; font-family: Arial;">____________________________________________________________________________</span></p>
<p style="font-family: arial, sans-serif; color: #666666;"> </p>
<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">Continuing from my previous article on <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;228da669dbd0dbc01dcaf3231f9619f2" rel="nofollow">Basic Business Service Patterns</a> <span style="color: #3d3d3d;">I will be showing how these can be mixed-and-matched into various usable hybrid configurations.   </span></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif; color: #3d3d3d;">These are the ones I will be covering:</span></p>
<p> </p>
<p style="padding-left: 30px; font-family: arial, sans-serif; color: #666666;"><span style="color: #3d3d3d; font-weight: inherit; font-size: 12pt; font-family: Arial; font-style: inherit;">7. Hybrid ServiceMapping Pattern</span></p>
<p style="padding-left: 30px; font-family: arial, sans-serif; color: #666666;"><span style="font-weight: inherit; font-style: inherit; font-size: 12pt; font-family: Arial; color: #3d3d3d;">8. Hybrid ServiceMapping With Revised Software Package Table Pattern</span></p>
<p style="padding-left: 30px; font-family: arial, sans-serif; color: #666666;"><span style="font-weight: inherit; font-style: inherit; font-size: 12pt; font-family: Arial; color: #3d3d3d;">9. Fully Integrated Hybrid Pattern</span></p>
<p style="padding-left: 30px; font-family: arial, sans-serif; color: #666666;"><span style="font-weight: inherit; font-style: inherit; font-size: 12pt; font-family: Arial; color: #3d3d3d;">10. CMDB BSM Map of ServiceMapping BSM Pattern</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif; color: #3d3d3d;">It is by no means an exhaustive list.</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif; color: #3d3d3d;">Note:   My numbering is a continuation of the previous article.</span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 18.6667px; font-family: Arial; color: #000000; font-weight: bold;">7. Extended or Hybrid ServiceMapping Pattern</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">Since the ServiceMapping table extends or inherits from the Business Service table it is possible to build relationships between the non-discoverable Business Services and the entry-point Business Services.   You will be able to see the relationships in the old BSM up to the entry-point Business Services, but not beyond.   <span style="color: #000000; font-family: Arial; font-size: 16px;">In order to see the rest of the &#34;picture&#34; you </span>will need to open the entry-point Business Service to view the discovered downstream BSM.   This is a bit clunky, but gives the CMDB Administrator the ability to see what Business Services and Applications depend on the entry-point Business Services.</span></p>
<p> </p>
<p><img class="jive-image image-14" style="max-width: 1200px; max-height: 900px;" src="d4aa788adb9cdfc068c1fb651f961918.iix" /></p>
<p> </p>
<p> </p>
<p><span style="font-size: 18.6667px; font-family: Arial; color: #000000; font-weight: bold;">8. Hybrid ServiceMapping With Revised Software Package Table Pattern</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">I have only seen this pattern with Software Asset Management (SAM) not yet installed (with the BSM stopping at Software Package).   I have revised the pattern to show how it would appear with SAM.   Here you have both BSMs available with the Software Package software installs.   This is useful in depicting software dependencies down to the actual discoverable CIs.   Remember that even though it is labeled as such, the Discovery Model table <span style="color: #000000; font-family: Arial; font-size: 16px;">(</span>cmdb_sam_sw_discovery_model<span style="color: #000000; font-family: Arial; font-size: 16px;">) </span>is not extended from the CMDB structure!</span></p>
<p> </p>
<p><img class="image-15 jive-image" style="max-width: 1200px; max-height: 900px;" src="fbf6d482db589fc068c1fb651f961920.iix" /></p>
<p> </p>
<p> </p>
<p><span style="font-size: 18.6667px; font-family: Arial; color: #000000; font-weight: bold;">9. Fully Integrated Hybrid Pattern</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">Here you get everything, but you may also get a lot of maintenance work as well.   With this pattern you have a lot of manually created relationships to maintain.   However, it gets you the dual BSM perspective.   You are able to drill down to entry-point Business Services, or Software Packages, or supporting discoverable CIs!   This pattern is really the final one I see in a series of maturity steps involving implementation of Discovery first, then Service Mapping, then Asset Management, then finally SAM!   Remember, however, that &#34;manual&#34; usually translates into Risk; as you have the human element to consider.   Stale relationship data can be an issue if you have a lot of Business Service and Business Application records AND relationships to maintain.   I have seen companies with several thousand of these!   Can you say: &#34;Full time position!&#34;</span></p>
<p> </p>
<p><img class="image-16 jive-image" style="max-width: 1200px; max-height: 900px;" src="e0a6f77ddbd05704ed6af3231f9619b7.iix" /></p>
<p> </p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">Here is an example I set up that shows what this would look like in reality (well pseudo-reality as I created some bogus Business Services in order to display the example):</span></p>
<p> </p>
<p> </p>
<p><img class="jive-image image-8" style="max-width: 1200px; max-height: 900px;" src="cf461002db189fc03eb27a9e0f96190e.iix" /></p>
<p> </p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">And continuing with an example of the downstream ServiceMapping BSM might look like this (viewed separately):</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;"><img class="image-7 jive-image" style="max-width: 1200px; max-height: 900px;" src="3ceab48adb109f048c8ef4621f961932.iix" /></span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 18.6667px; font-family: Arial; color: #000000; font-weight: bold;">10. CMDB BSM Map of ServiceMapping BSM Pattern</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">Even though I didn&#39;t mention it in my previous article I decided to throw in this last pattern because it is of interest to those of you wanting the Discovery BSM to reflect the ServiceMapping Business Service correctly.</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">Since ServiceMapping only creates the relationships for its own BSM the actual downstream for the regular BSM does not appear for the ServiceMapping Business Service endpoint.   Thus, there needs to be a manual relationship created between the upstream Business Service entry point, and the first CI found in the ServiceMapping BSM.   So where the previous pattern example BSM stopped at the EMEA Dispatch business service.   A manual connection would then have to be created between the EMEA Dispatch and the Apache server CI referenced in the ServiceMapping BSM to allow for the full picture to be displayed.</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">In the diagram below you will see that two relationship links are manually created.   The first linking an upstream Business Service to the Service Mapping Business Service Entry-Point record.   The second then is created downstream to link the Server CI.   Once again note that there are two BSMs here.   One has to be manually created while the other, in ServiceMapping, is automatically created.</span></p>
<p> </p>
<p><img class="jive-image image-10" style="max-width: 1200px; max-height: 900px;" src="d1cd5d42dbdc97049c9ffb651f9619cd.iix" /></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">Here is my previous example showing what happens when I manually connected the EMEA Dispatch Business Service (ServiceMapping entry-point) with the Apache Web Service CI.   All relationships downstream CIs, that were created by my Discovery process, are now visible in the BSM.   Cool, huh?!</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;"><img class="image-9 jive-image" style="max-width: 1200px; max-height: 900px;" src="0a8bb73ddb90db048c8ef4621f9619f5.iix" width="923" height="474" /></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">In my next article on Business Services (<a title="" href="/community?id&#61;community_blog&amp;sys_id&#61;943eaa6ddbd0dbc01dcaf3231f9619f8" rel="nofollow">part 3</a>) I will describe how to implement the following:</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">Lab 1.1 How to Establish a new Relationship between Software Packages and Software Installs (this was mentioned in my first article)</span></p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">Lab 1.2 How to Remove the Old Software Installs Related List Tab on a Computer CI Form and Replace With the New (Ibid.)</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;"><a class="jive_macro jive_macro_blogpost" title="Mini-Lab - Implementing a Relationship Between the Software Package and SAM Software Installs" href="/community?id&#61;community_blog&amp;sys_id&#61;943eaa6ddbd0dbc01dcaf3231f9619f8" rel="nofollow">Mini-Lab - Implementing a Relationship Between the Software Package and SAM Software Installs</a> </span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">I was also thinking on putting out a follow-up article on how to use a Database View to do reporting on Software Packages with Software Installs.   So that will probably be coming along shortly as well!   :-)</span></p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;"><br /></span><span style="font-weight: inherit; font-style: inherit; font-size: 12pt; font-family: Arial; color: #000000;">Steven Bell</span></p>
<p style="font-family: arial, sans-serif; color: #666666;"> </p>
<p style="font-family: arial, sans-serif; color: #666666;"><span style="font-weight: inherit; font-style: inherit; font-family: Arial;"><img class="jive-image image-4" style="max-width: 1200px; max-height: 900px;" src="2c0c150adb58d304b322f4621f9619a8.iix" /></span></p>
<p style="font-family: arial, sans-serif; color: #666666;"> </p>
<p style="font-family: arial, sans-serif; color: #666666;"><span style="font-weight: bold; font-style: inherit; font-family: Arial;">For a list of all of my articles:   </span><a style="font-weight: inherit; font-style: inherit; font-family: inherit; color: #266fc8;" href="/groups/servicenow-user-group-us-tx-north-texas/blog/2015/10/23/community-code-snippets-articles-list-to-date" rel="nofollow"><span style="font-weight: bold; font-style: inherit; font-family: Arial;">Community Code Snippets: Articles List to Date</span></a></p>
<p style="font-family: arial, sans-serif; color: #666666;"> </p>
<p style="font-family: arial, sans-serif; color: #666666;"><span style="font-weight: inherit; font-style: inherit; font-size: 14.6667px; font-family: Arial; color: #eb7a3d;">Please Share, Like, Bookmark, Mark Helpful, or Comment this blog if you&#39;ve found it helpful or insightful.</span></p>
<p style="font-family: arial, sans-serif; color: #666666;"> </p>
<p style="font-family: arial, sans-serif; color: #666666;"><span style="font-weight: inherit; font-style: inherit; font-size: 14.6667px; font-family: Arial; color: #eb7a3d;">Also, if you are not already, I would like to encourage you to become a member of our blog!</span></p>