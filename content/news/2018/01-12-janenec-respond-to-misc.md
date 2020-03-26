---
title: "Respond to Misconfigured Software and Phishing Emails with New Security Operations Capabilities"
date: 2018-01-11T22:25:32.000Z
authors: ["janenec"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=399c2ee1dbd0dbc01dcaf3231f9619dc"
---
<p><span style="font-size: 11.0pt;"><img class="image-5 jive-image" style="width: 339px; height: 177.249px; float: left;" src="b27c2ccedbd45f048c8ef4621f96193f.iix" alt="pastedImage_0.png" width="339" height="177" /></span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 12pt;">It&#39;s launch time again, and Kingston brings us to the fifth incarnation of ServiceNow Security Operations. In the past two years, the product has matured and expanded from two applications to five: Security Incident Response, Vulnerability Response, Threat Intelligence, Trusted Security Circles, and the newest, Configuration Compliance. </span></p>
<p> </p>
<p> </p>
<p> </p>
<p><span style="font-size: 11.0pt;"><strong>Configuration Compliance</strong></span></p>
<p><span style="font-size: 11.0pt;">Configuration Compliance helps identify and remediate misconfigured software, as incorrect configuration, just like vulnerabilities, can leave software open to exploit. In fact, the Configuration Compliance application is very closely related to Vulnerability Response, with similar actions and process. </span></p>
<p> </p>
<p><span style="font-size: 11.0pt;">Configuration Compliance works with Security Configuration Assessment (SCA) scan data--from Qualys for now, with support for additional vendors coming later. Policies for correct configurations, such as password criteria, permissions, and access controls, are set in the SCA tool, and a scan tests assets for compliance. Test failures are imported into ServiceNow and matched against the configuration management database (CMDB). The configuration item is included in the risk score calculation used to prioritize the resulting list of test failures. </span></p>
<p> </p>
<p style="text-align: center;"><img class="image-3 jive-image" style="width: 620px; height: 349px;" src="2d009582dbdc97041dcaf3231f96195b.iix" alt="Configuration Compliance results.png" /></p>
<p style="text-align: center;"><span style="font-size: 11.0pt;"><em>A list of failed configuration tests shows the corresponding configuration item and risk score. </em></span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 11.0pt;">Now responders can start grouping items and assigning them to the correct teams for remediation using ServiceNow workflows. It&#39;s also easy to create change tickets for IT or to defer items to the next standard change window. Just like in Vulnerability Response, these test failures aren&#39;t closed until a follow-up scan confirms they&#39;ve been fixed. </span></p>
<p> </p>
<p><span style="font-size: 11.0pt;">Configuration Compliance test results can also feed into the new continuous monitoring feature of ServiceNow Governance, Risk, and Compliance. This creates Key Control Indicators to automatically determine the compliance state of controls. </span></p>
<p> </p>
<p><span style="font-size: 11.0pt;"><strong>End-to-End Phishing Response</strong></span></p>
<p><span style="font-size: 11.0pt;">Our other biggest new addition to Security Operations is support for end-to-end phishing response--something that many customers have specifically asked for. This is an expansion on two features introduced in Istanbul: email parsing and Microsoft Exchange search and delete. </span></p>
<p> </p>
<p><span style="font-size: 11.0pt;">The email parser has been updated to read attached .eml files that would result from a user forwarding a suspected phishing email. The email parser can extract security observable data such as IP addresses, which are then correlated with threat intelligence data or sent to third-party tools for analysis. When the security analyst is assigned the incident, he already has the necessary information to determine if this is an actual phishing threat, reducing the need for manual investigation and triage.</span></p>
<p> </p>
<p style="text-align: center;"><span style="font-size: 11.0pt;"><em><img class="image-4 jive-image" style="width: 620px; height: 283px;" src="ccb0788adbd49344e9737a9e0f9619ad.iix" alt="email search Kingston.jpg" /></em></span></p>
<p style="text-align: center;"><span style="font-size: 11.0pt;"><em>Search for and delete phishing emails directly from ServiceNow Security Operations.</em></span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 11.0pt;"><strong>Learn More</strong></span></p>
<p><span style="font-size: 11.0pt;">Want to learn more about what&#39;s new in Security Operations? Watch the Live from Kingston broadcast on Thursday, February 8<sup>th </sup>or visit the Security Operations page at </span><a href="http://www.servicenow.com/sec-ops" rel="nofollow"><span style="font-size: 11.0pt;">www.servicenow.com/sec-ops</span></a></p>
<p> </p>
<p> </p>
<hr />
<p><span style="font-size: 14pt;">Going Live - The Kingston Release Webinar</span></p>
<p><strong>Thursday, February 8, 2018<br />8:00am — 9:30am PST | 11:00am — 12:30pm EST   </strong></p>
<p>Unveiling the Latest Innovations from ServiceNow</p>
<p><a href="http://info.servicenow.com/LP&#61;9287?referenceSource&#61;communityblog" rel="nofollow"><span style="font-size: 12pt;"><img class="image-2 jive-image" src="9861dc42db549fc068c1fb651f9619d3.iix" alt="Register-button-webinar.jpg" width="181" height="57" /></span></a></p>