---
title: Why does ServiceNow use Zoomin instead of Knowledge?
description: >-
  Have you ever wondered why ServiceNow doesn't use their Knowledge management
  for their docs?  I mean you could argue they do, but we know those are only
  for ...
date: '2022-12-24'
tags:
  - servicenow
  - api
  - knowledge
  - knowledge-conference
  - security
redirectFrom:
  - /why-does-servicenow-use-zoomin-instead-of-knowledge/
---

Have you ever wondered why ServiceNow doesn't use their Knowledge management for their docs?  I mean you could argue they do, but we know those are only for folks with access to support.

Before the docs site and developer site became what it is today they used MediaWiki.  (RIP Wiki).  

Now they use [Zoomin](http://zoominsoftware.com/) for docs.servicenow.com

I have often wondered why ServiceNow wants to know who you are when you're looking at the docs.  They can get traffic data with something like Google Analtyics.

I think this comes back to something ServiceNow is embracing more and more.  Picking the right solution for the job.  ServiceNow doesn't have a great api and release management suite.  At least not a public one.  So they've used Zoomin.  

As much as I'd like them to use a static site generator for this that's not their perogitive.  

I've [my own version](https://sn.jace.pro) as I've been bitten by their docs going down when I needed the most.  Maybe we should collectively create one.  I know there's times I wish their docs had things they don't.  You can leave feedback (if the site is up).  

The other thing I can't stand about their implementation of Zoomin is they drop off the old versions of ServiceNow.  So you can't look back when something was introduced.  I do have another [site I maintain with that data](https://sndocs.jace.pro) but I'm not consistent about it.