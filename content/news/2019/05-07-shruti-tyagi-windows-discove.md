---
title: "Windows Discovery now requires PowerShell version  or higher up to  installed on the Windows target host"
date: 2019-05-06T20:50:28.000Z
authors: ["shruti.tyagi"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=0bcdf6b4db913348fff8a345ca961918"
---
<p>If your Windows discovery taking a long time to complete and having errors like <em>&#34;PowershellProcessRunner was interrupted to complete in 600 seconds&#34;</em> in the classification or any other probe, read on.</p>
<h3>Windows discovery has been upgraded for faster discoveries</h3>
<p>Starting with Madrid Patch 3, Windows discovery has been improved and discovers Windows servers up to 7x faster than it did previously. This change requires PowerShell version 2 (up to 5.0) to be installed on the remote host.</p>
<h3><br />How does the upgraded Windows discovery affect older Windows versions?</h3>
<p>Most Windows versions have PowerShell installed by default. However, older Windows versions (including Windows 2000, Windows 2003, and Windows 2008 R1) do not have PowerShell installed out of the box. So if you have Windows 2003 or Windows 2008 R1 that you cannot discover, please check if PowerShell is installed on those devices. Please note that PowerShell on Windows 2000 is not officially supported, which means ServiceNow will no longer discover Windows 2000.</p>
<p>You can read additional details about supported Windows versions in this product documentation: <a href="https://docs.servicenow.com/bundle/madrid-it-operations-management/page/product/discovery/reference/r_DataCollDiscoWindowsComputers.html" rel="nofollow">Supported Windows </a></p>
<p>Madrid Patch 3 <a href="https://docs.servicenow.com/bundle/madrid-release-notes/page/release-notes/quality/madrid-patch-3.html" rel="nofollow">Release Notes</a></p>
<p>Subscribe to <a href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0748130" rel="nofollow">KB0748130</a> this article for more information.</p>