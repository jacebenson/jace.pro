---
title: Integrate Gsuite and ServiceNow  Using a Google Service Account and JWT
description: >-
  Today on Slack, mdev asked about a post that seems to be archived.  mdev found
  it and shared the cache link.  I am not sure who will need this but I think
  it...
date: '2022-10-12'
tags:
  - servicenow
redirectFrom:
  - /integrate-gsuite-and-servicenow-using-a-google-service-account-and-jwt-from-cache/
  - /p/2022-10-12-integrate-gsuite-and-servicenow-using-a-google-service-account-and-jwt-from-cache-from-cache-by-ward-van-hoof/
---

Today on Slack, mdev asked about a post that seems to be archived.  mdev found it and shared the cache link.  I am not sure who will need this but I think it's worth keeping.  




 

After being stuck at a client for months, i decided to try whatever it took to get our integration running. After i got it working, i decided to note all my steps for my client (and future consultants). This post is derived from that support document.

 See also my post on the community:
https://community.servicenow.com/community?id=community_question&sys_id=2a88e632db6c8850f7fca851ca96...

 

## 1        Google set up
In Gsuite, a service account with domain wide delegation needs to be registered. It should receive all scopes (roles) which are going to be used in the integration. Gsuite will provide you with a JSON containing the authentication information. This JSON should look like this: (broken image not copied)

## 2        Generate authentication JSK
From the authentication information:

- Unescape the private key and store it locally
- Unescape the client key which you retrieve when entering the value of “client_x509_cert_url” in your browser, and store it locally
Navigate to the folder and run this command (Ubuntu)

`openssl pkcs12 -export -in [path to certificate] -inkey [path to private key] -certfile [path to certificate] -out [p12_file_name].p12`

Enter a password twice. Run the following command

`keytool -importkeystore -srckeystore [p12_file_name].p12 -srcstoretype pkcs12 -destkeystore [jks_file_name].jks -deststoretype JKS`

for every prompt, use the same password as in the previous step. Now you have a .jks file with your credentials.

Delete the locally stored keys as soon as you have the JSK.

 

 

## 3        Register oauth in ServiceNow
### 3.1      Certificate
Register a new x509 Certificate (sys_certificate)

Type: Java Key Store
Key store password: the password entered in (2)
Attachment: attach the generated .jks file
Delete the local .jks file
### 3.2      JWT key
Register a JWT key (jwt_keystore_aliases)

Signing Keystore: the certificate just registered
Signing Algorithm: RSA 256
Signing Key password: same as entered in (2)
Key Id: leave blank
Active: true
### 3.3      JWT Provider
Register a JWT provider (jwt_provider)

Signing Configuration: record registered under (3.2)
Related list: standard claims
aud: https://oauth2.googleapis.com/token
iss: client_email from the Gsuite JSON
sub: Email of an admin account
Related list: Custom Claims
scope Space separated domains you need to access,
              eg: https://www.googleapis.com/auth/admin.directory.group.readonly
### 3.4      Application Registry
Register an Application Registry (oauth_entity)

Client ID:               If the field is mandatory, use script to make blank after saving (if the field is filled, the integration fails because the basic auth is used instead of the JSK attachment)
Client Secret:               If the field is mandatory, use script to make blank after saving
Default Grant Type: JWT bearer
Refresh Token Lifespan: 60
Authorizaiton URL: https://accounts.google.com/o/oauth2/auth
Token URL:               https://oauth2.googleapis.com/token
Token Revocation URL: https://accounts.google.com/o/oauth2/revoke
Redirect URL: https://<your-instance>.service-now.com/oauth_redirect.do
#### 3.4.1      OAuth entity profiles
Oauth Provider: Application registery of (3.4)
Grant type: JWT Bearer
JWT Provider: JWT provider of (3.3)
OAuth Entity Profile Scopes (related list): Leave Empty
#### 3.4.2      Oauth entity scopes
OAuth provider: Application registry of (3.4)
OAuth scope: The scope you need access to
 

### 3.5      Rest message
Register a Rest message (sys_rest_message)

Endpoint:               https://www.googleapis.com/oauth2/v3/token
Authentication type: Oauth 2.0
Oauth Profile: Application registry of (2.4)
### 3.6      HTTP Method
Register a HTTP Method (sys_rest_message)

Endpoint Endpoint from google docs
Correct scopes for the endpoint have to be declared (both on the Oauth entity scope (3.4.2) AND the “sub” claim (3.3)
e.g. https://www.googleapis.com/admin/directory/v1/groups requires https://www.googleapis.com/auth/admin.directory.group.readonly
Authentication type: Inherent from parent
## 4        Scopes
The service account as defined in Google has certain access rights. To invoke these rights, the API call must declare them as scopes. This has to be done at 2 locations

The JWT Profile definition (space separated) (3.3)
The OAuth Entity Scopes related list of the Application registry (3.4.2)
The definitions at these two locations must match.

The Endpoint access (3.6) has right restrictions. The correct scopes have to be invoked in order to have the endpoint expose its data.

For endpoints with their required scopes, check:

https://developers.google.com/admin-sdk/directory/v1/reference

Scope overview:

https://developers.google.com/admin-sdk/directory/v1/guides/authorizing.html

OAuth authentication (click “HTTP/REST”).

https://developers.google.com/identity/protocols/OAuth2ServiceAccount

https://developers.google.com/identity/protocols/OAuth2ServiceAccount#formingclaimset

 

 

 

## 5        Debugging
Error message when retrieving OAuth token:

<p style="color:red">OAuth flow failed. Verify the configurations and try again. Error detail:invalid_scope, Invalid downscoping, scopes should not be specified as a request parameter.</p>

Make sure the related list “OAuth Entity Profile Scopes” on your OAuth entinty profile is empty

<p style="color:red">OAuth flow failed. Verify the configurations and try again. Error detail:invalid_scope, Empty or missing scope not allowed.</p>

Check the scope entered under the claim “scope” (3.4.1)

 

You receive an access token, but the request is “403: forbidden”

Check you are impersonating the correct user (3.4.1, the email address entered as claim “sub”)

S﻿ource: https://www.servicenow.com/community/contentarchivals/contentarchivedpage/message-uid/2325489