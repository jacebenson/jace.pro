---
aliases:
- '/GlideSystem/'
- '/glidesystem/'
date: '2016-01-01'
layout: page
tags:
- 'server-side-api'
title: GlideSystem
url: '/gs/'
---

## What is gs

`gs` is very heavily used in Servicenow, and as such, knowing what it
can, and cannot do is crucial. Below I go over the functions I'm aware
of and what they do. Below these things refer to the availability based
on weather you are in [global
scope](https://docs.servicenow.com/bundle/kingston-application-development/page/app-store/dev_portal/API_reference/GlideSystem/concept/c_GlideSystemAPI.html)
or in [your own
scope](https://docs.servicenow.com/bundle/kingston-application-development/page/app-store/dev_portal/API_reference/glideSystemScoped/concept/c_GlideSystemScopedAPI.html).

| Property / Method                                                       | Documented    | Description                                                                                       |
|-------------------------------------------------------------------------|---------------|---------------------------------------------------------------------------------------------------|
| [addErrorMessage](#adderrormessage)                                     | Global/Scoped | Adds an error message for the current session.                                                    |
| [addInfoMessage](#addinfomessage)                                       | Global/Scoped | Adds an info message for the current session.                                                     |
| [addMessage](#addmessage)                                               | Global        | Adds a message for the current session. Can be called using getMessages(String).                  |
| [base64Decode](#base64decode)                                           | Scoped        |                                                                                                   |
| [base64Encode](#base64encode)                                           | Scoped        |                                                                                                   |
| [cacheFlush](#cacheflush)                                               |               |                                                                                                   |
| [clearMessages](clearmessages)                                          |               |                                                                                                   |
| [debug](#debug)                                                         | Scoped        |                                                                                                   |
| [disableSessionScopeDebug](#disablesessionscopedebug)                   |               |                                                                                                   |
| [dropColumnQuick](#dropcolumnquick)                                     |               |                                                                                                   |
| [dropTable](#droptable)                                                 |               |                                                                                                   |
| [enableDomain](#enabledomain)                                           |               |                                                                                                   |
| [error](#error)                                                         | Scoped        |                                                                                                   |
| [eventQueueScheduled](#eventqueuescheduled)                             | Global/Scoped | Queues an event for the event manager at a specific date/time.                                    |
| [eventQueue](#eventqueue)                                               | Global/Scoped | Queues an event for the event manager.                                                            |
| [executeNow](#executenow)                                               | Scoped        |                                                                                                   |
| [fieldExists](#fieldexists)                                             |               |                                                                                                   |
| [flushAccessMessages](#flushaccessmessages)                             |               |                                                                                                   |
| [flushMessages](#flushmessages)                                         | Global        | Clears session messages saved using addErrorMessage(Object) or addInfoMessage(Object).            |
| [flushWorkflow](#flushworkflow)                                         |               |                                                                                                   |
| [generateGUID](#generateguid)                                           | Scoped        |                                                                                                   |
| [getAccessMessages](#getaccessmessages)                                 |               |                                                                                                   |
| [getCallerScopeName](#getcallerscopename)                               | Scoped        |                                                                                                   |
| [getCssCacheVersionString](#getcsscacheversionstring)                   | Scoped        |                                                                                                   |
| [getCurrentApplicationId](getcurrentapplicationid)                      | Scoped        |                                                                                                   |
| [getCurrentApplicationScope](#getcurrentapplicationscope)               |               |                                                                                                   |
| [getCurrentScopeName](#getcurrentscopename)                             | Global/Scoped | \[gets the name of the current scope.                                                             |
| [getDisplayColumn](#getdisplaycolumn)                                   | Global        | Gets the display column for the table.                                                            |
| [getDisplayValueFor](#getdisplayvaluefor)                               | Global        | Gets the display value for a given field.                                                         |
| [getErrorMessages](#geterrormessages)                                   | Global/Scoped | Gets the list of error messages for the session that were added by addErrorMessage(Object).       |
| [getEscapedMessage](#getescapedmessage)                                 | Scoped        |                                                                                                   |
| [getEscapedProperty](#getescapedproperty)                               | Global        | Gets the property and escapes it for XML parsing.                                                 |
| [getImpersonatingUserDisplayName](#getimpersonatinguserdisplayname)     | Global        | Returns the display name of the impersonating user.                                               |
| [getImpersonatingUserName](#getimpersonatingusername)                   | Global        | Returns the name of the impersonating user or null if not impersonating.                          |
| [getInfoMessages](#getinfomessages)                                     | Global        | Gets the list of info messages for the session that were added via addInfoMessage(Object.         |
| [getMessages](#getmessages)                                             | Global        | Gets the list of messages of the specified type for the session that were added via addMessage(). |
| [getMessageS](#getmessages-translated)                                  | Global        | Retrieves translated messages to display in the UI and escapes all ticks (').                     |
| [getMessage](#getmessage)                                               | Global/Scoped | Retrieves translated messages to display in the UI.                                               |
| [getNodeName](#getnodename)                                             | Global        | Returns the node name for specified index.                                                        |
| [getNodeValue](#getnodevalue)                                           | Global        | Gets the node value for specified index.                                                          |
| [getPreference](#getpreference)                                         | Global        | Gets a user preference.                                                                           |
| [getProperty](#getproperty)                                             | Global/Scoped | Gets the value of a Glide property.                                                               |
| [getScriptError](#getscripterror)                                       | Global        | Returns the script error found in the specified script, if there is one.                          |
| [getSessionID](#getssionid)                                             | Global/Scoped | Accesses the GlideSession Session ID.                                                             |
| [getSessionToken](#getsessiontoken)                                     | Scoped        |                                                                                                   |
| [getSession](#getsession)                                               | Global/Scoped | Returns a GlideSession object.                                                                    |
| [getStyle](#getstyle)                                                   | Global        | Returns the style defined for the table, field and value.                                         |
| [getTimeZoneName](#gettimezonename)                                     | Scoped        |                                                                                                   |
| [getTrivialMessages](#gettrivialmessages)                               | Global        | Gets the list of error messages for the session that were added with the trivial flag.            |
| [getUrlOnStack](#geturlonstack)                                         | Scoped        |                                                                                                   |
| [getUserDisplayName](#getuserdisplayname)                               | Global/Scoped | Returns the name field of the current user (e.g. John Smith, as opposed to smith).                |
| [getUserID](#getuserid)                                                 | Global/Scoped | Returns the sys\_id of the current user.                                                          |
| [getUserNameByUserID](#getusernamebyuserid)                             | Global        | Gets the username based on a user ID.                                                             |
| [getUserName](#getusername)                                             | Global/Scoped | Returns the username of the current user (for example, jsmith).                                   |
| [getUser](#getuser)                                                     | Global/Scoped | Returns a reference to the User object for the current user. More information is available here.  |
| [getXMLNodeList](#getxmlnodelist)                                       | Global        | Constructs an Array of all the nodes and values in an XML document.                               |
| [getXMLText](#getxmltext)                                               | Global        | Gets the xml text for the first node in the xml string that matches the path query.               |
| [hasRoleInGroup](#hasroleingroup)                                        | Global        | Determines if the current user has the specified role within a specified group.                   |
| [hasRole](#hasrole)                                                     | Global/Scoped | Determines if the current user has the specified role.                                            |
| [include](#include)                                                     | Scoped        |                                                                                                   |
| [info](#info)                                                           | Scoped        |                                                                                                   |
| [isCurrentApplicationCustom](#iscurrentapplicationcustom)               |               |                                                                                                   |
| [isCurrentApplicationInGlobalScope](#iscurrentapplicationinglobalscope) |               |                                                                                                   |
| [isDatabaseView](#isdatabaseview)                                       |               |                                                                                                   |
| [isDebugging](#isdebugging)                                             | Scoped        |                                                                                                   |
| [isInteractive](#isinteractive)                                         | Global/Scoped | Checks if the current session is interactive.                                                     |
| [isLoggedIn](#isloggedin)                                               | Global/Scoped | Determines if the current user is currently logged in.                                            |
| [isMobile](#ismobile)                                                   | Scoped        |                                                                                                   |
| [isPaused](#ispaused)                                                   |               |                                                                                                   |
| [isTableInScope](#istableinscope)                                       |               |                                                                                                   |
| [isValidScript](#isvalidscript)                                         |               |                                                                                                   |
| [loadGlobalScripts](#loadglobalscripts)                                 |               |                                                                                                   |
| [logError](#logerror)                                                   | Global        | Logs an error to the system log and saves it to the syslog table.                                 |
| [logWarning](#logwarning)                                               | Global        | Logs a warning to the system log and saves it to the syslog table.                                |
| [log](#log)                                                             | Global        | Logs a message to the system log and saves it to the syslog table.                                |
| [nil](#nil)                                                             | Global/Scoped | Queries an object and returns true if the object is null or contains an empty string.             |
| [print](#print)                                                         | Global        | Writes a message to the system log.                                                               |
| [sendRedirect](#sendredirect)                                           |               |                                                                                                   |
| [setCurrentApplicationId](#setcurrentapplicationid)                     |               |                                                                                                   |
| [setProperty](#setproperty)                                             | Global/Scoped | Sets the specified key to the specified value.                                                    |
| [setRedirect](#setredirect)                                             | Global/Scoped | Sets the redirect URI for this transaction. This determines the next page the user will see.      |
| [setReturn](#setreturn)                                                 | Global        | Sets the return URI for this transaction.                                                         |
| [sleep](#sleep)                                                         |               |                                                                                                   |
| [suppressTextIndex](#suppresstextindex)                                 |               |                                                                                                   |
| [suppressUpdateSynch](#suppressupdatesynch)                             |               |                                                                                                   |
| [tableExists](#tableexists)                                             | Global/Scoped | Determines if a database table exists.                                                            |
| [templateOrMacroExists](#templateormacroexists)                         |               |                                                                                                   |
| [unloadChoices](#unloadchoices)                                         |               |                                                                                                   |
| [unWrap](#unwrap)                                                       |               |                                                                                                   |
| [updateSave](#updatesave)                                               |               |                                                                                                   |
| [urlDecode](#urldecode)                                                 | Scoped        |                                                                                                   |
| [urlEncode](#urlendcode)                                                | Scoped        |                                                                                                   |
| [userID](#userid)                                                       | Global        | Returns the sys\_id of the user associated with this session.                                     |
| [user\_id](#user_id)                                                    |               |                                                                                                   |
| [warn](#warn)                                                           | Scoped        |                                                                                                   |
| [workflowFlush](#workflowflush)                                         | Global        | Deletes all existing workflow operations for the specified GlideRecord.                           |
| [xmlToJSON](#xmltojson)                                                 | Scoped        | Converts an xml string to json object.                                                            |
| [beginningOfLastMonth](#beginningoflastmonth)                           | Global/Scoped | Gets the date and time for the beginning of last month in GMT.                                    |
| [beginningOfLastWeek](#beginningoflastweek)                             | Global/Scoped | Gets the date and time for the beginning of last week in GMT.                                     |
| [beginningOfNextMonth](#beginningofnextmonth)                           | Global/Scoped | Gets the date and time for the beginning of next month in GMT.                                    |
| [beginningOfNextWeek](#beginningofnextweek)                             | Global/Scoped | Gets the date and time for the beginning of next week in GMT.                                     |
| [beginningOfNextYear](#beginningofnextyear)                             | Global/Scoped | Gets the date and time for the beginning of next year in GMT.                                     |
| [beginningOfThisMonth](#beginningofthismonth)                           | Global/Scoped | Gets the date and time for the beginning of this month in GMT.                                    |
| [beginningOfThisQuarter](#beginningofthisquarter)                       | Global/Scoped | Gets the date and time for the beginning of this quarter in GMT.                                  |
| [beginningOfThisWeek](#beginningofthisweek)                             | Global/Scoped | Gets the date and time for the beginning of this week in GMT.                                     |
| [beginningOfThisYear](#beginningofthisyear)                             | Global/Scoped | Gets the date and time for the beginning of this week in GMT.                                     |
| [beginningOfToday](#beginningoftoday)                                   | Global        | Gets the date and time for the beginning of today in GMT.                                         |
| [beginningOfYesterday](#beginningofyesterday)                           | Global        | Gets the date and time for the beginning of yesterday in GMT.                                     |
| [calDateDiff](#caldatediff)                                             | Global        | Calculate the difference between two dates using the default calendar.                            |
| [dateDiff](#datediff)                                                   | Global        | Calculates the difference between two dates.                                                      |
| [dateGenerate](#dategenerate)                                           | Global/Scoped | Generates a date and time for the specified date in GMT.                                          |
| [daysAgoEnd](#daysagoend)                                               | Global/Scoped | Gets a date and time for end of the day a certain number of days ago.                             |
| [daysAgoStart](daysagostart)                                            | Global/Scoped | Gets a date and time for beginning of the day a certain number of days ago.                       |
| [daysAgo](#daysago)                                                     | Global/Scoped | Gets a date and time for a certain number of days ago.                                            |
| [endOfLastMonth](#endoflastmonth)                                       | Global/Scoped | Gets the date and time for the end of last month in GMT.                                          |
| [endOfLastWeek](#endoflastweek)                                         | Global/Scoped | Gets the date and time for the end of last week in GMT, in the format yyyy-mm-dd hh:mm:ss.        |
| [endOfLastYear](#endoflastyear)                                         | Global/Scoped | Gets the date and time for the end of last year in GMT.                                           |
| [endOfNextMonth](#endofnextmonth)                                       | Global/Scoped | Gets the date and time for the end of next month in GMT.                                          |
| [endOfNextWeek](#endofnextweek)                                         | Global/Scoped | Gets the date and time for the end of next week in GMT.                                           |
| [endOfNextYear](#endofnextyear)                                         | Global/Scoped | Gets the date and time for the end of next year in GMT.                                           |
| [endOfThisMonth](#endofthismonth)                                       | Global/Scoped | Gets the date and time for the end of this month in GMT.                                          |
| [endOfThisQuarter](#endofthisquarter)                                   | Global/Scoped | Gets the date and time for the end of this quarter in GMT.                                        |
| [endOfThisWeek](#endofthisweek)                                         | Global/Scoped | Gets the date and time for the beginning of this week in GMT.                                     |
| [endOfThisYear](#endofthisyear)                                         | Global/Scoped | Gets the date and time for the end of this year in GMT.                                           |
| [endOfToday](#endoftoday)                                               | Global        | Gets the date and time for the end of today in GMT.                                               |
| [endOfYesterday](#endofyesterday)                                       | Global        | Gets the date and time for the end of yesterday in GMT.                                           |
| [hoursAgoEnd](#hoursagoend)                                             | Global/Scoped | Gets a date and time for the end of the hour a certain number of hours ago.                       |
| [hoursAgoStart](#hoursagostart)                                         | Global/Scoped | Gets a date and time for the start of the hour a certain number of hours ago.                     |
| [hoursAgo](#hoursago)                                                   | Global/Scoped | Gets a date and time for a certain number of hours ago.                                           |
| [isFirstDayOfMonth](#isfirstdayofmonth)                                 | Global        | Checks whether the date is the first day of the month.                                            |
| [isFirstDayOfWeek](#isfirstdayofweek)                                   | Global        | Checks whether the date is the first day of the week(Monday).                                     |
| [isFirstDayOfYear](#isfirstdayofyear)                                   | Global        | Checks whether the date is the first day of the year                                              |
| [isLastDayOfMonth](#islastdayofmonth)                                   | Global        | Checks whether the date is the last day of the month.                                             |
| [isLastDayOfWeek](#islastdayofweek)                                     | Global        | Checks whether the date is the last day of the week.                                              |
| [isLastDayOfYear](#islastdayofyear)                                     | Global        | Checks whether the date is the last day of the year.                                              |
| [lastWeek](#lastweek)                                                   | Global        | Date and time one week ago in GMT.                                                                |
| [minutesAgoEnd](#minutesagoend)                                         | Global        | Gets a date and time for the end of the minute a certain number of minutes ago.                   |
| [minutesAgoStart](#minutesagostart)                                     | Global        | Gets a date and time for a certain number of minutes ago.                                         |
| [minutesAgo](#minutesago)                                               | Global        | Gets a date and time for a certain number of minutes ago.                                         |
| [monthsAgoEnd](#monthsagoend)                                           | Global/Scoped | Gets a date and time for the last day of the month a certain number of months ago.                |
| [monthsAgoStart](#monthsagostart)                                       | Global/Scoped | Gets a date and time for the first day of the month a certain number of months ago.               |
| [monthsAgo](#monthsago)                                                 | Global/Scoped | Gets a date and time for a certain number of months ago.                                          |
| [nowDateTime](#nowdatetime)                                             | Global        | Gets the current date and time.                                                                   |
| [nowGlideDateTime](#nowglidedatetime)                                   | Global        | Returns a GlideDateTime object with the current date and time.                                    |
| [nowNoTZ](#nownotz)                                                     | Global        | Gets the current GMT date time.                                                                   |
| [now](#now)                                                             | Global        | Gets the current date.                                                                            |
| [quartersAgoEnd](#quartersagoend)                                       | Global/Scoped | Gets a date and time for the last day of the quarter a certain number of quarters ago.            |
| [quartersAgoStart](#quartersstart)                                      | Global/Scoped | Gets a date and time for the first day of the quarter a certain number of quarters ago.           |
| [quartersAgo](#quartersago)                                             | Global        | Gets a date and time for a certain number of quarters ago.                                        |
| [yearsAgo](#yearsago)                                                   | Global/Scoped | Gets a date and time for a certain number of years ago.                                           |
| [yesterday](#yesterday)                                                 | Global/Scoped | Gets yesterday's time.                                                                            |

## addErrorMessage

This is a way to display an error message to a user.

``` {.js}
gs.addErrorMessage(gs.getMessage("To make a survey public, you need remove the signature"));
```

![GS Add Error Message](/uploads/gs-addErrorMessage.png)

## addInfoMessage

This is a way to display an infomational message to a user.

``` {.js}
gs.addInfoMessage(gs.getMessage("{0}.  Hello!", 'I am no 1'));
```

![GS Add Info Message](/uploads/gs-addInfoMessage.png)

## addMessage

This is a older method to add a message. I'd highly suggest not using
this, however you can and if you want to see the result you can do so
with the Xplore application.

``` {.js}
//I don't suggest using this...
gs.addMessage('test','again');
gs.addMessage('test','again2');
var messages = gs.getMessages('test').toString();
gs.print(messages);//seems to work in Xplore but doesnt echo the contents in background scripts
```

## base64Decode

There is a post on [John Anderson's
site](http://www.john-james-andersen.com/blog/service-now/easy-base64-encoding-in-servicenow.html)
about base64 encoding and decoding.

Here's the bit;

> Base 64 encoding is a method used to convert binary data into ASCII
> strings. This is especially helpful if you want to convert a file,
> picture, or other object into a string in order to distribute it
> through mechanisms such as web services or database storage.
>
> This type of encoding will convert any sort of data into a string of
> case-sensitive letters and numbers. While the result will generally be
> a longer string of text than its original counterpart, it offers
> benefits such as taking a variety of types of data and converting it
> to something that can be passed over a URL, or stored in a text field.
>
> While there is little documentation on converting data to base 64
> format in ServiceNow, it can actually be done with a single line of
> code. The following code snippet will take a string and convert it to
> its base 64 equivalent and printed to the log. It will then take that
> new base64 string and decode back it its original format and write it
> to the system log.

``` {.js}
gs.base64Encode("My String");
gs.base64Decode("ENCODEDSTRINGGOESHERE");
```

## base64Encode

There is a post on [John Anderson's
site](http://www.john-james-andersen.com/blog/service-now/easy-base64-encoding-in-servicenow.html)
about base64 encoding and decoding.

Here's the bit;

> Base 64 encoding is a method used to convert binary data into ASCII
> strings. This is especially helpful if you want to convert a file,
> picture, or other object into a string in order to distribute it
> through mechanisms such as web services or database storage.
>
> This type of encoding will convert any sort of data into a string of
> case-sensitive letters and numbers. While the result will generally be
> a longer string of text than its original counterpart, it offers
> benefits such as taking a variety of types of data and converting it
> to something that can be passed over a URL, or stored in a text field.
>
> While there is little documentation on converting data to base 64
> format in ServiceNow, it can actually be done with a single line of
> code. The following code snippet will take a string and convert it to
> its base 64 equivalent and printed to the log. It will then take that
> new base64 string and decode back it its original format and write it
> to the system log.

``` {.js}
gs.base64Encode("My String");
gs.base64Decode("ENCODEDSTRINGGOESHERE");
```

## cacheFlush

``` {.js}
gs.cacheFlush();
/* Output
Starting cache flush
Flushing cache
Loading properties from DB
Cache flush complete
*/
```

## clearMessages

This is related the [addMessage](#addmessage) method above. Like that
one, I don't see any reason to use this.

``` {.js}
gs.clearMessages()
```

## debug

This method was added around the time scoped apps were added as
`gs.print` was made unavailable. In anycase, this is just a level of
logging.

``` {.js}
gs.debug('This is a message with {0}, {1}, {2}, {3}, {4} parameters','one','two','three','four','five');
//*** Script: [DEBUG] This is a message with one, two, three, four, five parameters
```

## disableSessionScopeDebug

## dropColumnQuick

``` {.js}
//this seems to be used by a business rule when a sys_dictionary element is deleted.
if(GlideTableDescriptor.fieldExists(current.name.toString(), current.element.toString())) {
  var duplicates = new GlideRecord('sys_dictionary');
  duplicates.addQuery('name',current.name);
  duplicates.addQuery('element',current.element);
  duplicates.query();
  if (!duplicates.next()) {
    gs.dropColumnQuick(current.name, current.element);
  }
}
```

## dropTable

``` {.js}
gs.dropTable(this.tableName);
```

## enableDomain

## error

This method was added around the time scoped apps were added as
`gs.print` was made unavailable. In anycase, this is just a level of
logging.

``` {.js}
gs.error('This is a message with {0}, {1}, {2}, {3}, {4} parameters','one','two','three','four', 'five');
//*** Script: This is a message with one, two, three, four, five parameters: no thrown error
```

## eventQueueScheduled

This creates a `sysevent` record with a `process_on` to be set to the
specified date and time.

This takes six properties, with the last being optional.

| Parameter   | Description                                          |
|-------------|------------------------------------------------------|
| Parameter 1 | Event name, should be registered                     |
| Parameter 2 | GlideRecord object the event gets access to          |
| Parameter 3 | A string the event has access to via `parm1`         |
| Parameter 4 | A string the event has access to via `parm2`         |
| Parameter 5 | A GlideDateTime to set the `process_on` on the event |

``` {.js}
var gdt = new GlideDateTime();
gdt.addSeconds(100);
var inc = new GlideRecord('incident');
inc.setLimit(1);
inc.query();
if(inc.next()){
  gs.print('...');
  gs.eventQueueScheduled('user.view', inc, 'Parm1', 'Parm2', gdt);
}
```

## eventQueue

This takes five properties, with the last being optional.

| Parameter   | Description                                  |
|-------------|----------------------------------------------|
| Parameter 1 | Event name, should be registered             |
| Parameter 2 | GlideRecord object the event gets access to  |
| Parameter 3 | A string the event has access to via `parm1` |
| Parameter 4 | A string the event has access to via `parm2` |
| Parameter 5 | Optional. Event Queue to run this on         |

``` {.js}
gs.eventQueue('cost_center.affected', current, itemSysID, itemName);
```

## executeNow

``` {.js}
//gs.executeNow();
```

## fieldExists

``` {.js}
gs.fieldExists('incident', 'rfc')
```

## flushAccessMessages

## flushMessages

## flushWorkflow

## generateGUID

``` {.js}
gs.generateGUID();
```

## getAccessMessages

## getCallerScopeName

## getCssCacheVersionString

``` {.js}
gs.getCssCacheVersionString();
```

## getCurrentApplicationId

## getCurrentApplicationScope

## getCurrentScopeName

``` {.js}
gs.getCurrentScopeName();
```

## getDisplayColumn

## getDisplayValueFor

## getErrorMessages

Returns the list of error messages for the session that were added by
addInfoMessage().

``` {.js}
gs.addErrorMessage('one');
gs.addErrorMessage('two');
gs.addErrorMessage('three');
gs.addErrorMessage('four');
gs.print(gs.getErrorMessages()); // returns [one, two, three, four];
```

## getEscapedMessage

## getEscapedProperty

## getImpersonatingUserDisplayName

``` {.js}
//returns null if not impersonating
//otherwise retruns string
gs.getImpersonatingUserDisplayName();
```

## getImpersonatingUserName

``` {.js}
//returns null if not impersonating
//otherwise retruns string
gs.getImpersonatingUserName();
```

## getInfoMessages

Returns the list of info messages for the session that were added by
addInfoMessage().

``` {.js}
gs.addInfoMessage('one');
gs.addInfoMessage('two');
gs.addInfoMessage('three');
gs.addInfoMessage('four');
gs.print(gs.getInfoMessages()); // returns [one, two, three, four];
gs.addInfoMessage('five');
```

## getMessages

This is related the [addMessage](#addmessage) method above. Like that
one, I don't see any reason to use this.

``` {.js}
//I don't suggest using this...
gs.addMessage('test','again');
gs.addMessage('test','again2');
var messages = gs.getMessages('test').toString();
gs.print(messages);//seems to work in Xplore but doesnt echo the contents in background scripts
```

## getMessageS translated

## getMessage

This is related the [addMessage](#addmessage) method above. Like that
one, I don't see any reason to use this.

## getNodeID

This is undocumented. This seems to return the `sys_id` of the
`sys_cluster_state` the current script is running on. It can be found in
the Scripted Web Service `InstanceInfo`.

``` {.js}
// resp.result.node_id = ensure(gs.getNodeID());
gs.print(gs.getNodeID());
// 98a4fd3f0ede2c576c28d9b0a3a6073b
```

## getSystemID

This is undocumented. This seems to return the `system_id` of the
`sys_cluster_state` the current script is running on. It can be found in
the Scripted Web Service `InstanceInfo`.

``` {.js}
// resp.result.system_id = ensure(gs.getSystemID());
gs.print(gs.getSystemID());
// app128069.sin1.service-now.com:dev32369555
```

## getInstanceIP

This is undocumented. This seems to return a IP address. It can be found
in the Scripted Web Service `InstanceInfo`.

``` {.js}
// resp.result.instance_ip = ensure(gs.getInstanceIP());
gs.print(gs.getInstanceIP());
// 10.132.128.69
```

## getNodeValue

## getPreference

``` {.js}
gs.getPreference('table.compact');
```

## getProperty

This returns the value of a property, or if the property doesn't exist,
the second parameter.

``` {.js}
//returns property or parm2
gs.getProperty("glide.sc.checkout.twostep", "false");
```

## getScriptError

This is undocumented. This however doesn't seem to actually return
anything.

``` {.js}
//var error = gs.getScriptError(current.script);
var errorScript = 'var a = 1;var b = 0;console.log(a/b);';
var error = gs.getScriptError(errorScript);
gs.print(error);//retuns null
```

## getSessionID

Returns the
[GlideSession](https://developer.servicenow.com/app.do#!/api_doc?v=kingston&id=c_GlideSessionScopedAPI)
Session ID.

``` {.js}
gs.getSessionID();
// FE2A72810F321300FC69CDBCE1050EBA
```

## getSessionToken

This defines the [g\_ck](/g_ck) defined in most places.

``` {.js}
gs.getSessionToken();
```

## getSession

Gets a session object as [documented
here](https://developer.servicenow.com/app.do#!/api_doc?v=kingston&id=c_GlideSessionScopedAPI).

``` {.js}
gs.getSession();
```

## getStyle

## getTimeZoneName

I think this is part of GlideSession

## getTrivialMessages

## getUrlOnStack

``` {.js}
gs.getUrlOnStack();
```

## getUserDisplayName

``` {.js}
gs.getUserDisplayName();
```

## getUserID

``` {.js}
var userID = gs.getUserID();
gs.print(userID);
// *** Script: d7004dd20f021300fc69cdbce1050eff
```

## getUserNameByUserID

## getUserName

``` {.js}
gs.getUserName();
```

## getUser

Gets a [user obj](/glideuser/).

``` {.js}
gs.getUser();
```

## getXMLNodeList

## getXMLText

Gets the text of a xml node.

``` {.js}
var symbol = gs.getXMLText(current.payload, "//StockQuotes/Stock/Symbol");
```

## hasRoleInGroup

## hasRole

``` {.js}
gs.hasRole("mid_server");//returns true/false
```

## include

## info

This method was added around the time scoped apps were added as
`gs.print` was made unavailable. In anycase, this is just a level of
logging.

``` {.js}
gs.info('This is a message with {0}, {1}, {2}, {3}, {4} parameters','one','two','three','four','five');
//*** Script: This is a message with one, two, three, four, five parameters
```

## isCurrentApplicationCustom

``` {.js}
gs.isCurrentApplicationCustom();//returns true/false
```

## isCurrentApplicationInGlobalScope

``` {.js}
gs.isCurrentApplicationInGlobalScope();//returns true/false
```

## isDatabaseView

``` {.js}
gs.isDatabaseView(ListProperties.getTable();//returns true/false
```

## isDebugging

## isInteractive

``` {.js}
gs.isInteractive();//returns true/false
```

## isLoggedIn

If you're logged in returns `true`, else, `false`.

``` {.js}
gs.isLoggedIn();//returns true/false
```

## isMobile

According to [this
page](https://docs.servicenow.com/bundle/geneva-servicenow-platform/page/administer/tablet_and_mobile_ui/reference/r_TestingForMobileDevicesInScripts.html)
you should use `gs.isMobile()` to determine whether or not an action was
taken through a mobile UI.

Additionally, you can use this to prevent a UI action from appearing in
the mobile interface.

``` {.js}
gs.isMobile();//returns true/false
```

## isPaused

``` {.js}
// if we're paused, then upgrade is running...
if (gs.isPaused()) {}
```

## isTableInScope

``` {.js}
gs.isTableInScope();//returns true/false
```

## isValidScript

``` {.js}
gs.isValidScript(current.script);
```

## loadGlobalScripts

``` {.js}
gs.loadGlobalScripts();
```

## logError

This method is not available to scoped applications, so I'd suggest
using [gs.info()](#info) instead.

This creates a record on the `syslog` table with a level of 2.

``` {.js}
gs.logError('message','source');
```

## logWarning

This method is not available to scoped applications, so I'd suggest
using [gs.info()](#info) instead.

This creates a record on the `syslog` table with a level of 1.

``` {.js}
gs.logWarning('message','source');
```

## log

This method is not available to scoped applications, so I'd suggest
using [gs.info()](#info) instead.

This creates a record on the `syslog` table with a level of 0.

``` {.js}
gs.log('message','source');
```

## nil

This is undocumented. It's used all over though. Below is a ACL script
on `kb_social_qa_subscribe`.

``` {.js}
if(gs.nil(current.question) || current.operation() == 'insert')
  answer = true;
else
  answer = new SocialQACommon().canRead(current.question.kb_knowledge_base);
```

## print

This method is not available to scoped applications, so I'd suggest
using [gs.info()](#info) instead.

``` {.js}
gs.print('hello world');
```

## sendRedirect

This is undocumented. It appears to always be used when wanting to
redirect the user. I'm not sure how its differetn then
[`setRedirect`](#setredirect). You can see this in use on the UI Page
`assessment_take2`.

``` {.js}
// ...
function saveAssessment() {
  if (!instance_sysID) {
    gs.log('Error in submitting assessment instance');
    gs.sendRedirect('home.do');
  }
// ...
```

## setCurrentApplicationId

This is undocumented. It can be found a few places. The business rule
"Set Current Application" seems self explantory;

``` {.js}
gs.setCurrentApplicationId(current.sys_id);
//...
```

## setProperty

Sets the specified key to the specified value if the property is within
the script's scope.

``` {.js}
gs.setProperty("glide.foo","bar","foo");
gs.info(gs.getProperty("glide.foo"));
```

## setRedirect

Sets the redirect URI for this transaction, which then determines the
next page the user will see.

``` {.js}
var path = "com.glideapp.servicecatalog_cat_item_view.do?";
path += "sysparm_id=d41ce5bac611227a0167f4bf8109bf70&";
path += "sysparm_user=" + current.sys_id;
path += "&sysparm_email=" + current.email;
gs.setRedirect(path);
```

## setReturn

This is only available in `global`.

Sets the return URI for this transaction. This determines what page the
user will be directed to when they return from the next form.

``` {.js}
gs.setReturn (current.getLink(true));
```

## sleep

I am really suprised this is undocumented, but it is. It's used out of
box a few places. This expects a number for the quantity of milleseconds
to delay the server processing.

``` {.js}
var timeInMS = 1000;//1 second in milleseconds
gs.sleep(timeInMs);
```

## suppressTextIndex

This is undocumented and found a few places, one of which is the UI Page
`service_preview_generator`.

``` {.xml}
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
   <g:evaluate var="jvar_new_staged_id" jelly="true">
      var oldStagedGR = new GlideRecord("sc_ic_item_staging");
      var newStagedID = "";
      if (oldStagedGR.get(jelly.sysparm_staged_item)) {
         var updateSynchWasSuppressed = gs.suppressUpdateSynch(true);
         var textIndexWasSuppressed = gs.suppressTextIndex(true);
         try {
            newStagedID = copyDraftService(jelly.sysparm_staged_item, oldStagedGR.name);
            var newStagedGR = new GlideRecord("sc_ic_item_staging");
            newStagedGR.get(newStagedID);
            sc_ic_Factory.wrap(newStagedGR).publish();
         } catch(e) {
         } finally {
            gs.suppressUpdateSynch(updateSynchWasSuppressed);
            gs.suppressTextIndex(textIndexWasSuppressed);
         }
      }
      newStagedID;
   </g:evaluate>

   <j:if test="${newStagedID != ''}">
      <script>
         document.location.href = "service_preview.do?sysparm_id=${jvar_new_staged_id}${AMP}sysparm_preview=true";
      </script>
   </j:if>
</j:jelly>
```

## suppressUpdateSynch

This is undocumented and found a few places, one of which is the UI
Action called, "Preview Service".

``` {.js}
var newServiceID = '';
var wasSuppressed = gs.suppressUpdateSynch(true);
try {
   var newServiceID = copyDraftService(current.getUniqueValue(), current.name);
   var newServiceGR = new GlideRecord("sc_ic_item_staging");
   newServiceGR.get(newServiceID);
   sc_ic_Factory.wrap(newServiceGR).publish();
} catch(e) {
} finally {
   gs.suppressUpdateSynch(wasSuppressed);
}
if (newServiceID != '')
   action.setRedirectURL("service_preview.do?sysparm_id=" + newServiceID + "&sysparm_preview=true&sysparm_staged_image_id=" + current.getUniqueValue());
```

## tableExists

Determines if a database table exists.

``` {.js}
gs.tableExists('live_group_profile');
// true if table exists, otherwise false.
```

## templateOrMacroExists

This is undocumented and found on the `catalog_item` UI Macro;

``` {.xml}
<g2:evaluate var="jvar_exists">
    var templateName ='com.glideapp.servicecatalog_' +
    sc_cat_item.sys_class_name + '.xml';
    gs.templateOrMacroExists(templateName);
</g2:evaluate>
```

## unloadChoices

This is not documented and found on the `Choices unload` business rule
for Table `[sys_choice]`. I believe this is what adds all choices to an
update set when the `sys_choice` gets modified. It's just a guess.

``` {.js}
gs.unloadChoices(current.name, current.element, 'true');
```

## unWrap

This is not documented and found on the `assesment_redirect` UI Page.
Below I've listed the HTML and client script.

``` {.xml}
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
  <g2:evaluate var="jvar_unwrapped_url" jelly="true">
    var url = jelly.sysparm_survey_url;
    url = gs.unWrap(url);
    url;
  </g2:evaluate>
  ${gs.getMessage("Redirecting to your survey")}...
</j:jelly>
```

``` {.js}
document.location.href = "$[JS:jvar_unwrapped_url]";
```

## updateSave

``` {.js}
gs.updateSave(current);
```

## urlDecode

This doesn't seem to work. I tried the following script and it just sets
the variable to undefined. Below is what the docs say about this;

> Replaces UTF-8 encoded characters with ASCII characters.

``` {.js}
var decoded = gs.urlDecode('https://dev32369.service-now.com/nav_to.do?uri=%2Fsys.scripts.do');
gs.print(decoded);
// *** Script: undefined
```

## urlEncode

This doesn't seem to work. I tried the following script and it just sets
the variable to undefined. Below is what the docs say about this;

> Encodes non-ASCII characters, unsafe ASCII characters, and spaces so
> the returned string can be used on the Internet. Uses UTF-8 encoding.
> Uses percent (%) encoding.

``` {.js}
var encoded = gs.urlEncode('https://dev32369.service-now.com/nav_to.do?uri=%2Fsys.scripts.do');
gs.print(encoded);
// *** Script: undefined
```

## userID

This returns the logged in user's `sys_id`.

``` {.js}
var userID = gs.userID();
gs.print(userID);
// *** Script: d7004dd20f021300fc69cdbce1050eff
```

## user\_id

``` {.js}
var userID = gs.user_id();
gs.print(userID);
// *** Script: d7004dd20f021300fc69cdbce1050eff
```

## warn

This method was added around the time scoped apps were added as
`gs.print` was made unavailable. In anycase, this is just a level of
logging.

``` {.js}
gs.warn('This is a message with {0}, {1}, {2}, {3}, {4} parameters','one','two','three','four', 'five');
//*** Script: This is a message with one, two, three, four, five parameters
```

## workflowFlush

## xmlToJSON

Takes an XML string and returns a JSON object. This seems to be similar
to the
[XMLHelper](https://docs.servicenow.com/bundle/kingston-application-development/page/script/server-scripting/concept/c_XMLHelper.html)
script include function, `toObject`.

``` {.js}
var xmlStr = "";
xmlStr += "<Names>";
xmlStr += "  <Name>";
xmlStr += "    <FirstName>John</FirstName>";
xmlStr += "    <LastName>Smith</LastName>";
xmlStr += "  </Name>";
xmlStr += "  <Name>";
xmlStr += "    <FirstName>James</FirstName>";
xmlStr += "    <LastName>White</LastName>";
xmlStr += "  </Name>";
xmlStr += "</Names>";

var xmlObj = gs.xmlToJSON(xmlStr);
gs.info(JSON.stringify(xmlObj,'','  '));
/*** Script: {
  "Names": {
    "Name": [
      {
        "FirstName": "John",
        "LastName": "Smith"
      },
      {
        "FirstName": "James",
        "LastName": "White"
      }
    ]
  }
}*/
```
