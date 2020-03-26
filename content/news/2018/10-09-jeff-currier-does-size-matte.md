---
title: "Does size matter   Getting to know your instance like how big is it anyway"
date: 2018-10-08T19:40:31.000Z
authors: ["Jeff Currier"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=3aef0151db4d67c0fece0b55ca9619bb"
---
<p>While ServiceNow takes care of the instance, there are many questions we would like to ask about our instance.  Some are easy to find, and some are hard to find.  Recently I was looking to determine the size of an instance and that fell into the hard category.  However, after some research I determined there was a small new gem hidden in London which would help.  The Application Usage Overview has been part of the ServiceNow Platform since the Jakarta release.  However in London, instance size was added.</p>
<p>So here is the deal.  Navigate to the ‘Instance Usage’ application, then ‘<a href="https://docs.servicenow.com/bundle/london-platform-administration/page/administer/subscription-management/reference/usage-overview-reports.html" rel="nofollow">Application Usage Overview</a>’. </p>
<p><img src="fe8e41d5db0d67c0fece0b55ca961989.iix" /><img style="max-width: 100%; max-height: 480px;" src="undefined.iix" /></p>
<p>This is an awesome and interesting view, but what about the instance size.  For the instance size, we need to scroll way down.  Using the browser find feature or just scrolling we find... </p>
<p><img src="95be8559db0d67c0fece0b55ca96195f.iix" /></p>
<p>My database is 31,313 megabytes or 30.6gb.  This is the primary database.  For a production database with a standby copy, I would expect it to be the same size as it is kept in sync with the primary database.</p>
<p>So, armed with this knowledge, I have one less thing to worry about.  No more wondering about DB size or trying to write queries to figure it out.  Whenever management asks how much data do we have, I now have an answer.</p>
<p>Also, I can browse this dashboard for more platform information which might be interesting.  Many people may find that the default graphs for custom application provide good insight to how those applications are being used.  Also, there are a large number of Orchestration related statistics which could be useful to understand as well as some related to discovery as well.</p>
<p>In conclusion, while ServiceNow maintains the instance and takes care of the storage, customers and managers often ask “how much data do we have” or “how big is the instance”.   Now we have an easy way to answer this question.</p>
<p> </p>
<p>I hope this helps,</p>
<p>Jeff</p>
<p> </p>