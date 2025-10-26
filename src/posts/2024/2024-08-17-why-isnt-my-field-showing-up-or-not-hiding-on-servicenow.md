---
title: Why is my field missing in ServiceNow?
description: >-
  A quick troubleshooting guide for when fields don't show up or don't hide as expected
  in ServiceNow forms.
date: '2024-08-17'
tags:
  - servicenow
  - business-rules
  - client-scripts
  - ui-policies
  - ui-actions
redirectFrom:
  - /why-isnt-my-field-showing-up-or-not-hiding-on-servicenow/
  - /why-is-my-field-missing-in-servicenow/
---

I really like and use the "why isn't email working" post from forever ago so I decided to do it again but for why a field might not show up.

## My field isn't showing up but should

1.  Does the field exist on the table? `sys_dictionary_list.do`
2.  Is the field on form layout?
3.  Is there a data policy acting like a UI Policy controlling visibility to the field?
4.  Is there a UI Policy controlling visibility to the field?
5.  Is there a Client Script controlling visibility to the field?
6.  Is there a UI Script doing some DOM-manipulation hiding it.
7.  Is there some rogue code in a client side UI Action messing with it?

## My field is showing up but shouldn't

1.  Does the dictionary have the mandatory checkbox checked?  If so you wont be able to hide it.
2.  Does the field have UI Policy making it mandatory?
3.  Is there a Client Script making it mandatory?

## My field isn't updating when I save

1.  You have the field on the form multiple times
2.  You have a business rule setting it's value before save