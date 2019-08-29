---
aliases:
- '/RESTAPIResponseStream/'
date: '2018-01-06'
layout: page
tags:
- 'server-side-api'
title: RESTAPIResponseStream
url: '/restapiresponsestream/'
---

## What is RESTAPIResponseStream

### writeStream

Write an InputStream directly to the response stream. Can be called
multiple times. Caller responsible for response format and setting
proper Content-Type and status code prior to calling

### writeString

Write a string directly to the response stream. Can be called multiple
times. Caller responsible for response format and setting proper
Content-Type and status code prior to calling
