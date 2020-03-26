---
title: "Unlearn Series  Verifying the fastest way to find atleast one result"
date: 2019-11-01T16:45:40.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=1a5a7fdedb34c850d82ffb2439961996"
---
<p><span style="font-family: verdana, geneva; font-size: 12pt;">We all have to implement a requirement commonly where atleast one record/result exists before we do some processing. Example, a emergency change has atleast one incident attached to it before we allow the user to submit it. We have atleast 6 different ways to do this query (probably more) and find if atleast one such record exists.</span></p>
<p><span style="font-family: verdana, geneva; font-size: 12pt;"> </span></p>
<p><span style="font-family: verdana, geneva; font-size: 12pt;">Some of the ways are include,</span></p>
<p><span style="font-family: verdana, geneva; font-size: 12pt;"> </span></p>
<ul><li><span style="font-family: verdana, geneva; font-size: 12pt;">Using Gliderecord &#43; getRowcount()</span></li><li><span style="font-family: verdana, geneva; font-size: 12pt;">Using GlideAggregate &#43; getAggregate(count).</span></li><li><span style="font-family: verdana, geneva; font-size: 12pt;">Using a plain gliderecord &#43; next().</span></li></ul>
<p><span style="font-family: verdana, geneva; font-size: 12pt;"> </span></p>
<p><span style="font-family: verdana, geneva; font-size: 12pt;">There has been multiple discussion on the most optimal way to do this including the one <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;a2bc2e25dbd0dbc01dcaf3231f9619df" rel="nofollow">here</a>. But how do we know which is the best/fastest way to do this? Attached are different versions of the script, scanning the task table. The idea is to reproduce the results with the full table scan. </span></p>
<p> </p>
<p><span style="font-family: verdana, geneva; font-size: 12pt;">The winner of the test was <strong>Gliderecord &#43; setLimit() &#43; hasNext</strong>() function. Using setLimit seems to be the trick for getting most optimal performance possible.</span></p>
<p> </p>
<p><span style="font-family: verdana, geneva; font-size: 12pt;"><strong>Note</strong>: ServiceNow seems to be caching the records after the initial query. So, do few runs to determine the average performance of different function calls.</span></p>
<p> </p>
<p><span style="font-family: verdana, geneva; font-size: 12pt;"><em>If you liked the content, please share, like, bookmark or leave your valuable comments.</em></span></p>