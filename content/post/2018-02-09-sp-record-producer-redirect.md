---
# permalink: /sp-record-producer-redirect/
aliases: /sp-record-producer-redirect/
author: 'jace'
date: '2018-02-09'
layout: 'post'
category: ''
tags:
 - service portal
title: 'Serice Portal Record Producer Redirects'
layout: post
---

So the other day I was asked to set up the redirect from a record producer on the Service Portal.  This was no problem in the past CMS, and the normal GUI.  
<!--more-->
The [docs](https://docs.servicenow.com/bundle/kingston-it-service-management/page/product/service-catalog-management/concept/c_PopulatingRecordData.html) say it should just be a simple line of code like;

```js
producer.url_redirect="home.do";//for CMS and GUI redirects
producer.portal_redirect="?id=page";//for Service Portal redirects
```

However this *does not* work unless you modify the Instance Options (control-right click, to get to "Instance Options").

![Instance Options](/uploads/sp-record-producer-redirect-instance-options.png)

This however is the same widget that renders your other catalog items and all of them will redirect too.
