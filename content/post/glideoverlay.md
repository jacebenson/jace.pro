---
aliases:
- '/GlideOverlay/'
date: '2018-07-25 01:52:45 +0000'
layout: page
tags:
- 'server-side-api'
title: GlideOverlay
url: '/glideoverlay/'
---

# GlideOverlay

This is something like GlideModal or GlideWindow. It expects a object as
part of its call;

``` {.js}
var theObject = {
    id    : 'test-id',//seems to be the ui page it uses
    title : '',//self explanatory
    width : '',//self explanatory
    height: '',//self explanatory
    draggable: true,
    form: 'incident',
    iframe: '',
    onAfterLoad: null,//expects a function, see UI Script "KBViewArticle" for example
    onAfterClose: null,//expecs a function, see ui action "Add" on cmdb_outage_ci_mtom
    closeOnEscape: true,
    showClose: true,
    messages: "",
    allowOverFlowX: true,
};
var go = new GlideOverlay(theObject);
// you can also set things...
go.setBodyFromForm('someuipage');
go.setPreference('sysparm_error','error msg');
go.setAfterLoad(null);//expects function
go.setTitle('the new title');
go.center();
go.render();
/**
// I found these by running this in console
// on my browser
// var a = new GlideOverlay({});
// for(var p in a){
//   if(typeof a[p] === 'function'){
//    console.log('go.' + p + '();');
//   }
// }
**/

// GlideOverlay.close('test-id');
// window.parent.GlideOverlay.close('test-id');
```

| Property/Method           | Description                         |
|---------------------------|-------------------------------------|
| \_escapeCloseHandler      | Unknown                             |
| \_focusHandler            | Unknown                             |
| initialize                | Unknown                             |
| isModal                   | Unknown                             |
| closeOnEscape             | Unknown                             |
| close                     | Unknown                             |
| toString                  | Unknown                             |
| constructor               | Unknown                             |
| getId                     | Unknown                             |
| getBoxElement             | Unknown                             |
| getBoxWrapperElement      | Unknown                             |
| getIFrameElement          | Unknown                             |
| isVisible                 | Unknown                             |
| isLoading                 | Unknown                             |
| setOnClick                | Unknown                             |
| setOnBeforeLoad           | Unknown                             |
| setOnAfterLoad            | Unknown                             |
| setOnBeforeClose          | Unknown                             |
| setOnAfterClose           | Unknown                             |
| setOnBeforeDrag           | Unknown                             |
| setOnAfterDrag            | Unknown                             |
| setOnBeforeResize         | Unknown                             |
| setOnAfterResizes         | Unknown                             |
| setOnHeightAdjust         | Unknown                             |
| setOnWidthAdjust          | Unknown                             |
| addData                   | Unknown                             |
| getData                   | Unknown                             |
| getToolbar                | Unknown                             |
| addToolbarRow             | Unknown                             |
| setTitle                  | Unknown                             |
| setTitleHtml              | Unknown                             |
| setWindowIcon             | Unknown                             |
| addWindowIcon             | Unknown                             |
| removeToolbarDecoration   | Unknown                             |
| addToolbarLeftDecoration  | Unknown                             |
| addToolbarRightDecoration | Unknown                             |
| addToolbarCloseButton     | Unknown                             |
| removeToolbarCloseButton  | Unknown                             |
| setToolbarCloseOnClick    | Unknown                             |
| \_addToolbarDecoration    | Unknown                             |
| getFooter                 | Unknown                             |
| showFooter                | Unknown                             |
| hideFooter                | Unknown                             |
| showFooterResizeGrips     | Unknown                             |
| hideFooterResizeGrips     | Unknown                             |
| getFooterContainer        | Unknown                             |
| setFooter                 | Unknown                             |
| prependFooterRow          | Unknown                             |
| appendFooterRow           | Unknown                             |
| \_addFooterRow            | Unknown                             |
| getMaxDimensions          | Unknown                             |
| getDocumentHeight         | Unknown                             |
| getDocumentWidth          | Unknown                             |
| autoDimension             | Unknown                             |
| size                      | Unknown                             |
| setMaxWidth               | Unknown                             |
| setWidth                  | Unknown                             |
| setMinWidth               | Unknown                             |
| setHeight                 | Unknown                             |
| setMinHeight              | Unknown                             |
| getMaxPositions           | Unknown                             |
| autoPosition              | Unknown                             |
| center                    | Unknown                             |
| setMaxTop                 | Unknown                             |
| setMinBottom              | Unknown                             |
| positionTop               | Unknown                             |
| positionLeft              | Unknown                             |
| positionRight             | Unknown                             |
| positionBottom            | Unknown                             |
| convertToLeftPosition     | Unknown                             |
| convertToRightPosition    | Unknown                             |
| setStyle                  | Unknown                             |
| getWidth                  | Unknown                             |
| getHeight                 | Unknown                             |
| getStyle                  | Unknown                             |
| getOffset                 | Unknown                             |
| getBodyElement            | Unknown                             |
| getBodyWrapperElement     | Unknown                             |
| setBody                   | Unknown                             |
| setBodyFromForm           | Unknown                             |
| setBodyPadding            | Unknown                             |
| \_getViewportDimensions   | Unknown                             |
| setDraggable              | Unknown asdfasdfasdfasdfasdfasdfsad |
| isDraggable               | Unknown                             |
| setPreferences            | Unknown                             |
| setPreference             | Unknown                             |
| getPreferences            | Unknown                             |
| removePreference          | Unknown                             |
| getDescribingXML          | Unknown                             |
| getDescribingText         | Unknown                             |
| hide                      | Unknown                             |
| show                      | Unknown                             |
| render                    | Unknown                             |
| \_renderStatic            | Unknown                             |
| \_renderForm              | Unknown                             |
| \_renderIFrame            | Unknown                             |
| \_createIframeShim        | Unknown                             |
| \_resizeIframeShim        | Unknown                             |
| \_removeIFrameShim        | Unknown                             |
| \_isQuirksMode            | Unknown                             |
| \_focusHandlerPrototype   | Unknown                             |
| \_activateFocusTrap       | Unknown                             |
| \_deactivateFocusTrap     | Unknown                             |

## IFrame example

``` {.js}
var o = new GlideOverlay({
    title : "Edit Metadata Request",
    iframe : metadataservice_gui_url,
    allowOverflowX : true,
    height : 650,
    width : 1000
    //messages : ""
});
```

## UI Page example

``` {.js}
new GlideOverlay({
  title: new GwtMessage().getMessage('Run Fix Script'),
  form: 'run_fix_script_dialog',
  preferences: {
  'sysparm_script_name': gr.u_notes,
  'sysparm_sys_id': gr.sys_id
  },
  width: 600
  }).render();
```

Further Reading:

-   https://community.servicenow.com/community?id=community\_question&sys\_id=36508924dbbd13800e3dfb651f96196f&view\_source=searchResult
-   https://community.servicenow.com/community?id=community\_question&sys\_id=25a30f65dbd8dbc01dcaf3231f961951&view\_source=searchResult
