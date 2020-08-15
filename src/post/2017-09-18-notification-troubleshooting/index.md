---
title: "10 Point Checklist for Notification troubleshooting"
subtitle: "Working with emails is no fun. It's easy to miss a step, as there's a lot to make them work."
summary: "It's easy to miss one of these."
date: 2017-09-18T20:25:56-05:00
---

Check these things.

1.  On the notification, verify the notification table is correct.
2.  On the notification, verify the conditions are met.
    [KB0528655](https://hi.service-now.com/kb_view.do?sysparm_article=KB0528655)
3.  On the notification, verify the "Send to event creator" is correct. This doesn't care how the event creator is included if scripted, parm1 or 2 it will include if checked and exclude if unchecked. 
4.  On the notification, verify the "Send To" or "Send to Event Parm1"
    or "Send to Event Parm2".
5.  On the notification, verify there is something in the Body of the
    notification.
6.  On the notification, verify the weight is set. If it's not zero,
    check the skipped folder. [Weight](#weight)
7.  On the user, verify they are not locked out.
    [KB0528699](https://hi.service-now.com/kb_view.do?sysparm_article=KB0528699)
8.  On the user, verify they have an email, and it's properly formed.
    [KB0528671](https://hi.service-now.com/kb_view.do?sysparm_article=KB0528671)
9.  On the user, verify they have an email account, is active, has no
    notification issues
10. On the user's notification devices (`cmn_notif_device_list.do`),
    verify the user has a "Primary Email" device and it it correct.
    [KB0528667](https://hi.service-now.com/kb_view.do?sysparm_article=KB0528667)
11. On the user's notification subscriptions, verify they haven't
    disabled this notification.
    [KB0516987](https://hi.service-now.com/kb_view.do?sysparm_article=KB0516987)
12. If event generated

    -   Verify the event exists on
    `sysevent_list.do?sysparm_query=sys_id=-1`.
    [KB0523579](https://hi.service-now.com/kb_view.do?sysparm_article=KB0523579)
    -   Check the Event record table is table is correct.
    -   Verify the Events Process job is running
    [KB0523580](https://hi.service-now.com/kb_view.do?sysparm_article=KB0523580)
    [Youtube](https://www.youtube.com/watch?v=gYVwq8pH0-A)

1.  Validate any mail is working
2.  Validate the system is not sending to the debug user. [Outbound Mail Configuration](https://docs.servicenow.com/bundle/helsinki-servicenow-platform/page/administer/reference-pages/reference/r_OutboundMailConfiguration.html)
3.  Validate the system is enabled to send email
    [KB0524529](https://hi.service-now.com/kb_view.do?sysparm_article=KB0524529)

Thanks Andrew Barnes and some other random person from sndevs.slack.com
for the inspiration to make this post.

## Weight

> Set a numerical value for the notification priority relative to other
> notifications with the same target table and recipients. The system
> only sends the notification with the highest weight. All other
> notifications are moved from the Outbox to the Skipped mailbox. The
> default value 0 causes the system to always send the notification
> (assuming the conditions are met).
>
> For example, suppose that a service desk agent adds a comment to an
> incident and shortly thereafter closes it. By default, these actions
> trigger both the Incident commented and Incident Closed notifications.
>
> However, both notifications are from the Incident table and also
> notify the incident caller. The system only sends the notification
> with the highest weight, which in this case is the Incident Closed
> notification.
>
> Determine whether any of the troubleshooting steps below are true for
> your environment. Each step provides a link to an article that will
> help you eliminate possible causes and take corrective action as
> necessary.

This is from the
[docs](https://docs.servicenow.com/bundle/helsinki-servicenow-platform/page/administer/notification/task/t_CreateANotification.html).
