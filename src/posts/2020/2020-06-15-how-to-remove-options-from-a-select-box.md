---
title: How to remove options from a select box
description: "In the past people have asked How do I\_Remove an option from select box variable in the catalog item form? And you'd think it would be something as simple as..."
date: '2020-06-15'
tags:
  - servicenow
redirectFrom:
  - /how-to-remove-options-from-a-select-box/
  - /p/2020-06-15-how-to-remove-options-from-a-select-box/
---

<!--StartFragment-->

In the past people have asked How do I [Remove an option from select box variable in the catalog item form](https://community.servicenow.com/community?id=community_question&sys_id=1f5fb2a9db58dbc01dcaf3231f96199a)? And you'd think it would be something as simple as a `active` flag. However if you look there is no `active` flag on select box options. That is truly unfortunate.

If you delete it, the values will still hold their `value` but if there was a display for the value it won't show that.

## [How do I go forward?](https://jace.pro/post/2020-06-15-removing-options-from-choicelists-on-catalog/#how-do-i-go-forward)

There's really only one way I know of. Client script and remove the option until you can safely delete it.

The client script would be really small

```javascript
function onLoad(){
  g_form.removeOption('duration','twelve_months');
}
```

Another way... that is really overkill but I think handles it the best, is to disable the item and make a new version of the item.

* Deactivate the item
* Make a Copy - this ensures all past requests work as they were intended. It's a big change for a little bit of work I have seen this.
* Delete the option on the new version of the item

## [Related things](https://jace.pro/post/2020-06-15-removing-options-from-choicelists-on-catalog/#related-things)

* Related Question: <https://community.servicenow.com/community?id=community_question&sys_id=1f5fb2a9db58dbc01dcaf3231f96199a>
* Related Post: <https://www.servicenowguru.com/scripting/client-scripts-scripting/removing-disabling-choice-list-options>

<!--EndFragment-->