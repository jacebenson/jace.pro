---
title: "Main Page is Slow to Load in Madrid Check your Connect Chats Downloadable Scheduled Job included"
date: 2019-03-07T06:35:12.000Z
authors: ["shruti.tyagi"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=f2ecee9ddbc87b00fece0b55ca9619bb"
---
<p>Are some of your users or a specific user reporting slowness while loading the main page as soon as they logged in or overall instance slowness on <a href="https://docs.servicenow.com/bundle/madrid-servicenow-platform/page/use/collaboration/concept/c_Collaboration.html" rel="nofollow">Connect Chat</a>? Read on.</p>
<div>
<p>Users who have a large number of open conversations can experience slowness because as Connect Chat tries to load all conversations on the main page and homepage load will be delayed. This can vary from 5-10 seconds of delay, all the way to 1-2 minutes depending on the number of conversations records.</p>
<p>If multiple users are impacted, it will most likely impact them all differently because of the difference in the number of open conversations. This appears as ServiceNow is performing slow, but it is really a chat latency issue.</p>
<div>
<p>This is an existing problem in Madrid that will be fixed come the New York Release. Until then there are two things you can do to enable your Connect Chat conversations&#39; performance:</p>
<ol><li>Stop older conversations from loading</li><li><a href="http://bit.ly/KB0717049" target="_blank" rel="noopener noreferrer nofollow">Clean up chats</a></li></ol>
</div>
<h1>What to do if Connect Chats or the Main Page is Slow to Load</h1>
<p>Here is how you can determine if it is a large history of chat conversations in Connect is causing slowness on your instance:</p>
<ul><li>As soon as the user is logged in, it takes the homepage/dashboard a very long time to load</li><li>On impersonating user you will see a large number of open conversations on the connect sidebar:</li></ul>
<p style="padding-left: 90px;"><img src="https://community.servicenow.com/517a2082dbc8fb00fece0b55ca961951.iix" width="99" height="204" /></p>
<p style="padding-left: 90px;">(Click to enlarge)</p>
<ul><li>You can also look in table &#39;live_group_member&#39; to see how many groups the user is a member of. Look for member column in this table. If the user is a member of a large number of groups, user may experience slowness.</li></ul>
</div>
<h2>How to speed up your chats if they are slow:</h2>
<p>To not load those conversations, edit the live_group_member records for that user. Set the State field to Inactive, and the Visible field to false. </p>
<table border="1"><tbody><tr><td style="text-align: center;"><strong>NOTE:</strong> If the user needs some of their Connect conversations to stay active and visible, then you will need to find a way to limit them before setting the visibility and state.</td></tr></tbody></table>
<p> </p>
<p style="text-align: center;">Or, use the attached scheduled job to<a href="http://bit.ly/KB0717049" target="_blank" rel="noopener noreferrer nofollow"> clean up your chat conversations.</a> You will need to login to HI to view. Subscribe to <a href="http://bit.ly/KB0717049" rel="nofollow">KB0717049</a> for more details about the issue and the workaround.</p>