---
aliases:
- '/pdi/'
- '/2017/10/24/pdi/'
- '/2017-10-24-pdi/'
date: '2017-10-24'
layout: post
tags:
- pdi
title: Things to do with your PDI
authors: ["jace"]
---

Things you should do with you PDI when you zboot it.

1.  [Create Local Account with your
    name/email](https://.service-now.com/nav_to.do?uri=%2Fsys_user_list.do)

-   Give your account `admin` and `security_admin` roles
-   [Script To do this](#background-script-to-do-this)

1.  [Lockout all other
    users](https://.service-now.com/nav_to.do?uri=%2Fsys_user_list.do)
2.  [Activate
    Plugins](https://.service-now.com/nav_to.do?uri=%2Fv_plugin_list.do)

-   [User Registration
    Request](https://.service-now.com/v_plugin.do?sys_id=com.snc.user_registration)

1.  [Disable any "application"
    menus](https://.service-now.com/nav_to.do?uri=%2Fsys_app_application_list.do)
    you don't intend to use.
2.  [Update dictionary on task.wf\_activity to be
    "active"](https://.service-now.com/nav_to.do?uri=%2Fsys_dictionary_list.do%3Fsysparm_query%3Dname%253Dtask%255Eelement%253Dwf_activity)
3.  [Set up Oauth with Github for faster
    login](https://community.servicenow.com/community/develop/developer-relations/blog/2017/03/10/live-coding-happy-hour-recap-for-march-10-2017-oauth-part-3-github-api-and-one-token-per-user)
4.  [Load any update
    sets/applications/shares](https://.service-now.com/nav_to.do?uri=%2Fsys_remote_update_set_list.do)
    you have saved off locally or in git repositories.

# Useful Share/Applications/Update Sets

| Share                             | Share                                                                                                                           | Git                                                                         |
|-----------------------------------|---------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| Xplore                            | [Share](https://developer.servicenow.com/app.do#!/share/contents/9650888_xplore_developer_toolkit?v=4.05&t=PRODUCT_DETAILS)     | [Github](https://github.com/thewhitespace/Xplore/)                          |
| UI 16 Developer Patch             | [Share](https://developer.servicenow.com/app.do#!/share/contents/9650888_ui16_developer_patch?v=2.04&t=PRODUCT_DETAILS)         | [Github](https://github.com/thewhitespace/UI16-Developer-Patch/)            |
| Upgrade Assistant                 | [Share](https://developer.servicenow.com/app.do#!/share/contents/2574393_ws_upgrade_assistant?v=2&t=PRODUCT_DETAILS)            |                                                                             |
| Code Search Service Portal Widget |                                                                                                                                 | [Github](https://github.com/jacebenson/servicenow-code/blob/docs/README.md) |
| Security Best Practice Audit      | [Share](https://developer.servicenow.com/app.do#!/share/contents/7852853_security_best_practice_audit?v=3.03&t=PRODUCT_DETAILS) |                                                                             |

## Background Script To Do This

```js
// This will make a user with and id of slack
// password of password with appropriate roles.
var users = [{
    id: 'jace.benson',
    firstName: 'Jace',
    lastName: 'Benson',
    password: 'slack'
}, {
    id: 'slack',
    firstName: 'slack',
    lastName: 'er',
    password: 'slack'
}];

function createUserWithRoles(userObj) {
    var userGR = new GlideRecord('sys_user');
    if(userGR.get('user_name',userObj.id)) {
        // donothing
    } else {
        userGR.newRecord();
    }
    userGR.setValue('user_name', userObj.id);
    userGR.setValue('active', 'true');
    userGR.setValue('first_name', userObj.firstName);
    userGR.setValue('last_name', userObj.lastName);
    userGR.setValue('locked_out', false);
    userGR.setValue('password_needs_reset', 'true');
    userGR.setDisplayValue('user_password', userObj.password);
    userGR.setWorkflow('false');
    gs.print('userObj.id: ' + userObj.id);
    gs.print('userObj.id: ' + userObj.password);
    var userSysId = userGR.update();
    giveRole(userSysId, 'admin');
    giveRole(userSysId, 'security_admin');
}
function giveRole(userId, roleName) {
    var give = new GlideRecord('sys_user_has_role');
    give.newRecord();
    give.setValue('user', userId);
    give.setDisplayValue('role', roleName);
    give.insert();
}
function lockOutEveryoneElse() {
    var usersToLockOut = new GlideRecord('sys_user');
    usersToLockOut.addEncodedQuery('sys_created_on<javascript:gs.beginningOfToday()');
    usersToLockOut.query();
    while (usersToLockOut.next()) {
        usersToLockOut.setValue('locked_out', true);
        usersToLockOut.update();
    }
}
users.map(function(user){
    createUserWithRoles(user);
});
lockOutEveryoneElse();
```
