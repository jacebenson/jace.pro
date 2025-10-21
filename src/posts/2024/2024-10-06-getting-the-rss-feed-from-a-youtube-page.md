---
title: Getting the RSS Feed from a Youtube Page
description: "Getting the RSS feed from Youtube Channels is harder and harder every year.\r\n\r\nI wrote this up after looking for a few hours.  This will if ran on a video pa..."
date: '2024-10-06'
tags:
  - javascript
  - xml
redirectFrom:
  - /getting-the-rss-feed-from-a-youtube-page/
---

Getting the RSS feed from Youtube Channels is harder and harder every year.

I wrote this up after looking for a few hours.  This will if ran on a video page land you on the user's "featured" page and from that page you can get the RSS Feed.  Just paste this in your browsers console (hit f12 on your keyboard).  If it doesn't land you on the rss feed, run it a second time and it should.

```js
(function () {
  // if not currently on the channels' featured page... go there
  // assume we're on youtube
  // 1 check if we're on a video page
  // e.g. https://www.youtube.com/watch?v=YyWZmdkPfDM
  // if so look for this element
  // <link rel="alternate" media="handheld" href="https://m.youtube.com/@google/featured">

  // 2 if so, go to the channel featured page
  // if we're on th channel featured page, get the rss feed

  let isVideoPage = location.href.includes('watch?v=');
  let channelLink = document.querySelector('body').querySelector('span[itemprop="author"]').querySelector('link[itemprop="url"]').href;
  // this is on every video and channel page
  // so if we're not on the featured page, go there
  let featuredPage = channelLink + '/featured';
  let isFeaturedPage = location.href === featuredPage;
  console.log({isVideoPage, channelLink, featuredPage, isFeaturedPage});
  if(!isFeaturedPage) {
    location.href = featuredPage;
  }
  let rssLink = document.querySelector('link[type="application/rss+xml"]');
  if (rssLink) {
    location.href = rssLink.href;
  }
})();
```