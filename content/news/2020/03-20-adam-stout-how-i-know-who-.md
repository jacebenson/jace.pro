---
title: "How I Know Who is Using Reports  Your Guide to Report Usage"
date: 2020-03-20T04:59:32.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=274796dfdb23c49414d6fb2439961975"
---
<h2>Identifying Impactful Slow Reports</h2>
<p>Want to look good and make your users happy? Fix or get rid of the performance hog reports that cause poor UX and then get ready for smiling users.</p>
<p>But how do you figure out which reports are the most impactful to performance? You may have 1,000 reports, you may have 10,000 reports, you may even have 50,000 reports on your instance... where should you focus your attention?</p>
<p>Let’s dig into what we can to track report performance.</p>
<p>[If you are looking to track Dashboard Usage, check out <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;19bdcd95dbb5ef001089e15b8a961937" rel="nofollow">this blog</a>.]</p>
<h2>Out of the Box Report Statistics</h2>
<p><a href="https://docs.servicenow.com/bundle/orlando-performance-analytics-and-reporting/page/use/reporting/reference/report-statistics.html" rel="nofollow">Report Statistics</a> is a great place to start. Out of the box, the report_stats table gives you a quick way to access how long reports are taking to load, and when the last time they were viewed.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/a9c55e9bdb23c49414d6fb2439961970.iix" /></p>
<p>The report_stats table is great to be able to identify your long-running reports that have been run recently and have seen a lot of activity in their lifetime. The Report field is a reference to sys_report so you can dot-walk to any report attribute you need (for example, filtering to incident tables or HR tables).</p>
<p>Report Statistics are active by default, and no customization is needed to take advantage of this great resource to help you focus on the reports that need it.</p>
<h2>Tracking Individual Views</h2>
<p>Report Statistics is a great start, but sometimes we need to know more about the usage of reports. For instance, we want to know not only that a report was run recently, but we want to know who viewed it. We want to know not just that it is run a lot, but how many times it has been run recently.</p>
<p>To track usage at this level, we need to build on the out of the box capabilities to store this info.</p>
<h3>Creating a Table</h3>
<p><em>Note: Creating a table may have licensing implications depending on your contract. If you have questions about this, contact your account representative.</em></p>
<p>I created a <a href="https://docs.servicenow.com/bundle/orlando-application-development/page/build/applications/concept/c_CreatingApplications.html" rel="nofollow">scoped application</a> to hold the objects we need named x_snc_aoa. I want to track both report views and Performance Analytics widget, so I created three tables.</p>
<ul><li>x_snc_aoa_use – This the base table for my usage tracking</li><li>x_snc_aoa_report_use – Extends use and tracks the report (and anything specific to reports)</li><li>x_snc_aoa_widget_use - Extends use and tracks the widgets (and anything specific to widgets)</li></ul>
<p> <img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/84065adbdb23c49414d6fb2439961995.iix" />.  <img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/cb06dedbdb23c49414d6fb24399619b4.iix" /> <img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/4b16161fdb23c49414d6fb243996194c.iix" /></p>
<h3>Populating the Tables</h3>
<p>Now that we have my tables, we need to populate them. To do this, we are taking advantage of the awesomeness of the Now Platform. When reports and widgets are viewed, there is an <a href="https://docs.servicenow.com/bundle/orlando-platform-administration/page/administer/platform-events/concept/events.html" rel="nofollow">Event</a> created named “report.view”.</p>
<p>This event gives us:</p>
<ul><li>Report (Instance)</li><li>User (User ID)</li><li>Load Duration (Param1)</li><li>Dashboard tab or homepage (Param2)</li><li>View time (Created time)</li></ul>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/31469e1fdb23c49414d6fb243996198f.iix" /> </p>
<p>To process this event, we need a <a href="https://docs.servicenow.com/bundle/orlando-platform-administration/page/administer/platform-events/reference/r_ScriptActions.html" rel="nofollow">Script Action</a>. There is already a Script Action to populate the report_stats records so we will add one.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/2966925fdb23c49414d6fb2439961999.iix" /> </p>
<p>Here is the script I used in my script action.  You may need to adjust to fit your specific requirements.  As always, be sure to test this in your environment before using it.</p>
<pre class="language-javascript"><code>(function(event) { 
    var userSysId &#61; event.user_id; 
    var executionTimestamp &#61; event.sys_created_on; 
    var executionDuration &#61; event.parm1; 
      
    // homepage and widget sys id are passed in parm2 as &lt;homepage&gt;/&lt;widget&gt;  
    var parm2 &#61; (event.parm2) ? event.parm2.split(&#39;/&#39;) : []; 
    var homepageSysId &#61; (parm2.length &gt; 0) ? parm2[0] : null;    
    var widgetSysId &#61; (parm2.length &gt; 1) ? parm2[1] : null; 
    var isScheduledRun &#61; (parm2.length &gt; 2) ? parm2[2] : null; 
    var bIsScheduledRun &#61; isScheduledRun !&#61; null &amp;&amp; isScheduledRun &#61;&#61;&#61; &#39;true&#39; ? true :  false; 
   var repLog &#61; null; 
    if(event.table &#61;&#61; &#39;pa_widgets&#39;) 
    { 
    repLog &#61; new GlideRecord(&#39;x_snc_aoa_widget_use&#39;); 
        repLog.setValue(&#39;widget&#39;, event.instance); 
    } else { 
    repLog &#61; new GlideRecord(&#39;x_snc_aoa_report_use&#39;); 
        repLog.setValue(&#39;report&#39;, event.instance); 
        repLog.setValue(&#39;widget&#39;, widgetSysId); 
    } 
    repLog.setValue(&#39;user&#39;, userSysId); 
    repLog.setValue(&#39;load_duration&#39;, executionDuration); 
    repLog.setValue(&#39;viewed&#39;, executionTimestamp); 
    repLog.setValue(&#39;homepage&#39;, homepageSysId); 
    repLog.setValue(&#39;scheduled&#39;, bIsScheduledRun); 
    repLog.insert(); 
}(event)); </code></pre>
<h2>Data Hygiene</h2>
<p>Depending on the size of your instance, this data can grow quickly. To ensure it doesn’t get out of hand and cause issues on your instance, be sure to create a <a href="https://docs.servicenow.com/bundle/orlando-platform-administration/page/administer/managing-data/concept/c_DataManagement.html" rel="nofollow">table cleaner</a> to purge the data.</p>
<p>I created one to remove data over six months. You may need to adjust this setting depending on data volume. <a href="https://docs.servicenow.com/bundle/orlando-platform-administration/page/administer/platform-performance/concept/c_TableRotation.html" rel="nofollow">Table rotation</a> may be an acceptable option as well.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/b9f6da9fdb23c49414d6fb2439961944.iix" /></p>
<h2>Use the Data</h2>
<p>Now that we have the data in our tables, there is a lot we can do. I built a quick dashboard that lets me look at where are the top reports based on any of the report attributes.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/03079e9fdb23c49414d6fb24399619cf.iix" /></p>
<p>We can use the attributes from reports and users (I used the user as an example here) to zoom in to what they are viewing.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/c1179e9fdb23c49414d6fb24399619ea.iix" /> </p>
<p>With this data, we can create reports on:</p>
<ul><li>Reports getting slower over time</li><li>Which departments are viewing specific reports</li><li>Are users visiting reports at expected intervals</li><li>Top (specific) report consumers to consult before changes are made</li><li>Users experiencing long load time (key when some users have different performance profiles)</li><li>Quite a few more...</li></ul>
<p>Once we have something we want to focus on, we can apply Performance Analytics to this data as well to trend our usage KPIs over time to help us drive greater adoption and performance of our analytics.</p>
<h2>Let’s Go!!!</h2>
<p>Now that you know how to do this, do it. Start tracking this data as soon as possible. Since we leverage events, you can’t get it historically once the events are deleted from the instance.</p>
<p>What are the key things do you focus on? Leave me a comment about what analytics you built on this data.</p>