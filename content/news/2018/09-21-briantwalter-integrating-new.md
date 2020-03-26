---
title: "Integrating New Relic and Event Management the Easy Way"
date: 2018-09-21T01:33:48.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=9224f523dbe06bc08e7c2926ca96199f"
---
<p>Greetings Community!</p>
<p>I had a recent opportunity to work with a ServiceNow customer on integrating their <a title="New Relic Infrastructure" href="https://newrelic.com/products/infrastructure" rel="nofollow">New Relic Infrastructure</a> SaaS deployment with <a title="Event Management" href="https://www.servicenow.com/products/event-management.html" rel="nofollow">Event Management</a> so I thought I&#39;d share the simple solution we came up with.  I felt like the timing was right for a post like this because I see a trend with forward-leaning organizations wanting move away from purpose-built connectors in favor of using software provided primitives.  I&#39;m specifically referring to <a title="REST API" href="https://en.wikipedia.org/wiki/Representational_state_transfer" rel="nofollow">REST APIs</a> and <a title="Webhook" href="https://en.wikipedia.org/wiki/Webhook" rel="nofollow">Webhooks</a> as the desired methods of point-to-point data integrations.</p>
<p>The Event Management application provides an entire suite of <a title="connectors" href="https://docs.servicenow.com/bundle/london-it-operations-management/page/product/event-management/reference/connectors-and-listeners.html" rel="nofollow">native connectors</a> and there are even more on the <a title="ServiceNow Store" href="https://store.servicenow.com/sn_appstore_store.do#!/store/search?category&#61;Event%2520Management&amp;orderby&#61;rating" rel="nofollow">ServiceNow Store</a>.  These connectors are a turn-key solution for customers that prioritize the supportability and documentation of the specific functionality.  Still, and especially in SaaS-to-SaaS data flows, there is a desire to not take on the dependency of a connector which needs to be accounted for in upgrades of ServiceNow itself and also in the various monitoring tools.  Using simple webhooks in the monitoring tools and REST messages is an easy way to accomplish this data flow which removes the dependency and also allows for fine-grained control of the data being sent in the payload itself.</p>
<h2><strong>&lt;TL;DR&gt;</strong></h2>
<p>Step 1) Create a <a title="New Relic Webhook" href="https://docs.newrelic.com/docs/alerts/new-relic-alerts/managing-notification-channels/customize-your-webhook-payload" rel="nofollow">Webhook Notification Channel</a> in New Relic for your alerts and paste this as the body:</p>
<pre class="language-javascript"><code>{
	&#34;records&#34;: [{
		&#34;source&#34;: &#34;NewRelic&#34;,
		&#34;severity&#34;: &#34;2&#34;,
		&#34;node&#34;: &#34;&#34;,
		&#34;type&#34;: &#34;$EVENT_TYPE&#34;,
		&#34;resource&#34;: &#34;$CONDITION_NAME&#34;,
		&#34;metric_name&#34;: &#34;$POLICY_NAME&#34;,
		&#34;message_key&#34;: &#34;&#34;,
		&#34;description&#34;: &#34;$EVENT_DETAILS&#34;,
		&#34;additional_info&#34;: &#34;{&#39;target&#39;: &#39;$TARGETS&#39;}&#34;

	}]
}</code></pre>
<p>Step 2) The URI endpoint will be <strong>https://&lt;instancename&gt;.service-now.com/api/global/em/jsonv2</strong></p>
<p>Step 3) The method will be <strong>POST</strong></p>
<p>Step 4) The authentication will be <strong>BASIC</strong> and a username/password combination with the <em>evt_mgmt_integration</em> role on the ServiceNow instance is required</p>
<h2>&lt;/TL;DR&gt;</h2>
<p> </p>
<p>This is just one example and the only thing special in this case is the $TARGETS variable that gets expanded in New Relic.  The variable itself expands to a JSON object which we can parse with a simple Event Rule on the ServiceNow instance which, among other things, allows us to inject a deep link back to the New Relic console for the alert itself.  This can be helpful for quick triage and deeper investigation of a given alert.</p>
<p>In the <a title="Event Rule" href="https://docs.servicenow.com/bundle/london-it-operations-management/page/product/event-management/task/create-or-edit-event-rule.html" rel="nofollow">Event Rule</a> you can use the visual regex editor to extract the JSON payload and assign keys to the values like <em>id</em>, <em>nodename</em>, <em>alertlink</em>, <em>labels</em>, <em>producttype</em>, and <em>targettype</em> like shown in <strong>(</strong><strong>Figure 1)</strong>.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="56beb5e3dba86bc08e7c2926ca9619fb.iix" /></p>
<p><strong>(Figure 1)</strong></p>
<p> </p>
<p>Since we&#39;ve now extracted the deep-link back to New Relic as <em>alertlink</em> we can now stuff it into the <em>Additional Information</em> field on the Alert as shown here in <strong>(</strong><strong>Figure</strong> <strong>2)</strong>.<strong>  </strong>This is still a part of the same rule as the parsing itself.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="f5100e6fdba86bc08e7c2926ca961910.iix" /></p>
<p><strong>(Figure 2)</strong></p>
<p> </p>
<p>With the data all parsed, labeled, and in place we can now make dynamic actions using <a title="Alert management" href="https://docs.servicenow.com/bundle/london-it-operations-management/page/product/event-management/concept/c_EMAlertManagement.html" rel="nofollow">Alert management</a> capabilities.  In this case we want to dynamically populate a <em>Open in New Relic</em> action when the data source is New Relic <strong>(Figure 3)</strong> and then use the <em>alertlink</em> data field for the URL <strong>(Figure 4)</strong>. </p>
<p><img style="max-width: 100%; max-height: 480px;" src="0ec242efdbe86bc08e7c2926ca961990.iix" /></p>
<p><strong>(Figure 3)</strong></p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="6de2c623db2c6bc08e7c2926ca96199a.iix" /></p>
<p><strong>(Figure 4)</strong></p>
<p> </p>
<p>Once these steps are in place, alerts seen in the <a title="Alert Console Quick Response" href="https://docs.servicenow.com/bundle/london-it-operations-management/page/product/event-management/task/manage-alert.html" rel="nofollow">Alert Console Quick Response</a> menu <strong>(Figure 5)</strong> originating from New Relic will have the deep link back to the console.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="4a848a6bdb2c6bc08e7c2926ca961927.iix" /></p>
<p><strong>(Figure 5)</strong></p>
<p> </p>
<p>I might also add that this approach is also ready for the new Agent Workspace platform offering that is currently in early access.  Event Management is planning to take advantage of the new user experience of tabs and tiles.  This integration shows up under the Resolve Actions in what is currently being called Alert Intelligence <strong>(Figure 6)</strong>.</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="ecb582a3db6c6bc08e7c2926ca961929.iix" /></p>
<p><strong>(Figure 6)</strong></p>
<p> </p>
<p>Thanks for taking the time to read through this, I hope it gives you some ideas on how to use webhooks in your environment.  If you deploy something like this yourself drop a comment below, I&#39;d love to hear about it.</p>
<p> </p>
<p>Cheers,</p>
<p>Brian </p>
<p> </p>