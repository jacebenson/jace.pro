---
title: 'Service Portal: Broadcast, emit, and on, should I use them?'
description: >-
  Broadcasting messages seems great when you first learn about them and start to
  use them but it seems they, like everything, has its pros and cons. As such
  I'...
date: '2018-05-13'
tags:
  - servicenow
  - service-portal
redirectFrom:
  - /service-portal-broadcast-emit-and-on-should-i-use-them/
  - /p/2018-05-12-service-portal-broadcast-emit-and-on-should-i-use-them/
---

<!--StartFragment-->

Broadcasting messages seems great when you first learn about them and start to use them but it seems they, like everything, has its pros and cons. As such I'd avoid them for the following reasons.

1. It's all client side, meaning it can be spoofed and modified.
2. Its difficult to track down where something broke. Imagine you have 3 scripts all calling the same broadcast message to update a title or breadcrumb, and then one fails.
3. It's hard for another developer to pick up where you left off, since there's no clear cut methods to pass along data and information.
4. That leaves too lots of variables in how the data is delivered (browser plugins, internet speeds, etc) and can cause issues in production.
5. Its not scale-able, if you ever need to build around that, it becomes a monstrosity.

One way around this would be to instead drop the data into a table, and then trigger a data refresh. With an event broadcast that will pull the data from the table, server side and update the data object., This also ensures someone's connection does not time out in the middle of building the page, or isn't blocked from working via a browser plugin

Another way would be to subscribe to the updates via a "Data Service".\
A full example can be seen on the [CCW1088 Lab](https://developer.servicenow.com/connect.do#!/event/creatorcon18/CCW1088/creatorcon_18_CCW1088_5_sharing_data_and_events).\
Other examples around and about angular include;

* [Working example](https://jsfiddle.net/jeremylikness/zba74rk3/)
* [Blog about\
  it](https://csharperimage.jeremylikness.com/2014/12/the-top-5-mistakes-angularjs-developers.html)

But this is the gist of it, create a Angular Provider. Associate it to all the appropriate widgets. Below is the code from the lab above;

```javascript
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

Then Add this JavaScript to each client controller on the widgets that will update the data;

```javascript
workspaceData.initRecordWatcher(c.options.table, c.options.filter);
workspaceData.onDataUpdated(function() {
  c.data.rows = [];
  c.server.update().then(function(data){
    c.data.rows = data.rows;
  });
});
```

Add this JavaScript to the client controller on the widget that is displaying this data;

```javascript
workspaceData.onDataUpdated(function(){
  c.counters.forEach(function(counter){ runCounter(counter); });
});
```

It does seem more complicated but then you don't require `$scope` or\
`$rootScope` in your widgets and it should be more clear how they are\
working together.

<!--EndFragment-->