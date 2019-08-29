---
aliases:
- '/GlideAggregate/'
date: '2016-01-01'
keywords:
- addAggregate
- getAggregate
- getAggregateEncodedQuery
- orderByAggregate
- setGroup
layout: page
tags:
- 'server-side-api'
title: GlideAggregate
url: '/glideaggregate/'
---

# What is GlideAggregate

GlideAggregate is a server Class that is great at counting, averaging,
and doing other tallying of records that extends
[GlideRecord](/gliderecord). As such I'm going to only focus on the
methods that really make GlideAggregate unique. When making this post I
found these links especially useful;

-   [Slightly Looney Blog
    Post](https://community.servicenow.com/people/SlightlyLoony/blog/2011/08/15/2078)
-   [Docs](https://docs.servicenow.com/bundle/jakarta-application-development/page/app-store/dev_portal/API_reference/glideAggregateScoped/concept/c_GlideAggregateScopedAPI.html)

| Category       | Property/Method                                           | Description                                                                                     |
|----------------|-----------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| GlideAggregate | addAggregate                                              | Adds an aggregate                                                                               |
| GlideAggregate | getAggregate                                              | Gets the value of the specified aggregate                                                       |
| GlideAggregate | getAggregateEncodedQuery                                  | Gets the query necessary to return the current aggregate                                        |
| GlideAggregate | orderByAggregate                                          | Sorts the aggregates based on the specified aggregate and field                                 |
| GlideAggregate | setGroup                                                  | Sets whether the results are to be grouped                                                      |
| Query          | [addEncodedQuery](/gliderecord#addencodedquery)           | Specifies one of many querys encoded                                                            |
| Query          | [addJoinQuery](/gliderecord#addjoinquery)                 | Adds a filter to return records based on a relationship in a related table                      |
| Query          | [addNotNullQuery](/gliderecord#addnotnullquery)           | Add's a `^fielsISNOTNULL` condition                                                             |
| Query          | [addNullQuery](/gliderecord#addnullquery)                 | Add's a `^fieldISNULL` condition                                                                |
| Query          | [addOrCondition](/gliderecord#addorcondition)             | Add's a `^OR` condition                                                                         |
| Query          | [addQuery](/gliderecord#addquery)                         | Specifies one of many querys                                                                    |
| Query          | [chooseWindow](/gliderecord#choosewindow)                 | Sets a range of rows to be returned by subsequent queries.                                      |
| Query          | [get](/gliderecord#get)                                   | Get's a single record                                                                           |
| Query          | [getEncodedQuery](/gliderecord#getencodedquery)           | Returns the query in it's encoded form                                                          |
| Query          | [getRowCount](/gliderecord#getrowcount)                   | Gets the number of rows, not recomeneded, use [GlideAggregate](/glideaggregate) instead         |
| Query          | [hasNext](/gliderecord#hasnext)                           | Determines if there are any more records in the GlideRecord                                     |
| Query          | [next](/gliderecord#next)                                 | Moves to the next record in the GlideRecord                                                     |
| Query          | [orderBy](/gliderecord#orderby)                           | Sets the order by to A-Z on the specified field                                                 |
| Query          | [orderByDesc](/gliderecord#orderbydesc)                   | Sets the order by to Z-A on the specified field                                                 |
| Query          | [query](/gliderecord#query)                               | Runs the query against the table based on the specified filters by addQuery and addEncodedQuery |
| Query          | [setLimit](/gliderecord#setlimit)                         | Sets a limit on the number of results                                                           |
| Query          | [setEncodedQuery](/gliderecord#setencodedquery)           |                                                                                                 |
| Read           | [addFunction](/gliderecord#addfunction)                   | Retrieve the specified platform function in addition of the field values                        |
| Read           | [getAttribute](/gliderecord#getattribute)                 | Gets the attributes on the field in question from the dictionary                                |
| Read           | [getCategory](/gliderecord#getcategory)                   |                                                                                                 |
| Read           | [getClassDisplayValue](/gliderecord#getclassdisplayvalue) |                                                                                                 |
| Read           | [getDisplayName](/gliderecord#getdisplayname)             | Retrieves the name of the display field                                                         |
| Read           | [getDisplayValue](/gliderecord#getdisplayvalue)           | Retrieves the display value for the current record                                              |
| Read           | [getElement](/gliderecord#getelement)                     | Retrieves the GlideElement for a specified field                                                |
| Read           | [getLabel](/gliderecord#getlabel)                         | The label of the field as a String                                                              |
| Read           | [getRecordClassName](/gliderecord#getrecordclassname)     | Retrieves the class name for the current record                                                 |
| Read           | [getTableName](/gliderecord#gettablename)                 | Retrieves the table name associated with this GlideRecord                                       |
| Read           | [getValue](/gliderecord#getvalue)                         | Retrieves the underlying value of a field                                                       |
| Write          | [isActionAborted](/gliderecord#isactionaborted)           | Determines whether the current database action is to be aborted. Available in Fuji patch 3      |
|                | [Operators](/GlideRecord#operators)                       | Different Operators for GlideRecord                                                             |

## addAggregate

Adds an aggregate.

## getAggregate

Gets the value of an aggregate from the current record.

## getAggregateEncodedQuery

Gets the query necessary to return the current aggregate.

## groupBy

Provides the name of a field to use in grouping the aggregates.

## setGroup

Sets whether the results are to be grouped

## orderByAggregate

Orders the aggregates based on the specified aggregate and field.

``` {.js}
var count = new GlideAggregate('io_set_item');
//parm1: COUNT, MIN, MAX, parm2: field
count.addAggregate('COUNT', 'variable_set');
count.query();
while (count.next()) {
   var set = count.variable_set.getDisplayValue();
   var setCount = count.getAggregate('COUNT', 'variable_set');
   var message = "The are currently " + setCount;
   message += " items with a variable set of " + set;
   gs.print(message);
}
/*Output
[0:00:00.345] Script completed in scope global: script
*** Script: The are currently 1 items with a variable set of Generic Request
*** Script: The are currently 154 items with a variable set of Request For
*/
```
