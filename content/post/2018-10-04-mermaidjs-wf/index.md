---
date: '2018-10-04'
layout: post
title: Mermaid JS to render workflows
authors: ["jace"]
---

The other day I was looking at my mermaidjs flows and wanted to see how
they would render a servicenow workflow.

I created a UI page to do this, you just have to pass it a context
`sys_id` today but this could be improved.

## UI Action

```js
/*
Name: Show Mermaid
Table: Workflow Context[wf_context]
Client: [True]
OnClick: showWorkflowContextMermaid();
Script:
*/
function showWorkflowContextMermaid() {
    var id = g_form.getUniqueValue();
    var url = new GlideURL('/mermaid.do');
    url.addParam('sysparm_stack', 'no');
    url.addParam('context', id);
    g_navigation.open(url.getURL(), "_blank");
}
```

## UI Page

``` {.xml}
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
<body>
<g:evaluate>
var output = [];
var wf_context = new GlideRecord('wf_context');
  if(wf_context.get(RP.getParameterValue('context'))){
      var wf_activity = new GlideRecord("wf_activity");
      wf_activity.addQuery('workflow_version', wf_context.getValue('workflow_version'));
      wf_activity.orderBy('x');
      // wf_activity.orderBy('y');
      var query = wf_activity.getEncodedQuery();
      wf_activity.query();
      while(wf_activity.next()){
        // gs.info(wf_activity.getValue('sys_id') + '(' + wf_activity.name.toString().replace(/\"/g,'') + ')');
        output.push(wf_activity.getValue('sys_id') + '(' + wf_activity.name.toString().replace(/\"/g,'') + ')');
        var transitions = new GlideRecord('wf_transition');
        transitions.addQuery('from',wf_activity.getValue('sys_id'));
        transitions.query();
        while(transitions.next()){
          // output.push(wf_activity.getValue('sys_id') + '-->' + transitions.getValue('to'));
          output.push(wf_activity.getValue('sys_id') + '--' + transitions.condition.name.toString() + '-->' + transitions.getValue('to'));
        }
      }
     gs.info(output.toString().replace(/\,/g,'\n'));
output = output.toString().replace(/\,/g,'\n')
  } else {
      var query = 'No Workflow Found';
  }
gs.info(query);
</g:evaluate>
<div class="mermaid">
  graph TD
  ${output}
  </div>
    <div class="hidden">
      graph TD
      ${output}
    </div>
<script src="https://unpkg.com/mermaid@7.1.0/dist/mermaid.js" />
<script>
// mermaid.initialize({startOnLoad:true});
</script>
</body>
</j:jelly>
```

## Example Graph

