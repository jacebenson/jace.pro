---
title: "Automating ATF  My Journey Building a Test Recorder"
date: 2020-02-09T14:15:21.000Z
authors: ["Paul Morris"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=a4398aea1bb20c18fff162c4bd4bcbc8"
---
<p>The primary Use Case is for Regression Testing to speed up the time to upgrade ServiceNow.</p>
<p>The Automated Test Framework is great for creating automated regression tests, but someone still has to write them.</p>
<p>As I was writing more and more regression tests using ATF, I started to realize that, most of the time, I was just creating the same pattern of tests over and over:</p>
<ul><li>Impersonate a User</li><li>Open a new Record</li><li>Check which UI Actions are Visible</li><li>Populate the Form</li><li>Check field values that may have changed as a result of populating the form</li><li>Check Field State (Mandatory, Read-Only &amp; Hidden)</li><li>Click UI Action</li></ul>
<p>Being a ServiceNow developer, I thought to myself &#34;surely there is a way to automate this!&#34;. </p>
<h2>Creating an ATF Recorder - Proof of Concept</h2>
<p>These were equivalent to the following Test Steps:</p>
<ul><li>Impersonate</li><li>Open a New Form</li><li>UI Action Visibility</li><li>Set Field Values</li><li>Field Values Validation</li><li>Field State Validation</li><li>Click UI Action </li></ul>
<p>Before wasting many hours in my home office study, I did what all good engineers do first - test the concept.</p>
<p>I needed to work out if I could get all the information I needed from ServiceNow to generate Test Steps for these repetitious actions.</p>
<p>Let&#39;s go through each one:</p>
<h2>Impersonate</h2>
<p>Impersonates the specified user in the current session for the duration of the test or until another user is impersonated.</p>
<h3>Inputs</h3>
<ul><li>User (sys_id)</li></ul>
<p>It is fairly trivial to get the sys_id of the currently logged in user:</p>
<pre class="language-javascript"><code>var currentlyLoggedInUser &#61; g_user.userID;</code></pre>
<p>Easy.</p>
<h2>Open a New Form</h2>
<p>Opens a new form for the specified table.</p>
<h3>Inputs</h3>
<ul><li>Table (String)</li><li>View (String)</li></ul>
<p>Using Client Scripts, I know I can determine the table and view of the current form</p>
<h4>Table</h4>
<pre class="language-javascript"><code>var tableName &#61; g_form.getTableName();</code></pre>
<h4>View</h4>
<pre class="language-javascript"><code>var view &#61; g_form.getViewName();</code></pre>
<h2>Check UI Action Visibility</h2>
<p class="p1"><span class="s1">Validates whether a UI Action is visible on the current form.</span></p>
<p class="p1"><span class="s1">You can assert that any number of UI Actions are either visible or invisible. </span></p>
<h3 class="p1"><span class="s1">Inputs</span></h3>
<ul><li><span class="s1">Table</span></li><li><span class="s1">Visible (GlideList, UI Action Reference)</span></li><li><span class="s1">Not Visible (GlideList, UI Action Reference)</span></li></ul>
<p><span class="s1">We&#39;ve already worked out how to get the Table of the current form, but there isn&#39;t any API to get visible UI Actions, so I had to write my own.</span></p>
<h4><span class="s1">Visible</span></h4>
<p><span class="s1">Luckily, ServiceNow has already done most the work for me in its Test Config code:</span></p>
<pre class="language-javascript"><code>function checkVisibility(actionId) {
	var queryString &#61; &#34;[gsft_id&#61;&#39;&#34; &#43; actionId &#43; &#34;&#39;]&#34;;
	var actionIdExist &#61; testFrameWindow.document.querySelector(queryString);
	
	if (actionIdExist &#61;&#61; null)
		return false;
	
	if (!isVisible(actionIdExist))
		return false;
	
	return true;
}
	
function isVisible(dom) {
	return !dom.hidden &amp;&amp; dom.style.visibility !&#61; &#39;hidden&#39;;
}</code></pre>
<p>I just needed to get a list of all possible UI Action ID&#39;s, which was pretty easy to do based on the queryString that ServiceNow had already provided.</p>
<pre class="language-javascript"><code>function getVisibleUIActions() {
	var visibleUIActions &#61; [];
	var queryString &#61; &#34;[gsft_id]&#34;;
	var uiActionElements &#61; document.querySelectorAll(queryString);

	for (var i in uiActionElements ) {
		var uiActionElement &#61; uiActionElements[i];
		if (isElementVisible(uiActionElement)) {
			var sysId &#61; uiActionElement.getAttribute(&#34;gsft_id&#34;);
			visibleUIActions.push(sysId);
		}
	}

	return visibleUIActions;
}</code></pre>
<h4>Not Visible</h4>
<p>To determine the UI Actions that are not visible, I just need to have a list of every UI Action that could possibly be displayed, and remove all UI Actions that are visible.</p>
<p>When manually populated this Test Step, ServiceNow already has reference qualifiers in place that hides any UI Actions that wouldn&#39;t be possible to display.</p>
<pre class="language-javascript"><code>function getFormUIAction(tableName) {
	if (GlideStringUtil.nil(tableName)) {
		return &#34;table&#61;global^form_action&#61;true^active&#61;true&#34;;
	}
	var currentAndParentTables &#61; GlideDBObjectManager.get().getTables(tableName);
	var str &#61; currentAndParentTables.toString();
	var tables &#61; str.substring(1, str.length() - 1);
	tables &#43;&#61; &#34;, global&#34;;
	var stringQuery &#61; &#34;tableIN&#34; &#43; tables &#43; &#34;^form_action&#61;true^active&#61;true&#34;;
	return stringQuery;
}</code></pre>
<p>This was almost perfect but was missing one thing.</p>
<p>To do full regression, you need to consider UI Actions of and Active value of False to be potentially visible, as upgrades may deprecate UI Actions that you want your test to know about, as this is a change in state.</p>
<p>To solve this, I just added an OR<br /><br /></p>
<pre class="language-javascript"><code>var allUIActionsQuery &#61; getFormUIAction(tableName) &#43; &#34;^ORactive&#61;false&#34;;</code></pre>
<h2>Set Field Values</h2>
<p>Sets field values on the current form.</p>
<h3>Inputs</h3>
<ul><li>Table</li><li>Field Values (String, Encoded Query)</li></ul>
<h4>Field Values</h4>
<p>There isn&#39;t any documented Client Script API to get all populated fields on a form.</p>
<p>With a little digging in Xplore, I found that GlideForm had a property called &#39;modifiedFields&#39; which tracked all fields that had changed value by means of manual changes:</p>
<pre class="language-javascript"><code>var modifiedFields &#61; g_form.modifiedFields;</code></pre>
<p>Changing the Short Description field on an Incident would result in the contents of modifiedFields as follows:</p>
<pre class="language-markup"><code>{incident.short_description: true}</code></pre>
<p>The values weren&#39;t there, but I could get that just as easily:</p>
<pre class="language-javascript"><code>g_form.getValue(&#39;incident.short_description&#39;)</code></pre>
<h2>Field Values Validation</h2>
<p>Validates field values on the current form.</p>
<h3>Inputs</h3>
<ul><li>Table</li><li>Conditions (String, Encoded Query)</li></ul>
<p>If Set Field Values throws a fail if the field is not populated as defined in the Test Step, then why do I need to validate field values?</p>
<p>Take changing the value of Impact or Urgency as an example.</p>
<p>Changing these values may change the value of Priority - but the Priority field will not show up in g_form.modifiedFields - nor would you want it to.</p>
<p>The Priority field is read-only, and if your Test tried to set that field value, it would fail. </p>
<p>We need a way to find all field values that have changed as a result of changing other fields.</p>
<h4>Conditions</h4>
<p>Back in my System Administrator days, I created hundreds of Email Notifications via Notification records.</p>
<p>A great feature of Email Notifications was that you could adjust the record and click &#39;Preview Notification&#39; to see what effect your changes would have, without committing to saving those changes.</p>
<p>With this in mind, I knew there had to be an existing way to get all fields that had changed value. Reverse engineering is your friend :)</p>
<p>The UI Action code revealed the following:</p>
<pre class="language-javascript"><code>function showSimulator() {
	var generationType &#61; g_form.getValue(&#39;generation_type&#39;);
	if (!g_form.getValue(&#39;collection&#39;) &amp;&amp; generationType &#61;&#61; &#39;engine&#39;)
		g_form.addErrorMessage(new GwtMessage().getMessage(&#34;Table is required to preview this notification&#34;));
	else {
		if (typeof rowSysId &#61;&#61; &#39;undefined&#39;)
			 sysId &#61; gel(&#39;sys_uniqueValue&#39;).value;
		else
			 sysId &#61; rowSysId;
		var dialogClass &#61; window.GlideModal ? GlideModal : GlideDialogWindow;
		var dd &#61; new dialogClass(&#34;notification_preview&#34;);
		dd.setTitle(&#34;Notification Preview&#34;);
		dd.setWidth(800);
		dd.setPreference(&#39;sysparm_notification_id&#39;, sysId);
		dd.setPreference(&#39;sysparm_changed_fields&#39;,g_form.serializeChangedAll());
		dd.render();
	}
}</code></pre>
<p> </p>
<p>The golden line:</p>
<pre class="language-javascript"><code>dd.setPreference(&#39;sysparm_changed_fields&#39;,g_form.serializeChangedAll());</code></pre>
<p>The output from serializeChangedAll() looks something like this:</p>
<p>&amp;sys_target&#61;incident&amp;sys_uniqueValue&#61;c8ef1aaedb76c8109e101461399619ea&amp;sys_row&#61;-1&amp;sysparm_encoded_record&#61;SBSvOy%2BGbxRnTUw297uYJlfHsT4CchYhL8qsQvVS4oYRqJf5GoVaR2BXDzla2tU8q3ug3aoDHV9t1DUxeof9%2BC1O6nUWGM99c5XsbmeFryD%2FqmZLEMKuybxG2rt59gLaa%2FL0qnX8xqsFbcVp2V8RIjM5P5v23ZrzyULjWCB18QEkKCv4xTRl7wxpg0NnJkLmjeLYPSlECZnCV3mhSUGxXpyyKC635YQFYbDz5N5yYSXjIc8yObiI2GdU3yzJwWEkDX3bpLCTIJJrIB%2FOmfg5YI0f%2F1iRgdGywLd%2F%2F1LVEV6dUdT33sgd0z82ASeObP%2FOeXZ6O1%2Fe5iXWrd9I7zw20SAk2JKEzBYQBgPBBDA42X%2BUZYlzv4dv4nlYITwcKdYXi1PYzruNthKzwKUWq4kdR6KJp7kErQ7xVzy5W5tTfqp500GkCke57BCUxrZZCFqJSwSTh2tB7lf7HJSArNOqeD19niysdPM4W%2BREKFGCwQdmrQtGvvFLq9oMWIT3Pjrz%2FjA8I9WF6s%2F%2B8OpMI7SlZRbYPbACZEhL6qVn5T8XdrMlhPFWxe3rPuIf%2BmYxminAf1uJmof%2BorxB9gPaNQfdZi2Uwj%2FCBMiK%2FeSKEwsZNz%2B3eFwnu3aMTg%3D%3D&amp;incident.impact&#61;1&amp;incident.urgency&#61;1&amp;<strong>incident.priority&#61;1</strong></p>
<p>It&#39;s ugly, but we can work with it.</p>
<p>Using some dirty <a href="https://en.wikipedia.org/wiki/Regular_expression" rel="nofollow">Regular Expression</a>, I was able to strip out everything except the changed fields then turn it into an encoded query:</p>
<pre class="language-markup"><code>impact&#61;1^urgency&#61;1^priority&#61;1</code></pre>
<h2>Field State Validation</h2>
<p>Validates states of the desired fields.</p>
<p>The field states can be one (or more) of mandatory, not mandatory, read only, not read only, visible and not visible.</p>
<h3>Inputs</h3>
<ul><li>Table</li><li>Visible (GlideList, Field names)</li><li>Not visible (GlideList, Field names)</li><li>Read only (GlideList, Field names)</li><li>Not read only (GlideList, Field names)</li><li>Mandatory (GlideList, Field names)</li><li>Not mandatory (GlideList, Field names)</li></ul>
<p>All field names are contained in g_form.elements fieldName property. You can get all the field names if you like by looping through them:</p>
<pre class="language-javascript"><code>var	fieldElements &#61; g_form.elements;
var fieldNames &#61; [];

for (var f in fieldElements) {
	if (fieldElements.hasOwnProperty(f)) {
		var fieldElement &#61; fieldElements[f];
		fieldNames.push(fieldElement.fieldName);
	}
}</code></pre>
<h4>Visible</h4>
<p>The isVisible function takes an element (like those in g_form.elements) and does not work with a field name alone.</p>
<pre class="language-javascript"><code>var uiElement&#61; g_form.getGlideUIElement(fieldName);
var visible &#61; g_form.isVisible(uiElement);</code></pre>
<h4>Not Visible</h4>
<pre class="language-javascript"><code>var uiElement&#61; g_form.getGlideUIElement(fieldName);
var notVisible &#61; !g_form.isVisible(uiElement);</code></pre>
<h4>Read Only</h4>
<p>The isReadOnly() function is more complicated still:</p>
<pre class="language-javascript"><code>var element &#61; g_form.getElement(fieldName);
var control &#61; g_form.getControl(fieldName);
var isReadOnly &#61; g_form.isReadOnly(element,control);</code></pre>
<h4>Not Read Only</h4>
<pre class="language-javascript"><code>var element &#61; g_form.getElement(fieldName);
var control &#61; g_form.getControl(fieldName);
var isNotReadOnly &#61; !g_form.isReadOnly(element,control);</code></pre>
<h4>Mandatory</h4>
<p>Why is the last one the easiest?</p>
<pre class="language-javascript"><code>var isMandatory &#61; g_form.isMandatory(fieldName);</code></pre>
<h4>Not Mandatory</h4>
<p> </p>
<pre class="language-javascript"><code>var isNotMandatory &#61; !g_form.isMandatory(fieldName);​</code></pre>
<h2>Click a UI Action</h2>
<p>Clicks a UI Action on the current form.</p>
<h3>Inputs</h3>
<ul><li>Table</li><li>UI action (Reference UI Action)</li><li>Assert type</li></ul>
<h4>UI Action</h4>
<p>I thought this one was going to be really simple. </p>
<p>It turned out this was the hardest one to do and has many limitations that I didn&#39;t realize when I was first doing this proof of concept.</p>
<p>To get the UI Action just clicked, you can pop the following code into an onSubmit Client Script:</p>
<pre class="language-javascript"><code>var actionName &#61; g_form.getActionName();</code></pre>
<p>If you click the OOTB Save button, you get an actionName of the following:</p>
<pre class="language-markup"><code>sysverb_update_and_stay</code></pre>
<p>The Test Step requires a sys_id, so we need to work out how we can use an action name to get the sys_id.</p>
<p>I ended up reverse-engineering the code for getActionName() to get the sys_id:</p>
<pre class="language-javascript"><code>function getUIActionSysID() {
	var uiActionSysID&#61;&#39;&#39;;
			
	var form &#61; g_form.getFormElement();
	if (form) {
		var theButton &#61; form.sys_action;
		if (theButton) {
			var buttonName &#61; theButton.value;
			//Try get UI Action Sys ID
			var actionElement &#61; g_form.getElement(buttonName);
			if (actionElement) {
				uiActionSysID &#61; actionElement.getAttribute(&#34;gsft_id&#34;);
				jslog(&#39;Clicked UI action SYS_ID is &#39; &#43; uiActionSysID);
			}
		}
	} 

	return uiActionSysID;
}</code></pre>
<p>I soon discovered that g_form.getActionName() is not a reliable way to track the UI Action the was clicked.</p>
<p>Client-Side UI Actions that use g_form.save() or g_form.submit() without an action name as a parameter just result in the OOTB action names for save and submit being captured.</p>
<p>I&#39;ll dig into this further at a later time. You can see how I worked around this for yourself.</p>
<h4>Assert Type</h4>
<p>We can really only test for success here, as onSubmit Client Scripts are never called if the UI Action result was not successful.</p>
<h2>Conclusion</h2>
<p>So, I had proof to myself that I could automate the recording of ATF Tests for forms.</p>
<p>I thought it would only take a few hours to build a simple framework to automate all the Test Steps above.</p>
<p>I wanted to make a simple ATF Recorder that could be used by a Process Coordinator, a non-technical role who knew how to use ServiceNow but not how to use ATF.</p>
<p>Tests needed to almost always pass after recording, with little to no modification required to the generated Test.</p>
<p>The following Use Cases were decided for my MVP, using an OOTB system:</p>
<ul><li>Record the following Form Actions</li><li><ul><li>Impersonate</li><li>Open a New Form</li><li>UI Action Visibility</li><li>Set Field Values</li><li>Field Values Validation</li><li>Field State Validation</li><li>Click UI Action </li></ul>
</li><li>Record the following use Cases End to End with a Pass on replay</li><li><ul><li>New Incident to Resolution</li><li>Request Item Workflow</li><li>New Normal Change to Closure including Approvals</li></ul>
</li></ul>
<p>Like a typical Developer, I grossly underestimated how much effort this would take.</p>
<p>Like a typical Engineer, my proof of concepts was not exhaustive enough to detect some limitation that almost made this impossible. I&#39;ll address the Limitations in further blogs. Watch this space!</p>
<p>Weeks / Months later, I present to the Community my Application <a href="https://developer.servicenow.com/app.do#!/share/contents/5672333_regress_atf_service_catalog_test_generator?v&#61;0.99&amp;t&#61;PRODUCT_DETAILS" target="_blank" rel="noopener noreferrer nofollow">⏺️ Regress - ATF Recorder for UI16 Forms</a>, now available on Share (v0.99).</p>
<p>Thanks for reading and please bookmark and comment below.</p>
<p>If you enjoyed this, please check out my Technical Blog series <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;12d41149db7b67805129a851ca961966" rel="nofollow">Service-KnowHow</a>.</p>