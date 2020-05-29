---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "How to install GlideQuery"
subtitle: "It's great to talk about this, but lets get it so your can try it out."
summary: "This is how to install the GlideQuery plugin without SAM Pro"
authors: ["jace"]
tags: []
categories: []
date: 2020-05-29T15:31:50-05:00
lastmod: 2020-05-29T15:31:50-05:00
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

This I hope is the last post about this because as much as I like writing about it, I'd rather get other stuff done.

With that I wanted to share how to install this without Software Asset Management Pro and give thanks to everyone who helped me find all these details.

Thanks to Andrew Albury-Dor for sharing with me that this was a thing back in April.

Thanks to Peter Bell for creating this amazing set of script includes.

Thanks to Micheal Bahr for reminding me that you can straight up install plugins via script.

Thanks to Everyone for expressing interest in this kind of work.

## How to install GlideQuery without SAM Pro

```js
var plugins = [];
plugins.push('com.sn_glidequery');
var main = new GlideMultiPluginManagerWorker();
main.setPluginIds(plugins);
main.setProgressName("Plugin Installer");
main.setBackground(true);
main.start();
```

### Bonus video showing installation and usage

<iframe width="1903" height="924" src="https://www.youtube.com/embed/vVltGSUWDls" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>