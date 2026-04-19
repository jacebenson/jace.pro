---
title: 'Setting Up Writebook on Coolify'
description: >-
  Basecamp released Writebook, a self-hosted book publishing platform. Here's how I got it running on my Coolify server, and the three gotchas that had me troubleshooting.
tags:
  - coolify
  - self-hosting
  - basecamp
  - writebook
  - docker
date: '2026-04-08'
---

[Basecamp](https://basecamp.com) (37signals) recently released [Writebook](https://once.com/writebook) - a simple, self-hosted application for publishing books on the web. It's a Rails app distributed as a Docker image, and I wanted to run it on my [Coolify](https://coolify.io) server. Should be straightforward, right? Well, almost.

## What is Writebook?

Writebook lets you publish content in Markdown, with support for picture pages, chapters, and title pages. Books can be public or private, and everything is searchable. It's a nice alternative to throwing your documentation into yet another wiki or Confluence instance.

The official install uses their [ONCE](https://once.com) installer, but since I'm already running Coolify for my other apps, I wanted to deploy it there instead.

## The Setup

I created a new application in Coolify using the Docker image: `ghcr.io/basecamp/writebook:latest`

Mapped the domain to `books.jace.pro`, added a persistent volume at `/rails/storage`, and hit deploy. That's when the fun started.

## Gotcha #1: SSL Conflict

Writebook tries to handle SSL internally by default. Since Coolify uses Traefik at the edge to terminate SSL, this creates a conflict.

**The fix:** Add an environment variable:

```
DISABLE_SSL=true
```

This tells Writebook to serve plain HTTP on port 80 and let Traefik handle the certificates.

## Gotcha #2: Missing SECRET_KEY_BASE

Rails apps need a secret key base for production. The container kept crashing with:

```
ArgumentError: Missing `secret_key_base` for 'production' environment
```

**The fix:** Generate a key and add it as an environment variable:

```bash
openssl rand -hex 64
```

Then add `SECRET_KEY_BASE` with that value to your Coolify environment variables.

## Gotcha #3: Permission Denied on Storage

The container started but immediately crashed with:

```
Errno::EACCES: Permission denied @ dir_s_mkdir - /rails/storage/db
```

Coolify creates persistent storage directories as root, but Writebook runs as a non-root user (UID 1000). The Rails user couldn't write to the storage volume.

**The fix:** SSH into your server and fix the ownership:

```bash
chown -R 1000:1000 /data/coolify/storage/books.jace.pro
```

After that, a quick restart and the app came right up.

## The Result

Writebook is now running at [books.jace.pro](https://books.jace.pro). It's a clean, simple interface for publishing content - exactly what you'd expect from the Basecamp team.

## Coolify + Self-Hosting

I've been running Coolify for a while now and it's been solid. Having everything in one place - my blog, various side projects, and now Writebook - makes management easier. Sure, there are occasional hiccups like permission issues, but that's just part of self-hosting.

The lesson here: always check your storage permissions, and remember that Docker containers often run as non-root users even when you're deploying as root.

If you're running Coolify and want to self-host your own book publishing platform, Writebook is worth a look. Just remember those three environment variables and the permission fix.
