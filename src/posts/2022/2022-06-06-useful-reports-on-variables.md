---
title: Useful reports on variables
description: "Where's the data stored\r\n\r\n| Type            | Table                        |\r\n| --------------- | ---------------------------- |\r\n| Record Producer | questi..."
date: '2022-06-07'
tags:
  - servicenow
redirectFrom:
  - /useful-reports-on-variables/
  - /p/2022-06-06-useful-reports-on-variables/
---

## Where's the data stored

| Type            | Table                        |
| --------------- | ---------------------------- |
| Record Producer | question_answer              |
| Catalog Item    | sc_item_option_mtom          |
| MRVS            | sc_multi_row_question_answer |

## What do you do with the data

If variable options are just not used, is it safe to exclude them or assume the popular is the default?  This could have big wins for UX.

If items are not used is it safe to just remove the item etc. etc.