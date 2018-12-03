---
title: 'Redirect old CMS pages to your Service Portal'
date: 2017-09-10
layout: post
tags:
 - service portal
aliases:
 - "/Service-Portal/Redirect-old-CMS-pages-to-your-Service-Portal/"
---
After your go live (belated congratulations) if you made the mistake I made and wanted to replace the namespace of your cms with your service portal you will likely have an issue where old links from past emails, bookmarks and 3rd party sources link to the cms pages.

When I sought out help for this after the fact the responses I got were not very helpful.

<!--more-->

Don’t use the same name space

- Correct all links
- Now that information might have been useful before the go live.

So what I did to correct what I could was the following;

- Correct links in outbound messages
- Create a ui page for each page the cms had. E.g. cmssearchpage.do

This page you can just toss a HTML redirect to the appropriate Service Portal page.

```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false"
         xmlns:j="jelly:core"
         xmlns:g="glide"
         xmlns:j2="null"
         xmlns:g2="null">
  <script>
    window.location.href = '/cms'
  </script>
</j:jelly>
```
