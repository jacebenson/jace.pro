---
title: Difference between ${URI} and ${URI_REF}
description: "All this talk about notifications had me poking around and I learned about using\_${URI_REF}\_instead of\_${URI}. It's magical.\r\n\r\n ${URI_REF}\_creates a link to..."
date: '2018-09-06'
tags:
  - email
  - servicenow
redirectFrom:
  - /whats-the-difference-between-uri-and-uri_ref/
  - /p/2018-09-06-whats-the-difference-between-uri-and-uri_ref/
---

<!--StartFragment-->

All this talk about notifications had me poking around and I learned about using `${URI_REF}` instead of `${URI}`. It's magical.

* `${URI_REF}` creates a link to the current record using the records display value. It's essentially... the same as;

  ```javascript
  var link = 'https://';
  link += gs.getProperty('instance_name');
  link += '.service-now.com/';
  link += current.getLink();
  var display = current.getDisplayValue()
  template.print('<a href="' + url + '">' + display + '</a>');
  ```
* `${URI}` creates a link to the current record using the text "Link".

<!--EndFragment-->