```mermaid
graph TD;
  e233b949cb020200d71cb9c0c24c9c1f(Begin);
  e233b949cb020200d71cb9c0c24c9c1f--Always-->2e33b949cb020200d71cb9c0c24c9c20;
  2e33b949cb020200d71cb9c0c24c9c5a(Approve);
  2e33b949cb020200d71cb9c0c24c9c5a--Always-->2e33b949cb020200d71cb9c0c24c9c22;
  2633b949cb020200d71cb9c0c24c9c1e(Set state to New and approval to rejected);
  2633b949cb020200d71cb9c0c24c9c1e--Always-->a233b949cb020200d71cb9c0c24c9c20;
  a233b949cb020200d71cb9c0c24c9c20(Disassociate approval records);
  a233b949cb020200d71cb9c0c24c9c20--Always-->2e33b949cb020200d71cb9c0c24c9c20;
  2e33b949cb020200d71cb9c0c24c9c20(Change moves to Assess);
  2e33b949cb020200d71cb9c0c24c9c20--Always-->6e33b949cb020200d71cb9c0c24c9c1f;
  2e33b949cb020200d71cb9c0c24c9c22(Move to Scheduled);
  2e33b949cb020200d71cb9c0c24c9c22--Always-->a633b949cb020200d71cb9c0c24c9c1f;
  6e33b949cb020200d71cb9c0c24c9c1f(Requested);
  6e33b949cb020200d71cb9c0c24c9c1f--Always-->2a33b949cb020200d71cb9c0c24c9c26;
  a633b949cb020200d71cb9c0c24c9c1f(Change moves to Implement);
  a633b949cb020200d71cb9c0c24c9c1f--Always-->e233b949cb020200d71cb9c0c24c9c21;
  ac53b949cb020200d71cb9c0c24c9c7e(Reset the approvals);
  ac53b949cb020200d71cb9c0c24c9c7e--Always-->6e33b949cb020200d71cb9c0c24c9c1f;
  6233b949cb020200d71cb9c0c24c9c23(Wait for On hold to be false);
  6233b949cb020200d71cb9c0c24c9c23--Always-->ac53b949cb020200d71cb9c0c24c9c7e;
  e233b949cb020200d71cb9c0c24c9c21(Branch);
  e233b949cb020200d71cb9c0c24c9c21--Always-->2a33b949cb020200d71cb9c0c24c9c23;
  e233b949cb020200d71cb9c0c24c9c21--Always-->2e33b949cb020200d71cb9c0c24c9c1d;
  2a33b949cb020200d71cb9c0c24c9c26(Technical approvals);
  2a33b949cb020200d71cb9c0c24c9c26--Approved-->6233b949cb020200d71cb9c0c24c9c5b;
  2a33b949cb020200d71cb9c0c24c9c26--Rejected-->a233b949cb020200d71cb9c0c24c9c5c;
  6233b949cb020200d71cb9c0c24c9c5b(Check if Change is On hold);
  6233b949cb020200d71cb9c0c24c9c5b--Yes-->6233b949cb020200d71cb9c0c24c9c23;
  6233b949cb020200d71cb9c0c24c9c5b--No-->e633b949cb020200d71cb9c0c24c9c20;
  a233b949cb020200d71cb9c0c24c9c5c(Rejection notification);
  a233b949cb020200d71cb9c0c24c9c5c--Always-->2633b949cb020200d71cb9c0c24c9c1e;
  2a33b949cb020200d71cb9c0c24c9c23(Change request - Normal change tasks);
  2a33b949cb020200d71cb9c0c24c9c23--Always-->e633b949cb020200d71cb9c0c24c9c22;
  2e33b949cb020200d71cb9c0c24c9c1d(Change moves to Review);
  2e33b949cb020200d71cb9c0c24c9c1d--Always-->a633b949cb020200d71cb9c0c24c9c21;
  e633b949cb020200d71cb9c0c24c9c20(Move to Authorize);
  e633b949cb020200d71cb9c0c24c9c20--Always-->2233b949cb020200d71cb9c0c24c9c24;
  ea33b949cb020200d71cb9c0c24c9c5b(Wait for On hold to be false);
  ea33b949cb020200d71cb9c0c24c9c5b--Always-->cef33d49cb020200d71cb9c0c24c9c08;
  cef33d49cb020200d71cb9c0c24c9c08(Reset the approvals);
  cef33d49cb020200d71cb9c0c24c9c08--Always-->2233b949cb020200d71cb9c0c24c9c24;
  e633b949cb020200d71cb9c0c24c9c22(Move to Review);
  e633b949cb020200d71cb9c0c24c9c22--Always-->a633b949cb020200d71cb9c0c24c9c21;
  2233b949cb020200d71cb9c0c24c9c24(CAB approval);
  2233b949cb020200d71cb9c0c24c9c24--Approved-->6a33b949cb020200d71cb9c0c24c9c1e;
  2233b949cb020200d71cb9c0c24c9c24--Rejected-->2a33b949cb020200d71cb9c0c24c9c21;
  2a33b949cb020200d71cb9c0c24c9c21(Rejection notification);
  2a33b949cb020200d71cb9c0c24c9c21--Always-->2633b949cb020200d71cb9c0c24c9c1e;
  6a33b949cb020200d71cb9c0c24c9c1e(Check if Change is On hold);
  6a33b949cb020200d71cb9c0c24c9c1e--No-->2e33b949cb020200d71cb9c0c24c9c5a;
  6a33b949cb020200d71cb9c0c24c9c1e--Yes-->ea33b949cb020200d71cb9c0c24c9c5b;
  a633b949cb020200d71cb9c0c24c9c21(End);
```

![mermaidjs-wf-1.png](./mermaidjs-wf-1.png)
