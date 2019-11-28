---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "What Are Syntax Macros?"
subtitle: ""
summary: ""
authors: ['jace']
tags: []
categories: []
date: 2019-09-28T19:07:20-05:00
#lastmod: 2019-09-28T19:07:20-05:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

[Syntax Editor Macros](https://docs.servicenow.com/bundle/geneva-servicenow-platform/page/script/general_scripting/reference/r_SyntaxEditorMacros.html) are rarely talked about.
Effectively, they are a text replacement table for script elements.

That might not seem that big of a deal, but for me.  It could have saved me some serious headaches.  Let's look
at the examples provided on the docs site.

`vargr` will replace itself to;

```js
var gr = new GlideRecord("");
gr.addQuery("name", "value");
gr.query();
if (gr.next()) {

}
```

As much as I dislike the use of variable name `gr` as using just that name can cause issues, its nice!

You can change the code up so if you want to ensure a [`glideAjax`](https://sn.jace.pro/docs/scripting/glideajax/)
call always uses some format like I use cause for me consistency is key.

Additionally, because I don't believe anything is permanent online I'll include links and Wayback links to these next
resources.  

This *shark711* person form Australia has had a ["sn-syntax-editor-macro"](https://shark711.github.io/sn-syntax-editor-macro/)
repo public since 2016.  [Wayback Link](https://web.archive.org/web/20190929002112/https://shark711.github.io/sn-syntax-editor-macro/).

In that repo its just a collection of these syntax editor macros.

## Does it work everywhere in the platform?

Sadly, no, it doesn't work in the Service Portal Widget Editor screen :(  

Thankfully, [Dan Gibbard's post](http://snowguy.co.uk/2019/04/27/service-portal-syntax-editor-macros/)
comes to the rescue [Wayback](https://web.archive.org/web/20190929002526/http://snowguy.co.uk/2019/04/27/service-portal-syntax-editor-macros/);

He has a UI Script that he says you just gotta add to the widget editor widget.  That's a mouthful.