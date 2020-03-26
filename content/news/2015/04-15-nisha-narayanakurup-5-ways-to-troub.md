---
title: " Ways to Troubleshoot your Instance Performance"
date: 2015-04-14T22:32:59.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=a6ecae65dbd0dbc01dcaf3231f961969"
---
<p>Performance issues can be tricky, but there are various modules in ServiceNow applications that enable administrators to diagnose and <a title="ki.servicenow.com/index.php?title&#61;Troubleshooting_Performance" href="http://wiki.servicenow.com/index.php?title&#61;Troubleshooting_Performance" rel="nofollow">troubleshoot performance issues.</a> Here are some <a title="i.service-now.com/kb_view.do?sysparm_article&#61;KB0517241" href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0517241" rel="nofollow">basic troubleshooting steps to help you isolate the source of slow response times</a>. There are built in performance tools within ServiceNow</p>
<p>which administrators can make use of while addressing performance concerns from end users. As a performance expert, I use these same tools to diagnose performance issues reported to me on HI.</p>
<p><img class="image-0 jive-image" style="height: 168.029032258065px; width: 358px; float: right;" src="8e468d02db50d344e9737a9e0f961963.iix" alt="troubleshoot servicenow performance slowness.jpg" width="358" height="168" /></p>
<p><span style="font-size: 10pt; line-height: 1.5em;"> </span></p>
<p><span style="font-size: 10pt; line-height: 1.5em;">Let&#39;s start with the basic information you may need to collect from end users who are impacted. Gather details about the performance from the users, such as:</span></p>
<p><span style="font-size: 10pt; line-height: 1.5em;"> </span></p>
<ul><li>User names</li><li>What time did the issue occur</li><li>What transactions were slow? Specific steps to reproduce</li><li>Is the issue consistent?</li><li>Is it happening on all instances?</li></ul>
<p> </p>
<h1>1. Get Real-Time information on your node</h1>
<p>Real time performance metrics of the node can be found from <strong>System diagnostics &amp; Stats </strong>page. This provides real time diagnostic information of the node you are currently logged into. The average time of response at multiple intervals are available under the stats page, this gives real time memory usage of the node as well.</p>
<p> </p>
<p>Example of what your memory usage and response times from stats will look like:</p>
<p><img class="image-1 jive-image" style="height: 272px; width: 620px; display: block; margin-left: auto; margin-right: auto;" src="1734ab75db941704ed6af3231f96197f.iix" alt="node servicenow performance instance.jpg" /></p>
<p> </p>
<h1>2. Get Real-Time performance information for cluster nodes</h1>
<p>For a multi cluster environment, navigate to <strong>System Diagnostics &amp; Diagnostic page. </strong>This will provide information on the cluster nodes the instance is running on.</p>
<p>This page provides information on the status of each online and/or offline node. It will also tell you how much memory each node is using,   and if there have been any restarts on the node (JVM uptime). By clicking on the &#34;Name&#34; link for each node, it will take you the &#34;xmlstats&#34; page of the corresponding node which will provide very detailed information on the semaphore usage and scheduled workers running at the moment. The diagnostics page also provides information on the pending events on the system and email stats.</p>
<p> </p>
<p style="text-align: center;"><em>Standard configuration is 16 semaphores and 8 scheduled workers per node for production instances. <br />This helps to determine if the node is running healthy. </em></p>
<p> </p>
<p><span style="font-size: 24px; font-weight: bold; line-height: 1.5em;"> </span></p>
<p><span style="font-size: 24px; font-weight: bold; line-height: 1.5em;">3. Checking the System Logs</span></p>
<p><strong>System logs</strong> is another great place to view information about system activity and trace the transactions performed by users. There are <a title="tp//wiki.servicenow.com/index.php?title&#61;Viewing_System_Logs#System_Logs" href="http://http//wiki.servicenow.com/index.php?title&#61;Viewing_System_Logs#System_Logs" rel="nofollow">various types of system logs</a> including all user transactions, client transactions, and errors. These logs provide detailed information on response times, any errors triggered by transactions , slow queries and information on slow running jobs.</p>
<p> </p>
<ul><li><strong>Transactions (All user): </strong><a title="ki.servicenow.com/index.php?title&#61;Client_Transaction_Timings" href="http://wiki.servicenow.com/index.php?title&#61;Client_Transaction_Timings" rel="nofollow">User activities are logged and available under this module.</a> You can use the information here to trace the reported slow transaction by looking at the &#34;Response time,&#34; &#34;Created By,&#34; &#34;URL,&#34; &#34;created,&#34; and &#34;session.&#34; A time split of the response times such as sql time, client network time, browser time is also available. This will help to identify which layer   the transaction is spending the most amount of time. High SQL time can indicate long running queries.</li><li><strong>Client transactions</strong>: This log will have information only if client transaction logging is enabled, this is particularly useful in case of <a title="ki.servicenow.com/index.php?title&#61;Client_Transaction_Timings#Enabling_Client_Transaction_Logging" href="http://wiki.servicenow.com/index.php?title&#61;Client_Transaction_Timings#Enabling_Client_Transaction_Logging" rel="nofollow">network issues to identify high network times.</a></li><li><strong>Errors</strong> provide information on the errors and warnings triggered within the platform</li><li><strong>System Scheduler &gt; Slow Job Log: </strong>This module provides a transaction log filtered to show background scheduled jobs related slow transactions</li><li><strong>System Diagnostics &amp; Stats &amp; Slow Queries:</strong> Administrators can use slow query logs to gain insight into how queries are affecting platform performance.</li></ul>
<p> </p>
<p>ServiceNow provides the logging utilities where you can download/view server log files. Check under <strong>System Logs &amp; Log File Browser</strong>. User transactions can be traced on the   server logs using the session information gathered from <strong>Transactions (All users).</strong></p>
<p> </p>
<h1>4. Using the Debugger tool</h1>
<p>This is particularly useful when you are able to replicate the slowness reported by the users. By <a title="ki.servicenow.com/index.php?title&#61;Debugging_Tools_Best_Practices" href="http://wiki.servicenow.com/index.php?title&#61;Debugging_Tools_Best_Practices" rel="nofollow">enabling the debugger tool</a>, it   will print detailed information on the screen upon completion of the slow transaction. While system logs provide historic information on the slowness, the debugger tool can be effectively used on-the-go as you reproduce the issue.</p>
<p><span style="font-size: 10pt; line-height: 1.5em;"><strong> </strong></span></p>
<p>You can use the<span style="font-size: 10pt; line-height: 1.5em;"><strong> System diagnostics &amp; Session debugging </strong></span><span style="font-size: 10pt; line-height: 1.5em;">for debugging types such as   &#34;Debug SQL,&#34; &#34;Debug security,&#34; &#34;Debug business rules&#34; etc. For example, all ACL evaluations can be logged by enabling the &#34;Debug security&#34; module.</span></p>
<p> </p>
<h1>5. Troubleshooting network issues</h1>
<p>If users from specific locations are reporting slowness, it could possibly be caused by the <a title="tp//wiki.servicenow.com/index.php?title&#61;System_Performance_Best_Practices#Network_Performance" href="http://http//wiki.servicenow.com/index.php?title&#61;System_Performance_Best_Practices#Network_Performance" rel="nofollow">network issue</a>. The user must collect some basic information at a lower level than a browser. Use the information listed below to help identify if the issue originated from user&#39;s network/ISP level/ServiceNow network.</p>
<p style="text-align: center;"> </p>
<ul><li>Traceroute</li><li>Ping</li><li>IP address of the impacted users</li></ul>
<p style="text-align: center;"><span style="text-align: center;"><em>Make sure to gather this information while the issue is occurring as well as report it while submitting an incident.</em></span></p>
<p> </p>
<p>These are just a few guidelines to get you started with troubleshooting performance issues. If you have other methods or have found certain methods more useful than others I would love to hear your experiences. </p>