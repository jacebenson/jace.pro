---
title: How to activate plugins via script
description: "Sometimes you have a whole bunch of plugins to install. No reason to keep your screen busy, you can script it, here's how.\r\n\r\nSome smart person named Ashby p..."
date: '2019-07-21'
tags:
  - servicenow
  - javascript
  - tutorial
  - troubleshooting
redirectFrom:
  - /how-to-activate-plugins-via-script/
  - /p/2019-07-21-how-to-activate-plugins-via-script/
---

<!--StartFragment-->

Sometimes you have a whole bunch of plugins to install. No reason to keep your screen busy, you can script it, here's how.

Some smart person named Ashby posted about this. I haven't tested it out, but this seems promising and likely undocumented.

<!--EndFragment-->

<!--StartFragment-->

```javascript
//Partial Version
//you can check following URL to see if the work is finished. It is finished when the completion time is set and the percent complete is 100.
//<instance>/sys_execution_tracker_list.do?sysparm_query=name%3DPlugin%20Installer
var plugins = [];
plugins.push('com.snc.pa.change');
plugins.push('com.snc.pa.problem');
plugins.push('com.snc.pa.premium');
plugins.push('com.snc.pa.solution.library');
var main = new GlideMultiPluginManagerWorker();
main.setPluginIds(plugins);
main.setProgressName("Plugin Installer");
main.setBackground(true);
main.start();
```

<!--EndFragment-->

<!--StartFragment-->

Source: <https://community.servicenow.com/community?id=community_question&sys_id=e6db5e4bdb47ab002e8c2183ca9619a2#answer_a8ddb159db407388feb1a851ca9619fa>

<!--EndFragment-->