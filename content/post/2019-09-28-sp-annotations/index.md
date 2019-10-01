---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Annotations seem to be unsupported"
subtitle: ""
summary: ""
authors: ['jace']
tags: []
categories: []
date: 2019-09-28T21:33:20-05:00
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

First, I have to say, thank you @paige for making me aware.  I really appreciate you and this info. 

[Form annotations](https://docs.servicenow.com/bundle/newyork-platform-administration/page/administer/form-administration/concept/c_FormAnnotation.html)
can be really helpful and powerful.  You can use them help users enter the 
right information and users can turn them off when they feel comforatable.  
The other day on [slack](https://sndevs.com) I think Paige mentioned they 
just flat out do not work on service portal.  This is a real shame.  

There's three things here;

1.  No where does it say it's not supported on service portal.  Not on the 
    Form Annotation link above, not on the page specifically about the [form
    widget](https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/build/service-portal/concept/form-widget.html)
    itself.  
2.  There's no options on the widget to set to allow them.
3.  They aren't on the new Agent Workspaces either.

Don't believe me.  Okay.  Here's a short video showing the `ticket` table 
record with annotations of html and plain text working in UI16, not working
on the Service Portal.  

So when people are making new fields, or showing fields on forms and might
want to show what things are for what, is the expectation to move these
informational messages to guided tours?  But that seems less available, meaning
it isn't easily toggled on and off.

<video width="320" height="240" controls>
  <source src="sp-annotations.mp4" type="video/mp4">
</video>

Now I'd love to just add this functionality back, but it seem the more and more
we as developers add to this platform, the more and more ServiceNow takes away
from it.  With that I highly encourage you to open a HI ticket if you use
annotations and ask pointed questions that have easy and direct answers.  

Ha, I was even able to make a preloaded form with some text for you, but you have
to already be logged in.

[Open a Hi ticket](https://hi.service-now.com/hisp?id=cssp_irp&description=When%20will%20form%20annoations%20be%20supported%20on%20Service%20Portal%20and%20Agent%20Workspace%3F)
