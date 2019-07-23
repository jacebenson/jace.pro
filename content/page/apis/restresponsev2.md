---
aliases:
- '/RESTResponseV2/'
- '/restresponse/'
date: '2016-01-01'
layout: page
tags:
- 'server-side-api'
title: RESTResponseV2
url: '/restresponsev2/'
---

# What is RESTResponseV2

[Developer
Documentation](https://developer.servicenow.com/app.do#!/api_doc?v=kingston&id=sn_ws-namespace)

This is generally generated from a [RESTMessageV2](/restmessagev2) call.

## getStatusCode

Get the numeric HTTP status code returned by the REST provider

## getHeaders

Deprecated -- use getAllHeaders instead \|

## waitForResponse

Set the amount of time the instance waits for the response

## getBody

Get the content of the REST response body

## getErrorCode

Get the numeric error code, if there was an error during the REST
transaction

## getQueryString

Get the error message if there was an error during the REST transaction

## getAllHeaders

Get all headers returned in the REST response and the associated values

## haveError

Indicate if there was an error during the REST transaction

## getHeader

Get the value for a specified header

## getErrorMessage

Get the query used for this request
