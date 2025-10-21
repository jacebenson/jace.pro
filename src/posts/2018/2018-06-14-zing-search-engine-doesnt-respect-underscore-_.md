---
title: Zing Search engine doesn't respect underscore
description: "I opened a HI ticket about this and they communicated that the global text search does not respect more non-alphanumeric characters.\r\n\r\nIt turns out that the..."
date: '2018-06-14'
tags: []
redirectFrom:
  - /zing-search-engine-doesnt-respect-underscore-_/
---

<!--StartFragment-->

I opened a HI ticket about this and they communicated that the global text search does not respect more non-alphanumeric characters.

It turns out that the keyword search doesn't respect `_` characters.

\
Meaning if you search for "`this_custom_word`" and you expect to find results, if one of those words is on the Stop list tables (`ts_index_stop`, and `ts_stop`). It may not show up.

Something HI made me aware of. I askd if they have other delimiters, but they said `_` and space are delimiters.

If I get more information I'll update this.

<!--EndFragment-->