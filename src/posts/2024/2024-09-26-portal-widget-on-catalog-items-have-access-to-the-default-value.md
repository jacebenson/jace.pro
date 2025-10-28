---
title: Portal Widget On Catalog Items have access to the default value
description: "on a \\item_option_new\\ if you use the sp_widget, you can access the \"default_value\" in \\c.options\\\r\n\r\nso if you have a default value of \\{\"mode\":\"jace_was_he..."
date: '2024-09-26'
tags:
  - service-portal
  - service-catalog
  - security
redirectFrom:
  - /portal-widget-on-catalog-items-have-access-to-the-default-value/
  - /p/2024-09-26-portal-widget-on-catalog-items-have-access-to-the-default-value/
---

on a \`item_option_new\` if you use the sp_widget, you can access the "default_value" in \`c.options\`

so if you have a default value of \`{"mode":"jace_was_here"}\` you can read it by \`{{c.options.mode}}\`