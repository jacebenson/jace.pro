---
title: GlideDateTime
date: 2016-01-01
layout: page
tags:
- server-side-api
url: "/glidedatetime/"
aliases:
- "/GlideDateTime/"
- "/GDT/"
- "/gdt/"
keywords:
- ""
---
# What is GlideDateTime

GlideDateTime is a server object to handle date modifications in Servicenow;
<!--more-->

[Docs](https://docs.servicenow.com/bundle/kingston-application-development/page/app-store/dev_portal/API_reference/glideDateTimeScoped/concept/c_GlideDateTimeScoped.html)

## add

Adds a GlideTime object or number of milleseconds to the current GlideDateTime object 

```js
// add glidetime object
var gdt = new GlideDateTime("2011-08-31 08:00:00");
var gt = new GlideTime();
gt.setValue("00:00:20");
gdt.add(gt);
gs.info(gdt);
var timeOfGDT = gdt.getTime();
gs.info(timeOfGDT.getByFormat('hh:mm:ss')); // output: 00:20:00

// add ms
var gdtms = new GlideDateTime("2011-08-31 08:00:00");
var mins = 5;
gdtms.add(1000*60*mins);
gs.info(gdtms); // output: 2011-08-31 08:05:00
```

## addDaysLocalTime

Adds a specified number of days to the current GlideDateTime object, expressed in the user’s timezone 

```js
var gdt = new GlideDateTime("2011-08-31 08:00:00");
gdt.addDaysLocalTime(-1);
gs.info(gdt.getLocalDate()); // output: 2011-08-30
```
## addDaysUTC

Adds a specified number of days to the current GlideDateTime object, expressed in the UTC time zone 

```js
var gdt = new GlideDateTime("2011-08-31 08:00:00");
gdt.addDaysUTC(-1);
gs.info(gdt.getDate()); // output: 2011-08-30
```

## addMonthsLocalTime

Adds a specified number of months to the current GlideDateTime object, expressed in the user’s time zone

```js
var gdt = new GlideDateTime("2011-08-31 08:00:00");
gdt.addMonthsLocalTime(2);
gs.info(gdt.getDate()); // output: 2011-10-31
```

## addMonthsUTC

Adds a specified number of months to the current GlideDateTime object, expressed in the UTC time zone 

```js
var gdt = new GlideDateTime("2011-08-31 08:00:00");
gdt.addMonthsUTC(2);
gs.info(gdt.getDate()); // output: 2013-02-07 08:00:00
```

## addSeconds

Adds a specified number of seconds to the current GlideDateTime object

```js
var gdt = new GlideDateTime("2011-12-07 08:00:00");
gdt.addSeconds(1000);
gs.info(gdt.getValue()); // output: 2011-12-07 08:16:40
```

## addWeeksLocalTime

Adds a specified number of weeks to the current GlideDateTime object, expressed in the user’s timezone

```js
var gdt = new GlideDateTime("2011-08-31 08:00:00");
gdt.addWeeksLocalTime(-1);
gs.info(gdt.getDate()); // output: 2011-08-24
```
## addWeeksUTC

Adds a specified number of weeks to the current GlideDateTime object, expressed in the UTC time zone

```js
var gdt = new GlideDateTime("2011-08-31 08:00:00");
gdt.addWeeksUTC(-1);
gs.info(gdt.getDate()); // output: 2011-08-24
```

## addYearsLocalTime

Adds a specified number of years to the current GlideDateTime object, expressed in the user’s time zone 

```js
var gdt = new GlideDateTime("2010-08-31 08:00:00");
gdt.addYearsLocalTime(1);
gs.info(gdt.getDate()); // output: 2011-08-31
```
## addYearsUTC

Adds a specified number of years to the current GlideDateTime object, expressed in the UTC time zone

```js
var gdt = new GlideDateTime("2010-08-31 08:00:00");
gdt.addYearsUTC(1);
gs.info(gdt.getDate()); // output: 2011-08-31
```

## after

Returns true if the object’s data time is after the input argument

```js
var gdt1 = new GlideDateTime("2016-05-09 10:11:12");
var gdt2 = new GlideDateTime("2017-06-12 15:11:12");
gs.info(gdt1.after(gdt2)); // output: false
```

## before

Returns true if the object’s data time is before the input argument 

```js
var gdt1 = new GlideDateTime("2016-05-09 10:11:12");
var gdt2 = new GlideDateTime("2017-06-12 15:11:12");
gs.info(gdt1.before(gdt2)); // output: true
```

## compareTo

Compares two GlideDateTime objects

```js
var initDate = new GlideDateTime("2011-08-01 12:00:00");
var compDate1 = new GlideDateTime("2011-08-01 12:00:00");
var compDate2 = new GlideDateTime("2011-07-31 12:00:00");
var compDate3 = new GlideDateTime("2011-08-04 16:00:00");
 
gs.info(initDate.compareTo(compDate1)); // Equals (0) // output: 0
gs.info(initDate.compareTo(compDate2)); // initDate is after compDate2 (1)  // output: 1
gs.info(initDate.compareTo(compDate3)); // initDate is before compDate3 (-1)  // output: -1
```

## equals

Compares a datetime with an existing value for equality.

```js
var gdt = new GlideDateTime("2011-08-31 00:00:00");
gs.info(gdt.equals("2011-09-30 00:12:01")); // output: false
```

## getDate

Gets the date in the system time zone 

```js
var gdt = new GlideDateTime("2011-08-31 08:00:00");
gs.info(gdt.getDate()); // output: 2011-08-31
```

## getDayOfMonthLocalTime

Gets the day of the month stored by the GlideDateTime object, expressed in the current user’s time zone 

```js
var gdt = new GlideDateTime("2011-12-02 12:00:00");
gs.info(gdt.getDayOfMonthUTC()); // output: 02
```

## getDayOfMonthUTC

Gets the day of the month stored by the GlideDateTime object, expressed in the UTC time zone

```js
var gdt = new GlideDateTime("2011-12-02 12:00:00");
gs.info(gdt.getDayOfMonthLocalTime()); // output: 02
```

## getDayOfWeekLocalTime

Gets the day of the week stored by the GlideDateTime object, expressed in the user’s time zone

```js
var gdt = new GlideDateTime("2011-12-01 12:00:00"); // Thursday
gs.info(gdt.getDayOfWeekLocalTime()); // output: 4 // 1-7, 1=monday
```

## getDayOfWeekUTC

Gets the day of the week stored by the GlideDateTime object, expressed in the UTC time zone 

```js
var gdt = new GlideDateTime("2011-12-01 12:00:00"); // Thursday
gs.info(gdt.getDayOfWeekUTC()); // output: 4 // 1-7, 1=monday
```

## getDaysInMonthLocalTime

Gets the number of days in the month stored by the GlideDateTime object, expressed in the current user's time zone. 

```js
var gdt = new GlideDateTime("2011-12-02 12:00:00"); //December
gs.info(gdt.getDaysInMonthLocalTime()); // returns 31
```

## getDaysInMonthUTC

Gets the number of days in the month stored by the GlideDateTime object, expressed in the UTC time zone 

```js
var gdt = new GlideDateTime("2011-12-02 12:00:00"); //December
gs.info(gdt.getDaysInMonthUTC()); // returns 31
```

## getDisplayValue

Gets the datetime in the current user’s display format and time zone

```js
var gdt = new GlideDateTime("2011-08-31 08:00:00");
gs.info(gdt.getDisplayValue()); //uses current user session time zone (US/Pacific)
```

## getDisplayValueInternal

Gets the display value in the internal datetime format

```js
var gdt = new GlideDateTime("2011-08-31 08:00:00"); 
gs.info(gdt.getDisplayValueInternal()); //uses current user session time zone (US/Pacific)
```

## getDisplayValueWithoutTZ

This method is **UNDOCUMENTED**. So beware it may change.

```js
var gdt = new GlideDateTime("2011-08-31 08:00:00"); 
gs.info(gdt.getDisplayValueWithoutTZ());
```

## getDSTOffset

Gets the amount of time that daylight savings time is offset

```js
```

## getErrorMsg

Gets the current error message

## getInternalFormattedLocalTime

Returns local time with internal time format

## getLocalDate

Gets the date for the user’s time zone

## getLocalTime

Returns a GlideTime object that represents the time portion of the GlideDateTime object in the user’s time zone 

## getMonthLocalTime

Gets the month stored by the GlideDateTime object, expressed in the current user’s time zone

## getMonthUTC

Gets the month stored by the GlideDateTime object, expressed in the UTC time zone 

## getNumericValue

Gets the number of milliseconds since January 1, 1970, 00:00:00 Greenwich Mean Time (GMT) 

## getTime

Returns a GlideTime object that represents the time portion of the GlideDateTime object 

## getTZOffset

Returns the time zone offset in milliseconds. 

## getUserFormattedLocalTime

Returns local time with user time format

## getValue

Gets a datetiime value in the same format as it is stored in the database 

## getWeekOfYearLocalTime

Gets the number of the week stored by the GlideDateTime object, expressed in the user’s time zone 

## getWeekOfYearUTC

Gets the number of the current week of the current year 

## getYearLocalTime

Gets the year stored by the GlideDateTime object, expressed in the current user’s time zone 

## getYearUTC

Gets the year stored by the GlideDateTime object, expressed in the UTC time zone

## hasDate

Determines if an object’s date is set 

## hashCode

**UNDOCUMENTED**

## isDST

Determines if an object’s time uses a daylight savings offset 

## isValid

Determines if a value is a valid datetime 

## onOrAfter

Returns true if the object’s data time is on or after the input argument

## onOrBefore

Returns true if the object’s data time is on or before the input argument 

## setDayOfMonthLocalTime

Sets the day of the month to a specified value in the local time zone 

## setDayOfMonthUTC

Sets the day of the month to a specified value in the UTC time zone 

## setDisplayValue

Sets a date and time value using the current user’s display format and time zone. Also set an optional parameter format, to set date and time format

## setDisplayValueInternal

Sets a date and time value using the internal format and the current user’s time zone 

## setGlideDateTime

Sets the date and time of the current object using an existing GlideDateTime object. This method is equivalent to instantiating a new object with a GlideDateTime parameter 

## setMonthLocalTime

Sets the month stored by the GlideDateTime object to a specified value using the current user’s time zone 

## setMonthUTC

Sets the month stored by the GlideDateTime object to a specified value using the UTC time zone

## setValue

Sets the date and time

## setValueUTC

Sets a date and time value using the UTC time zone and the specified date and time format 

## setYearLocalTime

Sets the year stored by the GlideDateTime object to a specified value using the current user’s time zone

## setYearUTC

Sets the year stored by the GlideDateTime object to a specified value using the UTC time zone 

## subtract

Gets the duration difference between two GlideDateTime values. Pass a single paramter which specifies milliseconds to subtract from the current GlideDateTime object

## toString

Converts a datetime value to a string