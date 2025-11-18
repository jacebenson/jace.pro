---
title: Changing the popup/hover over view in ServiceNow
description: Need to change the hovered view of a form in ServiceNow, the pop up
  if you will?  This covers how to do it.
date: 2025-11-18
tags:
  - servicenow
---
Today I was looking at an issue and had trouble finding the documentation for the hover overview.  That's cause it's not called that.  It's called the "popup" view or "`sys_popup`".  This is a rewrite of the find work [Roger Chew did on the community here](https://www.servicenow.com/community/servicenow-ai-platform-blog/how-to-customize-fields-displayed-on-the-reference-field-pop-up/ba-p/2282544).

If there is no defined `sys_popup` view ServiceNow will default to using the "`default`" view.\
If the view `sys_popup,[viewname]` exists, then this pop up view for the given view will be used.\
If the view `sys_popup` exists and it hasn't been handled yet, this view will be used.

## How to configure the sys_popup view

1. Goto `<instance>.service-now.com/<table>.do?sysparm_view=sys_popup`
2. Right click the header and configure the form with whatever tool is useful (form layout, form designer, etc)

## How to configure the sys_popup for a specific view

1. Goto `<instance>.service-now.com/<table>.do?sysparm_view=sys_popup,ess`
2. Right click the header and configure the form with whatever tool is useful (form layout, form designer, etc)
