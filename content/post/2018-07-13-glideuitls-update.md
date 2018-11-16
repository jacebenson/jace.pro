---
title: GlideUtils - update
author: jace
date: 2018-07-13 00:00:00 +0000
layout: post
category: ''
tags:
- scoped app
aliases:
- "/glideutils/"

---
How can you use `GlideappVariablePoolQuestionSet` in a scope?  You can't!
I've added a script include to GlideUtils to solve for this.

<!--more-->

So I was working on some things this week and came across some time.
I updated GlideUtils to add a `variableHelper` script include to help
getting variables as that doesnt seem possible in scope with
`GlideappVariablePoolQuestionSet`.  As such, this was born.

In anycase, I wanted to post that this is getting updates.

[Gitlab Source](https://gitlab.com/jacebenson/servicenow-glideutils/tree/docs)