---
title: Calling Server Side Script includes from UIB Client Scripts
description: How to call server side script includes from UIB Client Scripts
date: '2025-05-11'
tags:
  - servicenow
  - client-scripts
  - api
  - html
  - release-yokohama
  - integration
redirectFrom:
  - /calling-script-includes-from-uib-client-scripts/
---

This could be improved a lot.

Let’s first talk about how this is working for me.

Everything I read to do this either says make a rest call or use the “new transform data resource”. When trying the data resource it never seemed to run the script include. So I went with rest. I’m sure I missed something I’ll be asking Tomas about this.

My working steps.

1. Find or Create a Script Include
2. Create a REST Endpoint that calls your Script Include
3. Create a Client script using the helpers and snHttp method to call said REST endpoint
4. Profit

helper has a method called snHttp, which by default batches your request up (you can set an option of batch to false to stop that.)

To take advantage of a rest call to call a server side script include, you’ll need to make a rest api … really?

yep. one thing to note is you can use the async/await in the uib client scripts so that’s nice.

[ServiceNow Docs on Helper](https://www.servicenow.com/docs/bundle/yokohama-api-reference/page/app-store/dev_portal/API_reference/helpers/concept/helpersAPI.html?_bhlid=04085166848c0d4ec066e78ecbc2e77418400ae2)

[Community post on Client Side Script Includes](https://www.servicenow.com/community/developer-forum/how-to-use-script-includes-in-ui-builder/m-p/2510525?_bhlid=399020f5b7d9b0f8e726be8a2fa99bf21bc96975) (says to do this you need to make a rest call)

[Useful examples of snHttp](https://www.servicenow.com/community/developer-forum/call-script-include-from-ui-builder/m-p/2102347?_bhlid=9a2cb9c782940ffa8d3aed53638508a6c0bd7e3f)