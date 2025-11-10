---
title: Do you need a CI and not the matched Asset?  Enter skip_sync
description: >-
    What is the skip_sync field on Asset or CI record - Support and Troubleshooting (servicenow.com)
date: '2025-10-28'
tags:
  - servicenow
redirectFrom:
  - /do-you-need-a-ci-and-not-the-matched-asset-enter-skip_sync/
  - /do-you-need-a-ci-and-not-its-matched-asset-enter-skip_sync/

---

A few years ago I was digging into how Assets and CIs interact on ServiceNow.  I came across this article that explains the `skip_sync` field on Asset or CI records.
[What is the skip_sync field on Asset or CI record - Support and Troubleshooting (servicenow.com)](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0743665)

> What is the skip_sync field on Asset or CI record
>
> ### Issue
>
> For the latest information on this topic, see Configuration Item [cmdb_ci] class.
>
> The `skip_sync` field not only exists on assets but also on the CMDB table. It is the flag indicating whether synchronization between Asset and CMDB can be skipped.
>
> There are OOB script includes and business rules that may invoke according to functions and change the value of `skip_sync`:
>
> > AssetAndCISynchronizer: /nav_to.do?uri=sys_script_include.do?sys_id=9ec37b411b012000e49bfbcd2c071380
> > Update Asset fields on change: /nav_to.do?uri=sys_script.do?sys_id=31e93aaf1b3210002502fbcd2c0713d8
> > Update CI fields on change /nav_to.do?uri=sys_script.do?sys_id=4d15855c1b0310002502fbcd2c071399
>
> The `skip_sync` flag is used to prevent recursion within the same cycle of business rules and will be reset in the next cycle during Asset-CI synchronization. The `skip_sync` flag is set to false by default.
>
> As the two business rules above would be triggered twice during an Asset-CI synchronization. The `skip_sync` flag would be set to false again after the synchronization. In case the `skip_sync` flag was set to true for some reason, an update on the Asset/CI should help set the flag back to false.