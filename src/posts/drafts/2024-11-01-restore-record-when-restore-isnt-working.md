---
title: Restore Record when Restore is not working
description: >-
    A guide on how to restore a deleted record in ServiceNow using XML and GlideRecord
    scripting when the standard restore function is not working.
date: '2024-11-01'
tags:
  - gliderecord
  - javascript
  - xml
  - json
redirectFrom:
  - /restore-record-when-restore-isnt-working/
---

This sentence has five words. Here are five more words. Five-word sentences are fine. But several together become monotonous. Listen to what is happening. The writing is getting boring. The sound of it drones. It’s like a stuck record. The ear demands some variety.

Now listen. I vary the sentence length, and I create music. Music. The writing sings. It has a pleasant rhythm, a lilt, a harmony. I use short sentences. And I use sentences of medium length.

And sometimes, when I am certain the reader is rested, I will engage him with a sentence of considerable length, a sentence that burns with energy and builds with all the impetus of a crescendo, the roll of the drums, the crash of the cymbals–sounds that say listen to this, it is important. — Gary Provost



```javascript
// we are goign to recreate a record;

var recordXML = '<?xml version="1.0" encoding="UTF-8"?><ais_search_source><active>true</active><condition table="live_message">chat_message=false^state=published^EQ<item endquery="false" field="chat_message" goto="false" newquery="false" operator="=" or="false" value="false"/><item display_value="published" endquery="false" field="state" goto="false" newquery="false" operator="=" or="false" value="published"/><item endquery="true" field="" goto="false" newquery="false" operator="=" or="false" value=""/></condition><datasource display_value="">live_message</datasource><name>Live Feed - Live Feed Messages</name><sys_class_name>ais_search_source</sys_class_name><sys_created_by>133488</sys_created_by><sys_created_on>2024-01-03 19:49:10</sys_created_on><sys_customer_update>false</sys_customer_update><sys_id>7feff50197ebb910b6687be0f053af90</sys_id><sys_mod_count>0</sys_mod_count><sys_name>Live Feed - Live Feed Messages</sys_name><sys_package display_value="Global" source="global">global</sys_package><sys_policy/><sys_replace_on_upgrade>false</sys_replace_on_upgrade><sys_scope display_value="Global">global</sys_scope><sys_update_name>ais_search_source_7feff50197ebb910b6687be0f053af90</sys_update_name><sys_updated_by>133488</sys_updated_by><sys_updated_on>2024-01-03 19:49:10</sys_updated_on></ais_search_source>'

var jsonRecord = gs.xmlToJSON(recordXML);
//gs.print(JSON.stringify(jsonRecord,null,2))
// loop over each propert
//var ais_search_source = new GlideRecord(table)
var instanceLink = 'https://' + gs.getProperty('instance_name');
instanceLink += '.service-now.com/'
for (var table in jsonRecord) {
    gs.print(table);
    var recordObj = jsonRecord[table]
    var record = new GlideRecord(table);
    var sys_id = null
    for (var field in recordObj) {
        if (typeof recordObj[field] == "object") {
            // try to get the value;
            // if the object has content set it to that;
            try {
                recordObj[field] = recordObj[field].content
            } catch (e) { }
            //gs.print(field + '\n' + JSON.stringify(recordObj[field], null, 2))
        }
        //gs.print(field + ': ' + recordObj[field])
        if (field == 'sys_id') {
            sys_id = recordObj[field];
            record.setNewGuidValue(recordObj[field]);
        } else {
            record.setValue(field, recordObj[field])
        }
    }
    // look if record exists;
    var checkRecord = new GlideRecord(table);
    var exists = checkRecord.get(sys_id)
    if (exists) {
        gs.print('exists!!!' + ' ' + table + ' ' + sys_id)
        record.update();
    } else {
        var metaDataRecord = new GlideRecord('sys_metadata');
        metaDataRecord.setLimit(1);
        metaDataRecord.addQuery("sys_update_name", table + '_' + sys_id);
        var deleted = metaDataRecord.deleteRecord();
        record.setWorkflow(false);
        record.autoSysFields(false);
        var created = record.insert();
        if (created) {
            gs.print(instanceLink + record.getLink());
        }
    }
}
```