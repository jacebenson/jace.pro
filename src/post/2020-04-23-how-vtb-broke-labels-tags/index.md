---
title: "How Virtual Task Boards Broke Labels / Tags"
subtitle: "Really, they did.  I have a fix too."
summary: "Unlimited Labels on VTB's are globally visible, making tags much harder to use."
date: 2020-04-24T00:07:48-05:00
---
You might know about this [old feature called "labels"](https://www.youtube.com/watch?v=dhqkmbMX68I).  Well, now their called "Tags" but back then they were labels.  In the New York release ServiceNow broke them.  Here's the short version.  Instead of giving the right users visibility to the tags, everyone can see any tag on a Virtual Task Board (VTB).

How can you see this problem?  Take these steps;

Steps to reproduce

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

- <a href="sys_script_fix_make_vtb_labels_inactive.xml" download="sys_script_fix_make_vtb_labels_inactive.xml">Fix Script "Make VTB Labels Inactive</a>
- <a href="sys_script_make_vtb_labels_inactive.xml" download="sys_script_make_vtb_labels_inactive.xml">Business Rule "Make VTB Labels Inactive</a>
- <a href="sys_script_make_non_vtb_labels_active.xml" download="sys_script_make_non_vtb_labels_active.xml">Business Rule "Make non-VTB Labels Active</a>

## Further Reading
- [HI KB0788952 - VTB Working as designed](https://hi.service-now.com/kb_view.do?sysparm_article=KB0788952)
- [VTB Idea to improve tables](https://community.servicenow.com/community?id=view_idea&sysparm_idea_id=00d61985db960c501cd8a345ca961948&sysparm_idea_table=x_snc_com_ideation_idea&sysparm_module_id=enhancement_requests)