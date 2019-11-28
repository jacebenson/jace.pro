---
date: '2019-01-04'
layout: post
title: "Order of operations (business rules, acls, data policies, ui policies, and client scripts)"
authors: ["jace"]
diagram: true
---

Understanding **when** something runs is critical when building these
systems. ServiceNow has a very simple and great image that captures that
for [business rules](https://docs.servicenow.com/bundle/geneva-servicenow-platform/page/script/business_rules/reference/r_HowBusinessRulesWork.html).
However that doesn't help with other scripts in the system. Bas @
Logicalis wrote something up about this on
[snc-blog](http://www.snc-blog.com/2017/02/02/script-execution-flow/)
but I thought I could improve on it. Also messing with things is a way I
remember better.

I try to keep all the common diagrams I use on
[https://workflow.jace.pro/](https://workflow.jace.pro/?flow=BusinessRuleOrderSequence)
but I realize I don't really share when that changes.

Here I've been messing with this and I thought now is a great time to
share this diagram I keep out there.


{{mermaid}}
    sequenceDiagram
    participant uxux as User Interactions
    participant csup as UI Policy
    participant cscs as Client Script
    participant ssss as Server Side
    participant eeee as Engines
    participant dbdb as Database
    uxux->>ssss: Form Request
    ssss->>dbdb: Query Business Rules
    dbdb->>ssss: Display Business Rules
    ssss->>cscs: OnLoad Client Scripts
    cscs->>csup: OnLoad UI Policies
    csup->>uxux: Form loaded
    loop Every Change
        uxux->>ssss: ref_qual_element field changes
        ssss->>cscs: OnChange Client Scripts
        cscs->>csup: OnChange UI Policies
        csup->>uxux: Form Updated
    end
    uxux->>csup: Form Submit(client)
    csup->>cscs: OnSubmit Client Scripts
    cscs->>ssss: Form Submit(server)
    ssss->>eeee: Before Business Rules <1000
    eeee-->ssss: Approval engine
    eeee-->ssss: Assignment rules engine
    eeee-->ssss: Data policy engine
    eeee-->ssss: Escalation engine
    eeee-->ssss: Field normalization engine
    eeee-->ssss: Role engine
    eeee-->ssss: Execution plan engine
    eeee-->ssss: Update version engine
    eeee-->ssss: Workflow engine (for default workflows)
    eeee->>ssss: Before Business Rules >=1000
    ssss->>dbdb: Database Update
    dbdb->>ssss: After Business Rules <1000
    ssss-->eeee: Label engine
    ssss-->eeee: Listener engine
    ssss-->eeee: Table notifications engine
    Note right of eeee: This creates sysevents that process later
    ssss-->eeee: Role engine
    ssss-->eeee: Text indexing engine
    ssss-->eeee: Update sync engine
    ssss-->eeee: Data lookup engine inserts or updates
    ssss-->eeee: Workflow engine (for deferred workflows)
    ssss-->eeee: Trigger engine (for all Flow Designer flows)
    eeee->>ssss: After Business Rules >=1000
    ssss->>ssss: Async Business Rules
    Note right of ssss: This creates sys_triggers that process later
    ssss->>dbdb: Query Business Rules
    dbdb->>ssss: Display Business Rules
    ssss->>uxux: Return UI

Note over uxux,dbdb: Thanks to http://www.snc-blog.com/2017/02/02/script-execution-flow/
{{mermaid}}
