---
title: "How to Backup All Development Work in  Click"
date: 2018-04-16T13:52:53.000Z
authors: ["Paul Morris"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=1c223270dbed1fc07b337a9e0f961974"
---
<p>Are you using Jakarta or a later version of ServiceNow?<br /><br />Do you wish there was an easier way to keep your environments up to date?<br /><br />Are you finding it time consuming and difficult to backup and restore your development work when cloning during release cycles?<br /><br /></p>
<p>If you answered yes to any of the above, read on!</p>
<h3>The Problem</h3>
<h4>I want to keep my instances up to date, but it is too difficult and time consuming to back out my Update Sets and restore them after the clone is complete.</h4>
<p> </p>
<h3>The Old Way</h3>
<p>You would wait until your environments are so out of sync, usually triggered by the Change gone wrong, causing Incidents, days of fire fighting and late nights,  before thinking about Cloning all your environments from Production.</p>
<p>You have more &#34;In Progress&#34; Update Sets than you can poke a stick at - from Development Spikes, to Enhancements put on hold indefinitely while the customer makes up there mind on the color of a button.</p>
<p>You filter your Update Sets by &#34;In Progress&#34; and painstakingly cycle each one as &#34;Complete&#34; and then Export them to XML. The default file name is something awful, like 1c223270dbed1fc07b337a9e0f961974.xml. You will need to remember the order in which these were created, as not to ruin some dependencies that may exist.</p>
<p>You might not even do any of the above and wait until there is absolutely no work in the pipeline, or have a mandatory Upgrade. </p>
<p>Regardless of your approach (or lack thereof), the whole process takes way too much time anyway and you wish there was an easier way.</p>
<p>Now there is! And it only takes 4 easy Steps :)</p>
<h3>The New Way</h3>
<h4>Update Set Batching</h4>
<p>In case you missed the news, ServiceNow introduced a new feature called <a href="https://docs.servicenow.com/bundle/kingston-application-development/page/build/system-update-sets/hier-update-sets/concept/us-hier-overview.html" rel="nofollow">Update Set Batching</a> in Jakarta.</p>
<p><a href="https://docs.servicenow.com/bundle/kingston-application-development/page/build/system-update-sets/hier-update-sets/concept/us-hier-overview.html" rel="nofollow">Update Set Batching</a> allows Developers to relate Update Sets in Parent/Child relationships.</p>
<p><img src="f89136fcdbad1fc07b337a9e0f9619c2.iix" /></p>
<p>This essentially eliminates the need to Merge Update Sets.</p>
<p>When a package of work is ready for deployment to the next Upstream environment, simply close the &#39;Update Set Parent&#39;, which in turn closes all Child Update Sets. </p>
<p>When retrieving Update Sets from the Upstream Environment, you only need to deploy one Update Set - the &#39;Update Set Parent&#39;.<br /><br /></p>
<h4>But how does this relate to backing up Update Sets?</h4>
<p>Depending on the size of your environment and rate of change, it is not uncommon to have 5-20 Update Sets &#34;In Progress&#34; at a time.</p>
<p>You would ideally like to be Cloning over DEV after every release - but this is really difficult and risky when you have a number of In Progress items, generally reflected by the number of &#34;In Progress&#34; Update Sets that are open.</p>
<h3> </h3>
<h4>How to Backup Your Update Sets using Update Set Batching</h4>
<p>In your Development environment, prior to a clone:</p>
<ol><li>
<h5>Create Parent Set</h5>
Create a new Update Set called &#34;xx/yy/zz Dev Backup&#34; (modify name to comply with your customers naming standard) <br /><br /><img src="9347b27cdb215fc07b337a9e0f9619f8.iix" /></li><li>
<h5>Relate all Child Update Sets</h5>
On the newly create Update Set, Navigate to &#39;Child Update Sets&#39; and select &#39;Edit...&#39;<br /><br /><img src="e5083e30db615fc07b337a9e0f96193b.iix" /><br /><br />Using the slush bucket, filter on &#39;State&#39; is &#34;In Progress&#34; and &#39;Name&#39; is not &#34;Default&#34; (Make sure you click &#39;Run Filter&#39;) <br /><br /><img src="c668f2b0db615fc07b337a9e0f961941.iix" /><br /><br />Highlight all the Update Sets, move them across and select &#39;Save&#39;.<br /><br /><img src="5ea8faf0db615fc07b337a9e0f961904.iix" /></li><li>
<h5>Close the Parent</h5>
Set &#39;State&#39; of the Parent Update Set to &#39;Complete&#39;. <br />The system will show a prompt, warning you that all Update Sets will be marked as Complete when you save (this is a good thing).<br /><br />Select &#39;OK&#39; and save the record.<br />ServiceNow will now close all your Update Sets for you!<br /><br /><img src="ed2a76f8db615fc07b337a9e0f961945.iix" /><br /><br /></li><li>
<h5>Export to XML</h5>
Select the Related Link &#39;Export Update Set Batch to XML&#39;<br /><br /><img src="46da76fcdb615fc07b337a9e0f961904.iix" /><br /><br />This has saved your Update Set Hierarchy into XML<br /><br /><img src="93cb76b0dba15fc07b337a9e0f9619c6.iix" /></li></ol>
<h4>In Summary</h4>
<p>In 4 steps, you now have a single XML file containing</p>
<ul><li>Your Parent Update</li><li>All &#34;In Progress&#34; Child Update Sets</li><li>The Version Record of every change in each Update Set</li></ul>
<p><img src="27ecbe38dba15fc07b337a9e0f961980.iix" /></p>
<h4><br />Restoration</h4>
<p>After you have cloned over your Development environment, restoring your In Progress Update Sets is even easier.</p>
<ol><li>
<h5>Import the XML</h5>
Navigate to &#39;Retrieved Update Sets&#39;.<br />Scroll to the bottom and select the Related Link &#34;Import Update Set from XML&#34; and select your XML file containing your backup.<br /><br /><br /><br />We can see that the Retrieved Update Set contains all the Updates.<br /><br /><img src="ae9efefcdba15fc07b337a9e0f9619dd.iix" /></li><li>
<h5>Preview &amp; Commit</h5>
Preview the Update Set.<br /><br />Action any resulting Preview Problems and click Commit.<br /><br />Your entire Development Pipeline has now been restored!</li></ol>
<p> </p>
<p>You will probably run into some Preview Problems when restoring, which may seem like a painful process.<br /><br />This may seem annoying now, but it is better to have these come up now, rather than when you are deploying these Changes into Production! <br />It is always better to highlight this issues in Development before going into Production. You&#39;ll thank your future self :)</p>
<h4><br />Other Uses</h4>
<p>Backing up your Development &#34;In Progress&#34; before a clone is only one of many uses of the new feature:</p>
<ul><li>Use to group releases instead of Merging at the last moment<br /><br /></li><li>Use to map dependencies between Update Sets or show Themes</li></ul>
<p><br />You could even write a UI Action and a Script to do the whole Backup process for you!<br /><br /></p>
<h4>Discuss!</h4>
<p>Please comment below on your experience with Update Set Batches and/or any cool uses/discoveries you have made.<br /><br />Does the Merge function still have a purpose? Tell me what you think.</p>
<p> </p>
<p> </p>
<p> </p>