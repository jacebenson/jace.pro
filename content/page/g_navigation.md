---
aliases:
- '/glidenavigation/'
- '/glidenavigationv3/'
- '/GlideNavigationV3/'
date: '2016-01-01'
keywords:
- open
- openPopup
- openRecord
- refreshNavigator
- reloadWindow
- getURL
layout: page
tags:
- 'client-side-api'
title: GlideNavigationV3
url: '/g_navigation/'
---

# What is g\_navigation

Provides methods to control and refresh the navigator and main frame.

The GlideNavigation methods are accessed using the g\_navigation global
object.

[Developer
Documentation](https://docs.servicenow.com/bundle/kingston-application-development/page/app-store/dev_portal/API_reference/GlideNavigationV3/concept/c_GlideNavigationV3API.html)

## open

Redirects to another URL. : URL to be loaded. It can be any URL
supported by the browser : is the target frame. If left blank, the URL
will load in the current frame

``` {.js}
g_navigation.open(url.getURL(), 'edit_form_design');
nowapi.g_navigation.open(query+subQuery);
```

## openPopup

Open a popup window with features : The url to open : The name of the
new window : is a comma separated list of features. See
https://developer.mozilla.org/en-US/docs/Web/API/Window/open : True to
append sysparm\_stack=no to the url. This prevents weirdness when using
the form back button the instance of newly opened Window \|

## openRecord

Redirects to a record

``` {.js}
g_navigation.openRecord(gr);
```

## refreshNavigator

Refresh the navigator contents

``` {.js}
g_navigation.refreshNavigator();
```

## reloadWindow

Reload the current frame

``` {.js}
if (window.g_form)
  g_navigation.reloadWindow();
```

## getURL

``` {.js}
//Type appropriate comment here, and begin script below
if (g_navigation.getURL().indexOf("sysparm_close_on_success=true") > -1) {
  var form = g_form.getFormElement();
}
```
