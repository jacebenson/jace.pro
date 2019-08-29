---
aliases:
- '/RESTAPIRequest/'
date: '2016-01-01'
layout: page
tags:
- 'server-side-api'
title: RESTAPIRequest
url: '/restapirequest/'
---

# What is RESTAPIRequest

[Developer
Documentation](https://developer.servicenow.com/app.do#!/api_doc?v=kingston&id=sn_ws-namespace)

## RESTAPIRequest

### headers

All headers from the request

### pathParams

The variable path parameters passed in the request URI as an object

### queryParams

The query parameters from the request as an object

### getRequestedQueryCategory

Get the query category (i.e. read replica category) from query parameter
`sysparm\_query\_category`

### getSupportedResponseContentTypes

Obtain a set of media types that are common between what the client
request accepts and what this service is able to produce

### body

The body of the request

### queryString

The entire query string from the request URI

### uri

The request URI, excluding domain information

### url

The entire request URL, including domain

### getHeader

Get the value of a specific header from the request
