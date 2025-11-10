---
title: What Are Syntax Macros?
description: "Syntax Editor Macros\_are rarely talked about.\\\r\nEffectively, they are a text replacement table for script elements.\r\n\r\nThat might not seem that big of a deal..."
date: '2019-09-29'
tags:
  - servicenow
redirectFrom:
  - /what-are-syntax-macros/
  - /p/2019-09-28-what-are-syntax-macros/ 
  - /2019-09-28-what-are-syntax-macros/
---

<!--StartFragment-->

[Syntax Editor Macros](https://docs.servicenow.com/bundle/geneva-servicenow-platform/page/script/general_scripting/reference/r_SyntaxEditorMacros.html) are rarely talked about.\
Effectively, they are a text replacement table for script elements.

That might not seem that big of a deal, but for me. It could have saved me some serious headaches. Let's look at the examples provided on the docs site.

`vargr` will replace itself to;

<!--EndFragment-->

<!--StartFragment-->

```javascript
var gr = new GlideRecord("");
gr.addQuery("name", "value");
gr.query();
if (gr.next()) {

}
```

<!--EndFragment-->

<!--StartFragment-->

As much as I dislike the use of variable name `gr` as using just that name can cause issues, its nice!

You can change the code up so if you want to ensure a [`glideAjax`](https://sn.jace.pro/docs/scripting/glideajax/) call always uses some format like I use cause for me consistency is key.

Additionally, because I don't believe anything is permanent online I'll include links and Wayback links to these next resources.

This *shark711* person form Australia has had a ["sn-syntax-editor-macro"](https://shark711.github.io/sn-syntax-editor-macro/) repo public since 2016. [Wayback Link](https://web.archive.org/web/20190929002112/https://shark711.github.io/sn-syntax-editor-macro/).

In that repo its just a collection of these syntax editor macros.

## Does it work everywhere in the platform?

Sadly, no, it doesn't work in the Service Portal Widget Editor screen :(

Thankfully, [Dan Gibbard's post](http://snowguy.co.uk/2019/04/27/service-portal-syntax-editor-macros/) comes to the rescue [Wayback](https://web.archive.org/web/20190929002526/http://snowguy.co.uk/2019/04/27/service-portal-syntax-editor-macros/);

He has a UI Script that he says you just gotta add to the widget editor widget. That's a mouthful.

<!--EndFragment-->

Thanks jgr1ffin for sharing <https://www.cheatography.com/kipp/cheat-sheets/personal-servicenow-syntax-macros/>