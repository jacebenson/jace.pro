---
date: '2018-08-16'
layout: post
tags:
- service portal
title: 'Service Portal - Viewing whats loaded on the page'
authors: ["jace"]
---

This is blatantly taken from
[HI](https://hi.service-now.com/kb_view.do?sys_kb_id=cc706ab7db19db4058dcf4621f96194e)
as this I think is useful enough to repost nearly verbatim.

If you've ever needed to know exactly which Client Scripts, UI Policies,
and UI Actions are loading onto the page when you view a form or Service
Catalog item in Service Portal, the information is readily available if
your know where to look.

If you are using the out-of-box "SC Catalog Item" and "Form" widgets,
you can find this information in the widget's scope.

To view the widget's scope, hold down the CTRL key and right-click
anywhere in the widget. Choose "Log to console: \$scope". Open your
browser developer tools to the JavaScript console. Expand the "Object"
that has been dumped to the console.

# "Form" widget

------------------------------------------------------------------------

### Client Scripts are located at:

`data.f.client_script`

### UI Policies are located at:

`data.f.policy`

### UI Actions are located at:

`data.f._ui_actions`

------------------------------------------------------------------------

# "SC Catalog Item" widget

------------------------------------------------------------------------

### Client Scripts are located at:

`data.sc_cat_item.client_script`

### UI Policies are located at:

`data.sc_cat_item.policy`
