---
layout: page
title: com.snc.on_call_rotation.max_subscription_interval
description: "This property stores a value in days.  Limit changes to the 'Coverage interval', 'Get coverage for' fields on the cmn_rota table, so that the product of these fields does not result in a value greater than the default 364 days (52 weeks).  The subscription URL that makes use of the web service to retrieve the iCalendar for a member's on-call rota will calculate the rotation and then compile to an iCal formatted document. Coverage values should not be excessive (>364 days) as there are a number of schedules that are factored when calculating a user's on-call commitments, this includes time-off and coverage spans."
---
364