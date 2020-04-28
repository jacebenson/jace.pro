---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Fix Scripts Can Rollback Now"
subtitle: "Yep, it *can* but by default it doesn't :("
summary: "As of London, fix scripts can rollback, but you have to tell it first."
authors: ["jace"]
tags: []
categories: []
date: 2020-04-23T23:24:10-05:00
lastmod: 2020-04-23T23:24:10-05:00
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
If you've come to here looking to undo a fix script, I have bad news for you.  I cannot fix the problem you currently have, but I can show you how to save yourself in the future.

So the other day people were talking about what to use to fix some data in their instance.  The choices were Background Scripts, and Fix Scripts.

So I took note about why would you ever use a background script in favor of a fix script.  One thing that stood out was background scripts can "rollback" the updates.
Fix scripts don't show a way to do that.  Then a few days later 0x111 shared on Discord that in fact they can be rolled back for fix scripts, but you have to set it up.

What do I mean?  Well according to [this hi article(KB0761248)](https://hi.service-now.com/kb_view.do?sysparm_article=KB0761248).  You have to show the "Record for rollback" field, and check it if you intend to "rollback" the updates.  

## Here's what I saw

| Feature                              | Background Script  | Fix Script         |
| ------------------------------------ | ------------------ | ------------------ |
| Can choose your scope at execution   | :white_check_mark: | :no_entry:         |
| [Can run on application install][1]  | :no_entry:         | :white_check_mark: |
| Audit                                | System Log only    | :white_check_mark: |
| Instant Return                       | :white_check_mark: | When run in foreground |
| Can run in the background            | :no_entry:         | :white_check_mark: |
| Syntax Highlighting                  | :no_entry:         | :white_check_mark: |
| Intellisense                         | :no_entry:         | :white_check_mark: |
| Versioning                           | :no_entry:         | :white_check_mark: |
| Can be cancelled                     | :white_check_mark: | :white_check_mark: |
| Updates can be rolled back           | :white_check_mark: | If you tell it     |

This feature is great, but why is it default unchecked?  I know it's new as of London but come on.  This makes using Fix Scripts the way to do things.  

## Further Reading

- Steven Bell has a post titled, "[Two Methods for Code Development](https://community.servicenow.com/community?id=community_blog&sys_id=e81eae2ddbd0dbc01dcaf3231f96194f)"
- John Roberts writes about Fix Scripts in "[FujiForty - Get Your Fix](http://www.cavucode.com/blog/2015/4/12/fujiforty-get-your-fix)"

[1]: https://community.servicenow.com/community?id=community_question&sys_id=67610b29db98dbc01dcaf3231f9619a0

How long do these rollbacks last?  Well that depends on the value of the property, `glide.rollback.expiration_days`.  More about that here on this [rollback contexts doc](https://docs.servicenow.com/bundle/orlando-platform-administration/page/administer/table-administration/concept/rollback-contexts.html).

Thanks Kalai for the information on the rollback contexts.