---
aliases:
- '/2017/08/28/automagically-link/'
- '/2017-08-28-automagically-link/'
date: '2017-08-07'
keywords:
- journal
- link
layout: post
tags:
- server side
title: Automagically Link
authors: ["jace"]
---

Automagically Link records from journaled fields.

Here I'll write the logic out some and note the issues identified so
far.

So the way this currently works is if a `sys_journal_field` record is
created or updated, then verify the field is a journal type. Then pass
the value of the notes to `paddAndRefLinks` function. This will iterate
over most the sys\_number records to find possible records, do a get
against possible record and if found rewrite the entry either a link.

The only places I've seen this not work well.

1.  Virtual task boards don't handle \[code\] tags well if the second
    tag is cut off from the display.
2.  If you insert knowledge into comments it prepends and appends the
    \[code\] tags. I don't account for this in the script

Below is the script.

``` {.js}
/*Business Rule: Automagically Link*/
/*Table: sys_journal_field*/
/*When: After*/
/*Order: 100*/
/*Insert: true*/
/*Upauthor: 'jace'
date:true*/
/*jslint sloppy: true, vars: true*/
/*global GlideRecord, current, paddAndLinkRefs*/
function onAfter(current, previous) {
    //This function will be automatically called when this rule is processed.
    //if dict.type is journal... rewrite teh notes
    var dict = new GlideRecord('sys_dictionary');
    var dictQuery = 'internal_type=journal^ORinternal_type=journal_input';
    dictQuery += '^name=' + current.name + '^element=' + current.element;
    dict.addEncodedQuery(dictQuery);
    dict.query();
    while (dict.next()) {
        var newValue = paddAndLinkRefs(current.value);
        current.value = newValue; //update audit record
        current.setWorkflow(false);
        current.autoSysFields(false);
        current.update();
        var audit = new GlideRecord('sys_audit');
        var auditQuery = 'documentkey=' + current.element_id;
        auditQuery += '^fieldname=' + current.element;
        auditQuery += '^ORDERBYDESCrecord_checkpoint';
        audit.addEncodedQuery(auditQuery);
        audit.query();
        if (audit.next()) {
            audit.newvalue = newValue;
            audit.setWorkflow(false);
            audit.autoSysFields(false);
            audit.update();
        }
    }
}

function paddAndLinkRefs(text) {
    //below finds http links
    var httpregex = /(https?://[^s]+)/gi;
    var httpsubst = '[code]<a href="$1" target="_blank" rel="noopener">';
    httpsubst += '$1</a>[/code]';
    // The substituted value will be contained in the result variable
    text = text.replace(httpregex, httpsubst);
    //above finds http links
    //below finds links to records based on numbers
    var num = new GlideRecord('sys_number');
    var numQuery = 'category!=sc_ic_task_defn_staging';
    numQuery += '^category!=task';
    numQuery += '^category!=ts_index_name';
    num.addEncodedQuery();
    num.query();
    var tables = [];
    while (num.next()) {
        tables.push({
            'name': num.category.toString(),
            'prefix': num.prefix.toString(),
            'digits': num.maximum_digits.toString()
        });
    }
    for (var x = 0; x < tables.length; x = x + 1) {
        var table = tables[x].name;
        var prefix = tables[x].prefix;
        var digits = parseInt(tables[x].digits, 10);
        var re = new RegExp("(\s|^)(" + prefix + ")(\d+)", "gi"); //find

        text = text.replace(re, function(m) {
            var result = "";
            var copy = m.toUpperCase();
            var number = copy.split(prefix)[1];
            var space = copy.split(prefix)[0];
            while (number.length < digits) {
                number = "0" + number;
            }
            var recordnumber = prefix + number;
            var test = new GlideRecord(table);
            var numberField = 'number'; //number field by default to 'number'
            if (test.isValidField('u_number')) { //test if 'u_number' is valid
                numberField = 'u_number'; //if so, use it
            }
            if (test.get(numberField, recordnumber)) {
                result += space;
                result += "[code]";
                result += '<a style="';
                result += 'text-decoration: underline; color: #0000ff;" ';
                result += 'href="' + table + '.do?sysparm_query=';
                result += numberField + '=' + recordnumber;
                result += '" target="_blank" rel="noopener" data-mce-href="';
                result += table + '.do?sysparm_query=' + numberField + '=';
                result += recordnumber + '" data-mce-style="';
                result += 'text-decoration: underline; color: #0000ff;">"';
                result += recordnumber + "</a>[/code]";
            } else {
                result = m;
            }
            return result;
        });
    }
    return text;
}
```
