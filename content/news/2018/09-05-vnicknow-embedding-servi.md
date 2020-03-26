---
title: "Embedding ServiceNow IT Ops into Slack"
date: 2018-09-05T03:04:22.000Z
authors: ["vNickNOW"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=d97f2f52dbd82300d58ea345ca961914"
---
<p>Slack has become the market leader in what <a href="https://www.gartner.com/doc/reprints?id&#61;1-4K5I75F&amp;ct&#61;171108&amp;st&#61;sb" target="_blank" rel="nofollow">Gartner calls the workstream collaboration</a> space, and companies of all sizes are using Slack as their primary method of collaborating.  <a href="https://www.servicenow.com/products/it-operations-management.html" target="_blank" rel="nofollow">ServiceNow&#39;s IT Operations Management (ITOM)</a> portfolio is the most comprehensive closed-loop remediation solution on the market.  Combine the two and you get an efficient, easy-to-use environment in which to solve complex problems.  As the ServiceNow engineering teams continue to create great new features for triaging and handling alerts (like the <a href="https://docs.servicenow.com/bundle/london-it-operations-management/page/product/event-management/concept/alert-insight-information.html" target="_blank" rel="nofollow">Alert insights</a> in London), customers are also looking to bring some of that work to the other collaboration tools they use on a daily basis.</p>
<p>This article will show a repeatable structure for creating Slack integrations (though certainly not the only one).  These integrations may take many forms, slash commands, action buttons, etc.  We will focus on slash commands in this article as they are very simple to setup on the Slack side, and only require a bit of Scripted REST API coding on the ServiceNow side.</p>
<p>In the Kingston release, the flow designer / integration hub provided a baseline (a.k.a. out of the box) <a href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/administer/integrationhub/reference/slack-spoke.html" target="_blank" rel="nofollow">spoke for Slack integration</a> when initiated from the ServiceNow side.  This will come into play for our ITOM use case.</p>
<p>NOTE: A step 0 could be inserted below, which would be the planning phase whereby you want to determine what your integration will accomplish.  For me, I wanted to create a programming style environment (operators love CLI) where alerts could be diagnosed and remediated all within Slack.  Many of my colleagues have been working on some more UI friendly options with interactive message buttons, so if that&#39;s the desired user interaction (admittedly more intuitive), don&#39;t worry, I&#39;m sure content around that will be made available soon.  To accomplish my goals, I followed the steps below.</p>
<h3><strong>Step 1: Create Slack Application (one time)</strong></h3>
<p><a href="https://api.slack.com/slack-apps" target="_blank" rel="nofollow">Creating an application in Slack</a> is an extremely easy process.  As such, I won&#39;t spend too much time on this topic except to say that you need to enable <a href="https://api.slack.com/incoming-webhooks" target="_blank" rel="nofollow">incoming webhooks</a>, so that once you have added the application to your workspace / channel, you are able to copy the necessary webhook that will be used in Step 2 below.  Later in Step 6, we will be coming back to the application to define our slash commands, but let&#39;s wait on that for now.</p>
<h3><strong>Step 2: Create Flow in Flow Designer (one time)</strong></h3>
<p>To get our critical alerts to appear in the necessary Slack channel, we need a simple <a href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/administer/integrationhub/concept/integrationhub.html" target="_blank" rel="nofollow">Integration Hub</a> flow.  We only need to define 2 things to make this happen... sounds too easy doesn&#39;t it. The only pre-requisite is that the Integration Hub plug-in must be enabled or you will not see the Slack actions (this does require a transaction-based orchestration license).</p>
<p>First, we have to define the trigger of the flow.  This is determined by what CRUD operation against a certain table and filter you want to take action against.  Here is a shot of the trigger I used that just looks for the creation of a critical severity em_alert (Alert) record.</p>
<p><img style="display: block; margin-left: auto; margin-right: auto;" src="51b4cd58dbe427488e7c2926ca961953.iix" width="542" height="203" /></p>
<p style="text-align: center;">Flow Trigger</p>
<p style="text-align: left;">Second, we will only have 1 step in the flow once it&#39;s triggered, and that step will be to post some details about the alert into the Slack channel (presumably monitored by NOC operators)</p>
<p style="text-align: left;"><img style="display: block; margin-left: auto; margin-right: auto;" src="97864d58db2827488e7c2926ca961942.iix" width="537" height="375" /></p>
<p style="text-align: center;">Slack Message Post</p>
<p style="text-align: left;">The step above requires us to copy and paste in the webhook from the Slack application you created in Step 1.  Likewise, you should specify the Slack channel you want the messages to appear within.  When choosing the Slack action to execute from the flow designer, you will notice there are options for posting details about incidents, changes, and problems, but we are going to use the catch-all generic action to just post any message we want.  You can specify in the &#34;Message&#34; value and details and record specifics you want.</p>
<h3>Step 3: Create Scripted REST API (multiple times)</h3>
<p>Now comes the fun stuff.  We created our Slack app and are now getting critical alerts posted into a channel called &#34;alerts-critical&#34;, so let&#39;s see what we can do with those alerts from within Slack.  Because we are going to use slash commands from Slack (step 6 will have more details), we need to create a Scripted REST API to handle those commands.  I created 2 Scripted REST API&#39;s and you may need many more depending on what all you want to do from within Slack.  We will focus on the structure of the API that will facilitate retrieving data about alerts (the other will initiate remediation via an orchestration workflow, but the structure of everything is the same).  Here is some code for use to discuss:</p>
<pre class="language-javascript"><code>(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	
	// Always send back a successful 200 response and handle error notifications in message
	response.setStatus(200);
	
	// Validate the Slack app token
	var authtoken &#61; gs.getProperty(&#34;itom.slack.app.token01&#34;);
	if(request.queryParams.token !&#61; authtoken) {
		return &#34;Unauthorized Request&#34;;
	}
	
	try {
		var respText &#61; &#34;Your &#34; &#43; request.queryParams.command &#43; &#34; &#34; &#43; 
				request.queryParams.text &#43; &#34; request has been received... processing&#34;;
		// Format an initial response
		var payload &#61; {
			&#34;response_type&#34;: &#34;ephemeral&#34;,
			&#34;text&#34;: respText
		};
		
		gs.log(&#39;---&gt; About to request data&#39;, &#39;Slack ITOM Data&#39;);
		
		// Send ephemeral response back to Slack to notify user command is processing
		
		var slackResponse &#61; new sn_ws.RESTMessageV2();
		slackResponse.setEndpoint(request.queryParams.response_url);
		slackResponse.setHttpMethod(&#39;POST&#39;);
		slackResponse.setRequestBody(JSON.stringify(payload));
		slackResponse.setRequestHeader(&#39;Content-type&#39;,&#39;application/json&#39;);
		var slackOutput &#61; slackResponse.execute();
		
		// Get the requests query parameters and create an event to process the request async
		
		var parms &#61; JSON.stringify(request.queryParams);
		gs.eventQueue(&#34;itom.slack.getdata&#34;, current, parms);
		
		return;
	}
	catch (e){
		gs.log(&#39;---&gt; Slack Integration error: &#39; &#43; e, &#39;Slack ITOM Data&#39;);
		response.setBody(&#39;Error in processing: &#39; &#43; e);
		return;
	}
	
})(request, response);</code></pre>
<p style="text-align: center;">REST API Code Sample</p>
<p style="text-align: left;">The first thing to note API&#39;s for Slash commands is that they will come as a POST, so your API resource needs to be a POST resource that does not require authentication (as there&#39;s nowhere to put in ServiceNow credentials on the Slack side).  Likewise, Slack does NOT send data in the request body.  Instead, they use the queryParams to hold the data, so be mindful when trying to access request values.  One very important value is the &#34;token&#34; sent from Slack.  When you created your app in step 1, there was a verification token created.  This will be sent with each request from a Slack command, so you can validate it&#39;s a legitimate request for you API that does not require authentication.  I chose to put mine into a custom system property, &#34;itom.slack.app.token01&#34;, that I verify first.</p>
<p style="text-align: left;">Once the request is verified as coming from a trusted source, you need to send back an immediate response or Slack will timeout if more than 3000ms elapse without receiving an acknowledgement.  To that end, I decided to always send a 200 response and leverage the platform&#39;s event queue to process all requests.  This allows an immediate response to be sent back to Slack, and using another value sent by the Slack request, &#34;response_url&#34;, I can asynchronously send back responses and the processes finish (long running query, workflow executions, etc).  You&#39;ll notice that I specify a &#34;response_type&#34; of &#34;ephemeral&#34; in the payload back to Slack.  This will result in the message only being seen by the person using the slash command and will not be retained permanently in the channel (which is good for just an acknowledgement that isn&#39;t relevant for all channel members or for long term retention).</p>
<p style="text-align: left;">As you see in the code, the gs.eventQueue invocation places an event onto a new queue I created and passed in the entire queryParams object as a parameter.  In the following steps, we&#39;ll discuss the setup of those components that will now execute our request.  However, the basic construct of the API call is what can be reused for any Slack request and you simply have to change the event queue you use as each should have their own logic.  </p>
<h3>Step 4: Create New Event Registry (multiple times)</h3>
<p>Creating a <a href="https://docs.servicenow.com/bundle/kingston-platform-administration/page/administer/platform-events/task/t_RegisterAnEvent.html" target="_blank" rel="nofollow">new event queue</a> is a quick task as well, and you can see from the screenshot below that there are minimal inputs required.  From the Scripted REST API code above you can see where I referenced &#34;itom.slack.getdata&#34; when calling gs.eventQueue.</p>
<p><img style="display: block; margin-left: auto; margin-right: auto;" src="96d58ed8db64e7488e7c2926ca96197f.iix" width="512" height="186" /> </p>
<p style="text-align: center;">Create a New Event Queue</p>
<p style="text-align: left;">Each Script REST API you create should ideally have their own event queue as you will see in the next step for creating a scripted action, which references the event and does the bulk of the heavy lifting in terms of logic execution.</p>
<h3>Step 5: Create Script Action (multiple times)</h3>
<p>Now that we have our REST API putting an event onto our new queue, we can build out the logic that will processing the event and send the necessary response to the &#34;response_url&#34; we passed in (<a href="https://docs.servicenow.com/bundle/kingston-platform-administration/page/administer/notification/task/t_PassEventParameters.html" target="_blank" rel="nofollow">events can take a parm1 and parm2 parameter</a>).  The logic will be built in a <a href="https://docs.servicenow.com/bundle/kingston-platform-administration/page/administer/platform-events/reference/r_ScriptActions.html" target="_blank" rel="nofollow">script action</a> that is associated with the event queue we just created.</p>
<p><img style="display: block; margin-left: auto; margin-right: auto;" src="31d94a54db68e7488e7c2926ca961921.iix" width="529" height="175" /></p>
<p style="text-align: center;">Create a New Script Action</p>
<p style="text-align: left;">I&#39;m not going to paste all the code for this action into the blog, but have attached the code to this blog.  A few things I do want to call out are around validating parameters and message longevity of the responses.  In regards to validating parameters, this will be dependent upon how you want your slash command to operate.  For me, I want a fairly rigid format like &#34;/datanow alert:Alert0001234&#34;.  This format allows for potential future additions where a customer may add logic to request data for other record types from the ITOM spectrum (e.g. &#34;/datanow ci:serverxyz&#34; would return all recent changes, incidents, etc about a CI).</p>
<p style="text-align: left;">With regards to longevity of responses, use &#34;ephemeral&#34; or &#34;in_channel&#34; as necessary.  I like &#34;ephemeral&#34; for messages like a &#34;help&#34; response where it would only apply to the requestor and does not need to remain permanently.  The use of &#34;in_channel&#34; will make the message available for all to view and remain.  Similarly, I chose to put most of the message into an &#34;attachments&#34; attribute, and only have the data about who and what was requested in the main &#34;text&#34; of the message.  Putting data into the attachments attribute builds-in automatic real-estate control.  What I mean by that is the &#34;attachment&#34; will not scroll through the channel out of control (image you want a list of all open alerts and have 1,000 of them).  You will get &#34;Show more&#34; and &#34;Show less&#34; links automatically with attachments.</p>
<p style="text-align: left;">As the Slack docs also note, always create a &#34;help&#34; option that will show proper usage of the request, similar to a *nix man page.</p>
<h3>Step 6: Define Slash Commands in your Slack App (multiple times)</h3>
<p>Our final step to making this interaction between Slack and ServiceNow real is to <a href="https://api.slack.com/slash-commands" rel="nofollow">create our slash commands</a> for the application created in step 1.  Once again, Slack has made this super easy for us.  All we have to do is decide what we want the command called and then provide the endpoint for the Scripted REST API created in step 3.</p>
<p><img style="display: block; margin-left: auto; margin-right: auto;" src="8b0e0a10db2ce7488e7c2926ca9619ca.iix" width="337" height="201" /></p>
<p style="text-align: center;">Slash Command Definition</p>
<p style="text-align: left;">That&#39;s it! Once you have your slash command, you can go to the channel where you have your application registered and try it out.  At this point you can correlate that each slash command will either have its own Scripted REST API, or its own resource for a given API. </p>
<h3 style="text-align: left;">Output</h3>
<p style="text-align: left;">Let&#39;s see what some of this interaction looks like... notice that the response &#34;Your /datanow listopen request has been received... processing&#34; is &#34;Only visible to you&#34; because it&#39;s ephemeral and will eventually go away.</p>
<p style="text-align: left;"><img style="display: block; margin-left: auto; margin-right: auto;" src="4bb11e1cdb6ce7488e7c2926ca961972.iix" width="641" height="248" /></p>
<p style="text-align: center;">&#34;/datanow listopen&#34;</p>
<p style="text-align: left;">Below we can see details about a specific alert.</p>
<p style="text-align: left;"> <img style="display: block; margin-left: auto; margin-right: auto;" src="be521214dbace7488e7c2926ca961965.iix" width="594" height="240" /></p>
<p style="text-align: center;">&#34;/datanow alert:Alert0010382&#34;</p>
<p style="text-align: left;"> </p>
<p style="text-align: left;">Notice here that we have the &#34;Show more&#34; button because we place that part of the message as an attachment.  And finally...</p>
<p style="text-align: left;"><img style="display: block; margin-left: auto; margin-right: auto;" src="8da39290dbece7488e7c2926ca9619a2.iix" width="342" height="144" /></p>
<p style="text-align: center;">&#34;/datanow help&#34;</p>
<p style="text-align: left;">To this point I have created a &#34;/datanow&#34; and &#34;/actnow&#34; command.  The first is what we&#39;ve shown in this blog and I have attached the code for the script action.  The second, /actnow, is very similar except that it is much more dependent upon what orchestration activities you have available in your instance.  If you&#39;re interested, you can ping me directly but I don&#39;t want to cause confusion (including the code with this blog) about why it doesn&#39;t work if you just drop in the code given you won&#39;t have the same workflows as me.  While this was a bit of a lengthy post, I hope you were able to stick with me and can see how easily you can extend ServiceNow IT Operations Management into collaboration services like Slack.</p>