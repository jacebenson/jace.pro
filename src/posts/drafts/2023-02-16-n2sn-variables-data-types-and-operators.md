---
title: 'N2SN: Variables, data types, and operators'
description: Supercharge your variables and unleash their power!
date: '2023-02-16'
tags:
  - servicenow
redirectFrom:
  - /n2sn-variables-data-types-and-operators/
---

In ServiceNow, variables are like building blocks. You can use them to store and manipulate data, perform calculations, and make your applications more dynamic.

## Variables

Variables store a value to use programmatically.  Let's look at an example below.

```js
var myName = 'Jace';
```

There's 4 things happening on that little line.

1. \`var\` is a keyword that declares the next text is named variable.
2. \`myName\` is the text the variable is named.
3. \`=\` is the operator.
4. \`'Jace'\` is the value stored.

There's a lot of opinions folks have about variables, here's mine.

* Be consistent (weather that's by yourself or with your team).  

  * Variable naming.  Don't try to remember if you do camelCase or snake_case or hungarian notation.  Just pick one and run with it.  Personally I use camelCase, but sometimes to be consistent you match the existing code. 
  * Values, I try to match the code here, using single quotes \`'\`, but sometimes, your value needs a single quote in it, then you have a choice, flip the quotes from single to double \`"\` or escape the single quote.
* Don't make variables for variables sake.  What do I mean by that? Let's consider this code.

  ```
  var herName = 'Jane';
  var herLastName = 'Doe';
  var herFullName = 'Jane Doe';
  console.log(herFullName);
  ```

  That code has three variables but only one is being used.  Don't make variables you're not going to use.
* Variables should be easy to understand what they are without having to read all the code.  Sometimes you'll see code online like \`var a = 'Jace';\` but was does \`a\` mean in the context of it's code? The variable name \`a\` should be more descriptive, something like \`var firstName = 'Jace';\`

Now that my opinions are out of the way, lets talk about what other types of data you can store in a variable and how you use that data.

## Data Types

Javascript variables can only store certain kinds of data.  In the past section, we've been just storing text, technically folks would call these \*strings\*.   Let't talk about each common data type.

### String

Strings are text, when storing them you'll want to use quotes around them.

### Number

Numbers the 0 through 9 values.  Javascript doesn't differentiate whole numbers from decimals so you can store any like `var age = 25;` or `var changeInPocket = 0.23;`

### Boolean

Boolean's are just another way to say `true` or `false`.  

### Undefined

Undefined is a special type.  When something has a type of `undefined` that means, the variable has not been defined to use.  

### Null

Null is the absence of value.  Technically you can just declare a variable like `var name;` without saying what it is.  In this case `name` would be `null`.

### Objects

Objects are a complicated subject, but I like to think of objects like I think about a person.  A person is a collection of properties.  I think a code example may help.

```
var jace = {
  name: 'Jace',
  age: 25,
  createsContent: true
}
```
This looks very different from the other data, let's consider how this is different.
1. The value is wrapped with curly brackets `{}`
2. The properties don't have the `var` keyword declaration
3. They are using `:` instead of `=`
4. Many lines are ended with a comma `,`

Yep.  Objects are different.  This is one way to set up an object.  This is by far what I see most the time when making objects.  

Once you have a object there's a few ways to both add and set data in it.

Most the time you'll see code using *dot notation*.  Sometimes you'll see *bracket notation*.

```js
// Lets get that age value
jace.age;// dot notation
jace['age'];// bracket notation
```
You can also change those values like you could assign them.

```js
jace.age = 27
```

The reason you may need to use bracket notation over dot notation is when the property name may conflict with a inherited function, keyword, or if it starts with a non-alphabetic character.  I find that sometimes I need to name a property dynamically, in those cases bracket notation is the way to go.

### Arrays

Arrays are technically objects.  But they work a little different.

```js
var ages = [25, 26, 27];
ages[0];//this is the 1st element in the array
ages[1];//this is the 2nd
```

There's a lot of ways to loop over this data, we'll get to that later.  I just want to cover adding data to an array since that's the most useful thing.
`ages.push(30);` is how you would add 30 as the last element of the array.

## Operators

What are operators?  Operators let you set values, check a value matches another, and that kind of stuff.  Most the time you'll probably be using `=` to set a value.  However you will need to check values and to do that you'll use `==`.  Out of ServiceNow most the time folks use `===`.  The difference between `==` and `===` is double equals coerces the value on both sides so they are the same type, and triple equals checks type first, if they match types, then checks values.  Depending on if it's a match or not you'll get the boolean, `true` or `false`.

There are some shortcuts to assigning values.

```js
var workingTitle = 'Don\'t Panic';
workingTitle = workingTitle + ' - A quote';
// This ^ is the same as the next line
workingTitle += ' - A quote';
```