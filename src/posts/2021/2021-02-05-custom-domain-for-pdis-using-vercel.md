---
title: Custom Domain for PDIs using Vercel
description: "Custom Domain for PDIs using Vercel\r\n\r\nI was able to do this with the help of Mav and Mike Bahr. Thanks guys!\r\n\r\nFirst of all this fixes the redirect issues ..."
date: '2021-02-06'
tags:
  - servicenow
redirectFrom:
  - /custom-domain-for-pdis-using-vercel/
  - /p/2021-02-05-custom-domain-for-pdis-using-vercel/
---

# Custom Domain for PDIs using Vercel

I was able to do this with the help of Mav and Mike Bahr. Thanks guys!

First of all this fixes the redirect issues from the Netlify version. Netlify appends a slash to some endpoints. I don't see a way to control it, Vercel lets you control how that works.

# Simple Vercel Proxy

This is a simple repository.

It's purpose it to create a proxy to a site you own.

## How does it work?

1. You have a domain point to Vercel
2. Vercel has a "redirect/rewrite" rule that doesn't redirect instead proxies
3. That's it

## What do I have to do?

1. A GitHub account.
2. **Access to your DNS** for the domain to create appropriate records.
3. A **Vercel account**.

# Ok, I'm ready!

## Deploy the repo

1. [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fjacebenson%2Fdev)
2. Login with GitHub, trust me.
3. Enter a project name, I called mine `pdi-redirect`.
4. Pick GitHub.
5. Create the repository private or public, your choice.
6. Leave the Import Project settings, they were auto-detected by Vercel, and "Deploy".
7. Now it's building, it'll take about 20 seconds to build.
8. You should get a 🎉 **CONGRATULATIONS** 🎉 message. It should work now.\
   Well, it's redirecting to my site. Let's fix that.

## Update the repo to point to your site

1. Go to your git source where that button created the repo.
2. Update the `./_includes/layout/redirect.njk` file to the site you want.
3. Vercel should trigger a build and update index.html and 404.html to redirect to your site.

## Set up the domain

1. Now you need to set up the domain. To do that goto "Domains",
2. It'll ask what project you want to use, pick the one you made from #1.
3. It will show you, that your DNS is wrong. Go forth and set the dns as depicted.
4. Comeback to Vercel's domain page and "Refresh" your domain entry. You may need to wait for your DNS to propagate.
5. That's it.