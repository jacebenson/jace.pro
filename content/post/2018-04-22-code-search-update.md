---
title: Code Search Updated
date: 2018-04-22
layout: post
tags:
 - service portal
 - search
aliases: 
 - "/2018/04/22/code-search-update.html"
keywords:
 - "code"
 - "search"
---

After some back and forth between the creator of the `sn_codesearch` app [Cory Seering](https://community.servicenow.com/community?id=community_user_profile&user=bf225e65dbd81fc09c9ffb651f9619d6) I have a better understanding of how this works.

This scoped app now uses its own search group to search 49 tables instead of the default 29.  

It now includes everything OOB I can think of that could run code server/client side.  

<!--more-->

## Setup

  1. Open Studio on your environment
  1. Import from source
  1. Paste in the following URL: [https://github.com/jacebenson/servicenow-codesearch.git](https://github.com/jacebenson/servicenow-codesearch.git)

## Update

  For those who already installed it;

  1. Open Studio on your environment
  1. Select `Code Search for SP`
  1. Souce Control-Apply Remote Changes

  This will make the app much smaller as it also moves the scopes from before.

## Usage

After you import this you can start to use it by navigating to `/code` on your instance.
