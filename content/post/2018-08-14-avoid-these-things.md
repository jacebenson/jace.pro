---
date: '2018-08-14'
keywords:
- gotchas
layout: post
title: Avoid these types of things when working in Servicenow
authors: ["jace"]
---

From time to time I get thinking about what I really avoid in this
system. Below are my notes.

## Controlling variables state with fields

For example, setting the field as mandatory or read-only on
`item_option_new`.

-   Problem with this is that this is yet another place to control this.
    You have the following already;
-   Variable Settings
-   Before Business Rule
-   Catalog UI Policy
-   Client Client Script

## Controlling fields state with fields

For example, setting the field as mandatory or read-only on
`sys_dictionary`.

-   Problem with this is that this is yet another place to control this.
    You have the following already;
-   Field Settingsc d
-   Data Policy (best as it controls the field in both the backend and
    the front end w/a checkbox)
-   ACL ()
-   Before Business Rule
-   UI Policy
-   Client Script

## Using stage fields for any logic

I've found that this field is not as clearly set as you might think. So
I've started to use this only for the display of the stage to the user
and not for any other purpose.

## Putting things in workflow

-   Custom workflow activities (rest activity)
-   Notification activity \> This is another place to configure emails
    but these emails are not subscribable, not easy to re-generate, and
    difficult to edit as you need to check out your workflow.
-   Switch activity \> I try to minimize my need of this by keeping
    workflow logic concise. If that's not possible, you can always do
    something like
    [this](https://snprotips.com/blog/2018/3/15/video-custom-output-transition-conditions-from-a-single-workflow-script-activity) \>
    Just had an issue where a workflow started with a begin then switch,
    and the switch did not build the context records properly so the
    workflow just hung. Just another reason to avoid Switchs.

## Execution Plans

These were used prior to Workflows. At the time I used them they were
loaded with a bunch of issues. Workflow has a lot more flexibility.

## Global Business rules

These are loaded on every. single. record. They are bad, you should
include the code you want to run not expect it to be available
everywhere.

## Script includes written like Global Business rules

Here this
[post](https://codecreative.io/servicenow/interface-design-patterns-for-script-includes)
goes over the following patterns;

-   Class Pattern
-   Function Pattern
-   Namespace Pattern
-   Global Include Pattern (really just multiple function patterns in
    one record)
-   Module Pattern

Of these, I think the Function and Global Include Patterns should be
avoided. The reason being is that they are really no better then a
global Business Rule.

## Form Designer

This gives generic column names to fields. Also this doesn't name
sections right, so some functions like `g_form.setSectionDisplay('')`
fails to work.

## Catalog Item Designer

Issues I've been told of;

-   No logic available. So instead of an item for 2 types of things,
    you'll need to make 2 different items.
-   Variables aren't created on item\_option\_new, which brings up a
    slew of other problems.
-   Variables can't have reference qualifiers.
-   Every change to the item, makes a new version of the item with a new
    sys\_id so old links now no longer work.

## Storing credientials in code

Always store these in system properties as passwords or as credintial
records. If you store them in code the are in cleartext and that's never
a good idea. At least if you put them in a crediential record or a
system property additional steps have to occur to decrypt the value.

## Outbound Rest Records (go recordless)

This is just extra stuff to configure in my opinion. More places to
check for errors.

## Dom Manipulation

These types of changes generally break on any GUI update from SN. They
are also unsupported on Service portal and Mobile.

## Avoid using `$`

It's come up often enough that when folks see `$` in UI Scripts, UI
Pages, and other parts of Servicenow, they thing jQuery because that
became really popular and started to use that, however, Servicenow
assigned `$` to prototypeJS, and not jQuery, as such, I'd just spell out
`jQuery()` instead to be clear about what you are expecting to use.
