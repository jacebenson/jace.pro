---
title: "Now Experience Notes"
subtitle: "Concepts, Tooling, and other notes"
summary: "My rough notes on this, as I get more understanding I'll update this... Sometimes called Tectonic or UI21"
date: 2021-12-06T21:57:01.930Z
---

## Now Component Concepts

My rough notes on this, as I get more understanding I'll update this... Sometimes called Tectonic or UI21

[https://developer.servicenow.com/dev.do#!/reference/now-experience/rome/ui-framework/main-concepts/view](https://developer.servicenow.com/dev.do#!/reference/now-experience/rome/ui-framework/main-concepts/view)

### Virtual DOM
 Snabbdom: This is the virtual dom library they use under the hood - tltoulson
 ### State Store / Application State Management
 Redux is one of the most popular state stores in use and ServiceNow drew inspiration from it in creating the Now Experience Framework - tltoulson
 
 ### Actions
 ### Reducers
### One Direction Data Flow
### Hooks
-   React Hooks: Seems to be the inspiration for Effects and how the DOM is tied to the state in NowX ([https://reactjs.org/docs/hooks-intro.html](https://reactjs.org/docs/hooks-intro.html))
### Effects
### Web Components
### Component Based UI
### Shadow DOM

## Tooling

```mermaid
flowchart TB

 CanvasExp["Canvas Experience(s)"]
 Canvas["Canvas(es)"]
 Workspace["Workspace(s)"]
 Page["Page(s)"]
 Component["Component(s)"]
 ChildComponent["Component(s)"]
 SNCLI["SN CLI"]
 UIBuilder["Now Experience UI Builder"]
 HRAgentWorkspace["HR Agent Workspace"]
 FinanceCloseAutomation["Finance Close Workspace"]
 VendorManagementWorkpace["Vendor Management Workpace"]
 CSMAgentWorkspace["CSM Agent Workspace"]
 ITSMAgentWorkspace["ITSM Agent Workspace"]
 

 UIBuilder -."Can create"    .->Workspace
 UIBuilder -."Can create"    .->Page
 UIBuilder -."Can configure" .->Component
 UIBuilder -."Can configure" .->ChildComponent
 SNCLI     -."Can Create"    .->Component
 SNCLI     -."Can Create"    .->ChildComponent

 subgraph nowexpsg["Now Experience aka Now Experience UI Framework"]
 CanvasExp --"Can have many Canvases"         --> Canvas
 Canvas    --"Canvases hold workspaces"       --> Workspace
 Workspace --"Can have many pages"            --> Page
 Page      --"Can have many components"       --> Component
 Component --"Can have many child components" --> ChildComponent
 end
 
 subgraph Local Compter OR Gitpod
 SNCLI
 end
 subgraph ServiceNow Instance
 UIBuilder
 end
 
 CanvasExp-->Workspaces
 
 subgraph Workspaces
 HRAgentWorkspace
 FinanceCloseAutomation
 VendorManagementWorkpace
 CSMAgentWorkspace
 ITSMAgentWorkspace
 end
```