---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Automation with Failover Tasks"
subtitle: ""
summary: ""
authors: ['jace']
tags: []
categories: []
date: 2019-10-05T00:24:27-05:00
lastmod: 2019-10-05T00:24:27-05:00
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
So I’ve built many automation tasks that didn’t account for what to do during an error or an expected output.

Do you know who has to work on that stuff? Likely, it’s you. That’s a fine way to go if that’s the intention.

I never intended for that to happen. I was working with a stakeholder on some automation and he wanted to keep a task in place. It didn’t matter to me at the time. One day automation stopped working.  It was only then I was happy it had a built-in fail-over process.

There are many ways to make integrations. Follow one of these two patterns pictured above if you like the idea of a fail-over task.

This is great because you don't do any of the automation on the workflow. You leave the task in place.  Add some identifier or key to make it simple to find.  Then make a business rule to call the outside system and have that system update the task.  Or have the outside system find the tasks to run against and update the task. I've used the `correlation_id` field in the past as the key field and defined it as part of the workflow. Ensure that the other system closes the task with appropriate messages. If it encounters an issue, have it make a work note.

This might seem like common sense, but if you didn't think about it, you might not know.