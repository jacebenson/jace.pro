---
aliases:
- '/g_user/'
date: '2016-01-01'
layout: page
tags:
- 'client-side-api'
title: 'GlideUser (client)'
url: '/g_user/'
---

# What is g\_user

`g_user` is used pretty heavily to control access and other things in
Servicenow. I go over all the methods and properties of those below.

-   [GlideUser -
    Client](https://docs.servicenow.com/bundle/jakarta-application-development/page/app-store/dev_portal/API_reference/GlideUser/concept/c_GlideUserAPI.html)

## firstName

The current user's first name.

``` {.js}
 console.log('first name = ' + g_user.firstName);
```

## getClientData

Gets a session client value previously set with putClientData().

Session client data is a set of named strings that may be setup on the
server (using putClientData()) that then may be used by client scripts
(using getClientData()). Can be used during form load time to get
information that the client script needs to make decisions about the
form, for example, which fields should be visible.

``` {.js}
 var loginLanguage = g_user.getClientData("loginlanguage");
```

## getFullName

Returns the first and last name of the current user.

``` {.js}
 var formalName = g_user.getFullName();
```

## hasRole

Returns true if the current user has the specified or admin role.

``` {.js}
 var isAdmin = g_user.hasRole('admin');
```

## hasRoleExactly

Returns true only if the current user has the specified role.

``` {.js}
 var isItil = g_user.hasRoleExactly('itil');
```

## hasRoleFromList

Returns true if the current user has at least one of the specified roles
or has the admin role.

``` {.js}
 var isOK = g_user.hasRoleFromList("itil, maint");
```

## hasRoles

Returns true if the current user has any role.

``` {.js}
 var yesRole = g_user.hasRoles();
```

## lastName

The current user's last name.

``` {.js}
 console.log('last name = ' + g_user.lastName);
```

## userID

The sys\_id of the current user.

``` {.js}
 var userID = g_user.userID;
 console.log('Current user ID = ' + userID);
```

## userName

This property is the current user's username, for example gsmith02. It
is not the user's name, for example George Smith.

``` {.js}
 var userName = g_user.userName;
 console.log('Current user = ' + userName);
```
