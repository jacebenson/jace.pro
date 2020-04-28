---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "What is GlideQuery"
subtitle: "Seriously, what is this thing?"
summary: "This came up on a video on YouTube"
authors: ["jace"]
tags: []
categories: []
date: 2020-04-28T01:45:52-05:00
lastmod: 2020-04-28T01:45:52-05:00
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
So this is a new thing that may change how code is written for some. 

Let me show you an example of the code and output.  Then I'll write my thoughts.

```js
var testGlideQuery = new GlideQuery('sys_user')
  .where('active', true)
  .select('first_name', 'last_name', 'active')
  .toArray(100);
gs.info('testGlideQuery: ' + JSON.stringify(testGlideQuery,'',' '));

/*
*** Script: testGlideQuery: [
 {
  "first_name": "a",
  "last_name": "b",
  "active": true,
  "sys_id": "9033c10d2f674c10bd54d5f62799b666"
 },
 {
  "first_name": "Aada",
  "last_name": "Keranen",
  "active": true,
  "sys_id": "15a849d32fd34810bd54d5f62799b6be"
 },
 ...
*/
```

So, yea.  That's interesting.  Before you go and look if you can use this in your instance, you probably don't have it yet.  To get it, enable the SAM and SAAS plugins.  

The methods are exposed and is written in a interesting way.  I suggest you check it out.

This brings up the big question, is GlideRecord going away?  No.  I don't think so.  This seems to be just a wrapper to allow chain-able calls to query the data.  Maybe as the Now Experience comes up this will be used more in that but I don't think so.  I think this is just a wrapper some team made to make their code look one way.  

In any case, I wanted to write this down so if anyone looks for it something comes up, because as of now, it's not written down anywhere.
