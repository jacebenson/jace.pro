---
title: "Baseline multiple Projects"
date: 2018-11-02T08:50:48.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=d5faeb49db2da7005d782183ca96191a"
---
<p>I&#39;ve made it my Q4 2018 mission to maximize project data migration between Project and ServiceNow.  You may have seen my other threads on why this is difficult:<br /><a href="community?id&#61;community_question&amp;sys_id&#61;32a4f423db7a5bc00be6a345ca961919" rel="nofollow">Start ASAP vs Specific Date on Project Import<br /></a><a class="ng-binding" href="community?id&#61;community_blog&amp;sys_id&#61;a4fb177edb6b5f4423f4a345ca96197b" rel="nofollow">The Case for Exposing &#34;Import from MS Project&#34;<br /></a><a class="ng-binding" href="community?id&#61;community_question&amp;sys_id&#61;cb00e991dbdb57805ed4a851ca96194a" rel="nofollow">Project Import Utility</a><a class="ng-binding" href="community?id&#61;community_blog&amp;sys_id&#61;a4fb177edb6b5f4423f4a345ca96197b" rel="nofollow"><br /></a><a class="ng-binding" href="community?id&#61;community_question&amp;sys_id&#61;d7e40e7ddbc79b84f7fca851ca96199a" rel="nofollow">Crash test my MSProject Import Idea<br /></a><a class="ng-binding" href="community?id&#61;community_blog&amp;sys_id&#61;a4fb177edb6b5f4423f4a345ca96197b" rel="nofollow"><br /></a></p>
<p>Its VERY difficult to import projects and convert them from Manual to Automatic without significant date drift.  To reconcile I&#39;ve developed a strategy that customers have responded positively to.<br />- Import Projects<br />- Baseline Projects<br />- Update all Projects to Automatic Processing (in the properties tab of every Project)<br />- Have PMs adjust their project timelines prior to go live.</p>
<p><strong>PROBLEM?</strong><br />The problem is &#34;baseline&#34; as a concept is something you do on *A* project.  There exists no concept of &#34;Baseline all THESE&#34; projects.  If you&#39;re like me, and you need to import 100&#43; projects prior to go live, that&#39;s a <span style="text-decoration: underline;">MASSIVE PAIN IN THE PITOOTER</span>.</p>
<p><strong>BASELINE MULTIPLE PROJECTS</strong><br />I deconstructed the Baseline UI Action and UI Page to give you a script you can use to baseline a bunch of projects at once.  In this way you can import a ton of projects, then query for Projects created after a certain date.  Use that query as a means of creating a loop to execute baselines.</p>
<p>My near term goal is to make this a UI action you can trigger on a list of selected Projects, without having to update a script manually.</p>
<pre class="language-markup"><code>var logger &#61; &#39;&#39;;
var base_name &#61; &#39;ScriptedBaseline1&#39;; //whatever you want to name the baseline
var base_desc &#61; &#39;Scripted Baseline 1&#39;; //whatever you want to describe the baseline
var filter &#61; &#34;sys_class_name&#61;pm_project^start_date&gt;&#61;javascript:gs.beginningOfToday()&#34;;
var projects &#61; new GlideRecord(&#39;pm_project&#39;);
projects.addEncodedQuery(filter);
projects.query();

while (projects.next()){
  logger &#43;&#61; &#34;Baselining &#34; &#43; projects.number &#43; &#34;\n&#34;;
  createBaseline(projects.sys_id); 
}
gs.log(logger);


function createBaseline(task_id){
  logger &#61; logger &#43; &#34;---in function \n&#34;;
  var baseline &#61; new GlideRecord(&#34;planned_task_baseline&#34;);
  baseline.name &#61; base_name.trim();
  baseline.description &#61; base_desc;
  baseline.top_task &#61; task_id;
  var baseID &#61; baseline.insert();
  
  var ptasks &#61; new GlideRecord(&#34;planned_task&#34;);
  ptasks.addQuery(&#34;top_task&#34;,task_id);
  ptasks.query();
  while (ptasks.next()){
    var baseItem &#61; new GlideRecord(&#34;planned_task_baseline_item&#34;);
    baseItem.baseline &#61; baseID;
    baseItem.task &#61; ptasks.sys_id;
    baseItem.start &#61; ptasks.start_date;
    baseItem.end &#61; ptasks.end_date;
    baseItem.insert();
  }
  logger &#61; logger &#43; &#34;---finished loop \n\n&#34;;
}
</code></pre>
<p><strong>EDIT:  set the filter variable to whatever ENCODED QUERY gets you the projects you want to baseline.</strong></p>