---
title: "Improving the performance of your ServiceNow homepage"
date: 2016-02-23T04:02:51.000Z
authors: ["nisha.narayanakurup"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=dd6dea29dbd0dbc01dcaf3231f96190c"
---
<p>In my last blog post <a class="jive_macro jive_macro_blogpost" title="5 Ways to Troubleshoot your Instance Performance" href="/community?id&#61;community_blog&amp;sys_id&#61;a6ecae65dbd0dbc01dcaf3231f961969" rel="nofollow">5 Ways to Troubleshoot your Instance Performance</a> I have shared a few tips which enable administrators to diagnose performance issues. As a performance expert, homepage performance is one of the most commonly diagnosed problem areas we assist customers with.<strong> Heavy home pages can lead to overall instance performance degradation</strong>.</p>
<p class="p1"><span class="s1">Inefficient homepages lead to poor end user experiences e.g: </span></p>
<p class="p1"><span class="s1">- Slower logins </span></p>
<p class="p1"><span class="s1">- Poorer instance performance at peak login times </span></p>
<p class="p1"><span class="s1">- Poor performance on form submission (where redirect to <a href="http://home.do/" rel="nofollow"><span class="s2">home.do</span></a> occurs) </span></p>
<p class="p1"><span class="s1">- Homepage auto-refresh functionality (<a href="https://docs.servicenow.com/use/homepages/reference/r_RefreshTheHomepage.html" rel="nofollow"><span class="s3">https://docs.servicenow.com/use/homepages/reference/r_RefreshTheHomepage.html</span></a>) can compound the problem where inefficient home pages are concerned </span></p>
<p> </p>
<p>While designing home pages, ask yourself which information do you need to rendered as a part of home page loading and which one is not?</p>
<p> </p>
<h3>How to identify if your instance performance is suffering due to a heavy homepage</h3>
<p>Hefty home pages can result in slow load times, which may lead you to think there&#39;s something wrong with your overall instance. Administrators can review the transaction logs and look for URL starts with &#34;/home.do&#34; and check through the response times. Sort the response times z &gt; a and look for the usernames with highest response time.</p>
<p><img class="image-1 jive-image" style="width: 620px; height: 287px; display: block; margin-left: auto; margin-right: auto;" src="3d687379db101304b322f4621f96195a.iix" alt="identify instance performance.jpg" /></p>
<p> </p>
<p>This will help to pinpoint the users with heavy home pages. If the   response times of multiple &#34;home.do&#34; transactions is high ( &gt; 8-10   seconds), that could be impacting the overall instance and causing a load on the database as well.</p>
<p> </p>
<h3>Homepage best practices to improve performance time</h3>
<ol><li>Avoid having too many gauges in one dashboard, especially from big tables. <span class="s1">Aim for no more than 4 gauges per page - split onto other pages if more needed. </span></li></ol>
<p>              <span class="s1">A dashboard should be designed with gauges that show focussed and pertinent items of data that should invite a user to drill down further if needed.</span></p>
<p><span class="s1">     2.   </span>As an admin user, make use of debug options   by enabling &#34;Debug home page rendering.&#34;                                                                                                                                                                                                                                                                                                              </p>
<ol><li>
<ol><li>Impersonate one of the users with a heavy homepage. It will display the time each widget is taking. Remove heavy widgets and run it as a report, or see if there are ways to optimize the performance of those reports by adding additional filters.</li></ol>
</li></ol>
<p>  3.     Avoid frequent homepage refresh.</p>
<ol><li>
<ol><li>Setting auto refresh for every 5-10 seconds could result in session synch waits. Doing the frequent refresh by multiple users can lead to massive database workload.   Refresh <span class="s1">option can be entirely disabled by creating the &#34;glide.home.refresh_disabled&#34; property and refresh intervals can be customized using &#34;<span style="color: #333333; font-family: Omnes-pro, Arial, Verdana, sans-serif;">glide.home.refresh_intervals&#34; property.</span></span></li></ol>
</li></ol>
<p><span style="color: #333333; font-family: Omnes-pro, Arial, Verdana, sans-serif;">   4.     </span>Make use of multi threaded homepage rendering, see <a class="jive_macro jive_macro_blogpost" title="Parallel Homepage Rendering Explained" href="/community?id&#61;community_blog&amp;sys_id&#61;19ed2ee9dbd0dbc01dcaf3231f9619ca" rel="nofollow">Parallel Homepage Rendering Explained</a> for more details.</p>
<p>  5.     Design and set a default system homepage preference so that users who haven&#39;t selected a specific home page will land on a lightweight default homepage.</p>
<p class="p1"><span class="s1">   6.     Always report on current (active&#61;1) data - gauges that show trending on historical or inactive data should be moved to &#34;Reports&#34; wherever possible</span></p>
<ol><li>
<ol><li>For example, try the <strong>Incident &gt; Resolved</strong>, then try it again after adding active&#61;true to the filter. For more tips, refer <a class="jive_macro jive_macro_blogpost" title="Improve performance by displaying " href="/community?id&#61;community_blog&amp;sys_id&#61;a0fda22ddbd0dbc01dcaf3231f961963" rel="nofollow">Improve performance by displaying &#34;just enough&#34; data</a></li></ol>
</li></ol>
<p>  7.     <span class="s1">Think carefully about allowing non-admin users to create their own custom home pages - if this is allowed ensure users have a good understanding on how to design good home pages </span></p>
<p class="p1"><span class="s1">   8.     Do not put slow gauges on the same page as fast gauges - defeats advantage of multi-threading which the platform supports </span></p>
<p> </p>
<p> </p>
<p><span style="line-height: 1.5;">For additional information on homepage performance see:</span></p>
<p><span style="line-height: 1.5;"><a title="ocs.servicenow.com/administer/homepage_administration/concept/c_HomepageCaching.html" href="https://docs.servicenow.com/administer/homepage_administration/concept/c_HomepageCaching.html" rel="nofollow">Homepage caching</a></span></p>
<p><a title="https://docs.servicenow.com/administer/homepage_administration/task/t_ChngParamForParallelHomepgRndr.html" href="https://docs.servicenow.com/administer/homepage_administration/task/t_ChngParamForParallelHomepgRndr.html" rel="nofollow">Change the parameter for parallel homepage rendering</a></p>
<p><a title="ocs.servicenow.com/administer/homepage_administration/reference/r_ConfigureHomepageCacheProperties.html" href="https://docs.servicenow.com/administer/homepage_administration/reference/r_ConfigureHomepageCacheProperties.html" rel="nofollow">Configure homepage cache properties</a></p>
<p><span style="line-height: 1.5;"><a title="ocs.servicenow.com/administer/homepage_administration/task/t_TroubleshootAReportOnAHomepage.html" href="https://docs.servicenow.com/administer/homepage_administration/task/t_TroubleshootAReportOnAHomepage.html" rel="nofollow">Troubleshoot reports on a homepage for performance</a></span></p>
<p><span style="line-height: 1.5;"><a class="jive_macro jive_macro_message" title="How do you enhance Homepage performance in case of gauges ? i) Increase the number of gauges ii) decrease refresh time of gauges iii) Off Refresh button/delete groups" href="/community?id&#61;community_question&amp;sys_id&#61;09d54b21db1cdbc01dcaf3231f961910" rel="nofollow">How do you enhance Homepage performance in case of gauges ? i) Increase the number of gauges ii) decrease refresh time of gauges iii) Off Refresh button/delete groups</a> </span></p>
<p><span style="line-height: 1.5;"><a class="jive_macro jive_macro_message" title="How to improve the performance of home page" href="/community?id&#61;community_question&amp;sys_id&#61;ca65cbaddbd8dbc01dcaf3231f961990" rel="nofollow">How to improve the performance of home page</a> </span></p>