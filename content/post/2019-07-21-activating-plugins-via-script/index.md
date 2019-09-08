---
date: '2019-07-21'
keywords:
- plugins
- GlideMultiPluginManagerWorker
layout: post
title: Activating plugins via script
authors: ["jace"]
---

Sometimes you have a whole bunch of plugins to install. No reason to
keep your screen busy, you can script it, here's how.

Some smart person named Ashby posted about this. I haven't tested it
out, but this seems promsing and likely undocumented.

``` {.js}
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

Source:
https://community.servicenow.com/community?id=community\_question&sys\_id=e6db5e4bdb47ab002e8c2183ca9619a2\#answer\_a8ddb159db407388feb1a851ca9619fa
