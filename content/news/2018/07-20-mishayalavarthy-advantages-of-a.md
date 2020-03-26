---
title: "Advantages of a Security Information and Event Management SIEM Integration and ServiceNow"
date: 2018-07-19T20:45:21.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=b2f51c13db1b1f408e7c2926ca96197f"
---
<p class="p1">This blog post is intended to cover the topic of integrating the customers ServiceNow instance with a SIEM, specifically why integrating with a SIEM will help with streamlining Security Operations and how ServiceNow can be leveraged.</p>
<p class="p2"> </p>
<p class="p3"><strong>Prereqs/Dependencies:</strong></p>
<p class="p3">Enterprise SIEM Subscription</p>
<p class="p3">Incident Plug in – IT Service Automation Suite or the Service Management Suite</p>
<p class="p2"> </p>
<p class="p4">Considering the number of alerts and amount of data that current security operations teams are dealing with, automating security event workflows is necessary to optimize productivity and performance. When dealing with a security alert, it is comparable to finding a needle in a haystack, with the difference being that the work of the security analyst doesn’t end when the needle is found. Containment, eradication, and recovery steps will still need to be taken to prevent future occurrence.</p>
<p class="p5"> </p>
<h1 class="p1"><strong>Integrating your SIEM with ServiceNow for Enhanced Security Event Management</strong></h1>
<p class="p4">This is where integrating ServiceNow with a Security Information and Event Management (SIEM) comes in. The initial time needed to find and identify a security incident is significantly shaved down.</p>
<p class="p5"> </p>
<p class="p4">SIEMs are designed to synthesize all the machine data that is generated in your environment. By aggregating and correlating all the machine generated data, SIEMs help security operations teams search, analyze, visualize, and leverage data to determine the best course of action during an incident.</p>
<p class="p5"> </p>
<p class="p4">The integration allows granular configurations that enable the organization to automate workflows between the two platforms. By leveraging the SIEM and the Incident Plugin found in the IT Service Automation Suite or the Service Management Suite, you will be able to build and operationalize a streamlined method to responding to security incidents.</p>
<h2 class="p4">Benefits of leveraging SIEM</h2>
<p class="p4">This integration will allow you to detect a problem in that particular SIEM and auto-create incidents in ServiceNow. Advantages to leveraging SEIM include:</p>
<ul style="list-style-position: inside;"><li class="p4">Reducing mean time to resolve by correlating ServiceNow data, such as a Threat Portal Hit, with the events captured in the SIEM.</li><li class="p4">Define and create events based on pre-qualified alerts.</li><li class="p4">Receive and interpret events to ultimately decide upon an appropriate response.</li><li class="p4">Respond to events by initiating a workflow.</li></ul>
<p class="p5"> </p>
<p class="p4">Internally, ServiceNow leverages this cohesive workflow.</p>
<p class="p4"><strong>SIEM Example Use Case</strong></p>
<p class="p4">Consider this use case: you have a machine that is sending network traffic to a malicious domain. This traffic captured in the SIEM triggers an alert that is opened on SecurityNow. An analyst receives this alert, opens an SIR, and begins the analysis of the event. The SIEM allows the analyst to pull relevant logs and respond and because of the integration, the alert was triggered almost immediately at the time of traffic for a faster response time.</p>
<p class="p5"> </p>
<p class="p2"><img style="max-width: 100%; max-height: 480px;" src="34179c9bdb1b1f408e7c2926ca961910.iix" width="494" height="338" /></p>
<p class="p2"> </p>
<p class="p1">Image is from the Syslog Probe link below.</p>
<p class="p2"> </p>
<p class="p3">Some examples of SIEMs include: ArcSight, Splunk, QRadar, McAfee ESM, and NetWitness.</p>
<p class="p2"> </p>
<p class="p3"><strong>Useful Links: </strong></p>
<p class="p6"><span class="s1"><a href="https://docs.servicenow.com/bundle/kingston-platform-administration/page/integrate/vendor-specific-integrations/reference/r_SyslogProbe.html" rel="nofollow">Syslog Probe</a></span></p>
<p class="p2"> </p>