---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "SN DevToolBox"
summary: ""
authors: []
tags: []
categories: []
date: 2019-09-12T01:29:04-05:00

# Optional external URL for project (replaces project detail page).
external_link: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: Website
  url: https://devtoolbox.jace.pro/
  icon_pack: fas
  icon: 

url_code: "https://github.com/jacebenson/devtoolbox"
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""
---

# Features

- Rewrite Journal content
- Variable Helper
- Add Data to Table
- Create Module from this Query
- GlideRecord Script - Background Script
- GlideRecord Script - Preview
- "Email Scripts" Related List
- "Set Name from Question" Tool
- "Set Value from Label" Tool
- "Set Value from Text" Tool
- "Show Contents of g_scratchpad" Tool
- "Show Schema Map" Tools

# Rewrite Journal Content

This adds a UI Action for admins to replace text on `task` for users with the `admin` role. This is what the feature looks like in action;
![Animation of rewriting journal content](./rewrite-journal-content.gif)

# Variable Helper

```js
//example mail script
(function runMailScript(current, template, email, email_action, event) {
  template.print("");
  template.print("Additional details:<br />");
  printVars();
  function printVars(){
    var vh = new x_8821_glide_utils.variableHelper();
    var vars = vh.getVariables(current);
    for (var i = 0; i < vars.length; i++) {
      template.space(6);
      template.print(" " + "<b>" + vars[i].label + ": " + "</b>");
      template.print(vars[i].value + "\n" + "<br/>");
    }
  }
})(current, template, email, email_action, event); 
```