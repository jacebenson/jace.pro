---
aliases:
- '/Custom Solutions/Validating-emails/'
date: '2017-09-25'
keywords:
- client script
- valid
layout: post
tags:
- client side api
title: Validating emails
---

So there is an "email" type of variable but it's not supported on
mobile, or service portal. The field will load but it won't validate its
data.

I suggest you don't use it as you can't ensure the data.

There are two real ways to verify the data meets the needs you have.

1.  Client script to do entire validation
2.  Client script to ask servier if data is valid

This will use all client-side validation.

``` {.js}
// Name: Validate email
// Type: onSubmit
// UI Type: All
function onSubmit() {
    var field = 'email';
    g_form.hideFieldMsg(field, true);
    return isEmailValid(field, g_form.getValue(field));
}

function isEmailValid(field, value) {
    var problemMsg = isEmailValidWithReason(value);
    if (problemMsg !== "") {
        //jslog("isEmailValid: " + problemMsg);
        g_form.showFieldMsg(field, problemMsg, 'error', true);
        return false;
    }
    return true;
}

function isEmailValidWithReason(value) {
    var localPartChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%*/?|^{}`~&'+-=_.",
        domainChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.";
    if (value.indexOf("@") == -1) {
        return "missing @ sign";
    }
    var s = value.split("@");
    if (s.length != 2) {
        return "too many at signs";
    }
    if (!containsOnlyChars(localPartChars, s[0])) {
        return "invalid character before the at sign";
    }
    if (s[0].length < 1) {
        return "at least one character must be before the at sign";
    }
    if (s[0].substr(0, 1) == ".") {
        return "period cannot be the first character";
    }
    if (s[0].substr(s[0].length - 1, 1) == ".") {
        return "period cannot be the last character before the at sign";
    }
    if (!containsOnlyChars(domainChars, s[1])) {
        return "invalid character after the at sign";
    }
    var periodIndex = s[1].indexOf(".");
    if (periodIndex == -1) {
        return "missing period after the at sign";
    }
    if (periodIndex === 0) {
        return "period cannot be the first character after the at sign";
    }
    var periods = s[1].split(".");
    var lastPeriod = periods[periods.length - 1];
    if (lastPeriod.length < 1) {
        return "must be at least 1 character after the last period";
    }
    if (!isAlphaNum(s[1].substr(0, 1))) {
        return "the first character after the at sign must be alphanumeric";
    }
    if (!isAlphaNum(s[1].substr(s[1].length - 1, 1))) {
        return "the last character must be alphanumeric";
    }
    return "";
}

function isAlpha(thchar) {
    return (thchar >= 'a' && thchar <= 'z\uffff') || (thchar >= 'A' && thchar <= 'Z\uffff') || thchar == '_';
}

function isAlphaNum(thchar) {
    return isAlpha(thchar) || isDigit(thchar);
}

function isDigit(thchar) {
    return (thchar >= '0' && thchar <= '9');
}

function containsOnlyChars(validChars, sText) {
    if (!sText)
        return true;
    for (var i = 0; i < sText.length; i++) {
        var c = sText.charAt(i);
        if (validChars.indexOf(c) == -1)
            return false;
    }
    return true;
}
```
