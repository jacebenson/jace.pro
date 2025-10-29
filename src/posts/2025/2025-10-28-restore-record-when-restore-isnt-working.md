---
title: Restore Record when Restore is not working
description: >-
    A guide on how to restore a deleted record in ServiceNow using XML and GlideRecord
    scripting when the standard restore function is not working.
date: '2025-10-28'
tags:
  - gliderecord
  - javascript
  - xml
  - json
redirectFrom:
  - /restore-record-when-restore-isnt-working/
---

Sometimes in ServiceNow, the standard restore function for deleted records may not work as expected. In such cases, you can manually recreate the record using its XML representation and GlideRecord scripting.

```javascript
// we are going to recreate a record;

var recordXML = '<?xml version="1.0" encoding="UTF-8"?><ais_search_source><active>true</active><condition table="live_message">chat_message=false^state=published^EQ<item endquery="false" field="chat_message" goto="false" newquery="false" operator="=" or="false" value="false"/><item display_value="published" endquery="false" field="state" goto="false" newquery="false" operator="=" or="false" value="published"/><item endquery="true" field="" goto="false" newquery="false" operator="=" or="false" value=""/></condition><datasource display_value="">live_message</datasource><name>Live Feed - Live Feed Messages</name><sys_class_name>ais_search_source</sys_class_name><sys_created_by>133488</sys_created_by><sys_created_on>2024-01-03 19:49:10</sys_created_on><sys_customer_update>false</sys_customer_update><sys_id>7feff50197ebb910b6687be0f053af90</sys_id><sys_mod_count>0</sys_mod_count><sys_name>Live Feed - Live Feed Messages</sys_name><sys_package display_value="Global" source="global">global</sys_package><sys_policy/><sys_replace_on_upgrade>false</sys_replace_on_upgrade><sys_scope display_value="Global">global</sys_scope><sys_update_name>ais_search_source_7feff50197ebb910b6687be0f053af90</sys_update_name><sys_updated_by>133488</sys_updated_by><sys_updated_on>2024-01-03 19:49:10</sys_updated_on></ais_search_source>'

var jsonRecord = gs.xmlToJSON(recordXML);
//gs.print(JSON.stringify(jsonRecord,null,2))
// loop over each propert
//var ais_search_source = new GlideRecord(table)
var instanceLink = 'https://' + gs.getProperty('instance_name');
instanceLink += '.service-now.com/'
for (var table in jsonRecord) {
    gs.info(table);
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
        gs.info('exists!!!' + ' ' + table + ' ' + sys_id)
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
            gs.info(instanceLink + record.getLink());
        }
    }
}
```
This script takes the XML representation of a deleted record, converts it to JSON, and then recreates the record in the specified table using GlideRecord. It first checks if the record already exists to avoid duplicates. If the record does not exist, it removes any metadata associated with the deleted record and inserts the new record into the database.