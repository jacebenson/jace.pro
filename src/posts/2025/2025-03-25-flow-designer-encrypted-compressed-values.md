---
title: Reading flows encrypted and compressed values
description: >-
  A quick guide on how to read encrypted and compressed values from Flow Designer
  in ServiceNow.
date: '2025-03-25'
tags:
  - servicenow
  - gliderecord
  - workflow
  - flow-designer
  - javascript
redirectFrom:
  - /flow-designer-encrypted-compressed-values/
---

The other day, I was on the community slack, and a question popped up about reading the values for flows (flow designer, subflows, etc).

I was under the impression that the data was all still in the giant sys_variable_value table.

This has changed. Now it’s in the sys_hub_action_instance_v2 table. The baffling part about this table is the data on it is compressed and in base 64.

Anders Figenschow shared a colleague’s solution to decompress and convert form base64 is as follows. 

```javascript
var sys_id = ''; // just put your sys_hub_action_instance_v2 sys_id here
var gr = new GlideRecord('sys_hub_action_instance_v2');
gr.setLimit(1);
gr.addQuery('sys_id', sys_id);
gr.query();
if (gr.next()) {
    var compressedData = gr.getValue('values');
    gs.info("Retrieved base64 encoded data from field.");
    var cs = GlideStringUtil.base64DecodeAsBytes(compressedData);
    var dec = String(GlideCompressionUtil.expandToString(cs));
    gs.info(dec);
}
```

 Now a few notes here.

1. What is GlideCompressionUtil? I’ve not heard of this before.

2. Morten from Norway, wrote [this post about doing this same thing](https://www.servicenow.com/community/workflow-automation-forum/viewing-the-quot-values-quot-field-of-sys-hub-action-instance-v2/td-p/3149163?utm_source=jace.pro&utm_medium=referral&utm_campaign=reading-flow-s-encrypted-and-compressed-values).