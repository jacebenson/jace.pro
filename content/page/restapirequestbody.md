---
aliases:
- '/RESTAPIRequestBody/'
date: '2018-01-04'
layout: page
tags:
- 'server-side-api'
title: RESTAPIRequestBody
url: '/restapirequestbody/'
---

## What is RESTAPIRequestBody

### nextEntry

Returns the next entry from the request body as an object if request is
array. If not an array then returns entire request body as an object

### data

The request body de-serialized as an object \|

### dataString

The request body as a string -- be careful to consider impact to memory
\|

### dataStream

The body of the request as a stream. Note, this object provides no
functions to manipulate the stream from script. Rather this object can
be passed to another API which takes an InputStream as an input
parameter

### hasNext

Return true if request has more entries. Use this in conjunction with
nextEntry
