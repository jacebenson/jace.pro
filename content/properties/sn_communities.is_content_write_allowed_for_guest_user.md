---
layout: page
title: sn_communities.is_content_write_allowed_for_guest_user
description: "This flag is used in Community Permission Calculation to determine whether Content_write access is allowed for a PUBLIC/GUEST/NON-LOGGEDIN user.  if the flag is false: Content_write access won't be given to PUBLIC user even though the admin gives the write access in the Community Permissions if the flag is true: Content_write access will be given to the PUBLIC user if the admin gives the write access in the Community Permissions  Before enabling this flag the Admin should be aware of the following 1. All the non-logged in users are treated as the single user 'GUEST' 2. As we have no separation of the user identity for non-logged in users, giving content write access enables a guest user to modify the content posted by some other guest users."
---
false