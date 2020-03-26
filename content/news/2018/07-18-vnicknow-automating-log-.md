---
title: "Automating Log Retrieval for Faster Incident Resolution"
date: 2018-07-17T21:22:55.000Z
authors: ["vNickNOW"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ed6b06a6db9bdf002be0a851ca96198b"
---
<p>When an incident is created and assigned to a technician, one of the first tasks the technician must complete is to look through log files for errors (at least when the incident relates to infrastructure or data center applications).  This requires the tech to swivel chair to login to the system, find the correct log file, possibly FTP or SCP the file off the system to their own computer or copy and paste to the incident.  All of this adds time to the process of resolving the incident.</p>
<p>In this short article I hope to provide a simple option for automating this type of log retrieval and automatically add these types of files to an incident.  The features involved in the discussion below include event management, CMDB, and orchestration.</p>
<p>NOTE: This example could be expanded to work with both Windows and Linux.  However, this code and workflow only work on *nix based platforms and assume the presence of certain utilities to function correctly.</p>
<p>Let&#39;s take a look at the script that will run on the server to retrieve the log file (in this example, an Apache error log file).</p>
<pre class="language-javascript"><code>#!/bin/sh

# Use the apachectl command to find the apache root and log directory
httprootvar&#61;&#96;apachectl -V | grep &#39; -D HTTPD_ROOT&#39;&#96;
errorlogvar&#61;&#96;apachectl -V | grep &#39; -D DEFAULT_ERRORLOG&#39;&#96;

# Remove the quote around the path from the apachectl results, and remove all spaces
httprootclean1&#61;&#96;echo $httprootvar | tr -d &#39;&#34;&#39;&#96;
httprootclean2&#61;&#96;echo $httprootclean1 | tr -d [:space:]&#96;
errorlogclean1&#61;&#96;echo $errorlogvar | tr -d &#39;&#34;&#39;&#96;
errorlogclean2&#61;&#96;echo $errorlogclean1 | tr -d [:space:]&#96;

# Clean the values to only include the path values
httproot&#61;&#96;echo $httprootclean2 | sed -r &#39;s/-DHTTPD_ROOT&#61;//&#39;&#96;
errorlog&#61;&#96;echo $errorlogclean2 | sed -r &#39;s/-DDEFAULT_ERRORLOG&#61;//&#39;&#96;
errlogdir&#61;$httproot&#39;/&#39;$errorlog

# Use curl to send the log file to a ServiceNow incident record
curl &#34;https://${activityInput.instance}.servicenow.com/api/now/attachment/file?table_name&#61;incident&amp;table_sys_id&#61;${activityInput.inc_sys_id}&amp;file_name&#61;apache_error_log&#34; \
--request POST \
--header &#34;Accept:application/json&#34; \
--user &#39;${activityInput.username}&#39;:&#39;${activityInput.password}&#39; \
--header &#34;Content-Type: text/plain&#34; \
-F &#34;apache_error_log&#61;&#64;$errlogdir&#34;</code></pre>
<p style="text-align: center;">Log retrieval script</p>
<p>In the script above, you can see we are leveraging &#34;apachectl&#34;, &#34;tr&#34;, &#34;sed&#34;, and &#34;curl&#34; as utilities for finding and parsing specific pieces of data.  If your Apache servers do not have these utilities, then the script will need to be modified to retrieve the necessary data (in this case, the location and name of the log file).</p>
<p>The curl command is using a <a href="https://developer.servicenow.com/app.do#!/rest_api_doc?v&#61;kingston&amp;id&#61;r_AttachmentAPI-POST" rel="nofollow">ServiceNow attachment API</a> to &#34;POST&#34; the log file to a specific incident that we are passing in via the orchestration workflow we&#39;ll discuss shortly.  To being, however, we will have to <a href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/administer/orchestration-activity-designer/task/create-custom-activities.html" target="_blank" rel="nofollow">create a custom orchestration activity</a> that will be used as part of the workflow (at least until <a href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/administer/integrationhub/concept/integrationhub.html" target="_blank" rel="nofollow">Integration Hub</a> supports SSH).</p>
<p>Certain inputs will be required when defining the activity because the attachment API needs these parameters to successfully execute.</p>
<p><img src="f33ee73edbdb57408e7c2926ca961941.iix" width="721" height="291" /></p>
<p style="text-align: center;">Custom SSH Activity Inputs </p>
<p>You then copy and paste the script above into the &#34;Execution Command&#34; section and you can see how the inputs we just defined are used within the curl command and make more sense now in the context of why they are defined in the script.  For some orchestration best practices, see Steve Bell&#39;s blog post <a href="community?id&#61;community_blog&amp;sys_id&#61;861d22e5dbd0dbc01dcaf3231f961973&amp;view_source&#61;searchResult" target="_blank" rel="nofollow">here</a>.</p>
<p>Once you have the activity completed, you can then create a simple workflow to leverage it.  Below is a quick workflow where I use the custom activity as part of an event remediation workflow.  A couple items that are unique to this type of workflow are the first and last activity (not including being and end).  These &#34;Set Values&#34; activities exist because we want to use this orchestration workflow to be triggered as a result of an event management alert where a frontline technician can take the initial action to get the log file.  When you trigger remediation from event management, a specific task type is created (em_remediation_task) and we do not want it to just be left open forever (which could be the case if we did not properly handle it as part of this workflow).</p>
<p><img src="0830b736db5f57408e7c2926ca961942.iix" width="711" height="264" /></p>
<p style="text-align: center;">Workflow Using New Custom Activity</p>
<p>A final piece of the workflow puzzle is the setting of the variable.  This is very important as we need to pass the new custom activity the proper inputs based on the alert we are trying to address (and its associate incident).</p>
<pre class="language-javascript"><code>var instanceName &#61; gs.getProperty(&#39;instance_name&#39;);

workflow.scratchpad.instanceName &#61; instanceName;

// Find CMDB relationship from apache to actual server running apache to 
//   obtain IP address to connect to

var relgr &#61; new GlideRecord(&#39;cmdb_rel_type&#39;);
relgr.addQuery(&#39;name&#39;, &#39;Runs on::Runs&#39;);
relgr.query();

if (relgr.next()) {

   var gr &#61; new GlideRecord(&#39;cmdb_rel_ci&#39;);
   gr.addQuery(&#39;parent&#39;, current.cmdb_ci);
   gr.addQuery(&#39;type&#39;, relgr.sys_id);
   gr.query();

   if(gr.next()){
       var chgr &#61; new GlideRecord(&#39;cmdb_ci_linux_server&#39;);
       chgr.addQuery(&#39;sys_id&#39;, gr.child);
	   chgr.query();
    
	   if(chgr.next()) {
	       workflow.scratchpad.targetip &#61; chgr.ip_address;
	   }
   }
}

// Set incident sys_id to pass to get log activity

workflow.scratchpad.incID &#61; current.alert.incident;

// Look for specific credential alias to get user and password
// Otherwise, explicitly define user and password values

var tagGR &#61; new GlideRecord(&#39;sys_alias&#39;);
tagGR.addQuery(&#39;id&#39;, &#39;attachmentuser&#39;);
tagGR.query();

if (tagGR.next()){
	var credgr &#61; new GlideRecord(&#39;basic_auth_credentials&#39;);
	credgr.addQuery(&#39;tag&#39;, tagGR.sys_id);
	credgr.query();

	if(credgr.next()) {
		workflow.scratchpad.username &#61; credgr.user_name;
		
		// decrypt password
		var encr &#61; new GlideEncrypter();
		var encrpwd &#61; credgr.password;
		workflow.scratchpad.password &#61; encr.decrypt(encrpwd);	
	} 
} else {
	workflow.scratchpad.username &#61; &#39;changeme&#39;;
	workflow.scratchpad.password &#61; &#39;changeme&#39;;	
}</code></pre>
<p style="text-align: center;">Set Variables Step in Workflow</p>
<p style="text-align: left;"> An important step to note within this code that sets variables is the section tries to find a credential entry based on a specific tag, &#34;attachmentuser&#34;.  I used this option so that an entry could be made into the standard credentials table with the password encrypted and all that you get with that baseline table.  If for some reason you do not have access to create an entry, you can set the values in the script where it currently has changeme/changeme.  If you choose to use a tag other than &#34;attachmentuser&#34;, then just update this script to look for that tag value.</p>
<p style="text-align: left;"><img src="3553f77edb9f57408e7c2926ca9619bc.iix" width="746" height="275" /></p>
<p style="text-align: center;">Entry in Credential Table (Basic Auth Credential)</p>
<p style="text-align: left;">At this point we are ready to start using the orchestration workflow (assuming you published it).  Based on how we defined the workflow to be associated with an EM Remediation Task, we can use this it in a couple of places.  As part of an <a href="https://docs.servicenow.com/bundle/kingston-it-operations-management/page/product/event-management/task/t_EMCreateAlertRule.html" target="_blank" rel="nofollow">alert action rule</a>, or as part of a <a href="https://docs.servicenow.com/bundle/kingston-it-operations-management/page/product/event-management/task/t_SACreateCIRemediation.html" target="_blank" rel="nofollow">CI Remediation</a> option, both of which are in the event management module.  In both cases, be sure to specify a proper filter so that the action only applied to the correct CI type (an Apache web server in this case).</p>
<p style="text-align: left;"><img src="86d47fbadbdf57408e7c2926ca9619fa.iix" width="737" height="247" /></p>
<p style="text-align: center;">CI Remediation Definition (class is Apache Web Server)</p>
<p style="text-align: left;">That&#39;s it!  You should now be able to leverage this remediation option as part of normal <a href="https://docs.servicenow.com/bundle/kingston-it-operations-management/page/product/event-management/task/t_SAApplyCIRemediation.html" target="_blank" rel="nofollow">ServiceNow alert management</a>.  While I hope you could build this yourself as a result of this article, I have also created option to download it (with instructions) from the <a href="https://developer.servicenow.com/app.do#!/share/contents/1745127_attach_apache_log_to_incident?v&#61;1.01&amp;t&#61;PRODUCT_DETAILS" target="_blank" rel="nofollow">developer site</a> where the share site now resides.  To recap, we performed 3 high-level steps: 1) create a custom activity, 2) create a workflow to leverage the activity, and 3) create trigger options for use within the ServiceNow platform.  Quick, effective incident resolution is key to driving better MTTR metrics, and leveraging either full closed loop remediation capabilities (like restart the Apache service) or intermediate options like this log retrieval can have a major influence on improving performance.</p>