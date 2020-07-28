---
title: "UI16: How to update the user menu"
subtitle: "This is great, and undocumented"
summary: ""
date: 2019-08-30T23:25:56-05:00
imageName: "featured.png"
imageThumbnail: "featured-thumbnail.png",
---

Ever wanted to add an item in the drop down menu on the header or
customize the sections of the user preferences?  Here's one way.

So it seems ServiceNow is built on jelly, and if you know the names of the 
macros and ui pages you can overwrite them.  So I was able to find the name 
of the macro.  How?  That's a day for another post.  I'll just go over the
`concourse_user_menu` today.  In the image on top, I pasted the code.

So you want to add something to it.  Make a UI Macro called `concourse_user_menu`
with the following xml.  I added a link to DuckDuckGo.  But you can see how
this works.

### concourse_user_menu

```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly 
  trim="false" 
  xmlns:j="jelly:core" 
  xmlns:g="glide" 
  xmlns:j2="null" 
  xmlns:g2="glide">
  <div class="dropdown pull-left" role="application">
    <button id="user_info_dropdown" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false"
        title="${gs.getMessage('User menu')}"
        aria-label="${gs.getMessage('User menu')}"
      >
      <div>
        <sn-user-avatar 
        class="sn-avatar_xs" 
        aria-hidden="true" 
        disable-popover="true" 
        profile="{avatar: '$[gs.getUser().getAvatar()]', initials: '$[gs.getUser().getInitials()]', userID: '$[gs.getUserID()]'}" 
        enable-presence="true" />
        <span class="user-name hidden-xs hidden-sm hidden-md">
          $[HTML,NG:gs.getUser().getDisplayName()]
        </span>
        <span class="sr-only">
          ${gs.getMessage('User menu')}
        </span>
        <elevate-role-indicator/>
        <span class="caret"/>
      </div>
    </button>
    <ul class="dropdown-menu"
      aria-labelledby="user_info_dropdown">
      <li role="presentation">
        <a href="sys_user.do?sys_id=${gs.getUserID()}&amp;sysparm_view=ess"
          target="gsft_main" role="listitem" tabindex="-1" >
          ${gs.getMessage('Profile')}
        </a>
      </li>

      <j:if test="${gs.getProperty('glide.ui.impersonate_button.enable')}">
        <j2:if test="$[new GlideImpersonate().canImpersonate(gs.getUserID())]">
          <li role="presentation">
            <a href="javascript:void(0)" id="glide_ui_impersonator" sn-modal-show="impersonate" role="listitem" tabindex="-1">
              ${gs.getMessage('Impersonate User')}
            </a>
          </li>
        </j2:if>
      </j:if>

      <g2:evaluate var="jvar_elevated_privileges" expression="gs.getSession().getAvailableElevatedRoles()" />
      <j2:if test="${!empty(jvar_elevated_privileges)}">
        <li role="presentation">
          <a href="javascript:void(0)" sn-modal-show="elevateRoles" role="listitem" tabindex="-1">
            ${gs.getMessage('Elevate Roles')}
          </a>
        </li>
      </j2:if>

      <j2:if test="$[gs.getUser().getPreference('user.can.logout') == 'true']">
        <li role="presentation">
          <a href="logout.do" role="listitem" tabindex="-1">
            ${gs.getMessage('Logout')}
          </a>
        </li>
      </j2:if>
      <li role="presentation">
        <a href="https://ddg.gg" role="listitem">
          Welcome to the #duckside
        </a>
      </li>
    </ul>
  </div>
</j:jelly>
```