---
title: "Email Client  Client Templates"
date: 2018-08-06T07:46:54.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=df609af8dbbbdb405ed4a851ca961928"
---
<p>This post covers few basic <strong>use cases related to Email Client, Client Templates and Inbound Email Actions</strong> .</p>
<h2>Activate Email client for a table</h2>
<p>Out of box, <strong>Email Client</strong> is <strong>not</strong> active for all tables.</p>
<p>But you can activate it by adding <strong>email_client</strong> attribute to your table.</p>
<p>To do so, from the list view or form view of the table, right click on the header and open Configure-&gt;Dictionary.</p>
<p>Search for a dictionary record with <strong>Type</strong> as <strong>Collection</strong>. Open the dictionary record and click <strong>New</strong> in the <strong>Attributes</strong> Related List tab.</p>
<p><strong><img src="c9e647c2dbb75704e0e80b55ca96199e.iix" /></strong></p>
<p>On the Attribute form, select Attribute as &#39;Email Client&#39; and Save the record.</p>
<p> </p>
<p><img src="2e75cfcedb775704e0e80b55ca9619f9.iix" /></p>
<p> </p>
<p> </p>
<p>You should now see the Email button by clicking the More Option.</p>
<p><img src="f8ca1b5edbbf1304f7fca851ca9619e2.iix" /></p>
<p> </p>
<h2>Add &#39;Email&#39; button to Header Menu</h2>
<p>In lot of cases Email client is frequently used by ServiceDesk or Analysts and you don&#39;t want them to do multiple clicks to get to the Email Client, you can ease their life by giving them an option to directly open email client using a menu option.</p>
<p>Create a UI action on your table with below configuration</p>
<p>Name: Email</p>
<p>Table: &lt;Table Name&gt;</p>
<p>Action Name: open_email</p>
<p>Active: true</p>
<p>Show Update: True</p>
<p>Client: True</p>
<p>Form Button: True</p>
<p>Onclick: openEmailClient()</p>
<p>Script: </p>
<pre class="language-javascript"><code>function openEmailClient(){
	emailClientOpenPop(&#39;&lt;Table Name&gt;&#39;);
}</code></pre>
<h2> </h2>
<p>You should now see the &#39;<strong>Email</strong>&#39; button in the Header Menu.</p>
<p><img src="e466d5dfdb331b00f7fca851ca96198d.iix" /></p>
<h2> </h2>
<h2>Access to Scoped Application Roles</h2>
<p>If you want to activate email client for a scoped user, for ex, in my case I wanted to activate email client for sn_si.analyst you can follow the above steps. But that still doesn&#39;t activate the UI page for the role.</p>
<p>You need to add the scoped role to an access control named &#39;EmailClientProcessor&#39;. Unless you don&#39;t do that, you will receive a blank page when you click Email button.</p>
<h2><img src="f637f017db35ef40d6a102d5ca96191a.iix" /></h2>
<p> </p>
<h2>Show Send/Receive Emails in Activity Stream</h2>
<p>If your user doesn&#39;t see emails in the activity stream, you may need to add the user role to the system property glide.ui.activity.email_roles.</p>
<h2>Add Reply, Reply All, Forward to Record Activity</h2>
<p>You can also add Reply, Reply All, Forward button by adding the glide.ui16.emailStreamResponseActions to system properties.</p>
<p>Navigate to sys_properties.list and add the glide.ui16.emailStreamResponseActions and set the value true.</p>
<p> </p>
<p>Then send an email from email client. The email sent should appear in the activity and you should see the Reply, Reply All and Forward button for every email sent out and received in the record.</p>
<p><img src="0501aecddb4d6fc4feb1a851ca961924.iix" /></p>
<p> </p>
<h2>Receive Emails in HTML format</h2>
<p>Out of box, all inbound emails from end user is converted to a plain text and added to the comments of the record.</p>
<p>The following line adds the email to the incident comments in plain text format.</p>
<pre class="language-javascript"><code>current.comments &#61; &#34;received from: &#34; &#43; email.origemail &#43; &#34;\n\n&#34; &#43; email.body_text;</code></pre>
<p>I would prefer adding them in the same format it was sent instead of adding a Plain Text, which is not readable in most of the cases. </p>
<p>Now to add the email body to the comments in HTML format, all you have to do is replace the above line with below script</p>
<pre class="language-javascript"><code>current.comments &#61; &#34;received from: &#34; &#43; email.origemail &#43; &#34;\n\n[code]&#34; &#43; email.body_html&#43;&#34;[/code]&#34;;
</code></pre>
<h2> </h2>
<p><img src="d31ad9dfdbb31b00f7fca851ca961977.iix" /></p>
<h2>Add users in CC to watch List</h2>
<p>An inbound email from end users can also have CC. But when ServiceNow creates an incident, only sender is notified that the incident is created and people in CC have no idea about the incident progress. Then you end up adding them to Watch List manually.</p>
<p>Instead of doing it manually you can automate it by using below script. Add below script to your inbound Create/Update script and it will automatically add users in CC to the Watch List of the incident.</p>
<p> </p>
<pre class="language-javascript"><code>	var rarray &#61; email.recipients.toLowerCase().split(&#34;,&#34;);
	var nrarray &#61;  &#39;&#39;;
	
	for (var i&#61;0; i&lt;rarray.length; i&#43;&#43;) {
		if (rarray[i] !&#61; instanceEmail &amp;&amp; current.u_cc.indexOf(rarray[i])&#61;&#61;-1) {
			if (nrarray)
				nrarray&#61;nrarray&#43;&#39;,&#39;&#43;rarray[i];
			else
				nrarray &#61; rarray[i];
		}
	}
	
	if (nrarray!&#61;&#39;&#39;)
		{
		if (current.u_cc!&#61;&#39;&#39;)
			current.watch_list &#61; current.u_cc&#43;&#39;,&#39;&#43;nrarray;
		else
			current.watch_list &#61; nrarray;
	}</code></pre>
<p> </p>
<h2>Client Templates</h2>
<p>You can do a lot with Client Templates. Below are few important functionality you can use in conjunction with email client.</p>
<p> </p>
<h3>Set From and ReplyTo in Client Templates</h3>
<p>If you want to use a different email address as From and ReplyTo in Client Templates, you can do so by adding the From and ReplyTo field to the form and setting these values. Out of box these field are not available on the form.</p>
<p>For example, if you want to set the <strong>From</strong> and <strong>ReplyTo</strong> as your HR mailbox ID, you can do so by adding that email id in From and ReplyTo fields in Client Template.</p>
<h3> <img src="223f568bdb7b170054250b55ca96197f.iix" /></h3>
<h3>Auto-populate To and CC from incident</h3>
<p>To set the recipient in the client template, you can add caller to the <strong>To</strong> field. Similarly from the previous use case <strong>&#39;All Users in CC to Watch List&#39;</strong>, you can add them to CC by just adding watch_list to the CC field.</p>
<p> <img src="af6f1acbdb7b170054250b55ca9619c7.iix" /></p>
<h3> </h3>
<h3>Create Condition based Client Templates</h3>
<p>If you want to configure condition based Client Templates, you can do so by adding Condition field to the Client Template form.</p>
<p>Out of box, this field is not present on the Client Template Form. You can add it to the form using form layout.</p>
<p>For Ex: If you want to create Client Templates based on Priority, you can add the condition to the Client Template and based on the priority of the incident, the corresponding client template will open. Below is an example.</p>
<p><img src="46f8df96dbbf1304f7fca851ca9619e7.iix" /></p>
<h3> </h3>
<h3>Auto-populate Subject and Email Body</h3>
<p>To set a field as <strong>Subject</strong> in a Client Template, you can add ${field_name} to your subject field on Client Template. </p>
<p>Similarly you can add ${field_name} to the <strong>Body HTML </strong>field in the Client Template.</p>
<p> </p>
<p>Ex: if you want to add short description as Subject and description as Body HTML, you can add ${short_description} to Subject field and ${description} to Body HTML.</p>
<p> </p>
<h3>Sending a high importance email from Email Client</h3>
<p>We had a use case, where our team wanted to send a high importance email via the email client. I had to raise a HI ticket for the same and ServiceNow responded that OOB there is no solution, but they provided below link which lead me to what I was trying to achieve.</p>
<p><a href="community?id&#61;community_question&amp;sys_id&#61;48d107a9db98dbc01dcaf3231f961923" rel="nofollow">https://community.servicenow.com/community?id&#61;community_question&amp;sys_id&#61;48d107a9db98dbc01dcaf3231f961923</a></p>
<p> </p>
<p>I referred the above thread and this is what I came up with.</p>
<p>I created an onBefore onUpdate Business Rule with below configurations.</p>
<p>Condition</p>
<p><img src="6ba2f36cdb35ab0011762183ca9619bb.iix" /></p>
<p>Script</p>
<pre class="language-javascript"><code>(function executeRule(current, previous /*null when async*/) {
	
	current.importance &#61; &#34;high&#34;;
	current.subject &#61; current.subject.substring(1);
	
})(current, previous);</code></pre>
<p> </p>
<p>So now any email sent from email client, if the analyst add an &#39;!&#39; to the start of the subject in the Email Client, the BR will mark the email as High Importance. It will also remove the &#39;!&#39; from the subject, so that subject doesn&#39;t change.</p>
<p> </p>
<h3>Auto-populate Email Body using Email Script</h3>
<p>If you want to add any content dynamically using a script, you can create an email script and add to the Body HTML.</p>
<p>Ex:. I wanted to add the inbound HTML email received in use case &#39;Receive Emails in HTML format&#39; to be added as a email body.</p>
<p>Navigate to <strong>System Notifications-&gt;Email-&gt;Notification Email Scripts</strong></p>
<p>Create a email script to pull the html comments.</p>
<p><strong>Name</strong>:get_journal_email_body<br /><strong>Script</strong>:</p>
<pre class="language-javascript"><code>(function runMailScript(current) {
	var html_str &#61; current.comments.getJournalEntry(1).replace(&#39;[code]&#39;,&#39;&#39;);
	html_str &#61; html_str.replace(&#39;[/code]&#39;,&#39;&#39;);
	template.print(html_str);
	
})(current);</code></pre>
<p> </p>
<p>Then add the email script created to the <strong>body HTML. </strong>Syntax is ${mail_script:&lt;Name of the Email Script&gt;}</p>
<pre class="language-javascript"><code>${mail_script:get_journal_email_body}</code></pre>
<p>Now when you click on Email, it will open the email client with the additional comments in the body of the email</p>
<h3><img src="61aa9593dbf31b00f7fca851ca961923.iix" /></h3>
<h3>Auto-populate Email Signatures</h3>
<p>You can also ease analysts work by adding signature automatically for them</p>
<p>To do so, you can create another email script in below format. </p>
<p>Set<strong> Newlines to HTML:</strong> <strong>true</strong></p>
<p><strong>Script</strong>:</p>
<pre class="language-markup"><code>(function runMailScript(current) {

var user &#61; new GlideRecord(&#39;sys_user&#39;);
user.get(gs.getUserID());

template.print(user.getValue(&#39;name&#39;)&#43;&#39;\n&#39;);
template.print(&#39;Title:&#39;&#43;user.getValue(&#39;title&#39;)&#43;&#39;\n&#39;);
template.print(&#39;Business Phone:&#39;&#43;user.getValue(&#39;phone&#39;)&#43;&#39;\n&#39;);	
template.print(&#39;Department:&#39;&#43;user.department.getDisplayValue()&#43;&#39;\n&#39;);

})(current);</code></pre>
<p>You can add additional formatting by adding HTML tags.</p>
<p> </p>
<p>Now you can add both the signature and comments email script to the bodyHTML as below</p>
<pre class="language-javascript"><code>${mail_script:get_user_signature}
${mail_script:get_journal_email_body}</code></pre>
<p> </p>