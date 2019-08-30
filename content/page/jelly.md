---
aliases:
- '/Jelly/'
date: '2016-01-01'
keywords:
- '\${}'
- '\$\[\]'
- Phase
- 'j:'
- 'g:'
- set
- 'set_if'
- insert
- inline
- call
- evaluate
- if test
- 'empty()'
- RP
- RenderProperties
- getEncodedQuery
- getListControl
- getParameterValue
- getReferringURL
- getViewID
- getViewName
- getWindowProperties
- isInDevStudio
- isInteractive
- isManyToMany
- isRelatedList
layout: page
tags:
- 'server-side-api'
title: Jelly
url: '/jelly/'
---

# What is Jelly

Jelly is executable XML. Jelly maps "tags" to Java classes. Glide uses a
two phase approach.

-   Phase 1 processes `${}`, `<g:namespace>`, and `<j:namespace>`
    things.
-   Phase 2 processes `$[]`, `<g2:namespace>`, and `<j2:namespace>`
    things.

This is light list of things I use in Jelly normally.

I got this information from these places;

-   [SN Wiki
    Jelly](https://web.archive.org/web/20171107181401/http://wiki.servicenow.com/index.php?title=Extensions_to_Jelly_Syntax)
-   [SN Wiki Escaping
    Jelly](https://web.archive.org/web/20161210030255/http://wiki.servicenow.com:80/index.php?title=How_to_Escape_in_Jelly)
-   [SNAUG Jelly Cheat
    Sheet](http://snaug.com/?option=com_content&page_id=39)
-   [Rhino
    JS](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino)

## Tags

Here's a list of tags I generally use when working with Jelly. There are
other tags, but I find my use of them the exception, not the rule.

### Set

``` {.xml}
<j:set var="jvar_element_id" value="I have value!"/>
<label id="label">${jvar_element_id}</label>
```

### If

``` {.xml}
<j:if test="${jvar_something}">...do something...</j:if>
<j:if test="${!jvar_something}">...do something...</j:if>
```

### \${empty()}

``` {.xml}
<j:if test="${empty(jvar_something)}">
    Only shows if jvar_something is empty!
</j:if>
```

### Set If

``` {.xml}
<g2:set_if var="jvar_style"
           test="$[gs.getPreference('table.compact') != 'false']"
           true="margin-top:0px; margin-bottom:0px;"
           false="margin-top:2px; margin-bottom:2px;" />
```

### Insert

`<g:insert>`, inserts a jelly file into your jelly in a new context,
meaning **you can not access** variables previously established in your
Jelly.

``` {.xml}
<g:insert template="get_target_form_function.xml" />
```

### Inline

`<g:inline>`, inserts a jelly file into your jelly in the same context,
meaning **you can acccess** variables previously established in your
Jelly.

``` {.xml}
<g:inline template="element_default.xml" />
```

### Call

`<g:call>`, has better encapulation than the above two. In short, you
can pass values, but **you can't access variables** previously
established in your Jelly unless explicitly passed.

``` {.xml}
<g:call function="collapsing_image.xml"
        id="${jvar_section_id}"
        image="$[jvar_cimg]"
        first_section_id="${jvar_first_section_id}"
        image_alt="${jvar_cimg_alt}"/>
```

### Evaluate

`<g:evaluate>` tag is used to evaluate an expression in [Rhino
Javascript](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino).
The last statement in the expression is the value the variable will
contain. If you would like to have the evaluate return an object (for
example an array), use the argument object="true".

``` {.xml}
<g2:evaluate var="jvar_page" jelly="true" object="true">
     var users = [];
     var sys_user = new GlideRecord("sys_user");
     sys_user.addQuery("active", "true");
     sys_user.query();
     while (sys_user.next()) {
        users.push(sys_user.getValue("name"));
     }
     users;
</g2:evaluate>
<g2:evaluate var="not_important" expression="sc_req_item.popCurrent()"/>
```

## Escaping

Escaping is hell with Jelly and XML. Anything you'd think about escaping
is probably wrong. Here's the short of it.

### Characters

|     Desired Character     | Phase 1     | Phase 2     |
|:-------------------------:|-------------|-------------|
|            `&`            | `${AMP}`    | `$[AMP]`    |
|            `<`            | `${AMP}lt;` | `$[AMP]lt;` |
|            `>`            | `${AMP}gt;` | `$[AMP]gt;` |
|            ` `            | `${SP}`     | `$[SP]`     |

### Values

``` {.xml}
${test.getHTMLValue()}
${JS:expression}
${HTML:expression}
```

Sometimes you need to call `<g:no_escape>${jvar_t}</g:no_escape>`.

## RP aka RenderProperties

[Docs](https://docs.servicenow.com/bundle/london-application-development/page/app-store/dev_portal/API_reference/RenderProperties/concept/RenderProperties-API.html)

### getEncodedQuery

### getListControl

### getParameterValue

``` {.js}
RP.getParameterValue('r');// would return url r= value
```

### getReferringURL

### getViewID

### getViewName

### getWindowProperties

### isInDevStudio

### isInteractive

### isManyToMany

### isRelatedList
