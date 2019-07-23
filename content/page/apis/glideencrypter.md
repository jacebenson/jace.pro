---
aliases:
- '/GlideEncrypter/'
date: '2016-01-01'
keywords:
- encrypt
- decrypt
- getDecryptedValue
layout: page
tags:
- 'server-side-api'
title: GlideEncrypter
url: '/glideencrypter/'
---

Here's some examples of using `GlideEncrypter`.

``` {.js}
var encrypter = new GlideEncrypter();
// or GlideEncrypter('24 character string');
```

## Encrypt & Decrypt

An important note, if you are setting a `Password2` field, you must
encrypt the value first otherwise the value will be stored in clear text
and decrypting it may provide an incorrect value.

``` {.js}
var encrypter = new GlideEncrypter();
var encrypted = encrypter.encrypt('Super Secret Phrase');
gs.info('encrypted: ' + encrypted);
var decrypted = encrypter.decrypt(encrypted);
gs.info('decrypted: ' + decrypted);
/**
*** Script: encrypted: g/bXLJHa7xNRMKZEo5q/YtLMEdse36ED
*** Script: decrypted: Super Secret Phrase
*/
```

## Scoped Decrypt

``` {.js}
gr.password.getDecryptedValue()
```
