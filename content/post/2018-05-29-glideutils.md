---
title: 'GlideUtils - Tool to clean up comments'
author: 'jace'
date: '2018-05-29'
layout: 'post'
category: ''
tags:
 - scoped app
---

I made a scoped app to clean up comments and I plan to put in other functions in this too.

<!--more-->
Something I find I have to do from time to time is clean up a bad comment, something that might have a password or some other text that you
don't want in the comments.  To clean this up you have to normally go to the `sys_journal_field` table, modify the records, `sys_audit` table,
modify the records, then delete the `sys_history_set` record for that.  Then, your changes finally stick.

Well, I got tired of having to do that.  So I made a UI Page that does it all for me if I just give it the thing I want to replace and the text
to replace it with.

If, like anything I share on git, you want to change it feel free to make a pull request.

So enjoy!

![screenshot](/uploads/glideutils-screenshot.png)

[Gitlab Source](https://gitlab.com/jacebenson/servicenow-glideutils/tree/docs)
