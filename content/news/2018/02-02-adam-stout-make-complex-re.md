---
title: "Make Complex Reporting Easier using Query Techniques"
date: 2018-02-02T02:07:21.000Z
authors: ["Adam Stout"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=bd0eaa2ddbd0dbc01dcaf3231f96199e"
---
<div class="alert alert-warning clearfix"><em class="fa fa-exclamation-triangle"> </em> The discussion below is intended for advanced Reporting users who have 6 or months experience with Reporting and the same or more experience with the ServiceNow Platform.   The advanced topics covered assume that you understand the basics of Reporting and have a working knowledge of JavaScript.</div>
<div><span style="font-size: 24px; font-weight: bold;">Introduction</span>
<p>ServiceNow has an amazing report builder that lets normal users quickly and safely perform complex queries leveraging the relationships in the system. With the addition of Related List Conditions, we are able to perform even more complex queries with a simple UI.</p>
<p> </p>
<p>In addition to what we can do with the standard condition builder, we can leverage the power of the NOW Platform when we need to use even more complex logic.</p>
<p>We are going to discuss what to do in those situations. We are going to reach deep into the power of the NOW Platform and show you how to leverage that to answer those tough questions and make life easier for you and your users.</p>
<p> </p>
<p>These techniques are demonstrated with Reporting but they work on list views and in Performance Analytics Indicator Sources and Breakdown Sources as well (really anywhere you have a condition in the NOW Platform).</p>
<p> </p>
<h1>Example Use Cases</h1>
<p>What is a &#34;complex&#34; query?   In this discussion, we&#39;ll focus on those queries that are not filtering on just the fields in the table we are querying or fields we can <a title="ocs.servicenow.com/bundle/kingston-platform-user-interface/page/use/navigation/concept/c_DotWalking.html" href="https://docs.servicenow.com/bundle/kingston-platform-user-interface/page/use/navigation/concept/c_DotWalking.html" rel="nofollow">dot-walk</a> to.   Specifically, we will look at cases where we need to filter based on child records (in related lists) or any other data not normally accessible in the standard condition builder.</p>
<p> </p>
<p>Here are some examples of queries that require more than the standard condition builder.</p>
<p> </p>
<table style="border: 1pt solid #a3a3a3;" title="" border="1" summary="" cellspacing="0" cellpadding="0"><tbody><tr><td style="padding: 2.0pt 3.0pt 2.0pt 3.0pt; border: 1pt solid #a3a3a3;">
<p><strong>Use Case</strong></p>
</td><td style="padding: 2.0pt 3.0pt 2.0pt 3.0pt; border: 1pt solid #a3a3a3;">
<p><strong>Approaches</strong></p>
</td></tr><tr><td style="padding: 2.0pt 3.0pt 2.0pt 3.0pt; border: 1pt solid #a3a3a3;">
<p>CIs with more than 1 active incident</p>
</td><td style="padding: 2.0pt 3.0pt 2.0pt 3.0pt; border: 1pt solid #a3a3a3;">
<p>Related List Condition *</p>
</td></tr><tr><td style="padding: 2.0pt 3.0pt 2.0pt 3.0pt; border: 1pt solid #a3a3a3;">
<p>CIs with no outages last month</p>
</td><td style="padding: 2.0pt 3.0pt 2.0pt 3.0pt; border: 1pt solid #a3a3a3;">
<p>Related List Condition *</p>
</td></tr><tr><td style="padding: 2.0pt 3.0pt 2.0pt 3.0pt; border: 1pt solid #a3a3a3;">
<p>Active Incidents with No Active Tasks</p>
</td><td style="padding: 2.0pt 3.0pt 2.0pt 3.0pt; border: 1pt solid #a3a3a3;">
<p>Related List Condition *</p>
</td></tr><tr><td style="padding: 2.0pt 3.0pt 2.0pt 3.0pt; border: 1pt solid #a3a3a3;">
<p>Incidents assigned to a manager</p>
</td><td style="padding: 2.0pt 3.0pt 2.0pt 3.0pt; border: 1pt solid #a3a3a3;">
<p>Related List Condition * / Scripted Filter &#43; Dynamic Filter Option</p>
</td></tr><tr><td style="padding: 2.0pt 3.0pt 2.0pt 3.0pt; border: 1pt solid #a3a3a3;">
<p>Users in my assignment groups with no active incidents assigned to them</p>
</td><td style="padding: 2.0pt 3.0pt 2.0pt 3.0pt; border: 1pt solid #a3a3a3;">
<p>Scripted Filter &#43; Dynamic Filter Option</p>
</td></tr></tbody></table>
<p>* In pre-Istanbul instances can use dynamic filters for this use-case.</p>
<p>Anything you can do with a Related List Condition, we can do with Filter Scripted.   However, the Related List Condition requires no customization and can be easily adjusted.   If we can solve the problem with a Related List condition, we should.</p>
<p>Now that we know what we are talking about, let&#39;s talk about how to answer them.</p>
<p> </p>
<h1>Query Techniques</h1>
<p>Before we walk through how to answer these, let&#39;s review what we have in our toolbox. These can be used anywhere the condition builder is available including list views, reports, indicator sources, and breakdown sources.</p>
<p> </p>
<div class="alert alert-warning clearfix"><em class="fa fa-exclamation-triangle"> </em> Related List Conditions cannot be edited on list views without List v3 enabled but they are available in the Report Designer with or without List V3.</div>
<h2>Related List Conditions</h2>
<p>Introduced for Indicator Sources and Breakdown Sources in Istanbul, related list conditions allow you to add filters based on records that reference the base record.</p>
<table style="border: 1pt solid #a3a3a3;" title="" border="1" summary="" cellspacing="0" cellpadding="0"><tbody><tr><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;">
<p><strong>Pros</strong></p>
</td><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;">
<p><strong>Cons</strong></p>
</td></tr><tr><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;">
<p>No development needed</p>
</td><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;">
<p>Only one related list condition per query</p>
</td></tr><tr><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;">
<p>Leverages reference defined in the instance</p>
</td><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;">
<p>Requires that references be defined</p>
</td></tr><tr><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;">
<p>Configured when you design the report</p>
</td><td> </td></tr></tbody></table>
<p> </p>
<p>See the documentation on <a title="ocs.servicenow.com/bundle/kingston-platform-user-interface/page/use/using-lists-v3/task/create-related-list-query.html" href="https://docs.servicenow.com/bundle/kingston-platform-user-interface/page/use/using-lists-v3/task/create-related-list-query.html" rel="nofollow">Related List Conditions</a> for more detailed information.</p>
<p> </p>
<h2>Scripted Filters and <span style="font-size: 20px; font-weight: bold;">Dynamic Filter Options</span></h2>
<p>By creating a script include you can use any logic supported by ServiceNow to filter your data.   Once your logic is defined, you can call it via the following techniques.</p>
<p> </p>
<h3>Scripted Filter</h3>
<p>A Scripted Filters allows you to tap into the power of the NOW Platform. Scripted Filters are implemented via a Script Include.</p>
<p> </p>
<table style="border: 1pt solid #a3a3a3;" title="" border="1" summary="" cellspacing="0" cellpadding="0"><tbody><tr><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;">
<p><strong>Pros</strong></p>
</td><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;">
<p><strong>Cons</strong></p>
</td></tr><tr><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;">
<p>Encapsulates logic in a controlled manner</p>
</td><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;">
<p>Requires development</p>
</td></tr><tr><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;">
<p>Can accept parameters</p>
</td><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;">
<p>Requires knowledge of script include to be called</p>
</td></tr><tr><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;"> </td><td>Requires user to type in the JavaScript correctly</td></tr></tbody></table>
<p> </p>
<p>See the documentation on <a title="ocs.servicenow.com/bundle/kingston-platform-user-interface/page/use/using-lists/task/t_ScriptedFilters.html" href="https://docs.servicenow.com/bundle/kingston-platform-user-interface/page/use/using-lists/task/t_ScriptedFilters.html" rel="nofollow">Scripted Filters</a> for more detailed information.</p>
<p> </p>
<h3>Dynamic Filter Options</h3>
<p>Once you have your Scripted Filter defined in a Script Include, you can then register a function as a Dynamic Filter Option and expose that logic to the users that need it (be sure that pa_admins have access to configure indicator sources and breakdown sources). Once it is defined, users (that you allow) can access this logic in the standard condition builder.</p>
<p> </p>
<p>Once configured, Dynamic Filters can be called via the &#34;is (dynamic)&#34; operator.</p>
<p> </p>
<table style="border: 1pt solid #a3a3a3;" title="" border="1" summary="" cellspacing="0" cellpadding="0"><tbody><tr><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;">
<p><strong>Pros</strong></p>
</td><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;">
<p><strong>Cons</strong></p>
</td></tr><tr><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;">
<p>Encapsulates logic in a controlled manner</p>
</td><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;">
<p>Requires development</p>
</td></tr><tr><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;"> </td><td>Does not accept parameters</td></tr></tbody></table>
<p> </p>
<div class="alert alert-warning clearfix"><em class="fa fa-exclamation-triangle"> </em> Dynamic Filter Options are not limited to a one to one relationship with the Script Include functions.   You can call the same Scripted Filter with different parameters as different Dynamic Filter Options.   For example, in the use case above &#34;Incidents on Cis that have at least one outage in the last 366 days&#34;, we could use the same function and have it take a parameter of the number of days and have two Dynamic Filter Options, one for 366 days and one for 30 days.</div>
<p> </p>
<p>See the documentation on <a title="ocs.servicenow.com/bundle/kingston-platform-user-interface/page/use/using-lists/task/t_DynamicFilterOptions.html" href="https://docs.servicenow.com/bundle/kingston-platform-user-interface/page/use/using-lists/task/t_DynamicFilterOptions.html" rel="nofollow">Dynamic Filter Options</a> and <a title="ocs.servicenow.com/bundle/kingston-platform-user-interface/page/use/using-lists/task/t_ScriptedFilters.html" href="https://docs.servicenow.com/bundle/kingston-platform-user-interface/page/use/using-lists/task/t_ScriptedFilters.html" rel="nofollow">Scripted Filters</a> for more detailed information.</p>
<p> </p>
<h3>In-Line JavaScript</h3>
<p>If you are calling a Script Filter with parameters or if you are calling your filter on a non-reference field, your Scripted Filter (as well as limited JavaScript) can be called in-line in the condition builder using the &#34;is&#34; operator. While this can be done with no development, the functionality is limited and use of this technique creates support and maintenance challenges.</p>
</div>
<div>
<p>From Jakarta onward, &#34;while&#34; loops are not supported in the Sandbox scope in which In-Line JavaScript is executed.</p>
</div>
<div>
<p> </p>
<table style="border: 1pt solid #a3a3a3;" title="" border="1" summary="" cellspacing="0" cellpadding="0"><tbody><tr><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;">
<p><strong>Pros</strong></p>
</td><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;">
<p><strong>Cons</strong></p>
</td></tr><tr><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;">
<p>No development needed</p>
</td><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;">
<p>Limited functionality due to sandboxed scoped</p>
</td></tr><tr><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;"> </td><td>Exposed logic that must be maintained in every instance where it is used</td></tr><tr><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;"> </td><td>Requires user to type in the JavaScript correctly</td></tr><tr><td style="padding: 4pt 4pt 4pt 4pt; border: 1pt solid #a3a3a3;"> </td><td>Requires knowledge of JavaScript</td></tr></tbody></table>
<p> </p>
<p>* If calling JavaScript functions directly without using a Scripted Filter</p>
<p> </p>
<p>You may see this in older ServiceNow examples, but with the introduction of Dynamic Filter Options in Dublin, this technique should be avoided if at all possible.</p>
<p> </p>
<h1>Use Case Walk-Throughs</h1>
<p>Now it is time to get our hands dirty. Let&#39;s go through some possible solutions for the use cases we introduced above.</p>
<div class="alert alert-warning clearfix"><em class="fa fa-exclamation-triangle"> </em> Before executing any script you should thoroughly test it in your environment.   Scripts are very powerful and you must ensure that you understand what you are running before you run it.   The scripts below are intended for discussion purposes only.</div>
<p> </p>
<h2>Use Case: CIs with more than 1 active incident</h2>
<p>Without Related List Conditions, we could query all incidents and group by the CI (perhaps with a pivot). This can be time-consuming and requires us to scan all the rows to find what we are looking for. Related List Conditions allow us to have ServiceNow do the hard work for us.</p>
<ol style="margin-left: 0.375in; list-style-type: decimal;"><li>Set the table that you want to report on (cmdb_ci)</li><li>Expand the Related List Condition section</li><li>Set the Related List Condition you want to traverse (Incident -&gt; Configuration Item)</li><li>Set the count you want the filter based on, for example:
<ul><li>1, for 1 or more incidents</li></ul>
<ul><li>5, for 5 or more incidents</li><li>None, to get Cis with no related incidents</li></ul>
</li><li>Set the filter for the incidents that should be counted. We are filtering for only <strong>active</strong> incidents.</li></ol>
<p><img class="image-1 jive-image" style="width: 620px; height: 389px;" src="043b304adb1c9344e9737a9e0f9619a4.iix" alt="2018-01-25_17-31-32.png" /></p>
<p> </p>
<p> </p>
<h2>Use Case: CIs with no outages last month</h2>
<p>Here is a slight modification of our example above. The key difference is that we want Cis that have no outages last month. Without Related List Conditions, this would require some custom scripting or exporting data and manually process it offline. Now it is a simple report.</p>
<p> </p>
<p><img class="image-2 jive-image" style="width: 620px; height: 378px;" src="8d4ad886db5c17049c9ffb651f9619cd.iix" alt="2018-01-25_17-39-30.png" /></p>
<p> </p>
<p> </p>
<h2>Use Case: Active Incidents with No Active Tasks</h2>
<p>To connect to a report that you may want on a user&#39;s dashboard, we can take a variant of the example above and use a dynamic filter to make it relevant in my (the current logged in user&#39;s) day to day work.</p>
<ol style="margin-left: 0.375in; list-style-type: decimal;"><li>Use the &#34;is (dynamic)&#34; operator to allow the same report to customize itself to each user</li><li>Set the Related List Condition to find &#34;No&#34; qualifying records</li><li>Set the conditions for qualifying incidents (we are looking for No Active Incidents)</li></ol>
<p><img class="image-3 jive-image" style="width: 620px; height: 406px;" src="9873c102db141b04ed6af3231f961988.iix" alt="2018-01-25_17-54-34.png" /></p>
<h2> </h2>
<h2>Use Case: Incidents assigned to a manager</h2>
<p>If you have a flag on your user table which marks managers vs. non-managers, this can be done easily with a related list condition. For this example, we are assuming we do not have such a flag.</p>
<p> </p>
<p>First, we need a scripted filter to identify who is a manager and who is not.</p>
<p> </p>
<p>1) Create a client callable script include to identify who is a manager. Here is an example of some simple logic for this:</p>
</div>
<p> </p>
<div>
<pre class="language-javascript"><code>var CustomReportingFilters &#61; Class.create();
CustomReportingFilters.prototype &#61; {
      getAllManagers: function ()
      {
          var results &#61; []; // create an array to hold all users who are managers
          var gra &#61; new GlideAggregate(&#39;sys_user&#39;);
          gra.groupBy(&#39;manager&#39;); // we only want one row per manager
          gra.query();
          // loop through the results and add to an array
          while(gra.next())
          {
                  //gs.addInfoMessage(gra.getValue(groupField)); // some debug code to see what is happenening
                  results.push(gra.getValue(&#39;manager&#39;));
          }
          // return the array so we can use it in a condition
          return results;
      },
      type: &#39;CustomReportingFilters&#39;
};​</code></pre>
        <br />
<p>Here is what that looks like in the form:</p>
<p><img class="image-4 jive-image" style="width: 620px; height: 368px;" src="d9432c86dbd057049c9ffb651f9619d7.iix" alt="2018-01-25_18-07-02.png" /></p>
<p>Be sure to check the &#34;Client callable&#34; flag</p>
<p>2) Register a Dynamic Filter Option to make calling the script include simple</p>
<p><img class="image-5 jive-image" style="width: 620px; height: 197px;" src="2d22000edbd4db048c8ef4621f96196c.iix" alt="2018-01-25_18-10-01.png" /></p>
<p>3) Create a report that uses the Dynamic Filter Option. You should now see a new value in is(dynamic) named &#34;Managers&#34;.</p>
<p>Notice that the results of the Dynamic Filter Option are displayed in the bread crume for the filter at the top of the screen.   This helps the users know what they are getting.   Using Dyanmic Filter Options is operationally the same as having the user manually type in all of these names but provides a much better user experience and is dynamic as these values change.</p>
<img class="image-6 jive-image" style="width: 620px; height: 309px;" src="79f3218edbdc13043eb27a9e0f961902.iix" alt="2018-01-26_12-28-02.png" /><br />      
<p><strong>Similar Use Case</strong> - This technique can be used to return sys_ids based on any logic you want. For instance, instead of identifying users who are listed as a manager, we could also build an array of everyone that works for me using a recursive loop. If I add this function to my CustomReportingFilters and register it as a Dynamic Filter Option, I can provide this filter as well.</p>
<p> </p>
<div class="alert alert-warning clearfix">Depending on the data in your instance, this may not be something you want to enable due to potential performance issues.   There are other ways to solve this issue   (such as materializing the hierarchy on the record as a list field) which may be better for your environment.</div>
</div>
<p> </p>
<div>
<pre class="language-javascript"><code>getMyEmployees: function (manager)
    {
        var emps &#61; [];
        var lastEmps &#61; [];
        var hasEmps &#61; true;
        var arrayUtil &#61; new ArrayUtil();
        // add in manager as a seed
        lastEmps.push(manager);
        while (hasEmps)
        {
            var gr &#61; new GlideRecord(&#39;sys_user&#39;);
            gr.addQuery(&#39;manager&#39;, &#39;IN&#39;, lastEmps); //arrayUtil.diff(lastEmps, emps));
            gr.addQuery(&#39;sys_id&#39;, &#39;NOT IN&#39;, emps);
            gr.query();
          	//clear our lastEmps
            if (gr.hasNext() &#61;&#61; 0) {
                hasEmps &#61; false;
            }
            lastEmps &#61; [];
            while (gr.next())
            {
                //emps.push(gr.getValue(&#39;sys_id&#39;));
                lastEmps.push(gr.getValue(&#39;sys_id&#39;));
            }
          emps &#61; arrayUtil.union(emps, lastEmps);
        }
      	emps &#61; arrayUtil.union([manager], emps);
        return emps;
    },</code></pre>
<p>Then you can register this as a personalized Dynamic Filter Option with this script:</p>
<pre class="language-javascript"><code>new CustomReportingFilters().getMyEmployees(gs.getUserID());</code></pre>
<h2>Use Case: Users in my assignment group with no active incidents assigned to them</h2>
<p>Here we take the &#34;No&#34; Related List Condition and combine it with some additional filters to get something that helps me in my day to day work. This could be a useful report to have on a manager&#39;s dashboard to help focus available resources.</p>
 
<p>1) Create a client callable script include that gets all the users that report to that person through N levels of hierarchy.</p>
</div>
<p> </p>
<div>
<p>If you are using the previous examples as well, be sure to give your script include a unique name or put this function in an existing script include (CustomReportingFilters).</p>
<p> </p>
<p>2) Create a report where:</p>
<p>        a) Call the script include to get the list of users we need to look at.</p>
<pre class="language-javascript"><code>javascript:new CustomReportingFilters().getUsersInGroups(gs.getUserID());</code></pre>
<p>        b) Use Related List Conditions to find those with no active incidents.</p>
</div>
<p><img class="image-7 jive-image" style="width: 620px; height: 401px;" src="e9c58dcadb90130468c1fb651f96192b.iix" alt="2018-01-26_14-14-58.png" /></p>
<h1>Conclusion</h1>
<p>Reporting in ServiceNow is incredibly powerful but with the addition of Related List Conditions, it is even more so. Knowing how to apply them can help you focus in on more actionable reports for you and your users.</p>
<p> </p>
<p>When Related List Conditions still aren&#39;t enough, Scripted Filters and Dynamic Filter Options let you encapsulate incredibly complex logic and unleash the NOW Platform in a way that is easy to consume by your users.</p>