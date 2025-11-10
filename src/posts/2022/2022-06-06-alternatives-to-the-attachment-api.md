---
title: Alternatives to the attachment API in ServiceNow
description: >-
  Storage in ServiceNow is expensive.  Because of that, I'd encourage you to
  AVOID this for your work's budget.  That being said, if you find you need to
  uploa...
date: '2022-06-07'
tags:
  - servicenow
  - rest-api
  - import-sets
redirectFrom:
  - /alternatives-to-the-attachment-api/
  - /p/2022-06-06-alternatives-to-the-attachment-api/
---

Storage in ServiceNow is expensive.  Because of that, I'd encourage you to AVOID this for your work's budget.  That being said, if you find you need to upload attachments programtically, this post might be helpful as these ways aren't clearly defined in the other sources.

There's three ways to upload attachments to ServiceNow.

### REST Attachment API

The [Attachment API](https://docs.servicenow.com/search?q=attachment%20api) is probably the one most will use.  It works generally how you would expect, you can get the file content, meta data, post a new file, delete a file.  One thing to note.  When creating a file you must have a valid table and sys_id that will have the file.

### Web Services (soap)

This is not recommended, ServiceNow recommends the REST Attachment API.

Like the REST Attachment API, this also says it requires a table and sys_id albeit, but that isn't true.  So you can attach things to random places like how catalog item attachments get created.

### Related Uploads

Sometimes you don't only want to upload a file but you also want to tranform the data in the file.  There's a special endpoint to handle that as Josh Nerius wrote a few years ago;

> \[attachment api] can be used to attach a file to a record in ServiceNow, but it does not facilitate loading/transforming attached data.
>
> Instead, take a look at this page on the docs site: Post CSV or Excel files directly to an import set. This allows you to upload an attachment to a special endpoint that will then load the attached data into an Import Set table and Transform it.
>
> Before posting the file, you must first set up an Import Set and Transform map. Here's a post that explains the basics: Getting Started with Import Sets.
>
> In summary, you will need to:
>
> Create an Import Set / Transform Map
> Use the special sys_import.do endpoint with the parameters described above to upload the file - [Josh Nerius 2017](https://www.servicenow.com/community/developer-forum/send-attachment-using-rest-api/m-p/1486913/highlight/true#M143839)



### Sources

* <https://hi.service-now.com/kb_view.do?sysparm_article=KB0546294>
* <https://www.servicenow.com/community/developer-forum/send-attachment-using-rest-api/m-p/1486913/highlight/true#M143839>
* <https://docs.servicenow.com/bundle/vancouver-api-reference/page/integrate/inbound-soap/reference/r_AttachmentCreatorSOAPWebService.html>
* <https://docs.servicenow.com/bundle/vancouver-api-reference/page/integrate/inbound-rest/concept/c_AttachmentAPI.html>