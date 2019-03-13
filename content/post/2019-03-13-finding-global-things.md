---
title: Finding globally available things
date: 2019-03-13
layout: post
keywords:
- "global"
- "variables"
- "SNString"
- "SNRegExp"
- "GlideArrayRecord"
- "sys_meta"
- "system"
- "gs"
- "getUsersForRoleDelegation"
- "getRoleDelegatorGroupOptions"
- "getRoleDelegatorOptions"
- "getMyRoleDelegationGroups"
- "getDelegatableRoles"
- "cmn_notif_device_listGetViewName"
- "cmn_notif_deviceGetViewName"
- "cxs_table_config_srch_as_fldGetChoices"
- "getBaseFilter"
- "getUserHomepages"
- "getRefColumnDictionary"
- "getMyRequestIDs"
- "closeChange"
- "closeProblem"
- "closeIncident"
- "closeRelatedTasks"
- "getStatsOptions"
- "dmn_demand_stageGetChoices"
- "getNextObjNumber"
- "saListCis"
- "getAllMembersOfMyGroups"
- "getGroupMembersGivenGroupID"
- "getGroupMembersGivenGroupName"
- "getGroupMembers"
- "hasAccessToDocument"
- "global_simple_events"
- "global_events"
- "GetIDValue"
- "emailsToUsers"
- "getUserDashboards"
- "lastWeek"
- "nowDateTime"
- "now"
- "isAdvancedUI"
- "getWeekStart"
- "notifDeviceRefQual"
- "getGroupsInHierarchy"
- "getRelatedGroup"
- "getRelatedCI"
- "getRelatedRecords"
- "workflowTaskTemplateReferenceQualifier"
- "GetGroupFilter"
- "getDefaultDeliveryPlan"
- "getDisplayValueOf"
- "limitFieldLength"
- "v_field_editor_lengthGetChoices"
- "v_ws_field_editor_lengthGetChoices"
- "restrictCatItemsForGuides"
- "trim"
- "addChoiceType"
- "limitFieldType"
- "v_field_editor_typeGetChoices"
- "sys_userGetEmailAddress"
- "incidentGetCaller"
- "incident_listGetViewName"
- "incidentGetViewName"
- "padObjNumber"
- "getNextObjNumberPadded"
- "cmdbCIChildren"
- "getDefaultContentType"
- "sys_dictionary_elementCanWrite"
- "sys_dictionary_nameCanWrite"
- "getDictionaryEntry"
- "doesEntryFloat"
- "cmdb_rel_type_suggest_relationshipGetChoices"
- "rm_release_phase_ProcessFlowList"
- "idea_stageGetChoices"
- "rm_release_ProcessFlowList"
- "ProposedChangesExist"
- "sc_req_item_stage_DeliveryPlanChoices"
- "sc_req_item_stageGetChoices"
- "getKBMandatoryFields"
- "dmn_demand_ProcessFlowList"
- "GetReasonForChange"
- "cxs_table_field_config_fieldGetChoices"
- "getRoleListIds"
- "getRoledUsers"
- "addWFVariables"
- "addDefaultVariables"
- "addVariables"
- "addVariableSets"
- "wf_variables"
- "getPrimaryCompany"
- "getBannerSrc"
- "recurseImageParents"
- "getBannerText"
- "recurseParents"
- "getMyGroups"
- "deleteAllRecords"
- "getCurrencyFilter"
- "populatedFilterRefQual"
- "getLDAPSources"
- "isMandatoryNotification"
- "dynamicUserCreation"
- "sys_sg_master_item_tableGetChoices"
- "checkAllApprovers"
- "isApprovalMine"
- "getMyAssignments"
- "getMyApprovals"
- "getApplicableTemplates"
- "getMobileLayoutCatalogs"
- "sys_trigger_system_idGetChoices"
- "getDefaultKB"
- "checkForUnscheduled"
- "createProblem"
- "globalListen"
- "getGroupQualifier"
- "getDateFilterOptions"
- "historyRecordPresent"
- "recordHasUpdateXML"
- "areAllPreviewProblemsIgnored"
- "updateSetPreviewInstalled"
- "kbGetText"
- "kbWriteComment"
- "homeGetViewName"
- "sc_cat_itemGetViewName"
- "sc_req_itemGetViewName"
- "Class"
- "global"
- "current"
- "previous"
- "__script: string"
- "NumberManager"
- "GlideDBObjectManager"
- "GlideNumberManager"
---

