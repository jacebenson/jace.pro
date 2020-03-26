---
title: "Adding Doctype to a UI Page"
date: 2015-06-16T02:20:45.000Z
authors: ["tltoulson"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=724d6229dbd0dbc01dcaf3231f9619c8"
---
<p>Sorry, guys, no video tutorial this week.   I am working on two video projects right now for you guys.   One is more of a motivational piece and I will release by next week.   The second project is an in depth video series on custom reporting that will put the first to shame.   I have some great new features and changes in store, so be ready for a bit of a shakeup.</p><p></p><p>Today, I am going to share a trick I learned to add a doctype to a UI Page based off of <a title="Will Leingang" __default_attr="23082" __jive_macro_name="user" class="jive_macro_user jive_macro" data-objecttype="3" data-orig-content="Will Leingang" href="/community?id=community_user_profile&user=765fc229db181fc09c9ffb651f961951">Will Leingang</a>'s article <a title="Making a UI Page without using the framework page template" __default_attr="3824" __jive_macro_name="blogpost" class="jive_macro jive_macro_blogpost" data-orig-content="Making a UI Page without using the framework page template" href="/community?id=community_blog&sys_id=e26e22eddbd0dbc01dcaf3231f96196e">Making a UI Page without using the framework page template</a>. A page's doctype usually doesn't seem to make a huge difference in output but occasionally, certain scripts and html/css tricks require a specific doctype.   In my case, I needed the standard HTML5 doctype.</p><p></p><p></p><h1>What Not To Do</h1><p></p><p>As my first attempt, I foolishly tried this for the UI Page:</p><p></p><pre __default_attr="xml" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14344019116776205" jivemacro_uid="_14344019116776205">
<p>&lt;?xml version="1.0" encoding="utf-8" ?&gt;</p>
<p>&lt;j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null"&gt;</p>
<p>         &lt;!DOCTYPE HTML&gt;</p>
<p>         Hello World</p>
<p>&lt;/j:jelly&gt;</p>
</pre><p></p><p>And ServiceNow promptly informed me:</p><p><img  alt="Screen Shot 2015-06-15 at 3.58.05 PM.png" class="image-0 jive-image" src="1f23440adb18db048c8ef4621f96193d.iix" style="height: 26px; width: 620px;"/></p><p>In hindsight, I should have seen that coming.   Jelly is XML and XML recognizes and interprets a DOTYPE declaration.   That could cause the Jelly runner to throw all sorts of errors, bad juju.</p><p></p><p></p><h1>Another Bad Idea</h1><p></p><p>So then my next stroke of genius was to encode the XML entities to trick the parser.   Cheap parser loopholes, they exist so we can use them right?   So here is the code for attempt #2:</p><p></p><pre __default_attr="xml" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14344022800937639" jivemacro_uid="_14344022800937639">
<p>&lt;?xml version="1.0" encoding="utf-8" ?&gt;</p>
<p>&lt;j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null"&gt;</p>
<p>         &amp;lt;!DOCTYPE HTML&amp;gt;</p>
<p>         Hello World</p>
<p>&lt;/j:jelly&gt;</p>
</pre><p></p><p>No errors on save and I was feeling pretty clever as I clicked the refresh button on my UI Page.   The results were... slightly less than satisfying:</p><p><img  alt="Screen Shot 2015-06-15 at 4.06.34 PM.png" class="jive-image image-2" src="6564ad42db1053043eb27a9e0f96191a.iix" style="height: auto;"/></p><p>Yes.   That is the page I saw in the browser.   For those who are still confused, this is the HTML in the browser:</p><p></p><pre __default_attr="xml" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14344025787005057" jivemacro_uid="_14344025787005057" modifiedtitle="true">
<p>&lt;html&gt;</p>
<p>         &lt;head&gt;&lt;/head&gt;</p>
<p>         &lt;body&gt;</p>
<p>                   &amp;lt;!DOCTYPE HTML&amp;gt;</p>
<p>                   <span style="font-size: 10pt; line-height: 1.5em;">Hello World</span></p>
<p><span style="font-size: 10pt; line-height: 1.5em;">                   &lt;script&gt;&lt;/script&gt;</span></p>
<p><span style="font-size: 10pt; line-height: 1.5em;">         &lt;/body&gt;</span></p>
<p><span style="font-size: 10pt; line-height: 1.5em;">&lt;/html&gt;</span></p>
</pre><h1></h1><h1>Problem Solved, Problem Staying Solved</h1><p></p><p>So with that failure, I turned to option #3, leveraging the &lt;g:no_escape&gt; tag to embed raw html.   Since Jelly runs in two phases and the second phase parse would likely complain about a misplaced &lt;!DOCTYPE&gt; as much as phase 1, I had to run no_escape in phase 2 to eliminate any XML parsing conflicts.   This is a common trick I use when XML is getting in my way.   Of course, to do this, I needed a string variable containing the raw html to embed, so I also added &lt;g:evaluate&gt;.   Here is the UI Page XML:</p><p></p><pre __default_attr="xml" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14344029758822218" jivemacro_uid="_14344029758822218">
<p>&lt;?xml version="1.0" encoding="utf-8" ?&gt;</p>
<p>&lt;j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null"&gt;</p>
<p>         &lt;g:evaluate&gt;</p>
<p>                   <span style="font-size: 10pt; line-height: 1.5em;">var docType = '&amp;lt;!DOCTYPE HTML&amp;gt;';</span></p>
<p>         &lt;/g:evaluate&gt;</p>
<p>         &lt;g2:no_escape&gt;</p>
<p>                   $[docType]</p>
<p>         &lt;/g2:no_escape&gt;</p>
<p>         <span style="font-size: 10pt; line-height: 1.5em;">Hello World</span></p>
<p>&lt;/j:jelly&gt;</p>
</pre><p></p><p>And the successful result:</p><p></p><p><img  alt="Screen Shot 2015-06-15 at 4.16.49 PM.png" class="jive-image image-3" height="369" src="4b0001c2db9c9304b322f4621f9619e7.iix" style="height: 369px; width: 454.831013916501px;" width="455"/></p><p></p><p>So it took a little trickery to work around the XML pitfalls but in the end I was able to use sysparm_direct=true, send a DOCTYPE to the browser and fix the issue with my script library.</p>