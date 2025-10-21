---
title: TechNow Rome
description: "Feel free to edit!!!! everyone!\r\n\r\n# Now Exp\r\n\r\n CSS available on an element level.\r\n\r\n# playbook\r\n\r\n moving to store release\r\n\r\n## playbook record generator..."
date: '2021-07-23'
tags:
  - servicenow
  - business-rules
  - flow-designer
  - update-sets
  - import-sets
  - notifications
  - service-catalog
  - css
  - release-rome
  - performance
  - security
redirectFrom:
  - /technow-rome/
---

Feel free to edit!!!! everyone!

# [](https://jace.pro/post/2021-07-27-technow-rome/#technow-rome)Now Exp

* CSS available on an element level.

# playbook

* moving to store release

## playbook record generator

* allows an agent to enter the data before the record is created.
* playbook + ui builder has a better intergration
* more options to add actions at the playbook level

## playbook preview

* improves the exp of building a playbook by allowing you to see it as you build on

Q: Can you use SP on Now Experience?\
A: No, they are different technologies.

SN may release now components to SP (safe harbor)

# Dev Tool Enhancements

## Expanded Source control

* can edit things like CSM in studio now?
* headless testing is now possible via docker
* servicenow cli

## delegate dev

* admin can delegate the source control feature
* delete app can be given to users

## studio enchancements

* can now create a now experience in studio
* this allows folks w/o the app eng. studio licensines to create now exp.'s

## flow designer

* improved error handling
* new simple math and string functions
* performance of flow can be imporved by turning off logging
* automatic variable cleaning. var_dictionary cleared after a month

Q: Can error handling actions have access to data pills?\
A: Yes

## intergrationhub $

* now does imports (competes with import sets now - import sets reimagined - only supports data streams)
* notifications - will tell you when you run into licensing issues
* tls 1.2 support for fips compliance

# security

## multi-factor authentication

* adaptive authentication - contextual security?
* certificate based authentication

## data exports metrics

* this will let you measure whats being exported and if its sensitve

## platform encryption Enhancements $

* in rome encryption now doesnt need to apply to business rules/scripts

# platform foundation

## system logs

* new fields

  * source (existing)
  * source package (new)
  * source application family (new)
* schedule installation of plugins and applications\
  Q: Can you scheduled install of update sets? A: ?
* instance scan has new scan

  * reactive scan (based on a specific failure)
* inbound emails actions

  * now can properly identify the user based on email across the extended user tables.
  * this was resolved by changing how the inbound does a match, `cmn_notif_device` table to find the user.

Q: how is the health scan different then the instance scan?\
A: They are not different. Well Support does a health scan, you run an instance scan.

Q: is instance scans performance intensive?\
A: Generally no

Q: an interesting use for instance scan.\
A: data sanity checks (verify users have managers)