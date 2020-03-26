---
title: "Responsive dashboards the best way to share data visualizations"
date: 2017-12-08T22:55:29.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ab8caae1dbd0dbc01dcaf3231f961913"
---
<p>Starting with the Istanbul release, ServiceNow instances provide a powerful feature available to all users: <a title="ocs.servicenow.com/bundle/jakarta-performance-analytics-and-reporting/page/use/dashboards/concept/c_ResponsiveDashboards.html" href="https://docs.servicenow.com/bundle/jakarta-performance-analytics-and-reporting/page/use/dashboards/concept/c_ResponsiveDashboards.html" rel="nofollow">responsive dashboards</a>.<span style="color: #3d3d3d;"> I</span>n this installment of our <a style="font-weight: inherit; font-style: inherit; font-family: inherit; color: #3778c7;" title="" href="community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" rel="nofollow">NOWSupport best practices series</a>, you can learn what responsive dashboards are, how to enable them, what you can use them for, and best practices for creating them and optimizing their performance.</p>
<p><strong>Note:</strong> this article is written for the Jakarta release. Later releases will be slightly different -- our dev team is busy making this feature even better! Learn more about working with dashboards in this video on our <a title="" href="https://www.youtube.com/channel/UCQjE37R-Y4DTq7kUWPO83Wg" target="_blank" rel="noopener noreferrer nofollow">NOWSupport YouTube channel</a>:</p>
<p> </p>
<p><iframe src="https://www.youtube.com/embed/ytI9JL4ifjU?rel&#61;0" width="640" height="360"></iframe></p>
<p> </p>
<p> </p>
<h2>Who can use our responsive dashboards, and what can you use them for?</h2>
<p><span style="color: #3d3d3d;">In previous release dashboards were available only to users with Performance Analytics roles. No longer! In Istanbul and all users can create responsive dashboards. </span></p>
<p><span style="color: #3d3d3d;">Responsive dashboards are a step up from homepages, which provide only a static page of widgets displaying data and limited configuration options. Responsive dashboards feature an easy-to-use drag and drop canvas that allows you to create, edit, and arrange widgets (such as reports), and then share with colleagues. </span></p>
<p> </p>
<p>Here are a few examples of the type of info you can put on dashboards:</p>
<ul><li><strong>KPI Overview</strong> - Present critical info based on user role to help users work efficiently and see where focus or action is required.</li><li><strong>Analysis</strong> - Allow users to explore data and see trends via filters and breakdowns.</li><li><strong>Tell a story</strong> - Lead users through information on the dashboard with additional text (such as static html content blocks) to help them understand the data.</li></ul>
<p> </p>
<p>When you open a homepage that hasn&#39;t been converted to a dashboard, you&#39;ll be prompted to convert it. Once converted, you&#39;ll be able to utilize the benefits of the more flexible and usable format of responsive dashboards, which allow you to flexibly add, move, and resize widgets.</p>
<p> </p>
<p><img class="image-1 jive-image" style="width: 620px; height: 418px; display: block; margin-left: auto; margin-right: auto;" src="e81cf086db1c9304b322f4621f9619a9.iix" alt="convert_homepage_to_dashboard.png" /></p>
<p> </p>
<p style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;"> </p>
<p>When converting a highly customized homepage to a responsive dashboard, the layout may not convert properly. Even then, you can simply recreate the homepage as a dashboard. To learn more, see <a title="ocs.servicenow.com/bundle/kingston-performance-analytics-and-reporting/page/use/dashboards/concept/differences-between-respsonsive-and-non-responsive-dashboards.html" href="https://docs.servicenow.com/bundle/kingston-performance-analytics-and-reporting/page/use/dashboards/concept/differences-between-respsonsive-and-non-responsive-dashboards.html" rel="nofollow">Differences between homepages and responsive and non-responsive dashboards</a>.</p>
<p> </p>
<h2>Enabling responsive dashboards</h2>
<p>  </p>
<p>If you&#39;re not prompted to convert your homepage to a responsive dashboard, that means they&#39;re not enabled yet. A user with the admin role can enable them via the <em>glide.cms.enable.responsive_grid_layout</em> <span style="color: #3d3d3d;">system property. If you zBoot your instance, responsive dashboards will be enabled by default. See</span> the article <a title="ocs.servicenow.com/bundle/jakarta-performance-analytics-and-reporting/page/use/dashboards/task/t_EnableResponsiveDashboards.html" href="https://docs.servicenow.com/bundle/jakarta-performance-analytics-and-reporting/page/use/dashboards/task/t_EnableResponsiveDashboards.html" rel="nofollow">Enable responsive dashboards</a> to learn more.</p>
<p> </p>
<p class="TableNorm"><img class="image-2 jive-image" style="width: 620px; height: 166px; display: block; margin-left: auto; margin-right: auto;" src="3fbf14c2db1c5304b322f4621f961998.iix" alt="system_properties.png" /></p>
<p> </p>
<p> </p>
<h2>Best practices for creating dashboards</h2>
<p>And now, here are some best practices for creating dashboards.</p>
<p> </p>
<h3>Name your dashboard to clearly define its purpose</h3>
<p>When you name your dashboard, make sure the name clearly defines its purpose. This will help users find and understand the dashboard, and help you with future maintenance.</p>
<p> </p>
<h3>Create a dashboard for a specific role</h3>
<p>So that all the content of the dashboard is relevant for the user, avoid creation of one dashboard for different users with different focus or interests.</p>
<p> </p>
<p><img class="image-4 jive-image" style="float: left; width: 295px; height: 39.1066px;" src="be54698adb90df048c8ef4621f9619b5.iix" alt="role.png" width="295" height="39" /><img class="image-5 jive-image" style="float: left; width: 288px; height: 39.3846px;" src="541209c6dbd097049c9ffb651f96197f.iix" alt="role2.png" width="288" height="40" /><img class="image-6 jive-image" style="float: left; height: 36px; width: 278.4px;" src="a40fd006db5057041dcaf3231f96199c.iix" alt="role3.png" width="278" height="36" /></p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<p>Having irrelevant content can lead to the following issues:</p>
<ul><li>Slower performance - the system loads data that the user doesn&#39;t need.</li><li>Poor data consumption/readability - users will have to go through irrelevant content to find the information they&#39;re looking for, which may slow the adoption of the dashboard.</li></ul>
<p> </p>
<h3>Test the dashboard before sharing it</h3>
<p>Make sure that reports and widgets you put in the dashboard load in a timely manner and the data refreshes as expected. If not, be sure to check the tips below. If there are content blocks or custom widgets on the dashboard, also test exporting it to PDF.</p>
<p> </p>
<h3>Optimize your dashboard&#39;s usability</h3>
<p>Optimize the layout of the dashboard by defining the best size and location of the widgets. To do this, choose the visualization type that provides the best readability of the data and gives the user the fastest insight into the data you&#39;re trying to show. For example, consider the data/ink ratio of the visual for the best readability—is the widget big enough to display the data clearly? Does the visualization type display trends that you want users to see? Here are some more tips for optimization:</p>
<p> </p>
<ul><li><strong>Create tabs to divide information</strong>: For example, you could create a tab for each step of a process. Make sure that the name of the tab clearly defines the purpose. This will help the user find needed information faster and will optimize performance, as only widgets for the required tab will be loaded when the user clicks on it, rather than all widgets in the dashboard.<br /><br /></li></ul>
<p style="text-align: center;"><img class="image-3 jive-image" style="width: 620px; height: 388px;" src="db220042db985fc03eb27a9e0f9619f6.iix" alt="tabs.png" /></p>
<ul><li><strong>Use breakdowns and interactive filters:</strong> Rather than creating multiple dashboards with filtered reports, use breakdowns and interactive filters to allow users to filter down the data on one dashboard. This will help to keep the data clean and improve user experience.<br /><br /></li><li><strong>Lay out tabs with important indicators/reports at the top:</strong> Users can see most important info first.<br /><br /></li><li><strong>Share dashboards and associated reports with same user groups</strong>: Make sure that the reports you put in the dashboard are shared with (or published to) the same user groups as the dashboard to prevent users from having issues viewing them.<br /><br /></li><li><strong>Use dashboard groups</strong>: (pa_admins only) Grouping dashboards based on process will make it easier for users to find the required dashboard.</li></ul>
<p> </p>
<p style="text-align: center;"><img class="image-8 jive-image" style="height: auto;" src="ab02adcedbd8d304b322f4621f961925.iix" alt="dashboard_group.png" /></p>
<ul><li><strong>Optimize widget rendering time:</strong> Administrators can also <a title="ocs.servicenow.com/bundle/istanbul-performance-analytics-and-reporting/page/use/dashboards/task/t_optimizeWidgetRenderingTime.html" href="https://docs.servicenow.com/bundle/istanbul-performance-analytics-and-reporting/page/use/dashboards/task/t_optimizeWidgetRenderingTime.html" rel="nofollow">optimize widget rendering time on responsive dashboards</a> with the help of some properties.</li></ul>
<p> </p>
<p>In case you did your best to optimize the reports and widgets in the dashboard but it still seems slow, consider doing the following:</p>
<ul><li>
<ul><li>If a report isn&#39;t used often, put it on a separate tab so users will only open it when they need the info.</li><li>Add a content block/text to inform the user that the report may take some time to open (e.g. Report may take a few minutes to load).</li></ul>
</li></ul>
<p> </p>
<h3>Share a dashboard with user groups rather than individual users</h3>
<p>Avoid sharing dashboards with individual users when possible - it&#39;s better to share with a <span style="color: #3d3d3d;">user group, so that when new people are added to the group they can immediately access the dashboard. <span style="font-size: 14.6667px;">Every time a dashboard is shared with a user or group, an email notification is sent automatically.</span></span></p>
<p>Note that only users with pa_admin or pa_power_user role can manage (create new/edit existing) dashboard groups.</p>
<p><img class="image-7 jive-image" style="height: auto; display: block; margin-left: auto; margin-right: auto;" src="557e777ddb141304b322f4621f961995.iix" alt="share_with_groups.png" /></p>
<p> </p>
<h3>Take advantage of Performance Analytics base system content</h3>
<p>Be sure to take advantage of base system content available in the Performance Analytics Guided Setup. You can use these applications as they are, or adjust them to align with your needs. Find them by navigating to <strong>Performance Analytics -&gt; Guided Setup</strong>.</p>
<p>Note that you must have the admin role to access the Performance Analytics Guided Setup.</p>
<p> </p>
<h2>For more information</h2>
<p> </p>
<p><a title="ocs.servicenow.com/bundle/jakarta-performance-analytics-and-reporting/page/use/dashboards/concept/c_ResponsiveDashboards.html" href="https://docs.servicenow.com/bundle/jakarta-performance-analytics-and-reporting/page/use/dashboards/concept/c_ResponsiveDashboards.html" rel="nofollow">Working with responsive dashboards</a> (product documentation)</p>
<p> </p>
<p>--</p>
<p> </p>
<p>Behind the scenes here at ServiceNow, the Knowledge Management and Multimedia teams work closely with subject matter experts to disseminate critical information to our customers. We&#39;ve found that certain topics come up frequently, in the form of best practices that can help you keep your ServiceNow instances running smoothly. This series targets those topics so that you and your organization can benefit from our collective expertise. If you have a best practices topic you&#39;d like us to cover in this series, please let us know in the comments below.</p>
<p> </p>
<p>To access all of the blog posts in this series, see our <a style="font-weight: inherit; font-style: inherit; font-family: inherit; color: #3778c7;" title="" href="community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" rel="nofollow">NOWSupport best practices series list.</a></p>