---
title: Approval field and why it works the way it does
description: >-
  1. There's the told approval engine that I believe evaluates the
  sysrule_approvals and process_guide records.  There's a number of approval
  rules against sc_...
date: '2024-11-01'
tags:
  - servicenow
  - business-rules
  - workflow
  - flow-designer
  - knowledge
  - notifications
  - service-catalog
  - html
  - release-vancouver
  - tutorial
redirectFrom:
  - /approval-field-and-why-it-works-the-way-it-does/
---

1. There's the told approval engine that I believe evaluates the `sysrule_approvals` and `process_guide` records.  There's a number of approval rules against `sc_request`
	Depending on how the `approval_engines.do` page is configured controls how the legacy approvals work.  Lets look at the three tables in question;
	1. Catalog Task is set to use Process Guides
	2. Requested Item using approval engine when it's associated to a delivery plan, otherwise it's handled in the workflow or flow.
	3. Request is managed by workflows only.
1. Catalog Task Process Guide
	1. Catalog Task Default ( when this condition is true `state=1^delivery_task.sys_class_name=cat_item_dt_approval`)
	   Today we have [9 items using DEFAULT execution plan here](https://deltasndev.service-now.com/sc_cat_item_list.do?sysparm_query=type!%3Dbundle%5Esys_class_name!%3Dsc_cat_item_guide%5Etype!%3Dpackage%5Esys_class_name!%3Dsc_cat_item_content%5Epublished_refISEMPTY%5Edelivery_planISNOTEMPTY%5Eactive%3Dtrue%5Esys_class_name!%3Dstd_change_record_producer%5EORsys_class_name%3DNULL%5Esys_class_name!%3Dsc_cat_item_producer%5EORsys_class_name%3DNULL%5Esys_class_name!%3Dsc_cat_item_composite_producer%5EORsys_class_name%3DNULL%5Esys_class_name!%3Dpc_product_cat_item%5EORsys_class_name%3DNULL&sysparm_view=).  
	   Those invoke a call to this script include `GlideappTaskApprovalHelper` which is hidden/unavailable but is setting the approval to `requested` when there are no approvers.
1. Catalog Task Business Rules
	1. Auto Close on Approval - This is used on Execution Plan tasks and sets the `active` and `work_end` fields.
	2. Reject Parent - This is used on Execution Plan tasks and sets the `sc_req_item.approval` based on the `sc_task` if it's rejected.
2. Task Business Rules
	1. Stamp Approvals - This sets `approval_set` to the current time when approved or rejected, otherwise it clears the value.
	2. Moot Approvals Upon Cancellation - This looks at all individual and group approvals for the current task, if the state of the `sysapproval_approver` or `sysapproveral_group` are `requested` or `not requested` this sets' the approval record to `not_required`.
	3. task events - This generates events that notifications and script actions can trigger against.
		1. `task.approved` - no script actions against this
		2. `task.rejected` - no script actions against this
3. Requested Items Approval Engines - [There are none](https://deltasndev.service-now.com/sysrule_approvals_list.do?sysparm_query=active%3Dtrue%5Etable%3Dsc_req_item&sysparm_view=).
4. Requested Items Workflows ([KB0538552](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0538552))
	1. `Approval Action` - Sets the approval as configured.
	2. `Approval - User` - Sets approval to Requested, and then Approved or Rejected as configured.
	3. `Approval - Group` - Sets approval to Requested, and then Approved or Rejected as configured.
	4. `Rollback To` - Sets approval to Not Yet Requested or Requested as configured.
6. Requested Items Flows
	1. `Ask for Approval` - Sets the approval to Requested, and then Approved or Rejected as configured.
7. Requested Items Business Rules
	1. Items Added After Request Approved - runs **before insert**, where **`current.request.approval == approved and current.stage == waiting_for_approval`**
	   Then if the catalog item associated uses workflow or flow, set the **`current.approval = requested`**
	   Else, **`current.approval = current.request.approval`**
	1. Set RITM Due Date On Insert - calculates the `due_date`
	2. request item closure - cancels related approvals when the item becomes cancelled
	3. sc_ic: Copy Approval Definitions - This calls `sc_ic_Factory` which [deals with the catalog item designer](https://docs.servicenow.com/bundle/vancouver-servicenow-platform/page/product/service-catalog-management/reference/r_InstalledWithCatalogItemDesigner.html).
	4. reject approval on closed incomplete - runs **before insert or update** where **`current.state.changesTo(4)`**
	   Then it sets the approval to rejected.
1. Request Workflows
	2. Service Catalog Request **active == true** (`no condition`) set's `approval` to `requested` then **Marks task approved**
	5. Source Request **active == false** (`sourceable=true^approval=approved^EQ`)
	6. Service Catalog Request **active == false** (`no condition`)
	7. Delta Hardware Catalog Generic **active == false**  (`parent.ref_sc_req_item.cat_item.category!=<hardware/software procurement^EQ`)
2. Request Business Rules
	1. request closure - this appears to cancel related approvals by calling `SNC.Request` but that code is not accessible.
	2. Set Request State - this sets the `sc_request.stage` and `sc_request.state`.
	3. Cascade Request Approval to Request Item - runs **after insert or update** where **current.approval.changes()**
		 if the item is a sequenced request item, sets the stage to not started
		 else cascade the approval to the request item, which works differently for workflow, flow and delivery plan
			 workflow if current.hasWorkflow, if (stage is `waiting_for_approval` or is sequenced item) and request.approval == approved, current.approval = `requested`, else `rejected`
			 flow if current.hasFlowDesigner, if (stage is `waiting_for_approval` or is sequenced item) and request.approval == approved, current.approval = `requested`, else `rejected`
			 delivery plan copies the approval from the request.approval		 
	1. sc request events - triggers events - look for script actions
		1. sc_request.approved - no script action
		2. other events not applicable