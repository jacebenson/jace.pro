---
aliases:
- '/Attributes-Vars/'
date: '2016-01-01'
keywords:
- 'glide_list'
- 'is_searchable_choice'
- 'max_length'
- 'max_unit'
- 'no_filter'
- 'ref_ac_columns'
- 'ref_ac_order_by'
- 'ref_auto_completer'
- 'ref_qual_elements'
layout: page
tags:
- variables
- attributes
- cheat sheet
title: Attributes for Variables
url: '/attributes-vars/'
---

A list of all the variable attributes that could be found here on the
[docs](https://docs.servicenow.com/bundle/jakarta-it-service-management/page/product/service-catalog-management/reference/variable-attributes.html#variable-attributes).

## Documented

| Attribute              | Value                      | Target Variable                                       | Description                                                                                                                                                                        |
|------------------------|----------------------------|-------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `glide_list`           | true/false                 | List collector                                        | Changes the list collector interface from slushbucket to glide list.                                                                                                               |
| `is_searchable_choice` | true/false                 | Lookup select boxSelect box                           | If set to true, allows you to search and select the required value for the variable.                                                                                               |
| `max_length`           | true/false                 | Single-line textWide single-line text                 | Sets the maximum character length. For example, if max\_length=200, the maximum value for max\_length is 4000.                                                                     |
| `max_unit`             | days/hours/minutes/seconds | Duration                                              | Sets the maximum unit of time for the duration.                                                                                                                                    |
| `no_filter`            | true/false                 | List Collector                                        | Hides the filter fields that appear above a list collector.                                                                                                                        |
| `ref_ac_columns`       | field;field                | Reference                                             | Specifies the columns whose display values appear in an auto completion list in addition to the name. Separate column names with a semi-colon.                                     |
| `ref_ac_order_by`      | field                      | Reference                                             | Specifies the column that is used to sort the auto completion list.                                                                                                                |
| `ref_auto_completer`   | JavaScript class name      | Reference                                             | Specifies the name of a JavaScript class (client-side) that creates the list for auto completion choices.*AJAXReferenceCompleter**AJAXTableCompleter**AJAXReferenceChoice*         |
| `ref_qual_elements`    | field;field                | Lookup multiple choiceLookup select boxList Collector | A list of fields to be sent back to the server to get an updated reference. Attribute behavior is specific to the service catalog desktop. Probably doesnt work on service portal. |
