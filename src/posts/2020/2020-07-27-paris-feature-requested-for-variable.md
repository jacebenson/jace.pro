---
title: Paris feature - Requested For variable
description: "Does this sound familiar?\r\n\r\nCustomer: \"I need a request form.\"\\\r\nMe: \"Yea, what it's for?\"\\\r\nCustomer: \"Access to MyAmazingApp\"\\\r\nMe: \"Okay. No problem. It'..."
date: '2020-07-27'
tags:
  - servicenow
  - service-portal
  - workflow
  - flow-designer
  - service-catalog
  - mrvs
  - release-paris
  - troubleshooting
  - security
redirectFrom:
  - /paris-feature-requested-for-variable/
  - /p/2020-07-27-paris-feature-requested-for-variable/
---

<!--StartFragment-->

Does this sound familiar?

Customer: "I need a request form."\
Me: "Yea, what it's for?"\
Customer: "Access to MyAmazingApp"\
Me: "Okay. No problem. It'll have a field to say give access to this user, sound good?"\
Customer: "UGH, do I have to click 'Add to cart' for each user then?!"\
Me: "Sorry."

There's a fix for that. ServiceNow calls it a feature. I call it long over due. Requested For variable is the name of it.

I was reading [/news for Paris](https://news.jace.pro/?text=paris). This caught my attention. [Jenny Hu](https://www.linkedin.com/in/jennytthu/)'s "[A Day in Paris Series: Exploring Delegated Request Experience](https://community.servicenow.com/community?id=community_article&sys_id=52c3e490db569090d5c4d9d968961951)".

I started my work on ServiceNow in Service Catalog. This is actually one of the first problems I had to address. In this post I'm going to focus on how this works.

## [Steps to set up "Requested For" variable](https://jace.pro/post/2020-07-27-paris-requested-for/#steps-to-set-up-requested-for-variable)

1. Add a "Requested For" variable to the catalog item.

   * Decide who you want to be able to pick these values (they have a field for that control)
   * Set up the reference qualifier
2. That's it.

## [Limitations](https://jace.pro/post/2020-07-27-paris-requested-for/#limitations)

It does come with a few limitations.

* Selecting many users only appears to work in Service Portal
* It is not available for record producers. (They added `requested_for` on `sc_req_item`. Generally, target table will not have that.)
* It is not available for order guides. (features for these generally take an extra release. If you want this submit an idea.)
* It is not available for Now Mobile.
* It is not available for Workspaces. (This surprises me. I'd thought ServiceNow would only be making net new features with Workspace support.)

## [Thoughts](https://jace.pro/post/2020-07-27-paris-requested-for/#thoughts)

This is amazing and here's why. This feature reduces complexites added by;

* List Collectors
* Multi-Row Variable Sets (MRVS)
* 2-step checkout.

How does this reduce that need?

1. "Add to cart" is no longer needed as you can make the request and ServiceNow makes an item per "Requested For". That means workflow and flows are properly followed per person.
2. [List collectors have their own problems](https://jace.pro/post/2019-11-30-list-collectors-are-the-pits/). Generally they decide who gets access. This removes that.
3. Multi Row Variable Sets also have problem (less than List collectors). Like List Collectors a lot of the time they decide the who. This removes that need.

<!--EndFragment-->