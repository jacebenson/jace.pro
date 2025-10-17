---
title: "London Feature: Multi-Row Variable Sets"
permalink: /post/2018-08-01-london-variable-sets/
author: Jace Benson
date: 2018-08-01T20:25:42.177Z
draft: false
prism: true
---
<!--StartFragment-->

I had to try this out and since the [docs](https://docs.servicenow.com/bundle/london-it-service-management/page/product/service-catalog-management/task/t_CreateAVariableSet.html) doesn't show how it works here's screenshot and video.

![](/static/img/longon-variable-sets-1.png)

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