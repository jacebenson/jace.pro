---
title: Setting up Automated testing framework
date: 2018-04-19
layout: post
tags:
 - atf
aliases:
 - "/setting-up-atf/"
---

Here's our set up.
<!--more-->

## Scheduled Runner

We created a local admin account in our non-productions.

Then we added a powershell script to launch the browser to the scheduled runner.

## Test configurations

I prefer making the records user, the user's membership as part of the test to ensure I have a clean, working state instead of picking a user who may have that role.

<!-- markdownlint-disable MD006 -->

1. Create a base Test, a test you will have everyone start from that does the following;
  - Create a user
  - Create a user membership
  - Impersonate the new user
1. Do the actual test.

<!-- markdownlint-enable MD006 -->

## A few things to remember

- Don't test code you don't own.
- Test's should be independent.
- Test good/bad path.  Meaning, if you add functionality for x group, verify it doesn't exist for y group.