I was in the middle of restoring my PC and thought "I wonder if I can view all the globally accessible things?"

Turns out, you can.
<!--more-->

```js
Object.keys(this).forEach(function(thing){
try {
  var type_of_thing = eval('typeof ' + thing);
  if(type_of_thing === 'object'){
    for(var prop in thing){
      gs.info('-: ' + prop);
    }
  }
  gs.info(thing + ': ' + eval('typeof ' + thing));
} catch(e) {
  gs.info('error',JSON.stringify(e));
}
});
```

In an out of box instance I get a big output;

# Globally available

* SNString
  * ```js
      function String() {"[native code for String.String, arity=1]" }
    ```
* SNRegExp
  * ```js
      function RegExp() {
        "[native code, arity=0]"
      }
    ```
* GlideArrayRecord
  * Seems to work just like GlideRecord.
* sys_meta
  * ```
      This is super interseting.

      `sys_meta` has a property for every table.

      `sys_meta.sys_user` has a property for every field.

      `sys_meta.sys_user.date_format` has then a property for the sys_dictionary record.  The type is `com.glide.script.FieldGlideDescriptor`
    ```
* system
  * ```
      This is super interesting.  This might be what UI Actions have available to them with the `action` variable.

      `system` has one `JavaObject` called action.

      `system.action` has many things.
  * 
    | Name | Type | Value |
    |canPop()| Function | |	
    |canRunAction()| Function | |	
    |enforceMandatoryOnUpdate()| Function | |	
    |equals()| Function | |	
    |get()| Function | |	
    |getActionName()| Function | |	
    |getActionSysId()| Function | |	
    |getBody()| Function | |	
    |getCategory()| Function | |	
    |getClass()| Function | |	
    |getCondition()| Function | |	
    |getFromType()| Function | |	
    |getGRList()| Function | |	
    |getGlideURI()| Function | |	
    |getGotoURL()| Function | |	
    |getLabel()| Function | |	
    |getName()| Function | |	
    |getOnClick()| Function | |	
    |getOnClickEscaped()| Function | |	
    |getRedirectURL()| Function | |	
    |getRef()| Function | |	
    |getReturnURL()| Function | |	
    |getRunAt()| Function | |	
    |getTableName()| Function | |	
    |getTarget()| Function | |	
    |getType()| Function | |	
    |getUniqueFieldValue()| Function | |	
    |getValues()| Function | |	
    |hashCode()| Function | |	
    |isInsert()| Function | |	
    |isNextRecord()| Function | |	
    |isPreviousRecord()| Function | |	
    |isRedirect()| Function | |	
    |notify()| Function | |	
    |notifyAll()| Function | |	
    |openGlideRecord()| Function | |	
    |process()| Function | |	
    |setCategory()| Function | |	
    |setFromType()| Function | |	
    |setGRList()| Function | |	
    |setGotoURL()| Function | |	
    |setNoPop()| Function | |	
    |setRedirectURL()| Function | |	
    |setRequest()| Function | |	
    |setReturnURL()| Function | |	
    |setTarget()| Function | |	
    |setType()| Function | |	
    |setUniqueField()| Function | |	
    |toString()| Function | |	
    |wait()| Function | |
    |class| JavaObject | |
    |glideURI| JavaObject | "snd_xplore.do?" |
    |values| JavaObject | "{}" |
    |noPop| undefined | undefined |
    |request| undefined | undefined |
    |uniqueField| undefined | undefined |
    |actionSysId| null | null |
    |category| null | null |
    |redirectURL| null | null |
    |returnURL| null | null |
    |GRList | \_\_unknown\_\_ | "[Property access error: JavaException: java.lang.SecurityException: Illegal access to getter method getGRList in class com.glide.script.Action]" |
    |actionName | \_\_unknown\_\_ | "[Property access error: JavaException: java.lang.SecurityException: Illegal access to getter method getActionName in class com.glide.script.ActionDescriptor]" |
    |body | \_\_unknown\_\_ | "[Property access error: JavaException: java.lang.SecurityException: Illegal access to getter method getBody in class com.glide.script.ActionDescriptor]" |
    |condition | \_\_unknown\_\_ | "[Property access error: JavaException: java.lang.SecurityException: Illegal access to getter method getCondition in class com.glide.script.ActionDescriptor]" |
    |fromType | \_\_unknown\_\_ | "[Property access error: JavaException: java.lang.SecurityException: Illegal access to getter method getFromType in class com.glide.script.Action]" |
    |gotoURL | \_\_unknown\_\_ | "[Property access error: JavaException: java.lang.SecurityException: Illegal access to getter method getGotoURL in class com.glide.script.Action]" |
    |insert | \_\_unknown\_\_ | "[Property access error: JavaException: java.lang.SecurityException: Illegal access to getter method isInsert in class com.glide.script.ActionDescriptor]" |
    |label | \_\_unknown\_\_ | "[Property access error: JavaException: java.lang.SecurityException: Illegal access to getter method getLabel in class com.glide.script.ActionDescriptor]" |
    |name | \_\_unknown\_\_ | "[Property access error: JavaException: java.lang.SecurityException: Illegal access to getter method getName in class com.glide.script.ActionDescriptor]" |
    |nextRecord | \_\_unknown\_\_ | "[Property access error: JavaException: java.lang.SecurityException: Illegal access to getter method isNextRecord in class com.glide.script.ActionDescriptor]" |
    |onClick | \_\_unknown\_\_ | "[Property access error: JavaException: java.lang.SecurityException: Illegal access to getter method getOnClick in class com.glide.script.ActionDescriptor]" |
    |onClickEscaped | \_\_unknown\_\_ | "[Property access error: JavaException: java.lang.SecurityException: Illegal access to getter method getOnClickEscaped in class com.glide.script.ActionDescriptor]" |
    |previousRecord | \_\_unknown\_\_ | "[Property access error: JavaException: java.lang.SecurityException: Illegal access to getter method isPreviousRecord in class com.glide.script.ActionDescriptor]" |
    |redirect | \_\_unknown\_\_ | "[Property access error: JavaException: java.lang.SecurityException: Illegal access to getter method isRedirect in class com.glide.script.Action]" |
    |ref | \_\_unknown\_\_ | "[Property access error: JavaException: java.lang.SecurityException: Illegal access to getter method getRef in class com.glide.script.ActionDescriptor]" |
    |runAt | \_\_unknown\_\_ | "[Property access error: JavaException: java.lang.SecurityException: Illegal access to getter method getRunAt in class com.glide.script.ActionDescriptor]" |
    |tableName | \_\_unknown\_\_ | "[Property access error: JavaException: java.lang.SecurityException: Illegal access to getter method getTableName in class com.glide.script.ActionDescriptor]" |
    |target | \_\_unknown\_\_ | "[Property access error: JavaException: java.lang.SecurityException: Illegal access to getter method getTarget in class com.glide.script.Action]" |
    |type | \_\_unknown\_\_ | "[Property access error: JavaException: java.lang.SecurityException: Illegal access to getter method getType in class com.glide.script.ActionDescriptor]" |
    |uniqueFieldValue | \_\_unknown\_\_ | "[Property access error: JavaException: java.lang.SecurityException: Illegal access to getter method getUniqueFieldValue in class com.glide.script.Action]" |
* gs
  * `gs` seems to be a copy of the above (`system.action`)[#system]
* global ***SPECIAL***
* GlideDBObjectManager ***SPECIAL***
* GlideNumberManager ***SPECIAL***
* getUsersForRoleDelegation
* getRoleDelegatorGroupOptions
* getRoleDelegatorOptions
* getMyRoleDelegationGroups
* getDelegatableRoles
* cmn_notif_device_listGetViewName
* cmn_notif_deviceGetViewName
* cxs_table_config_srch_as_fldGetChoices
* getBaseFilter
* getUserHomepages
* getRefColumnDictionary
* getMyRequestIDs
* closeChange
* closeProblem
* closeIncident
* closeRelatedTasks
* getStatsOptions
* dmn_demand_stageGetChoices
* getNextObjNumber
* saListCis
* getAllMembersOfMyGroups
* getGroupMembersGivenGroupID
* getGroupMembersGivenGroupName
* hasAccessToDocument
* global_simple_events
* global_events
* GetIDValue
* emailsToUsers
* getUserDashboards
* lastWeek
* nowDateTime
* now
* isAdvancedUI
* getWeekStart
* notifDeviceRefQual
* getGroupsInHierarchy
* getRelatedGroup
* getRelatedCI
* getRelatedRecords
* workflowTaskTemplateReferenceQualifier
* GetGroupFilter
* getDefaultDeliveryPlan
* getDisplayValueOf
* limitFieldLength
* v_field_editor_lengthGetChoices
* v_ws_field_editor_lengthGetChoices
* restrictCatItemsForGuides
* trim
* addChoiceType
* limitFieldType
* v_field_editor_typeGetChoices
* sys_userGetEmailAddress
* incidentGetCaller
* incident_listGetViewName
* incidentGetViewName
* padObjNumber
* getNextObjNumberPadded
* cmdbCIChildren
* getDefaultContentType
* sys_dictionary_elementCanWrite
* sys_dictionary_nameCanWrite
* getDictionaryEntry
* doesEntryFloat
* cmdb_rel_type_suggest_relationshipGetChoices
* rm_release_phase_ProcessFlowList
* idea_stageGetChoices
* rm_release_ProcessFlowList
* ProposedChangesExist
* sc_req_item_stage_DeliveryPlanChoices
* sc_req_item_stageGetChoices
* getKBMandatoryFields
* dmn_demand_ProcessFlowList
* GetReasonForChange
* cxs_table_field_config_fieldGetChoices
* getRoleListIds
* getRoledUsers
* addWFVariables
* addDefaultVariables
* addVariables
* addVariableSets
* wf_variables
* getPrimaryCompany
* getBannerSrc
* recurseImageParents
* getBannerText
* recurseParents
* getMyGroups
* deleteAllRecords
* getCurrencyFilter
* populatedFilterRefQual
* getLDAPSources
* isMandatoryNotification
* dynamicUserCreation
* sys_sg_master_item_tableGetChoices
* checkAllApprovers
* isApprovalMine
* getMyAssignments
* getMyApprovals
* getApplicableTemplates
* getMobileLayoutCatalogs
* sys_trigger_system_idGetChoices
* getDefaultKB
* checkForUnscheduled
* createProblem
* globalListen
* getGroupQualifier
* getDateFilterOptions
* historyRecordPresent
* recordHasUpdateXML
* areAllPreviewProblemsIgnored
* updateSetPreviewInstalled
* kbGetText
* kbWriteComment
* homeGetViewName
* sc_cat_itemGetViewName
* sc_req_itemGetViewName
* NumberManager

# Available in Script Includes

If you define these in a script include it may cause an issue.

* CALLABLE_PREFIX
* gc
* getChars
* getDocument
* getName
* getParameter
* getRootElement
* getType
* getValue
* initialize
* newItem
* process
* request
* responseXML
* setAnswer
* setError
* type
