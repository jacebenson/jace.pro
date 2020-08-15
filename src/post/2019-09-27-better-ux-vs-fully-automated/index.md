---
title: "Better UX or Fully Automated?"
subtitle: ""
summary: ""
date: 2019-09-27T09:51:14-05:00
imageName: "featured.png"
imageThumbnail: "featured-thumbnail.png"
---

I posted a survey on Twitter a few weeks ago;

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">What&#39;s better? Fully Automated with many questions, or nearly automated process with very simple inputs? <a href="https://twitter.com/hashtag/ServiceNowDev?src=hash&amp;ref_src=twsrc%5Etfw">#ServiceNowDev</a> <a href="https://twitter.com/hashtag/ServiceNow?src=hash&amp;ref_src=twsrc%5Etfw">#ServiceNow</a> <a href="https://twitter.com/hashtag/Survey?src=hash&amp;ref_src=twsrc%5Etfw">#Survey</a> <br>One means, make it and forget, the other means a better user experience.</p>&mdash; Jace Benson 👨‍💻⚙️ (@jacebenson) <a href="https://twitter.com/jacebenson/status/1174684663861956609?ref_src=twsrc%5Etfw">September 19, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Once I came to this realization that User Experience(UX) is literally more important then getting
all the details from an end user, it literally took me three days to sort it internally.

But like a good survey, a good form should only ask the very bare minimum to get the request going.
If 80% of the requests for a complicated item are in favor of one type of response, I'd argue, you
should either assume every request is for that option, or make a separate item for the other option.

## Why?

That makes so many more thing to maintain ( I hear my self asking ).  Well, if you keep it, the
item is more complex.  Therefor it's less likely to get filled out, or users will more likely dislike
the process of putting that data in.  Lets look at a real-world example.

Consider the item, "ServiceNow Access or Group Membership".  Now, lets think about the title, it 
doesn't indicate an action to add or remove.  We've used this item for **all** group changes.  This 
might seem like a simple item, but lets consider the kinds of questions on this form;

- Are you adding or removing a user?
- What group
- What user
- Why is access needed

Now of the 7K items that I can see in our system 80% are to add a user.  If we had only made this item 
to add users, 8 out of 10 requests we could have avoided that question.  Additionally, asking "Why is 
access needed" is only filled out 1/2 the time and normally doesn't make any difference on the request.  

What does this form look like when it's simplified?

- What group needs this new member?
- Who is this new member?

Now about the removing of a user, I'd say it would make more sense to separate that into a separate 
item.  Once items are simplified you can have other systems potentially digest them.  Imagine searching 
for "how to add a user to a group" and being asked by Clippy if you'd like to add a user to a group, 
without leaving search, and having it render this simple item.  

To me that sounds delightful.  It just bothers me so much that I've been all about full end-to-end 
automation until now.  I'm not saying that those details are not needed.  Sometimes those details will
require someone to actually talk to the person who asked for this item.  That is not so bad.

## What about more complex items?


So sure, lets talk about two other more complex items.

1. Let's say one is for a company provided phone and phones available per country are different and 
   varying depending on availability.  So maybe you made a few tables to allow the telephony folks
   to control this item without having to actually change the item.\
   This right now seems too complex for me to breakdown in the same way.  This form however allows
   for different things based on "why" the request is being made.  E.g. Lost, New Hire, Up for renewal.
   Again I'd argue we probably don't need the why, and should leave that up to the telephony group to 
   ask the requester.  
1. Requesting a certificate, you know like SSL certificates\
   Here things that are needed are the domain, the type of certificate (e.g. Standard, SAN, Wildcard),
   a password, an responsible group.  I'd argue this should be an item per type as most the requests
   are likely standard certificate.  

My whole point of this post, is you should consider user experience before automation.  

