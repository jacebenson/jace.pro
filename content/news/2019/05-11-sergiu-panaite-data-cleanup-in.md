---
title: "Data cleanup in ServiceNow"
date: 2019-05-10T18:02:50.000Z
authors: ["sergiu.panaite"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=52cdbec6dbd57fc8d58ea345ca9619ea"
---
<p>As part of the Support &amp; Operations organisation I&#39;ve seen lots of customers opening cases to ServiceNow support for help in data cleanup. Most of the time the main complain from customer is that &#34;cleanup via UI is very slow&#34; and can ServiceNow do it directly from backend side!</p>
<p>Well, before we go into a discussion which option is better let me give an insight on what happens when we cleanup a table. </p>
<p>Let&#39;s assume accidentally we&#39;ve inserted into User table (sys_user) one million bad users that would need to be removed as these records are now creating performance issues when loading the list of users or searching users, etc. Most of the time the cleanup script I&#39;ve seen used looks a bit like this:</p>
<pre class="language-javascript"><code>var gr &#61; new GlideRecord(&#39;sys_user&#39;);
gr.addEncodedQuery(&#39;u_nameISEMPTY&#39;);    //just for example purposes 
gr.query();

while (gr.next()){
  gr.deleteRecord();
}</code></pre>
<p> </p>
<p>In the ideal case, if these users are not referenced anywhere and assuming the tables that have references to User table do have indexes on those reference fields the deletion should happen relatively fast. </p>
<p>What usually happens in reality that slows down a lot the cleanup process is the following:</p>
<p>1. There are a lot of tables that have references to User table - all these tables need to be updated part of the cascade operation</p>
<p>2. The referencing tables do not have an index on the field that points to User table - this is usually one of the points that causes most of the slowdown of the entire cleanup. Not having an index on that field means we need to scan the entire table to find out if there are rows with that column pointing to the user we want to delete. By default our platform creates an index for any reference field on a table. In certain scenarios it may be that we run out of indexes on that table and any new reference field created won&#39;t get an index automatically anymore. This particular scenario is usually resolved by ServiceNow analysing the table and seeing if certain unused indexes can be dropped to make room for new ones.</p>
<p>3. The table where we delete the data from is part of a hierarchy (ex: <strong>cmdb_ci_server_hardware -&gt; cmdb_ci_server -&gt; cmdb_ci_computer -&gt; cmdb_ci_hardware -&gt; cmdb_ci -&gt; cmdb</strong>). If the hierarchy is large the cascade can also take time.</p>
<p>4. The table is audited and included in the rollback context (for more information see <strong><a title="Roll back and delete recovery" href="https://docs.servicenow.com/bundle/madrid-platform-administration/page/administer/table-administration/concept/rollback-delete-recovery.html" rel="nofollow">Roll back and delete recovery</a></strong>). This can add additional time on the deletion process and customers should really disable Audit Delete and Rollback if not needed on that particular case. They can always be re-enabled after.</p>
<p> </p>
<p>What challenges ServiceNow support has when we are being asked to do a manual cleanup directly from the backend:</p>
<p>- we need to understand all the relations between the table we delete data from and the referencing tables</p>
<p>- we need to manually update (the cascade part) all the relations involved in the data we delete</p>
<p>- we need to map the delete operation from the UI to direct SQL statements</p>
<p> </p>
<p>The steps outlined above can take time and things can easily be missed with an undesired outcome after the cleanup (orphaned records/etc). Because of that it is always better that cleanups are performed from the UI and possibly using a <a title="Schedule a script execution" href="https://docs.servicenow.com/bundle/madrid-platform-administration/page/administer/reference-pages/task/t_ScheduleAScriptExecution.html" rel="nofollow">Schedule a script execution</a> where the cleanup would be done by a job under a worker and would not impact directly the user session (as opposed to running the cleanup from Background Scripts - this is also possible for small cleanups).</p>
<p>If you are constrained by time rather than using <strong>GlideRecord</strong> <strong>deleteRecord()</strong> or <strong>deleteMultiple()</strong> methods to do the cleanup which are doing an iterative delete (either record by record or small chunks of records) you can use another method via <strong>GlideMultipleDelete</strong> class but be aware that this will bypass all GlideRecord related mechanisms including business rules, auditing, engines, etc and is not really preferred/supported way from ServiceNow.</p>
<p> </p>
<p>So, in conclusion:</p>
<p>1. When time limit is not a major concern the preferred way of cleanup would be using a script as in the following example:</p>
<p> </p>
<pre class="language-javascript"><code>cleanupData();

function cleanupData(){
  try {
    var gr &#61; new GlideRecord(&#39;sys_user&#39;);
    gr.addEncodedQuery(&#39;u_nameISEMPTY&#39;);
    gr.setWorkflow(false);
    //gr.query(); method is not really needed when calling deleteMultiple()
    gr.deleteMultiple();
 } finally {
    gs.log(&#34;Cleanup finished&#34;);
 }
}</code></pre>
<p> </p>
<p>2. When time limit is a major concern you can use <strong>GlideMultipleDelete</strong> way using a script as in the following example (use it at your own risk though):</p>
<p> </p>
<pre class="language-javascript"><code>cleanupData();

function cleanupData(){
  try {
    var md &#61; new GlideMultipleDelete(&#39;sys_user&#39;);
    md.addQuery(&#39;u_name&#39;, &#39;NULL&#39;);
    md.execute();
  } finally {
    gs.log(&#34;Cleanup finished&#34;);
  }
}</code></pre>
<p> </p>
<p>For additional information:</p>
<p>- things to consider before deleting data - have a look in our HI application at <a title="Things to consider before deleting data" href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0726509" rel="nofollow"><strong>KB0726509</strong></a>.</p>
<p>- other ways to do a proper cleanup - have also a look in our HI application at <strong><a title="Mass-Deletion and Excess Data Management Guide" href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0717791" rel="nofollow">KB0717791</a></strong>.</p>
<p> </p>
<p>Hope this helps.</p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>