---
title: Code Search Updated
description: "After some back and forth between the creator of the\_sn_codesearch\_app Cory Seering I have a better understanding of how this works.\r\n\r\nThis scoped app now u..."
date: '2018-04-23'
tags:
  - servicenow
  - scoped-apps
redirectFrom:
  - /code-search-updated/
---

<!--StartFragment-->

After some back and forth between the creator of the `sn_codesearch` app [Cory Seering](https://community.servicenow.com/community?id=community_user_profile&user=bf225e65dbd81fc09c9ffb651f9619d6) I have a better understanding of how this works.

This scoped app now uses its own search group to search 49 tables instead of the default 29.

It now includes everything OOB I can think of that could run code server/client side.

## [Setup](https://jace.pro/post/2018-04-22-code-search-update/#setup)

1. Open Studio on your environment
2. Import from source
3. Paste in the following URL:\
   <https://github.com/jacebenson/servicenow-code.git>

## [Update](https://jace.pro/post/2018-04-22-code-search-update/#update)

For those who already installed it;

1. Open Studio on your environment
2. Select `Code`
3. Source Control-Apply Remote Changes

This will make the app much smaller as it also moves the scopes from before.

## [Usage](https://jace.pro/post/2018-04-22-code-search-update/#usage)

After you import this you can start to use it by navigating to `/code` on your instance.

<!--EndFragment-->