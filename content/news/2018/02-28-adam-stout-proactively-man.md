---
title: "Proactively Manage Configuration Issues with Analytics Diagnostics"
date: 2018-02-28T05:06:43.000Z
authors: ["Adam Stout"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=f7396625db68dbc00e3dfb651f961903"
---
<p>This article is targeted towards Performance Analytics administrators, both old and new. In fact, the less experience you have as an administrator, the more important it is you read this article.</p>
<h1><strong>Introduction</strong></h1>
<p>If you haven’t read the <a href="https://docs.servicenow.com/bundle/kingston-release-notes/page/release-notes/family-release-notes.html" rel="nofollow">full release notes for the Kingston release</a> yet or even just the specific enhancements to <a href="https://docs.servicenow.com/bundle/kingston-performance-analytics-and-reporting/page/use/performance-analytics/concept/c_performanceAnalyticsAndReporting.html" rel="nofollow">Performance Analytics &amp; Reporting</a>, I highly suggest you grab a cup of coffee (or tea!) and give them a read. There are some great user-facing enhancements like <a href="https://docs.servicenow.com/bundle/kingston-performance-analytics-and-reporting/page/use/performance-analytics/concept/text-analytics-widgets.html" rel="nofollow">Text Analytics</a> and using <a href="https://docs.servicenow.com/bundle/kingston-performance-analytics-and-reporting/page/use/performance-analytics/concept/pa-external-data.html" rel="nofollow">Performance Analytics with external data</a>, but my personal favorite is the <a href="https://docs.servicenow.com/bundle/kingston-performance-analytics-and-reporting/page/use/performance-analytics/concept/self-diagnostics.html" rel="nofollow">Analytics Diagnostics</a> feature — a new capability designed to make life easier for you, the Performance Analytics administrator. How can you not appreciate that?</p>
<h1>About Analytic Diagnostics</h1>
<p> The building block design of Performance Analytics allows you to quickly create and iterate on your implementation, but it also means it can hard to identify why something is broken.</p>
<p>Well, that isn&#39;t exactly true — it <em>was</em> hard, but that is no longer the case. In Kingston, we now have <a href="https://docs.servicenow.com/bundle/kingston-performance-analytics-and-reporting/page/use/performance-analytics/concept/self-diagnostics.html" rel="nofollow">Analytics Diagnostics</a> which allows the instance to inspect itself for potential issues before a user even submits an incident. This proactive approach both reduces user frustration and saves you time because you’re able to correct the identified issues before users notice.</p>
<h1>How It Works</h1>
<p>There are 35 different symptoms (referred to as diagnostics) categorized into three different severity levels: Information, Warning, and Error. Observations like an unused indicator source will be flagged as Information while an invalid field in a script — an issue far more likely to be impacting users — will be categorized as an Error.</p>
<p>These diagnostics run on a weekly basis by default, but you can also execute the tests on demand. Simply click on &#34;Execute All&#34; and let your instance go to work for you. In most cases, this schedule should be good to keep your analytics in good working order but I like to run the “Execute All” after any major change has been deployed to the instance.</p>
<p><img style="width: 80%: height: auto;" src="sys_attachment.do?sys_id&#61;195d485ddb7413004fc2f4621f9619c6" /></p>
<p> </p>
<p><br />A new record in Diagnostic Executions will summarize the findings once your job has completed.</p>
<p><img style="width: 80%: height: auto;" src="sys_attachment.do?sys_id&#61;d55d485ddb7413004fc2f4621f9619c7" /></p>
<p> </p>
<p>You&#39;ll find all of the issues you need to review when you click on the most recent execution.</p>
<p><img style="width: 80%: height: auto;" src="sys_attachment.do?sys_id&#61;955d485ddb7413004fc2f4621f9619c8" /></p>
<p> </p>
<p>Clicking on any diagnostic result will display additional details and actionable information about how to resolve the problem.</p>
<p><img style="width: 80%: height: auto;" src="sys_attachment.do?sys_id&#61;555d485ddb7413004fc2f4621f9619c9" /></p>
<p> </p>
<p>You’re welcome to use any troubleshooting approach, but I’ll share how I personally process the fields on this screen: </p>
<p>1) <strong>Message: </strong>The specific diagnostic problem or symptom identified by the job<br />2) <strong>Problem Record:</strong>  The specific object with an issue (with a reference to it)<br />3) <strong>Solution Description:</strong> How I can fix the problem <br />4) <strong>State:</strong> Tracks if this diagnostic has already been reviewed and corrected</p>
<div>
<div>Once I work through my list, I can be confident I have a healthy instance. Proactively addressing these problems allows me to spend time adding value to my customers by creating new analytics and visualizations instead of chasing problems one at a time.</div>
<div> </div>
</div>
<h1>Conclusion</h1>
<p>Most customers just want more and more once they get a taste of Performance Analytics, but it does become a lot to keep your eye on as we add new functionality each release. Analytics Diagnostics was implemented with the power of the Now Platform to help you overcome this specific challenge.</p>
<p>If you have upgraded to Kingston and haven&#39;t reviewed the diagnostics results on your instance I think you know what you need to do. And if you haven&#39;t upgraded to Kingston, what are you waiting for?</p>