---
title: "Script to Identify a Slow Widget on a Service Portal Page"
date: 2019-05-02T20:55:00.000Z
authors: ["jesseadams"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=d678d26bdb81b7c414d6fb2439961970"
---
<p>Ever feel like your Service Portal page has a widget or two that is slow to load? It happens. When your widgets are sluggish, how do you diagnose your Service Portal to identify the slow widget? How can you easily narrow down which widgets are contributing to the slowness so that you know where to focus your development efforts?</p>
<p>I have a script that will allow you to easily determine which widgets are causing slowness on your Service Portal page!</p>
<h1><strong>Service Portal Page Performance Diagnostic script.</strong></h1>
<p>This script will allow you to quickly and easily see how long each widget on the page takes to load. Simply paste it into the browser console on your portal page and hit enter.</p>
<center><strong><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/5ea9d6afdbc1b7c414d6fb2439961926.iix" /></strong></center>
<p> </p>
<h2><strong>How the script works to determine slow widgets</strong></h2>
<p>This script goes through and reloads each widget on the page individually, then tells you how long it took.</p>
<p>It adds a red outline to each widget showing which part of the page that widget is responsible for, as well as adding the widget&#39;s name, a button to print the widget&#39;s scope to the console and another button to refresh the widget.</p>
<p>Additionally, at the bottom of the page, a new section will be added which displays a table of all of the widgets which took longer than the threshold specified in line 2 of the script.  That can easily be copied as markdown via the &#34;Copy Markdown&#34; button if needed.</p>
<center><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/b4961ae3db41b7c414d6fb2439961907.iix" /></center>
<p>It&#39;s worth noting here that embedded widgets (widgets loaded inside of other widgets) wont be reloaded automatically here.. they&#39;re usually dependent on the parent widget in order to work properly so by default they&#39;re skipped but, you can always click the refresh button on the widget if you need to reload it manually. </p>
<p style="text-align: center;"><span style="font-size: 12pt;"><strong><a href="http://bit.ly/KB0744521" target="_blank" rel="noopener noreferrer nofollow">Click here to get the script</a> </strong></span></p>
<p>So, next time you find one of your portal pages loading slowly give this script a try. It should make narrowing down the widget or widgets causing the issue much easier and less tedious. If you&#39;re stuck on where to go from there, then check out this KB containing best practices for avoiding widget performance issues: <a href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0634588" rel="nofollow">Six common performance pitfalls in Service Portal and how to avoid them</a></p>