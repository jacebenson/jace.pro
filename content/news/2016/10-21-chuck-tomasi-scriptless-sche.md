---
title: "Scriptless Scheduled Jobs"
date: 2016-10-21T00:42:05.000Z
authors: ["Chuck Tomasi"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ae9caee1dbd0dbc01dcaf3231f96193d"
---
<p><span style="font-size: 14pt;"><strong>Note</strong></span></p>
<p><span style="font-size: 10pt;">This solution was created prior to <a href="https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/administer/flow-designer/concept/flow-designer.html" target="_blank" rel="noopener noreferrer nofollow">Flow Designer </a>being released. I strongly suggest you use Flow Designer for no-code scheduled jobs over this solution.</span></p>
<p><span style="font-size: 14pt;"><strong>Description</strong></span></p>
<p>Enable your no-code and low-code developers to create solutions to commonly scheduled tasks. With no scripting, you can select and update a set of records on a table, trigger notifications, and more. If the scriptless solution doesn&#39;t completely answer your questions, check &#34;Advanced&#34; and get a head start on your JavaScript code to unleash the power of your low-code and pro-code developers. </p>
<p>How this never made it in to the platform before today, I don&#39;t know. I was tinkering around with another project and asked myself &#34;How do scriptless business rules work?&#34; With a little reverse engineering and a few emails to my friends in development I was able to marry that with the condition field to come up with this solution. </p>
<p><span style="font-size: 14pt;"><strong>Common use cases</strong></span></p>
<ul><li>Send approval reminders if not approved in 7 days</li><li>Cancel approvals after 30 days</li><li>Send Knowledge base article reminders 30 days before expiration</li></ul>
<p><span style="font-size: 14pt;"><strong>Download</strong></span></p>
<ul><li><a title="https://developer.servicenow.com/app.do#!/share/contents/6249193_scriptless_scheduled_jobs?v&#61;1.01&amp;t&#61;PRODUCT_DETAILS" href="https://developer.servicenow.com/app.do#!/share/contents/6249193_scriptless_scheduled_jobs?v&#61;1.01&amp;t&#61;PRODUCT_DETAILS" target="_blank" rel="noopener noreferrer nofollow">ServiceNow Share Portal: Scriptless Scheduled Jobs</a></li><li>After committing the update set, Navigate to System Definition&gt; Fix Scripts and run the fix script &#34;Update Scheduled Jobs&#34;</li></ul>
<p><span style="font-size: 14pt;"><strong>Compatibility</strong></span></p>
<ul><li>October 20, 2016: Tested with Helsinki P4 and Istanbul (pre-release)</li></ul>
<p><span style="font-size: 14pt;"><strong>Explanation/Demonstration Video</strong></span></p>
<center><iframe src="https://www.youtube.com/embed/lrs20pIn0Z8"></iframe></center>