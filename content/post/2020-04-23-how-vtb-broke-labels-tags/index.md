---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "How Virtual Task Boards Broke Labels / Tags"
subtitle: "Really, they did.  I have a fix too."
summary: "Unlimited Labels on VTB's are globally visible, making tags much harder to use."
authors: ["jace"]
tags: []
categories: []
date: 2020-04-24T00:07:48-05:00
lastmod: 2020-04-24T00:07:48-05:00
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


 

You might know about this [old feature called "labels"](https://www.youtube.com/watch?v=dhqkmbMX68I).  Well, now their called "Tags" but back then they were labels.  In the New York release ServiceNow broke them.  Here's the short version.  Instead of giving the right users visibility to the tags, everyone can see any tag on a Virtual Task Board (VTB).

How can you see this problem?  Take these steps;

Steps to reproduce: 
1. Log in to Dev
2. Create a visual task board.
3. Add a new Label
4. Apply the label to a record on your VTB
5. Add a user on the VTB
6. Impersonate some other user (not the user in 5) 
7. Go to a list and show the tags column
8. Start typing the tag name in the tag column, you'll see the tag created in 3.

ServiceNow did the right thing moving to a central place to deal with label/tags.  
But, they should have used permissions to control who can see them based on the task board.  
I opened a HI ticket ally was able for them to give me a work around.

I didn't write this code, it worked for me in my tests.  It's saved some other work too, but read the code and ensure it's doing what you think it should.

- [Fix Script "Make VTB Labels Inactive"](sys_script_fix_make_vtb_labels_inactive.xml)
- [Business Rule "Make VTB Labels Inactive"](sys_script_make_vtb_labels_inactive.xml)
- [Business Rule "Make non-VTB Labels Active"](sys_script_make_non_vtb_labels_active.xml)

## Further Reading
- [HI KB0788952 - VTB Working as designed](https://hi.service-now.com/kb_view.do?sysparm_article=KB0788952)
- [VTB Idea to improve tables](https://community.servicenow.com/community?id=view_idea&sysparm_idea_id=00d61985db960c501cd8a345ca961948&sysparm_idea_table=x_snc_com_ideation_idea&sysparm_module_id=enhancement_requests)