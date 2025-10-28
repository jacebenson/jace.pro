---
title: Glide Freaking Query Wow
description: "A month ago I\_wrote about GlideQuery, asking \"... is GlideRecord going away? No. I don't think so. \"\r\n\r\nWell, I need to revise my thoughts on this. Before I ..."
date: '2020-05-24'
tags:
  - servicenow
  - gliderecord
  - business-rules
  - api
  - javascript
  - database
  - release-orlando
  - troubleshooting
  - performance
redirectFrom:
  - /glide-freaking-query-wow/
  - /p/2020-05-24-glide-freaking-query-wow/
---

<!--StartFragment-->

A month ago I [wrote about GlideQuery](https://jace.pro/post/2020-04-28-what-is-glidequery), asking "... is GlideRecord going away? No. I don't think so. "

Well, I need to revise my thoughts on this. Before I go into why, lets first link to the sources and you can watch the 20+ minute video of the genius (Peter Bell) behind GlideQuery.

Link to that is here: [GlideQuery: A modern upgrade to GlideRecord](https://events.servicenow.com/widget/servicenow/knowledge2020/myagenda/session/1581555110988001mNP1?sessionId=1581555110988001mNP1)

Okay. Now that is out of the way lets talk about some of the major points here so if we lose the video we still have this *somewhere* since as of right now this is [not](https://docs.servicenow.com/search?q=GlideQuery) [documented](https://developer.servicenow.com/dev.do#!/search/orlando/All/GlideQuery) **anywhere**.

# [What does GlideQuery do that GlideRecord fails?](#what-does-glidequery-do-that-gliderecord-fails)

GlideQuery is a **server-side** api for querying, updating, and deleting data. It's in Orlando, and Paris. Behind the scenes it uses GlideRecord but with smart defaults that often will cause generally problems.

This api follows three guiding principals;

* Fail Fast
* Be JavaScript
* Expressive

Here's some considerations;

* Performance

## [Failing Fast](#failing-fast)

Improving the feedback loop

### [Field Checking](#field-checking)

Here's a GlideRecord script with a problem\
By default if a field name is wrong in GlideRecord, it queries **everything**.

In GlideQuery, this will fail and not execute on error.

<!--EndFragment-->

<!--StartFragment-->

| GlideRecord Example                                                                                                                                                 | GlideQuery Example                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![](/assets/images/fieldcheckinggr.png)](/static/img/fieldcheckinggr.png) | [![](/assets/images/fieldcheckinggq.png)](/static/img/fieldcheckinggq.png) |

### [Choice checking](#choice-checking)

Here's another example where unless you check your code you may miss it. This is because it returns no results.

If the api said, hey that value is not valid, that could help you faster.

| GlideRecord Example                                                                                                                                                   | GlideQuery Example                                                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![](/assets/images/choicecheckinggr.png)](/static/img/choicecheckinggr.png) | [![](/assets/images/choicecheckinggq.png)](/static/img/choicecheckinggq.png) |

### [Type checking](#type-checking)

Travis Toulson wrote a whole post about [Is GlideRecord GetValue the king of the string](https://codecreative.io/blog/is-gliderecord-getvalue-the-king-of-the-string/)... It's great but this **SOLVES** that whole issue.

| GlideRecord Example                                                                                                                                                           | GlideQuery Example                                                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![](/assets/images/typecheckinggr.png)](/static/img/typecheckinggr.png)             | [![](/assets/images/typecheckinggq.png)](/static/img/typecheckinggq.png)             |
| [![](/assets/images/typecheckinggrupdate.png)](/static/img/typecheckinggrupdate.png) | [![](/assets/images/typecheckinggqupdate.png)](/static/img/typecheckinggqupdate.png) |

## [Be JavaScript](#be-javascript)

Isolation from Java

### [GlideQuery should behave you expect a regular JavaScript should behave.](#glidequery-should-behave-you-expect-a-regular-javascript-should-behave)

Type assumptions in are a real headache in ServiceNow with GlideRecord. It seems you get back a string type when you should get a number type.

| GlideRecord Example                                                                                                                                                                       | GlideQuery Example                                                                                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![](/assets/images/bejavascriptstringlytyped.png)](/static/img/bejavascriptstringlytyped.png)   | [![](/assets/images/bejavascriptstringlytypedgq.png)](/static/img/bejavascriptstringlytypedgq.png) |
| [![](/assets/images/bejavascriptstringlytyped2.png)](/static/img/bejavascriptstringlytyped2.png) |                                                                                                                                                                                             |
| [![](/assets/images/bejavascriptstringlytyped3.png)](/static/img/bejavascriptstringlytyped3.png) |                                                                                                                                                                                             |

