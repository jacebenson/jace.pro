---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "No Code Date Validations"
subtitle: ""
summary: "This is always an ask for someone.  Mark Ragavan posted a brilliant answer.  I'm just going to repeat it."
authors: ['jace']
tags: []
categories: []
date: 2019-09-06T21:43:59-05:00
lastmod: 2019-09-06T21:43:59-05:00
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

I've in the past had to write some...  cludgy date comparisons.  I'm not proud of them.  I'm just glad I didn't have to look at them later.

Had I thought about what Mark Ragavan wrote about, it would have saved me probably days over my development time in the last 10 years.

Really, theres some common types of checks and actions for dates.

- Is it in the past?
- Is it within a window? e.g. After 7 days from now.  
- Is it after another date on the form?

To show this I'll add some reproduction steps below.  Start out with my [ATF Scoped App](https://atf.jace.pro);

1.  On your PDI import my ["ATF" scoped app](https://atf.jace.pro/).
2.  URL: `https://github.com/jacebenson/atf.git`
3.  Change scope to "ATF"
4.  Goto maintain items, and look for "Test Item"

Now that you're here we can quickly test this out.

## Disallow past dates

Create a UI Policy with the condition, `Date Before Today`.
Check "Run Scripts" and add this code to "Execute if true"

```js
function onCondition() {
	g_form.hideAllFieldMsgs();
	g_form.showFieldMsg('Date','Date cannot be in the past.');
}
```

Add the field `Date` and check the `clear value` checkbox.

Try it out.

<video width="320" height="240" controls>
  <source src="disallow_past.mp4" type="video/mp4">
</video>

Now that you've seen it, it should be pretty clear how to apply this to a number of different situations.  I just wanted to share as this is a great way for me to remember.

Further Reading: [No Code dates validations thru Catalog UI Policies](https://community.servicenow.com/community?id=community_article&sys_id=f61964aadbcb3fc85129a851ca9619eb)

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@erothermel?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Eric Rothermel"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Eric Rothermel</span></a>