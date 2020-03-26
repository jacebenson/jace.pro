---
title: "Showing Dashboards on Wall Mounted Displays"
date: 2019-01-09T03:50:03.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=c884a883dbb227c0656a5583ca961905"
---
<h1>Overview </h1>
<p>In many support offices, there are areas with large monitors on the wall showing off key metrics.  What better way to demonstrate to visitors that you are on top of your workload and ensure your team is always aware of key information? </p>
<p>Below, we will walk through some important considerations prior to setting this up and how to set this up for your organization. </p>
<h1>Performance Considerations </h1>
<h2>Real-Time Reports </h2>
<p>For the best performance, instead of refreshing the entire dashboard, you can use real-time reports.  Real-time reporting is only supported for single scores, but they are updated in real time without a full refresh of the browser, with no action required by the viewer, and very little impact to the instance. </p>
<h2>Refresh Time </h2>
<p>When refreshing a dashboard tab, all of the widgets that are viewable are refreshed.  To minimize the performance impact on your instance, we recommend that you set the reload/refresh interval to no less than 5 minutes.  Refreshing every few seconds can put an unnecessary load on your instance.  </p>
<p>One good option for refresh time is to use real-time reports for some single scores (e.g., open incidents, unassigned incidents, etc.) with a full refresh scheduled in a much longer period (every 15 or 20 minutes). </p>
<h2>Actionable and Performant Content </h2>
<p>It is important to ensure that only actionable and well-performing reports are included in this report.  For example, a bar chart of the number of closed incidents by month for the past two years requires the examination of large amounts of data and doesn’t provide current actionable information.  Instead, include reports that focus on the open incident queue and perhaps the number of incidents closed in the last 24 hours. </p>
<p>If something like this is needed, be sure to look at leveraging Performance Analytics which can visualize trends with a significantly lighter impact on your system and with a faster response time.  </p>
<p>On a related note, if you are looking to get the most visually attractive dashboard, take a read through this pos, <a title="Make Better Looking Dashboards with Content Blocks" href="community?id&#61;community_blog&amp;sys_id&#61;29ec2e65dbd0dbc01dcaf3231f9619a4" rel="nofollow">Make Better Looking Dashboards with Content Blocks</a></p>
<h1>Setup and Configuration </h1>
<p>Let talk about how to set up an auto-refreshing dashboard. </p>
<h2>Configuring a User </h2>
<p>The first thing you need to set up a wall display is to identify the user to be used.  There are several items to consider when setting up this user.  </p>
<p>It is recommended to not use a real person’s login credentials.  Instead, create a dedicated system user that is specifically designed for this purpose.  This will allow you to ensure on the proper controls are in place as well as allow you to track any potential performance issues to this purpose.  </p>
<h2>Considerations </h2>
<ul><li><strong>Password Reset Requirements</strong> – Many organizations require users to change their password every 90 days.  You may want to except this system user from this requirement or ensure you have a process in place to handle this password change. </li><li><strong>Access Control Lists </strong>– To ensure this user cannot be misused (to view or update a specific incident), create a role specifically for this purpose and create ACLs that give the minimum access possible to meet your displaying needs.  For example, ensure this role only has read access to the tables needed and possible only specific fields. </li></ul>
<h2>Configure Display </h2>
<p>Typically, we view dashboards in the full frame including the ServiceNow header and the navigation bar.  This looks something like this: </p>
<p>  <img src="f11428cfdb7227c0656a5583ca961919.iix" /></p>
<p>The first task is to open the dashboard without the frame.  To do this, simply edit the URL to remove the nav_to.do. </p>
<p>Original URL: </p>
<p>http://myinstance.service-now.com/nav_to.do?uri&#61;%2F$pa_dashboard.do </p>
<p>Modified URL: </p>
<p>http://myinstance.service-now.com/$pa_dashboard.do   </p>
<p>This will remove the frame around the dashboard which will look something like this: </p>
<p> <img src="5e246ccfdb7227c0656a5583ca9619e2.iix" /></p>
<p>The URL above the load the last dashboard viewed by the user.  To get the URL of a specific dashboard, select copy the URL view the dashboard menu: </p>
<p> <img src="5f342803dbb227c0656a5583ca9619c7.iix" /></p>
<p>This will give us the full URL like this: </p>
<p>http://myinstance.service-now.com/$pa_dashboard.do?sysparm_dashboard&#61;a64b7031d7201100b96d45a3ce610335&amp;sysparm_tab&#61;f8bbb031d7201100b96d45a3ce610363&amp;sysparm_cancelable&#61;true&amp;sysparm_editable&#61;false&amp;sysparm_active_panel&#61;false  </p>
<p>Two import items in this URL include the <strong>sysparm_dashboard</strong> parameter which identifies which dashboard to display and <strong>sysparm_tab</strong> which identifies which tab to display initially. </p>
<p>Alternatively, instead of rotating through multiple tabs, separating these tabs into multiple dashboards (only shared to the system user we created for this dashboard).  This will recapture the screen space taken up by the tabs.  </p>
<p><img src="ea54e043dbb227c0656a5583ca9619d0.iix" /></p>
<h2>Auto-Refreshing </h2>
<p>To handle rotating through the tabs and auto-refreshing the dashboard, use an auto-refreshing extension for your browser such as Revolver for Chrome. </p>
<p><em><strong>Note</strong>:  There are many similar extensions for different browsers.  ServiceNow does not recommend any specific browser extension. </em></p>
<p>When selecting the URL to display, ensure that you enter the correct dashboard and tab.   If you want to rotate through multiple tabs, you will have multiple URLs which are identical except for the <strong>sysparm_tab</strong> parameter. </p>
<h2>Set Browser to Full Screen </h2>
<p>To use as much screen space as possible, be sure to full screen maximize the amount of screen space available. </p>
<h1>Conclusion </h1>
<p>Prominently displaying your real-time KPIs is a great way to keep your team motivated and show off your successes.  </p>