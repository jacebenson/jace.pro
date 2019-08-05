---
layout: page
title: glide.workflow.script.strict
description: "Use strict execution for Advanced Scripts - Prior to Fuji, some script errors (primarily dot-walking of undefined objects) were ignored, and script execution would continue on the next statement. Setting this property to true will cause Advanced Scripts of workflow activities to be run in strict execution mode, and those errors will treated as errors. In most cases, that will cause the activity to fault and the workflow to stop execution. "
---
true