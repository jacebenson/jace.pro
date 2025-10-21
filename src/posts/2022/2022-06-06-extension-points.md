---
title: Extension Points
description: "<https://developer.servicenow.com/connect.do#!/event/knowledge19/CCW1630>\r\n\r\nPost about extension points...\r\n\r\nMhz matt a great tldr about this.\r\n\r\n> mhz \r\n>..."
date: '2022-06-06'
tags:
  - servicenow
  - service-catalog
redirectFrom:
  - /extension-points/
---

<https://developer.servicenow.com/connect.do#!/event/knowledge19/CCW1630>

Post about extension points...

Mhz matt a great tldr about this.

> mhz 
> TIL: How scripted extension points work.
> BENEFIT: You can define a script include where the same methods have different implementations for different circumstances.
>
> OVERVIEW:
>
> 1. In the \[sys_extension_point] table, define a script include to serve as interface definition (method signatures and their return types).
> 2. On the record you made in step #1, use "Create Implementation" button to generate a copy of the interface script include, then edit the generated file to handle a specific circumstance.
>    you can do this multiple times to create alternate versions of the script include with same method names but different implementations.
>    each include has a boolean method which can tell if its applicable to the current situation.
>    Its "handles()" method, can initialize internal variables if needed, then returns a boolean to the caller, true if it applies or false means to ignore it.
>    Example:  handles: function() { return record.type=="incident" };
> 3. Create a wrapper script to call the implemented script include(s)
>    wrapper asks for a list of the "extensions" for a script include name
>    loops thru each "extension" calling the boolean "handles()" method, followed by other desired method if handles() returns true.
>    USE CASE: There are many use cases but the one I'm envisioning is when there are multiple different customer integrations for the same table, each with different rules.
>    DISCLAIMER: I'm basing this on studying work of others. I haven't built it myself yet. (edited)