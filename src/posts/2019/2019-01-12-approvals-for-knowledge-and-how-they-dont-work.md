---
title: Approvals for Knowledge and how they dont work
description: >-
  A few days ago Derek was asking about approvals, specifically approvals for
  Knowledge articles and why they don't work out of the box. It's weird and here
  I'...
date: '2019-01-12'
tags:
  - servicenow
  - approvals
redirectFrom:
  - /approvals-for-knowledge-and-how-they-dont-work/
  - /p/2019-01-12-approvals-for-knowledge-and-how-they-dont-work/
---

<!--StartFragment-->

A few days ago Derek was asking about approvals, specifically approvals for Knowledge articles and why they don't work out of the box. It's weird and here I'll go through it. So it seems ServiceNow started to make this work out of the box but just never finished it. Here's the list of things they did;

* Workflow `Knowledge - Approval Publish` creates an approval
* A business rule called `Approval Events (Non-Task)` triggers an event for the state based on the table. So searching for `kb_knowledge.approval.inserted` comes up empty. Here's the code;

  ```javascript
  sendEventsNonTask();

  function sendEventsNonTask() {
     if (!current.state.changes()) 
        return;

   var event = current.source_table;
   switch (current.state + "") {    
      case 'cancelled':
         event += ".approval.cancelled";
         gs.eventQueue(event, current, gs.getUserID(), gs.getUserName());
         break;
      case 'requested':
         event += ".approval.inserted";
         gs.eventQueue(event, current, gs.getUserID(), gs.getUserName());
         updateRecord(current, current.approver.getDisplayValue() + " requested to approve task");
     break;
      case 'rejected':
         event += ".approval.rejected";
         gs.eventQueue(event, current, current.state, previous.state);
         updateRecord(current, current.approver.getDisplayValue() + " rejected the task.", 
               current.comments.getJournalEntry(-1));
         notifyMyFriends(current);
         break;
      case 'approved':
         updateRecord(current, current.approver.getDisplayValue() + " approved the task.", 
               current.comments.getJournalEntry(-1));
         break;
      default: 
     }       
   }
   /*Omitted remaining code...*/
  ```
* No notification is built but you could just create a new one based on the template called `change.itil.approve.role`\

  Subject: ${sysapproval.sys_class_name} ${sysapproval} Approval Request\
  <!--StartFragment-->

  ```html
  <div>Short Description: ${sysapproval.short_description}</div>
  <div>Priority: ${sysapproval.priority}</div>
  <div>Category: ${sysapproval.category}</div>
  <div>&nbsp;</div>
  <div>
  <div><hr /></div>
  </div>
  <div>${mail_script:change_request_summary}</div>
  <div>&nbsp;</div>
  <div>Comments:</div>
  <div>${sysapproval.description}</div>
  <div>
  <div><hr /></div>
  </div>
  <div>${mailto:mailto.approval}</div>
  <div>
  <div><hr /></div>
  </div>
  <div>${mailto:mailto.rejection}</div>
  <div>
  <div><hr /></div>
  </div>
  <div>Approval Activity:</div>
  <div>${mail_script:approval_activity}</div>
  <div>
  <div><hr /></div>
  </div>
  <div>Click here to view Approval Request: ${URI}</div>
  <div>Click here to view ${sysapproval.sys_class_name}: ${sysapproval.URI}</div>
  ```
* I'd probably start with something like this\
  <!--StartFragment-->

  Subject: ${document_id.short_description} ${document_id.number} Approval Request

  <!--EndFragment-->\
  <!--StartFragment-->

  ```html
  <div>Short Description: ${document_id.short_description}</div>
  <div>&nbsp;</div>
  <div>
  <div><hr /></div>
  </div>
  <div>${mailto:mailto.approval}</div>
  <div>
  <div><hr /></div>
  </div>
  <div>${mailto:mailto.rejection}</div>
  <div>
  <div><hr /></div>
  </div>
  <div>Click here to view Approval Request: ${URI}</div>
  <div>Click here to view ${document_id.sys_class_name}: ${document_id.URI}</div>
  ```

  <!--EndFragment-->

<!--StartFragment-->

They made it really close. Just never finished it.

In any case, thanks Derek for the idea for the post.



<!--EndFragment-->