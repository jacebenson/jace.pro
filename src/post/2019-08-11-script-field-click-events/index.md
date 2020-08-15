---
title: "New York Features: Auto Suggest, JS Beautify and Context Menus"
subtitle: ""
summary: ""
date: 2019-08-11T20:25:56-05:00
---
New york has a few, nice things added for developers if you still work in the tool and not on some syncer.

This feature specifically is barely noted.  Here's the link to the [documentation](https://docs.servicenow.com/bundle/newyork-release-notes/page/release-notes/summary/rn-summary-new-features.html).
However, it's so short I'll put the text here too;

> HTML auto-suggestions\
> Edit HTML and Jelly scripts and define what is rendered when the page is displayed. 
> The script can contain either static XHTML or dynamically generated content that is defined as Jelly and can call script includes and UI macros.\
> JS Beautify\
> Format code by applying the proper indentation to the script.\
> Context menu\
> Enable the context menu options for script includes, Glide APIs, and tables in the JavaScript editor.\
> \
> With the context menu options, your users can navigate to:\
> - Script include definitions\
> - Glide API documentation\
> - System and custom table definitions and data

Well here I'm going to go over the them.

## HTML auto-suggestions

Well this is a very overdue convenience.  But at least it's here... Or it's allegedly here.  When I tried it by going toa new UI page, modify the XML adding `<div>test` then starting to type `</` nothing came up.. so maybe this isn't here.

## JS Beautify

This isn't really clear that you **apply you're own settings** here.  However you can.  It's controlled via this property, [`glide.ui.syntax_editor.linter.eslint_config`](/properties/glide.ui.syntax_editor.linter.eslint_config/).
This appears to just take a eslint json config object.  An example one would be like this;

```js
{
  "rules": {
    "constructor-super": "warn",
    "no-case-declarations": "warn",
    "no-class-assign": "warn",
    "no-compare-neg-zero": "warn",
    "no-cond-assign": "warn",
    "no-console": "warn",
    "no-const-assign": "warn",
    "no-constant-condition": "warn",
    "no-control-regex": "warn",
    "no-debugger": "warn",
    "no-delete-var": "warn",
    "no-dupe-args": "warn",
    "no-dupe-class-members": "warn",
    "no-dupe-keys": "warn",
    "no-duplicate-case": "warn",
    "no-empty-character-class": "warn",
    "no-empty-pattern": "warn",
    "no-empty": ["warn", { "allowEmptyCatch": true }],
    "no-ex-assign": "warn",
    "no-extra-boolean-cast": "warn",
    "no-extra-semi": "warn",
    "semi" : "warn",
    "no-fallthrough": "warn",
    "no-func-assign": "warn",
    "no-global-assign": "warn",
    "no-inner-declarations": "warn",
    "no-invalid-regexp": "warn",
    "no-irregular-whitespace": "warn",
    "no-mixed-spaces-and-tabs": "warn",
    "no-new-symbol": "warn",
    "no-obj-calls": "warn",
    "no-octal": "warn",
    "no-redeclare": "warn",
    "no-regex-spaces": "warn",
    "no-self-assign": "warn",
    "no-sparse-arrays": "warn",
    "no-this-before-super": "warn",
    "no-undef": "off",
    "no-unexpected-multiline": "warn",
    "no-unreachable": "warn",
    "no-unsafe-finally": "warn",
    "no-unsafe-negation": "warn",
    "no-unused-labels": "warn",
    "no-unused-vars": "off",
    "no-useless-escape": "warn",
    "require-yield": "warn",
    "use-isnan": "warn",
    "valid-typeof": "warn"
  }
}
```

Feel free to read more up on eslint [here on their docs site](https://eslint.org/docs/user-guide/configuring).

Also thanks [Dominik Simunek](https://twitter.com/DoomaSimunek/status/1157404260327407617) for the info to look into this.

## Context Menus for script fields

I noticed the context menu thing before I read about it.  If you have a script include or client script where you invoke some script include, they now show up **bold** and *italicized*.  If you right-click on anything like that, you'll get a few options;

- Show Documentation (which will bring you to docs.servicenow.com for that object)
- Show Definition (which will bring you to the table definition of the content)
- Show Data (which will bring you to the table list of data)
- Open Definition (which will bring you to the script include)

This might seem small but man, will this save me time.
