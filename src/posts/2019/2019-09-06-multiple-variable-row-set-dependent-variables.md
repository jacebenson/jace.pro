---
title: Multiple Variable Row Set - Dependent Variables
description: "So It's been asked a few times, \"How can I make my MVRS variables depend on other variables?\"\r\n\r\nThe question has some caveats;\r\n\r\n1. If the Variables are al..."
date: '2019-09-07'
tags:
  - atf
  - scoped-apps
  - notifications
  - service-catalog
  - mrvs
  - javascript
redirectFrom:
  - /multiple-variable-row-set-dependent-variables/
---

<!--StartFragment-->

So It's been asked a few times, "How can I make my MVRS variables depend on other variables?"

The question has some caveats;

1. If the Variables are all in the same row, that's possible.
2. If the Variables are not all in the MVRS, it's possible but you need to add stuff to the MVRS.

Let's go over each of those.

So I'm going to deal with the 2nd one first. It's a design choice that you cannot make the MRVS variables dependent on variables outside of the row. The way around this is to add the variable to the MVRS and use that copy instead of the non-MVRS. I don't see another way around this.

Now that is dealt with the only time this comes up is if you seem to want to use a Lookup Select variable that re-evaluates based on other variables. I've [written about this in the past here](https://blog.jace.pro/post/2017-10-28-lookup-select-attributes/). If you're not familiar with it might be worth reading that.

Now I'm going to add reproduction steps cause I don't want to re-create things all over.\
So lets decide out test. Let's load all .. notification devices for a user, based on a user variable.

1. On your PDI import my ["ATF" scoped app](https://atf.jace.pro/).
2. URL: `https://github.com/jacebenson/atf.git`
3. Change scope to "ATF"
4. Goto maintain items, and look for "Test Item"
5. Open the variable set "Multi Row Variable Set"\
   At this point you should see a "question" and "answer"
6. Rename "question" to "user"
7. Change it's type to "reference" to `sys_user`
8. Rename "answer" to "device"
9. Change it's type to "lookup select box"
10. Set it's table to `cmn_notif_device`
11. Add a variable attribute of `ref_qual_elements=user`
12. Add a reference qualifier of\
    `javascript: 'user=' + current.variables.user`

Now when I try this is just works.

<!--EndFragment-->

<!--StartFragment-->

Now say you don't want the Reference in the MVRS. Okay. I have a Reference variable on this test item already, it has a silly name, "Reference". But it works. Lets try that and change the variable attribute and reference qualifier.

1. Change variable attribute to `ref_qual_elements=Reference`
2. Add a reference qualifier of\
   `javascript: 'user=' + current.variables.Reference`

You'll notice this doesn't appear to work. It seems this is as designed 😭.

<!--EndFragment-->

![](/assets/images/mrvs-docs.png)