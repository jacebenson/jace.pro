---
title: Export to CSV (Custom)
author: Jace Benson
date: 2022-06-07T00:32:04.482Z
draft: false
stage: research
prism: false
---
<!--StartFragment-->

**What is the post about?**

Exporting to a custom CSV format.  There's probably a better way to do this.  Here's a way I've done it.

**What things would help with writing the post**

<!--EndFragment-->

```javascript
// Export to CSV 
var attachment = new GlideSysAttachment();
var data = "Number,Name\n"
var gr = new GlideRecord('incident');
gr.addQuery('active', 'true');
gr.query();
while(gr.next()){
	data += gr.number + "," + gr.caller_id.name + "\n";
}
incident = new GlideRecord('incident');
incident.get('85071a1347c12200e0ef563dbb9a71c1'); //Gets the record I want to attach the file too

var newFile = attachment.write(incident, 'Incidents.csv', 'text/csv', data);
```