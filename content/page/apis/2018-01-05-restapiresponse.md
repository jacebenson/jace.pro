---
layout: page
url: "/restapiresponse/"
author: jace
date: 2018-01-05 00:00:00 +0000
cover: ''
category: ''
tags:
- server-side-api
title: RESTAPIResponse
aliases:
- "/RESTAPIResponse/"
---
## What is RESTAPIResponse
<!--more-->

### setHeaders

Set response headers from the specified object                                                                                                                                                                 

### getStreamWriter

Return stream writer. Caller responsible to set proper content type and status using setStatus and setHeader methods. Caller responsible to populate all headers on response before actually writing to stream 

### setLocation

Set the Location header                                                                                                                                                                                        

### setError

Set Response Error                                                                                                                                                                                             

### setContentType

Set the Content-Type header                                                                                                                                                                                    |

### setBody

Use the specified object as the response body                                                                                                                                                                  

### setStatus

Set response HTTP status code                                                                                                                                                                                  

### setHeader

Set a response header