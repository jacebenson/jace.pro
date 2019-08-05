---
layout: page
title: glide.discovery.max_concurrent_invocations_per_schedule
description: "<b>Maximum concurrent invocations per schedule:</b> Prevents an unbounded number of invocations from inundating the system when a schedule takes longer than the time between invocations. The value is an integer defining the maximum number of automated invocations of the same schedule that may proceed at one time. If the limit has been reached subsequent scheduled invocations will be cancelled. The default value is 3. A value of 0 or any negative number will disable this restriction."
---
3