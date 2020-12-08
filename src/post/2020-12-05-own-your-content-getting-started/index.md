---
title: "You want a blog?  Here's how to get started"
subtitle: "These are my notes on the blogging systems as of 2020"
summary: "I've been maintaining this site since 2016, it's had a lot of iterations, learn from them"
date: 2020-12-05T22:00:00-05:00
tags: "draft"
---

Help me help you. Leave your future self notes about what and why you do things.

I do this via this blog.  I think this is a great way to do this.  

## Why I blog

I blog to keep notes of things I do, and make them available for others.  It's my way of saving me from myself.  It's also my way of sharing what I've done.  Others seem to find it useful, to win win.  Also writing down this stuff, means you have to at least understand it enough to talk about it.  There are loads of reasons folks choose to blog.  

> 
<cite>Stephanie Morillo</cite>


{% details 'Reasons to create content', 'font-size:2em;', 'open=false' %}

- Attract an Audience
- Establish Authority
- Build Rapport and Engagement
- Organize Your Thoughts and Learn
- Tell Your Story
- Meet New People
- Stand Out
- Validate Expertise
- Get into the habit of writing more
- Get a new job or switch careers
- Use the blog as a case study reference
- Create content for beginners who are learning a specific programming language 

{% details 'Nested Reason' , 'h9'%}
Content goes here
{% enddetails %}


{% enddetails %}



# My goal - convince others it's worth writing and sharing their perspsectives


I'd like to get some more folks sharing their perspectives.  Below I'll go through the choices and options.  I'll start with a "Jace's Suggestion" though and you can read why after.

Lesson 1: $ is a driving factor. If you want it to be "free" be prepared to do some work.
Lesson 2: With no Database, you gain speed, security, and performance benefits.
Lesson 3: To get those benefits, you have to "build" your site when you change it, this is the slowest part of this process for me it's taken 30 seconds to 5 minutes.
Lesson 4: Get comfortable making changes to the templates. Understand the templating language.  Nunjucks is my goto here.

Want to share your wealth of knowledge?  Great!  This post should help.  

I am of the following opinions.

1.  Owning your content is crucial.  When you control the system that makes your content you don't have to worry about sites loading ads, or asking your users to pay to view it

> There are no reader accounts. There are no prompts to "sign in" or to "pay to get around this paywall." --   
<cite>[Quincy Larson on moving from Medium.com](https://forum.freecodecamp.org/t/we-just-launched-developer-news-heres-how-you-can-use-it/279929/667551) </cite>


You can post your content on community websites, social sites but the real meat and pototoes should be stuff you have full control over.  You
    - Why you might ask.  

I can hear you now, "Jace, there's already way too many people doing that?"  Is there?  They don't have your experience or your perspective.  You'll write it different.



# An opinionated start.


Every thing has a process of sorts.  Sharing content, too has a process.  Below

## Process of writing
1.  Write somewhere, anywhere.  
2.  Decide **why** you want to share your content.  I started with the idea that others might find it useful, now it's more or less the same, however having the North Star to guide you will help.
3.  Save your thoughts in a backlog.  Our brains are terrible at remembering things.  Write down these thoughts somewhere to add notes to later.

## Let's make a site

1. **Required** [Pick a site type](https://jamstack.org/generators/) (below I list the ones I've used with a suggested 1-click Deploy)<br/>
   [11ty](https://11ty.dev) [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jacebenson/jace-ty) - Config file `./src/_data/site.js` - My current Blog layout and setup in 1 click<br/>
   [Gatsby](https://www.gatsbyjs.com/starters/?) - [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Vagr9K/gatsby-advanced-starter) - Config file `./data/SiteConfig.js` - It's based on React<br/>
   [Hugo](https://gohugo.io) - [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/wowchemy/starter-academic) - Config file `./config/_default/config.toml` - The [Academic theme](https://themes.gohugo.io/academic/) that gave me opinions about how to organize my content.  Hugo builds the fastest.<br/>
2. **Required** Goto your repo and modify the specific configurations to match your brand.  
3.  *(Optional)* [Buy your domain](https://www.hover.com/)
4.  *(Optional)* [Update your DNS to point it to Netlify](https://docs.netlify.com/domains-https/custom-domains/) Or [Configure your DNS host to redirect to Netlify](https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/#configure-an-apex-domain)
5.  Create your content!

# TL;DR


# Getting Started Writing
1. Start writing somewhere.  I don't care if it's on pen and paper or in Wordpress.  Just start jotting down those notes.  Write down some context, and the meat of the content.  e.g. 
    > Today Joe Employee closed all the stories.  Here's the script i wrote to "unclose" them.<br/>
    ```js
    var gr ...//grumble grubmle
    ```
    <cite>Past self</cite>
1. Decide what you the purpose of your writing is.  Do you want to just share the things you've done?  Is this specific to one niche?  What is the goal?  What does "Success" look like to you?  Without thinking about this, you can write but you will be faced with many more decisions about what to post and why you should or shouldn't post it.  Decided this stuff ahead of time, makes it clear to you what you should share.
1. Start a backlog for content.  You will have fleeting thoughts about things and some of them are good, some not so much.  Make a note of ones that call to you.  Writing these down gives you a place to keep adding related ideas.  I use github issues, however you could use wordpress drafts, or again pen and paper.

So in short, just start taking notes, figure out what and why you'd want to share those notes, and start a backlog for fleeting thoughts.

# Picking a host
1. Decide if you want to just deal with the content or if you want to own the stack.  I always want to not pay so when I purge my spending I don't nix my sites.  I thought I'd look up to see a comparison of wix, squarespace, and wordpress but there isn't a good one.  Here's mine.
   
   - You want to just post content? Free with ads, or $4/yr + domain pricing
     
     | Site        | Level | Custom Domain | Pricing / Mo      | Notes  |
     | ------------| ----- | ------------- | ----------------- | ------ |
     | Wix         | Free  |            No | [$0][wixfree]     | Ads:Required<br/>Custom Domain: No |
     | Wix         | +     |           Yes | [$14][wixpricing] | Varies |
     | SquareSpace | +     |           Yes | [$12][sspricing]  | Varies |
     | Wordpress   | Free  |            No | [$0][wppricing]   | Ads:Required<br/>Custom Domain: No |
     | Wordpress   | +     |           Yes | [$4][wppricing] <br/>I know there's other hosts for this, <br/>but generally they are all around <br/>$3-5/mo  | Varies |

     Looks like if you want a simple site either it'll be at least $50 a year or riddled with ads. 
   - You want to really own the contetn

[wixfree]: https://support.wix.com/en/article/free-vs-premium-site
[wixpricing]: https://www.wix.com/upgrade/website
[sspricing]: https://www.squarespace.com/pricing/
[wppricing]: https://wordpress.com/free/