---
layout: page
title: glide.identification_engine.skip_duplicates
description: "<span style = 'font-family: Arial; font-size: 13px; color: #4a4a4a;'>Controls how identification processes a small set of duplicate CIs. When true: If the number of duplicate CIs is less than the threshold specified by glide.identification_engine.skip_duplicates.threshold, then one of the duplicate CIs is picked as a match and gets updated. For the rest of the duplicate CIs, the CMDB_CIs' discovery_source field is set to 'Duplicate'. When false: Matching a CI fails, and an error is logged.<ul style='margin: 0px; padding-left:15px;'><li>Type: Yes | No</li><li>Default: Yes</li></ul></span>"
---
true