---
title: "From London variable set and variables with same name are not allowed and cause issues"
date: 2019-06-27T00:41:29.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=c4cb1a91db1a3340a39a0b55ca96191e"
---
<p>After London upgrade, if you are seeing weird behavior with variables not populating correctly this can be the reason.</p>
<p> </p>
<h1>What has changed:</h1>
<p>From London and up, the variable set is now treated as a first-class citizen and as a result of this, a catalog item cannot have a variable set(internal_name) and a variable (name) with the same name.</p>
<p>Here are release notes for more detailed explanation: <a href="https://docs.servicenow.com/bundle/london-release-notes/page/release-notes/it-service-management/service-catalog-rn.html" rel="nofollow">https://docs.servicenow.com/bundle/london-release-notes/page/release-notes/it-service-management/service-catalog-rn.html</a></p>
<p>Two scenarios that will issues:</p>
<p>1. If variable set has one variable with same name as internal_name of variable set</p>
<p><img src="https://community.servicenow.com/fb902d7ddb92fb4023f4a345ca9619b6.iix" width="579" height="219" /></p>
<p>2. If catalog item has variable name same as variable set internal_name</p>
<p><img src="https://community.servicenow.com/bee0ed31dbd2fb4023f4a345ca9619bb.iix" width="581" height="237" /></p>
<h2>Here are some issues users can report due to this issue:</h2>
<p>- On Service Portal Catalog item, required Information is broken (not populated) when the Variable Set title is same as the name of a mandatory Variable</p>
<p>- Previously saved values for variables that have the same name as variable set internal name are set to null</p>
<p>- Some variables are not populating on RITM and catalog tasks</p>
<p>- When users fill the form on service portal, some values are not replicated on RITM.</p>
<p>- Client script and Catalog UI Policies does not set the value of the variable.</p>
<p>- After upgrading to London values of some variables are blank in RITM and catalog tasks.</p>
<h3>Use these steps to diagnose the issue</h3>
<p>Follow this KB article to identify impacted variable on instances London and Up <a href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0719979" target="_blank" rel="noopener noreferrer nofollow">Solution to Identify Wrongly configured Variable Sets</a></p>
<p>Note: Run the script under Identify Impacted Variables section.</p>
<h3>Fix your variables</h3>
<p> </p>
<p>Workaround for this issue is to change the &#39;Internal name&#39; of the Variable inside your &#39;Customer&#39; Variable Set for Catalog Item<br />As long as the Variable has a different &#39;Internal name&#39; to the Variable Set, then you should see that the information is passed correctly to the Request Item.</p>
<h2>Additional Details:</h2>
<p>Please see this KB article <a href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0720638" rel="nofollow">here</a> for more details about the fix, workaround, and Steps to Replicate.</p>
<p>Please note: You will need to login to HI to access these KB articles. </p>