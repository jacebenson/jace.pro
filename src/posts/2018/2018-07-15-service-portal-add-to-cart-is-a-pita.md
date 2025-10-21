---
title: 'Service Portal: Add to cart is a PITA'
description: "So it seems the first thing a lot of places have to do when setting up\\\r\nthe service portal is to re-setup two-step-checkout.\r\n\r\nI don't like looking it up. ..."
date: '2018-07-15'
tags:
  - servicenow
  - service-portal
  - service-catalog
  - html
  - json
redirectFrom:
  - /service-portal-add-to-cart-is-a-pita/
---

So it seems the first thing a lot of places have to do when setting up\
the service portal is to re-setup two-step-checkout.

I don't like looking it up.  Here's the steps I've followed to set it up;

## Adding "Add Cart" on the form

1. On your catalog item widget, ctrl + right click the widget and open\
   the widget instance options.
2. Check "Show Add Cart Button"

![](/assets/images/sp-add-to-cart-1.png)

<!--StartFragment-->

## Adding "Cart" on the header

1. From the Service Portal configuration page, select the Portal editor.
2. Goto the SP Header Menu
3. in the *Additional options* section ensure you have the following content;

<!--StartFragment-->

```json
{
  "enable_cart": {
    "displayValue": "true",
    "value": "true"
  }
}
```

[Docs](https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/build/service-portal/concept/enable-shopping-cart.html)