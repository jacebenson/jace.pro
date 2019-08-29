---
aliases:
- '/GlideSPScriptable/'
- '/glidespscriptable/'
date: '2016-01-01'
keywords:
- addQueryString
- buildThemeVariableModel
- canReadRecord
- equals
- getCatalogItem
- getClass
- getDisplayValue
- getField
- getFields
- getFieldsObject
- getFilterBreadcrumbs
- getForm
- getGuide
- getHTTPS
- getInstanceRecord
- getItemDisplayPrice
- getKBCategoryArticles
- getKBCategoryArticleSummaries
- getKBCount
- getKBRecord
- getKBSiblingCategories
- getKBTopCategoryID
- getKBTopicArticles
- getListColumns
- getMenuHREF
- getMenuItems
- getParameter
- getPortalGR
- getPortalRecord
- getRecord
- getRecordDisplayValues
- getRecordElements
- getRecordValues
- getRecordVariables
- getRecordVariablesArray
- getRectangleRecord
- getRelatedList
- getSCRecord
- getStream
- getStreamEntries
- getSubCategories
- getUserInitials
- getValue
- getValues
- getVariablesArray
- getWidget
- getWidgetFromInstance
- getWidgetFromRectangle
- getWidgetParameters
- getWidgetScope
- hashCode
- isServicePortalURL
- log
- logSearch
- logStat
- mapUrlToSPUrl
- notify
- notifyAll
- saveRecord
- saveVariables
- showCatalogPrices
- stripHTML
- translateTemplate
- wait
layout: page
tags:
- 'server-side-api'
title: SP
url: '/sp/'
---

# What is SP

