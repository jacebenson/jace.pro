---
title: Restarting workflows
date: 2019-04-05
layout: post
keywords:
- "workflow"
- "restart"
- "wf_version"
- "wf_workflow"
---

Restarting a workflow is sometimes needed.  I found myself looking at how to to do this today.

I'm posting this so I don't have to re-do this again.
<!--more-->

There are 2 ways to restart workflows.

1.  No code.
  - Delete the workflow context record.  I do this by going to the record in question.  E.g. `/sc_req_item.do?sysparm_query=number=RITM0012345`
  - Click into the "Show Workflow Context" UI Action Link (above the related lists)
  - Click Delete on the top right of the workflow context record !!! BE SURE YOUR ON THE WF_CONTEXT !!!
  - Goto the RITM and update the stage to `request_approved`
  - That's it.
2.  With Code.
  - Delete the workflow context record.  I do this by going to the record in question.  E.g. `/sc_req_item.do?sysparm_query=number=RITM0012345`
  - Click into the "Show Workflow Context" UI Action Link (above the related lists)
  - Click Delete on the top right of the workflow context record !!! BE SURE YOUR ON THE WF_CONTEXT !!!
  - Goto the `wf_workflow.list` table and find the workflow you want to start, copy it's `sys_id`.
  - Run this script in a background script;

  ```js
    var current = new GlideRecord('sc_req_item');
    current.get('number','RITM0012345');
    var id = 'cfe7a62f13958340f415345fd144b075';//wf_workflow sys_id here
    var w = new Workflow();
    var context = w.startFlow(id, current, current.operation(), function(){
        var vars = {};
        for (var n in current.variables) 
            vars[n] = current.variables[n];
        return vars;
    });
  ```

  Further Reading: [https://docs.servicenow.com/bundle/madrid-application-development/page/app-store/dev_portal/API_reference/Workflow/concept/c_Workflow_api.html#r_WF-startFlow_String_GR_S_A](https://docs.servicenow.com/bundle/madrid-application-development/page/app-store/dev_portal/API_reference/Workflow/concept/c_Workflow_api.html#r_WF-startFlow_String_GR_S_A)