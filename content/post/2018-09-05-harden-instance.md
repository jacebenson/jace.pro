---
title: Harden Instance
date: 2018-09-05
layout: post
---
A while ago I was tasked to prepare an instance for some penetration testing.  Turns out this is a thing you can do pretty easily.

<!--more-->

So to start with you need to know what Servicenow requires of you.  Here's that [KB](https://hi.service-now.com/kb_view.do?sysparm_article=KB0538598).

At the time of writing you need these prereqs;

* Instance must be on most recent patch of supported family.
* Instance must be unpinned.
* Instance cannot be prodcution.
* Instance must have High Security Plugin enabled.
* [Instance must be hardened](https://hi.service-now.com/kb_view.do?sysparm_article=KB0550654).
* You can only test once per calendar year, additional testing incurs cost.

That hardening guide on the HI site is really thorough.  The only things we couldn't do by ourselves was "Check Whitelist Package Calls" and "Check Whitelist Member Calls".
This will be an issue if you've been granted access to use something the like [ZipFile java class](https://stackoverflow.com/questions/48190244/read-zip-file-contents-using-zipfile-java-class-inside-script/48196453#48196453) to zip some files from the server.

There's a great [share](https://developer.servicenow.com/app.do#!/share/contents/7852853_security_best_practice_audit?v=3.03&t=PRODUCT_DETAILS) that gets you most the way there I'd suggest starting there.  You may need to configure some things like what file extensions you'll allow but its easier to do this then to manually create each property.  Also it checks for default accounts and passwords.