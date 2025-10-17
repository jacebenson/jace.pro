---
title: Serice Portal Record Producer Redirects
permalink: /post/2018-02-09-sp-record-producer-redirect/
description: ""
author: Jace Benson
image: ""
date: 2018-02-10T03:51:51.325Z
draft: false
prism: true
---
I was asked to set up the redirect from a record producer on the Service Portal. This was no problem in the past CMS, and the normal GUI. The [docs](https://docs.servicenow.com/bundle/kingston-it-service-management/page/product/service-catalog-management/concept/c_PopulatingRecordData.html) say it should be a simple line of code like;

```javascript
producer.url_redirect="home.do";//for CMS and GUI redirects
producer.portal_redirect="?id=page";//for Service Portal redirects
```

This *does not* work unless you change the Instance Options\
(control-right click, to get to "Instance Options").

![](/static/img/sp-record-producer-redirect-instance-options.png)

<!--StartFragment-->

This is the same widget that renders your other catalog items and they all will redirect too.

<!--EndFragment-->