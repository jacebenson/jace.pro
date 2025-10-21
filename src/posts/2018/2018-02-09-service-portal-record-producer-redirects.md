---
title: Serice Portal Record Producer Redirects
description: >-
  I was asked to set up the redirect from a record producer on the Service
  Portal. This was no problem in the past CMS, and the normal GUI. The docs say
  it sho...
date: '2018-02-10'
tags:
  - servicenow
  - service-portal
  - service-catalog
  - javascript
  - html
  - troubleshooting
redirectFrom:
  - /service-portal-record-producer-redirects/
---

I was asked to set up the redirect from a record producer on the Service Portal. This was no problem in the past CMS, and the normal GUI. The [docs](https://docs.servicenow.com/bundle/kingston-it-service-management/page/product/service-catalog-management/concept/c_PopulatingRecordData.html) say it should be a simple line of code like;

```javascript
producer.url_redirect="home.do";//for CMS and GUI redirects
producer.portal_redirect="?id=page";//for Service Portal redirects
```

This *does not* work unless you change the Instance Options\
(control-right click, to get to "Instance Options").

![](/assets/images/sp-record-producer-redirect-instance-options.png)

<!--StartFragment-->

This is the same widget that renders your other catalog items and they all will redirect too.

<!--EndFragment-->