---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Using a SP Widget on Ui16"
subtitle: "Thanks Andrew Pishchulin for this"
summary: "How to add a SP widget to UI16"
authors: ["jace"]
tags: []
categories: []
date: 2020-03-25T09:38:56-05:00
lastmod: 2020-03-25T09:38:56-05:00
featured: false
draft: false
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---
A while ago [Andrew Pishchulin](https://medium.com/@pishchulin) shared a [post on Medium](https://medium.com/@pishchulin/advanced-attachment-management-in-servicenow-f15246e7f785) where he put a Service Portal widget on UI16.  My mind was blown.  How did he do it.

His post doesn't go over the specifics but here's what he said;

> Service Portal widget can also be used in ServiceNow native UI, all you need to do is just to create a UI Macro/formatter which loads a service portal page with that widget

The way to do this (again thanks to Andrew) is this;

1.  Create an empty Service Portal (I'll name mine "widgetOnly")
2.  Create a Portal Page (I'll name mine "pageForHelloWorld")
3.  Add your widget to the Portal Page
4.  Create a UI Macro (I'll name mine "spHelloWorld") with this code, change height as needed

    ```xml
      <?xml version="1.0" encoding="utf-8" ?>
      <j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
        <iframe src="widgetOnly?id=pageForHelloWorld" 
                width="100%" 
                scrolling="no"
                style="border:none;min-height:400px;"
                >
        </iframe>
      </j:jelly>
    ```

5. Create a UI Formatter with the formatter called "spHelloWorld.xml" and set the table you want.
6. Add the formatter on the form (same way you'd add a field, via form layout)