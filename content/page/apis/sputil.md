---
aliases:
- '/spUtil/'
date: '2016-01-01'
layout: page
tags:
- 'client-side-api'
title: spUtil
url: '/sputil/'
---

# What is spUtil

spUtil is a really useful utility class, the problem is I can never seem
to find it when I need to look it up as it's not on
developer.servicenow.com, but is instead on
[docs.servicenow.com](https://docs.servicenow.com/bundle/jakarta-application-development/page/app-store/dev_portal/API_reference/spUtil/concept/spUtilAPI.html).

So I'm making a list of their functions for my reference as it's [coded
here](https://hi.service-now.com/scripts/app.$sp/service.spUtil.js) or
[more readable
here](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/service.spUtil.js).

First I'll go over the documented methods, then the undocumented
methods, as there always seems to be some.

| Method                                  | Documented |
|-----------------------------------------|------------|
| [addErrorMessage](#adderrormessage)     | Yes        |
| [addInfoMessage](#addinfomessage)       | Yes        |
| [addTrivialMessage](#addtrivialmessage) | Yes        |
| [createUid](#createuid)                 | No         |
| [format](#format)                       | Yes        |
| [getAccelerator](#getaccelerator)       | No         |
| [getHeaders](#getheaders)               | No         |
| [getHost](#gethost)                     | No         |
| [getPageUri](#getpageuri)               | No         |
| [getPreference](#getpreference)         | No         |
| [getURL](#geturl)                       | No         |
| [getWidgetURL](#getwidgeturl)           | No         |
| [get](#get)                             | Yes        |
| [parseAttributes](#parseattributes)     | No         |
| [recordWatch](#recordwatch)             | Yes        |
| [refresh](#refresh)                     | Yes        |
| [scrollTo](#scollto)                    | No         |
| [setBreadCrumb](#setbreadcrumb)         | No         |
| [setPreference](#setpreference)         | No         |
| [setSearchPage](#setsearchpage)         | No         |
| [update](#update)                       | Yes        |

## Documented

### addErrorMessage

## [addErrorMessage(string)](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/service.spUtil.js#L86)

## [record](//.service-now.com/sp_widget_list.do?sysparm_query=id=widget-sc-cat-item)

[docs](https://developer.servicenow.com/app.do#!/api_doc?v=kingston&id=SPU-addErrorMessage_S)

``` {.js}
// source: SC Catalog Item[widget-sc-cat-item] line 42
spUtil.addErrorMessage($scope.m.largeAttachmentMsg);
```

### addInfoMessage

## [addInfoMessage(string)](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/service.spUtil.js#L80)

## [record](//.service-now.com/sp_widget_list.do?sysparm_query=id=widget-sc-cat-item)

[docs](https://developer.servicenow.com/app.do#!/api_doc?v=kingston&id=SPU-addInfoMessage_S)

``` {.js}
// source: SC Catalog Item[widget-sc-cat-item] line 210
spUtil.addInfoMessage(t);//t is just a string
```

### addTrivialMessage

## [addTrivialMessage(string)](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/service.spUtil.js#L74)

## [record](//.service-now.com/sp_widget_list.do?sysparm_query=id=widget-form)

[docs](https://developer.servicenow.com/app.do#!/api_doc?v=kingston&id=SPU-addTrivialMessage_S)

``` {.js}
// source: Form[widget-form] line 110
spUtil.addTrivialMessage(message);
```

### format

[format(string template, object
data)](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/service.spUtil.js#L5)
-
[record](//.service-now.com/sp_widget_list.do?sysparm_query=id=widget-sc-cat-item)
-
[docs](https://developer.servicenow.com/app.do#!/api_doc?v=kingston&id=SPU-format_S_O)

``` {.js}
// source: SC Catalog Item[widget-sc-cat-item] line 198
var url = spUtil.format(
    c.options.url,
    {
        page: page,
        table: table,
        sys_id: sys_id
    }
);
```

### get

[get(string
widgetid)](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/service.spUtil.js#L30)
-
[record](//.service-now.com/sp_widget_list.do?sysparm_query=id=sqanda-create-question)
-
[docs](https://developer.servicenow.com/app.do#!/api_doc?v=kingston&id=SPU-get_S)

``` {.js}
// source: SQANDA Create Question[sqanda-create-question] line 32
spUtil.get($scope, x).then(function(response) {
    var newURL = $location.search({id: 'kb_social_qa_question', sys_id: response.data.sys_id});
    spAriaFocusManager.navigateToLink(newURL.url());
});
```

### refresh

[refresh(object
\$scope)](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/service.spUtil.js#L22)
-
[docs](https://developer.servicenow.com/app.do#!/api_doc?v=kingston&id=SPU-refresh_O)

### update

[update(object
\$scope)](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/service.spUtil.js#L13)
-
[record](//.service-now.com/sp_widget_list.do?sysparm_query=sys_id=f37aa302cb70020000f8d856634c9cfc)
-
[docs](https://developer.servicenow.com/app.do#!/api_doc?v=kingston&id=SPU-update_O)

``` {.js}
// source: Approvals[] line 14
function get() {
    spUtil.update($scope);
}
```

### recordWatch

[recordWatch(object \$scope, string table, string filter, function
callback)](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/service.spUtil.js#L129)
-
[record](//.service-now.com/sp_widget_list.do?sysparm_query=sys_id=f37aa302cb70020000f8d856634c9cfc)
-
[docs](https://developer.servicenow.com/app.do#!/api_doc?v=kingston&id=SPU-recordWatch_O_S_S_F)

``` {.js}
// source: Approvals[] line 12
spUtil.recordWatch(
    $scope,
    "sysapproval_approver",
    "state=requested^approverIN" + $scope.data.myApprovals.toString()
);
```

Also, there's a number of tables that are blocked from being watched,
you can see this list in your instance by running;

``` {.js}
gs.info(gs.getProperty("glide.record_watcher.table.blacklist"))
//this property is non-editable
```

-   `clone_preserved_data`
-   `clone_token`
-   `digest_properties`
-   `instance`
-   `license_details`
-   `pa_job_logs`
-   `role_has_license`
-   `saml2_update1_properties`
-   `sp_log`
-   `sso_federation`
-   `sso_properties`
-   `sys_audit_delete`
-   `sys_audit_relation`
-   `sys_broadcast_message`
-   `sys_broadcast_message_m2m`
-   `sys_cache_flush`
-   `sys_cluster_message`
-   `sys_cluster_state`
-   `sys_db_cache`
-   `sys_dictionary_override`
-   `sys_email`
-   `sys_email_account`
-   `sys_email_log`
-   `sys_event_processor`
-   `sys_glide_object`
-   `sys_import_set`
-   `sys_import_set_row`
-   `sys_import_set_row_error`
-   `sys_import_set_run`
-   `sys_progress_worker`
-   `sys_progress_worker_domain`
-   `sys_report_summary`
-   `sys_report_summary_line`
-   `sys_rw_action`
-   `sys_rw_amb_action`
-   `sys_status`
-   `sys_trigger`
-   `sys_ui_navigator_history`
-   `sys_update_set`
-   `sys_update_set_log`
-   `sys_update_version`
-   `sys_update_xml`
-   `sys_upgrade_history`
-   `sys_upgrade_history_log`
-   `sys_user_preference`
-   `sys_user_session`
-   `sys_user_token`
-   `ua_app_metadata`
-   `ua_app_usage`
-   `usageanalytics_count`
-   `usageanalytics_count_cfg`
-   `wf_command`
-   `wf_context`
-   `wf_executing`
-   `wf_history`
-   `wf_transition_history`
-   `wf_workflow_execution`

## Undocumented

### getHeaders

## [getHeaders()](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/service.spUtil.js#L54)

[directive.spReferenceField.js\#40](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/directive.spReferenceField.js#L40)

``` {.js}
var headers = spUtil.getHeaders();
// returns something like so
// {
//   'Accept': 'application/json',
//   'x-portal': $rootScope.portal_id
// };
```

### getWidgetURL

[getWidgetURL(string widgetid or string
object)](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/service.spUtil.js#L60)
-
[directive.spReferenceField.js\#36](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/directive.spReferenceField.js#L36)

``` {.js}
var widgetUrl = spUtil.getWidgetURL('sys_id');
// returns something like so
// '/api/now/sp/widget/sys_id';
```

### setBreadCrumb

[setBreadCrumb(object \$scope,
list)](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/service.spUtil.js#L68)
-
[record](//.service-now.com/sp_widget_list.do?sysparm_query=id=tagged-question-list)

``` {.js}
// source: Tagged Question List[] line 3
spUtil.setBreadCrumb($scope, [
    {
        label: c.data.community.Breadcrumb,
        url: '#'
    }
])
```

### setSearchPage

## [setSearchPage(searchPage)](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/service.spUtil.js#L71)

[record](//.service-now.com/sp_widget_list.do?sysparm_query=sys_id=b8c57073cb10020000f8d856634c9cfc)

``` {.js}
// source: Search Page[] line 2
spUtil.setSearchPage($scope.data.t);//t is a string passed via url here
```

### getURL

## [getURL(type)](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/service.spUtil.js#L92)

[record](//.service-now.com/sp_widget_list.do?sysparm_query=id=widget-login)

``` {.js}
// source: Login[widget-login] line 21
var url = spUtil.getURL({sysparm_type: 'view_form.login'});
// I assume this returns a string, I'll have to check
```

### scrollTo

[scrollTo(id,
time)](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/service.spUtil.js#L112)
-
[record](//.service-now.com/sp_widget_list.do?sysparm_query=id=widget-sc-order-guide)

``` {.js}
// source: SC Order Guide[widget-sc-order-guide] line 28
spUtil.scrollTo("#" + item.sys_id);
```

### getAccelerator

## [getAccelerator(char)](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/service.spUtil.js#L119)

[record](//.service-now.com/sp_widget_list.do?sysparm_query=id=widget-form)

``` {.js}
// source: Form[widget-form] line 5
spUtil.getAccelerator('s');
// returns for mac '⌘ + ' + char;
// returns for otherwise 'Ctrl + ' + char;
```

### createUid

## [createUid(str)](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/service.spUtil.js#L139)

[directive.spWidget.js\#14](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/directive.spWidget.js#L14)

``` {.js}
if (scope.widget.update) {
    name += spUtil.createUid('xxxxx');
}
```

### parseAttributes

## [parseAttributes(strAttributes)](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/service.spUtil.js#L153)

[directive.spChoiceList.js\#37](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/directive.spChoiceList.js#L37)

``` {.js}
function isRefQualElement(fieldName) {
    var refQualElements = [];
    if (field.attributes && field.attributes.indexOf('ref_qual_elements') > -1) {
        var attributes = spUtil.parseAttributes(field.attributes);
        refQualElements = attributes['ref_qual_elements'].split(',');
    }
    return field.reference_qual.indexOf(fieldName) != -1 || refQualElements.indexOf(fieldName) != -1;
}
```

### getHost

[getHost()](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/service.spUtil.js#L112)

### setPreference

[setPreference(pref,value)](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/service.spUtil.js#L147)

### getPreference

[getPreference(pref,value)](https://github.com/jacebenson/sndocs/blob/master/sources/jakarta/4/scripts/app.$sp/service.spUtil.js#L153)

### getPageUri

[getPageUri()]()
