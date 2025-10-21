---
title: Configuring Workspace Lists are not hard when you know where to look
description: >-
  Configuring lists for Workspaces without App Engine Studio is not hard if you
  know where to look.
date: '2024-06-13'
tags:
  - servicenow
  - best-practices
  - security
redirectFrom:
  - /configuring-workspace-lists-are-not-hard-when-you-know-where-to-look/
---

Recently, I faced a challenge while trying to modify list items in the software asset workspace without having access to App Engine Studio. My goal was to update lists and all the resources pointed to using App Engine Studio for these changes.

I decided to explore UI Builder and ventured into the /operations/ path to create a variant. Despite my efforts, the list navigation (list_nav) configuration was set to @context.app.listConfigId, and I couldn’t pinpoint how this was being set up.

Luckily, Brad Tilton provided a crucial tip: "It all happens outside UIB. Check out this [article](https://www.servicenow.com/community/next-experience-articles/configuring-lists-in-configurable-workspace/ta-p/2331983)."

Note this section of the article;
> UX Lists (sys_ux_list): Lists defined for each category. A list must have a category and you can configure the conditions for the list data, columns, grouping, and other parameters you can set. You'll notice that you cannot configure the component properties for a List component when the page is read only, but many of those properties are exposed in the UX List record for configuration, so you do not need to duplicate the page to set List properties.

Following Brad’s advice, I created a UX List item, which worked seamlessly. Once I knew where to look, the process was straightforward.

If you're in a similar situation, check out the ServiceNow documentation on configuring lists in configurable workspaces. It could save you a lot of time and effort!

P.S.
I found all the documentation saying you can [use App Engine Studio for this](https://www.linkedin.com/feed/update/urn:li:activity:7207069631772069888?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7207069631772069888%2C7207107885061816320%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287207107885061816320%2Curn%3Ali%3Aactivity%3A7207069631772069888%29).  First one must be entitled to App Engine Studio.  Also something about App Engine Studio is I guess it cannot or is not how one changes UX list for Out of the box (OOTB) workspaces.  Thanks for that interaction Marc Mouries.