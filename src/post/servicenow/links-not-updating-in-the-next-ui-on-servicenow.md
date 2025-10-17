---
title: Is your ServiceNow Navigator not working as expected?
permalink: /links-not-updating-in-the-next-ui-on-servicenow/
author: Jace Benson
date: 2024-07-29T15:28:32.023Z
draft: false
stage: published
prism: false
---
When I was working with the Next UI it was taking forever to load, it would show up as an empty box.  Turns out, the lookup still needs to happen break the user's expectations.  

Normally when a page is done loading, the page should be ready to work with.  The Next UI is more complicated and loads some parts with lazy loading.  The navigator now shows immediately, but if there's nothing in your local cache it will be empty until loaded, (not clear it's loading either).  That just won't stand.  

Thankfully there's a property to disable this lazy loading so it loads and works in a way more consistent with user's expectations.  \`glide.ui.next_experience.menu_lazy_loading_enabled\` can be set to false to disable this.