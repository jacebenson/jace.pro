---
title: Using Remote Tables for Choices Saves Tables
description: >-
  A while ago someone shared with me a script to make choices available on their
  own table without consuming a table from your licensing.
date: '2024-08-16'
tags:
  - servicenow
  - remote-tables
redirectFrom:
  - /using-remote-tables-for-choices/
  - /p/2024-08-16-using-remote-tables-for-choices/
---

A while ago someone shared with me a script to make choices available on their own table without consuming a table from your licensing.

Sounds interesting, right?

Let me share the bit of the [Table Guide](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/custom-table-guide-august24.pdf) that applies here.

> 2. Exempt Tables
> 2.1. Table Extensions - Customer is entitled to extend each of the below ServiceNow provided tables up to one thousand times. Extending any of the below ServiceNow tables more than one thousand times requires a subscription to either an App Engine product or any ServiceNow product that includes the App Engine Starter entitlement. 
> 2.2. Table Type - The following types of tables are exempted.
> 2.2.1 Many to Many Tables
> 2.2.2 **Remote Tables**

Now Remote tables don't extend tables so I don't think it hits 2.1, and because it's just remote tables I think that means unlimited here.  Keep in mind Remote tables limit the rows to 1,000. If your data is more than 1,000 rows you'll need some other solution.

Thank you, kind soul who shared this, with me.

To use this, follow these steps.

1.  Create a Remote Table
2.  Add a column of "Label" and system name of `u_label`
3.  Update the Remote Table Definition for your table with this script after updating the 2nd line. e.g. table `sys_user`, column `time_zone`

```js
Remote table and definition:
(function executeQuery(v_table, v_query) {
    var $chl = GlideScriptChoiceList.getChoiceList('putYourTableHere', 'putYourTablesChoiceColumnHere');

    $chl.removeNone();

    for (var i = 0; i < $chl.size(); i++) {
        var $ch = $chl.getChoice(i);

        v_table.addRow({
            'sys_id': $ch.getValue(),
            'u_label': $ch.getLabel(),
        });
    }
})(v_table, v_query);
```