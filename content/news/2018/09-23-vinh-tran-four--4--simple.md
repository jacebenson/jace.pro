---
title: "Four  Simple Steps Integrating Datadog to ServiceNow Event Management via Datadog Webhook"
date: 2018-09-22T19:21:21.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=161272c0db38e7c023f4a345ca961970"
---
<p>A few months ago, I had an opportunity to work with a ServiceNow customer on integrating their Datadog solution with <a href="https://www.servicenow.com/products/event-management.html%22%20%5Co%20%22Event%20Management" rel="nofollow"><span class="s1">Event Management</span></a> using one of the update set developed by Datadog.<span class="Apple-converted-space">  </span>It took some time to get everything working due to the following challenges:</p>
<ul class="ul1"><li class="li1">Locating the update set</li><li class="li1">Clarity of the documentation regarding how to configure and set up the integration</li><li class="li1">A bunch of links pointing to different web pages</li><li class="li1">The solution not working as it is thus requiring modification, etc.</li></ul>
<p class="p1">This week, one of my colleagues asked me to help him with the integration and ran into the same challenges I described above.<span class="Apple-converted-space">  </span>Luckily, I documented what I learned and was able to help him resolve the issues in a couple hours.</p>
<p class="p1">I was speaking with Brian Walter, who just published a blog on “integrating New Relic and Event Management the Easy Way” <a title="Integrating New Relic and Event Management the Easy Way" href="community?id&#61;community_blog&amp;sys_id&#61;9224f523dbe06bc08e7c2926ca96199f" rel="nofollow">https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;9224f523dbe06bc08e7c2926ca96199f</a> and I agree with him that REST APIs and Webhooks is a more ideal methods for integration.<span class="Apple-converted-space">  On some down time </span>today, I decided to see if I could figure out how to integrate Datadog with our Event Management using Webhooks.</p>
<p class="p1">I was challenged by this, and it took me a day to figure things out to get everything working.<span class="Apple-converted-space">  Because of this, I decided to he</span>lp simplify the process in a few steps for you to get your integration going in a couple hours.  </p>
<h2 class="p1"><span class="s1"><strong>On your ServiceNow Instance</strong></span></h2>
<h3 class="p2"><strong>Step 1: Create an Event Management Integration User </strong></h3>
<p class="p4">Navigate to User Administration -&gt; Users -&gt; New, fill in the form with:</p>
<ul class="ul1"><li>Userid &#61; datadog (or whatever name you want to use)</li><li>Password &#61; password</li><li>Save</li><li>Edit Roles and add the “evt_mgmt_integration” role</li><li>Update</li></ul>
<h3 class="p5"><strong>Step 2: Create Event Field Mapping Rule</strong></h3>
<p class="p6">Navigate to Event Management -&gt; Rules -&gt; Event Field Mapping -&gt; New, fill in the form with:</p>
<ul class="ul1"><li>Name &#61; datadog severity mapping</li><li class="li6">Source &#61; Datadog2</li></ul>
<p class="p7"><em>(NOTE: Source needs to match the source field coming from datadog webhook integration (see below) or set specifically in an Event Rule that pre-processes before the field mapping rule runs)</em></p>
<ul class="ul1"><li>Mapping type &#61; Single field<span class="Apple-converted-space"> </span></li><li class="li6">From field &#61; severity</li><li class="li6">To field &#61; severity</li></ul>
<p class="p6">Event Mapping Pairs:<span class="Apple-converted-space">  </span>(warn, warning &#61; 4, success &#61; 0, and error &#61; 1)</p>
<p class="p6" style="padding-left: 30px;">Note:<span class="Apple-converted-space">  </span>these are the severities I observed so far, you may need to adjust as necessary</p>
<p class="p6" style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="fa023604db38e7c023f4a345ca9619a8.iix" /></p>
<h2 class="p1"><span class="s1"><strong>On your Datadog Instance</strong></span></h2>
<h3 class="p3"><strong>Step 3: Configuring datadog webhook</strong></h3>
<p class="p3">Note: I am assuming you will be working with your customer who knows datadog.<span class="Apple-converted-space">  </span>Follow these steps:</p>
<p>1.  In your Datadog instance, Navigate to integration -&gt; search for webhooks</p>
<p style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="3e667a40db78e7c023f4a345ca9619b3.iix" /></p>
<p>2.  Click on the webhooks tile</p>
<ul><li>Click on the configuration tab and fill in the form</li></ul>
<p class="p4" style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="c66776c0db78e7c023f4a345ca961925.iix" /></p>
<ul class="ul1"><li>New name &#61; datadog2em (this is the webhook name)</li><li class="li5"><span class="s2">New url &#61; </span>https://userid:pw&#64;instancename.service-now.com/em_event.do?JSONv2&amp;sysparm_action&#61;insertMultiple</li></ul>
<p style="padding-left: 30px;">(userid and pw is the user you created in step 1)</p>
<ul class="ul1"><li class="li3">Select the “Use custom payload” check box</li><li class="li3">Paste the below into the custom payload box.</li></ul>
<p class="p6" style="padding-left: 30px;"><em>(Note:<span class="Apple-converted-space">  </span>The variable name on the payload is documented in the datadog website.<span class="Apple-converted-space">  </span>I match what I think is the correct mapping.)</em></p>
<pre class="language-markup"><code>{
	&#34;records&#34;: [{
	&#34;source&#34;: &#34;Datadog2&#34;,
	&#34;node&#34;: &#34;$HOSTNAME&#34;,
	&#34;type&#34;: &#34;$EVENT_TYPE&#34;,
	&#34;event_type&#34;: &#34;$EVENT_TITLE&#34;,
	&#34;message_key&#34;: &#34;$AGGREG_KEY&#34;,
	&#34;metric_name&#34;: &#34;$ALERT_METRIC&#34;,
	&#34;description&#34;: &#34;$TEXT_ONLY_MSG&#34;,
	&#34;severity&#34;:&#34;$ALERT_TYPE&#34;,
	&#34;additional_info&#34;: &#34;{&#39;dd_id&#39;:&#39;$ID&#39;,
	&#39;dd_email&#39;:&#39;$EMAIL&#39;,
	&#39;dd_event_title&#39;:&#39;$EVENT_TITLE&#39;,
	&#39;dd_event_type&#39;:&#39;$EVENT_TYPE&#39;,
	&#39;dd_date&#39;:&#39;$DATE&#39;,
	&#39;dd_date_posix&#39;:&#39;$DATE_POSIX&#39;,
	&#39;dd_alert_id&#39;:&#39;$ALERT_ID&#39;,
	&#39;dd_alert_type&#39;:&#39;$ALERT_TYPE&#39;,
	&#39;dd_aggreg_key&#39;:&#39;$AGGREG_KEY&#39;,
	&#39;dd_org_id&#39;:&#39;$ORG_ID&#39;,
	&#39;dd_alert_stat&#39;:&#39;$ALERT_STATUS&#39;,
	&#39;dd_alert_scope&#39;:&#39;$ALERT_SCOPE&#39;,
	&#39;dd_hostname&#39;:&#39;$HOSTNAME&#39;,
	&#39;dd_user&#39;:&#39;$USER&#39;,
	&#39;dd_username&#39;:&#39;$USERNAME&#39;,
	&#39;dd_snapshot&#39;:&#39;$SNAPSHOT&#39;,
	&#39;dd_link&#39;:&#39;$LINK&#39;,
	&#39;dd_priority&#39;:&#39;$PRIORITY&#39;,
	&#39;dd_tag&#39;:&#39;$TAGS&#39;,
	&#39;dd_lastupdated&#39;:&#39;$LAST_UPDATED&#39;,
	&#39;dd_lastupdated_posix&#39;:&#39;$LAST_UPDATED_POSIX&#39;,
	&#39;dd_alert_metric&#39;:&#39;$ALERT_METRIC&#39;,
	&#39;dd_metric_namespace&#39;:&#39;$METRIC_NAMESPACE&#39;,
	&#39;dd_alert_transition&#39;:&#39;$ALERT_TRANSITION&#39;,
	&#39;dd_org_name&#39;:&#39;$ORG_NAME&#39;,
	&#39;dd_alert_query&#39;:&#39;$ALERT_QUERY&#39;,
	&#39;dd_alert_title&#39;:&#39;$ALERT_TITLE&#39;,
	&#39;dd_alert_cycle_key&#39;:&#39;$ALERT_CYCLE_KEY&#39;}&#34;
	}]
}
</code></pre>
<ul class="ul1"><li>Click “Install Integration”</li><li>Click on the “X” in the upper left to close that screen.</li></ul>
<h3 class="p8"><strong>Step 4: Configuring datadog monitor to send notification</strong></h3>
<p class="p3">Note: I am assuming you will be working with your customer who knows datadog. </p>
<p class="p3">Your customer already has monitor set up all ready.<span class="Apple-converted-space">  </span>They just have to add the webhook you created in step 3 to the notify your team as screen show below.</p>
<p class="p6" style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="4e99b208db78e7c023f4a345ca961924.iix" /></p>
<h2 class="p1"><span class="s1"><strong>Check Result On your ServiceNow Instance</strong></span></h2>
<ul><li>Navigate to Event Management -&gt; All Events and see the result as show</li></ul>
<p class="p3" style="padding-left: 30px;">Note: We created the event field mapping rule for success &#61; clear (so no alert was created) and error &#61; critical (so alert was created)</p>
<p class="p4" style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="2c8bba0cdb78e7c023f4a345ca96192d.iix" /></p>
<ul><li>Drill into one of the events and you see the mapping to the event fields and all the key pairs value in the additional_info field.    <img style="max-width: 100%; max-height: 480px;" src="d4fbbe4cdb78e7c023f4a345ca96190c.iix" /></li></ul>
<ul><li>Now, Drill into the event with the alert and see how event from datadog map to the alert table.<span class="Apple-converted-space">  </span>Notice the additional has a lot of data that mapped to the field prefix with dd_xxx from the payload in the webhook.<span class="Apple-converted-space">  </span>These information can be useful when building event rule.</li></ul>
<p class="p4" style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="7c9cba8cdb78e7c023f4a345ca96191f.iix" /></p>
<p class="p4">This concludes my blog and I hope you found it helpful to reduce your time in setting up the integration.<span class="Apple-converted-space">  </span>Please feel free to reach out if you have any questions.</p>