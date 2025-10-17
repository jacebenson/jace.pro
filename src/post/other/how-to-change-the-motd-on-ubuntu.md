---
title: How to change the MOTD on Ubuntu
permalink: /how-to-change-the-motd-on-ubuntu/
author: Jace Benson
image: /static/img/ubuntu-motd-bg.png
imageAltText: An image showing what files control parts of the standard MOTD
date: 2024-11-30T20:22:25.653Z
draft: false
stage: published
prism: false
---
The Message of the day on linux is helpful, but its long and... a little hard for things to stand out.

![MOTD](/static/img/pasted-image-20241130134300.png)

I had a few questions about the MOTD.

1. Where is it stored?
2. How is it set up?
3. Can I change it?
4. If I can, how can I test it?

## Where is the MOTD stored?

The message of the day on Ubuntu is stored in the `/etc/update-motd.d/` folder as a number of scripts.

You can view these scripts by running `ls -la /etc/update-motd.d/`

## How is the MOTD set up?

The Message of the day is broken up into individual scripts.
Here's what mine currently shows.

![](/static/img/ubuntu-motd-explained.png)

It seems that `cat /run/motd.dynamic` is run when you login and something else generates it.  At least according to, [chriserin on their blog](https://til.hashrocket.com/posts/rymit7rzif-view-the-motd-after-login-in-ubuntu).

## Can you change the MOTD?

Yes.  There's loads of ways to do this.

I don't want to remove it for everyone so you can disable it on a user by user basis by doing this;

```bash
touch $HOME/.hushlogin
```

Then you can add a custom script or echo to `/etc/profile/` and it will print it at the end.

I added \`neofetch\` to mine.

![](/static/img/screenshot-2024-11-30-143018.png)

## Further Reading

[server - How is /etc/motd updated? - Ask Ubuntu](https://askubuntu.com/questions/105689/how-is-etc-motd-updated)
[Working with the Ubuntu Message of the Day (MOTD) Service | Vultr Docs](https://docs.vultr.com/working-with-the-ubuntu-message-of-the-day-motd-service)