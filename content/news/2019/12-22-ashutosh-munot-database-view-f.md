---
title: "Database View for vCenter and Windows Relations with Software installed ESX Host Datacenter and Cluster details"
date: 2019-12-21T23:51:17.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=2d8de62adb3dc09014d6fb2439961945"
---
<p><u><strong style="font-size: 18pt;">Database View for vCenter and Windows Relation’s with Software Installed, ESX Host, </strong><span style="font-size: 24px;"><strong>Data center</strong></span><strong style="font-size: 18pt;"> and Cluster details.</strong></u></p>
<p> </p>
<p><span style="font-size: 12pt;"><strong><u>Introduction:</u></strong></span></p>
<p>Just before year end this is a good blog to post and share my work here.Reporting is important for everyone in the organization and is important to show reports with proper details. Recently We did a discovery for vCenter which gave us many details like VMware instance’s, esx host, data-center, storage, cluster details etc. Then we did horizontal discovery on this VMs which are discovered from vCenter to get additional details like software, application, CPU core’s, etc.  See below diagram which give’s you over view of relationship between various components of vCenter.</p>
<p style="text-align: center;"> <img src="https://community.servicenow.com/269c22e6db3dc09014d6fb24399619c3.iix" /></p>
<p>Relations between windows or Linux server with vCenter is as follow from ServiceNow docs:</p>
<p style="text-align: center;"> <img src="https://community.servicenow.com/70ac62e6db3dc09014d6fb2439961997.iix" /></p>
<p><span style="font-size: 12pt;"><strong><u>Purpose of this article:</u></strong></span></p>
<p>We have discovered this all components successfully but not when it comes to reporting to see which windows machine has which VM and hosted on which ESX host in which cluster and datacenter becomes difficult, because we have to report on CI relationship table and you get this information but with multiple rows as below. Also we get dependency view but specific to one windows device. But we have a requirement where we wanted to see all windows server and their relationship with other software and vCenter device in one report.</p>
<p style="text-align: center;"> <img src="https://community.servicenow.com/8fac62e6db3dc09014d6fb243996199e.iix" /></p>
<p style="text-align: center;"><img src="https://community.servicenow.com/8e20ba2edb3dc09014d6fb2439961978.iix" /></p>
<p>What we wanted was to have a single row for all this relations which is not possible OOB and with normal reporting. So what I did is create a Database view which will give you result in one row and this <strong><em>database view is generic and can be used by all of you irrespective of changes and this is extendable database view</em></strong>. You can add many conditions as you want.</p>
<p> </p>
<p><strong><u>Solution for Database view:</u></strong></p>
<p>Below is the view which you get for single windows machine with one Software. If more software installed then you get multiple rows.</p>
<p style="text-align: center;"> <img src="https://community.servicenow.com/08bca6e6db3dc09014d6fb2439961924.iix" /></p>
<p><strong>Database view:</strong></p>
<p style="text-align: center;"> <img src="https://community.servicenow.com/e1bc66e6db3dc09014d6fb2439961947.iix" /></p>
<p>Attaching XML to this article so that you can import and use this database view’s.</p>
<p> <em><strong>If you like this blog then bookmark and mark it as helpful. Also please give your suggestions to improve on this.</strong></em></p>
<p> </p>
<p><em><strong>Wish you all Merry Christmas and Happy New Year 2020 in Advance.</strong></em></p>
<p><em><strong> </strong></em></p>
<p><span style="font-family: &#39;book antiqua&#39;, palatino; color: #0000ff;"><strong><em>Thanks and Regards,</em></strong></span><span style="font-family: &#39;book antiqua&#39;, palatino; color: #0000ff;"><strong><em><br /> Ashutosh Munot</em></strong></span></p>
<p><span style="font-family: &#39;book antiqua&#39;, palatino; color: #0000ff;"><strong><em>ServiceNow MVP 2019</em></strong></span></p>
<p><span style="font-family: &#39;book antiqua&#39;, palatino; color: #0000ff;"><strong><em>NN Group, Netherlands</em></strong></span></p>