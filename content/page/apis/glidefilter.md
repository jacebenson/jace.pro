---
aliases:
- '/GlideFilter/'
date: '2016-01-01'
keywords:
- checkRecord
layout: page
tags:
- 'server-side-api'
title: GlideFilter
url: '/glidefilter/'
---

GlideFilter is a neat Class. It lets you check if a record meets a
critera based on a query. Here's the
[docs](https://docs.servicenow.com/bundle/jakarta-application-development/page/app-store/dev_portal/API_reference/GlideFilterScoped/concept/c_GlideFilterScopedAPI.html)
on it.

``` {.js}
(function executeRule(current, previous /*null when async*/){
    var act = new GlideRecord('table_name');
    act.AddActiveQuery();
    act.query();

    while (action.next()) {
        var match = GlideFilter.checkRecord(act.condition);

        if (match) {
            var rec = new GlideRecord('act.table');
            act.newRecord();
            act.applyEncodedQuery(act.field_values);
            act.insert();
        }
    }
})
```
