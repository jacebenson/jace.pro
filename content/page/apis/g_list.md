---
aliases:
- '/glidelist/'
- '/glidelistv2/'
- '/GlideListv2/'
- '/glidelistv3/'
- '/GlideListv3/'
date: '2016-01-01'
layout: page
tags:
- 'client-side-api'
title: GlideList
url: '/g_list/'
---

# What is GlideList

Use GlideListV2 and GlideListV3 to manipulate lists.

You access the GlideList methods by using the g\_list global object.
These methods are used in UI context menus and UI actions. The g\_list
object is not available for related lists on the form link UI action.

-   [Developer Documentation
    GlideList2](https://docs.servicenow.com/bundle/kingston-application-development/page/app-store/dev_portal/API_reference/GlideList2/concept/c_GlideList2API.html)
-   [Developer Documentation
    GlideList3](https://docs.servicenow.com/bundle/kingston-application-development/page/app-store/dev_portal/API_reference/GlideListV3/concept/c_GlideListV3API.html)

## addFilter

Adds a single term to the list query filter

``` {.js}
var list = GlideList2.get(listID);
list.addFilter(term);
list.refresh(1);
```

## get

Returns the GlideList2 object for the list or for the list that contains
the specified item. String listID or DOMElement element - specifies the
list by list ID or specifies the list by element

## getChecked

Returns a comma-separated list of the sys\_ids for the items that are
checked in the list

``` {.js}
var list = GlideList2.get(listId);
var checked = list.getChecked();
```

## getFixedQuery

Returns the sysparm\_fixed query. A fixed query is the part of the query
that cannot be removed from the breadcrumb (i.e., it is fixed for the
user). It is specified by including a sysparm\_fixed\_query parameter
for the application module

``` {.js}
var list = GlideList2.getByName("sprint_stories");
var filter = list.getFixedQuery() + list.getQuery();
```

## getGroupBy

Returns the field or comma-separated list of fields that are used to
group the list

## getListName

Returns the name of the list, which is usually the table name

``` {.js}
var list = GlideList2.getByName('cmdb_ci_service_discovered.sa_m2m_service_entry_point.cmdb_ci_service');
```

## getOrderBy

Returns the first field that is used to order by or a blank

## getParentTable

Returns the name of the parent table for a related list (the table
associated with the form)

## getQuery

Returns the encoded query string for the list

## getRelated

Returns the related list field that associates the related list to the
parent form

``` {.js}
function refreshImpactedServices(){
  GlideList2.get(g_form.getTableName() + '.' + g_list.getRelated()).setFilterAndRefresh('');
}
```

## getTableName

Returns the table name for the list

``` {.js}
var list = GlideList2.get(gel('sys_target').value);
var tableName = list.getTableName();
```

## getTitle

Returns the list title

## getView

Returns the view used to display the list

## isUserList

Returns true if the list has been personalized by the user by choosing
the list mechanic and changing the list layout

## refresh

Refreshes the list. The orderBy part of the list filter is ignored so
that the list uses its natural ordering when it is refreshed

``` {.js}
GlideList2.get("rm_sprint.scrum_pp_sprint_team_member.sprint").refresh();
```

## refreshWithOrderBy

Refreshes the list. The orderBy part of the list filter is included if
it is currently specified for the list

``` {.js}
GlideList2.get(tableName).refreshWithOrderBy();
```

## setFilter

Sets the encoded query string for the list, ignoring the orderBy and
groupBy parts of the query string

## setFilterAndRefresh

Sets the encoded query string for the list, including the orderBy and
groupBy if specified, and then refreshes the list using the new filter

``` {.js}
GlideList2.get(listID).setFilterAndRefresh(''); //refresh related list
```

## setFirstRow

Sets the first row that will be displayed in the list when the list is
refreshed

## setGroupBy

Sets the groupBy criteria for the list, for a single field or multiple
fields. For a single field, use field or groupByField. The groupBy
prefix is optional. For multiple fields use field1^field2^field3 or
groupByField1^groupByField2^groupByField3

## setOrderBy

Sets the orderBy criteria for the list. For a single order by field use
orderBy field or orderByDescField. For multiple fields, use
orderByField1^orderByField2^orderByField3. orderBy specifies ascending
order and orderByDesc specifies descending. These prefix strings are
optional. If not specified orderBy is assumed

## setRowsPerPage

Sets the number of rows per page to display

## showHideGroups

Displays or hides all of the groups within the list and saves the
current collapsed/expanded state of the groups as a user preference

## showHideList

Displays or hides the list and saves the current collapsed/expanded
state of the list as a user preference

## sort

Sorts the list in ascending order and saves the choice

## sortDescending

Sorts the list in descending order and saves the choice

## toggleList

Toggles the display of the list and saves the current collapsed/expanded
state of the list as a user preference

## toggleListNoPref

Clears the image for an item

## getByName

``` {.js}
GlideList2.getByName(relatedListName).refresh();
```
