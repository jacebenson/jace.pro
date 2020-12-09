---
title: "You want a blog?  Here's how to get started"
subtitle: "A brief guide to get started blogging"
summary: "Follow along and share your perspective"
date: 2020-12-09T00:30:00-05:00
---

1.  [Why Blog](#why-blog)
1.  [Getting started](#getting-started)
    - [The logical workflow](#the-logical-workflow)
    - [Actually making the content](#actually-making-the-content)
1.  [Let me know if you set one up I'd love to follow along](#contact-me)


Help me help you. Leave your future self notes.

I do this via this blog.  I think this is a great way to do this.  
<span><a name="why-blog"></a></span>

# Why Blog

I blog to keep notes of code I work on, and make them available for others.  It's my way of saving me from myself.  It's also my way of sharing what I've done.  Others seem to find it useful, to win win.  Also writing down my thoughts, means I have to at least understand it enough to talk about it.  There's loads of reasons folks choose to blog.  

Other benefits to do this privately or publicly.

{% details 'Reasons to create content', 'font-size:2em;', 'open=false' %}

| Reason                     | Publicly |
| ------------------------------------- | --- |
| Attract an Audience                    | ✅ |
| Establish Authority                    | ✅ |
| Build Rapport and Engagement           | ✅ |
| Organize Your Thoughts and Learn       | ✅ |
| Tell Your Story                        | ✅ |
| Meet New People                        | ✅ |
| Stand Out                              | ✅ |
| Validate Expertise                     | ✅ |
| Get into the habit of writing more     | ✅ |
| Use the blog as a case study reference | ✅ |
| Share your perspective                 | ✅ |

{% enddetails %}

If you're convinced but not sure where to start keep reading.
<span><a name="getting-started"></a></span>

# Getting Started

There's two sides of this.

Lots of places talk about each seperately.  I'm going to tackle both here.

1. There's the side of how to manage the ideas that become pieces.  I think of this as the logical workflow.
2. There's the side of how to actually organize the data.

This is my opinionated guide to get started.  I've worked with most of the tools used over the years.

My preference is Git(Github or Gitlab) and Netlify.

You generally have three artifacts after you set this up.

- A place to store ideas and drafts
- A place to store posts
- A domain

A domain is nice.  They have a annual cost but generalyl they are pretty inexpensive.

By choosing Github and Netlify you should have no extra cost.
<span><a name="the-logical-workflow"></a></span>

## The logical workflow

1.  You have an question or idea.  You don't know the answer but you would like to and think I might look that up.  Write it down as an idea.

1.  When you have time, review your ideas and start researching the question.  

1.  Once you're comfortable with the topic, create the post.  Make sure you verify the content.

Sometimes I start writing but often I will start with an idea.

By tracking this backlog of ideas you can let those thoughts go.  You can comeback to them and work them little at a time.  Writing is hard.  Don't make it harder than it has to be.
<span><a name="actually-making-the-content"></a></span>

## Actually making the content

I use [11ty](https://11ty.dev) for my blog.  I think it's great.  I've made a template of my blog for you.  Really.

Here's what I like about how [Jace-ty](https://github.com/jacebenson/jace-ty) works.

- A folder for each post lets you organize your assets for each post with the text.
- Build times are fast because 11ty is fast.
- Search is important and included.
- RSS feeds are great to let people read where they want to read.
- Fast load times are important because no one wants a slow blog.

You get all that by pressing this button.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jacebenson/jace-ty)

What happens when you press that button.  

- Netlify will ask for permission to Github so it can create a repository for you.  
- Netlify will link the repository with their system so they can build the files on update.

What do you do after that?

1. Update the `./src/_data/site.js` file with your details.  The template files use this data to show your information.
2. Start creating content.
  - To create a Post look at the three sample posts in `./src/post/`
  - Edit the post `index.md`.  It starts with [frontmatter](https://www.11ty.dev/docs/data-frontmatter/).  The content of the post is below the frontmatter.
  - Each post has two images.  
    `featured.jpg` is the image shown on the post when you go to the page.
    `featured-thumbnail.jpg` is the image shown in footer for the last 4 posts, and also on the `/posts` of your site.
3. You may have done those edits on Github.  I prefer to do this locally.  Here's how to get started;
  
    ```bash
    git clone git@github.com:YOURUSERNAME/jace-ty.git my-blog #clones the code made from above
    cd my-blog # goes into the cloned directory
    yarn #installs dependencies for this
    code . #opens vs code to this directory
    yarn serve # this starts serve the site on 8081 ctrl-c stops this
    ```
    Now as you edit the files locally you can see them change on your localhost:8081

    Copy one of the other posts folder, update the folder name, and the content.  Replace the images

    Once you're done making content, lets deploy that up to github.

    ```bash
    # from cloned directory my-blog
    git add . # stages all the modified files commit
    git status # shows you whats staged
    git commit -m "Created some content" # commit message of what you did
    git push # pushes the code up to github
    ```
  
Thats it!

<span><a name="contact-me"></a></span>

# Contact me

Easiest way is to drop a comment below or reach out to me on [twitter.com/jacebenson](https://twitter.com/jacebenson)