---
title: "Leverage sightings searches to gauge and crush phishing and malware attacks"
date: 2019-03-13T20:40:39.000Z
authors: ["Dawn Jurek"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=f8b5b4efdb48f3804819fb2439961900"
---
<p>Your network is under a phishing or malware attack - you need to know:</p>
<ul><li>When did this attack first occur?</li><li>Is the attack on-going?</li><li>How many times have malicious observables been recorded in the logs?</li><li>Which users or devices have connected to the IP or URL?</li><li>Did any security compromises occur?</li></ul>
<p>With sightings searches, you can answer all of these questions. In this installment of our <a title="NOWSupport best practices series list" href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" target="_blank" rel="noopener noreferrer nofollow">NOWSupport best practices series</a>, we provide an overview of the sightings search feature available in Security Incident Response.</p>
<p>See our video below for a demo of sightings search in action in the Madrid release, and see our FAQs below to learn more.</p>
<p><iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/ftGIw0Mb2q4"></iframe></p>
<h3>Hasn&#39;t sightings search been around for awhile?</h3>
<p>Yes, it&#39;s been a feature in the Security Incident Response product since Jakarta, but with the Madrid release, we&#39;ve enhanced it to help with better scoping of phishing and malware attacks. </p>
<h3>How do I get the latest version of sightings search?  </h3>
<p>Download the latest version of Security Incident Response from the <a title="ServiceNow Store" href="https://store.servicenow.com/sn_appstore_store.do#!/store/home" target="_blank" rel="noopener noreferrer nofollow">ServiceNow Store</a>. </p>
<h3>How does it work? </h3>
<p>A sightings search is performed on your security information and event management (SIEM) log store to search for observables that potentially pose a threat to your data or assets. The sightings search results allow you to determine the prevalence of a threat over time.</p>
<p>Sightings search in Madrid can retrieve user records from log events to provide analysts with a list of organizational employees that have been targets of a phishing or malware attack. This helps analysts drive a thorough remediation and recovery procedure.  The enhanced implementation of sightings search in Madrid has been tested only with the Splunk Enterprise log store.</p>
<h3>Can I configure sightings searches?</h3>
<p>Yes, you can configure sightings searches and create saved configurations for SIEMs or other log stores. See <a title="Create sightings search configuration records" href="https://docs.servicenow.com/bundle/madrid-security-management/page/product/security-incident-response/concept/sighting-searches-on-phishing-attacks.html#sightings-search" target="_blank" rel="noopener noreferrer nofollow">Create sightings search configuration records</a> for more information. </p>
<h3>For more information:</h3>
<p><a title="Sighting searches on the frequency of phishing and malware attacks" href="https://docs.servicenow.com/bundle/madrid-security-management/page/product/security-incident-response/concept/sighting-searches-on-phishing-attacks.html#sighting-searches-on-phishing-attacks " target="_blank" rel="noopener noreferrer nofollow">Sightings searches on the frequency of phishing and malware attacks</a> (product documentation)</p>
<p>--</p>
<p>Behind the scenes here at ServiceNow, the Knowledge Management and Multimedia teams work closely with subject matter experts to deliver critical information to our customers. We’ve found that certain topics come up frequently, in the form of best practices that can help you keep your ServiceNow instances running smoothly. This series targets those topics so that you and your organization can benefit from our collective expertise. If you have a best practices topic you&#39;d like us to cover in this series, please let us know in the comments below.</p>
<p>To access all the blog posts in this series, see our <a title="NOWSupport best practices series list" href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" target="_blank" rel="noopener noreferrer nofollow">NOWSupport best practices series list</a>.</p>