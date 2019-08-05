---
layout: page
title: com.snc.on_call_rotation.max_rotation_repeat_count
description: "This property stores a value in days.  Limit changes to the 'Rotation interval', 'Rotate every' fields, and the number of members per cmn_rota_roster, so that the product of these fields does not result in a value greater than the default 182,000 days (26,000 weeks, 500 years).  The rotation span interval is the value calculated for each rotation member's schedule span daily repeat field. It is the product of the 'Rotate every' value multiplied by the number of members in the roster; if the 'Rotation interval' is weekly this value will be multiplied by 7 (factoring 7 days in a week)."
---
182000