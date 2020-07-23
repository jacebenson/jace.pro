---
title: "Finding globally available things"
subtitle: ""
summary: ""
date: 2019-03-13T20:25:56-05:00
---

I was in the middle of restoring my PC and thought "I wonder if I can
view all the globally accessible things?"

Turns out, you can.

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

In an out of box instance I get a big output. Alot of these are old
"Global Business Rules" but some are weird.

# Globally available

-   SNString
    -   ```js
          function String() {"[native code for String.String, arity=1]" }
        ```

-   SNRegExp
    -   ```js
          function RegExp() {
            "[native code, arity=0]"
          }
        ```

-   GlideArrayRecord
    -   Seems to work just like GlideRecord.
-   sys\_meta
    -   This is super interseting. `sys_meta` has a property for every
        table. `sys_meta.sys_user` has a property for every field.
        `sys_meta.sys_user.date_format` has then a property for the
        sys\_dictionary record. The type is
        `com.glide.script.FieldGlideDescriptor`
-   system
    -   This is super interesting. This might be what UI Actions have
        available to them with the `action` variable. `system` has one
        `JavaObject` called action. `system.action` has many things.
    -   canPop
    -   canRunAction
    -   enforceMandatoryOnUpdate
    -   equals
    -   get
    -   getActionName
    -   getActionSysId
    -   getBody
    -   getCategory
    -   getClass
    -   getCondition
    -   getFromType
    -   getGRList
    -   getGlideURI
    -   getGotoURL
    -   getLabel
    -   getName
    -   getOnClick
    -   getOnClickEscaped
    -   getRedirectURL
    -   getRef
    -   getReturnURL
    -   getRunAt
    -   getTableName
    -   getTarget
    -   getType
    -   getUniqueFieldValue
    -   getValues
    -   hashCode
    -   isInsert
    -   isNextRecord
    -   isPreviousRecord
    -   isRedirect
    -   notify
    -   notifyAll
    -   openGlideRecord
    -   process
    -   setCategory
    -   setFromType
    -   setGRList
    -   setGotoURL
    -   setNoPop
    -   setRedirectURL
    -   setRequest
    -   setReturnURL
    -   setTarget
    -   setType
    -   setUniqueField
    -   toString
    -   wait()\| Function \| \|
    -   class\| JavaObject \| \|
    -   glideURI\| JavaObject \| "snd\_xplore.do?" \|
    -   values\| JavaObject \| "{}" \|
    -   noPop\| undefined \| undefined \|
    -   request\| undefined \| undefined \|
    -   uniqueField\| undefined \| undefined \|
    -   actionSysId\| null \| null \|
    -   category\| null \| null \|
    -   redirectURL\| null \| null \|
    -   returnURL\| null \| null \|
    -   GRList
    -   actionName
    -   body
    -   condition
    -   fromType
    -   gotoURL
    -   insert
    -   label
    -   name
    -   nextRecord
    -   onClick
    -   onClickEscaped
    -   previousRecord
    -   redirect
    -   ref
    -   runAt
    -   tableName
    -   target
    -   type
    -   uniqueFieldValue
-   gs
    -   `gs` seems to be a copy of the above
        (`system.action`)\[\#system\]
-   global ***SPECIAL***
-   GlideDBObjectManager ***SPECIAL***
-   GlideNumberManager ***SPECIAL***
-   getUsersForRoleDelegation
-   getRoleDelegatorGroupOptions
-   getRoleDelegatorOptions
-   getMyRoleDelegationGroups
-   getDelegatableRoles
-   cmn\_notif\_device\_listGetViewName
-   cmn\_notif\_deviceGetViewName
-   cxs\_table\_config\_srch\_as\_fldGetChoices
-   getBaseFilter
-   getUserHomepages
-   getRefColumnDictionary
-   getMyRequestIDs
-   closeChange
-   closeProblem
-   closeIncident
-   closeRelatedTasks
-   getStatsOptions
-   dmn\_demand\_stageGetChoices
-   getNextObjNumber
-   saListCis
-   getAllMembersOfMyGroups
-   getGroupMembersGivenGroupID
-   getGroupMembersGivenGroupName
-   hasAccessToDocument
-   global\_simple\_events
-   global\_events
-   GetIDValue
-   emailsToUsers
-   getUserDashboards
-   lastWeek
-   nowDateTime
-   now
-   isAdvancedUI
-   getWeekStart
-   notifDeviceRefQual
-   getGroupsInHierarchy
-   getRelatedGroup
-   getRelatedCI
-   getRelatedRecords
-   workflowTaskTemplateReferenceQualifier
-   GetGroupFilter
-   getDefaultDeliveryPlan
-   getDisplayValueOf
-   limitFieldLength
-   v\_field\_editor\_lengthGetChoices
-   v\_ws\_field\_editor\_lengthGetChoices
-   restrictCatItemsForGuides
-   trim
-   addChoiceType
-   limitFieldType
-   v\_field\_editor\_typeGetChoices
-   sys\_userGetEmailAddress
-   incidentGetCaller
-   incident\_listGetViewName
-   incidentGetViewName
-   padObjNumber
-   getNextObjNumberPadded
-   cmdbCIChildren
-   getDefaultContentType
-   sys\_dictionary\_elementCanWrite
-   sys\_dictionary\_nameCanWrite
-   getDictionaryEntry
-   doesEntryFloat
-   cmdb\_rel\_type\_suggest\_relationshipGetChoices
-   rm\_release\_phase\_ProcessFlowList
-   idea\_stageGetChoices
-   rm\_release\_ProcessFlowList
-   ProposedChangesExist
-   sc\_req\_item\_stage\_DeliveryPlanChoices
-   sc\_req\_item\_stageGetChoices
-   getKBMandatoryFields
-   dmn\_demand\_ProcessFlowList
-   GetReasonForChange
-   cxs\_table\_field\_config\_fieldGetChoices
-   getRoleListIds
-   getRoledUsers
-   addWFVariables
-   addDefaultVariables
-   addVariables
-   addVariableSets
-   wf\_variables
-   getPrimaryCompany
-   getBannerSrc
-   recurseImageParents
-   getBannerText
-   recurseParents
-   getMyGroups
-   deleteAllRecords
-   getCurrencyFilter
-   populatedFilterRefQual
-   getLDAPSources
-   isMandatoryNotification
-   dynamicUserCreation
-   sys\_sg\_master\_item\_tableGetChoices
-   checkAllApprovers
-   isApprovalMine
-   getMyAssignments
-   getMyApprovals
-   getApplicableTemplates
-   getMobileLayoutCatalogs
-   sys\_trigger\_system\_idGetChoices
-   getDefaultKB
-   checkForUnscheduled
-   createProblem
-   globalListen
-   getGroupQualifier
-   getDateFilterOptions
-   historyRecordPresent
-   recordHasUpdateXML
-   areAllPreviewProblemsIgnored
-   updateSetPreviewInstalled
-   kbGetText
-   kbWriteComment
-   homeGetViewName
-   sc\_cat\_itemGetViewName
-   sc\_req\_itemGetViewName
-   NumberManager

# Available in Script Includes

If you define these in a script include it may cause an issue.

-   CALLABLE\_PREFIX
-   gc
-   getChars
-   getDocument
-   getName
-   getParameter
-   getRootElement
-   getType
-   getValue
-   initialize
-   newItem
-   process
-   request
-   responseXML
-   setAnswer
-   setError
-   type
