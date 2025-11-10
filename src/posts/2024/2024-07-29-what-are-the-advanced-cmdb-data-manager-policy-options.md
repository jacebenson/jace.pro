---
title: What are the Advanced CMDB Data Manager Policy options?
description: "I'm digging more into the archive, and destroy rules of the archival processes.  That is until I found the CMDB Data Manager and their policies.\r\n\r\n \r\n\r\nI'm ..."
date: '2024-07-30'
tags:
  - servicenow
  - cmdb
redirectFrom:
  - /what-are-the-advanced-cmdb-data-manager-policy-options/
  - /p/2024-07-29-what-are-the-advanced-cmdb-data-manager-policy-options/
---

I'm digging more into the archive, and destroy rules of the archival processes.  That is until I found the CMDB Data Manager and their policies.

 

I'm not sure if this is possible, but is there a way to have the retirement or archival step only execute when the CI is not referenced by a number of other tables?  Specifically tasks, and kb tables.  

 

I'm going to link what I found so far but nothing quiet does it this way yet.;

 

1. [CMDB Data Manager Advanced Policy Rules / Conditio... - ServiceNow Community](https://www.servicenow.com/community/cmdb-forum/cmdb-data-manager-advanced-policy-rules-conditions/m-p/2603237) talks about using the "Dependent CI - Retire" Policy to retire *child* records to a CI, which is not quiet what I need.

2. [Over your storage limit? Archiving may not be you... - ServiceNow Community](https://www.servicenow.com/community/developer-forum/over-your-storage-limit-archiving-may-not-be-your-friend/m-p/2624658) talks about the nuances about archiving and deleting and storage concerns

3. [ServiceNow DEMO: CMDB Data Manager (youtube.com)](https://www.youtube.com/watch?v=1p74bg6ZK9E) shows how to use this thing in a Utah Instance which was very helpful.

4. I looked on nowlearning and everything i found was more about understanding the deduplication process [cmdb data manager LXP Search - Now Learning (servicenow.com)](https://nowlearning.servicenow.com/lxp/en/pages/lxp-search?id=search&q=cmdb%20data%20manager&spa=1)

5. The official docs [CMDB Data Manager (servicenow.com)](https://docs.servicenow.com/bundle/utah-servicenow-platform/page/product/configuration-management/concept/cmdb-data-management.html)

 

I can think of a few ways to handle this but this seems so close without having to customize things.  A few options I can think of off the top of my head include, running some scheduled job/flow to set some value "Ready to retire" when the conditions are met then use the CMDB Data manager policies but, I'd love to hear if anyone has any other thoughts on this or if there's another better way.

 

Thank you!

Community post https://www.servicenow.com/community/cmdb-forum/advanced-cmdb-data-manager-policy-options/m-p/2768444#M8215