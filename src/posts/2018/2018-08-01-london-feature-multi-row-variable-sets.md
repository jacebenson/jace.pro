---
title: 'London Feature: Multi-Row Variable Sets'
description: "I had to try this out and since the docs doesn't show how it works here's screenshot and video.\r\n\r\n!\r\n\r\n\r\n\r\nIt's pretty neat the content if you do a g_form.g..."
date: '2018-08-01'
tags:
  - servicenow
  - service-catalog
  - javascript
  - html
  - json
redirectFrom:
  - /london-feature-multi-row-variable-sets/
  - /p/2018-08-01-london-feature-multi-row-variable-sets/
---

<!--StartFragment-->

I had to try this out and since the [docs](https://docs.servicenow.com/bundle/london-it-service-management/page/product/service-catalog-management/task/t_CreateAVariableSet.html) doesn't show how it works here's screenshot and video.

![](/assets/images/longon-variable-sets-1.png)

<!--StartFragment-->

It's pretty neat the content if you do a `g_form.getValue('variableSetName');` is a stringified JSON array.

<!--EndFragment-->

<!--StartFragment-->

```javascript
g_form.getValue('questions'); // returns below
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

<!--EndFragment-->