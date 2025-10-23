---
---

## Stop redirections

`sysparm_view=manage_security`

> Add sysparm_view=manage_security to stop being navigated away. That'll let you see the form and XML. If you want to see the default form view, you'll need to fiddle with the sys_navigator record - Kieran Anson

## Do not add url to history

`sysparm_nostack=true`

This appears to stop adding the current url to the history stack.  There's a post from 2012 where [Mark Stanger suggests this can solve an issue William Hazelrig was having about this](https://www.servicenow.com/community/developer-forum/how-do-you-prevent-a-form-from-adding-itself-to-the-navigation/m-p/1830653).  This is still used with Legacy Studio to prevent adding itself to the history stack.