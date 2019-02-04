---
title: Multi Row Variable Sets use a different table to store in the back
date: 2019-02-04
layout: post
keywords:
- "mrvs"
- "sc_multi_row_question_answer"
- "variables"
- "variable table"
---

The other day @rfedoruk asked, "Anyone out there in #ServiceNow / #ServiceNowDev ever built anything that allows you to print the RITM and include variables? Special bonus if it can do it with London's multi-line variable set feature."

I replied then had some back and forth.
<!--more-->

In our discussions we found this new table `sc_multi_row_question_answer`.  I needed to post this before I forget, as it's useful.  Eventually I'll update my varaible scripts to pull from there too.