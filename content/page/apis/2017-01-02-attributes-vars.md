---
title: Attributes for Variables
author: jace
category: ''
date: 2016-01-01 00:00:00 +0000
layout: page
tags:
- variables
- attributes
- cheat sheet
url: "/attributes-vars/"
aliases:
- "/Attributes-Vars/"
---
<style>
td {
    max-width: 200px;
    word-wrap: break-word;
}
</style>


A list of all the variable attributes that could be found here on the [docs](https://docs.servicenow.com/bundle/jakarta-it-service-management/page/product/service-catalog-management/reference/variable-attributes.html#variable-attributes).
<!--more-->

## Documented

| Attribute                   | Value                       | Target Variable                                                 | Description |
| --------------------------- | --------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `glide_list`                | true/false                  | List collector                                                  | Changes the list collector interface from slushbucket to glide list.                                                                                                                           |
| `is_searchable_choice`      | true/false                  | Lookup select box<br/>Select box                                | If set to true, allows you to search and select the required value for the variable.                                                                                                           |
| `max_length`                | true/false                  | Single-line text<br/>Wide single-line text                      | Sets the maximum character length. For example, if max_length=200, the maximum value for max_length is 4000.                                                                                   |
| `max_unit`                  | days/hours/minutes/seconds  | Duration                                                        | Sets the maximum unit of time for the duration.                                                                                                                                                |
| `no_filter`                 | true/false                  | List Collector                                                  | Hides the filter fields that appear above a list collector.                                                                                                                                    |
| `ref_ac_columns`            | field;field                 | Reference                                                       | Specifies the columns whose display values appear in an auto completion list in addition to the name. Separate column names with a semi-colon.                                                 |
| `ref_ac_order_by`           | field                       | Reference                                                       | Specifies the column that is used to sort the auto completion list.                                                                                                                            |
| `ref_auto_completer`        | JavaScript class name       | Reference                                                       |  Specifies the name of a JavaScript class (client-side) that creates the list for auto completion choices.<br/>*AJAXReferenceCompleter*<br/>*AJAXTableCompleter*<br/>*AJAXReferenceChoice*     |
| `ref_qual_elements`         | field;field                 | Lookup multiple choice<br/>Lookup select box<br/>List Collector | A list of fields to be sent back to the server to get an updated reference. <br/> Attribute behavior is specific to the service catalog desktop. <br/> Probably doesnt work on service portal. |