---
date: '2016-01-01'
layout: page
title: glide.import_set_insert_serialized_when_no_coalesce
description: Controls the processing of web service import sets which have no coalesce field(s) defined. When this property is set to false (default), the instance will perform transformations concurrently from the source to the target table. When this property is set to true, the instance will perform transformations one at a time for a given staging table. This property can be overridden by the table-specific property glide.import_set_insert_serialized.table. 
value: false
---
