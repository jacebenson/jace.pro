---
title: Discovery Patterns for AWS
author: jace
date: 2018-04-04 00:00:00 +0000
layout: post
category: ''
tags:
- discovery
- patterns
- groovy
- aws
aliases:
- "/disco-pattern-aws/"

---
Patterns are a new and interesting thing in Servicenow.

<!--more-->

# Discovery Patterns

This is a work in progress, but wanted to share as I will otherwise never get this down on paper.

First of all let me prefix this with what I had to do to trigger the pattern for AWS I wanted to use.

Also heres a link to the [Docs](https://docs.servicenow.com/bundle/jakarta-it-operations-management/page/product/discovery/task/t-UseSMPatternForDisco.html).

## Set up

This [post](https://community.servicenow.com/community?id=community_question&sys_id=c5ec8b29db9cdbc01dcaf3231f9619bf)
and this [youtube video](https://www.youtube.com/watch?v=R_49vxeGz78) really helped me understand how to get started.

1. Create a Process Classifier
  * Relate the Horizontal Pattern and the *specific pattern* listed on the same line.
1. Create a New Web Servcie/Region/Logical Data Center
  * Default endpoint `https://rds.amazonaws.com`
    * Regional endpoing `us-west`
  * Logical Data Center [`cmp_discovery_ldc_config`] record with the aws account, data center related.
1. From the aws account record Create the discovery schedule.
  * Update the type to "Cloud services"
1. Update mid server capabilities to include `all`

## Understanding patterns

Patterns us Groovy as a backend to evaluate any scripts in the steps.

That means you have no access to normal script includes to modify the data.  

With that being said you *can* do most what you did in probes sensors in the pattern and it's pre/post script handlers.

Patterns are limited to following actions;

| Step                       | Comments |
| -------------------------- | -------- |
| Library Reference          | This seems like it allows repeatable steps |
| Match                      | ? |
| Get Process                | ? |
| LDAP Query                 | ? |
| SNMP Query                 | ? |
| WMI Method Invocation      | ? |
| WMI Query                  | ? |
| Parse Command Output       | ? |
| Parse File                 | ? |
| Parse Variable             | This is what is used to map a payload to fields |
| Create Relation/Reference  | ? |
| Filter Table               | ? |
| Merge Table                | ? |
| Transform Table            | This is what is used to set fields if additional processing needs to be done |
| Union Tables               | ? |
| Change User                | ? |
| Find Matching URL          | ? |
| Parse URL                  | ? |
| Put File                   | ? |
| Set Parameter Value        | This allows you to set easily referencable variables in `EVAL` scripts and other fields |
| Unchange User              | ? |
| Cloud REST Call            | This allows SN to make REST calls via the midserver to get data for this pattern |

## Pre / Post Processing values

These are records on [`sa_pattern_prepost_script`] where you can massage the data before and after it writes to the database.  This [post](https://community.servicenow.com/community?id=community_blog&sys_id=c0ac2225dbd0dbc01dcaf3231f96198d) was really helpful in my understanding of it.

If you're working with the payload, it is the payload for all the found things.  So if you want to modify a "account id" to a reference (`sys_id`) of a account table, you'll need to iterate over the array of the items and update each account_id.

This is my understanding of the payloadObj structure;

```js
{
    items: [
        {
            className: "cmdb_ci_thing",
            name: "the name",
            u_account: "account id you set here"
        }
    ]
}
```

So the way I handled it was a pre script

```js
/*
* 1. Pre sensor: You can change payload before it will be proccesed by Identification Engine.
*     Use IEJsonUtility in order to add relevant information to the payload
*     Input parameters in Pre sensor mode: payload, patternId
* 2. Post sensor: You can update/add missing info to the DB based on result (Json) from
*     Identification Engine
*     Output parameters in Post sensor mode: payload
*/

var rtrn = {};
//parsing the json string to a json object

var payloadObj = JSON.parse(payload);
//put your business logic here

var handleAccountData = function(){
    gs.log(JSON.stringify(payloadObj,'','  '),'AWS Service Account ID to GR');
    var returnStr = "Did not replace account value";
    for(var i = 0;i<payloadObj.items.length;i++){
        var item = payloadObj.items[i];
        if(item.className === "cmdb_ci_cloud_database"){
            var account_id = item.values.u_account;
            var saGR = new GlideRecord('aws_account_admin');
            if(saGR.get('account_id', account_id)){
                item.values.u_account = saGR.getValue('sys_id');
                returnStr = "Did replace account value";
            }
        }
    }
    return returnStr;
};
rtrn = {
    'status': {
        'message': handleAccountData(),
        'isSuccess': true
    },
    'patternId': patternId,
    'payload': JSON.stringify(payloadObj)
};
//you can return a message and a status, on top of the input variables that you MUST return.
//returning the payload as a Json String is mandatory in case of a pre sensor script, and optional in case of post sensor script.
//if you want to terminate the payload processing due to your business logic - you can set isSucess to false.
```