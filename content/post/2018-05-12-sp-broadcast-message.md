---
title: 'Service Portal: Broadcast, emit, and on, should I use them?'
date: 2018-05-12
layout: post
tags:
- service portal
aliases:
- "/sp-broadcast-messages"
keywords:
- "sp"
- "widget"
---
Broadcasting messages seems great when you first learn about them and start to use them but it seems they, like everything, has its pros and cons.  As such I'd avoid them for the following reasons.

<!--more-->

1. It's all client side, meaning it can be spoofed and modified.
1. Its extremely difficult to track down where something broke.  Imagine you have 3 things all calling the same broadcast message to update a title or breadcrumb, and then one fails.
1. It is very hard for another developer to pick up where you left off, since there's no clear cut methods to pass along data and information.
1. That leaves too many variables in how the data is delivered (browser plugins, internet speeds, etc) and can cause issues in production.
1. Its not scale-able, if you ever need to build off of that, it becomes a monstrosity.

One way around this would be to instead drop the data into a table, and then trigger a data refresh.  
With an event broadcast that will pull the data from the table, server side and update the data object.,
This also ensures someone's connection does not time out in the middle of building the page, or isn't blocked from working via a browser plugin

Another way would be to subscribe to the updates via a "Data Service".  
A full example can be seen on the [CCW1088 Lab](https://developer.servicenow.com/app.do#!/creatorcon/CCW1088/creatorcon_18_CCW1088_5_sharing_data_and_events).  
Other examples just around and about angular include;

- [Working example](https://jsfiddle.net/jeremylikness/zba74rk3/)
- [Blog about it](https://csharperimage.jeremylikness.com/2014/12/the-top-5-mistakes-angularjs-developers.html)

But this is the jist of it, create a Angular Provider.  Associate it to all the appropriate widgets.  Below is the code from the lab above;

```js
function(amb) {
  var watcher;
  var dataUpdatedHandlers = [];
  function init(table, filter) {
    if (watcher) {
      watcher.unsubscribe();
    }

    if (table && filter) {
      var watcherChannel = amb.getChannelRW(table, filter);
      amb.connect();
      watcher = watcherChannel.subscribe(function(message) {
        if (!message.data) {
          return;
        }
        dataUpdatedHandlers.forEach(function(fn) { fn.call(fn); });
      });
    }
  }
  return {
    onDataUpdated: function(callbackFn) {
      dataUpdatedHandlers.push(callbackFn);
    },
    initRecordWatcher: function(table, filter) {
      init(table, filter);
    }
  };
}
```

Then Add this javascript to each client controller on the widgets that will update the data;

```js
workspaceData.initRecordWatcher(c.options.table, c.options.filter);
workspaceData.onDataUpdated(function() {
  c.data.rows = [];
  c.server.update().then(function(data){
    c.data.rows = data.rows;
  });
});
```

Add this javascript to the client controller ont he widget that is displaying this data;

```js
workspaceData.onDataUpdated(function(){
  c.counters.forEach(function(counter){ runCounter(counter); });
});
```

It does seem more complicated but then you don't require `$scope` or `$rootScope` in your widgets and it should be more clear how they are working together.