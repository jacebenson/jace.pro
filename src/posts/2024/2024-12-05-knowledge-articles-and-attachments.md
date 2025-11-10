---
title: Quirks of db_image, db_video, and db_audio in ServiceNow
description: >-
  The db_image, db_video, and db_audio tables in ServiceNow do something
  interesting: they completely ignore access controls (ACLs). That means any
  file stored...
date: '2024-12-05'
tags:
  - servicenow
  - tables
redirectFrom:
  - /knowledge-articles-and-attachments/
  - /p/2024-12-05-knowledge-articles-and-attachments/
---

The `db_image`, `db_video`, and `db_audio` tables in ServiceNow do something interesting: they completely ignore access controls (ACLs). That means any file stored here is publicly accessible. While this is great for assets like images in public-facing knowledge base (KB) articles, it does come with some caveats.

For example, files from these tables are served straight from the root domain (e.g., `https://support.service-now.com/image.png`). This makes them easy to link to, but it also bypasses user permissions entirely. In some cases, this behavior can cause issues. I've seen KB articles with copied images that still point to the original article, which some users couldn't access. The attachments copy forward with the article, but the image references in the HTML don't update.

I got curious and tested a few edge cases, like uploading files without extensions or trying to host unauthorized content. ServiceNow held up.  Files without extensions still work as expected, and there doesn't seem to be a way to abuse this feature for anything malicious. That said, the lack of ACL checks is still something to keep in mind.

This isn't necessarily a problem, but it's worth noting. If you're using these tables, make sure they're only for files you intend to be public. Also, if you're working with KB articles, double-check your image references when creating new versions. A little awareness here can go a long way toward keeping things working smoothly.