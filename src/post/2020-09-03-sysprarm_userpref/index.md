---
title: "Undocumented - Setting User Preferences via URL"
subtitle: "This is a thing but probably shouldn't be"
summary: "Thanks Tim Woodruff for sharing this on slack."
date: 2020-09-03T10:45:14-05:00
---
The other day on slack I read that you can set any user preference via URL by using this parameter scheme;

`https://hi.service-now.com/incident_list.do?sysparm_userpref_literally_anything=whatever`

Just replace `literally_anything` with the preference name, and the `whatever` with the value you want.

This seems like something you could use to possibly change language, timezone, update set, row limits.  With that being said, anyone can do this so be careful.  

I don't know that I trust anyone's links but I will take more care to look at them now.  I am not sure if this works with the [tiny url support](https://docs.servicenow.com/bundle/orlando-platform-user-interface/page/use/navigation/task/t_EnableTinyURLSupport.html)

I did a quick search on the docs site for `sysparm_userpref` and you can see it's used in a number of pages but not really clear what it's doing.  According to the [Genava Patch 6 page](https://docs.servicenow.com/bundle/geneva-release-notes/page/release-notes/r_Geneva-Patch-6.html) it can disable concourse which goes to show you, it does in fact set prefrences.

The more you know!