---
title: "Knowledge 19's Hackthon, a personal look"
subtitle: ""
summary: ""
date: 2019-05-21T20:25:56-05:00
---

In my last post I said, "The hackathon is a great place to learn a new
feature but it's not a hackathon. They expect you to have the app
prebuilt before you get there." I just want to be very clarify in this
post.

I learned a lot from the hackathon, but what they want is not a
hackathon.

I'll recap the events up until we left.

# Week of April 22nd

I reviewed all past Knowledge hackathons I could find and aggregated
them on my
[blog](https://blog.jace.pro/post/2019-04-22-knowledge-hackathon-past/).
Trying to get some ideas for what might be a winning idea if executed
properly.

# Week of April 29th

I finally get some ideas worth anything down on paper so I don't have to
go without an idea. I am really excited about this. A past co-worker of
mine Kevin, found out he's going to K19, cause I found a unused ticket.
So that's awesome, I have a hackathon team and I have some decent ideas.
I lay out some tasks for each idea.

# May 6th

I arrive in Vegas, it's great. I meet up with some colleagues and get
checked in. Also was given access to the "HackNow" instance. Seems
security isn't that important here so all the past submissions all
exist. I'll export that and include link at the bottom.

# May 7th

I see my hackathon team mates getting coffee. We talk about the ideas
and pick one. Great. We do some morning labs and then meet up at the
CreatorCon hackathon area. Thirty minutes after the start of the event
we get our instance. Great.

The idea we are working on is this "LendIt" app. Using the new mobile
interface allows users/ groups to indicate they have things to lend out,
and if lent, who it's lent to. Pretty simple idea but you could apply
this to whatever at work or if part of group of neighbors could be
something to facilitate passing around a leaf blower, or other lawn
equipment.

Our tasks as we see them;

-   Build the table for the things to be lent.
-   Build a table to allow people to queue for things to be lent later.
-   Build table to support who has borrowed the thing.
-   Make some rules to control the availability and to process the queue
-   Make a Mobile App

Now we can do a lot of this stuff at the same time and so I take on the
Mobile App stuff and the other two work out the business rules and table
structure.

## The first problem

I am working on this and creating the stuff only to find that when I
save the Mobile App nothing seems to be committing to the database. So
after about an hour and half of banging my head on the table I get up
and walk over to the "Mobile" experts and show them what's happening.
They are perplexed and bring me to another expert who has me check my
version. Low and behold we found the problem. We're not on Madrid. We're
on some beta unnamed version with a build tag of
"glide-trackhinext-12-11-2015" and a build date of "11-13-2018\_1928".
Well Madrid wasn't done then and the Mobile stuff wasn't working by
then.

![hackathon-version.png](./hackathon-version.png)

## The recovery

So we export our work to [git](https://github.com/jacebenson/lendIt) and
we move to one of our Madrid PDI's. We all have a "happy hour" we have
to go to with our work stuff and that's two hours. When we all get back
we're refreshed and good to go. I've taken a sorta leader role, Kevin
and Joe have taken more of the "Can Do" attitude. We get it all working
and then one of the judges comes by to check out our work. It must be
near the end of the night, but by the time he's come by and we've given
a pretty poor explanation of this, and shown what we have. He in other
words tells us it's just the platform and not at the level of the other
teams, but he doesn't use those words. Nope, instead what we took from
it was, it was a waste of his time, and everyone else time. Looking back
on it, it reminds me to the statement made in [Billy
Madison](https://www.youtube.com/watch?v=wKjxFJfcrcA). Rightly offended,
we pack up our shit and leave.

At a bar about 20 minutes later we realize you know we got more out of
this than any other lab and it was a good experience. No reason to let
Chris get us down. So that's the last hackathon I'll be in at a
knowledge event.

## Afterword

It's been a few weeks now and I didn't want to write this while
frustrated in the moment. I still feel the same way I did the night of.
Thanks! Now I know. The **hackathon** isn't a hackathon at the knowledge
events. It's a "Did you bring something cool that we can make a product
out of" event.

[Link of Ideas](./2019-app-list.xlsx)
