---
title: test-mmd

layout: page
date: 2018-08-21 18:47:23 +0000


aliases: []
url: "/test/"

---
{{<mermaid align="center">}}
graph LR
  S0[Start]
  A1[Approval 1]
  A2[Approval 2]
  T1[Task 1]
  T2[Task 2]
  J0[Join]
  E0[End]
  
  S0-->A1
  A1--Rejected-->E0
  A1--Approved-->A2
  A2--Approved-->T1
  A2--Approved-->T2
  A2--Rejected-->E0
  T1-->J0
  T2-->J0
  J0-->E0

{{< /mermaid >}}
  
  {{<mermaid align="left">}}
sequenceDiagram
    participant uxux as User Interactions
    participant csup as UI Policy
    participant cscs as Client Script
    participant csua as UI Action
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

{{< /mermaid >}}