---
title: "Why Demands Dont Output Stories"
date: 2018-11-14T22:51:18.000Z
authors: ["Robert Fedoruk"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=d7a0d8d1db71e3406c1c02d5ca961932"
---
<p>I recently replied to a demand management question that I also had for ages.  Thought it might be a suitable blog for ITBM newcomers who are also familiar with SN&#39;s previously stand-alone agile paradigms.</p>
<h1><br />&#34;WHY DON&#39;T DEMANDS OUTPUT STORIES?&#34;</h1>
<p>There are 4 potential outputs from an OOB demand, based on the <strong>Category</strong> and <strong>Type</strong></p>
<p><img class="community_image_fullscreen" src="0755ab45db356740656a5583ca961996.iix" /></p>
<p><img class="community_image_fullscreen" src="9a75a385db356740656a5583ca96191c.iix" /></p>
<p> </p>
<p>Strategic &#43; Enhancement creates an <strong>Enhancement</strong> record<br />Strategic &#43; Project creates a <strong>Project</strong> record<br />Operational &#43; Change creates a <strong>Change</strong> Request record<br />Operational &#43; Defect creates a <strong>Defect</strong> record.</p>
<p> I see the question a lot, and I used to ask it myself: why not output to stories from demand?</p>
<p><strong>1) There is no assumption of Agile adoption</strong><br />Stories, sprints, releases operate very specifically.  By outputting demands to Enhancements / Defects, SN allows customers to work outside the Agile framework until culture &amp; process for the adoption.  But even without agile adoption, you still need an output to represent non-project build &amp;/or fix activity.</p>
<p><strong>2) Demand Managers aren&#39;t Product Owners<br /></strong>Stories are groomed in ways Demands aren&#39;t.  Story description, acceptance criteria, and sizing, are generally handled by product owners and the dev teams involved.  This means ANY output from demand that goes through non-project agile teams are very likely going to endure heavy edits.  Enhancement/Defect layer provides an exit point for demand, without polluting agile team work streams.</p>
<p><strong>3) Demand Assumes Single Output, Agile Does Not</strong><br />Many times what leaves Demand and becomes an Enhancement/Defect will be composed of multiple components of work.  There&#39;s simply no telling how many stories will result from an approved demand.  The Enhancement / Defect layer allows you to tie all story based Dev efforts to link back to a single exit from Demand.</p>
<p> </p>
<p> </p>