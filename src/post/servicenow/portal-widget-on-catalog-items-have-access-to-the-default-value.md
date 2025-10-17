---
title: Portal Widget On Catalog Items have access to the default value
permalink: /portal-widget-on-catalog-items-have-access-to-the-default-value/
author: Jace Benson
date: 2024-09-26T20:42:22.134Z
draft: true
stage: research
prism: false
---
on a \`item_option_new\` if you use the sp_widget, you can access the "default_value" in \`c.options\`

so if you have a default value of \`{"mode":"jace_was_here"}\` you can read it by \`{{c.options.mode}}\`