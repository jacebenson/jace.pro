---
title: Naming your update sets
description: "Update set names should be somewhat meaningful without having to look at\\\r\nthe contents of the XML. ServiceNow has some recommendations on HI and on the Docs..."
date: '2018-09-20'
tags:
  - servicenow
  - update-sets
  - javascript
  - html
  - xml
redirectFrom:
  - /naming-your-update-sets/
  - /p/2018-09-20-naming-your-update-sets/
---

<!--StartFragment-->

Update set names should be somewhat meaningful without having to look at\
the contents of the XML. ServiceNow has some recommendations on [HI](https://hi.service-now.com/kb_view.do?sysparm_article=KB0552854) and on the [Docs](https://docs.servicenow.com/bundle/kingston-application-development/page/build/system-update-sets/reference/get-started-update-sets.html) site.

With that being said, generally best to have initials, date, some key (task) or description.

# [Update Set Naming Convention](https://jace.pro/post/2018-09-20-update-set-naming/#update-set-naming-convention)

* Make the names meaningful to the task at hand. The update set name should consist of the following.

  * Related task record, version, release or sprint number
  * Brief description
  * Developer's initials
* For example, if working on Incident Management form layout from a Story. The update set name could be\
  `STRY00123_Incident Mgmt Form Layout_ABC`

  * Update Set Description
* Put in as much detail as needed to ensure that if another member of the team looks at the update set record they can see what the contents are.
* This becomes especially important when working on an entire track. If you are working on Incident Management as a whole with multiple stories assigned to you, you should list all related stories in the description of the update set record.
* The update set name should consist of the following if working on an entire track:

  * Date, version, release or sprint number
  * Brief description
  * Developer's initials
  * Example: `JB-2018-09-20 Combine both inc record producers`

We added some JavaScript to pre-fill the initials, and date for consistency on the name field. Below makes the following output;\
`JB-2018-09-20`

```javascript
javascript: (function(){
  var r = '';
  var u = gs.getUser();
  r += (u.getFirstName()+'')[0];
  r += (u.getLastName()+'')[0];
  r += '-';
  var d = new GlideDateTime();
  var ms = d.getNumericValue();
  r += new Date(ms).toISOString().split('T')[0];
  r += ' ';return r;}
  )()
```

<!--EndFragment-->