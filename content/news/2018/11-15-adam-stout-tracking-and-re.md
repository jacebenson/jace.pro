---
title: "Tracking and Reporting on Dashboard Usage in ServiceNow"
date: 2018-11-15T03:17:57.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=19bdcd95dbb5ef001089e15b8a961937"
---
<h1>Overview</h1>
<p>Being able to understand your users is critical in order to meet their needs. By leveraging the power of the Now Platform, we can easily track our users&#39; behaviors and adjust our solutions to improve their overall satisfaction. </p>
<p>Dashboard views are stored along with other pages viewed in the sys_ui_navigator_history table.  While the data is here, it is protected by ACLs which restricts the viewing to the admin role and the user who for whom the history is for.  The Navigator History included the URL that was viewed which does contain the sys_id of the dashboard, but not in a reportable form.  </p>
<p>To make this vital information more accessible, we will create a table to hold just the dashboard views in a very analytic-friendly format.  Then we will create a scheduled job to populate this new table daily. </p>
<h1>Create a Table</h1>
<p>The table we need is very simple and straightforward.  In addition to the normal system fields, we only need two fields:  </p>
<ul><li><strong>Dashboard</strong> – A reference to pa_dashboards </li><li><strong>User</strong> – A reference to sys_user </li></ul>
<p><img src="f70dc9dddb75ef001089e15b8a96198b.iix" /></p>
<h1>Scheduled Job </h1>
<p>Now that we have a table, we have to populate it.  To accomplish this, we used a Scheduled Script Execution (a scheduled job).</p>
<p>Note: While all the logic can all be done in the scheduled job, for this example, I created a script include to hold all the logic to that parts could be reused in the future as well holding additional logic for other related or similar scheduled jobs. </p>
<p>Here is some sample logic for the processing.  This may need to be adjusted to fit your specific needs or in a future version of ServiceNow.  As with any script, this should be tested prior to use in any production environment. </p>
<p> </p>
<pre class="language-javascript"><code>/* sn_dashboard_usage.DashboardViews */
var DashboardViews &#61; Class.create();

DashboardViews.prototype &#61; {
    
    initialize: function ()
    {
        this.logSource &#61; gs.getProperty(&#39;sn_dashboard_usage.log.source&#39;, &#39;DashboardViews&#39;);
        this.verboseLog &#61; (gs.getProperty(&#39;sn_dashboard_usage.log.verbose&#39;, &#39;false&#39;) &#61;&#61; &#39;true&#39;);
    },

    loadViews: function (encodedQuery)
    {
        var bus &#61; [];
        var gr &#61; new GlideRecord(&#39;sys_ui_navigator_history&#39;);
        if(encodedQuery)
        {
            gr.addEncodedQuery(encodedQuery);
        }
        gr.addQuery(&#39;url&#39;, &#39;STARTSWITH&#39;, &#39;$pa_dashboard.do?&#39;).addOrCondition(&#39;url&#39;, &#39;STARTSWITH&#39;, &#39;$dashboards.do?&#39;);
        gr.query();
        this._info(&#39;Loading Dashboard views from UI Navigstor History to Usage table: &#39; &#43; gr.getRowCount());
        while(gr.next())
        {
            var match &#61; /sysparm_dashboard&#61;([a-z0-9]{32})/g.exec(gr.getValue(&#39;url&#39;));
            var dashboard_sys_id &#61; match[1];
            if(gs.nil(dashboard_sys_id))
            {
                this._warning(&#39;Unable to parse dashboard sys_id from: &#39; &#43; gr.getValue(&#39;url&#39;));
                continue;
            }
            this.addDashboardUsage(dashboard_sys_id, gr.getValue(&#39;user&#39;), gr.getValue(&#39;sys_created_on&#39;));
        }
        this._info(&#39;Dashboard Usage views transfer complete&#39;);
        return true;
    },

    addDashboardUsage: function(dashboard, user, viewTime)
    {
        var gr &#61; new GlideRecord(&#39;sn_dashboard_usage_view&#39;);
        gr.autoSysFields(false);
        gr.setValue(&#39;dashboard&#39;, dashboard);
        gr.setValue(&#39;user&#39;, user);
        gr.setValue(&#39;sys_created_on&#39;, viewTime);
        gr.insert();
    },
    
    _info: function(s)
    {
        gs.info(&#34;[{0}] {1}&#34;, this.logSource, s);
    },
    
    _warning: function(s)
    {
        gs.warn(&#34;[{0}] {1}&#34; &#43; s, this.logSource, s);
    },
    
    _error: function(s)
    {
        gs.error(&#34;[{0}] {1}&#34; &#43; s, this.logSource, s);
    },
    
    _debug: function(s)
    {
        if (this.verboseLog &#61;&#61; &#39;true&#39;) {
            //debug logs only show if Verbose
            gs.debug(&#34;[{0}] {1}&#34; &#43; s, this.logSource, s);
        }
    },
    
    type: &#39;DashboardViews&#39;
    
};</code></pre>
<p> </p>
<p>Now that we have the logic, I call this in the scheduled job: </p>
<p><img src="863d4551dbb5ef001089e15b8a961964.iix" /></p>
<pre class="language-javascript"><code>// process all the views for yesterday 
new DashboardViews().loadViews(&#39;sys_created_onONYesterday&#64;javascript:gs.beginningOfYesterday()&#64;javascript:gs.endOfYesterday()&#39;); </code></pre>
<p> </p>
<p> </p>
<p>We can “Execute Now” to load the data into our new table right now and this will ensure that the data is loaded daily going forward.  If desired, we can also call the same function (with a modified parameter) via a Fix Script to load in more historical data.  The data should exist in the table since the time your instance upgraded to Jakarta or was provisioned if you started on Jakarta or later.  </p>
<h1>Using the Data </h1>
<p>The new table now shows the dashboard viewed by whom it was viewed and when it was viewed:  </p>
<p><img src="b64d8951dbb5ef001089e15b8a9619fe.iix" />With this, we can easily create a dashboard based on dot walked fields like the User’s Department and the Dashboard Group.  We can also create custom interactive filters to help analyze this data. </p>
<p><img src="916dc155dbb5ef001089e15b8a961940.iix" /></p>
<p>This is also a great use case for leveraging Interactive Analysis on this data to quickly review this data to gain meaningful insights without needing to export the data.  </p>
<p><img src="787d0555dbb5ef001089e15b8a9619e3.iix" /></p>
<p> </p>
<h1>Trending </h1>
<p>If you are looking to use this in formulas (perhaps for some type of views per user ratio) or to use dashboard views as a KPI, then you will want to configure Performance Analytics on top of this new table. </p>
<p>The data in the new table is also in a great format to add Performance Analytics (no scripting should be required since we converted the data to references as part of the scheduled job.  If you only intended to view the views, standard reporting may be all you need since we can produce trend reports on this data based on the view time.  </p>
<h1>Conclusion </h1>
<p>Understanding your users is key to meeting their needs.  By leveraging the power of the Now Platform, we can easily track our users’ behaviors to better meet their needs.</p>