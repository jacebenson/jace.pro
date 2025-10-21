---
title: What is GlideQuery
description: "So this is a new thing that may change how code is written for some.\r\n\r\nLet me show you an example of the code and output. Then I'll write my thoughts.\r\n\r\n\r\n..."
date: '2020-04-28'
tags:
  - gliderecord
  - javascript
  - json
  - security
redirectFrom:
  - /what-is-glidequery/
---

<!--StartFragment-->

So this is a new thing that may change how code is written for some.

Let me show you an example of the code and output. Then I'll write my thoughts.

<!--EndFragment-->

<!--StartFragment-->

```javascript
var testGlideQuery = new GlideQuery('sys_user')
  .where('active', true)
  .select('first_name', 'last_name', 'active')
  .toArray(100);
gs.info('testGlideQuery: ' + JSON.stringify(testGlideQuery,'',' '));

/*
*** Script: testGlideQuery: [
 {
  "first_name": "a",
  "last_name": "b",
  "active": true,
  "sys_id": "9033c10d2f674c10bd54d5f62799b666"
 },
 {
  "first_name": "Aada",
  "last_name": "Keranen",
  "active": true,
  "sys_id": "15a849d32fd34810bd54d5f62799b6be"
 },
 ...
*/
```

<!--EndFragment-->

<!--StartFragment-->

So, yea. That's interesting. Before you go and look if you can use this in your instance, you probably don't have it yet. To get it, enable the SAM and SAAS plugins.

The methods are exposed and is written in a interesting way. I suggest you check it out.

This brings up the big question, is GlideRecord going away? No. I don't think so. This seems to be just a wrapper to allow chain-able calls to query the data. Maybe as the Now Experience comes up this will be used more in that but I don't think so. I think this is just a wrapper some team made to make their code look one way.

In any case, I wanted to write this down so if anyone looks for it something comes up, because as of now, it's not written down anywhere.

<!--EndFragment-->

## Comments

> **[crash180](https://github.com/crash180)** commented [on Apr 29, 2020](https://github.com/jacebenson/jace.pro/issues/179#issuecomment-621436055)
>
> Interesting the things you can find when you dig a little bit. I have not heard of GlideQuery either
>
> **[nikhilkumarsrs](https://github.com/nikhilkumarsrs)** commented [on May 5, 2020](https://github.com/jacebenson/jace.pro/issues/179#issuecomment-623983081)
>
> Hi Jace, It says\
> Evaluator: org.mozilla.javascript.EcmaError: "GlideQuery" is not defined.\
> Caused by error in script at line 
>
> **[jacebenson](https://github.com/jacebenson)** commented [on May 6, 2020](https://github.com/jacebenson/jace.pro/issues/179#issuecomment-624658335)
>
> [@nikhilkumarsrs](https://github.com/nikhilkumarsrs) You'll need to enable the SAM Pro plugins to use this it seems
>
> **[nikhilkumarsrs](https://github.com/nikhilkumarsrs)** commented [on May 6, 2020](https://github.com/jacebenson/jace.pro/issues/179#issuecomment-624748568)
>
> [@jacebenson](https://github.com/jacebenson) Hi Jace, SAM pro plugin is already active and still same error.
>
> **[jacebenson](https://github.com/jacebenson)** commented [on May 6, 2020](https://github.com/jacebenson/jace.pro/issues/179#issuecomment-624893272)
>
> I must have some more things on... com.sn_glidequery is what it says it's a part of;
>
> [<!-- External image: ![image](https://user-images.githubusercontent.com/638764/81228723-2e2fef00-8fb4-11ea-87b2-c843c78fdc82.png) -->](https://user-images.githubusercontent.com/638764/81228723-2e2fef00-8fb4-11ea-87b2-c843c78fdc82.png)
>
> **[jacebenson](https://github.com/jacebenson)** commented [on May 6, 2020](https://github.com/jacebenson/jace.pro/issues/179#issuecomment-624894680)
>
> Maybe it's installed as part of this, but this isn't on the production instance I have access to.\
> [<!-- External image: ![image](https://user-images.githubusercontent.com/638764/81228899-823ad380-8fb4-11ea-9dcb-26a39e7cf15a.png) -->](https://user-images.githubusercontent.com/638764/81228899-823ad380-8fb4-11ea-9dcb-26a39e7cf15a.png)
>
> I know I have this on all the environments it exists;\
> [<!-- External image: ![image](https://user-images.githubusercontent.com/638764/81228944-a26a9280-8fb4-11ea-8245-64f6e2f56595.png) -->](https://user-images.githubusercontent.com/638764/81228944-a26a9280-8fb4-11ea-8245-64f6e2f56595.png)
>
> sn_sam_saa
>
> **[nthumma](https://github.com/nthumma)** commented [on May 25, 2020](https://github.com/jacebenson/jace.pro/issues/179#issuecomment-633751111)
>
> Nice article Jace!