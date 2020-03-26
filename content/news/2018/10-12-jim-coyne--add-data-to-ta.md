---
title: "Add Data to Table Tool"
date: 2018-10-11T08:56:53.000Z
authors: ["Jim Coyne"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=c0695a0edb4da3405129a851ca961996"
---
<h5>Included in the <a href="community?id&#61;community_blog&amp;sys_id&#61;b3c843aadb892b40fece0b55ca961906" rel="nofollow">Developer Toolbox</a> Update Set available on Share (link in the &#34;Developer Toolbox&#34; post).</h5>
<p> </p>
<p>There are times when you need to add a few records into a table.  Simple records.  They just need a name.  Departments, Locations, Groups, a custom lookup table, etc...</p>
<p>You can go ahead and enter each one manually, which is a pain, depending on how many you have to add.  Or setup an import set, which may actually take more time than doing it manually.</p>
<p>Or you can use the &#34;Add Data to Table&#34; tool:</p>
<p><img src="d5d99ecedb4da3405129a851ca96190c.iix" /></p>
<p> </p>
<p>You access the tool by selecting the &#34;Add Date to Table&#34; Context Menu by right-clicking the list header:</p>
<p><img src="3d1b9682db8da3405129a851ca961948.iix" /></p>
<p> </p>
<p>A popup window appears allowing you to select the table, field, how the data is separated and then the data itself.  The table and field names should be auto populated for you, based on the list view you were looking at and that table&#39;s display value column.  You can change the field to what you want to populate.</p>
<p>By default, the tool is expecting the data to be entered one item per line, but you can select &#34;Comma-separated string&#34; instead, if that is how you have your data.  Enter or paste in your data and click on the &#34;OK&#34; button and the records will be added.  Leading and trailing spaces are stripped before inserting the data.</p>
<p>Some info/error messages will appear on screen to keep you updated on what happened:</p>
<p><img src="0c28924adb4da3405129a851ca96191b.iix" /></p>
<p> </p>
<p>...as well as an entry into the system logs:</p>
<p><img src="01e856cadb4da3405129a851ca9619cf.iix" /></p>
<p> </p>
<p>Attached are the XML records for the UI Page which does all the work, the Context Menu which opens the UI Page and an Access Control and Access Role records to limit access to the UI Page to users with the &#34;admin&#34; role.</p>
<p>TIP: import the Access Role record before the Access Control record, otherwise the system may add &#34;snc_internal&#34; to the &#34;Requires role&#34; list.</p>
<p>As usual, test it out in your dev instance, or better yet, your personal dev instance first.</p>