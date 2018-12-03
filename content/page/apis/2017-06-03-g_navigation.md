---
title: GlideNavigationV3


date: 2016-01-01
layout: page
url: "/g_navigation/"
tags:
- client-side-api
aliases:
- "/glidenavigation/"
- "/glidenavigationv3/"
- "/GlideNavigationV3/"
---
# What is g\_navigation

Provides methods to control and refresh the navigator and main frame.

The GlideNavigation methods are accessed using the g_navigation global object.
<!--more-->

[Developer Documentation](https://docs.servicenow.com/bundle/kingston-application-development/page/app-store/dev_portal/API_reference/GlideNavigationV3/concept/c_GlideNavigationV3API.html)

## open

Redirects to another URL. : URL to be loaded. It can be any URL supported by the browser : is the target frame. If left blank, the URL will load in the current frame                                                                                                                                                                 

## openPopup

Open a popup window with features : The url to open : The name of the new window : is a comma separated list of features. See https://developer.mozilla.org/en-US/docs/Web/API/Window/open : True to append sysparm\_stack=no to the url. This prevents weirdness when using the form back button the instance of newly opened Window |

## openRecord

Redirects to a record                                                                                                                                                                                                                                                                                                                 

## refreshNavigator

Refresh the navigator contents                                                                                                                                                                                                                                                                                                        

## reloadWindow

Reload the current frame