I really dislike when ServiceNow doesn't share the functions they make
available and use in their code in front of us. See this [thread on the
community](https://community.servicenow.com/thread/280017). Anyways,
there are efforts to keep track of these things. I know I've contributed
to this page on
[serviceportal.io](https://serviceportal.io/docs/documentation/widget_server_script_apis.md).
s You can get the list of all the methods available by running this in
Xplore;

``` {.js}
var sp = new GlideSPScriptable();
sp;
```

| Method                                                          | Documented |
|-----------------------------------------------------------------|------------|
| addQueryString                                                  | No         |
| [buildThemeVariableModel](#buildthemevariablemodel)             | No         |
| [canReadRecord](#canreadrecord)                                 | Yes        |
| equals                                                          | No         |
| [getCatalogItem](#getcatalogitem)                               | Yes        |
| getClass                                                        | No         |
| [getDisplayValue](#getdisplayvalue)                             | Yes        |
| [getField](#getfield)                                           | Yes        |
| [getFields](#getfields)                                         | Yes        |
| [getFieldsObject](#getfieldsobject)                             | Yes        |
| [getFilterBreadcrumbs](#getfilterbreadcrumbs)                   | No         |
| [getForm](#getform)                                             | Yes        |
| [getGuide](#getguide)                                           | No         |
| getHTTPS                                                        | No         |
| [getInstanceRecord](#getinstancerecord)                         | No         |
| getItemDisplayPrice                                             | No         |
| [getKBCategoryArticles](#getkbcategoryarticles)                 | Yes        |
| [getKBCategoryArticleSummaries](#getkbcategoryarticlesummaries) | Yes        |
| [getKBCount](#getkbcount)                                       | Yes        |
| [getKBRecord](#getkbrecord)                                     | No         |
| [getKBSiblingCategories](#getkbsiblingcategories)               | No         |
| [getKBTopCategoryID](#getkbtopcategoryid)                       | No         |
| [getKBTopicArticles](#getkbtopicarticles)                       | No         |
| [getListColumns](#getlistcolumns)                               | Yes        |
| [getMenuHREF](#getmenuhref)                                     | Yes        |
| [getMenuItems](#getmenuitems)                                   | Yes        |
| [getParameter](#getparameter)                                   | Yes        |
| getPortalGR                                                     | No         |
| [getPortalRecord](#getportalrecord)                             | Yes        |
| [getRecord](#getrecord)                                         | Yes        |
| [getRecordDisplayValues](#getrecorddisplayvalues)               | Yes        |
| [getRecordElements](#getrecordelements)                         | Yes        |
| [getRecordValues](#getrecordvalues)                             | Yes        |
| getRecordVariables                                              | No         |
| [getRecordVariablesArray](#getrecordvariablesarray)             | No         |
| getRectangleRecord                                              | No         |
| [getRelatedList](#getrelatedlist)                               | No         |
| [getSCRecord](#getscrecord)                                     | No         |
| [getStream](#getstream)                                         | Yes        |
| [getStreamEntries](#getstreamentries)                           | No         |
| getSubCategories                                                | No         |
| [getUserInitials](#getuserinitials)                             | Yes        |
| [getValue](#getvalue)                                           | Yes        |
| [getValues](#getvalues)                                         | Yes        |
| [getVariablesArray](#getvariablesarray)                         | No         |
| [getWidget](#getwidget)                                         | Yes        |
| [getWidgetFromInstance](#getwidgetfrominstance)                 | No         |
| getWidgetFromRectangle                                          | No         |
| getWidgetParameters                                             | No         |
| getWidgetScope                                                  | No         |
| hashCode                                                        | No         |
| [isServicePortalURL](#isserviceportalurl)                       | No         |
| [log](#log)                                                     | No         |
| [logSearch](#logsearch)                                         | No         |
| [logStat](#logstat)                                             | No         |
| [mapUrlToSPUrl](#mapurltospurl)                                 | No         |
| notify                                                          | No         |
| notifyAll                                                       | No         |
| [saveRecord](#saverecord)                                       | No         |
| [saveVariables](#savevariables)                                 | No         |
| [showCatalogPrices](#showcatalogprices)                         | No         |
| [stripHTML](#striphtml)                                         | No         |
| [translateTemplate](#translatetemplate)                         | No         |
| wait                                                            | No         |

## Documented

### canReadRecord

| Method                                                                                                                                 | Notes |
|----------------------------------------------------------------------------------------------------------------------------------------|-------|
| [canReadRecord(GlideRecord)](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-canReadRecord_GR)                   |       |
| [canReadRecord(string table, string sys\_id)](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-canReadRecord_S_S) |       |

``` {.js}
// Returns true if the user can read the specified GlideRecord.
// source: SQANDA Create Question[sqanda-create-question] line 40:
if (!$sp.canReadRecord(questionGR)){

}
// source: SC Popular Items[cbcacf13cb21020000f8d856634c9ca0] line 14:
$sp.canReadRecord(
   "sc_cat_item",
   count.cat_item.sys_id.getDisplayValue()
);
```

### getCatalogItem

| Method                                                                                                                            | Notes |
|-----------------------------------------------------------------------------------------------------------------------------------|-------|
| [getCatalogItem(string sys\_id)](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getCatalogItem_S)          |       |
| [getCatalogItem(string sys\_id, boolean)](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getCatalogItem_S) |       |

``` {.js}
// Returns a model and view model for a sc_cat_item or
// sc_cat_item_guide.
// source: SC Catalog Item[widget-sc-cat-item] line 50
data.sc_cat_item = $sp.getCatalogItem(data.sys_id, true);
// source: sp-variable-editor[sp-variable-editor] line 25
data.sc_cat_item = $sp.getCatalogItem(
    gr.cat_item,
    !!options.isOrdering,
    targetTable
);
```

### getKBCategoryArticleSummaries

[getKBCategoryArticleSummaries(sys\_id, number,
maxChars)](https://developer.servicenow.com/app.do#!/api_doc?v=kingston&id=GSPS-getKBCategoryArticleSummaries_S_N_N)

Returns Knowledge Base article summaries in the specified category and
its subcategories.

``` {.js}
// KB Categories - KBv3[ee307070d7201200a9addd173e24d4da]
/* Line 17: */        if (kbCount < 500) { // if more than 500 articles, don't iterate to get viewable counts
/* Line 18: */          var arts = $sp.getKBCategoryArticleSummaries(cats.getUniqueValue(), 0, 0);
/* Line 19: */          articleCount = arts.length;

// KB Category Page[fb5d068cd7610200a9ad1e173e24d400]
/* Line 13: */  data.categoryDisplay = kb_cat.getDisplayValue();
/* Line 14: */  data.items = $sp.getKBCategoryArticleSummaries(data.category, 0, 250);
/* Line 15: */}
```

### getDisplayValue

[getDisplayValue(stringfield)](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getDisplayValue_S)

``` {.js}
// Returns a display value from a field on a record in this order:
// 1. The widget's sp_instance* record
// 2.
// source: SC Catalog Item[widget-sc-cat-item] line 4
data.sc_catalog_page = $sp.getDisplayValue("sc_catalog_page");
```

### getField

[getField(GlideRecord, string
field)](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getField_GR_S)

``` {.js}
// Returns {display_value, label, type, value} for a given field
// on a GlideRecord.
// source: Approval Info[33442352cb30020000f8d856634c9c3f] line 21
fields.push($sp.getField(
    gr,
    'sys_updated_on'
));
```

### getFields

[getFields(GlideRecord, string
fields)](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getFields_GR_S)

``` {.js}
// Like getField Checks the specified field names, and returns
// a comma seperated list of valid names.
// source: Approval Info[33442352cb30020000f8d856634c9c3f] line 18
var fields = $sp.getFields(
    gr,
    'state,sys_created_on'
);
```

### getFieldsObject

[getFieldsObject(GlideRecord, string
fields)](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getFieldsObject_GR_S)

``` {.js}
// Checks the specified field names, and returns an object
// containing the valid names.
// source: Approval Record[525a2752cb30020000f8d856634c9cfd] line 15
var t = {};
t = $sp.getFieldsObject(
    task,
    'number,short_description,opened_by,requested_by,start_date'
);
```

### getForm

| Method                                                                                                                                | Notes |
|---------------------------------------------------------------------------------------------------------------------------------------|-------|
| [getForm(string table, string sys\_id)](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getForm_S_S)            |       |
| [getForm(string table, string sys\_id, string query, string view)](//.service-now.com/sp_widget_list.do?sysparm_query=id=widget-form) |       |

``` {.js}
// Returns the form.
// If no view is passed, returns the form as it appears on view 'sp'
// source: User Profile[user-profile] line 22
$sp.getForm("live_profile", data.liveProfileID);
// source: Form[widget-form] line 63
data.f = $sp.getForm(data.table, data.sys_id, data.query, data.view);
```

### getListColumns

[getListColumns(string table, string
view)](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getListColumns_S_S)

``` {.js}
// Returns a list of the specified table's columns in the specified
// view
// source: Data Table[widget-data-table] line 37
data.fields = $sp.getListColumns(data.table, data.view);
```

### getMenuHREF

[getMenuHREF(GlideRecord)](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getMenuHREF_GR)

``` {.js}
// Returns the (?id=) portion of the URL based on the sp_menu type.
// source: Icon Link[3caa67afcb13020000f8d856634c9c2e] line 3
data.href = $sp.getMenuHREF(gr);
```

### getMenuItems

[getMenuItems(string
sys\_id)](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getMenuItems_S)

``` {.js}
// Returns the menu items for the specified instance.
// source Header Menu[5ef595c1cb12020000f8d856634c9c6e] line 8
data.menu.items = $sp.getMenuItems(menu_id);
```

### getParameter

[getParameter(string)](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getParameter_S)

``` {.js}
// Returns the value of a given key from the query string or post body.
// source: Form[widget-form] line 37
data.query = $sp.getParameter("query") || options.query;
```

### getPortalRecord

[getPortalRecord()](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getPortalRecord)

``` {.js}
// Returns the portal's GlideRecord.
// source: Subscribed Questions[sqanda-subscribed-questions] line 2
data.knowledgeBase = $sp.getPortalRecord().getValue("sqanda_knowledge_base");
```

### getRecord

| Method                                                                                                       | Notes                                       |
|--------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| [getRecord()](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getRecord)               |                                             |
| [getRecord(string table, string sys\_id)](//.service-now.com/sp_widget_list.do?sysparm_query=id=widget-form) | Not Documented, only works in global scope. |

``` {.js}
// Returns the GlideRecord for the current sp_instance\*.
// Returns null if the widget is embedded by another widget.
// source: Request Fields[96cf39f3d7230200a9addd173e24d412] line 2
var gr = $sp.getRecord();
// source: Form[widget-form] line 54
var rec = $sp.getRecord(data.table, data.sys_id);
```

Note: Feedback submitted on 04/24/2018 page:
<https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getRecord>

``` {.txt}
What are you trying to do now? Look up information
Were you successful? no
Tell us more
$sp.getRecord is missing information.
getRecord(string table, string sys_id) as depicted in OOB widget `widget-form` line54
var rec = $sp.getRecord(data.table, data.sys_id);

This however doesnt work in scoped apps.
```

### getRecordDisplayValues

[getRecordDisplayValues(object data, GlideRecord, string
fields)](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getRecordDispValues_O_GR_S)

``` {.js}
// Copies display values for the specified field names
// from a GlideRecord into the data parameter.
// source: Catalog Content[sc-cat-content] line 26
$sp.getRecordDisplayValues(c, gr, 'picture');
```

### getRecordElements

[getRecordElements(object data, GlideRecord, string
fields)](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getRecordElements_O_GR_S)

``` {.js}
// Copies the value and display value for the specified
// field names from a GlideRecord into the data parameter.
// source: Data Table[widget-data-table] line 128
$sp.getRecordElements(record, gr, data.fields);
```

### getRecordValues

[getRecordValues(object data, GlideRecord, string
fields)](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getRecordValues_O_GR_S)

``` {.js}
// Copies values for the specified field names from a
// GlideRecord into the data parameter.
// source: KB View 2[c254be50d7201200a9addd173e24d410] line 6
$sp.getRecordValues(data, gr, 'title,description');
```

### getStream

[getStream(string table, string
sys\_id)](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getStream_S_S)

``` {.js}
// Get the activity stream for a record.
// source: Ticket Conversations[widget-ticket-conversation] line 63
data.stream = $sp.getStream(data.table, data.sys_id);
```

Note: This only returns the quantity of entries specified by the
property, `glide.service_portal.stream_entry_limit`. Default is 100.

### getUserInitials

[getUserInitials()](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getUserInitials)

``` {.js}
// Returns the user's initials as a string.
```

### getValue

[getValue(string
field)](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getValue_S)

``` {.js}
// Like getDisplayValue except that it returns the value instead of
// the display value.
// source: SC Popular Items[cbcacf13cb21020000f8d856634c9ca0] line 1
data.sc_catalog = $sp.getValue('sc_catalogs') || $sp.getValue('sc_catalog');
```

### getValues

| Method                                                                                                                           | notes          |
|----------------------------------------------------------------------------------------------------------------------------------|----------------|
| [getValues(object data, string fields)](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getValues_O_S)     |                |
| [getValues(string sys\_id, object options)](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getValues_O_S) |                |
| [getValues(object data)](//.service-now.com/sp_widget_list.do?sysparm_query=sys_id=88979930cb01020000f8d856634c9caa)             | Not Documented |

``` {.js}
//source: KB Topic Articles[35c51f56d7f33100a9ad1e173e24d4b1] line 2
$sp.getValues(data, "color,glyph,kb_topic,title");
//source: Icon Menu List[88979930cb01020000f8d856634c9caa] line 2
$sp.getValues(data);
```

### getWidget

[getWidget(string sys\_id/widget-id, object
options)](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=r_GSPS-getWidget_S__O)

``` {.js}
// Returns a widget model for embedding a widget inside another widget.
// source: User Profile[user-profile] line 75
data.teamWidget = $sp.getWidget(
    'sp-my-team',
    {glyph: 'user', color: 'primary'}
);
```

## Undocumented

### mapUrlToSPUrl

[mapUrlToSPUrl()](//.service-now.com/sys_script_include_list.do?sysparm_query=sys_id=3647c37253221200b0b0547cedc587fd)

``` {.js}
/* Line 98:  */    if (redirectURL && redirectURL != "true") {
/* Line 99:  */        var spUrl = new GlideSPScriptable().mapUrlToSPUrl(redirectURL);
/* Line 100: */        returnUrl = spUrl ? this.portal + "?" + spUrl : redirectURL;
```

### isServicePortalURL

[isServicePortalURL()](//.service-now.com/sys_script_include_list.do?sysparm_query=sys_id=3647c37253221200b0b0547cedc587fd)

``` {.js}
/* Line 65: */      var nt = session.getProperty("nav_to");
/* Line 66: */      var isServicePortalURL = new GlideSPScriptable().isServicePortalURL(nt);
/* Line 67: */      var redirectURL = session.getProperty("login_redirect");
/* Line 68: */
/* Line 69: */      if (user.hasRoles() && !redirectURL && !isServicePortalURL)
/* Line 70: */          return;
```

### translateTemplate

[translateTemplate()](//.service-now.com/sp_widget_list.do?sysparm_query=sys_id=fa20ec02cb31020000f8d856634c9ce9)

``` {.js}
/* Line 27: */          if (searchGroupTemplatesGR.advanced_typeahead_config)
/* Line 28: */              data.typeaheadTemplates["sp-typeahead-" + searchGroupTemplatesGR.getValue("id") + ".html"] = $sp.translateTemplate(searchGroupTemplatesGR.getValue("typeahead_template"));
/* Line 29: */      }
```

### stripHTML

[stripHTML()](//.service-now.com/sp_widget_list.do?sysparm_query=sys_id=04b1cc07c3231200e44574e1c1d3ae96)

``` {.js}
/* Line 21: */      if (!!instance.description)
/* Line 22: */          instance.description = $sp.stripHTML(instance.description);
/* Line 23: */  });
```

### getRelatedList

[getRelatedList()](//.service-now.com/sp_widget_list.do?sysparm_query=sys_id=cf1a5153cb21020000f8d856634c9c3c)

``` {.js}
/* Line 1:*/ data.slides = $sp.getRelatedList('sp_carousel_slide','carousel');
```

### getGuide

[getGuide()](//.service-now.com/sp_widget_list.do?sysparm_query=sys_id=480ca054db03320064301150f0b8f545)

``` {.js}
/*Line 152:*/   data.showPrices = $sp.showCatalogPrices();
/*Line 153:*/   data.sc_cat_item = $sp.getGuide(data.sys_id, true, false);
/*Line 154:*/   if (data.sc_cat_item.category) {
```

### getKBRecord

[getKBRecord()](//.service-now.com/sp_widget_list.do?sysparm_query=sys_id=7d903b52cb30020000f8d856634c9ce3)

``` {.js}
// Returns the portal's KB record where the workflow state is
// published.
// source: KB Most Viewed[7d903b52cb30020000f8d856634c9ce3] line 4
var z = $sp.getKBRecord();
```

### getKBCount

[getKBCount(string
sys\_id)](//.service-now.com/sp_widget_list.do?sysparm_query=sys_id=ee307070d7201200a9addd173e24d4da)

``` {.js}
// Returns the number of Knowledge Base articles.
// source: KB Categories - KBv3[ee307070d7201200a9addd173e24d4da] line 16
var kbCount = $sp.getKBCount(data.kb);
```

### getKBCategoryArticles

[getKBCategoryArticles(string
sys\_id)](//.service-now.com/sp_widget_list.do?sysparm_query=sys_id=122ac7f0d7101200a9addd173e24d411)

``` {.js}
// Returns KB articles in the specified category and its
// subcategories.Pass 'limit' to limit the number of
// articles returned.
// source: KB Categories[122ac7f0d7101200a9addd173e24d411] line 9
var articles = $sp.getKBCategoryArticles(t.getUniqueValue());
```

### getKBTopicArticles

[getKBTopicArticles(string
topic)](//.service-now.com/sp_widget_list.do?sysparm_query=sys_id=35c51f56d7f33100a9ad1e173e24d4b1)

``` {.js}
// Returns array
// source: KB Topic Articles[35c51f56d7f33100a9ad1e173e24d4b1] line 3
data.items = $sp.getKBTopicArticles(data.kb_topic);
```

### getKBTopCategoryID

[getKBTopCategoryID(string
sys\_id)](//.service-now.com/sp_widget_list.do?sysparm_query=sys_id=c254be50d7201200a9addd173e24d410)

``` {.js}
// Returns the top category in the hierarchy containing the
// specified category.
// source: KB View 2[c254be50d7201200a9addd173e24d410] line 22
n.topCat = $sp.getKBTopCategoryID(n.kb_category);
```

### getKBSiblingCategories

[getKBSiblingCategories(string
sys\_id)](//.service-now.com/sp_widget_list.do?sysparm_query=sys_id=ee307070d7201200a9addd173e24d4da)

``` {.js}
// Returns KB categories with same parent as the specified
// category.
// source: KB Categories - KBv3[ee307070d7201200a9addd173e24d4da] line 6
cats = $sp.getKBSiblingCategories(data.catParam);
```

### showCatalogPrices

[showCatalogPrices()](//.service-now.com/sp_widget_list.do?sysparm_query=id=widget-sc-cat-item)

``` {.js}
// Returns- Is an object|
// source: SC Catalog Item[widget-sc-cat-item] line 20
data.showPrices = $sp.showCatalogPrices();
```

### saveVariables

[saveVariables()](//.service-now.com/sp_widget_list.do?sysparm_query=id=sp-variable-editor)

``` {.js}
// Retuns ?
// source: sp-variable-editor[sp-variable-editor] line 17
$sp.saveVariables(
    input.table,
    input.sys_id,
    vars
);
```

### buildThemeVariableModel

[buildThemeVariableModel(string sys\_id,
array)](//.service-now.com/sp_widget_list.do?sysparm_query=id=widget-portal-config)

``` {.js}
// Retuns ?
// source: Portal config[widget-portal-config] line 241
var variableValues = $sp.buildThemeVariableModel(portalId, keys.join(","));
```

### getVariablesArray

[getVariablesArray()](//.service-now.com/sp_widget_list.do?sysparm_query=sys_id=96cf39f3d7230200a9addd173e24d412)

``` {.js}
// Returns the tables variables as an object.
// source: Request Fields[96cf39f3d7230200a9addd173e24d412] line 22
data.variables = $sp.getVariablesArray();
```

### getWidgetFromInstance

[getWidgetFromInstance(string)](//.service-now.com/sp_widget_list.do?sysparm_query=sys_id=9b6187d0d7201200a9addd173e24d4dd)

``` {.js}
// Returns a widget from the specified widget instance.
// source: KB Search[9b6187d0d7201200a9addd173e24d4dd] line 1
data.typeahead = $sp.getWidgetFromInstance('typeahead_search_header');
```

### getRecordVariablesArray

[getRecordVariablesArray(GlideRecord)](//.service-now.com/sp_widget_list.do?sysparm_query=sys_id=f37aa302cb70020000f8d856634c9cfc)

``` {.js}
// Returns the records variables.
// source: Approvals[f37aa302cb70020000f8d856634c9cfc] line 86
item.variables = $sp.getRecordVariablesArray(itemsGR);
```

### getFilterBreadcrumbs

[getFilterBreadcrumbs(string table, string, query,
null)](//.service-now.com/sp_widget_list.do?sysparm_query=id=widget-filter-breadcrumbs)

``` {.js}
// Returns an array of objects where each object contains
// the breadcrumb label, value, and flags for if fixed and
// if removed
// source: Filter Breadcrumbs[widget-filter-breadcrumbs] line 4
data.breadcrumbs = $sp.getFilterBreadcrumbs(table, query, null);
```

### logStat

| Method                                                                                                                                            | Notes |
|---------------------------------------------------------------------------------------------------------------------------------------------------|-------|
| [logStat(string param 1, string table, string sys\_id, string param 2)](//.service-now.com/sp_widget_list.do?sysparm_query=id=widget-sc-cat-item) |       |
| [logStat(string param 1, string table, string sys\_id)](//.service-now.com/sp_widget_list.do?sysparm_query=id=widget-sc-order-guide)              |       |

``` {.js}
// Create a new entry in the `sp_log` table.
// Record has a table name, a record sys_id from that name,
// and some type and optional comments.
// Handy for doing things like logging searches or visits
// to pages, etc.
// source: SC Catalog Item[widget-sc-cat-item] line 59
$sp.logStat(
    'Catalog View',
    data.sc_cat_item.sys_class_name,
    data.sys_id,
    data.sc_cat_item.name
);
// source: SC Order Guide[widget-sc-order-guide] line 38
$sp.logStat(
    'Catalog Order Guide View',
    data.sc_cat_item.sys_class_name,
    data.sys_id
);
```

### getInstanceRecord

[getInstanceRecord()](//.service-now.com/sp_widget_list.do?sysparm_query=sys_id=3caa67afcb13020000f8d856634c9c2e)

``` {.js}
// Returns the widget instances GlideRecord.
// source: Icon Link[3caa67afcb13020000f8d856634c9c2e] line 2
var gr = $sp.getInstanceRecord();
```

### log

| Method                                                                          | Notes |
|---------------------------------------------------------------------------------|-------|
| [log(string)](.service-now.com/sp_widget_list.do?sysparm_query=id=calc)         |       |
| [log(object)](.service-now.com/sp_widget_list.do?sysparm_query=id=core-preview) |       |

``` {.js}
// Sends the specified message to the log console.
// source: Calculator[calc] line 7
$sp.log("calc with input as follows... ");
// source: Preview Widget[core-preview] line 21
$sp.log(e);
```

### saveRecord

[saveRecord(string table, string sys\_id, array
fields)](.service-now.com/sp_widget_list.do?sysparm_query=id=widget-form)

``` {.js}
// Saves or updates the current record.
// source: Form[widget-form] line 25
result = $sp.saveRecord(
    input.table,
    input.sys_id,
    input._fields
);
```

### logSearch

logSearch()

``` {.js}
// Adds a record to the Service Portal Statistics logs.
// no examples in a new instance
```

![sp-logSearch.png](/uploads/sp-logSearch.png)

### getSCRecord

getSCRecord()

``` {.js}
// Returns sc_cat_item record for the portal's catalog with
// sys_class_name != sc_cat_item_wizard and active = true
// in the query. GlideRecord returned has not yet triggered
// the query.
// no examples in a new instance
```

![sp-getSCRecord.png](/uploads/sp-getSCRecord.png)

### getStreamEntries

getStreamEntries()

``` {.js}
// Get a record's actvivity stream as a JSON formatted list.
// Typically for a task record
```

![sp-getStreamEntries.png](/uploads/sp-getStreamEntries.png)
