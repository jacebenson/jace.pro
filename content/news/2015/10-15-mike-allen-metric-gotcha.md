---
title: "Metric Gotcha"
date: 2015-10-15T00:47:15.000Z
authors: ["Mike Allen"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=a61d62e5dbd0dbc01dcaf3231f961935"
---
<p>There is an OOB Metric Definition called 'Create to Resolve Duration'.   It looks like this:</p><p></p><p><img  alt="Capture.PNG" class="image-0 jive-image" src="e39fcd4edb14d304b322f4621f961998.iix" style="height: 228px; width: 620px;"/></p><p></p><p>Now, pay special attention to this piece here:</p><p></p><p><img  alt="Capture.PNG" class="image-1 jive-image" src="a1fda48adb549344e9737a9e0f96190c.iix" style="height: auto;"/></p><p></p><p>If you begin to insert states on incident with values higher than 7, which is normally 'Closed', it will trigger this metric.   I prefer to change it to:</p><p></p><p><img  alt="Capture.PNG" class="jive-image image-2" src="129e8486db1417041dcaf3231f961952.iix" style="height: auto;"/></p><p>and be explicit with it.</p><p></p><p>Just a tip from something I have run across.</p>