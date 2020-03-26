---
title: "Planning Console Admin Guide"
date: 2018-10-11T02:55:14.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=9696c54adb49ab80fff8a345ca961910"
---
<p style="color: #000000; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;">The <a href="https://docs.servicenow.com/bundle/london-it-business-management/page/product/project-management/concept/c_TheProjectPlanningConsole.html" target="_blank" rel="nofollow">planning console</a> is the visual <a href="https://docs.servicenow.com/bundle/london-it-business-management/page/product/project-management/concept/c_GanttChart.html" target="_blank" rel="nofollow">Gantt Chart</a> representation of a project entity, used to illustrate a schedule timeline in an efficient manner. This article is a working guide for administrators in charge of configuring and managing the planning console.</p>
<p style="color: #000000; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;">In order to <a href="https://docs.servicenow.com/bundle/london-it-business-management/page/product/project-management/task/t_OpenPlanningConsole.html" target="_blank" rel="nofollow">open a planning console from a project</a>, follow the steps below:</p>
<ol style="list-style-position: inside;"><li>Navigate to: <strong>Project &gt; Projects &gt; All</strong></li><li>Open a <strong>Project</strong> record</li><li>Go under <strong>Related Links</strong></li><li>Open the <strong>Planning Console </strong>Related Action</li></ol>
<p> </p>
<h2>Column metadata and configuration</h2>
<p style="color: #000000; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;"><u></u>The column definitions are stored as part of the following tables:</p>
<p style="color: #000000; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;"><img src="9426010adb49ab80fff8a345ca961907.iix" /></p>
<h2>Common issues and frequently asked questions on the planning console</h2>
<p><strong>How to add a new column to a planning console</strong></p>
<ul class="ul1"><li>Open the Planning Console Column configuration for the entity (say Project)</li><li>Create a new Display Column with Type equivalent to DB Column Type</li><li>Create new Columns under the Display Columns for each Planning Console Table(s) to render from.</li></ul>
<p><strong>How to include/add a new table to a </strong><strong>planning console </strong><strong>when having another child table (like Project Task) where you want get those tasks included in the planning console (under the Project)</strong></p>
<ul class="ul1"><li>Check if the Table extends Planned Task Table.</li><li>If No, we will not be able to render as it requires Planned Start Date, Planned End Date and Planned Duration Columns.</li><li>If Yes, Table extends Planned Task Table</li><li>
<ul class="ul1"><li>Open the Planning Console Column configuration for the entity (say Project)</li><li>Create a Table and Provide the relation column</li><li>For Each of the Display Column(s), Create a Column definition for the same.</li></ul>
</li></ul>
<p><strong>How to use Project Planning for a different department with data seclusion.</strong></p>
<ul class="ul1"><li>
<p>Refer to Teamspace(s). Please note currently we have a max limit of 5 Teamspaces.</p>
</li></ul>
<p><strong>Are Teamspaces charged separately?</strong></p>
<ul class="ul1"><li>
<p>No.</p>
</li></ul>
<p><strong>Unable to view data in the planning console</strong></p>
<ul class="ul1"><li>Contact SN support to debug the Planning Console Gantt Data.</li><li>It is advisable to check the correctness of a project through the <strong>Project Diagnosis Tool</strong> related link in the Project form.</li><li>Check if the Column Configuration are correctly defined. No duplicates</li><li>
<p>Check the Column Configuration Types are correctly matching.</p>
</li></ul>
<p><strong>Unable to view the columns</strong></p>
<ul class="ul1"><li>
<p>Make sure the column configuration is correctly seeded.</p>
</li></ul>
<p><strong>Unable to edit the column</strong></p>
<ul class="ul1"><li>
<p>Check if the column is editable in column configuration.</p>
</li></ul>
<p><strong>ACLs are not getting honored</strong></p>
<ul class="ul1"><li>Access rules are evaluated at the time of page submission.</li><li>Make sure the Row Level and Column Level ACLs are defined correctly.</li></ul>
<p style="color: #000000; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;">For more details on the planning console, including steps on implementing the planning console on a custom table, refer to the <a href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0714565" target="_blank" rel="nofollow">Planning Console Admin Guide (KB0714565</a>).</p>