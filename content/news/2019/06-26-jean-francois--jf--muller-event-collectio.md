---
title: "Event collection from ThousandEyes"
date: 2019-06-25T19:04:11.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=79f408c9db5e7b40e0e80b55ca961923"
---
<p><strong>The what and why...</strong></p>
<p>ThousandEyes integration has already been subject to a video and to a very good article on the community. (<a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;043eaa6ddbd0dbc01dcaf3231f96198e&amp;view_source&#61;searchResult" rel="nofollow">here</a>)</p>
<p>So why creating another article on this subject?</p>
<p>The approach taken by the above mentioned post is using Scripted REST while this one is using an Event Management Listener Transform Script.</p>
<p>The script code is in this one <span style="text-decoration: underline;">ready to use</span> and can be downloaded via a link below.</p>
<p><strong>How?</strong></p>
<p>The setup on ThousandEyes side is similar:</p>
<ul><li><span class="ng-scope">Create a test in Thousand Eyes</span></li><li>Create an alert rule that gets triggered.</li><li>The next step slightly differ form the Scripted REST approach</li><li>Update notification for the alert and point a new webhook to the following endpoint:</li></ul>
<pre class="language-markup"><code>https://&lt;instanceName&gt;.service-now.com/api/global/em/inbound_event?source&#61;thousandeyes</code></pre>
<p>On the ServiceNow side:</p>
<ul><li>you just have to download <a href="https://github.com/JefMuller/TransformEvents_ThousandEyes" rel="nofollow">this update set </a></li><li>and to import it in your instance.</li><li><ul><li>System Update Set - Retrieved Update Sets - Import Update Set from XML </li></ul>
</li></ul>
<p>The transform logic can be modified under:</p>
<ul><li>Event Management - Listener Transform Scripts : &#34;ThousandEyes Events Transform Script&#34;</li></ul>
<p>Hope this could ease the integration.</p>
<p>Feel free to provide feedback</p>
<p> </p>
<p> </p>