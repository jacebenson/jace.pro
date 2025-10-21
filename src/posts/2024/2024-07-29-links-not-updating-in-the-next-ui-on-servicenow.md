---
title: Is your ServiceNow Navigator not working as expected?
description: >-
  When I was working with the Next UI it was taking forever to load, it would
  show up as an empty box.  Turns out, the lookup still needs to happen break
  the u...
date: '2024-07-29'
tags:
  - servicenow
redirectFrom:
  - /links-not-updating-in-the-next-ui-on-servicenow/
---

When I was working with the Next UI it was taking forever to load, it would show up as an empty box.  Turns out, the lookup still needs to happen break the user's expectations.  

Normally when a page is done loading, the page should be ready to work with.  The Next UI is more complicated and loads some parts with lazy loading.  The navigator now shows immediately, but if there's nothing in your local cache it will be empty until loaded, (not clear it's loading either).  That just won't stand.  

Thankfully there's a property to disable this lazy loading so it loads and works in a way more consistent with user's expectations.  \`glide.ui.next_experience.menu_lazy_loading_enabled\` can be set to false to disable this.