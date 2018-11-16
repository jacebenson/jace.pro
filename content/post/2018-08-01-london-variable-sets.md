---
author: jace
category: ''
date: 2018-08-01 00:00:00 +0000
exerpt: I heard about this feature and I had to check it out.  It is pretty cool.  So
  I made a short 3 minute video to show how it works.
layout: post
tags:
- service portal
title: London Variable Sets Table
---

I had to try this out and since the [docs](https://docs.servicenow.com/bundle/london-it-service-management/page/product/service-catalog-management/task/t_CreateAVariableSet.html) don't really show how it works here's screenshot and video.
![London variable set](/uploads/longon-variable-sets-1.png)

<!--more-->

Here's a video showing the parts of this.

It's pretty neat the content if you do a `g_form.getValue('variableSetName');` is a stringified JSON array.

```js
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

<video width="99%" height="540" autoplay loop muted > <source src="/uploads/london-variable-sets.mp4" type="video/mp4" /> </video>