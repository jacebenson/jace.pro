---
aliases:
- '/transform/'
- '/transformmap/'
date: '2016-01-01'
keywords:
- onStart
- onComplete
- onBefore
- onAfter
- onForeignInsert
- onChoiceCreate
- onReject
layout: page
tags:
- 'server-side-api'
title: Transform Map Scripts
url: '/transform-map/'
---

# What are Transform Map Scripts

Transform Map Scripts are scripts to allow you to script how a import
set is processed.

{{}} graph TD E1(onStart - Before the Import Rows are read) E2(onBefore
- Before each Import Row is read) E3(onForeignInsert - Creates a Foreign
RecordonChoiceCreate - Creates a Choice Record) E4(onReject - If
triggered entire Import Row is skipped) E5(onAfter - After the Import
Row is read) E6(onComplete - After all the Import Rows are read)

E1--\>E2 E2--\>E3 E3--\>E5 E3--Fails to Create--\>E4 E4--\>E5 E5--No
More Rows--\>E6 E5--More Rows--\>E2

{{\< /mermaid \>}}

[Docs](https://docs.servicenow.com/bundle/london-platform-administration/page/script/server-scripting/reference/r_MapWithTransformationEventScripts.html)

| Available                                                             | Variable        | Type              | Description                                                                                                            |
|-----------------------------------------------------------------------|-----------------|-------------------|------------------------------------------------------------------------------------------------------------------------|
| onStartonBeforeonForeignInsertonChoiceCreateonRejectonAfteronComplete | source          | GlideRecord       | The first row of the source table, there is no data yet since the row has not been read.                               |
| onStartonBeforeonForeignInsertonChoiceCreateonRejectonAfteronComplete | import\_set     | GlideRecord       | The import set that is currently being transformed.                                                                    |
| onStartonBeforeonForeignInsertonChoiceCreateonRejectonAfteronComplete | map             | GlideTransformMap | Read-only information about the current transform map record.                                                          |
| onStartonBeforeonForeignInsertonChoiceCreateonRejectonAfteronComplete | log             | Function          | log.info(...), log.warn(...), log.error(...).                                                                          |
| onStartonBeforeonForeignInsertonChoiceCreateonRejectonAfteronComplete | ignore          | Boolean           | When set to true, the entire transformation will be stopped and no further processing will occur.                      |
| onStartonBeforeonForeignInsertonChoiceCreateonRejectonAfteronComplete | error           | Boolean           | When set to true, has the same effect as the ignore flag of stopping the entire transformation, with an error message. |
| onBeforeonForeignInsertonChoiceCreateonRejectonAfteronComplete        | target          | GlideRecord       | The row of the target table that is currently being processed.                                                         |
| onBeforeonForeignInsertonChoiceCreateonRejectonAfter                  | action          | String            | "insert" or "update"                                                                                                   |
| onBefore onAfter                                                      | error\_message  | String            | Defines a custom message to be sent in the `<error_message>` XML response.                                             |
| onBefore onAfter                                                      | status\_message | String            | Defines a custom message to be sent in the `<error_message>` XML response.                                             |
| onChoiceCreateonForeignInsert                                         | name            | String            | Evaluates to the field name of the target record for which a foreign record that is about to be created.               |
| onChoiceCreateonForeignInsert                                         | value           | String            | Evaluates to the display value from the source record for which a foreign record is about to be created.               |

## onStart

When: The onStart event script is processed at the start of an import
run, before any data rows are read.

## onBefore

When: The onBefore event script is processed at the start of a row
transformation, before the source row is transformed into the target
row.

## onForeignInsert

When: The onForeignInsert event script is processed at the start of the
creation of a related, referenced record, before the record is created.

## onChoiceCreate

When: The onChoiceCreate event script is processed at the start of a
choice value creation, before the new choice value is created.

## onReject

When: The onReject event script is processed during the occurrence of a
foreign record or choice creation, and the foreign record or choice is
rejected ,the entire transformation row is not saved.

## onAfter

When: The onAfter event script is processed at the end of a row
transformation, after the source row has been transformed into the
target row and saved.

## onComplete

When: The onComplete event script is processed at the end of an import
run, after all data rows are read and transformed.