### [Stacktraces](#stacktraces)

| GlideRecord Example                                                                                                                                           | GlideQuery Example                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![](/assets/images/stacktracegr.png)](/static/img/stacktracegr.png) | [![](/assets/images/stacktracegq.png)](/static/img/stacktracegq.png) |

### [Complex Queries should work how you expect](#complex-queries-should-work-how-you-expect)

Queries that use both "AND" and "OR" logic. How is this evaluated?

| GlideRecord Example                                                                                                                                                   | GlideQuery Example                                                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![](/assets/images/complexqueriesgr.png)](/static/img/complexqueriesgr.png) | [![](/assets/images/complexqueriesgq.png)](/static/img/complexqueriesgq.png) |

In SQL "AND" has priority over "OR". In GlideRecord, "OR" has priority over "AND" and this causes problems. In GlideQuery they solve this by being allowing nested GlideQuery methods.

## [Expressive](#expressive)

Do more with less

### [Returning a Stream or Optional](#returning-a-stream-or-optional)

When reading data with GlideQuery there are two classes used; Stream and Optional

| Stream                                                                 | Optional                                                                                           |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Used for reading records                                               | Used for reading a single record                                                                   |
| Returned by `select(1)`                                                | "Empty" if a record isn't found by a query                                                         |
| Lazily evaluated                                                       | Returned by `selectOne()`, `insert()`, and `update()`                                              |
| Common Stream methods: - map - flatMap - forEach - reduce - some - any | Common Optional methods: - get \[throws if empty] - map - isEmpty - isPresent - ifPresent - orElse |

Examples;

[![](/assets/images/maponstream.png)](/static/img/maponstream.png)[![](/assets/images/someonstream.png)](/static/img/someonstream.png)[![](/assets/images/everyonstream.png)](/static/img/everyonstream.png)

### [Aggregation](#aggregation)

Examples;

[![](/assets/images/aggregate1.png)](/static/img/aggregate1.png)[![](/assets/images/aggregate2.png)](/static/img/aggregate2.png)[![](/assets/images/aggregate3.png)](/static/img/aggregate3.png)

### [Insert](#insert)

[![](/assets/images/insert.png)](/static/img/insert.png)

### [Delete](#delete)

[![](/assets/images/delete.png)](/static/img/delete.png)

### [Update](#update)

[![](/assets/images/updateone.png)](/static/img/updateone.png)[![](/assets/images/updatemultiple.png)](/static/img/updatemultiple.png)

### [Field Flags](#field-flags)

This is important for currency and display values.

Flags mentioned `$DISPLAY` and `$CURRENCY_CODE`

[![](/assets/images/flagscurrency.png)](/static/img/flagscurrency.png)

## [Performance](#performance)

With business rules disabled here's how GlideQuery stacks up to GlideRecord.

| Method                | GlideRecord     | GlideQuery              |
| --------------------- | --------------- | ----------------------- |
| Insert 100 records    | 829 ms median   | 850 ms median (+2.5%)   |
| Reading 1 record      | 2ms median      | 3ms median (+1 ms)      |
| Reading 1,000 record  | 86.5 ms median  | 90.5 ms median (+4.62%) |
| Reading 10,000 record | 842.5 ms median | 890 ms median (+5.64%)  |

It's important to note that GlideQuery avoids common performance mistakes.

[![](/assets/images/commonperfmistakes.png)](/static/img/commonperfmistakes.png)

[![](/assets/images/commonperfmistakes2.png)](/static/img/commonperfmistakes2.png)

## [Current Limitations and Future work](#current-limitations-and-future-work)

* Scoped table permission checking
* Allow opting out of field/choice checking
* Better join support
* Field casting
* Parsing encoded queries

<!--EndFragment-->