---
title: Pasting Images in the normal GUI
date: 2018-01-04
layout: post
tags:
 - missing ootb
aliases:
- "/Custom Solutions/Pasting-Images-Normal-GUI/"
---

Sometime ago I looked for the ability to paste images onto a form and have it attach in both the [portal](/Service-Portal/Pasting-Images-on-the-Portal/), and the standard ui.  

<!--more-->

I found this [post](https://community.servicenow.com/message/851339#851339) back then by Niklas Johansson.  I modified this some and got it to work by making the following modifications.

*This does not work on IE11 or IE Edge.*

So this uses the following bits;

1. UI Script (to load the functions to be called in client scripts)
1. Client Script(s) (to add the ability on a form by form basis, or all when associated to `global`)
1. Script Include (to handle the upload of the pasted file)

## UI Script

```js
// API Name: addPasteEvent
// UI Type: Desktop
// Global: Checked
// Script: Below
/**
function addPasteEvent() {
  document.onpaste = function (event) {
    var items = (event.clipboardData.items);
    // find pasted image among pasted items
    var blob = null;
    for (var i = 0; i < items.length; i++) {
      if (items[i].type.indexOf("image") === 0) {
        blob = items[i].getAsFile();
      }
    }
    // load image if there is a pasted image
    if (blob !== null) {
      var reader = new FileReader();
      reader.onload = function(event) {
        //console.log(event.target.result); // data url!
        attachClipboardData(event.target.result);
      };
      reader.readAsDataURL(blob);
    }
  };
}
**/

// Thanks to Marius Kluften for the Microsoft bits
function addPasteEvent() {
    document.onpaste = function(event) {
        var items = (event.clipboardData.items); //;  || event.originalEvent.clipboardData).items;
        // find pasted image among pasted items
        var blob = null;
        var imageIndex;
        var htmlIndex; // In case a html text is present in the clipboard
        for (var i = 0; i < items.length; i++) {
            if (items[i].type.indexOf("image") === 0) {
                imageIndex = i;
            }
            if (items[i].type.indexOf("text/html") === 0) {
                htmlIndex = i;
            }
        }
        var imageFile;
        if (imageIndex > -1) {
            imageFile = items[imageIndex].getAsFile();
        }
        // If html is present in the clipboard, check if the object is from an office product (word/excel etc.)
        if (imageFile) {
            if (htmlIndex > -1) {
                items[htmlIndex].getAsString(function(e) {
                    if (e.indexOf('schemas-microsoft-com:office:office') === -1) {
                        processBlob(imageFile);
                    }
                });
            } else {
                processBlob(imageFile);
            }
        }
    };
}

function processBlob(blob) {
    if (blob !== null) {
        var reader = new FileReader();
        reader.onload = function(event) {
            attachClipboardData(event.target.result);
        };
        reader.readAsDataURL(blob);
    }
}

function attachClipboardData(data) {
    if (g_form.isNewRecord()) {
        g_form.clearMessages();
        g_form.addErrorMessage('Save record to allowing pasting of images');
    } else {
        var recordSysID = g_form.getUniqueValue();
        var recordTable = g_form.getTableName();
        var temp = data.toString().replace(/data:/g, '').split(';');
        var contentType = temp[0];
        var fileName = 'Screenshot.' + contentType.split('/')[1];
        var content = temp[1].toString().replace(/base64,/g, '');
        var attach = new GlideAjax('pasteAttachment'); // Specify the script include name after completing step 2
        attach.addParam('sysparm_name', 'attachScreenshot');
        attach.addParam('sysparm_tableName', recordTable);
        attach.addParam('sysparm_sys_id', recordSysID);
        attach.addParam('sysparm_content_type', contentType);
        attach.addParam('sysparm_value', content);
        attach.addParam('sysparm_filename', fileName);
        attach.getXML(getResponse);

        function getResponse(response) {
            g_form.clearMessages();
            g_form.addInfoMessage('Screenshot attached.');
        }
    }
}
```

## Client Script

```js
function onLoad() {
    //Type appropriate comment here, and begin script below
    //will not work on service portal as it requires
    addPasteEvent();
}
```

## Script Include

```js
// Name pasteAttachment
// Client Callable: Checked
var pasteAttachment = Class.create();
pasteAttachment.prototype = Object.extendsObject(AbstractAjaxProcessor, {
  attachScreenshot : function() {
    var StringUtil = GlideStringUtil;
    var value = StringUtil.base64DecodeAsBytes(this.getParameter('sysparm_value'));
    var tableName = this.getParameter('sysparm_tableName');
    var sys_id = this.getParameter('sysparm_sys_id');
    var filename = this.getParameter('sysparm_filename');
    var content_type = this.getParameter('sysparm_content_type');

    var attachment = new Attachment();
    attachment.write(tableName, sys_id, filename, content_type, value);
  },
  type: 'pasteAttachment'
});
```

- 2018-11-10 08:00 CST: This was updated to clarify options on the UI Script and the Script Include.
- 2018-11-12 10:00 CST: Thanks Marius Kluften for the update about pasting the Microsoft things.