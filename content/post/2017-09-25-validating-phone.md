---
title: 'Validating Phone numbers'

author: 'jace'
date: '2017-09-25'
layout: 'post'
category: 'servicenow'
tags:
 - client side api
---
There is no "phone" type of variable, so to validate this we'll have to manually do it.

<!--more-->

There are two real ways to verify the data meets the needs you have.

1. Client script to do entire validation
1. Client script to ask servier if data is valid

This will use all client-side validation.
I set up a config variable where you need to;

- Specify the field to check
- Specify how long you need the number to be without non-digits
- Specify the error that will appear
- Specify how the number should be broken up

```js
function onChange(control, oldValue, newValue, isLoading) {
    var config = {
        field: 'phone',
        required_length: 10,
        error: 'Invalid telephone number.  Please enter your telephone number including area code.',
        sections: {
            one: 3,
            two: 3,
            three: 4
        }
    };
    // no need to change the below
    if (isLoading || newValue === '') {
        return;
    }
    config.error_flag = false;
    g_form.hideFieldMsg(config.field, true);
    var regexGoodForm = new RegExp("^\\([\\d]{"
                        + config.sections.one
                        + "}\\)\\s[\\d]{"
                        + config.sections.two
                        + "}\\-[\\d]{"
                        + config.sections.three
                        + "}$", "g");
    var isGoodForm = regexGoodForm.test(newValue);
    //if value does not match (n1) n2-n3 format
    if (!isGoodForm) {
        var regexNonDigits = /[^\d]/g;
        // remove all non number from string
        var userPhone = newValue.replace(regexNonDigits, '');
        // verify if number is x digits
        var regexXDigits = new RegExp("[^d]\{"
                            + config.required_length
                            + "\}", "g");
        var isXDigits = regexXDigits.test(userPhone);
        if (isXDigits) {
            // if it is, reformat to (n1) n2-n3
            var onePlusTwo = config.sections.two + config.sections.one;
            var onePlusTwoPlusThree = config.sections.three + onePlusTwo;
            var newNum = '';
            newNum += '(' + userPhone.substring(0, config.sections.one) + ') ';
            newNum += userPhone.substring(config.sections.one, onePlusTwo) + '-';
            newNum += userPhone.substring(onePlusTwo, onePlusTwoPlusThree);
            g_form.setValue(config.field, newNum);
        } else {
            // if it is not, trigger error
            config.error_flag = true;
        }
        if (config.error_flag) {
            g_form.clearValue(config.field);
            g_form.showFieldMsg(config.field, config.error, 'error');
        }
    }
}
```
