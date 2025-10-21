---
title: Undocumented Scripts
description: "This page is to document scripts that are undocumented in ServiceNow.\r\n\r\n Server-Side APIs (gathered using\\\r\n  Xplore\\\r\n  manually and via posts on community..."
date: '2017-10-01'
tags:
  - servicenow
  - gliderecord
  - service-portal
  - ui-actions
  - workflow
  - scoped-apps
  - api
  - service-catalog
  - javascript
  - json
  - best-practices
  - integration
redirectFrom:
  - /undocumented-scripts/
---

<!--StartFragment-->

This page is to document scripts that are undocumented in ServiceNow.

* Server-Side APIs (gathered using\
  [Xplore](https://developer.servicenow.com/connect.do#!/share/contents/9650888_xplore_developer_toolkit?v=4.9&t=PRODUCT_DETAILS)\
  manually and via posts on community)

  * Glide

    * get()
    * checkInitiated()
  * GlideAbstractBucketCollector -- Expects Object
  * GlideSysAttachmentInputStream
  * GlideChecksum

    * calculateMD5CheckSum.
  * GlideSecurityManager

    * setUser
  * GlideTableCreator

    * <https://community.servicenow.com/thread/247897>
    * <https://community.servicenow.com/thread/248771>
  * GlideappCatalogItem
  * GlideappQuestion -- [Memory Leak issues\
    (PRB697208)](https://hi.service-now.com/kb_view.do?sysparm_article=KB0596785)
  * GlideappVariablePoolQuestionSet

    * generally used to print out variables and answers in email. I recommend: /printing-out-variables/
    * <https://community.servicenow.com/thread/284468> -- not working in scoped application
    * <https://community.servicenow.com/thread/221479> -- controlling what variables show up
  * GlideZipOutputStream aka Packages.java.util.zip.ZipOutputStream
  * GlideZipEntry aka Packages.java.util.zip.ZipEntry
  * GlideRecord.applyEncodedQuery -- found in activity definitions

    * This applies an encoded query to a record and sets it's values.
  * task.wf_activity

    * Note: the wf_activity field is disabled in the dictionary, so is not visible in the form or list views. But it's still valid to use in a script.
    * Clearing this out on tasks when "restarting" workflow will reuse tasks, if you clear this out, it will make new.
    * I had a ask where a customer wanted a "Revert to New" UI Action inside a Change record but wanted to keep the history of Closed Incomplete Change Tasks to show that a change failed and had to be restarted

    Every time I'd restart the workflow it would re-use the last made change tasks and overwrite information that we wanted to keep for history's sake. -- Lee Hollister
  * GlideTemplate
  * GlideTemplate.get
  * GlideMutex

    * <https://community.servicenow.com/message/953897>
    * exclusiveWithSpin
    * get()
    * getExclusiveWithSpin()
    * getNonExclusive()
    * getWithSpin()
    * invalidate()
    * nonExclusive
    * withSpin
* Client-Side APIs

  * [UINotification aka NotificationMessage](https://hi.service-now.com/scripts/classes/doctype/NotificationMessage.js)
  * [Event](https://hi.service-now.com/scripts/consts/GlideEvent.js)
  * [service.dateUtils.js](https://hi.service-now.com/scripts/sn/common/util/service.dateUtils.js)

    * getDateFromFormat
  * [g_form (desktop)](https://hi.service-now.com/scripts/doctype/GlideForm14.js)
  * [g_form (mobile/service portal)](https://hi.service-now.com/scripts/scoped_object_generators.js)

    * setVariablesReadOnly
  * Client-Side Properties

    * [calendar.js](https://hi.service-now.com/scripts/calendar.js)

      * g_user_date_format
      * g_user_date_time_format
* REST APIS

  * Search Endpoint:\
    `/now/globalsearch/search?sysparm_search=TERMGOESHERE&sysparm_groups=SYSIDOFSEARCHGROUP`\
    Header: `header: application/json`

Inspiration/Resources; [Undocumented Scripts by SN Pro Tips](https://snprotips.com/undocumented-servicenow-apis/)

<!--EndFragment-->