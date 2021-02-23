---
title: "Flow designer - Work around for explicit durations clearing"
subtitle: "A subtitle about Flow designer - Work around for explicit durations clearing"
summary: "Summary of Flow designer - Work around for explicit durations clearing"
date: 2021-02-19T18:12:25.706Z
tags: "draft"
---

# Flow designer - Work around for explicit durations clearing

[Wait For a Duration](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/concept/flow-logic-wait-for-a-duration.html#d859121e241) steps don't respect values greator than or equal to 24 hours.

I was able to work around this by using a "Relative" duration type instead and using the date from the Trigger's Created date.