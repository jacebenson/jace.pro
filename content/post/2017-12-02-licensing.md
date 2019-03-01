---
title: Understanding your licensing
date: 2017-12-02
layout: post
alias:
- "/licensing/"
- "/licensing/"

---
So before I say anything about Servicenow Licensing is that your milage may vary and you'll need to ask your account representive or sales representive to get the correct answer about if something is or is not included with your license.

<!--more-->

With that being said, Servicenow's licensing has a been a pain point for some on the community for years.  I mean, just load [this page up from the community](https://community.servicenow.com/search.jspa?q=licensing).
As of 2017-10-17 theres a lot of information and since every company has it's own contract with servicenow, it seems they don't generally reply officially to any of them, however I'll try to aggregate the important bits below.

<!-- markdownlint-disable MD033 -->

| Question | Related info | Link |
| --- | --- | --- |
| What roles exist for most Products SN licenses? | There are generally three roles; Requesters, Approvers, *Fulfillers- | Communigy Thread<br/>Wiki Link to Counting Licenses |

<!-- markdownlint-enable MD033 -->

The only documentation about their licensing is this old [wiki page](https://web.archive.org/web/20160924200229/http://wiki.servicenow.com:80/index.php?title=Counting_Licensed_Users).

Publicly available licensing information

With that being said, this information is based on the sources I found publicly availabe via [Google](http://lmgtfy.com/?q=service-now.com+agreement+filetype%3Apdf).
I found the following with that exact search;

* [City of Riverside, CA](http://rivcocob.org/agenda/2016/03_29_16_files/03-27.pdf) (page 8)
* [Douglas County Colorado](http://www.douglas.co.us/archives/documents/contracts/2013_fourthqtr/Contract%20Copies/Service%20Now-533130.pdf)
* Enterprise
  * [WA Office of the Chief Infromation Officer Office](https://ociowa.atlassian.net/wiki/download/attachments/14614532/OCIO%20UA%20thru%20CC%20%20051915.pdf?api=v2)
  * [Carahsoft](https://www.carahsoft.com/application/files/9414/3569/2932/ServiceNow_EULA.PDF)
  * [Ohio State University Medical Center](http://das.ohio.gov/Portals/0/DASDivisions/InformationTechnology/IS/Telecom/ServiceNow/ServiceNow%20OSU%20Subscription%20License%20Agreement%207-17-08.pdf)
* Express
  * [Tulsa County](https://www.tulsacounty.org/agendalinks/BOCC112116/Agreement-%20IT-%20ServiceNow,%20Inc.pdf)

## Taxonomy and User Types

ServiceNow sells six standard offerings. All customers must first purchase one of the below standard offerings.

1. ServiceNow Service Suite – Comprised of ServiceNow developed applications designed to address the core ITIL framework use cases (Incident, Problem, Change, Release, Request, Asset, IT Cost) as well as ServiceNow developed applications designed to address the service delivery needs of other organizations within the enterprise, including HR, Facilities, Field Service, Finance, Legal and Marketing.
2. ServiceNow Project Portfolio Suite – ServiceNow developed applications (SDLC, Project Portfolio, Resource, Demand, Test) that cover the portfolio planning, test            and development processes.
3. ServiceNow IT Business            Suite – ServiceNow developed applications (IT GRC, Vendor) designed to govern and measure the business of IT.
4. ServiceNow IT Financial            Application – ServiceNow developed application designed to provide insight into spend for CIO's seeking to align investment to business goals.
5. ServiceNow CreateNow Development Suite – The licensing for customers to build their own applications on top of the Service Automation Platform.
6. ServiceNow Service Suite With CreateNow – Comprised of ServiceNow Service Suite plus

CreateNow to provide customers the most flexibility to utilize ServiceNow developed applications “out of the box” as well as build their own applications on top of the Service Automation Platform – including the capability to create service applications from a template.
Once one of the above standard offerings is purchased, there are a number of options and add ons available that extend the customer’s ServiceNow investment:

* ServiceNow Orchestration Core   Enables the customer to orchestrate activities outside the customer’s ServiceNow environment. OrchestrationCore:
  * Allows customers to automate discrete tasks or processes that interact with external systems or services. (This capability includes “Orchestration Activities”).
  * Includes Orchestration Activity Packs for Microsoft Active Directory, Exchange, PowerShell and SSH.
  * Provides the capability to manage the configuration settings of a physical or virtual server. (This capability includes “Orchestration Configuration Automation Application”)
  * Provides the capability to reset User’s passwords that are stored and pre authenticated in a credential store outside Customer’s instance (e.g. Active Directory). (Prior to Fuji, this capability had been “Orchestration Password Reset Application” – a separate ServiceNow Orchestration Add on product.)
* ServiceNow Orchestration Cloud Provisioning Application – Cloud provisioning package to manage the lifecycle of provisioning virtual and/or public cloud infrastructure. (Requires purchase of Orchestration Core). Includes VMware vSphere and Amazon EC2 Activity Packs
* ServiceNow Orchestration Event            Application – Dynamically creates alerts from infrastructure events generated by third party monitoringtools.
* ServiceNow ServiceWatch - ServiceWatch discovers and maps business services, creating and maintaining a service-centric CMDB. Subsequently, it monitors the nodes and relationships between the nodes that make up each service as well as the performance and availability of each business service.
* ServiceNow IT Operations            (ITOM) Suite – Complete ITOM offering which includes OrchestrationCore, Cloud Provisioning, Event            and ServiceWatch Applications.
* ServiceNow Discovery – Locates physical and virtual devices connected to an enterprise network and identifies the relationships between those devices, as well as identifies the software installed on each.
* ServiceNow Performance Analytics – Provides advanced analytics and time series analysis for key performance indicators(KPIs.)
* Public Catalog – Supports service catalog deployments that extend outside the organization to an unknown number of Requesters.

### User Types for Standard Packages

Every employee or contractor given access to the subscription service by the customer must be assigned a unique username and password that may not be shared or transferred. Employees and contractors that have a user profile in the subscriptionservice which is not designated as “active” may not be given access to the subscription service.
The following describes the types of users requiredfor each subscription model:

* Fulfillers: (formerly referred to as process users): Fulfillers have full admin, developer, or usage rights within a purchased offering. This includes the creation, editing, or deletion of any record in the system. A Fulfiller is anyuser given a role in the subscription service by the customer other than the Approver role.
* Requesters: (formerly referred to as end users): Requesters create, edit, and view their own requests. Requests can be submissions through the service catalog or incidents submitted through the ServiceNow web or mobile interfaces. They can also access the ServiceNow Knowledge Base to perform self service. A Requester is any user checked as “active” on his or her user profile in the subscription service other than a Fulfiller or Approver.
* Approvers: Approvers can do everything a Requester does as well as approve or deny a record routed to the user (including adding related comments/worknotes, however no other field may be modified). The Approver may perform the functionalities listed below for any approval generated via a ServiceNow built or custom built application. An Approver is any user given the ServiceNow provided “Approver” role in the subscription service by the customer and no other role.

## Non-user Licensing

| Thing                            | Cost per          | Subscribed |
| -------------------------------- | ----------------- | ---------- |
| Performance Analytics            |                   |            |
| Notify                           |                   |            |
| Discovery                        | Discovered Server |        Yes |
| Orchestration Core               |      Running Node |        Yes |
| Orchestration Cloud provisioning |                   |            |
| Orchestration (new model)        | Per transaction   |            |
| Event                            |         Something |        Yes |
| ServiceWatch                     |                   |            |
| IT Operations            (ITOM)  |                   |            |
| Public Catalog                   |                   |            |
| Password reset    (part of ITOM) |     10k resets/yr |        Yes |

### Service Suite

The Service Suite is designed to address service requirements in any service domain including:

* Core ITIL framework use case applications, formerly contained in the “IT Service Automation Suite” and now referred to as “IT Service” applications. Included are Incident, Problem, Change, Release, Request, Asset, and IT Cost.
* Service delivery needs of other organizations within the enterprise having workflow / case requirements, including:
  * HR Service Streamlines HR service delivery by offering a self service catalog to users and out-of-the-box request and fulfill process automation. The HR specific service catalog presents predefined items for services such as benefits or employee relations to employees.
  * Facilities Service Simplifies facilities service delivery by offering a self service catalog to users containing out of the box request, and automating the assignment and fulfillment process. The facilities specific service catalog presents pre defined items for services such as security or HVAC to employees.
  * Field Service Enables the of work requested and assigned to remote or mobile field technicians.
  * Finance Service Enables the finance department to define its services and fulfill requests – including financial reports, procurement and payroll queries   through workflow capabilities and knowledge; provides visibility into resource utilization and service delivery performance through dashboards.
  * Legal Service Enables the legal department to define its services and fulfill requests – includingcontracts, legal research and policy queries through workflow capabilities and knowledge; provides visibility into resource utilization and service delivery performance through dashboards.
  * Marketing Service Enables the marketing department to define its services and fulfill requests –including creative services, campaign operations and website publishing through workflow capabilities and knowledge; provides visibility into resource utilization and service delivery performance through dashboards.

### Service Suite With CreateNow

The Service Suite With CreateNow is comprised of everything in the Service Suite and also includes CreateNow custom application development use rights. This combination provides customers with the most flexibility because they can utilize ServiceNow developed service applications “out of the box” as well as build their own applications on top of the Service Automation Platform. CreateNow use rights are required to utilize the Service Suite capability to create service applications from a template.

### Project Portfolio Suite

The Project Portfolio Suite addresses the prioritization and delivery of projects and services. This suite provides supportfor both waterfall and agile methodologies including Scrum. Included in this package are Project Portfolio, Resource, Demand, Test and Software Development Lifecycle (SDLC).

### IT Business Suite

The IT Business Suite (ITBM) extends the ServiceNow portfolio by providing the compliance and performance metrics necessary to manage IT services. Included in this package are Governance, Risk, and Compliance (GRC), andVendor Performance           .

### IT Financial Application

In addition to the application suites listed above, ServiceNow separately offers IT Financial built on the complete Service Automation Platform. IT Financial is a ServiceNow developed application designed to provide insight into spend for CIO's seeking to align investment to business goals. Users can classify general ledger records, define a reporting structure, define allocation rules and view summary reports. The IT Financial application is independently subscribed to based on the numbers of users required. IT Financial is a strategic product that adds valuable insight on spend for a very small number of key individuals, such asthe CIO, CFO and business unit IT VPs, with pricing reflecting that value.

## User Licensing

| Application | Service Mgt | Service Mgt Createnow | Project Portfolio | Business Mgt | Finance Mgt | Create Now |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| Incident | Included | Included |  |  |  |  |
| Problem | Included | Included |  |  |  |  |
| Change | Included | Included |  |  |  |  |
| Release | Included | Included |  |  |  |  |
| Asset | Included | Included |  |  |  |  |
| Request | Included | Included |  |  |  |  |
| IT Cost | Included | Included |  |  |  |  |
| Project Portfolio |  |  | Included |  |  |  |
| Resource |  |  | Included |  |  |  |
| Demand |  |  | Included |  |  |  |
| Software Development Lifecycle |  |  | Included |  |  |  |
| Test |  |  | Included |  |  |  |
| IT Governance, Risk, and Compliance |  |  |  | Included |  |  |
| Vendor Performance |  |  |  | Included |  |  |
| HR Service | Included | Included |  |  |  |  |
| Facilities Service | Included | Included |  |  |  |  |
| Field Service | Included | Included |  |  |  |  |
| Finance Service | Included | Included |  |  |  |  |
| Legal Service | Included | Included |  |  |  |  |
| Marketing Service | Included | Included |  |  |  |  |
| IT Financial |  |  |  |  | Included |  |
| Custom Application Development |  | Included |  |  |  | Included |
| Service Automation Platform | Included | Included | Included | Included | Included | Included |

> Note Licensing here means they are a Fulfiller below!
> Also Custom App means can use any number of custom applications e.g. regular old u_tables, or scoped applications
> Project with finacial plugins - is different

## What requires a Role

| Function | Requester | Time Card | Approver | Fulfiller |
| :--- | ---: | ---: | ---: | ---: |
| Create one's own request | Included | Included | Included | Included |
| View one's own request | Included | Included | Included | Included |
| Modify one's own request | Included | Included | Included | Included |
| Search the Service Catalog | Included | Included | Included | Included |
| Search the Knowledge Base | Included | Included | Included | Included |
| Access public pages | Included | Included | Included | Included |
| Take Surveys | Included | Included | Included | Included |
| Set one's own notification preferences | Included | Included | Included | Included |
| View assets assigned to user | Included | Included | Included | Included |
| Access and post to Live Feed | Included | Included | Included | Included |
| Initiate Chat Sessions | Included | Included | Included | Included |
| Participate in a Watch List | Included | Included | Included | Included |
| View a report publishted to them | Included | Included | Included | Included |
| Approve requests routed to user via email |  | Included | Included | Included |
| Update and submit one's own time card |  | Included |  | Included |
| View/Approve requests routed to user via system |  | Included | Included | Included |
| Create any record |  |  |  | Included |
| Delete any record |  |  |  | Included |
| Modify any record |  |  |  | Included |
| Drill through any report |  |  |  | Included |
| Create any report |  |  |  | Included |
| Delete any report |  |  |  | Included |
| Modify any report |  |  |  | Included |
| Perform development activities |  |  |  | Included |
| Perform Administrative activities |  |  |  | Included |

## Related reading;

Cost of extending tables: [https://servicenow.implementation.blog/financial-implications-of-extending-tables/](https://web.archive.org/web/20170224171442/servicenow.implementation.blog/financial-implications-of-extending-tables)
