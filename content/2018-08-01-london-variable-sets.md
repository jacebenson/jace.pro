---
date: '2018-08-01'
keywords:
- mrvs
- variable table
layout: post
tags:
- service portal
title: London Variable Sets Table
---

I had to try this out and since the
[docs](https://docs.servicenow.com/bundle/london-it-service-management/page/product/service-catalog-management/task/t_CreateAVariableSet.html)
don't really show how it works here's screenshot and video. ![London
variable set](/uploads/longon-variable-sets-1.png)

Here's a video showing the parts of this.

It's pretty neat the content if you do a
`g_form.getValue('variableSetName');` is a stringified JSON array.

``` {.js}
g_form.getValue('questions'); returns below
/*
"[
  {
    \"order\":\"100\",
    \"question\":\"What do you need help with?\",
    \"required\":\"Yes\",
    \"help_text\":\"\"
  }
]"
*/
```
