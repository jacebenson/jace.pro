---
title: "How to fix the red popup  must declare a cross scope access privilege errors"
date: 2019-12-03T20:53:16.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ce28d5b8db690c5c5129a851ca961999"
---
<p>Recognize this (note specific scripts and scopes may vary)?</p>
<p><img src="https://community.servicenow.com/95cfd80ddb4884901cd8a345ca961942.iix" /></p>
<p>Unfortunately we have all seen them and they can be quite annoying but they are <span style="text-decoration: underline;"><strong>very</strong></span> easy to fix!  </p>
<p><span style="text-decoration: underline;">Here is a little background on why these errors happen:</span></p>
<ul><li><a href="https://docs.servicenow.com/bundle/newyork-application-development/page/build/applications/concept/restricted-caller-access-privilege.html" rel="nofollow">Restricted Caller Access Privileges</a> is a feature introduced in the London release which is basically an additional security layer that allows ServiceNow administrators to set whether other applications/scopes can access data in another app.</li><li>
<ul><li>There are two settings: Caller Restriction and Caller Tracking</li><li>Caller Restriction means that the application admin must approve other scopes to access the data</li><li>Caller Tracking allows other scopes to consume the data but that access is tracked in a log and no approval is required</li></ul>
</li><li>This is a setting in many different configurations within the platform:</li><li>
<ul><li>Tables - via Application Access tab where you designate if another app can read, create, update, or delete records and if that action is Caller Restriction or Caller Tracking</li><li>Script Includes - settings at the top</li><li>System Events</li></ul>
</li><li>Because of the sensitive nature of HR data, the scoped HRSD application leverages this feature and specifically Caller Restriction.</li><li>
<ul><li>Again this means that any time another scope needs to access HR configurations and data, it must be approved. </li><li>But keep in mind that HR is comprised of many scopes so this even means that one HR scope calling another HR scope must also be approved!</li></ul>
</li></ul>
<p> </p>
<p>How do you solve these errors? The message in the error gives you several clues on what to look for when fixing this issue.</p>
<p><img src="https://community.servicenow.com/79262c89db8c84901cd8a345ca9619f3.iix" /></p>
<ul><li>Navigate to <strong>System Applications \ Application Restricted Caller Access Privileges</strong></li><li>I personally look at the Status Column and <strong>filter out</strong> all Approved so I can view the ones that are either in Requested or Invalidated status</li><li>I also add the Updated column to the list and sort in descending order as well</li></ul>
<p><img src="https://community.servicenow.com/43c66c01dbcc84901cd8a345ca961914.iix" /></p>
<ul><li>Remember I mentioned the error provides clues?  The highlighted row is the record we need to approve to make the example error go away:</li></ul>
<p><img src="https://community.servicenow.com/4e97ac85dbcc84901cd8a345ca961938.iix" /></p>
<ul><li>Click the link in the Operation column or the Information circle to open this record.</li><li>You must select the Target Scope (Content Delivery in this case) to change the Status from Requested to Approved</li></ul>
<p><img src="https://community.servicenow.com/63fcf085db4cc4901cd8a345ca96194a.iix" /></p>
<ul><li>Then save the record and try your test again</li><li>In some cases one script may call another script which will generate another Restricted Caller Access record.  So if your test fails again, repeat the above steps to see if there is another RCA record to approval</li></ul>
<p> </p>
<p>Important Considerations:</p>
<ul><li>Restricted Caller Access records are meant to be a security feature so you know what applications, scripts, etc are consuming HR Data.  If you have other records in Requested status you should investigate those as well and approve if applicable.</li><li>
<ul><li>Sometimes background processes like workflows, etc may also get tripped on Restricted Caller Access and you may never see this error but notice broken functionality.</li></ul>
</li><li>During development it is important to check this table periodically for Requested items.  You could consider setting up an email notification to be notified when records are set to the Requested or Invalidated status.</li><li>Once you approve an Application Restricted Caller Access Privilege record, it is recorded in update sets.</li><li><ul><li>This means as you are developing new functionality you can include the approval so you won&#39;t experience these errors in the target instance.</li><li>It is worth noting that if you change the items referenced in this record, the status will become <strong>invalidated</strong> and you MUST approve the record again.  This generates another Restricted Caller Access record so you must include the new version of the record in your update set - the old version will NO longer work.</li></ul>
</li></ul>
<p> </p>