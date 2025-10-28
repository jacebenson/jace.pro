---
title: Upgrade like a pro!
description: "See if mhz opinion is worth taking\r\n\r\n> These days I modify the OOB. Because the sheer amount of code base change since we went live with Helsinki is stagger..."
date: '2022-06-07'
tags:
  - business-rules
  - service-portal
  - atf
  - integration
redirectFrom:
  - /upgrade-like-a-pro/
  - /p/2022-06-06-upgrade-like-a-pro/
---

See if mhz opinion is worth taking

> These days I modify the OOB. Because the sheer amount of code base change since we went live with Helsinki is staggering. It isn't a viable option to blindly keep using our custom code thru an upgrade because of the vast number of changes and fixes that are coming in each upgrade. Eg. I extended DemandUtil with LLUHDemandUtil in order to customize one method. So I had to modify a business rule to make it call my extended class. Come upgrade time there's no telling *(1)* whether my extended method will/should still continue to work, in light of new process changes and new/updated bus.rules, *(2)* how the overridden method may have changed, *(3)* how the rest of DemandUtil has changed (ie. do I still need this customization? Or is something else needed to achieve it?)
> For every upgrade impact, you ALWAYS need a reminder that will force you to examine *each* of those three things. Can I just temporarily ignore the overridden methods or classes? No. Even if my overrides do continue to work (in the capacity they were designed) I'll miss new functionality. This might *seem* okay, if user's would not notice. But its likely *they will* notice because there are new platform portal pages and dashboards and PA metrics, all sorts of user-facing stuff that comes with each upgrade and depends on you integrating the new code for its proper function. This has occurred at such pace that I don't extend things anymore.
> IMO the simplest way is just modify the OOB, and use the upgrade monitor/diff engine as your reminder. Because we *must* check all three of those steps above, for our process to keep providing the mixture of working customizations and new features. They've been dumping changes into the system at mad pace, but not fast enough that we can make our customers wait for them. So it seems we'll always have this comparison process.
> *DISCLAIMER:* *I don't have ATF tests, which if I did, might actually be able to provide some level of comfort that things will keep working. But I would still need to do steps 2-3 regardless.*