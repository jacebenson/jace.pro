---
title: What is the Catalog Builder from Quebec
description: "TL;DR\r\n\r\nI had a stream ad-hoc with Druhv about this. It's way longer than I had hoped but there's just so many ways to set up this and I didn't even hit all..."
date: '2021-01-23'
tags:
  - servicenow
  - client-scripts
  - ui-policies
  - workflow
  - flow-designer
  - update-sets
  - service-catalog
  - html
  - release-quebec
  - tutorial
  - security
redirectFrom:
  - /what-is-the-catalog-builder-from-quebec/
---

# TL;DR

I had a stream ad-hoc with Druhv about this. It's way longer than I had hoped but there's just so many ways to set up this and I didn't even hit all the features.

1. This feature will save me time.\
   This will take work out of my backlog and enable non-admins to create catalog items for predefined templates.
2. Creating the templates takes some thought ahead of time. Thankfully, I've thought about this a lot in the past. See ["The Nine Standard Workflows"](https://youtu.be/wyVLCxOtZl8?t=1059) from Robert Fedoruk's Titans of Now series.
3. This utility doesn't do anything special with update sets or scopes. Do you have to have the "Catalog Builders" build in dev? No. Should you? I'm not sure.
4. There didnt appear to be any approval process to get these items published.
5. This has some limitations, but they seemed pretty minor to me.

# Getting started

I jumped in without looking at the docs and didn't seem to have much trouble, there's a lot here. I'll lay out the logical steps here.

Before you can even try this as a "Catalog Builder", you need a template. This isn't the templates I'm used to in ServiceNow. This template lets users control most options about the item. Here's the link to [limitationsits on the lower half of the page](https://docs.servicenow.com/bundle/quebec-servicenow-platform/page/product/service-catalog-management/concept/catalog-builder.html#:~:text=Limitations).

## Limitations

> "Catalog builder does not allow creation and editing of the following entities, but they can be set in Now Platform either for a draft item or a published item that has not been checked out."\
> ServiceNow Docs

* Catalog Item limitations

  * Can't set meta tags
  * Can't use execution plans
  * Can't deal with prices
* Variable limitations

  * Can't set Help Text
  * Can't set default value
  * Not all variable types are available here. Most are, but some are not, notible, List Collectors, and Macros are missing.
  * Doesn't allow editing variables with two levels of containers.
* Logic limitations

  * Catalog Client Scripts are not available.
  * Data lookup rules (maybe ref. qualifier)
  * Catalog UI policy (Source: AAtrey)

    * On Load field (defaults to true)
    * Script field. When a catalog UI policy has a script, it does not show up in the question’s behavior settings list in the catalog builder.
    * Reverse if false field. By default, it is set to true.
    * Multiple actions. When a catalog UI policy has multiple actions, it does not show up in the question’s behavior settings list in the catalog builder.

## Creating a template

A heads up, all the choices here can be overridden on a granular basis. So you'll probably want to be more permissive then restrictive here.

There's 8 sections to these templates. Here's the [official docs](https://docs.servicenow.com/bundle/quebec-servicenow-platform/page/product/service-catalog-management/task/create-cat-item-template-cat-builder.html) on this, but I'll spell it out here too.

### Template Details

Template name and short description are details available when looking at the templates.

Template available for, dictates who can use this template.

### Details

Item Name, Short description, Image, and Description will be set based on these for the "Catalog Builder". If you want the "Catalog Builder" to come up with those details, you should leave them blank.

### Location

These catalogs and categories are the items unless you allow editing this in the overrides.

### Questions

Questions only allow you include variable sets. Variables added this way cannot be removed from the item. The set can be rearranged. Here is also where you can limit the kinds of variables available.

### Settings

Settings allows you to control the "Add to cart", "Add to wishlist", "Quantity", "Hide Delivery Time", "Hide Attachment", "Make attachment mandatory", and the "Submit button label".

### Access

Access is controlled strictly by User Criteria. This allows for granting and limiting by User Criteria.

### Fulfillment

The fulfillment can get set to a workflow or flow designer. If you want to

### Overrides

This is where the "Catalog builder" can override the allowed options.

## Creating an item

After overrides above you're done making the template. This means the "Catalog builder" now can use the template to make an item.

They can pick the template you made and set the overrides you allows and also add any number of questions here.

### Problems I ran into

* Making available for and not available for mandatory means they will have to set at least one user criteria in each
* They cannot edit variable sets you've added but they can add them themselves
* They cannot edit the order within the variable sets

# Jace's review

Will this get used? Yes. Does it meet all the problems posed? No. Does it come with guidance how to set up citizen developers to get this catalog items and flows out there? No.

That beign said, it's exciting to see the current work done.