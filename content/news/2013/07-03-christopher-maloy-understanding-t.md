---
title: "Understanding tables with version control"
date: 2013-07-02T20:48:49.000Z
authors: ["Christopher.Maloy"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ba5c2aa1dbd0dbc01dcaf3231f961943"
---
<p>Just a fun little useful fact I found - passing it on to the community.<br /><br />Many of you have noticed that some tables allow you to track and compare the versions of the changes made. The Script Include table is a great example of what I am talking about.<br /><br />If you navigate to the Script Include table, select any Script Include, and scroll to the bottom of that form you will see what I am referring to.<br /><br />The secret to the sauce that makes that happen is the "update_synch=true" table attribute. Tables with this attribute have the option of personalizing their "Related Lists" and adding the "Versions" to the selected side of the slush bucket. <br /><br />The "sys_update_version" table has been included to support this.<br /><br />Wiki reference:<br />http://wiki.servicenow.com/index.php?title=Using_Update_Sets#Comparing_Versions<br /> <br />Cheers.</p>