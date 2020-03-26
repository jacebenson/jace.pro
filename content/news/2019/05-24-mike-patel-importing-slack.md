---
title: "Importing Slack Users ID to SN  Map it to User Record based on email  Part   Generating Slack Token"
date: 2019-05-23T17:15:08.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=e28f251adbe5b344f7fca851ca961961"
---
<p>Below are steps you need to take to import users from slack and store user&#39;s slack id on user record.</p>
<p>Getting Slack Token: </p>
<p>1. Login to your slack workspace as admin</p>
<p>2. Go to <a href="https://api.slack.com/apps" rel="nofollow">https://api.slack.com/apps</a> and click on Create New App</p>
<p><img src="https://community.servicenow.com/43e9ad5edba1b344f7fca851ca961901.iix" /></p>
<p>3. Enter App Name and select your slack workspace</p>
<p><img src="https://community.servicenow.com/e15ae116dbe1b344f7fca851ca961963.iix" /></p>
<p>4. Click on Permissions</p>
<p><img src="https://community.servicenow.com/7e8a25d6dbe1b344f7fca851ca961984.iix" /></p>
<p>5. Add Redirect URLs and hit add than click on save urls.</p>
<p><img src="https://community.servicenow.com/50ca2d5adbe1b344f7fca851ca96195f.iix" /></p>
<p>6. Add users:read scope and hit save changes.</p>
<p><img src="https://community.servicenow.com/6bcebd12db65f344f7fca851ca96195d.iix" /></p>
<p>7. Click on Install App and click on Install App to Workspace</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/d634d34adbf77f4c5ed4a851ca961973.iix" /></p>
<p>8. Once you are on below screen click Authorize</p>
<p><img src="https://community.servicenow.com/2efc2d52db65b344f7fca851ca9619b6.iix" /></p>
<p>10. Copy oAuth Access Token and store it somewhere. Part 2 - <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;92e0c69edba5f344f7fca851ca961949" rel="nofollow">https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;92e0c69edba5f344f7fca851ca961949</a></p>