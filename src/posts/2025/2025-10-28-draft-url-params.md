---
title: WIP Guide to URL Parameters in ServiceNow
description: >-
    A comprehensive guide to using URL parameters in ServiceNow to customize user
    experience, control navigation, and enhance functionality.
date: '2025-10-28'
tags:
    - servicenow
    - url-parameters
    - navigation
    - tips-and-tricks
    - work-in-progress
---

I realized when I was looking for the "do not add url to history" param that I didn't have a good list of URL parameters for ServiceNow.  So I started compiling one here.  This is a work in progress.  If you have any to add, please let me know.

## Stop redirections

`sysparm_view=manage_security`

> Add sysparm_view=manage_security to stop being navigated away. That'll let you see the form and XML. If you want to see the default form view, you'll need to fiddle with the sys_navigator record - Kieran Anson

## Do not add url to history

`sysparm_nostack=true`

This appears to stop adding the current url to the history stack.  There's a post from 2012 where [Mark Stanger suggests this can solve an issue William Hazelrig was having about this](https://www.servicenow.com/community/developer-forum/how-do-you-prevent-a-form-from-adding-itself-to-the-navigation/m-p/1830653).  This is still used with Legacy Studio to prevent adding itself to the history stack.

## Open a blank form

`sysparm_sys_id=-1`

This opens a new blank form for the table specified in the URL.  For example:
`https://instance.service-now.com/nav_to.do?uri=%2Fincident.do%3Fsys_id%3D-1`
will open a new blank incident form.

## Open a form in a specific view

`sysparm_view=view_name`
This opens the form in the specified view.  For example:
`https://instance.service-now.com/nav_to.do?uri=%2Fincident.do%3Fsys_id%3Dsome_sys_id%26sysparm_view%3Dmy_custom_view`
will open the incident form in the "my_custom_view" view.