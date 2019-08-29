---
aliases:
- '/RESTMessageV2/'
- '/restmessage/'
date: '2016-01-01'
layout: page
tags:
- 'server-side-api'
title: RESTMessageV2
url: '/restmessagev2/'
---

# What is RESTMessageV2

[Developer
Documentation](https://developer.servicenow.com/app.do#!/api_doc?v=kingston&id=sn_ws-namespace)

## setMIDServer

Configure the REST message to communicate through a MID Server

## getRequestBody

Get the content of the REST message body

## getRequestHeader

Get the value for an HTTP header specified by the REST client

## setHttpMethod

The HTTP method this REST message performs, such as GET or PUT. You must
set an HTTP method when using the RESTMessageV2() constructor with no
parameters

## setBasicAuth

Set basic authentication headers for the REST message

## setRequestHeader

Set an HTTP header to the specified value

## setAuthenticationProfile

Set the credentials for the REST message using an existing basic auth or
OAuth 2.0 profile. Valid types are 'basic' and 'oauth2'. Valid
profileIds are the sys\_id of a Basic Auth Configuration
\[sys\_auth\_profile\_basic\] record or an OAuth Entity Profile
\[oauth\_entity\_profile\] record \|

## setQueryParameter

Append a name-value parameter to the request URL \|

## setRequestBodyFromAttachment

Uses the specified attachment as the request body of this REST Message.
Mutually exclusive with setRequestBody

## getEndpoint

Get the URL of the endpoint for the REST message

## setStringParameterNoEscape

Set a REST message function variable to the specified value without
escaping XML reserved characters

## execute

Send the REST message to the endpoint

## setHttpTimeout

Set the amount of time the REST message waits for a response from the
REST provider

## setEndpoint

Set the endpoint for the REST message

## setRequestBody

Set the body content of a PUT or POST request. Mutually exclusive with
setRequestBodyFromAttachment

## getRequestHeaders

Get name and value for all HTTP headers specified by the REST client

## saveResponseBodyAsAttachment

Setup the response body to be saved into the specified attachment when
the request is sent. encryptCtxSysId is optional

## setStringParameter

Set a REST message function variable to the specified value

## setMutualAuth

Set the mutual authentication protocol profile for the REST message

## setEccTopic

Set the ECC topic for the REST message. The default ECC topic is
RESTProbe if topic is not set. In most cases it is unnecessary to set
ECC topic

## setEccCorrelator

Associate outbound requests and the resulting response record in the ECC
queue

## setEccParameter

Override a value from the database by writing to the REST message
payload

## executeAsync

Send the REST message to the endpoint asynchronously. The instance does
not wait for a response from the web service provider when making
asynchronous calls

## getEccTopic

Get the ECC topic for the REST message

[Working with the response on this page](/restresponsev2)
