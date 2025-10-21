---
title: 'Custom Table Guide: What is this?!'
description: "The other day I was looking at the\_licensing training\_and thinking about the\_custom table guide.\\\r\nTo me it's very bizarre why these are the tables selected ..."
date: '2019-11-27'
tags:
  - servicenow
  - service-portal
  - scoped-apps
  - import-sets
  - knowledge
  - reporting
  - html
  - database
  - tutorial
  - knowledge-conference
  - security
  - integration
redirectFrom:
  - /custom-table-guide-what-is-this/
---

<!--StartFragment-->

The other day I was looking at the [licensing training](https://nowlearning.service-now.com/lxp?id=overview&sys_id=a2cad4fcdb9e7300760a71043996193e&type=course) and thinking about the [custom table guide](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/custom-table-guide.pdf).\
To me it's very bizarre why these are the tables selected so in this post I want to talk through each of them.\
If you have any thoughts to the reasoning I'd love to have some back and forth on it. Here's my thoughts so far.

| Table                            | Label                     | Reason                                              | Extensible OOTB |
| -------------------------------- | ------------------------- | --------------------------------------------------- | --------------- |
| `cmdb_*`                         | Configuration Items       | Design Choice - has a Class field and it's in use   | Many No         |
| `cmn_location`                   | Location                  | See notes below                                     | No              |
| `cmn_schedule_condition` **new** |                           |                                                     | Yes             |
| `dl_definition`                  | Data Lookup Definition    | Design Choice - has a Class field and it's not used | Yes             |
| `dl_matcher`                     | Data Lookup Matcher Rules | Design Choice - has a Class field and it's in use   | Yes             |
| `kb_knowlege`                    | Knowledge                 |                                                     | No              |
| `sc_cat_item_delivery_task`      | Exection Plan Task \[]    | Design Choice - has a Class field and it's in use   | Yes             |
| `scheduled_data_import` **new**  |                           |                                                     | Yes             |
| `sf_state_flow`                  | State Flow                | Design Choice - has a Class field and it's not used | Yes             |
| `sys_auth_profile`               | Authentication Profile    | Design Choice - has a Class field and it's not used | Yes             |
| `sys_choice`                     | Choice                    | I cannot find a reason this is included             | No              |
| `sys_dictionary`                 | Dictionary                | Design Choice - has a Class field and it's in use   | Yes             |
| `sys_filter`                     | Filter                    | Design Choice - has a Class field and it's in use   | Yes             |
| `sys_hub_action_type_base`       | Action Type Base          | Design Choice - has a Class field and it's in use   | Yes             |
| `sys_import_set_row`             | Import Set Row            | Design Choice - has a Class field and it's in use   | Yes             |
| `sys_portal_page`                | Portal Page               | Design Choice - has a Class field and it's not used | No              |
| `sys_report_import_table_parent` | Report Import Table       | What does this table even do?                       | No              |
| `sys_transform_map`              | Transform Map             | I cannot find a reason this is included             | No              |
| `sys_transform_script`           | Transform Map Script      | I cannot find a reason this is included             | No              |
| `sys_user_preference`            | User Preference           | I cannot find a reason this is included             | No              |
| `sysauto`                        | Scheduled Job             | Design Choice - has a Class field and it's in use   | Yes             |
| `syslog`                         | System Log                | I cannot find a reason this is included             | Yes             |

## My thoughts on extending tables

I can categorize my opinions about when and why to extend a table into three reasons.

Edit: At the time I wrote this, there were two things I had not considered. One. Extending tables is really complicated.

| Pros                                   | Cons                                                                                                                                                                      |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| You get all the fields from the parent | You get all the fields from the parent                                                                                                                                    |
|                                        | You could add fields that may hit the limit of the technical length in SQL                                                                                                |
|                                        | Reporting on it can be difficult                                                                                                                                          |
|                                        | If you need two records with the same unique value in the two tables, the system will not allow this                                                                      |
|                                        | To extend some of these tables is uncharted waters and may not work well see [sys_choice](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0538947) |

### Usability

Assuming you have a table in mind;\
Does it make sense to have/modify a "type" or "class" field and have one the table?\
Also, does the new type inherently change the the record that it is very different?

If yes to both, extend, if not make new.

### Scoped Access

Sometimes you cannot create or read records that you might want to use in a scoped app, see `sys_user_group`.\
In this case it may make sense to extend that table if you want to create/modify those records. This is a\
technical reason, and I feel they likely should not be extended still but must be.

### Design Choice

Generally, something will automatically extend a table, like Import Set Row.\
Anytime you upload a new file as a data source that is extended.

This is done by adding a class field to indicate the class of record.\
Some records with this only ever have one class, like `sys_auth_profile`.\
Some have many like `cmdb_ci`, `sys_user`, and `task`.

## Configuration items

Sometimes you gotta extend this to track things your work considers as a CI but ServiceNow has not. E.g. Rooms

In the example of Rooms, out-of-box there is a "Computer Room" CI class, but you may want to track conference rooms,\
data closets, supply rooms, etc. In these cases in my opinion extending cmdb_ci makes sense.

## Knowledge

Knowledge is an interesting table to have here.\
On one hand you could argue some Knowledge articles should be typed/classd differently.\
I believe Knowledge already has this.

<!--EndFragment-->

<!--StartFragment-->
> #ServiceNowDev #blog What is with the Custom Table Guide - Jace Benson 👨‍💻⚙️ (@jacebenson) <a href="https://twitter.com/jacebenson/status/1199780073559203842?ref_src=twsrc%5Etfw">November 27, 2019</a>

<!--EndFragment-->

<!--StartFragment-->

Further Reading: <https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/product/knowledge-management/concept/knowledge-article-templates.html>

## Location

Location is an odd table to me to have on this list.

I'm trying to imagine a situation where you might have different location types, e.g. Offices, Kiosks, and Datacenters

In these cases I can't imagine a situation you would need this extended. Now scoped apps cannot write to some common tables,\
if that is the reason this is here that may make sense. If a scoped app needs a place to write to that is like location, but different\
extend it and write to the extension. If that is the case though then I'd expect the same for Group Memberships

> With all that being said, on initial look of the table, it does not sport a `sys_class_name` field.\
> However it also has "Extensible" as `false`.\
> If you change "Extensible" to `true`, then BOOM, now there's a `sys_class_name` field.\
> I'm still not sure I agree with the all the ideas of this.\
> That being said it seems like a **Design Descision** now. - Jace 2019-12-16

## Import Set Row

This is extended for each data source you upload, so I feel this is understandable.

## Transform Map Script

I don't think this makes any sense. I can't imagine why this would be extended.

## Transform Map

I don't think this makes any sense. I can't imagine why this would be extended.

## Authentication Profile

## Action Type Base

## Report Import Table

## Dictionary

I don't think this makes any sense. I can't imagine why this would be extended.

It has a class and it's used but unless I can make a new field type (I thought that wasn't possible.)

I dont see why this is a thing unless that **is** possible.

<!--EndFragment-->

<!--image-->

![](/assets/images/sys_dictionary_list.png)

<!--StartFragment-->

## Choice

## System Log

I don't think this makes any sense. I can't imagine why this would be extended.

## User Preference

## Filter

I don't think this makes any sense. I can't imagine why this would be extended.

<!--EndFragment-->

![](/assets/images/sys_filter_list.png)

<!--StartFragment-->

## Portal Page

I don't think this makes any sense. I can't imagine why this would be extended.

<!--EndFragment-->

![](/assets/images/sys_portal_page.png)

<!--StartFragment-->

## Scheduled Job

These are already extended to a number of types of jobs, but I'm not sure why I'd extend it.

> Sysauto I extended all the time. Specifically `sysauto_script` for many integrations.\
> Including the SCCM integration that is close to what we have today.\
> And I used that same design for the all the integrations for security vulnerability. - @killswitch

## Data Lookup Definition

## Data Lookup Matcher Rules

## State Flow

This has a class, but just one. I'm not sure why this would be extended.

## Execution Plan Task

These are old as dirt. It has two classes today but beyond those I'm not sure why I'd extend it more.

<!--EndFragment-->