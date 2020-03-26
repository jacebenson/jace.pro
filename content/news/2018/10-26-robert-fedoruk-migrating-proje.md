---
title: "Migrating Projects to ServiceNow  Mass Baselines"
date: 2018-10-25T22:11:17.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=0d75117edb5563c0107d5583ca961948"
---
<p>I&#39;m spending significant time researching easier ways to migrate projects from other systems into ServiceNow.  Usually a fundamental difference in how constraints, schedules, and/or predecessor &amp; successor relationships are handled causes schedule &#34;shift&#34; after migration.  </p>
<p>With SN&#39;s MSProject importer, projects are imported clean, but set to Manual calculation.  Switching to Automatic can cause significant schedule shift (usually because &#34;START ASAP&#34; constraint type works).  So how can we best prepare a PMO to import projects, keep them *automatic*, and make them precisely aware of what WBS components need repair?  Baselining!</p>
<p>Problem?  Any more than a handful of projects, and Baselining is going to be <span style="text-decoration: underline;"><strong>really</strong></span> labor intensive.</p>
<h1>BASELINE BY SCRIPT INSTEAD</h1>
<p>I deconstructed the Create Baseline UI Action for a script that allows you to baseline many Projects at once.  For now, this is just a background or a repair script.  In the future I&#39;ll make it a more fully fleshed out List Bottom Button UI Action.</p>
<p> </p>
<pre class="language-markup"><code>//FILTER LIST OF PROJECTS YOU WANT BASELINED
//COPY &amp; PASTE THE ENCODED QUERY INTO THE QRY VARIABLE

var qry &#61; &#39;&#39;; //MUCHOS IMPORTANTE! PASTE ENCODED QUERY HERE
createBaselines(qry);

function createBaselines(query_set) {
  baseline_name &#61; &#34;List Baseline - &#34; &#43; gs.nowDateTime();
  baseline_description &#61; &#34;Multi project baseline taken on &#34;  &#43; gs.nowDateTime() &#43; &#34; by &#34; &#43; gs.getUser().getDisplayName();;
  
  //Get TopTasks
  var topTask &#61; new GlideRecord(&#39;pm_project&#39;);
  topTask.addEncodedQuery(query_set);
  topTask.query();
  var counter &#61; 0;
  while (topTask.next()){
    counter&#43;&#61;1;
    createProjectBaseline(baseline_name, baseline_description, topTask.sys_id);
  }
}

function createProjectBaseline(name, description, project){
  var baseline &#61; new GlideRecord(&#34;planned_task_baseline&#34;);
  baseline.name &#61; name;
  baseline.description &#61; description;
  baseline.top_task  &#61; project;
  var baseID &#61; baseline.insert();
  baselineProjectTasks(project,baseID);
  gs.addInfoMessage(gs.getMessage(&#34;Created baseline for &#34; &#43; project);
}

function baselineProjectTasks(task_id, target_baseline){
  var tasks &#61; new GlideRecord(&#34;planned_task&#34;);
  tasks.addQuery(&#34;top_task&#34;, task_id);
  tasks.query();
  pcounter &#61; 0;
  while (tasks.next()) {
    pcounter&#43;&#61;1;
    var baseItem &#61; new GlideRecord(&#34;planned_task_baseline_item&#34;);
    baseItem.baseline &#61; target_baseline;
    baseItem.task &#61; tasks.getUniqueValue();
    baseItem.start &#61; tasks.start_date;
    baseItem.end &#61; tasks.end_date;
    baseItem.insert();
  }
}</code></pre>
<p> </p>
<h2><strong>Walkthrough</strong></h2>
<p>- You paste in an encoded query of projects you wish to baseline.  I don&#39;t assume project migrations are de-facto only projects on system.<br />- createBaselines sets the naming/description parameters for all the baselines, then gets all the Projects from your encoded query<br />- for each Project in your query, the createProjectBaseline function is run<br />- createProjectBaselines creates the actual Baseline records from the provided name/description and laucnhes baselineProjectTasks<br />- baselineProjectTasks finds all planned_tasks associated with the provided project and creates planned_task_baseline_items<br />- once baselineProjectTasks is complete, createProjectBaselines adds an info message that the currently iterated project is baselined.<br /><br /></p>