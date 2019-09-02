---
date: '2018-06-14'
layout: post
tags:
- search
title: Text Search Issues
authors: ["jace"]
---

I opened a HI ticket about this and it was communicated that the global
text search does not respect more non-alphanumeric characters.

So it turns out that the keyword search doesn't respect `_` characters.
Meaning if you search for "`this_custom_word`" and you expect to find
results, if one of those words is on the Stop list tables
(`ts_index_stop`, and `ts_stop`). It may not show up.

Just something HI made me aware of. I askd if they have other
delimiters, but they said its just `_` and space.

If I get more information I'll update this.
