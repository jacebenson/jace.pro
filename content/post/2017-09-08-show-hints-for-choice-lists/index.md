---
title: "Show Hints for choice lists"
subtitle: ""
summary: "This could be interesting..."
authors: ['jace']
date: 2017-09-08T20:25:56-05:00
#lastmod: 2019-09-07T23:25:56-05:00
featured: false
draft: false
projects: []
---

The other day I was asked to show hints in a more obvious way on a form.
This was my suggestion. Using the hint field on the sys\_choice table.
Just have a client script onChange check for the value, if one is set,
clear the message for this field, and show the newly found message.

``` {.js}
//script include global.choiceUtil
//client callable true
var choiceUtil = Class.create();
choiceUtil.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    getHint: function() {
        try {
            var returnObj = {};
            var hint = new GlideRecord('sys_choice');
            hint.addQuery('name', this.getParameter('sysparm_table'));
            hint.addQuery('field', this.getParameter('sysparm_field'));
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

``` {.js}
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    var field = 'category';
    var ga = new GlideAjax('global.choiceUtil');
    ga.addParam('sysparm_name', 'getHint');
    ga.addParam('sysparm_table', 'incident');
    ga.addParam('sysparm_field', field);
    ga.addParam('sysparm_val', newValue);
    ga.getXML(HintParse);

    function HintParse(response) {
        var answer = JSON.parse(response.responseXML.documentElement.getAttribute("answer"));
        //console.log(answer);
        g_form.hideFieldMsg(field, true);
        if (answer.hint) {
            g_form.showFieldMsg(field, answer.hint, 'info', true);
        }
    }

}
```
