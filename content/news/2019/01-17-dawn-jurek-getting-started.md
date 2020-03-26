---
title: "Getting started with Security Incident Response on the Now Platform"
date: 2019-01-16T22:32:05.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=0478e869db03a3409a64e15b8a9619d7"
---
<h3>All it takes is one click...</h3>
<p style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="8bdff24adb0ba380afc902d5ca9619e0.iix" /></p>
<p style="text-align: left;">Any user in your organization accidentally clicking a malicious link in an email could compromise your entire network. If you have the Security Incident Response application of ServiceNow® Security Operations on your instance, you can <strong>track</strong>, <strong>analyze</strong>, <strong>contain</strong>, and <strong>eradicate</strong> threats like these.</p>
<p>In this installment of our <a title="" href="community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" rel="nofollow">NOWSupport best practices series list</a>, we provide a quick primer on how this application works within the Now Platform®. Be sure to see our video at the end of this post for more details.</p>
<h3>What&#39;s the most common security incident?</h3>
<p>It&#39;s no coincidence that I introduced this post with a phishing scenario. Based on feedback, we&#39;ve learned that phishing attacks are the number one concern of most security analysts. </p>
<p>Don&#39;t miss our in-depth demo of thwarting a phishing attack in our video at the end of this post.</p>
<h3 style="text-align: left;">How does Security Incident Response work?</h3>
<p>The security incident response process is defined by how you set up the application. Here&#39;s an example:</p>
<ol><li><strong>Integrate Security Products</strong> - When you integrate your existing security products with Security Incident Response, the application creates security incidents.<br /><br /></li><li><strong>Automatically Prioritize Security Incidents</strong> - Incidents are prioritized based on your criteria and identification of affected systems via your Configuration Management Database (CMDB). <br /><br /></li><li><strong>Utilize Threat Intelligence</strong> - The application can also leverage data from your third-party threat intelligence sources to identify known threats by performing threat lookups (this capability requires the Threat Intelligence application).<br /><br /></li><li><strong>Determine Response Action</strong> - The application determines a recommended response action and provides you with step-by-step remediation procedures based on previously-configured playbooks to guide you through the process (Playbooks require the Security Incident Response UI in London).<br /><br /></li><li><strong>Remediate Threats Fast</strong> - The application then further leverages the Now Platform to orchestrate actions, or by creating Tasks, Problems or Changes for all affected users and systems.<br /><br /></li><li><strong>Review Post Incident Reports</strong> - When you&#39;ve remediated the threat, the application provides post incident reports for you to share with security and IT teams for insight into handling related incidents.</li></ol>
<p style="text-align: center;"><br /> <img style="max-width: 100%; max-height: 480px;" src="8828ff4adbcfe380afc902d5ca961915.iix" /></p>
<h3>How do I get Security Incident Response on my instance? </h3>
<p>Depending on which release/patch your instance is on, you can install the Security Incident Response application and the new UI via a plugin or from the <a title="ServiceNow Store" href="https://store.servicenow.com/sn_appstore_store.do#!/store/home" target="_blank" rel="noopener noreferrer nofollow">ServiceNow Store</a>:</p>
<h4>Security Incident Response application (subscription required):</h4>
<ul><li><strong>Releases prior to London patch 6</strong> - Security Incident Response plugin (com.snc_security_incident)</li><li><strong>London patch 6&#43;</strong> - <a title="ServiceNow Store" href="https://store.servicenow.com/sn_appstore_store.do#!/store/home" target="_blank" rel="noopener noreferrer nofollow">ServiceNow Store</a></li></ul>
<h4>Security Incident Response UI (Security Incident Response application required):</h4>
<ul><li><strong>Releases prior to London patch 3</strong> - Security Incident Response UI plugin (com.app_secops_ui)</li><li><strong>London patch 3&#43;</strong> - <a title="ServiceNow Store" href="https://store.servicenow.com/sn_appstore_store.do#!/store/home" target="_blank" rel="noopener noreferrer nofollow">ServiceNow Store</a></li></ul>
<h4>Threat Intelligence:</h4>
<ul><li><strong>Releases prior to London patch 6</strong> - Threat Intelligence plugin (com.snc.threat.intelligence)</li><li><strong>London patch 6&#43;</strong> - <a title="ServiceNow Store" href="https://store.servicenow.com/sn_appstore_store.do#!/store/home" target="_blank" rel="noopener noreferrer nofollow">ServiceNow Store</a></li></ul>
<p style="text-align: left;"> </p>
<p style="text-align: left;">And now, check out our video below for more details, and to see a phishing attack demo:</p>
<p style="text-align: left;"> </p>
<p style="text-align: center;"><iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/T35aF9Key2U"></iframe></p>
<p style="text-align: center;"> </p>
<h3>For more information</h3>
<p><a title="Security Incident Response" href="https://docs.servicenow.com/bundle/london-security-management/page/product/security-incident-response/reference/sir-landing-page.html" target="_blank" rel="noopener noreferrer nofollow">Security Incident Response</a> (product documentation) </p>
<p>--</p>
<p>Behind the scenes here at ServiceNow, the Knowledge Management and Multimedia teams work closely with subject matter experts to disseminate critical information to our customers. We&#39;ve found that certain topics come up frequently, in the form of best practices that can help you keep your ServiceNow instances running smoothly. This series targets those topics so that you and your organization can benefit from our collective expertise. If you have a best practices topic you&#39;d like us to cover in this series, please let us know in the comments below.</p>