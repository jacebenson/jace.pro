---
title: No Code Date Validations
description: "I've in the past had to write some... cludgey date comparisons. I'm not proud of them. I'm just glad I didn't have to look at them later.\r\n\r\nHad I thought ab..."
date: '2019-09-07'
tags:
  - servicenow
  - ui-policies
  - atf
  - scoped-apps
  - service-catalog
  - tutorial
redirectFrom:
  - /no-code-date-validations/
  - /p/2019-09-06-no-code-date-validations/ 
  - /2019-09-06-no-code-date-validations/
---

<!--StartFragment-->

I've in the past had to write some... cludgey date comparisons. I'm not proud of them. I'm just glad I didn't have to look at them later.

Had I thought about what Mark Ragavan wrote about, it would have saved me probably days over my development time in the last 10 years.

Really, there's some common types of checks and actions for dates.

* Is it in the past?
* Is it within a window? e.g. After 7 days from now.
* Is it after another date on the form?

To show this I'll add some reproduction steps below. Start out with my [ATF Scoped App](https://atf.jace.pro/);

1. On your PDI import my ["ATF" scoped app](https://atf.jace.pro/).
2. URL: `https://github.com/jacebenson/atf.git`
3. Change scope to "ATF"
4. Goto maintain items, and look for "Test Item"

Now that you're here we can quickly test this out.

## [Disallow past dates](https://jace.pro/post/2019-09-06-no-code-date-validations/#disallow-past-dates)

1. Create a UI Policy with the condition, `Date Before Today`.

<!--EndFragment-->

![](/assets/images/no-code-date-validation-1-ui-policy.png)

<!--StartFragment-->

1. Add a UI Policy action for the field `Date` and check the `clear value` checkbox.

   ![](/assets/images/no-code-date-validation-2-ui-policy-action.png)
2. Update the variable `Date` to have `Example text` of "Date cannot be in the past."

   ![](/assets/images/no-code-date-validation-3-update-variable.png)

Try it out.

Now that you've seen it, it should be pretty clear how to apply this to a number of different situations. I just wanted to share as this is a great way for me to remember.

Further Reading: [No Code dates validations thru Catalog UI Policies](https://community.servicenow.com/community?id=community_article&sys_id=f61964aadbcb3fc85129a851ca9619eb)

<!--EndFragment-->