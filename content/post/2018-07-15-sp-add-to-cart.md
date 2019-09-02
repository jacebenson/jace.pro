---
aliases:
- '/sp-add-to-cart/'
date: '2018-07-15'
keywords:
- sp
- widget
layout: post
tags:
- service portal
title: Set up add to cart in Service portal
authors: ["jace"]
---

So it seems the first thing a lot of places have to do when setting up
the service portal is to re-setup two-step-checkout.

Because I've had to do this a few times and don't like looking it up
here's the steps I've followed to set it up;

## Adding "Add Cart" on the form

1.  On your catalog item widget, ctrl + right click the widget and open
    the widget instance options.
2.  Check "Show Add Cart Button" ![What you should
    see](/uploads/sp-add-to-cart-1.png)

## Adding "Cart" on the header

1.  From the Service Portal configuration page, select the Portal
    editor.
2.  Goto the SP Header Menu
3.  in the *Additional options* section ensure you have the following
    content;

``` {.javascript}
{
 "enable_cart": {
   "displayValue": "true",
     "value": "true"
 }
}
```

[Docs](https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/build/service-portal/concept/enable-shopping-cart.html)
