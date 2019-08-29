---
aliases:
- '/GlideOAuth/'
- '/GlideOAuthClient/'
- '/GlideOAuthClientRequest/'
- '/GlideOAuthClientResponse/'
- '/GlideOAuthToken/'
- '/sn_auth/'
date: '2016-01-01'
layout: page
tags:
- 'server-side-api'
title: GlideOAuth
url: '/glideoauth/'
---

# What is GlidOAuth

[Developer
Documentation](https://docs.servicenow.com/bundle/kingston-platform-administration/page/administer/security/concept/c_OAuthClientAPIs.html)

> The OAuth client API provides methods to request and revoke OAuth
> tokens. The OAuth client provides these classes: - GlideOAuthClient:
> Methods for requesting and revoking the refresh and access tokens. -
> GlideOAuthClientRequest: Methods for handling client requests. -
> GlideOAuthClientResponse: Methods for handling client responses. -
> GlideOAuthToken: Methods for retrieving the access token and
> information about the access token.
>
> You can also customize the OAuthUtil script include to intercept the
> request parameters and also parse the responses from external OAuth
> providers.
>
> When using OAuth classes in a scoped script, use the sn\_auth
> namespace identifier.

## GlideOAuthClient

### revokeToken

Revokes the access or refresh token for the client, with the request and
optional header parameters set into a GlideOAuthClientRequest object

### requestTokenByRequest

Retrieves the token for the client, with the request and optional header
parameters set into a GlideOAuthClientRequest object

### requestToken

Retrieves the token for the client, with the request parameters encoded
in JSON format

## GlideOAuthClientRequest

### getRefreshToken

Retrieves the refresh token

### setPassword

Sets the password with the string you provide

### getHeaders

Retrieves the HTTP headers

### setHeader

Sets the HTTP headers for the nave:value pair that you provide

### getHeader

Retrieves the HTTP headers for the string you provide

### getPassword

Retrieves the password

### setUserName

Sets the user name with the string you provide

### setParameter

Sets the parameters for the name:value pair of strings you provide

### getGrantType

Retrieves the grant type

### setGrantType

Sets the grant type with the string you provide

### getUserName

Retrieves the user name

### setScope

Sets the scope with the string you provide

### setRefreshToken

Sets the refresh token with the string you provide

### getScope

Retrieves the scope

### getParameter

Retrieves the parameter for the parameter name you provide

## GlideOAuthClientResponse

### getResponseParameters

Retrieves the response content from an external OAuth provider. The
response is in a name:value pair

### getBody

Retrieves all of the response information, including instance
information

### getToken

Retrieves the refresh token

### getResponseCode

Retrieves the HTTP response code from the external OAuth provider

### getContentType

Retrieves the HTTP response content header from an external OAuth
provider

### getErrorMessage

Retrieves the error message if authentication is not successful

## GlideOAuthToken

### getRefreshToken

Retrieves the refresh token

### getRefreshTokenSysID \| Retrieves the sys\_id of the refresh token \|

### getExpiresIn

Retrieves the lifespan of the access token in seconds

### getAccessTokenSysID \| Retrieves the sys\_id of the token ID \|

### getScope

Retrieves the scope, which is the amount of access granted by the access
token

### getAccessToken

Retrieves the access token
