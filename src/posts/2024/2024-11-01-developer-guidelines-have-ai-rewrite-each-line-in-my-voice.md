---
title: Developer Guidelines (have ai rewrite each line in my voice)
description: "Update sets\_\r\n\r\n1. If an update is identified to be in the incorrect update set (or should not be in an update set), go to \\sys_update_xml\\ table and change ..."
date: '2024-11-01'
tags:
  - servicenow
  - gliderecord
  - business-rules
  - client-scripts
  - ui-policies
  - workflow
  - atf
  - flow-designer
  - update-sets
  - api
  - discovery
  - knowledge
  - reporting
  - service-catalog
  - javascript
  - xml
  - database
  - ai
  - troubleshooting
  - performance
  - security
redirectFrom:
  - /developer-guidelines-have-ai-rewrite-each-line-in-my-voice/
---

## Update sets 

1. If an update is identified to be in the incorrect update set (or should not be in an update set), go to \`sys_update_xml\` table and change the update set field to reflect the correct update set (Default in the appropriate scope if removing). 
2. The Description field on each Update set can include a brief description of the change being made for future reference.  You can copy and paste the contents of the card’s description into the update set’s description as an easy option. 

## Table & fields 

3. Extend a table rather than creating a new one if an existing table contains fields, attributes, and scripts that meet the requirement. 
   Give tables a singular name; fields may have a singular or plural name. 
4. Use drop-down fields with Yes, No and Null instead of True/False, especially if the field is required. 
5. Label fields according to ServiceNow’s standard of sentence case (e.g., "Focus area,"not "Focus Area") and no more than two words. 
6. Use fields as designed / intended and do not repurpose them. 
7. Use view rules to automatically set the correct view if more than one view is used for a particular table for different teams/types of tasks. 
8. Fields should be auto populated when the data can be looked up in the system (such as the logged in user or current date). 
9. All reference fields should at minimum include a query of `active=true` if the table has an active flag (and there’s not a specific need to include inactive records). 
10. When deleting a table, remove it’s associated license association `ua_custom_table_inventory` 

## Scripting 

11. Use comments to educate others on the script functionality and changes made.  For example, comments could be used in the following locations: 

    1. Include the task and date to document the original card that this change was completed for. 
    2. Groups of variables or objects (a single line describing what each group is for) 
    3. Functions (describe in a few lines the purpose of the function and what arguments or return values it uses) 
    4. If blocks or for/while loops (describe the purpose of each) 
    5. Comments should not be added to an OOB script object unless it’s around new customization. 
12. Use white space and indentation to make the code more readable for future developers. Click the format code button in the syntax editor to apply automatic formatting.  
13. Name variables using camelCase.   
14. Name glide record variables with a relevant keyword to the type of record and GR, such as `incidentGR` or `userGR`. 
15. Return some type of value (e.g., integer, true/false) from a function. 
    [Best Practices – System Properties - Support and Troubleshooting (servicenow.com)](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0538866) 
16. Respect the active field when performing reference field lookups. 
17. Create assignment group records in production following the standard process and then export the xml file to import into non-production instances for development.   
18. Store function results in variables. 
19. Encode queries for `GlideRecord` API calls (via the `addEncodedQuery()` method) rather than using the `addQuery()` or `addOrCondition()` methods for complex queries. 
20. Use the `getDisplayValue()` method in place of directly referencing the name or number field. 
21. Use the Filter Conditions where possible.  If the condition is complex, use a function, in a script include, called from the condition field.  
22. Log statements using `gs.debug()`, `gs.info()`, `gs.warn()`, `gs.error()` rather than `gs.print()` and `gs.log()`. 
23. Use try / catch in your coding to ensure you are addressing any errors.  Make sure errors are outputted in a meaningful way vs. just catching them and not logging them. 
24. Keep business rules simple by using actions instead of scripting where possible. 
25. Update the current record using an on before business rule and update related records using an on after or async business rule. 

    1. Never use `current.update()` in an on before business rule 
26. Never create a global business rule. Instead, write script includes and call the necessary functions. 
27. Codeless configuration via UI Policies is preferable over client scripts where possible. 
28. Use the GlideForm API. 
29. If synchronous calls from a client script must be made via the GlideRecord API or the getReference() method, use a callback function. 
30. Use scripting as a last resort to build your logic in the UI policy and UI policy actions. 
31. Never run automated tests on a production instance. 
32. Avoid using multiple AJAX calls on the form when possible so that load times are faster. 

## ATF 

33. Start an ATF test by copying a Quick Start Test, then modifying as required instead of starting from scratch. 
34. ATF Components should be used appropriately, including: 

    1. Parameterized Tests: Use case best for when need to test multiple data sets against the same tests. 
    2. Templates: Saves a set of test steps that can be retrieved/inserted into a test anywhere - prompts for table, then manually fill out the test criteria 
    3. Suites: Suites can be nested, but each suite can only have 1 parent. One parent can have many children suites.  
    4. Copying Tests: Another alternative to creating tests rather than starting from scratch 
    5. Tests: Can only pass inputs/outputs within a test, not outside of the test 

## Transform Maps 

35. If using an `onBefore` script to set the row to ignore a row in certain conditions, and an `onAfter` to do further processing, use the following code to stop the `onAfter` from running as setting the row to ignore does not always stop the transform.   
    ```js
    if (source.getValue("sys_import_state") === 'ignored'){ 
       return;
    }
    ```	

## Reports 

36. Never share dashboards with broad roles such as `itil`. Instead, identify the narrowest set of users as will regularly use the dashboard and share only with them. 
37. When updating an out of box report or dashboard, save and insert to create a copy that you can then modify as needed. 
38. Always name reports and dashboards according to their intended audience and purpose. 
39. Always share reports only with those users who need to see it. 
40. Always create tabs on a dashboard to enhance the usability and performance. 
41. Always share dashboards and the underlying reports with the same groups to ensure visibility and access to the underlying data. 
42. Share dashboards and reports with groups rather than individual users. 
43. Place indicators such as single score widgets at the top of a dashboard tab with charts in the middle and list widgets at the bottom. 
44. Use reference fields to join tables for reporting rather than creating database views. If a database view is needed, test the reports carefully to gauge the potential impact to performance. 

## Workflows & flows 

45. Never create conflicting logic with business rules and workflows 
46. Flow Designer trigger types - <https://www.servicenow.com/community/incident-management-forum/i-want-to-know-about-flow-designer-concept/m-p/2458846> 
47. Include a description that identifies what the workflow is used for and what it does. If it is only designed to work for a specific catalog item, etc. make sure to identify that. 
48. Credentials should be setup with the correct mid servers/capabilities, so they do not get used in an unintended way. 
49. Make sure that you’re in your update set whenever working on a flow, subflow, or action.  Unlike workflow, it captures updates prior to it being published. 
50. Look for and use a generic action or subflow for common functions instead of recreating it for a common step, such as getting a manager or director approval. If one does not exist, try to create a generic one instead of one specific to your use case. 
51. When requesting an approval, always check if it was rejected first, then proceed with the flow in an else instead of checking if its approved.

## CI Classification Pattern Selection 

52.  When creating a new pattern or updating a pattern execution, be sure to set the Discovery Classification Process to select the desired discovery pattern to be executed: 

    1. Ensure the pattern to be executed exists and is active.  Open Pattern Designer --> Discovery Patterns and search for your desired pattern name.  Check the Active flag. 
    2. Find the Process Classification record for the device or process type.  Open  Discovery -->  CI Classification  --> Process.  Search for the type of discovery classification desired.  Open the record once found. 
    3. At the bottom of the record opened check the related list tab TRIGGERS PROBES.  Check the Condition Script field to find the type of occurrence execution desired (type = Linux).   The Pattern field will be the name of the pattern executed when this type of device or service is to be executed. 
    4. Update as needed. 

## Skip Remediation for an upgrade or a patch

1. For each update, confirm which of the following categories the skip falls into. 

   1. Skipped Error, or other non-actionable record.  – Set to "Reviewed" and add a comment such as "Error – no action available." 
   2. Related List, Form Section, List Layout
        1. For **patches** we do not generally review these as they are very hard to compare using the XML format and we are generally not able to get OOB PDI's for the specific patch versions.  Set to Reviewed and Retained, and add a comment such as "Related List, so was not able to review.  Will take further action during next major upgrade."
        2. For **upgrades** we do this.  On a OOB PDI, compare changes from our instances, to the PDI. 
   3. Other type of object – Compare the new OOB version vs. the current version.   

      1. If there are no differences, it should be reverted.  Make sure to click Revert first, then add a comment, otherwise, the comment will wipe out when you click the button. 
      2. If there are differences, and it's clear what is our customization vs. OOB, take the OOB changes, leaving our customizations in place.  Set it to Reviewed and Merged, with a comment stating what you took and what you didn’t.  Use "CUSTOMIZATION START" and "CUSTOMIZATION END" in scripted objects to make skip remediation in the future where applicable.  Be very careful to ensure parentheses and curly brackets still match up correctly. 
      3. If you think it is not a meaningful customization and should be reverted, verify with your team and take action.
      4. NOTE: There are certain things in base versions provided by the vendor that they have otherwise published as bad practices (e.g. Reports that are published which makes them available without authentication).  Unfortunately, we must leave that customization in place. 

### After skip remediation is completed 

1. Make sure that you don't have any updates in an update set where the scope doesn’t match.  This is very easy to do in this process.  Move any in the wrong scoped update set to an appropriate one.   
2. Remove all Upgrade Details.  These create errors when trying to move an update set to another environment. 
3. Batch all update sets together.
4. Move it up.

## Helpful Hints 

* If it's known we're keeping the customization, but you're struggling to tell what's OOB vs. what's a customization, make sure to compare current OOB vs. upgraded OOB versions so you know what was changed then apply those changes in the resolve conflicts screen. 
* Quering `sys_upgrade_history_log` may show this was also updated through a plugin upgrade or something else more recently.  Try updating it through that record instead. 
* For non-scripted objects, such as forms and lists, its often easier to update it through the normal interface, instead of the backend record (Form Layout vs. `sys_ui_section`).  That's fine, as long as you go back and update the skip appropriately. 
* Don't be afraid to ask other developers to research and make a recommendation on what to do.