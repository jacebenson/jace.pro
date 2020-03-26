---
title: "Alert Correlation Advanced Processing Example"
date: 2019-02-02T03:49:36.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=5b8a88b6db9f670011762183ca9619c7"
---
<p>&#34;Noise reduction&#34; ... &#34;efficiency&#34; ... &#34;work on what matters&#34; ... &#34;get to root cause faster&#34;.  These goals / aspirations / initiatives / or any other synonym for trying to achieve an outcome, are commonly associated with today&#39;s AIOps projects that want AI/ML-based event management solutions (like ServiceNow&#39;s) to perform levels of automation and understanding not previously available.  While great strides are being made towards this end, the reality is that AI/ML needs a critical mass of data before it can come to conclusions about how to achieve these outcomes and it is currently best suited for analyzing metric data to detect anomalies, which is one of the capabilities of our Operational Intelligence module.  <a href="https://www.gartner.com/doc/3893177/beginning-aiops-data-science-it" target="_blank" rel="noopener noreferrer nofollow">Gartner&#39;s 2018 report on AIOps</a> is a good read on the current state of AIOps if you have access. </p>
<p>Imagine the scenario where you have a network device that either fails completely, or the ports for a specific VLAN fail.  Your network monitoring solution will hopefully send you an alert that tells you something went down, or if you&#39;re monitoring at a more granular level, you may get numerous alerts, one for each VLAN or port.  You are also likely to get numerous alerts for all the devices and applications which rely on the network device or port(s) for communication.  Ideally, when you start troubleshooting the issue you will see all these alerts correlated together with the network device&#39;s (or port&#39;s) alert being the primary, so you can focus on that first.</p>
<p>ServiceNow has the ability to &#34;learn&#34; these relationships and perform this type of correlation automatically (heck, it might even happen just based on relationships in the CMDB if you are populating it), and there are a number of articles written on the topic which I have included below.</p>
<p><a href="community?id&#61;community_blog&amp;sys_id&#61;076caea1dbd0dbc01dcaf3231f961908&amp;view_source&#61;searchResult" target="_blank" rel="noopener noreferrer nofollow">Journey through Event Management - Alert Correlation</a> : Aleck Lin</p>
<p><a href="community?id&#61;community_blog&amp;sys_id&#61;1c5de229dbd0dbc01dcaf3231f9619df&amp;view_source&#61;searchResult" target="_blank" rel="noopener noreferrer nofollow">Service Analytics: Rise of Machines</a> : Ben Yukich</p>
<p><a href="community?id&#61;community_blog&amp;sys_id&#61;e505a529db84230467a72926ca9619ec&amp;view_source&#61;searchResult" target="_blank" rel="noopener noreferrer nofollow">Turn Noise into Actionable Insights to Answer Your Questions</a> : Hakan Isik</p>
<p><a href="community?id&#61;community_blog&amp;sys_id&#61;52bdaaa9dbd0dbc01dcaf3231f9619cf&amp;view_source&#61;searchResult" target="_blank" rel="noopener noreferrer nofollow">Operational Intelligence in world of ML &amp; AI</a></p>
<p>However, what if we want this type of event to be handled on day 1 of deploying such a correlation solution?  Thankfully, ServiceNow provides such a capability and that will be the focus of this article. </p>
<h2>Alert Correlation Module</h2>
<p>Below is a screenshot of a simple approach to creating such a policy within the <a href="https://docs.servicenow.com/bundle/london-it-operations-management/page/product/event-management/concept/c_EMEventCorrelationRules.html" target="_blank" rel="noopener noreferrer nofollow">&#34;Alert Correlation&#34; module</a>.  You will notice at the bottom of the definition that it does not depend on a relationship to exist within the CMDB.  We do, however, take advantage of the CMDB (why not, we have it) to determine the IP address of any configuration items that come in with alerts and reside on the same network as the &#34;network down&#34; alert notes.</p>
<p><img src="62daaee7dbdbeb00b1b102d5ca9619e7.iix" /></p>
<p style="text-align: center;">Simple alert correlation policy</p>
<p>This policy is enough to implement, but what if you have 10s of 1000s of networks?  You don&#39;t want to create that many policies by hard coding each network into the policy. </p>
<h2>Advanced Correlation</h2>
<p>Now we can get to the advanced processing I teased in the title.  You see that little checkbox at the top-right of the screenshot above (just below the &#34;Active&#34; checkbox)?  Yep, you guessed it, this is what we have to &#34;check&#34; to enable the advanced processing section of this module.  When you do so, you will be presented with the script section and some starting code to get you on your way.</p>
<p><img src="04fb2a2fdbdbeb00b1b102d5ca9619e5.iix" /></p>
<p style="text-align: center;">Template code for advanced correlation</p>
<p>Let&#39;s just jump into the final code and then I will explain (and have hopefully commented to the code well enough for it to be explanatory when referencing later).</p>
<pre class="language-javascript"><code>(function findCorrelatedAlerts(currentAlert){
		
	/* CONFIG: 
				 
	 1. timeDifferenceInMinutes
		 Time difference between alerts - in minutes. 
		 Example: 60 (equals 60 min, 1 hour)
	 2. NETregex
		 Regular expression to obtain first 3 octets of an IP address, and works for IP in a longer string like a description
	 3. desc
		 String in an Alerts description field that should be matched 
		 Example: desc &#61; &#39;network down&#39; will match alerts with something like &#39;Network down for VLAN 10.1.1.0&#39;
	*/
	
	var timeDifferenceInMinutes &#61; 60; // Default 60 minutes between the first alert and the alerts that follow 
	var NETregex &#61; new RegExp(&#39;\b(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\b&#39;, &#39;j&#39;);
	var desc &#61; &#39;network down&#39;;

	/* End of CONFIG */

	// Initialization
	var result &#61; {};
	var PrimarySubnet &#61; &#39;&#39;;
	var CIsubnet &#61; &#39;&#39;;
			
	// Alert CI must have an IP address to continue processing
	if (!currentAlert.cmdb_ci.ip_address) {
	     return result;
 	}
			
	// Prepare time diff for the query
	var timeDifferenceBetweenAlerts &#61; new GlideDateTime(currentAlert.getValue(&#39;initial_remote_time&#39;));
	var timeDifferenceInMilliSeconds &#61; Number(timeDifferenceInMinutes) * 1000 * 60;
	timeDifferenceBetweenAlerts.subtract(timeDifferenceInMilliSeconds);
			
	var gr &#61; new GlideRecord(&#39;em_alert&#39;);
	gr.addQuery(&#39;description&#39;, &#39;CONTAINS&#39;, desc);
	// Add query to search for alerts that are not closed by relation of potential parent (0 or 1)
	//    in time window (60) and order by time of creation
	gr.addQuery(&#39;state&#39;, &#39;NOT IN&#39;, &#39;Closed&#39;);
	gr.addQuery(&#39;correlation_rule_group&#39;, &#39;IN&#39;, &#39;0,1&#39;); // 0 &#61; None (potential parent) | 1 &#61; Primary alert (parent) | 2 &#61; Secondary
	// UNCOMMENT if you want time-based processing
     //gr.addQuery(&#39;initial_remote_time&#39;, &#39;&gt;&#61;&#39;, timeDifferenceBetweenAlerts);
	gr.orderBy(&#39;initial_remote_time&#39;);
		
	
	// Get the alert that may be the parent of the current alert by answering the conditions.
	// If the alert is primary - make the current alert secondary, else - do nothing.
	
	gr.query();
	if (gr._next()) {

	   // Get first 3 octets of subnet and first 3 of current alert CI to see if they match
	   PrimarySubnet &#61; NETregex.exec(gr.description);
	   CIsubnet &#61; NETregex.exec(currentAlert.cmdb_ci.ip_address);
			
	   var correlate &#61; &#39;false&#39;;
	   if (CIsubnet &#61;&#61; PrimarySubnet)
	      correlate &#61; &#39;true&#39;;

	   // Perform check to see if alert (primary) had an IP address (VLAN) and that the CI on the alert is in the VLAN / subnet
	   if (correlate &#61;&#61; &#39;true&#39;) {

	      // Set the primary and secondary alerts by SysIds if parent was found
	      // The VALUES for BOTH keys (PRIMARY and SECONDARY) must be an ARRAY of ALERTS SYS_IDS, e.g. SECONDARY: [SYS_ID1, SYS_ID2...],
	      // while the value for primary can contain only 1 sys_id
	      result &#61; {
	         &#39;PRIMARY&#39;: [gr.getUniqueValue()], // getUniqueValue() retrieves sys_id, then put in an array (value MUST be put in an array)
	         &#39;SECONDARY&#39;: [currentAlert.sys_id&#43;&#39;&#39;] // Retrieve sys_id, then put in an array (value MUST be put in an array)
	      };
	   }
    }
			
    return JSON.stringify(result);
				
})(currentAlert);</code></pre>
<p style="text-align: center;">Code for generic network correlation </p>
<p>If you desire to only process alerts that happen within a certain timeframe (like within 60 minutes of one another), I have left the code in place to do so, but you will have to uncomment out the &#34;addQuery&#34; line that evaluates the time values.</p>
<p>*** NOTE ***: This example should be expanded in a true production environment as it makes a couple of high-level assumptions that do not work in a networks.  First, I&#39;m only evaluating the &#34;ip_address&#34; attribute on the CI record.  A more comprehensive approach would be to also cycle through any related records in the &#34;cmdb_ci_ip_address&#34; table and evaluate those as well.  Second, this solution is looking at just the first 3 octets of the IP address, which would assume something like a /24 CIDR block (or a 255.255.255.0 netmask).  Again, a more comprehensive solution would determine the true CIDR for the network(s) impacted and evaluate against the corresponding parts of the CI&#39;s IP address (maybe it&#39;s the first 2 octets instead of the first 3, etc).</p>
<p>To begin looking at the code, we initially see 3 variables being set.  A time difference, a regular expression, and a description.  The time difference will be used if you only want to evaluate alerts created within a certain time period of one another.  The regular expression is complex looking, but it will find an IP address, either standalone or within a phrase like an alert description.  It performs things like removing leading 0&#39;s or not evaluating them, and it is only attempting to get the first 3 octecs of an IP, so this is where you might want to have multiple variables that have a regular expression getting all 4 octets, or maybe just 2, etc.  A description variable is being set so that you can control what type of message triggers the identification of a primary alert (like &#34;network down&#34;).  This could be a &#34;type&#34; of event, or specific &#34;resource&#34; designation, etc, but the point is that you want to use something in the query that finds an alert representing the likely primary issue. </p>
<p>When the query executes, we simply compare the IP of the current configuration item to that of the alert noting the network is down, and then correlate them together if there is a match.  Again, this is where you could have a &#34;switch&#34; statement based on some math that calculates the correct CIDR so you are comparing the correct set of octets.</p>
<p>The final steps are to add the records to the &#34;results&#34; object, which is then processed by the correlation engine. </p>
<h2>The Outcome</h2>
<p>Below is the outcome of such a scenario where we have 2 alerts correlated based on this processing.</p>
<p><img src="9203f22bdb132f00b1b102d5ca9619fc.iix" width="774" height="339" /> </p>
<p style="text-align: center;">Outcome of correlated alerts</p>
<h2>Conclusions</h2>
<p>Machine learning can and will do great things for processing through mountains of data to find patterns that a human may not find or cannot process through due to volume, but it will require time and occurrences of the various alert combinations before it &#34;learns&#34; patterns that should be applied to meaningful correlation.  And even when machines to start correlating alerts automatically, remember the maxim that &#34;<a href="https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation" target="_blank" rel="noopener noreferrer nofollow">correlation does not imply causation</a>&#34;.  In other words, the root cause is not always determined from correlation of alerts or by humans voting on what they &#34;think&#34; is the likely issue in a war room situation where the goal is to just get things back up and running a quickly as possible.  Correlation can definitely help reduce the noise to get to those answer faster, and creating your own correlation policies is a very effective way for addressing the needs of known scenarios sooner than later with an outcome being the purposeful assignment of something like a network device as the primary for devices that rely on the network device, leading to less wasted time sorting through all the alerts.</p>
<p> </p>