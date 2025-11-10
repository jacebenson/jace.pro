---
title: How to print out all the variables (OLD)
description: "Let me preface this code with there is another way to do this but it's undocumented.\\\r\nThat is using the\_GlideappVariablePoolQuestionSet\_class as\_posted here..."
date: '2018-02-16'
tags:
  - servicenow
redirectFrom:
  - /how-to-print-out-all-the-variables-old/
  - /p/2018-02-15-how-to-print-out-all-the-variables-old/
---

Let me preface this code with there is another way to do this but it's undocumented.\
That is using the `GlideappVariablePoolQuestionSet` class as [posted here by Chuck Tomasi](https://community.servicenow.com/thread/245758).

```javascript
/*jslint eqeq: true*/
/*global GlideRecord, current*/
var tablestart = '<div ';
tablestart += 'class="nmmcbg" width="100%" ';
tablestart += 'style="background-color: LightGoldenRodYellow;">';
var d = '<div style="display:inline;font-weight:bold;" class="nmmcbold">';
var dn = '</div>\n';
var i;
var gr = new GlideRecord('sc_req_item');
gr.addQuery('sys_id', '=', current.sys_id);
gr.query();
var vtp = '';
var v = new GlideRecord('sc_item_option_mtom');
v.addQuery('request_item', current.sys_id);
v.orderBy('sc_item_option.order');
v.query();
while (v.next()) {
  if (vtp.length >= 0) {
    /*****************************
    This code dynamically pulls the questions from the forms in the order 
    they are presented (numerically) and then displays them in a 
    consistant readable format.
    Right now nothing links to any records but can with some slight 
    changes to this code.
  *****************************/
    var questionType = v.sc_item_option.item_option_new.type;
    var question = '<p><b>';
    question += v.sc_item_option.item_option_new.getDisplayValue();
    question += '</b></p>';
    var answer = v.sc_item_option.value.getDisplayValue() + '\n';
    if (answer != '') { /*if the value is blank, don't print*/
      if (questionType == 1) { //Yes / No
        vtp += question + answer;
      }
      if (questionType == 2) { //Multi Line Text
        vtp += question + answer;
      }
      if (questionType == 3) { //Multiple Choice
        vtp += question + answer;
      }
      if (questionType == 4) { //Numeric Scale
        vtp += question + answer;
      }
      if (questionType == 5) { //Select Box
        vtp += question + answer;
      }
      if (questionType == 6) { //Single Line Text
        vtp += question + answer;
      }
      if (questionType == 7) { //Check Box
        vtp += question + answer;
      }
      if (questionType == 8) { //Reference
        var reftable = v.sc_item_option.item_option_new.reference;
        var referencegr = new GlideRecord(reftable);
        referencegr.addQuery('sys_id', '=', v.sc_item_option.value);
        referencegr.query();
        while (referencegr.next()) {
          vtp += question + ': ' + referencegr.getDisplayValue();
          vtb += '\n';
        }
      }
      if (questionType == 9) { //Date
        vtp += question + answer;
      }
      if (questionType == 10) { //Date/Time
        vtp += question + answer;
      }
      /*
    if (questionType == 11) { //Label
        //Do nothing
    }
    if (questionType == 12) { //Break
        //Do nothing
    }
    if (questionType == 13) { //Not Listed
        //Do nothing
    }
    if (questionType == 14) { //Macro
        //Do nothing
    }
    if (questionType == 15) { //UI Page
        //Do nothing
    }
    */
      if (questionType == 16) { //Wide Single Line Text
        vtp += question + answer;
      }
      /*
    if (questionType == 17) { //Macro with Label
        //Do nothing
    }
    */
      if (questionType == 18) { //Lookup Select Box
        var lstable = v.sc_item_option.item_option_new.lookup_table;
        var lsbgr = new GlideRecord(lstable);
        lsbgr.addQuery('sys_id', '=', v.sc_item_option.value);
        lsbgr.query();
        while (lsbgr.next()) {
          vtp += question + ': ' + lsbgr.getDisplayValue() + '\n';
        }
      }
      /*
    if (questionType == 19) { //Container Start
        //Do nothing
    }
    if (questionType == 20) { //Container End
        //Do nothing
    }
    */
      if (questionType == 21) { //List Collector
        var list = answer;
        var listarray = list.split(',');
        vtp += question + '</b></p>\n';
        for (i = 0; i < listarray.length; i = i + 1) {
          var listtable = v.sc_item_option.item_option_new.list_table;
          var igr = new GlideRecord(listtable);
          igr.addQuery('sys_id', '=', listarray[i]);
          igr.query();
          while (igr.next()) {
            vtp += '- ' + igr.getDisplayValue() + '\n'; //displayvalues
          }
          //vtp +=  'i = ' + i + '- ' + listarray<i> + '\n';//sys_ids
        }
      }
      if (questionType == 22) { //Lookup Multiple Choice //success
        vtp += question + answer;
      }
    }
  }
}

var wn = '\n';
wn += tablestart;
wn += vtp;
wn += "</div>";

// then either write wn pre and appended with [code] tags in a journal 
// field, or put it in a mail script.
```

<!--StartFragment-->

## Further Reading

[Community Thread](https://community.servicenow.com/thread/149636#733514)

<!--EndFragment-->