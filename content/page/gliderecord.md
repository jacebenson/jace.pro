---
aliases:
- '/Operators/'
- '/GlideRecord/'
- '/gr/'
date: '2016-01-01'
keywords:
- getlasterrormessage
- isvalid
- operation
- setabortaction
- setworkflow
- cancreate
- candelete
- canread
- canwrite
- addencodedquery
- addjoinquery
- addnotnullquery
- addnullquery
- addorcondition
- addquery
- choosewindow
- get
- getencodedquery
- getrowcount
- hasnext
- next
- orderby
- orderbydesc
- query
- setlimit
- setencodedquery
- addfunction
- getattribute
- getcategory
- getclassdisplayvalue
- getdisplayname
- getdisplayvalue
- getelement
- getlabel
- getlink
- getrecordclassname
- gettablename
- getvalue
- autosysfields
- deletemultiple
- deleterecord
- initialize
- insert
- isactionaborted
- isnewrecord
- isvalidfield
- usvalidrecord
- newrecord
- setcategory
- setforceupdate
- setnewguid
- setnewguidvalue
- setvalue
- update
- updatemultiple
- updatelazy
layout: page
tags:
- 'server-side-api'
title: GlideRecord
url: '/gliderecord/'
---

# What is GlideRecord

A `GlideRecord` is a class of object that represents a table & offers a
scriptable API to access records on that table

`GlideRecord` is comprised of [`GlideElements`](/glideelement) as well
as other methods and metadata that work together to allow you to query
from and write to database tables

[`GlideElement`](/glideelement) is a class of object that represents a
column on a table

There are two versions of GlideRecord, the client side version, and the
server side version.
[docs](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=c_GlideRecordScopedAPI)

