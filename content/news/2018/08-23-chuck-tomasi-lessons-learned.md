---
title: "Lessons Learned Todoist to ServiceNow Integration"
date: 2018-08-22T20:52:36.000Z
authors: ["Chuck Tomasi"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=10bd9306db40a704a39a0b55ca9619af"
---
<div>Process improvement opportunities exist all around us - all you had to do is look. In most cases, I look to ServiceNow as my solution to make a process or procedure more efficient and effective. My latest project was to do a bi-directional integration between ServiceNow and Todoist, the popular task management application. Below are some of the lessons I learned along the way - and you know me, when I learn something, I share it.</div>
<div> </div>
<div>Topics covered in this post:</div>
<div>
<ul><li>Background</li><li>REST or Sync API?</li><li>Webhooks and Scripted REST APIs</li><li>Versions matter</li><li> Business rules and script actions</li><li>Locking</li><li>Name/value pair fields</li></ul>
<p> </p>
</div>
<div><strong>Background</strong></div>
<div>The integration was built to drive the pre and post production tasks for our popular web series &lt;a href&#61;“http://bit.ly/servicenow-technow”&gt;TechNow&lt;/a&gt;. I and several other terrific people have been doing this show since early 2013. In the past year I’ve been building a ServiceNow app to refine the whole episode process. To build tasks for each episode in ServiceNow is a simple matter. The challenge is that I don’t go to ServiceNow to see what’s on my to do list - I “live&#34; in Todoist to keep my personal and professional life moving forward.  There are many things to love about Todoist - one of which is the available integrations. Since ServiceNow offers REST APIs (inbound and outbound) it seemed like a fairly simple matter to build... It’s funny how the simple things have a way of getting away from you. Fortunately, this turned in to a great learning opportunity. This article highlights some of the things I learned during this project.</div>
<div> </div>
<div><strong>REST or Sync API?</strong></div>
<div>Todoist offers two main web service APIs to interact with their data, a <a href="https://developer.todoist.com/rest/v8/" rel="nofollow">REST API</a> which offers unique endpoints for each object (tasks, projects, comments, labels) and the <a href="https://developer.todoist.com/sync/v7/" rel="nofollow">Sync API</a> that has a single endpoint, and the request body contains information to tell Todoist about the object and how to process it. So which one is right? The REST API is simpler to start with, but a bit limited in what it can do. By contrast, the Sync API is a bit more complex to implement and offers more flexibility. I started with simple requests like creating and updating a task using the REST API, but found it wouldn’t allow me to clear the value of a due date field, but the Sync API has a way to do that.</div>
<div>One challenge with the Sync API is that it requires a universally unique identifier (UUID) for each request. “No problem”, I thought. “I’ll just use the sys_id of the ServiceNow record.” That didn’t work so well because the UUID has to be unique for reach request - sending one request to create a new Todoist task is fine, but it wouldn’t update if I used the same sys_id as a UUID. Fortunately I found a few lines of Javascript to generate a UUID and I was off.</div>
<div>
<pre class="language-javascript"><code>  _guid : function() {
        function s4() {
            return Math.floor((1 &#43; Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() &#43; s4() &#43; &#39;-&#39; &#43; s4() &#43; &#39;-&#39; &#43; s4() &#43; &#39;-&#39; &#43; s4() &#43; &#39;-&#39; &#43; s4() &#43; s4() &#43; s4();
    },</code></pre>
<div>At this point I’m using a combination of REST APIs and Sync APIs to get manage my Todoist data. Perhaps in the future I’ll migrate everything over to the Sync API for consistency, but at this point - it works.</div>
<div>
<div> </div>
<div><strong>Webhooks and scripted REST APIs</strong></div>
<div>Simple put, a webhook is an outbound REST call from a third party system triggered to call an endpoint of your choosing. Webhooks are a common way to do web service integration when you need a third party app to trigger a REST message based on an event trigger. This is (basically) how you get notified on your phone when the airline changes your flight information. Your phone isn’t constantly polling the airline, it’s pushed to you on demand. You simply configure a few parameters in the software to tell it “who to call” when an event happens.. The payload may change based on how you configured it.</div>
<div>In my scenario, I told Todoist to call a scripted REST API on my ServiceNow instance whenever a Todoist task is created, updated, completed, or deleted. Getting this part set up wasn’t too difficult.  The only challenge here was to determine the format of the JSON payload to find out what I get from the webhook and what parts I am interested in using. Like many third party integrations, you’ll find the nuggets of information you need, some extra stuff you don’t, and sometimes you won’t find information you desire. That’s when you have to get innovative.</div>
<div>In my case, I found that having a “source” (IP address, host name, or anything that indicated who triggered the webhook) would have been extremely helpful. I reached out to Todoist, but we haven’t come to a resolution on this yet.</div>
<div>In short, the webhook is going to tell ServiceNow anytime when a person, or another app, modifies a task. That information is received by the scripted REST API and processed accordingly. Here&#39;s my scripted REST resource to process the incoming webhook.</div>
<div>
<pre class="language-javascript"><code>(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

	var taskUtil   &#61; new TaskUtil();
	var contentObj &#61; request.body.data;
	var lockGr     &#61; null;
	gs.info(JSON.stringify(contentObj));

	var eventName &#61; contentObj.event_name;
	var ed &#61; contentObj.event_data;

	gs.info(&#39;Accept Webhook: eventName&#61;&#39; &#43; eventName);

	// Deleted actions have no lock
	if (eventName !&#61; &#34;item:deleted&#34;) {
		lockGr &#61; taskUtil.getLock(contentObj.event_data.content, ed.id.toString());
	}

	// If it&#39;s locked (change originated from SN),
	// then there are still a few things we may need to do to the task
	if (lockGr) {

		switch (eventName) {
			case &#39;item:added&#39;:
				// The task was created in SN, update the task IDs, time/date, etc.
				taskUtil.updateTaskID(contentObj);
				break;

			case &#39;item:updated&#39;:
				// Only update the record (again) if the date changed
				// so we can get the due date field updated
				if (lockGr.updated_fields.date &#61;&#61; &#34;true&#34;) {
					taskUtil.updateTask(contentObj);
				}
				break;
		}

		taskUtil.unlockTask(lockGr);

		// Otherwise, process incoming events originating from Todoist
	} else {
		switch (eventName) {
			case &#39;item:added&#39;:
				taskUtil.addTask(contentObj, true);
				break;

			case &#39;item:updated&#39;:
				taskUtil.updateTask(contentObj);
				break;

			case &#39;item:deleted&#39;:
				taskUtil.deleteTask(contentObj);
				break;

			case &#39;item:completed&#39;:
				taskUtil.completeTask(contentObj);
				break;

			case &#39;item:uncompleted&#39;:
				taskUtil.reopenTask(contentObj);
				break;

			case &#39;project:added&#39;:
				break;

			case &#39;project:updated&#39;:
				break;

			case &#39;project:deleted&#39;:
				break;

			case &#39;project:archived&#39;:
				break;

			case &#39;project:unarchived&#39;:
				break;

		}

	}

	response.setStatus(200);

})(request, response);</code></pre>
</div>
<div><a href="https://docs.servicenow.com/bundle/london-application-development/page/integrate/custom-web-services/concept/c_CustomWebServices.html" rel="nofollow">Docs: Scripted REST APIs</a></div>
<div> </div>
<div><img style="max-width: 100%; max-height: 480px;" src="b2fc970edb00a704a39a0b55ca96197a.iix" /></div>
<div>One challenge I ran in to early on with this integration was the REST response payload. If I created a single task in ServiceNow, the outbound REST API would create a Todoist task and respond back with a response payload containing, among other things, the Todoist task ID and project ID. I track those so future update/delete requests can be made by ID. While this approach worked well for a single task, it had serious failures when I generated multiple tasks at once. Part of my process involves a UI action to create tasks based on a list of template tasks - 18 to be precise. Of the 18 tasks created with the outbound REST request, only about 1/2 had usable response payloads with the IDs I was after. What happened to the remainder, I don’t know. When I recognized that I was getting similar (and even better) data from the webhook, I opted to use that instead since it was 100% reliable for each insert, update, and delete.</div>
<div> </div>
<div>
<div><strong>Versions Matter</strong></div>
<div>One of the biggest surprises I had while doing this integration was the difference in payload I got from two different accounts. It really shouldn’t surprise me that the webhook was versioned - this is quite common when doing REST integrations. It offers the author the ability to change functionality or data format without impacting existing installations. It’s a great feature and we offer it in ServiceNow as well.</div>
<div>Unfortunately it lead to quite a bit of confusion on my part as I did my development. I found dates were in one format from my test account and another from my paid account. It took a lot of testing over a few hours to discover that one account was sending me JSON information in a version 6 format, and another was version 8. Armed with this knowledge, it didn’t take much to create two different functions to parse the dates in to a GlideDateTime format. Fortunately, Todoist has an excellent date parser which can consume a wide variety of date formats, so my outbound REST messages can simply use the default ServiceNow system format &#34;YYYY-MM-DD hh:mm:ss”. As you work with web services, be on the lookout for versions in your incoming/outgoing REST messages and be prepared to deal with multiple versions in your code.</div>
<div>
<div> </div>
<div><strong>Business rules and script actions</strong></div>
<div>I’ve written and talked about business rules many times. They are a core component to configuring business logic on the Now Platform. If you’re not familiar with them and aren’t sure when to use a Before, After, and Async business rule, I recommend reading the <a href="https://developer.servicenow.com/app.do#!/document/content/app_store_doc_technical_best_practices_kingston_business_rules_technical_best_practices_overview?v&#61;kingston" rel="nofollow">Business Rules Technical Best Practice Overview</a> on the Developer Portal. What’s not mentioned in that article is that you cannot trigger outbound REST messages from a synchronous (BEFORE or AFTER) business rule (in scoped apps). They must be sent from an ASYNC business rule. This caused another challenge - I needed to trigger the outbound REST message when certain fields values (like text, state, due date, assigned to, etc) changed, and in ASYNC business rules, you don’t have the ability to check the “previous” value which means methods like changes(), changesTo(), and changesFrom() are not available. So if I went with an AFTER BR, I couldn’t send the REST message. If I went with ASYNC, I can’t tell if a value changes. Hmmm…</div>
<div>My solution, use an AFTER business rule to detect a field value change, then use an event to trigger a script action. <a href="community?id&#61;community_blog&amp;sys_id&#61;d0cdaea9dbd0dbc01dcaf3231f961976" rel="nofollow">I’ve written about script actions before</a>. Business rules are triggered by database actions (mostly), UI actions are manual triggers (like a button click), scheduled jobs happen at a certain time, and script actions are triggered by events. What’s an event? It’s when the system does something. Many built-in system events happen all the time like when you view a form. What’s more, YOU have the ability to create events and use them as needed to start processing of server side code in the background using a script action. The beauty of this solution is that I get the best of both worlds to compare current/previous values and functions like changes(), changesTo(), and changesFrom() in my business rule, then use <a href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;kingston&amp;id&#61;r_ScopedGlideSystemEventQueue_String_Object_String_String_String" rel="nofollow">gs.eventQueue()</a> to trigger the script action which then does the outbound REST message in the background. Win-win!</div>
<div> </div>
<div>
<div><strong>Locking</strong></div>
<div>When creating a  bidirectional integration, particularly one that involves webhooks, it is important to avoid “looping”. This is where an update on the first system triggers an update on the second system, then it reports back that a change has been made, and triggers another update on the first system and it just keeps going around and around again.</div>
<div>Part of this is solved by the <a href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;kingston&amp;id&#61;r_ScopedGlideSystemIsInteractive" rel="nofollow">GlideSystem function isInteractive()</a>. This function returns a “true” if the update was made via a web browser and false if it was made via a web service. By using it in the condition field of a business rule, I solved the problem of the webhook updating the ServiceNow record, triggering an outbound REST API. If the update came from someone banging on the keyboard, then run the business rule to talk to Todoist. If the update came from a non-interactive source (webhook/scripted REST API) then it doesn’t run. Simple enough… but what about if the webhook contains information that ServiceNow needs?</div>
<div>One such use case is when a new task is created in ServiceNow. The outbound REST message fires to create the task in Todoist, which triggers a webhook back to ServiceNow. Here’s where it gets tricky because ServiceNow initiated the conversation, but doesn’t need to create a new task (it already did that), but it needs to get the Todoist task ID and Project ID from the incoming webhook payload, then save it for later reference. To identify “who started this”, I implemented a simple locking mechanism. I created a “lock” table and each record represents an action initiated by ServiceNow. If the scripted REST API sees a lock, it knows that special action should be taken (or in some cases, no action at all), but if no lock file is seen, it indicates the conversation was started from Todoist and has a clear path to affect changes on ServiceNow. The diagram below gives a high level overview of the process when ServiceNow initiates the conversation. There were a few more details involved for certain operations like reassignment, but I won’t get in to that here.</div>
<div><img style="max-width: 100%; max-height: 480px;" src="f08dd302db40a704a39a0b55ca961938.iix" /></div>
<div> </div>
<div>
<div><strong>Name/value pair fields</strong></div>
<div>After implementing a simple locking mechanism, I realized I needed some details of WHAT was updated for taking the appropriate action. As noted above, if the date text was updated in Todoist (either via ServiceNow or Todoist), then I need to update the ServiceNow due date field. This is a special case of using bits of data from the webhook even though there is a lock record in place. On the other hand, if the text of the task changed (from SN) and a lock file exists, then the transaction ends there. ServiceNow made an update, transmitted the change to Todoist, and nothing more needs to be done.</div>
<div>My goal was to capture the details of these updates. My first thought was to use a simple Javascript object and store it as a JSON string in a ServiceNow string field. Using this method I could easily convert it to an object, check what has changed and use it in script logic. But something bothered me - JSON isn’t the easiest thing to read. Sure, I could use the json_view attribute on a string field, I’d have a nice icon to see it in a formatted fashion, but I found a better way - name/value pair fields. They basically store simple string/values in JSON, but display them as multiple entries.</div>
<div><img src="f39d1fc2db40a704a39a0b55ca961923.iix" /></div>
<div>
<div>The name/value pair field was introduced in Jakarta and I have been looking for a reason to use it for something other than HTTP headers. This seemed like a good use case. At a glance, I can tell that the text changed on the record that caused this lock and take appropriate action. What’s better is that I don’t have to modify my locking data model if I want to track other information in this field - it’s a single field. Behind the scenes, it stores JSON information and it’s very easy to read and script with. I encourage you to look for use cases for a name/value pair field.</div>
<div> </div>
<div><a href="https://docs.servicenow.com/bundle/london-platform-administration/page/administer/field-administration/reference/name-value-pair-scripting.html" rel="nofollow">Docs: Name-value pairs field type</a></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>