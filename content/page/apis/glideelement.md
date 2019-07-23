---
aliases:
- '/GlideElement/'
date: '2016-01-01'
keywords:
- 
layout: page
tags:
- 'server-side-api'
title: GlideElement
url: '/glideelement/'
---

# What is GlideElement

[Docs](https://docs.servicenow.com/bundle/kingston-application-development/page/app-store/dev_portal/API_reference/glideElement/concept/c_GlideElementScopedAPI.html)

## canCreate

Determines if the user's role permits creation of new records in this
field

## canRead

Determines if the GlideRecord table can be read from

## canWrite

Determines if the GlideRecord table can be written to

## changes

Determines if the current field has been modified

## changesFrom

Determines the previous value of the current field matched a certain
object

## changesTo

Determines if the new value of a field after a change matches a certain
object

## dateNumericValue

Gets date in numberic value

## getAttribute

Gets the value of the attribute on the field in question from the
dictionary as a string. To get the value as a boolean use
getBooleanAttribute(String)

## getBooleanAttribute

Gets the value of the attribute on the field in question from the
dictionary as a string. To get the value as a string, use
getAttribute(string)

## getChoices

Retrieves the choice list for a field

## getCurrencyCode

Gets the currency ISO code for a record

## getCurrencyDisplayValue

Gets the currency display value

## getCurrencyString

Gets currency in a string

## getCurrencyValue

Gets a currency value

## getDecryptedValue

Gets the decrypted value

## getDisplayValue

Gets the formatted display value of the field

## getED

Gets the field's element descriptor

## getLabel

Gets the object's label

## getName

Gets the name of the field

## getReferenceCurrencyCode

The currency ISO code, in the base system currency

## getReferenceDisplayValue

Gets the display value

## getReferenceTable

Gets table name for a reference field

## getReferenceValue

Gets the reference value

## getRefRecord

Gets a GlideRecord object for a reference element

## getSessionCurrencyCode

Gets the sessions currency ISO code

## getSessionDisplayValue

Gets the currency value in the sessions currency format

## getSessionValue

Gets the ammount in the sessions currency

## getTableName

Gets the table name

## getValue

Only works in global (DO NOT USE)

## hasAttribute

Determines whether a field has a particular attribute

## nil

Determines whether the field is null

## setDateNumericValue

Sets a date to a numeric value

## setDisplayValue

Sets the display value of the field

## setError

Adds an error message. Can be retrieved using getError()

## setValue

Sets the display value of the field

## toString

Converts the value to a string
