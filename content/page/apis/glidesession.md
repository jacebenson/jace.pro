---
aliases:
- '/GlideSession/'
date: '2016-01-01'
keywords:
- clearClientData
- getClientData
- getClientIP
- getCurrentApplicationId
- getLanguage
- getSessionToken
- getRoles
- getTimeZoneName
- getUrlOnStack
- isImpersonating
- isInteractive
- isLoggedIn
- putClientData
layout: page
tags:
- 'server-side-api'
title: GlideSession
url: '/glidesession/'
---

# What is GlideSession

GlideSession is often confused, for me at least, with `gs`. You need to
make a `gs` call to get the session, but the session itself has very
specific functions that can be really useful. Below I go over those.
Here's a link to the
[docs](https://docs.servicenow.com/bundle/jakarta-application-development/page/app-store/dev_portal/API_reference/GlideSession/concept/c_GlideSessionAPI.html).

| Property / Method       | Scoped                             | Global                     |
|-------------------------|------------------------------------|----------------------------|
| clearClientData         |                                    | [Global](#clearclientdata) |
| getClientData           | [Scoped](#getclientdata)           | [Global](#getclientdata)   |
| getClientIP             | [Scoped](#getclientip)             |                            |
| getCurrentApplicationId | [Scoped](#getcurrentapplicationid) |                            |
| getLanguage             | [Scoped](#getlanguage)             | [Global](#getlanguage)     |
| getSessionToken         | [Scoped](#getsessiontoken)         |                            |
| getRoles                |                                    | [Global](#getroles)        |
| getTimeZoneName         | [Scoped](#gettimezonename)         | [Global](#gettimezonename) |
| getUrlOnStack           | [Scoped](#geturlonstack)           |                            |
| isImpersonating         | [Scoped](#isimpersonating)         | [Global](#isimpersonating) |
| isInteractive           | [Scoped](#isinteractive)           |                            |
| isLoggedIn              | [Scoped](#isloggedin)              | [Global](#isloggedin)      |
| putClientData           | [Scoped](#putclientdata)           | [Global](#putclientdata)   |

\<!--

# GlideSession

| Property/Method         | Description                                                                                        |
|-------------------------|----------------------------------------------------------------------------------------------------|
| getTimeZoneName         | Get the Time Zone name associated with the user                                                    |
| putClientData           | Store a value in an active session                                                                 |
| getLanguage             | Language used by the user                                                                          |
| getUrlOnStack           | Gets the current URI for the session                                                               |
| getClientData           | Fetch the value in active session based on the name                                                |
| isInteractive           | Checks if the current session is interactive                                                       |
| getClientIP             | Gets the client IP address                                                                         |
| isLoggedIn              | Determines if the current user is currently logged in                                              |
| getCurrentApplicationId | Gets the ID of current application, defined as a user preference and set by the application picker |

--

## clearClientData

Clears a session client value previously set with putClientData().

This method is used in a client script to clear data values that were
set by a server script using the putClientData() method.

``` {.js}
var session = gs.getSession();
session.putClientData('custName', 'Harry');
var clientData = session.getClientData('custName');
gs.info(clientData);

session.clearClientData('custName');
clientData = session.getClientData('custName');
gs.info(clientData);
/**
 * Harry
 *
 * null
 */
```

## getClientData

Gets a session client value previously set with putClientData().

This method is used in a client script to retrieve data values that were
set by a server script that used the putClientData() method.

``` {.js}
var session = gs.getSession();
session.putClientData('test1', 'Harry');
var clientData = session.getClientData('test1');
gs.info(clientData);
/*
 * Harry
 */
```

## getClientIP

Returns the client IP address.

``` {.js}
var session = gs.getSession();
var addr = session.getClientIP();
gs.info(addr);
// 50.59.164.97
```

## getCurrentApplicationId

Returns the application currently selected in the application picker.

This method requires admin privileges.

``` {.js}
var session = gs.getSession();
var appID = session.getCurrentApplicationId();
gs.info(appID);
// ce05b9f32b840200c5244f74b4da1501
```

## getLanguage

Gets the session's language code.

``` {.js}
var session = gs.getSession();
var language = session.getLanguage();
gs.info(language);
/**
 * en
 */
```

## getSessionToken

Returns the session token.

``` {.js}
var session = gs.getSession();
var token = session.getSessionToken();
gs.info(token);
// 4284b5372b840200c5244f74b4da15f2c3476cf7fcb6572afa4ef9d5e6d307a5fd9e1da7
```

## getRoles

Gets a list of roles for the current user.

The list of roles does not reflect any changes made during the current
user session. To get the updated list of roles, the user must log out
and log back in.

``` {.js}
gs.info(gs.getSession().getRoles());
// admin,hr_fulfiller,itsa_fulfiller,security_admin
```

## getTimeZoneName

Gets the name of the session's time zone.

``` {.js}
var session = gs.getSession();
var zoneName = session.getTimeZoneName();
gs.info(zoneName);
// US/Pacific
```

## getUrlOnStack

Returns the URL on the stack. Returns null if the stack is empty.

``` {.js}
var session = gs.getSession();
var URL = session.getUrlOnStack();
gs.info(URL);
// sys_app.do?sys_id=ce05b9f32b840200c5244f74b4da1501&sysparm_goto_url=sys_app.do%3Fsys_id%3Dce05b9f32b840200c5244f74b4da1501
```

## isImpersonating

Returns true if the user is impersonating another user.

``` {.js}
var isImpersonator = gs.getSession().isImpersonating();
gs.info(isImpersonator);
// true
```

## isInteractive

Determines if the current session is interactive.

An interactive session is one that involves an end-user interacting with
a user interface that then retrieves information from a server. An
example of this type of session is when a user logs in using the log-in
screen or uses a form to query a data store. A non-interactive session
is one that only involves programmatic interaction with a server such as
a SOAP request to retrieve data.

``` {.js}
var interActive = gs.getSession().isInteractive();
gs.info(interActive);
// false
```

## isLoggedIn

Determines if the current user is currently logged in.

``` {.js}
var session = gs.getSession();
var loggedIn = session.isLoggedIn();
gs.info(loggedIn);
// true
```

## putClientData

Sets a session client value that can be retrieved with getClientData().
This method is used in a server side script that runs when a form is
created.

``` {.js}
var session = gs.getSession();
session.putClientData('test1', 'Harry');
var clientData = session.getClientData('test1');
gs.info(clientData);
// Harry
```
