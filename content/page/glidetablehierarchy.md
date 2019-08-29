---
aliases:
- '/GlideTableHierarchy/'
date: '2018-08-17 01:39:54 +0000'
layout: page
tags:
- 'server-side-api'
title: GlideTableHierarchy
url: '/glidetablehierarchy/'
---

# GlideTableHierarchy

| Property/Method    | Description                                                                               |
|--------------------|-------------------------------------------------------------------------------------------|
| hasExtensions      | Returns true of this class has been extended                                              |
| getName            | Returns the table's name                                                                  |
| isSoloClass        | Returns true if this table is not in a hierarchy                                          |
| getTables          | Returns a list of the table names in the hierarchy                                        |
| getAllExtensions   | Returns a list of all tables that extend the current table and includes the current table |
| isBaseClass        | Returns true if this is a base class                                                      |
| getTableExtensions | Returns a list of all tables that extend the current table                                |
| getBase            | Returns the parent class                                                                  |
| getRoot            | Returns the top level class in the hierarchy                                              |
| getHierarchy       | Returns a list of all classes in the hierarchy of the given table                         |
