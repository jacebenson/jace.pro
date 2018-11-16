---
layout: page
url: "/restapiresponsestream/"
author: jace
date: 2018-01-06 00:00:00 +0000
cover: ''
category: ''
tags:
- server-side-api
title: RESTAPIResponseStream
aliases:
- "/RESTAPIResponseStream/"
---
## What is RESTAPIResponseStream
<!--more-->

### writeStream

Write an InputStream directly to the response stream. Can be called multiple times. Caller responsible for response format and setting proper Content-Type and status code prior to calling

### writeString

Write a string directly to the response stream. Can be called multiple times. Caller responsible for response format and setting proper Content-Type and status code prior to calling