---
title: "Save Email Text as Attachment"
date: 2018-06-11T23:15:16.000Z
authors: ["Michael Ritchie"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=94ebc947db621b002be0a851ca961921"
---
<p>As you may know, ServiceNow has the ability to accept an inbound email and perform some action.  <a href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/administer/notification/concept/c_InboundEmailActions.html" rel="nofollow">Inbound email actions</a> allow you to configure what happens when the instance receives an email. Any attachments on the email will automatically get attached to the record created by the email.  If the created record is of type task, the activity stream will also contain a link to the contents of the inbound email as well:</p>
<p><img src="cba649c3dbaed7002be0a851ca961900.iix" /></p>
<p>While the activity stream is useful, it can grow quite long and the records don&#39;t stay around forever.  There have been a few posts on this community asking for the ability to create an attachment with the contents of the email and attach it to the record.  <a href="community?id&#61;community_question&amp;sys_id&#61;856f36a9db58dbc01dcaf3231f9619cb" rel="nofollow">This solution</a> by &#64;warrem inspired me to create this blog post outlining steps to solve this use case since some users have posted followup questions.</p>
<p>ServiceNow includes an attachment API that allows you to create an attachment from any data.  For example, this API is leveraged by the workflow editor&#39;s Attachment Note activity which allows you to create a task attachment from a string of text.  This solution will leverage this API and can be called by adding a few lines of code to your existing inbound email actions.</p>
<p><strong>Steps:</strong></p>
<ul><li>Navigate to <strong>System Definition \ Script Includes</strong> and click <strong>New</strong>.</li><li>Set the following values:</li><li>
<ul><li>Name: <strong>emailAsAttachmentUtil</strong></li><li>Accessible from: <strong>All application Scopes</strong> &#61; this will allow it to be called by all applications</li><li>Active: <strong>checked</strong></li><li>Description: You may want to set the description to something like the following to document what this script includes does and how to call it</li></ul>
</li></ul>
<pre class="language-markup"><code>This utility script will take contents from an inbound email and create an attachment on the created record from the inbound email action.  To utilize this script, add the following lines at the end of the inbound email action script:
var emailAsAttachment &#61; new global.emailAsAttachmentUtil();
emailAsAttachment.createAttachment(email, current);</code></pre>
<ul><li>
<ul><li>Script:</li></ul>
</li></ul>
<pre class="language-javascript"><code>var emailAsAttachmentUtil &#61; Class.create();
emailAsAttachmentUtil.prototype &#61; {
    initialize: function() {
		this.newLineChar &#61; &#34;\r\n&#34;;  // Microsoft Windows expects \r and \n for return and new line
		this.contentType &#61; &#34;text/plain&#34;;
    },
	
	createAttachment: function (emailRec, currentRec) {
		var fileName &#61; emailRec.subject &#43; &#39;.eml&#39;;
		
		// Setup array to push email values into.  Add additional as needed/
		var emailData &#61; [];
		emailData.push(&#34;To: &#34; &#43; emailRec.to);
		emailData.push(&#34;Subject: &#34; &#43; emailRec.subject);
		emailData.push(&#34;From: &#34; &#43; emailRec.origemail);
		emailData.push(emailRec.body_text);
		
		// Convert emailData to a string separated by new line character.
		var emailString &#61; emailData.join(this.newLineChar);
		
		// Create attachment with email string and attach it to the record creatd by the email.
		var sysAttachment &#61; new GlideSysAttachment();
		sysAttachment.write(currentRec, fileName, this.contentType, emailString);
	},

    type: &#39;emailAsAttachmentUtil&#39;
};</code></pre>
<ul><li>
<ul><li>Click <strong>Submit</strong></li></ul>
</li></ul>
<p>Your script include should look similar to the following:</p>
<p><img src="18b9cd83db221b002be0a851ca961901.iix" /></p>
<ul><li>Navigate to <strong>System Policy \ Email \ Inbound Actions</strong> and open the one that you want to capture the contents of the email as an attachment.</li><li>Go to the Actions Tab and scroll to the bottom of the script and paste in the following:</li></ul>
<pre class="language-javascript"><code>var emailAttachment &#61; new global.emailAsAttachmentUtil();
emailAttachment.createAttachment(email, current);</code></pre>
<ul><li>Click <strong>Update</strong></li></ul>
<p>Now any email that is processed by this inbound email action will log the contents as an attachment:</p>
<p><img src="fd2b8187db621b002be0a851ca9619e0.iix" /></p>
<p><img src="60fc85c7dba21b002be0a851ca9619ab.iix" /></p>
<p><strong>Things to be aware of:</strong></p>
<ul><li>You can add this functionality to any inbound action</li><li>The Email&#39;s To, Subject, From, and Body are captured in the attachment.</li><li>
<ul><li>If there are other fields you wish to capture feel free to edit lines 13-16 of the emailAsAttachmentUtil Script Include</li></ul>
</li><li>Line 4 of the emailAsAttachmentUtil Script Include sets the new line character of the text file.  Windows requires \r (carriage return) and \n (new line) to show correctly in Notepad as an example.  Feel free to edit for your environment.</li></ul>
<p> </p>