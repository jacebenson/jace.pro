---
title: "Custom Domain for PDIs using Vercel"
subtitle: "Netlify has this `trailingSlash` problem, Vercel doesn't."
summary: "This goes over how to proxy a site with Vercel."
date: 2021-02-05T07:25:34.061Z
---

# Custom Domain for PDIs using Vercel

I was able to do this with the help of Mav and Mike Bahr.  Thanks guys!

# Simple Vercel Proxy 

This is a simple repo.

It's purpose it to create a proxy to a site you own.

## How does it work?

1.  You have a domain point to Vercel
2.  Vecel has a "redirect/rewrite" rule that doesn't redirect instead proxies
3.  That's it

## What do I have to do?

1.  A github account.
1.  **Access to your DNS** for the domain to create appropriate records.
2.  A **Vercel account**.

# Ok, I'm ready!

## Deploy the repo

1. [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fjacebenson%2Fdev)
2. Login with GitHub, trust me.
3. Enter a project name, I called mine `pdi-redirect`.
4. Pick GitHub.
5. Create the repositry private or public, your choice.
6. Leave the Import Project settings, they were auto-detected by Vercel, and "Deploy".
7. Now it's building, it'll take about 20 seconds to build. 
8. You should get a 🎉 **CONGRATULATIONS** 🎉 message.  It should work now.  
  Well, it's redirecting to my site.  Let's fix that.

## Update the repo to point to your site

1. Goto your git source where that button created the repo.
1. Update the `./_includes/layout/redirect.njk` file to the site you want.
1. Vercel should trigger a build and update index.html and 404.html to redirect to your site.
   
## Set up the domain

1. Now you need to set up the domain.  To do that goto "Domains", 
1. It'll ask what project you want to use, pick the one you made from #1.
1. It will show you, that your DNS is wrong.  Go forth and set the dns as depicted.
1. Comeback to Vercel's domain page and "Refresh" your domain entry.  You may need to wait for your DNS to propegate.
1. That's it.