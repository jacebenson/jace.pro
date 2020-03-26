---
title: "What to do if you are Missing Required Information on Mandatory Variables for Catalog Items on Service Portal in London"
date: 2019-01-05T07:15:56.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ec4d2479db326b40107d5583ca961983"
---
<p>Before you upgrade to London, consider <a href="http://bit.ly/KB0719979" target="_blank" rel="noopener noreferrer nofollow">checking your Variable Set names </a>are unique to avoid broken Variable sets.</p>
<p>&#34;I upgraded to London and now my catalog items page in Service Portal <a href="http://bit.ly/KB0720638" target="_blank" rel="noopener noreferrer nofollow">no longer displays the mandatory variables</a> under the &#34;Required information&#34; box? What gives?!&#34; If you have this question, or something similar along those lines, stick around a little to find out why :)</p>
<p> First, we&#39;ll talk about what Required Information is. Then how to confirm you are experiencing an issue with your mandatory variables not displaying in Service Portal. Alas, I&#39;ll share how to workaround it and, finally, why it is actually behaving as expected. </p>
<p> </p>
<h2>Required information: What is it and Why?</h2>
<p>&#34;Required information&#34; is a little box on the right of the catalog item page that displays which mandatory variables have been filled out. It is specially useful to view this information to see exactly which mandatory variables have not been filled out. </p>
<center><img style="max-width: 100%; max-height: 480px;" src="bc2d6879db326b40107d5583ca961992.iix" /></center>
<p>Each text within this box is a clickable link that points to the actual mandatory variable that has not been filled out. If your catalog item has a lot of mandatory variables it&#39;s super helpful to just click on the links to go straight to those variables instead of having to scroll up and down and find them.</p>
<h2>Blank Mandatory Variables on Service Portal</h2>
<p>Okay, I&#39;m following so far... How do I confirm that what I&#39;m experiencing is the same as what this blog is describing?</p>
<center><img style="max-width: 100%; max-height: 480px;" src="ecdee43ddb326b40107d5583ca961910.iix" /></center>
<p> </p>
<p>If you&#39;re seeing a similar screen as the above screenshot where even though the mandatory variables have not been filled out but they do not appear under the &#34;Required information&#34; box, then yes, you&#39;re being affected by this issue.</p>
<p>To confirm it further, open up the browser&#39;s developer tools and you should see the error &#34;Error: [ngRepeat:dupes] Duplicates in a repeater are not allowed.....&#34; in the console as shown above as well.</p>
<p> </p>
<h3>The Culprit: Identical Variable names</h3>
<p>The cause of this issue is pretty simple: It&#39;s because the variable set name (specifically the &#34;Internal name&#34; and not &#34;Title&#34;) is the same as one of the variables within it! And the platform does not allow this to be the same, not anymore (more on that later).</p>
<p>So as you&#39;ve guessed it the fix would be to update either the variable set &#34;Internal name&#34; or the variable &#34;Name&#34; to <strong><span style="text-decoration: underline;">NOT</span></strong> be the same and you&#39;re now back in business!</p>
<p> </p>
<center><img style="max-width: 100%; max-height: 480px;" src="72813871db726b40107d5583ca96190e.iix" /></center>
<p>  </p>
<p>You will only see this behavior if variable names are the same as their variable sets internal names on the same catalog item.</p>
<p>For example:</p>
<ul><li>Variable name &#34;abc&#34; <span style="text-decoration: underline;"><strong>within</strong></span> the variable set that has internal name of &#34;abc&#34; for the same catalog item.</li></ul>
<blockquote>
<ul><li style="text-align: left;">Then yes, you&#39;re affected by this behavior.</li></ul>
</blockquote>
<ul><li>Variable set with internal name of &#34;abc&#34; and a second variable set with internal name of also &#34;abc&#34; for the same catalog item.</li></ul>
<blockquote>
<ul><li>Then yes, you&#39;re affected by this behavior.</li></ul>
</blockquote>
<ul><li>Variable name &#34;abc&#34; <span style="text-decoration: underline;"><strong>outside</strong></span> of the variable set that has internal name of &#34;abc&#34; for the same catalog item.</li></ul>
<blockquote>
<ul><li>Then no, you&#39;re not affected by this behavior.</li></ul>
</blockquote>
<p> </p>
<p>This is actually working as expected because starting in London the variable set behavior has now been enhanced where the variable set itself is treated just like an actual variable. It is now considered wrong configuration to make a variable set &#34;Internal Name&#34; be the same as the &#34;Name&#34; for one of its variables for the same catalog item.</p>
<p>The London release notes page has been updated to reflect this change as well:</p>
<center><img style="max-width: 100%; max-height: 480px;" src="8b93bc35db726b40107d5583ca961944.iix" /></center>
<p> </p>
<p style="text-align: center;"> Click <a href="https://docs.servicenow.com/bundle/london-release-notes/page/release-notes/it-service-management/service-catalog-rn.html" target="_blank" rel="noopener noreferrer nofollow">HERE</a> to go to the release notes that contains this information and more on London changes. For more information on this hiccup, see <a href="http://bit.ly/KB0720638" target="_blank" rel="noopener noreferrer nofollow">London Service Portal Catalog item - Required Information broken when the Variable Set title is same as name of a mandatory Variable</a> in the ServiceNow Knowledge Base.</p>
<p style="text-align: center;"> See  <a href="http://bit.ly/KB0719979" target="_blank" rel="noopener noreferrer nofollow">Solution to Identify Wrongly configured Variable Sets</a> for the script you can use to identify which variables have the same name BEFORE upgrading.</p>
<p style="text-align: center;"><em><strong>Have questions? Comment below!</strong></em></p>
<p> </p>
<p> </p>