---
title: GlideFilter


date: 2016-01-01
layout: page
url: "/glidefilter/"
tags:
- server-side-api
aliases:
- "/GlideFilter/"
keywords:
- "checkRecord"
---
GlideFilter is a neat Class.  It lets you check if a record meets a critera based on a query.  Here's the [docs](https://docs.servicenow.com/bundle/jakarta-application-development/page/app-store/dev_portal/API_reference/GlideFilterScoped/concept/c_GlideFilterScopedAPI.html) on it.
<!--more-->

```js
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