---
title: "Coaching Loops  The best and most underrated plugin for Continuous Improvement"
date: 2018-02-19T14:22:28.000Z
authors: ["Shiva Thomas"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=bc2212f2dbd897044e1df4621f9619f8"
---
<p><img style="max-width: 100%; max-height: 480px;" src="11223cafdb509f444e1df4621f9619be.iix" /></p>
<h1>Coaching Loops</h1>
<p>Possibly the most underrated, poorly documented, yet incredibly useful ServiceNow plugin!</p>
<p>If you are looking for a way to improve the learning speed of new hires, train whole groups to learn new process or simply make fulfillers better at their jobs, you&#39;ll be interested by the Coaching loops functionality.</p>
<p>When you want to improve a team of fulfillers, you can put satisfaction surveys in place, have yearly training events or do some coaching during the yearly performance review.  Those very common methods, may not the most efficient tool to use. Let me explain why…</p>
<p><strong>Satisfaction surveys</strong> allows end users to give feedbacks, but those are not focused on improving the quality of service. They don&#39;t contain professional advice for the fulfiller.</p>
<p>Yearly <strong>training events</strong> are nice, but they are classroom events, where the teacher is usually not aware of the strengths and weaknesses of the individual fulfillers. Even if it was the case, the teacher often doesn&#39;t have opportunity to focus on individuals.</p>
<p>During <strong>performance reviews</strong>, if the manager or team leader is well prepared, he can give good feedbacks to the fulfiller, but those reviews happens only every six or twelve months. This is not frequent enough to improve efficiently. Would you be comfortable with a school where the only exams are at the end of the year?</p>
<p><strong>Coaching loops</strong> are the ITIL way to implement continuous improvement for fulfillers. For each element of a process that you want to improve (aka <strong>coaching discipline</strong>), you need to select workers to be trained (a <strong>coachee group</strong> of learners) and experts that will assess the coachees (<strong>coaching group</strong> of trainers).</p>
<p>Coaching loops use continuous assessments. They contain advice from an expert (typically a team leader) about a very recent event (a ticket that have just been modified or closed) and therefore <strong>they provide the fastest improvement ratio via the best coaching efficiency</strong>. Coaching has to be an iterative, ongoing process. Irregular appraisals are not efficient. This is the same approach that professional coaches use on Olympic athletes!</p>
<p>To avoid strains on coaches, you can specify clever triggers like those available in satisfaction surveys. Examples would include limiting the triggering a coaching assessment for each fulfiller to once per week (excluding the newest hire) or define that only 10% of coaching opportunities should generate real assessments.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="0632f4efdb509f444e1df4621f96198b.iix" /></p>
<p>First you need to decide areas that could be improved in your process. As an example, let&#39;s say you want to check that your Service Desk (the coachees) correctly set the affected Configuration Item when working on Incidents. If you change the Configuration Item field to be mandatory on ticket closure, you may find that many technicians won&#39;t bother to select the relevant CI. They will select a random or very generic CI, impeding your capacity to detect recurring issue on problematic Configuration Items. In that case we could define this as a nice opportunity to use coaching loops.</p>
<p>Other use cases would be to train your Service Desk to write better work notes when escalating incidents to a second level group or to train your admins to use your naming convention in update sets.</p>
<p style="text-align: right;"><img style="max-width: 100%; max-height: 480px;" src="60523863db909f444e1df4621f9619c6.iix" /><br /><em>Coaching Loops implement the Kepner-Tregoe&#39;s Performance System</em></p>
<p style="text-align: left;">From my perspective, this underrated plugin is deserved by a poor documentation, so let&#39;s dive in implementing one real world example.</p>
<p style="text-align: left;"> </p>
<h1>Activating the plugin</h1>
<p>It as simple as going to &#34;System Definition&#34; &gt; &#34;Plugins&#34; and activate the &#34;Coaching Loops&#34; plugin. Like most plugins there is no activation cost.</p>
<p>By default, its configured to coach a Service Desk, so it adds four modules to the Service Desk application. You may of course use them for other processes and create similar links in other places.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="7d727ce3db909f444e1df4621f96190d.iix" /></p>
<h1><br />Creating a Coaching Discipline</h1>
<p>A coaching discipline can be any area of improvement in one of your processes. Let&#39;s create one as an example. In this case we want to improve the quality of the Service Desk&#39;s answers for incidents.</p>
<p>First, we&#39;ll have to name the coaching discipline, select its table, and add some optional conditions (maybe critical incidents are coached by another expert? In this case it would be another discipline). The assessment duration also need to be defined.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="7aa23067db909f444e1df4621f961966.iix" /></p>
<p> </p>
<p>We set coachee and coaching groups, including optional peers for extra review.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="37b23c27db909f444e1df4621f96194c.iix" /></p>
<p> </p>
<p>Then we specify how often we want the discipline to be assessed.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="65d2382bdb909f444e1df4621f9619ea.iix" /></p>
<p> </p>
<h1>Creating a Coaching Opportunity</h1>
<p>For the system to work, you need to define a Discipline AND an Opportunity. A coaching opportunity is an area within a process where a coachee can be coached, as to improve the process efficiency. For incidents management, it could be steps like &#34;First Response&#34;, &#34;Categorization&#34;, &#34;Quality of Investigation&#34;, &#34;Knowledge Transfer for Escalation&#34;, or &#34;Proposed Solution&#34;.</p>
<p>Here is an example for &#34;Categorization&#34;: When an incident is closed with no Business service set, we trigger a coaching opportunity. The coach, maybe the Service Desk team leader, will have to check if this information has been omitted by negligence, or if it&#39;s really not relevant for the current incident.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="71e2b06bdb909f444e1df4621f96190e.iix" /></p>
<h1><br />The platform creates Coaching Assessments</h1>
<p>Each time a record is updated, the system will check if it can find a matching discipline and opportunity. If both a present, the system may create an assessment, depending of the configuration you set in the discipline. If every opportunity creates an assessment, it may be too much work for the coaches… So, you may define that only some percentage of the opportunities triggers a new assessment.</p>
<p>Let&#39;s have a look at an actual assessment record. From the form, you can review the record that triggered the assessment. The snapshot field contain the coaching guidelines you defined in the opportunity.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="bef2f86bdb909f444e1df4621f961906.iix" /></p>
<p> </p>
<p>The coachee then assess the fulfiller and what kind of followup could be needed for additional guidance.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="f303b0abdb909f444e1df4621f9619ca.iix" /></p>
<p> </p>
<p>The coach may provide advice for the coachee and justify the assessment rating.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="922370ebdb909f444e1df4621f961912.iix" /></p>
<p> </p>
<p>Once the assessment is complete the coachee may re-open it if he/she contest the decision.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="a333b8ebdb909f444e1df4621f961907.iix" /></p>
<p> </p>
<p>Now you know how to install and use the Coaching loops plugin. To conclude this article, here are a few additional bullet points.</p>
<p> </p>
<h1>Technical Tips &amp; Tricks</h1>
<ul><li>Every record update starts a search for a matching opportunity, then for a matching discipline. If both are found, triggering an assessment is considered.</li><li>The system is NOT able to trigger multiple Assessments should several discipline /opportunity be matched by a record update. <strong>It will stop at first match</strong>.</li><li>For non <em>itll</em> coachees, you need to assign the role <em>cl_user</em>.</li><li>Since coachees are already fulfillers, there&#39;s no extra licensing cost.</li><li>You can use the coaching process on tables that do not extend the Task table. Duplicate the business rule &#34;<em>Coaching Opportunity creator for Task</em>&#34;, specify a new table, make any other required changes, and save the new Best regards, under a new name. </li></ul>
<p> </p>
<h1>Improvements ideas</h1>
<p>Coaching Loop are available since 2012 but have never been updated after the first release. I learned that ServiceNow recently assigned a new product owner the plugin. I&#39;m quite excited over the possibility that this amazing plugin could be given more attention over a new and improved release!</p>
<p>In the meantime, here is some improvements you can do on your own instance:</p>
<ul><li>Add relevant mouse-over Hints and guidance to the assessment form fields.</li><li>Create an interactive Guided Tour, to ensure that users understand what continuous coaching is and how to use the assessments.</li><li>Make Short Description mandatory.</li><li>Add Activity History to the form.</li><li>Update the Work Note field Type from &#34;Journal Input&#34; to &#34;Journal&#34; (for consistency with UI16).</li></ul>
<p> </p>
<h1>History and Usage</h1>
<ul><li>This plugin is from 2012 and have never been updated since.</li><li>This gem received little publicity and is possibly the most useful AND most under-used plugin.</li><li>Use this to gamify your team&#39;s performance.</li><li>Think outside ITIL and apply this to all kind of task-based process.</li></ul>
<p> </p>
<h1>Sources</h1>
<ul><li><a href="community?id&#61;community_blog&amp;sys_id&#61;9e4d6229dbd0dbc01dcaf3231f961907" rel="nofollow">Unofficial Coaching Loops White Paper</a> by Simon Morris (2012)</li><li><a href="community?id&#61;community_question&amp;sys_id&#61;92c80b61db5cdbc01dcaf3231f9619d5" rel="nofollow">A ServiceNow presentation on Coaching loops</a> by Martin Pscheidl (2016)</li><li><a href="https://docs.servicenow.com/bundle/kingston-it-business-management/page/product/coaching-loops/concept/c_CoachingLoops.html" rel="nofollow">Official ServiceNow Documentation</a></li><li>Two posts in the Communities web site:</li><li>
<ul><li><a href="community?id&#61;community_blog&amp;sys_id&#61;914ee2addbd0dbc01dcaf3231f96199f" rel="nofollow">Put me in, Coach! - Using Coaching Loops</a></li><li><a href="community?id&#61;community_question&amp;sys_id&#61;451fcfa1dbdcdbc01dcaf3231f9619f0" rel="nofollow">Coaching Loops Open Forum</a></li></ul>
</li></ul>
<p> </p>
<h1>Bonus PowerPoint presentation</h1>
<p>The illustrations from this article come from a presentation I made for my local ServiceNow User Group in November 2017. You&#39;re welcome to download it and freely re-use the slides as you want, they are attached to this post.</p>
<ul><li>Coaching Loops Presentation in PowerPoint format </li><li>Coaching Loops Presentation in PDF format</li></ul>