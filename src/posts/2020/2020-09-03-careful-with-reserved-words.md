---
title: Careful with reserved words
description: >-
  If you have a variable say "class" or "package" when calling them via a script
  you will get weird results. I'd advise to avoid this list of names for
  columns...
date: '2020-09-03'
tags:
  - servicenow
  - reporting
  - service-catalog
  - javascript
  - html
  - database
  - release-orlando
  - troubleshooting
redirectFrom:
  - /careful-with-reserved-words/
---

<!--StartFragment-->

If you have a variable say "class" or "package" when calling them via a script you will get weird results. I'd advise to avoid this list of names for columns.

## [Javascript Reserved Words](https://jace.pro/post/2020-09-03-reserved-words/#javascript-reserved-words)

|            |              |                |             |            |           |              |          |
| ---------- | ------------ | -------------- | ----------- | ---------- | --------- | ------------ | -------- |
| `abstract` | `arguments`  | `await`        | `boolean`   | `break`    | `byte`    | `case`       | `catch`  |
| `char`     | `class`      | `const`        | `continue`  | `debugger` | `default` | `delete`     | `do`     |
| `double`   | `else`       | `enum`         | `eval`      | `export`   | `extends` | `false`      | `final`  |
| `finally`  | `float`      | `for`          | `function`  | `goto`     | `if`      | `implements` | `import` |
| `in`       | `instanceof` | `int`          | `interface` | `let`      | `long`    | `native`     | `new`    |
| `null`     | `package`    | `private`      | `protected` | `public`   | `return`  | `short`      | `static` |
| `super`    | `switch`     | `synchronized` | `this`      | `throw`    | `throws`  | `transient`  | `true`   |
| `try`      | `typeof`     | `var`          | `void`      | `volatile` | `while`   | `with`       | `yield`  |

Try it out. make a catalog item. make a variable, call it "class", try to use that variable in a refernce qualifer and observe weird things.

[The docs also say, "you cannot use reserved words"](https://docs.servicenow.com/bundle/orlando-application-development/page/script/topic/c_Script.html).

Other's have had issues using these terms for column names. If you can, avoid that so you don't have the [same problem here as Detlef](https://community.servicenow.com/community?id=community_question&sys_id=fddbba91dbbf48945129a851ca961933).

## [MysQL Reserved Words](https://jace.pro/post/2020-09-03-reserved-words/#mysql-reserved-words)

[Database view reserved words](https://docs.servicenow.com/bundle/orlando-platform-administration/page/use/reporting/concept/c_DatabaseViews.html#d771413e105) seems to be different and dependent on [MysQL's list](https://dev.mysql.com/doc/refman/8.0/en/keywords.html)

<!--EndFragment-->