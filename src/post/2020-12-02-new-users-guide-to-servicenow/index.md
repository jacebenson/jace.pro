---
title: "Things everyone working in ServiceNow should know"
subtitle: ""
summary: ""
date: 2020-12-02T09:11:14-05:00
---

I was asked the other day what do I show folks who are just starting to use ServiceNow?  Users, not admins.  This is a great question because it's pretty universal.

First things first, I gotta recognize that I used [Robert Fedoruk's list](https://jace.pro/post/2019-10-06-faster-with-servicenow/) as a base, you can see his amazing video "[Work BLAZING FAST on ServiceNow](https://www.youtube.com/watch?v=UvwA4_9ajX8)" here.

Secondly, I didn't come up with this list alone, Mav, Paige, Robert Fedoruk, Rob M, Ashley and others from Slack all chimed in with suggestions.  I'll like to those detail after the beef of the content.

Eleven things came up.  I'm going to jump around a bit. 

## Working with lists

<details><summary>Show Matching, Show Before, Show After</summary>

For all of these ***Right-Click*** is needed, so right-click the value you want to work with, then:
1. [Click "Show Matching"](https://youtu.be/UvwA4_9ajX8?t=56)
1. [Click "Filter Out"](https://youtu.be/UvwA4_9ajX8?t=50)
1. [Click "Show After"](https://youtu.be/UvwA4_9ajX8?t=62)
</details>

<details><summary>Utilize Breadcrumbs</summary>

Removing Filters is all ***Left-Click***
1. [Click the `>` to remove part of filter](https://youtu.be/UvwA4_9ajX8?t=90)
1. [Click the crumb will reload the list with no subsequent breadcrumbs](https://youtu.be/UvwA4_9ajX8?t=94)

</details>

<details><summary>List field search operators</summary>

To get to these you have to click on the monacle on a list, then the text boxes show up.
1. `*jace` searches for that column contains "jace"
1. `=jace` searches for that column is "jace"
1. `jace` searches for that column starts with "jace"

</details>
<details><summary>Tagging and Tag visibility @RDFedourk</summary>

Adding a tag

  1. Adds "Tags" to your list
  2. "Tags" shows up as a column with empty boxes to add text, type in a tag like "Bad Acct"
      - This makes a private tag that only you can see.  
  3. Find another incident to tag.  Click in tags field and start typing "Bad".
  4. A list shows up below the text, click on the tag to add it

Want to share a tag? Here's how

Sharing List Tags

  1.  Click on the person siloute of one of the tagged incidents.
  2.  On the dialog set "Viewable by" to "Groups and Users"
  3.  Now "Add Group" button appears, click it, and add that group

</details>
<details><summary>Generating reports from lists</summary>

Once you have a list you like, create a report from it
1.  [Right click the column to group by, then click bar or pie chart](https://youtu.be/UvwA4_9ajX8)

This is way faster than navigating to reports and building it from scratch.

</details>
<details><summary>Add Columns</summary>

1.  Click on the gear icon
2.  Add a available field, to the select fields
3.  Click OK
4.  Want it back to normal, go back to the gear, and click "Reset column defaults"

[Video showing this](https://youtu.be/UvwA4_9ajX8?t=126)

</details>
<details>
<summary>List editing</summary>

Hold <kbd>CTRL</kbd> and Left click the cell you want to list edit, then another cell.  This selects them.
1. [Double click one of the selected cells to edit them all](https://youtu.be/UvwA4_9ajX8?t=113)
</details>

## Form Stuff

<details>
  <summary>Templates (apply to the form)</summary>

  1.  Find a user and give them `itil`
  2.  Open a incident.
  3.  Toggle Template Bar On [0:25](https://youtu.be/C6ujM7xaVMQ?t=25)
  4.  Apply Template [1:00](https://youtu.be/C6ujM7xaVMQ?t=60)
</details>
<details>
  <summary>Templates (run on a schedule)</summary>
  
  1.  Find a user and give them `itil` and `template_scheduler` [0:25](https://youtu.be/J8aKK8cyCeE?t=25)
  2.  Have that user create a template [1:11](https://youtu.be/J8aKK8cyCeE?t=71)
  3.  Have that user type in the filter navigator `sys_template.list` [1:57](https://youtu.be/J8aKK8cyCeE?t=117)
  4.  Open the template to schedule, and press <kbd>Schedule</kbd> [2:00](https://youtu.be/J8aKK8cyCeE?t=121)
</details>
<details>
  <summary>Understanding <kbd>Save</kbd></summary>
  Save will update the record and keep you on the current form.
</details>
<details>
  <summary>Understanding <kbd>Update</kbd></summary>
  Update will update the record and return you to the most recent past place.
</details>


## General Stuff

<details><summary>Creating Favorites</summary>

1. Favorite a list? Use the hamburger icon to "Create a Favorite"
2. Favorite a list another way? Drag the filter to the left on the navigation sidebar
3. Favorite a record from a list? Drag the first link for the record to the left on the navigation sidebar
4. Favorite a record from the record? Use the hamburger icon to "Create a Favorite"

</details>
<details><summary>Delegates</summary>

1. Goto My Profile
2. Add Delegate
3. Set Start and End dates
4. Set what they are a delegate for (approvals, assignments).

[Video showing this](https://youtu.be/9VZBL5AiUXM)

</details>
<details><summary>Navigator shortcuts</summary>


| Shortcut       | Do I Use This | What does it do                                                  |
| ---------------| ------------- | ---------------------------------------------------------------- |
| `table.config` | No            | Opens a list of all things related to a table                    |
| `table.list`   | Yes           | Opens the list of all records on said table in the current frame |
| `table.LIST`   | Yes           | Opens the list of all records on said table in a new tab         |
| `table.do`     | Yes           | Opens a empty form for said table in the current frame           |
| `table.form`   | Yes           | Opens a empty form for said table in the current frame           |
| `table.FORM`   | Yes           | Opens a empty form for said table in a new tab                   |
| `table.filter` | No            | Opens the list for a table with no records in the current frame  |
| `table.FILTER` | No            | Opens the list for a table with no records in a new tab          |

Source: https://jace.pro/post/2020-05-22-all-the-shortcuts/

</details>

If there's anything I missed , tell me in the comments.