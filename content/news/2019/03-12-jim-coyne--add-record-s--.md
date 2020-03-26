---
title: "Add Records to Update Set Tool"
date: 2019-03-12T00:26:55.000Z
authors: ["Jim Coyne"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=f7461bb6db08ff005129a851ca9619f4"
---
<h5>Included in the <a href="community?id&#61;community_blog&amp;sys_id&#61;b3c843aadb892b40fece0b55ca961906" rel="nofollow">Developer Toolbox</a> Update Set available on Share (link in the &#34;Developer Toolbox&#34; post).</h5>
<p> </p>
<p>I thought I&#39;d share my version of the tool created by many people.  It allows a user with the &#34;admin&#34; role to add any record to an Update Set (except for Update Set records themselves), after confirmation. Adds a &#34;Form context menu&#34; UI Action to forms as well as a &#34;List choice&#34; and &#34;List context menu&#34; UI Action to lists for adding multiple records at once.</p>
<p>Useful for adding a new integration User or Group record, etc… into an Update Set to ensure they move over to all the instances. Saves you from exporting then importing the records into all the other instances.</p>
<p> </p>
<p> <img src="https://community.servicenow.com/d6f71f76db48ff005129a851ca9619fc.iix" /></p>
<p> </p>
<p><img src="https://community.servicenow.com/7d881f7adb48ff005129a851ca96198f.iix" /></p>
<p><img src="https://community.servicenow.com/3ce81fbedb48ff005129a851ca9619bc.iix" /></p>
<p> </p>
<p> A confirmation dialog will appear, showing how many records will be added to your currently selected Update Set:</p>
<p><img src="https://community.servicenow.com/18d95ff2db88ff005129a851ca96198c.iix" /></p>
<p>Once added, a message appears confirming the addition of the records:</p>
<p><img src="https://community.servicenow.com/270a17f6db88ff005129a851ca96195e.iix" /></p>
<p>There are 4 records for this tool:<br />- UI Action for both the form and list views<br />- UI Page which actually does the work<br />- Access Control to allow access to the UI Page<br />- Access Role limiting access to the UI Page to the &#34;admin&#34; role only</p>
<p>I&#39;ve attached the XML files so you can just import them into your instance. As always, try it out in your company&#39;s development instance first, or better yet, your own personal development instance.</p>