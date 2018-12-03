---
title: Lookup Select Attribute
date: 2017-10-28
layout: post
tags:
 - attributes
---

A few months ago I messaged a former colleague, "Hey, do you remember how to make variables dependent on each other?" 
It might have been her asking me. 
In any case, I was looking for a way to do this that wasn't a client script which would build these dependencies.

<!--more-->

Eventually, I found it. 
For lookup select boxes and lookup multiple choices there is an attribute available called `ref_qual_elements` that you can set with a comma-separated list of other variables. 
So what happens when you change the value of one of the listed variables is a server call is made and the options are re-evaluated and unset.

This is great if those options are pretty static. 
If, however, you let users disable options, items that use these variables that are in progress won't display these option.

Here's the [official documentation about this variable attribute](https://docs.servicenow.com/bundle/istanbul-it-service-management/page/product/service-catalog-management/reference/variable-attributes.html). It doesn't describe it as a way to save time, it will have to do.
