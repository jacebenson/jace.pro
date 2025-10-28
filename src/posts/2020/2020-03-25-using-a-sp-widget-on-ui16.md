---
title: Using a SP Widget on Ui16
description: "A while ago\_Andrew Pishchulin\_shared a\_post on Medium\_where he put a Service Portal widget on UI16. My mind was blown. How did he do it.\r\n\r\nHis post doesn't ..."
date: '2020-03-25'
tags:
  - servicenow
  - service-portal
  - xml
redirectFrom:
  - /using-a-sp-widget-on-ui16/
  - /p/2020-03-25-using-a-sp-widget-on-ui16/ 
  - /2020-03-25-using-a-sp-widget-on-ui16/
---

<!--StartFragment-->

A while ago [Andrew Pishchulin](https://medium.com/@pishchulin) shared a [post on Medium](https://medium.com/@pishchulin/advanced-attachment-management-in-servicenow-f15246e7f785) where he put a Service Portal widget on UI16. My mind was blown. How did he do it.

His post doesn't go over the specifics but here's what he said;

> Service Portal widget can also be used in ServiceNow native UI, all you need to do is just to create a UI Macro/formatter which loads a service portal page with that widget

The way to do this (again thanks to Andrew) is this;

1. Create an empty Service Portal (I'll name mine "widgetOnly")
2. Create a Portal Page (I'll name mine "pageForHelloWorld")
3. Add your widget to the Portal Page
4. Create a UI Macro (I'll name mine "spHelloWorld") with this code, change height as needed

```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
  <iframe src="widgetOnly?id=pageForHelloWorld" width="100%" scrolling="no" style="border:none;min-height:400px;">
  </iframe>
</j:jelly>
```

5. Create a UI Formatter with the formatter called "spHelloWorld.xml" and set the table you want.
6. Add the formatter on the form (same way you'd add a field, via form layout)

<!--EndFragment-->

## Comments

<!--StartFragment-->

> **[artemis15](https://github.com/artemis15)** commented [on May 6, 2020](https://github.com/jacebenson/jace.pro/issues/170#issuecomment-624578049)
>
> Instead to creating portal for this, you can alos use $sp.do?id=pag

> **[jacebenson](https://github.com/jacebenson)** commented [on May 6, 2020](https://github.com/jacebenson/jace.pro/issues/170#issuecomment-624658706)
>
> That's a great call out. Thanks [@artemis15](https://github.com/artemis15) .

> **[nsierraj](https://github.com/nsierraj)** commented [on May 13, 2020](https://github.com/jacebenson/jace.pro/issues/170#issuecomment-627990515)
>
> And you can use "RP.getParameterValue('sys_id');" to pass values to the widget to make it sensitive to the record in the form.

> **[meatsac](https://github.com/meatsac)** commented [on Nov 1, 2020](https://github.com/jacebenson/jace.pro/issues/170#issuecomment-720107278)
>
> This post suggests you can call the widget directly. I haven't had success with this myself but would be interested to hear if this is indeed possible.
>
> <https://snhackery.com/2019/04/10/portal-widgets-on-ui-pages/>

<!--EndFragment-->