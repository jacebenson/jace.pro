---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Recordless Rest Is Great"
aliases: ['/rest/']
subtitle: ""
summary: ""
authors: ['jace']
tags: []
categories: []
date: 2019-09-14T15:28:29-05:00
lastmod: 2019-09-14T15:28:29-05:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: true

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---
It seems this page was lost in the rearranging of files.  I pulled it out
of storage

I often use the record-less rest calls to test things. I didn't see it on
my blog, so here's an example so I can find it in the future.\

```js
    var instance = "dev40379";
    var requestBody = {
        short_description: "test incident"
    };
    var restMessage = new sn_ws.RESTMessageV2();
    restMessage.setBasicAuth("slack", "slack");
    restMessage.setHttpMethod("post");
    restMessage.setEndpoint("http://"+ instance +".service-now.com/api/now/table/incident");
    restMessage.setRequestBody(JSON.stringify(requestBody));
    var response = restMessage.execute();
    var error = response.haveError();
    if(error){
    var errorCode = response.getErrorCode();
    var errorMsg = response.getErrorMessage();
    } else {
    }
    var headerVal = response.getHeader("Content-Type");
    var headers = response.getHeaders();
    var queryString = response.getQueryString();
    var statusCode = response.getStatusCode();
    var responseBody = response.getBody();
    gs.info(statusCode);
    gs.info(responseBody);
    /**
     * *** Script: 201
     * *** Script: {"result":{"parent":"","made_sla":"true","caused_by":"","watch_list":"","upon_reject":"cancel","sys_updated_on":"2017-11-15 20:56:39","child_incidents":"0","hold_reason":"","approval_history":"","skills":"","number":"INC0010006","resolved_by":"","sys_updated_by":"slack","opened_by":{"link":"https://dev40379.service-now.com/api/now/table/sys_user/f3bfdeb14f12030002b3f2318110c7f8","value":"f3bfdeb14f12030002b3f2318110c7f8"},"user_input":"","sys_created_on":"2017-11-15 20:56:39","sys_domain":{"link":"https://dev40379.service-now.com/api/now/table/sys_user_group/global","value":"global"},"state":"1","sys_created_by":"slack","knowledge":"false","order":"","calendar_stc":"","closed_at":"","cmdb_ci":"","delivery_plan":"","impact":"3","active":"true","work_notes_list":"","business_service":"","priority":"5","sys_domain_path":"/","rfc":"","time_worked":"","expected_start":"","opened_at":"2017-11-15 20:56:39","business_duration":"","group_list":"","work_end":"","caller_id":"","resolved_at":"","approval_set":"","subcategory":"","work_notes":"","short_description":"test incident","close_code":"","correlation_display":"","delivery_task":"","work_start":"","assignment_group":"","additional_assignee_list":"","business_stc":"","description":"","calendar_duration":"","close_notes":"","notify":"1","sys_class_name":"incident","closed_by":"","follow_up":"","parent_incident":"","sys_id":"98266e404f22030002b3f2318110c705","contact_type":"","incident_state":"1","urgency":"3","problem_id":"","company":"","reassignment_count":"0","activity_due":"","assigned_to":"","severity":"3","comments":"","approval":"not requested","sla_due":"","comments_and_work_notes":"","due_date":"","sys_mod_count":"0","reopen_count":"0","sys_tags":"","escalation":"0","upon_approval":"proceed","correlation_id":"","location":"","category":"inquiry"}}
     */
```