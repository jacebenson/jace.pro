---
title: Show hints for choice lists
description: Show hints for choice lists
date: '2017-09-08'
tags:
  - gliderecord
  - client-scripts
  - javascript
  - json
redirectFrom:
  - /show-hints-for-choice-lists/
  - /p/2017-09-08-show-hints-for-choice-lists/
---

<!--StartFragment-->

A stakeholder asked me to show hints in a more obvious way on a form. This was my suggestion. Using the hint field on the `sys_choice` table. Have a client script onChange check for the value, if one is set, clear the message for this field, and show the found message.

<!--EndFragment-->

```javascript
// script include global.choiceUtil
// client callable true
var choiceUtil = Class.create();
choiceUtil.prototype = Object.extendsObject(AbstractAjaxProcessor, {
  getHint: function() {
    try {
      var returnObj = {};
      var hint = new GlideRecord('sys_choice');
      hint.addQuery('name', this.getParameter('sysparm_table'));
      hint.addQuery('element', this.getParameter('sysparm_field'));
      hint.addQuery('value', this.getParameter('sysparm_val'));
      hint.addQuery('inactive', 'false');
      hint.query();
      if (hint.next()) {
        returnObj.hint = hint.getValue('hint');
      } else {
        returnObj.error = 'no choice found for ';
        returnObj.error += hint.getEncodedQuery();
      }
      return JSON.stringify(returnObj);
    } catch (error) {
      return JSON.stringify(error, '', '  ');
    }
  },
  type: 'choiceUtil'
});
```

```javascript
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
  if (isLoading || newValue === '') {
    return;
  }
  var field = 'state';

	var ga = new GlideAjax('global.choiceUtil');
  ga.addParam('sysparm_name', 'getHint');
  ga.addParam('sysparm_table', g_form.getTableName());
  ga.addParam('sysparm_field', field);
  ga.addParam('sysparm_val', newValue);
  ga.getXML(HintParse);

  function HintParse(response) {
    var answer = JSON.parse(response.responseXML.documentElement.getAttribute("answer"));
    g_form.hideFieldMsg(field, true);
    if (answer.hint) {
      g_form.showFieldMsg(field, answer.hint, 'info', true);
    }
  }
}
```

Here's the out of box hints.

![](/assets/images/hint-oob.png)

Here's the alternative.

![](/assets/images/hint-as-message.png)