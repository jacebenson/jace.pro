---
title: Do you need new JavaScript to work in ServiceNow?
description: >-
  A quick guide on how to transpile modern JavaScript to work in ServiceNow.
date: '2024-10-17'
tags:
  - servicenow
  - javascript
redirectFrom:
  - /do-you-need-new-javascript-to-work-in-servicenow/
  - /p/2024-10-17-do-you-need-new-javascript-to-work-in-servicenow/
---

Sometimes you need new code converted to things ServiceNow understands.  Arrow functions now work in ServiceNow in some places but not others.  `let`, `const` same thing.  

Here's a way to take any new script and make it work.  This is called transpiling.  It's complicated.  The way I understand it is, you give it new code, and it makes it work with and older set of JavaScript features that were available a long time ago using polyfills.  

Enough dry stuff let's get trying it.  

Go to [babeljs.io/repl](https://babeljs.io/repl/) and set the target to, `defaults, ie 11`.

Then paste in the new JavaScript.  Or if you want something to start with try pasting this code.

```js
let a = ()=>{
 console.log(message);
}
// see let becomes var
// and () => {} becomes function(..)
// lets try other things
//
let [red,green,blue] = [0,1,2];
// copying into a new object
var person = {
 name: "Jace",
 location: "MN"
}
/* 
// if you uncomment this, it will add a polyfill to do this
let copy = {
 ...person
}
*/
```

That should become something like;

```js
var a = function a() {
  console.log(message);
};
// see let becomes var
// and () => {} becomse function(..)
// lets try other things
// spread
var red = 0,
  green = 1,
  blue = 2;
// copying into a new object
var person = {
  name: "Jace",
  location: "MN"
};
/* 
// if you uncomment this, it will add a polyfill to do this
let copy = {
  ...person
}
*/
```