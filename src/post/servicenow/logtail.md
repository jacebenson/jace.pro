---
title: Logtail a node in ServiceNow
permalink: /logtail/
author: Jace Benson
date: 2017-09-26T10:59:07.112Z
draft: false
prism: false
---
Point your browser to `/channel.do?sysparm_channel=logtail`

What does this load?

![Screenshot of logtail.do in ServiceNow](/static/img/screenshot-logtail.png "Screenshot of logtail.do in ServiceNow")

This was posted on (now defunct) servicenowgems.com but I have to cover it too.

I was wondering how this worked. This is a logtail for the logs in ServiceNow in the system on the UI page
`channel.do?sysparm_channel=logtail`.

This is called via the UI page channel.do which make a GlideAjax request to ChannelAjax. 
I tried to find all the parts that make this work, and I was able to create a new channel, but I was unable to direct any logs to it. 
Below are all the exposed files I could find that made this work. This points to `channel_stream.do` and `threads.do` which are both black boxed.