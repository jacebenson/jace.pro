---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Rename Update Set Export File Name"
subtitle: ""
summary: "Ever lost an update set after a clone?  Do you have some unhelfully named update set files?  I did.  Here's how to fix that."
authors: ['jace']
tags: []
categories: []
date: 2019-09-06T22:12:41-05:00
lastmod: 2019-09-06T22:12:41-05:00
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
I know I've lost an update set in the past after a clone.  Not because I didn't back it up.  But because I couldn't find it locally on my drive.  Or I did but all the names were too much to keep straight.  

There's a bunch of ways to mitigate that loss.  I'm not going to go into weather or not you should move everything up or what not.  This post is just about making the "Export Update Set" button give you a file name that makes more sense.

You can update a OOB Script include `ExportWithRelatedLists` to change how it works for exporting update sets.  There's a function, `getFileName` that determines the name of the file.  Normally it's just `table_sysid.xml`.  You can add an if and rename it.  Here's the code I've used to do this.

```js
  getFileName: function(){
  // added customized name for exported update sets
              // script include: ExportWithRelatedLists
  var name = (this.parent_table + '_' + this.sys_id + '.xml');
  if(this.parent_table == "sys_remote_update_set"){
    var sus = new GlideRecord('sys_remote_update_set');
    if(sus.get(this.sys_id)){
        name = sus.getValue('name') + '.xml';
    }
  }
  return name;
  // end of addition
      // return (this.parent_table + '_' + this.sys_id + '.xml');
  },
```

Further Reading: [Community Post](https://community.servicenow.com/community?id=community_question&sys_id=d2ca7e63dbb723c41cd8a345ca9619c7)

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@zoltantasi?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Zoltan Tasi"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Zoltan Tasi</span></a>