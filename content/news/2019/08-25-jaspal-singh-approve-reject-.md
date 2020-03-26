---
title: "ApproveReject button in Approval notification"
date: 2019-08-24T16:27:33.000Z
authors: ["Jaspal Singh"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=8080e8dc1babb380d01143f6fe4bcb0e"
---
<p>OOB notifications for Approval includes links for approval as below.</p>
<p><img src="https://community.servicenow.com/39fe1cd81babb380d01143f6fe4bcb4e.iix" /></p>
<p>These seems to be bringing more of standard user interface however, ServiceNow provides us a functionality of mail scripts that can be customized &amp; leverged to an extent so as to display dynamic button/images instead of standard links which is also very simple to build.</p>
<p><img src="https://community.servicenow.com/d2cf545c1babb380d01143f6fe4bcbc4.iix" /></p>
<p>Steps below can be followed for getting something as above in place.</p>
<p>1. Upload <strong>images</strong> as attached in the Images table from System UI &gt;&gt; Images.</p>
<p>2. Create mail scripts as below for Approve &amp; Reject options.</p>
<p>    a. <strong>Approve:</strong> email.button.approve.insert</p>
<pre class="language-markup"><code>var img &#61; &#34;/Approve.png&#34;;

var response &#61; &#34;approve&#34;;

var emailbod &#61; &#34;I approve this request.&#34;;

template.print(renderMailtoButton(img, response, emailbod));</code></pre>
<p> </p>
<p>  b. <strong>Reject:</strong> email.button.reject.insert</p>
<pre class="language-markup"><code>var img &#61; &#34;/Reject.png&#34;;

var response &#61; &#34;approve&#34;;

var emailbod &#61; &#34;I reject this request.&#34;;

template.print(renderMailtoButton(img, response, emailbod));</code></pre>
<p> </p>
<p>3.<strong> Script include:</strong> renderMailtoButton</p>
<pre class="language-markup"><code>function renderMailtoButton(image, response, emailbod){
	
	var instance &#61; gs.getProperty(&#34;instance_name&#34;);
	var link &#61; &#34;https://&#34; &#43; instance &#43; &#34;.service-now.com&#34;;
	var mark &#61; email.watermark;
	var number &#61; current.number;
	var emailAddress &#61; instance &#43; &#34;&#64;service-now.com&#34;;
	if (current.getTableName().indexOf(&#34;sysapproval&#34;) !&#61; -1){
		number &#61; current.sysapproval.number;
		}
			var mailLink &#61; &#39;&lt;a href&#61;&#34;mailto:&#39;&#43; emailAddress &#43; &#39;?subject&#61;Re:&#39; &#43; number &#43; &#39; &#39; &#43; response &#43;&#39;&amp;body&#61;&#39; &#43;  emailbod &#43;  mark &#43; &#39;&#34;&gt;&lt;img src&#61;&#34;&#39; &#43; link &#43; image &#43; &#39;&#34;&gt;&lt;/a&gt;&#39;;
	return mailLink;
	
}</code></pre>
<p>Script include above will help associating image (approve/reject), subject, body &amp; recipient which is called in the mail script.</p>
<p>renderMailtoButton is used to set below when Approve button is clicked.</p>
<p>To: (instance mail),</p>
<p>Subject: RE: RITM000000 approve</p>
<p>Body: I approve this request.</p>
<p><img src="https://community.servicenow.com/9433b4d81b6fb380d01143f6fe4bcb3c.iix" /></p>
<p>On click of Reject button from Approval mail below is set.</p>
<p>To: (instance mail),</p>
<p>Subject: RE: RITM000000 reject</p>
<p>Body: I reject this request.</p>
<p><img src="https://community.servicenow.com/7f43b0d81b6fb380d01143f6fe4bcb97.iix" />To summarize, renderMailtoButton is used to open outlook mail directly with the values being passed in Image, Subject, Body &amp; recipient list.</p>
<p>4. Call the <strong>mail scripts</strong> in the notification body (What it will contain) so as to make it work in the format as below.</p>
<p> </p>
<p></p>
<pre class="language-markup"><code>Dear ${approver.name},

Please approve or reject by clicking one of the buttons below and sending the email opened after click of any of below button.

${mail_script:email.button.approve.insert} ${mail_script:email.button.reject.insert}

</code></pre>
<p><strong>Output as below:</strong></p>
<p><img src="https://community.servicenow.com/1e6274981b6fb380d01143f6fe4bcb82.iix" /> </p>
<p> </p>
<p>Hope it helps.</p>
<p> </p>
<p>Thanks,</p>
<p>Jaspal Singh</p>