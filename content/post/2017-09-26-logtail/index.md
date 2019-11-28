---
title: "Logtail a node in Servicenow"
subtitle: "Have you ever wanted to look at your logs, like all your logs but didn't
want to have to search the syslog table, or need to watch the node log
but don't want to search it. A way has been found."
summary: "Tailing logs can be really useful for quick debugging.  This is undocumented."
authors: ['jace']
date: 2017-09-26T20:25:56-05:00
#lastmod: 2019-09-07T23:25:56-05:00
featured: false
draft: false
projects: []
---
Point your browser to `/channel.do?sysparm_channel=logtail`

What does this load?

![Logtail](./logtail.png)

So this was recently posted on
[servicenowgems.com](https://servicenowgems.com/2017/09/25/accessing-apache-tomcat-logs-in-real-time/)
but I have to cover it too.

I was wondering how this worked. This is a logtail for the logs in
ServiceNow in the system on the UI page
`channel.do?sysparm_channel=logtail`.

This is called via the UI page channel.do which make a
[GlideAjax](https://sn.jace.pro/glideajax) request to ChannelAjax. I tried to find all the
things that make this work, and I was able to create a new channel, but
I was unable to direct any logs to it. Below are all the exposed files I
could find that made this work. This points to `channel_stream.do` and
`threads.do` which are both black boxed.
