---
title: "Mirroring choices on catalog items"
subtitle: "Sometimes you want to give end users the same choices from the platform"
summary: "Mirroring choices is a nice way to keep things in sync between standard forms and catalog items"
date: 2021-08-12T06:44:14-05:00
---

To do this you don't need a lot.  I've hinted at this kind of stuff before with my [Lookup Select Attribute] post.  Here I'll spell it out.

1. Make `category` variable with the following bits
    - Type: Lookup select box
    - Include none: true 
    - Table: `sys_choice`
    - Reference Qualifier: `name=incident^element=category^language=en^inactive=false^ORDERBYsequence`
2. Make `subcategory` variable with the following bits
    - Type: Lookup select box
    - Include none: true
    - Table: `sys_choice`
    - Reference Qualifer: `javascript: 'name=incident^element=subcategory^language=en^inactive=false^dependent_value=' + current.variables.category`
      (note the dependent value column in your query)
    - Attributes: `ref_qual_elements=category`

[Lookup Select Attribute]: https://jace.pro/post/2017-10-28-lookup-select-attributes/