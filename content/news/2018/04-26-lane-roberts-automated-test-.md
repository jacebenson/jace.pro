---
title: "Automated Test Framework FAQs Can I use ATF in Production"
date: 2018-04-26T03:55:20.000Z
authors: ["Lane Roberts"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=b4490484db3557004fc2f4621f9619d1"
---
<h3>Automated Test Framework FAQs: Can I use ATF in Production?:</h3>
<p>Running ATF in production is neither recommended nor supported, as doing so can result in production instance outages, and/or issues with dataloss to occur.</p>
<h4>Records are still created and modified even if you’re not explicit about it:</h4>
<p>Beyond the act of explicitly creating records during a test, just navigating the UI and opening forms can still increment record number counters, trigger display business rules, and can execute any number of base system and/or customized client and server scripts; such as the recording of auditing information, populating logs with errors, and at least temporarily showing failure data in report dashboards or notifying stakeholders of problematic issues. Additionally, we don’t rollback data on all tables, by default, which would leave unexpected data inaccuracies on your production environment.</p>
<h4>Security:</h4>
<p>The user designated as the test designer will have enough permissions to design and run tests that execute scripts and can view tested interfaces. Allowing this user this level of access on a production environment, may cause security concerns.</p>
<h4>User error:</h4>
<p>Even if you were to have a flawless suite of tests that manages to never modify a record or flag SLA dashboards, if anyone were to ever violate the guidelines that built that test suite, they could cause any or all of the above issues.</p>
<p style="margin: 0in; font-family: Calibri; font-size: 11.0pt; color: black;"> </p>