| Category | Method                                        | Brief Description                                                                                                                       |
|----------|-----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| \*       | [getLastErrorMessage](#getlasterrormessage)   | Retrieves the last error message                                                                                                        |
| \*       | [isValid](#isvalid)                           | Determines whether the table exists or not                                                                                              |
| \*       | [operation](#operation)                       | Retrieves the current operation being performed, such as insert, update, or delete                                                      |
| \*       | [setAbortAction](#setabortaction)             | Sets a flag to indicate if the next database action (insert, update, delete) is to be aborted                                           |
| \*       | [setWorkflow](#setworkflow)                   | Flag to run or not run other business rules                                                                                             |
| Access   | [canCreate](#cancreate)                       | Determines if the Access Control Rules which include the user's roles permit inserting new records in this table                        |
| Access   | [canDelete](#candelete)                       | Determines if the Access Control Rules which include the user's roles permit deleting records in this table                             |
| Access   | [canRead](#canread)                           | Determines if the Access Control Rules which include the user's roles permit reading records in this table                              |
| Access   | [canWrite](#canwrite)                         | Determines if the Access Control Rules which include the user's roles permit editing records in this table                              |
| Query    | [addEncodedQuery](#addencodedquery)           | Specifies one of many querys encoded                                                                                                    |
| Query    | [addJoinQuery](#addjoinquery)                 | Adds a filter to return records based on a relationship in a related table                                                              |
| Query    | [addNotNullQuery](#addnotnullquery)           | Add's a `^fielsISNOTNULL` condition                                                                                                     |
| Query    | [addNullQuery](#addnullquery)                 | Add's a `^fieldISNULL` condition                                                                                                        |
| Query    | [addOrCondition](#addorcondition)             | Add's a `^OR` condition                                                                                                                 |
| Query    | [addQuery](#addquery)                         | Specifies one of many querys                                                                                                            |
| Query    | [chooseWindow](#choosewindow)                 | Sets a range of rows to be returned by subsequent queries. If forceCount is true, getRowCount() method will return all possible records |
| Query    | [get](#get)                                   | Get's a single record                                                                                                                   |
| Query    | [getEncodedQuery](#getencodedquery)           | Returns the query in it's encoded form                                                                                                  |
| Query    | [getRowCount](#getrowcount)                   | Gets the number of rows, not recomeneded, use [GlideAggregate](/GlideAggregate) instead                                                 |
| Query    | [hasNext](#hasnext)                           | Determines if there are any more records in the GlideRecord                                                                             |
| Query    | [next](#next)                                 | Moves to the next record in the GlideRecord                                                                                             |
| Query    | [orderBy](#orderby)                           | Sets the order by to A-Z on the specified field                                                                                         |
| Query    | [orderByDesc](#orderbydesc)                   | Sets the order by to Z-A on the specified field                                                                                         |
| Query    | [query](#query)                               | Runs the query against the table based on the specified filters by addQuery and addEncodedQuery                                         |
| Query    | [setLimit](#setlimit)                         | Sets a limit on the number of results                                                                                                   |
| Query    | [setEncodedQuery](#setencodedquery)           |                                                                                                                                         |
| Read     | [addFunction](#addfunction)                   | Retrieve the specified platform function in addition of the field values                                                                |
| Read     | [getAttribute](#getattribute)                 | Gets the attributes on the field in question from the dictionary                                                                        |
| Read     | [getCategory](#getcategory)                   | Determines whether a category is set for a query.                                                                                       |
| Read     | [getClassDisplayValue](#getclassdisplayvalue) |                                                                                                                                         |
| Read     | [getDisplayName](#getdisplayname)             | Retrieves the name of the display field                                                                                                 |
| Read     | [getDisplayValue](#getdisplayvalue)           | Retrieves the display value for the current record                                                                                      |
| Read     | [getElement](#getelement)                     | Retrieves the GlideElement for a specified field                                                                                        |
| Read     | [getLabel](#getlabel)                         | The label of the field as a String                                                                                                      |
| Read     | [getLink](#getlink)                           | Retrieves a link to the current record                                                                                                  |
| Read     | [getRecordClassName](#getrecordclassname)     | Retrieves the class name for the current record                                                                                         |
| Read     | [getTableName](#gettablename)                 | Retrieves the table name associated with this GlideRecord                                                                               |
| Read     | [getValue](#getvalue)                         | Retrieves the underlying value of a field                                                                                               |
| Write    | [autoSysFields](#autosysfields)               | Flag to update fields starting with `sys_`                                                                                              |
| Write    | [deleteMultiple](#deletemultiple)             | Deletes all records found to match the query                                                                                            |
| Write    | [deleteRecord](#deleterecord)                 | Deletes a single record                                                                                                                 |
| Write    | [getUniqueValue](#getuniquevalue)             | Gets the primary key of the record, which is usually the sys\_id unless otherwise specified                                             |
| Write    | [initialize](#initialize)                     | Sets up the GlideRecord to ignores default values for columns                                                                           |
| Write    | [insert](#insert)                             | Insert a new record using the field values that have been set for the current record                                                    |
| Write    | [isActionAborted](#isactionaborted)           | Determines whether the current database action is to be aborted. Available in Fuji patch 3                                              |
| Write    | [isNewRecord](#isnewrecord)                   | Checks if the current record is a new record that has not yet been inserted into the database                                           |
| Write    | [isValidField](#isvalidfield)                 | Determines if the given field is defined in the current table                                                                           |
| Write    | [isValidRecord](#usvalidrecord)               | Determines if current record is a valid record                                                                                          |
| Write    | [newRecord](#newrecord)                       | Sets up the GlideRecord to follow the default values and assigns a sys\_id                                                              |
| Write    | [setCategory](#setcategory)                   | Sets the category, which determines how the query is routed to a secondary database pool.                                               |
| Write    | [setForceUpdate](#setforceupdate)             | Flag to allow a save/update when there are no changes                                                                                   |
| Write    | [setNewGuid](#setnewguid)                     | Assigns a `sys_id` when called                                                                                                          |
| Write    | [setNewGuidValue](#setnewguidvalue)           | Sets the `sys_id` to the value specified                                                                                                |
| Write    | [setValue](#setvalue)                         | Sets the value for the specified field.                                                                                                 |
| Write    | [update](#update)                             | Updates the current GlideRecord with any changes that have been made                                                                    |
| Write    | [updateMultiple](#updatemultiple)             | Updates each GlideRecord in the list with any changes that have been made                                                               |
| Write    | [updateLazy](#updatelazy)                     | Places update in a batch, doesn't happen immediately, code continues past it. Undocumented.                                             |
|          | [Operators](#operators)                       | Different Operators for GlideRecord                                                                                                     |

## \*

These methods apply to query, read, write operations.

### getLastErrorMessage

Retrieves the last error message.

### isValid

Determines whether the table exists or not.

### operation

Retrieves the current operation being performed, such as insert, update,
or delete.

### setAbortAction

Sets a flag to indicate if the next database action (insert, update,
delete) is to be aborted.

### setWorkflow

Enables or disables the running of business rules, script engines, and
audit. 

This does not stop **flows** for scoped applications.  [Source](https://community.servicenow.com/community?id=community_question&sys_id=f5c4e8cedb1a7380190dfb2439961969#answer_92dd6e02db667f045129a851ca961939)

*NOTE: This works on queries too*

``` {.js}
var incident = new GlideRecord('incident');
incident.newRecord();
incident.setValue('short_description','This is text');
incident.setWorkflow(false);//default is true
incident.insert();//returns the sys_id string of inserted record
```

## Access

### canCreate

Determines if the Access Control Rules which include the user's roles
permit inserting new records in this table.

### canDelete

Determines if the Access Control Rules which include the user's roles
permit deleting records in this table.

### canRead

Determines if the Access Control Rules which include the user's roles
permit reading records in this table

### canWrite

Determines if the Access Control Rules which include the user's roles
permit editing records in this table.

## Query

Generally most of the calls you'll make with this will be queries. See
if you find a record, find all the records, find a lack of records, then
do something else.

### addEncodedQuery

``` {.js}
// available for server, if you want to use on client, use addQuery(string)
// expects;
// string e.g. .addEncodedQuery('number=INC12345');
// returns null
var incident = new GlideRecord('incident');
incident.addEncodedQuery('number=INC12345');
incident.query();
if(incident.next()){
    gs.info('found record');
    gs.info(incident.getValue('sys_created_on'));
} else {
    gs.info('no record found');
}
```

### addJoinQuery

Adds a filter to return records based on a relationship in a related
table.

### addNotNullQuery

I generally ignore any other method that modifies the query. These have
documentation, but I have yet to use it and find it's code more verbose.
Also this only works on server side.

### addNullQuery

I generally ignore any other method that modifies the query. These have
documentation, but I have yet to use it and find it's code more verbose.
Also this only works on server side.

### addOrCondition

I generally ignore any other method that modifies the query. These have
documentation, but I have yet to use it and find it's code more verbose.
Also this only works on server side. To use this in your encoded query
just put `^OR` between your query strings.

### addQuery

This method is most common when coming across queries. Generally folks
with either have many addQuery methods declared, or one addEncodedQuery.

``` {.js}
// available for both client and server
// expects;
// string e.g. .addQuery('number=INC12345');
// two strings e.g. .addQuery('number','INC12345');
// three strings e.g. .addQuery('number', '=', 'INC12345');
// returns null
var incident = new GlideRecord('incident');
incident.addQuery('number','INC12345');
incident.query();
if(incident.next()){
    gs.info('found record');
    gs.info(incident.getValue('sys_created_on'));
} else {
    gs.info('no record found');
}
```

### chooseWindow

Sets a range of rows to be returned by subsequent queries. If forceCount
is true, `getRowCount()` method will return all possible records.

### get

This method is a shortcut to get the first record found that matches the
parameters you pass in this method.

``` {.js}
// available for both client and server
// expects one of;
// sys_id e.g. .get('asdf1234asdf1234asfd1234asdf1234');
// column, and value e.g. .get('number','INC12345');
// returns
// boolean and moves object onto the record if boolean is true
var incident = new GlideRecord('incident');
if(incident.get('number','INC12345')){//returns true if found
    gs.info('found record');
    gs.info(incident.getValue('sys_created_on'));
} else {
    gs.info('no record found');
}
```

### getEncodedQuery

This is really helpful if debugging code. If you're not sure why you're
getting the records you are, I generally add this to my code before my
`.query()` and try the query in the GUI. This works on client and server
side code.

### getRowCount

This will return the number of rows in your returned object after your
`.query()`. However, this is frowned on because it has some memory
issues. I'm not sure exaclty why but generally if you need to know the
quantity of records, you should always use GlideAggregate.
`getRowCount()` is available client and server side. `GlideAggregate` is
only available server side.

### hasNext

Determines if there are any more records in the GlideRecord.

### next

Moves to the next record in the GlideRecord.

### orderBy

This will return your set order ascending (a-z, 1-9) by the column name,
and is opposite of orderByDesc.

``` {.js}
var incident = new GlideRecord('incident');
incident.addEncodedQuery('active=true');
incident.orderBy('number');
incident.query();
while(incident.next()){
    gs.info('found record');
    gs.info(incident.getValue('number'));
} else {
    gs.info('no record found');
}
```

### orderByDesc

This will return your set order descending (z-a, 9-1) by the columne
name, and is opposibe of orderBy.

``` {.js}
var incident = new GlideRecord('incident');
incident.addEncodedQuery('active=true');
incident.orderByDesc('number');
incident.query();
while(incident.next()){
    gs.info('found record');
    gs.info(incident.getValue('number'));
} else {
    gs.info('no record found');
}
```

### query

Runs the query against the table based on the specified filters by
`addQuery` and `addEncodedQuery`.

### setEncodedQuery

This isn't documented anywhere and I just came across this. Appears to
be a way to set the encoded query on the client. I'd avoid using this as
it isn't documented, but you can read the code here on
[hi](https://hi.service-now.com/scripts/sn/common/clientScript/glideRecord.js).

### setLimit

This is really useful if you're running a one time script to update some
records. Run a test against one record. This works on client and server
side code.

``` {.js}
var incident = new GlideRecord('incident');
incident.addEncodedQuery('number=INC12345');
incident.setLimit(1);
incident.query();
while(incident.next()){
    gs.info('found record');
    gs.info(incident.getValue('sys_created_on'));
} else {
    gs.info('no record found');
}
```

## Read

### addFunction

Retrieve the specified platform function in addition of the field values

### getAttribute

Gets the attributes on the field in question from the dictionary

### getCategory

The setCategory and getCategory methods are available in GlideRecord for
working with query categories when routing to secondary database pools,
known as read replicas.

A read replica is a 100% copy of an instance's database (DB) that can be
only queried against with the goal to reduce load on the primary
database. It's a paid feature and requires an extra plugin that can only
be activated by ServiceNow. With setCategory you can route some
categories to the read replica, so queries for them will not go to
primary database anymore (effectively reducing load on primary
database).

[Source](https://community.servicenow.com/community?id=community_question&sys_id=971f83e1dbdcdbc01dcaf3231f961927)

### getClassDisplayValue

This returns the table class display value, e.g. `incident` would Return
`Incident`

### getDisplayName

Retrieves the name of the display field

### getDisplayValue

Retrieves the display value for the current record

### getElement

Retrieves the GlideElement for a specified field

### getLabel

The label of the field as a String

### getLink

Retrieves a link to the current record

### getRecordClassName

Retrieves the class name for the current record

### getTableName

Retrieves the table name associated with this GlideRecord

### getValue

Retrieves the underlying value of a field

## Write

### autoSysFields

Controls weather or not to set the sys\_\* fields.

``` {.js}
var incident = new GlideRecord('incident');
incident.newRecord();
incident.setValue('short_description','This is text');
incident.autoSysFields(false);//default is true
incident.insert();//returns the sys_id string of inserted record
```

### deleteMultiple

Generally you don't need to delete records, so this is less common to
see in use, some places you might see it used are when storing things
temporarily. Like the cart's items, those things don't stick around and
I've seen it coded to clear it out in some cases. In any case, my point
is, this is seen less often.

This is shortcut to delete a lot of records, however it's not
necessarily faster. To use this you can just specify your query, and
then invoke `incident.deleteMultiple();`

This is available on server only.

### deleteRecord

Generally you don't need to delete records, so this is less common to
see in use, some places you might see it used are when storing things
temporarily. Like the cart's items, those things don't stick around and
I've seen it coded to clear it out in some cases. In any case, my point
is, this is seen less often.

If you have a GlideRecord object, you can specify to delete the record
like so;

``` {.js}
incident.deleteRecord();
```

This is available on both server, and client, and only in the full gui,
not in mobile.

### getUniqueValue

Gets the primary key of the record, which is usually the sys\_id unless
otherwise specified

### initialize

``` {.js}
var incident = new GlideRecord('incident');
incident.initialize();//ignores default values for columns
incident.setValue('short_description','This is text');
incident.insert();//returns the sys_id string of inserted record
```

### Insert

So to be absolutely clear, to insert or update a record it's nearly the
same code, except you use `.insert();` or `.update();`. However you may
want to use those with the following methods;

Insert a new record using the field values that have been set for the
current record.

### isActionAborted

Determines whether the current database action is to be aborted.
Available in Fuji patch 3

### isNewRecord

Checks if the current record is a new record that has not yet been
inserted into the database

### isValidField

Determines if the given field is defined in the current table

### isValidRecord

Determines if current record is a valid record

### newRecord

``` {.js}
var incident = new GlideRecord('incident');
incident.newRecord();//Creates a new GlideRecord record, sets the
// default values for the fields, and assigns a unique ID to the record.
incident.setValue('short_description','This is text');
incident.insert();//returns the sys_id string of inserted record
```

### setCategory

The setCategory and getCategory methods are available in GlideRecord for
working with query categories when routing to secondary database pools,
known as read replicas.

A read replica is a 100% copy of an instance's database (DB) that can be
only queried against with the goal to reduce load on the primary
database. It's a paid feature and requires an extra plugin that can only
be activated by ServiceNow. With setCategory you can route some
categories to the read replica, so queries for them will not go to
primary database anymore (effectively reducing load on primary
database).

[Source](https://community.servicenow.com/community?id=community_question&sys_id=971f83e1dbdcdbc01dcaf3231f961927)

### setForceUpdate

Normally if no update is detected, Servicenow will ignore the update.
With this method, it will apply the update regardless.

``` {.js}
var incident = new GlideRecord('incident');
incident.setLimit(1);
incident.query();
if(incident.next()){
    incident.setForceUpdate(true);//default is false
    incident.update();//returns the sys_id string of inserted record
}
```

### setNewGuid

This sets the guid to a value before the record is saved.

``` {.js}
var t = new GlideRecord('task');
var tSysid = t.setNewGuid();
// some fancy script with tSysid
```

### setNewGuidValue

This allows you to manually set your `sys_id`. I used this to most
recently try to fix some broken reference, but I don't know other
reasons it may be used.

``` {.js}
var a = new GlideRecord('ticket');
a.setNewGuidValue('14018b8cdb69a6403bddf1910f961926');
a.insert();
```

### setValue

Sets the value for the specified field.

### Update

So to be absolutely clear, to insert or update a record it's nearly the
same code, except you use `.insert();` or `.update();`. However you may
want to use those with the following methods;

Updates the current GlideRecord with any changes that have been made.

### updateMultiple

So to be absolutely clear, to insert or update a record it's nearly the
same code, except you use `.insert();` or `.update();`. However you may
want to use those with the following methods;

Updates each GlideRecord in the list with any changes that have been
made.

Tim has a [post about this specifically](https://snprotips.com/blog/2016/12/20/pro-tip-use-updatemultiple-for-maximum-efficiency).

Here's an example of the method in use;

```js
    var staleState = 10;
    var query = 'sys_updated_onRELATIVELT@dayofweek@ago@30^state=2';
    var incident = new GlideRecord('incident');
    incident.addQuery(query);
    incident.setValue('state', staleState);
    incident.updateMultiple();
```

## updateLazy

Came up on sndevs slack. According to sources there this does;

> puts the update into a batch, which means it might not happen right
> away. Your code can then continue on, but side-effects like BRs and
> such might not happen for a short while, because the operation doesn't
> actually occur yet. It is undocumented. It has consequences and isn't
> meant for casual use.

## Operators

| Operator label           | Equivalent query operator | Example query                                                                 |
|--------------------------|---------------------------|-------------------------------------------------------------------------------|
| is not                   | `!=`                      | `short_description!=Network storage unavailable`                              |
| and                      | `^`                       | `active=true^CallerISNOTEMPTY`                                                |
| OR filter (new query)    | `^NQ`                     | `active=true^NQactive=false`                                                  |
| OR condition             | `^OR`                     | `short_descriptionISEMPTY^ORdescriptionISEMPTY`                               |
| before                   | `<`                       | `sla_due<javascript:gs.daysAgoStart(0)`                                       |
| less than                | `<`                       | `reassignment_count<2`                                                        |
| at or before             | `<=`                      | `sla_due<=javascript:gs.daysAgoEnd(0)`                                        |
| less than or is          | `<=`                      | `short_description<=s`                                                        |
| is                       | `=`                       | `short_description=Network storage unavailable`                               |
| after                    | `>`                       | `sla_due>javascript:gs.daysAgoEnd(0)`                                         |
| greater than             | `>`                       | `impact>2`                                                                    |
| at or after              | `>=`                      | `sla_due>=javascript:gs.daysAgoStart(0)`                                      |
| greater than or is       | `>=`                      | `short_description>=s`                                                        |
| is anything              | `ANYTHING`                | `short_descriptionANYTHING`                                                   |
| between                  | `BETWEEN`                 | `short_descriptionBETWEENq@t`                                                 |
| between                  | `BETWEEN`                 | `impactBETWEEN1@2`                                                            |
| between                  | `BETWEEN`                 | `sla_dueBETWEENjavascript:gs.daysAgoStart(1)@javascript:gs.daysAgoEnd(0)`     |
| between                  | `BETWEEN`                 | `reassignment_countBETWEEN1@2`                                                |
| changes from             | `CHANGESFROM`             | `stateCHANGESFROM4^EQ`                                                        |
| changes to               | `CHANGESTO`               | `stateCHANGESTO4^EQ`                                                          |
| trend (after)            | `DATEPART`                | `sla_dueDATEPARTMonday@javascript:gs.datePart('dayofweek','monday','GT')`     |
| trend (before)           | `DATEPART`                | `sla_dueDATEPARTMonday@javascript:gs.datePart('dayofweek','monday','LT')`     |
| trend (on or after)      | `DATEPART`                | `sla_dueDATEPARTMonday@javascript:gs.datePart('dayofweek','monday','GE')`     |
| trend (on or before)     | `DATEPART`                | `sla_dueDATEPARTMonday@javascript:gs.datePart('dayofweek','monday','LE')`     |
| trend (on)               | `DATEPART`                | `sla_dueDATEPARTMonday@javascript:gs.datePart('dayofweek','monday','EE')`     |
| is (dyanmic)             | `DYNAMIC`                 | `caller_idDYNAMIC54635e965f510100a9ad2572f2b4774c`                            |
| is empty string          | `EMPTYSTRING`             | `caller_idEMPTYSTRING`                                                        |
| ends with                | `ENDSWITH`                | `short_descriptionENDSWITHoutage`                                             |
| greater than field       | `GT_FIELD`                | `reassignment_countGT_FIELDreopen_count`                                      |
| greater than or is field | `GT_OR_EQUALS_FIELD`      | `reassignment_countGT_OR_EQUALS_FIELDreopen_count`                            |
| is one of                | `IN`                      | `impactIN1,2`                                                                 |
| is empty                 | `ISEMPTY`                 | `short_descriptionISEMPTY`                                                    |
| is not empty             | `ISNOTEMPTY`              | `activeISNOTEMPTY`                                                            |
| is less than             | `LESSTHAN`                | `sla_dueLESSTHANactivity_due@day@before@3`                                    |
| contains                 | `LIKE`                    | `subcategoryLIKEem`                                                           |
| less than field          | `LT_FIELD`                | `reassignment_countLT_FIELDreopen_count`                                      |
| less than or is field    | `LT_OR_EQUALS_FIELD`      | `reassignment_countLT_OR_EQUALS_FIELDreopen_count`                            |
| is more than             | `MORETHAN`                | `sla_dueMORETHANactivity_due@day@before@1`                                    |
| is not one of            | `NOT IN`                  | `subcategoryNOT INdb2,sql server,oracle`                                      |
| does not contain         | `NOT LIKE`                | `subcategoryNOT LIKEem`                                                       |
| not on                   | `NOTONToday`              | `sla_dueNOTONToday@javascript:gs.daysAgoStart(0)@javascript:gs.daysAgoEnd(0)` |
| is different             | `NSAMEAS`                 | `activeNSAMEASmade_sla`                                                       |
| on                       | `ONToday`                 | `sla_dueONToday@javascript:gs.daysAgoStart(0)@javascript:gs.daysAgoEnd(0)`    |
| relative (on)            | `RELATIVEEE`              | `sla_dueRELATIVEEE@hour@ago@1`                                                |
| relative (on or after)   | `RELATIVEGE`              | `sla_dueRELATIVEGE@hour@ago@1`                                                |
| relative (after)         | `RELATIVEGT`              | `sla_dueRELATIVEGT@hour@ago@1`                                                |
| relative (on or before)  | `RELATIVELE`              | `sla_dueRELATIVELE@hour@ago@1`                                                |
| relative (before)        | `RELATIVELT`              | `sla_dueRELATIVELT@hour@ago@1`                                                |
| is same                  | `SAMEAS`                  | `short_descriptionSAMEASdescription`                                          |
| starts with              | `STARTSWITH`              | `subcategorySTARTSWITHem`                                                     |
| changes                  | `VALCHANGES`              | `stateVALCHANGES`                                                             |
