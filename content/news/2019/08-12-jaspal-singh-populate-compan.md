---
title: "Populate Company Logo dynamically in email notifications"
date: 2019-08-11T13:04:47.000Z
authors: ["Jaspal Singh"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=df65b0c8db9b338014d6fb24399619fc"
---
<p>Though User table is base for all User records in ServiceNow the information always differs &amp; which should. We have scenarios where multiple company&#39;s User records are created as per business requirements. One such situation would be 2 companies getting merged so as to provide solution from single ServiceNow instance which means some standardtization needs to be in place in terms of process, modules, etc. But one such thing companies want to be different is to have their company specific logo maintainted &amp; to be used in the notifications being sent out &amp; also in the banner (ServiceNow backend). This may be &amp; can be considered a valid requirement which business may demand &amp; is very simple to implement by following steps below.</p>
<p>1. Upload Company&#39;s logo in Image table with appropriate name.</p>
<p>2. Update the Image in Companies table for valid company record in Banner image field.</p>
<p>3. Create a mail script (for notifications to dynamically embed company&#39;s logo as &amp; when triggered).</p>
<p> </p>
<p>Since, Step 1 is just upload of image with valid name it is simple &amp; does not require a detailed explanation.</p>
<p><strong>2. Update the image in Companies table for valid company record.</strong></p>
<p>Look for company record from User Administration &gt;&gt; Companies &amp; update the image in Banner image field of the Company form. Whole purpose of getting the image updated in the Banner image field is ServiceNow OOB takes care of the image to be displayed when the User logs in as the banner image which can also be leveraged for the notifications to dynamically populate the image.</p>
<p>So, in our case if Company A&#39;s User logs in Company A&#39;s image will be displayed in the banner area of ServiceNow instance &amp; vice-versa for other Company&#39;s Users when they log in.</p>
<p><strong>3. Create a mail script (for notifications to dynamically embed company&#39;s logo as &amp; when triggered).</strong></p>
<p>Mail Scipt: pick_company_image</p>
<pre class="language-markup"><code>(function runMailScript(/* GlideRecord */ current, /* TemplatePrinter */ template,
/* Optional EmailOutbound */ email, /* Optional GlideRecord */ email_action,
/* Optional GlideRecord */ event) {
	
//Checks if current table is incident

	var usrcomp&#61;current.caller_id.company;//gets company from current record
	var chkcomp&#61;new GlideRecord(&#39;core_company&#39;);
	chkcomp.addQuery(&#39;sys_id&#39;,usrcomp);
	chkcomp.query();
	while(chkcomp.next())
		{
		var imgis&#61;chkcomp.banner_image;
		if(imgis&#61;&#61;&#39;&#39;) //if there is no image display default
			{
			template.print(&#39;&lt;img src&#61;&#34;ITS1.png&#34; width&#61;&#34;272&#34; height&#61;&#34;61&#34;/&gt;&#39;);//replace ITS1.png with some default image from image table
		}
		
		else
			{
				template.print(&#39;&lt;img src&#61;&#34;&#39; &#43; imgis &#43; &#39;&#34; /&gt;&#39;);
		        }
	         }

	
})(current, template, email, email_action, event);</code></pre>
<p>Once, done you need to call the mail script in the notification where you want records to be dynamically have company&#39;s logo displayed when notifications are sent. To call mail script include below in the notification body.</p>
<p><strong>${mail_script:pick_company_image}</strong></p>
<p> </p>
<p><strong>Note:</strong> The above mail script will work only for incidents as in the code above we are looking for caller_id&#39;s company which may be a field only on incidents. If it is to be used for RITMs then caller_id field from the above script will have to be replaced with requested_for or any other appropriate field. </p>
<p> </p>
<p> </p>
<p>Hope it helps. Cheers!!</p>
<p> </p>
<p>Thanks,</p>
<p>Jaspal Singh</p>