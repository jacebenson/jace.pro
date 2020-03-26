---
title: "Clone Cleanup Script Example"
date: 2018-10-13T11:18:20.000Z
authors: ["Jim Coyne"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=23ec41f6db81ab40fece0b55ca961998"
---
<h5>Included in the <a href="community?id&#61;community_blog&amp;sys_id&#61;b3c843aadb892b40fece0b55ca961906" rel="nofollow">Developer Toolbox</a> Update Set available on Share (link in the &#34;Developer Toolbox&#34; post).</h5>
<p> </p>
<p>I really like using a Clone Cleanup Script to reset certain things after a clone.  Might as well automate as many things as possible.</p>
<p>Here&#39;s the base script I start off with and add to it as needed:</p>
<pre class="language-javascript"><code>/*
Written by Jim Coyne - https://community.servicenow.com/people/jim.coyne

Custom script to perform the following:
	- deactivate Scheduled Email Reports
	- deactivate Discovery Schedules (if configured)
	- deactivate any Audit jobs
	- deactivate custom Scheduled Jobs with a name starting with &#34;Custom&#34;
	- set the repeat interval for the email send and receive jobs to 30 seconds
	- clear the email outbox
	- enable email sending and receiving	
	- update the clone target property so the instance can be a clone target (gets overridden during the clone)
	- set the &#34;glide.product.description&#34; property based on the instance suffix and current date to display in the banner frame
*/

(function() {
	//to enable, remove or comment out the next line
	return;
	//put here to avoid accidentally running the script

	//figure out the sub-production suffix by removing the production instance name
	//e.g. if the production name is &#34;acme&#34; and the dev instance is &#34;acmedev&#34;, the instance variable value will be &#34;DEV&#34;
	//used below when setting the banner frame title
	//************************* replace &#34;ProductionInstanceName&#34; on the next line with the real value *************************
	var instance &#61; gs.getProperty(&#34;instance_name&#34;).replace(&#34;ProductionInstanceName&#34;, &#34;&#34;).toUpperCase();


	//deactivate the Scheduled Email Reports
	//no point sending reports from sub-production instances
	var gr &#61; new GlideRecord(&#34;sysauto_report&#34;);
	gr.addEncodedQuery(&#34;active&#61;true&#34;);
	gr.query();
	while (gr.next()) {
		gr.active &#61; false;
		gr.update();
	}


/*  remove the comment block if you are using Discovery and want to disable in sub-production instances
	//deactivate Discovery Schedules
	gr &#61; new GlideRecord(&#34;discovery_schedule&#34;);
	gr.addEncodedQuery(&#34;active&#61;true&#34;);
	gr.query();
	while (gr.next()) {
		gr.active &#61; false;
		gr.update();
	}
*/

	//deactivate any Audit jobs
	gr &#61; new GlideRecord(&#34;cert_audit&#34;);
	gr.addEncodedQuery(&#34;active&#61;true^run_typeNOT INonce,on_demand&#34;);
	gr.query();
	while (gr.next()) {
		gr.active &#61; false;
		gr.update();
	}


	//deactivate custom Scheduled Jobs with a name starting with &#34;Custom&#34;
	//use the commented out query if you want to leave LDAP imports active
	gr &#61; new GlideRecord(&#34;sysauto&#34;);
	//gr.addEncodedQuery(&#34;nameSTARTSWITHCustom^nameNOT LIKELDAP^active&#61;true&#34;);
	gr.addEncodedQuery(&#34;nameSTARTSWITHCustom^active&#61;true&#34;);
	gr.query();
	while (gr.next()) {
		gr.active &#61; false;
		gr.update();
	}


	//reset the mail send/receive intervals to 30 seconds
	//handy for testing purposes, otherwise you are waiting 2 - 3 minutes for delivery/processing
	gr &#61; new GlideRecord(&#34;sys_trigger&#34;);
	gr.addEncodedQuery(&#34;nameINEmail Reader,POP Reader,SMTP Sender&#34;);
	gr.query();
	while (gr.next()) {
		gr.repeat &#61; &#34;00:00:30&#34;;
		gr.update();
	}


	//clear the email outbox
	//no need to send any pending emails that were in the production instance from the sub-production one
	gr &#61; new GlideRecord(&#34;sys_email&#34;);
	gr.addEncodedQuery(&#34;mailbox&#61;outbox&#34;);
	gr.deleteMultiple();


	//enable email sending and receiving
	//re-enable as cloning will disable it
	gr &#61; new GlideRecord(&#34;sys_properties&#34;);
	gr.addEncodedQuery(&#34;name&#61;glide.email.read.active^ORname&#61;glide.email.smtp.active&#34;);
	gr.query();
	while (gr.next()) {
		gr.value &#61; &#34;true&#34;;
		gr.update();
	}

	//was an issue in the past but no longer???
	//update the clone target property so the instance can be a clone target (gets overridden during the clone)
	gs.setProperty(&#34;glide.db.clone.allow_clone_target&#34;, true);


	//set the &#34;glide.product.description&#34; property based on the instance suffix and current date to display in the banner frame
	//get the current date/time then convert to the instance timezone
	var timeZone &#61; gs.getProperty(&#34;glide.sys.default.tz&#34;, &#34;US/Pacific&#34;);
	var gdt &#61; GlideDateTime();
	var tz &#61; Packages.java.util.TimeZone.getTimeZone(timeZone);
	gdt.setTZ(tz);
	gs.setProperty(&#34;glide.product.description&#34;, &#34;*** &#34; &#43; instance &#43; &#34; - Cloned on &#34; &#43; gdt.getDisplayValue().replace(&#34; &#34;, &#34; &#64; &#34;) &#43; &#34; &#34; &#43; timeZone &#43; &#34; ***&#34;);

})();</code></pre>
<p> </p>
<p>The script will deactivate scheduled reports, Discovery jobs as well as Audit jobs in sub-production instances because you probably don&#39;t want to be running them.  Same thing for Scheduled Jobs with a name starting with &#34;Custom&#34;.</p>
<p>Setting the email jobs to run every 30 seconds helps cut down with wait times while testing.  Clearing the outbox is also a good idea in case there were some emails in production that got cloned over to sub-prod instances.  And then it re-enables email sending and receiving as a clone will disable it.</p>
<p>It will also ensure the &#34;glide.db.clone.allow_clone_target&#34; System Property is set to &#34;true&#34; so that the sub-prod instances remain valid clone targets.  The value used to be set to &#34;false&#34; in the past, so the instance could not be clone over again.  This just makes sure it remains set to &#34;true&#34;.</p>
<p>The last thing it does is change the &#34;glide.product.description&#34; System Property to contain the sub-production instance suffix and date/time it was last cloned on, so it is shown in the banner:</p>
<p><img src="80439dfadbc1ab40fece0b55ca96191f.iix" /></p>
<p>In order for it to figure out the suffix of the instance, you have to replace the &#34;ProductionInstanceName&#34; string on or about line 21 with the name of your production instance.</p>
<p>The &#34;return;&#34; string on or about line 18 has to be removed or commented out.  It was put there to avoid accidentally running the script.</p>
<p>As always, try it out in your company&#39;s development instance first, or better yet, your own personal development instance.</p>
<p>Please share any suggestions or things you&#39;ve included in your own scripts.</p>