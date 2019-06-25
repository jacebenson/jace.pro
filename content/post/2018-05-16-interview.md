---
title: Interview Preperation
date: 2018-05-16
layout: post
aliases: 
 - "/interview/"
---
This is a extensive list of questions for both interviewers and interviewees when Servicenow Development is involved. 

<!--more-->

# Interview Preperation

So interviewing is exciting.  It's a way to get uncomfortable and see what is available in jobland.  Something to keep in mind, interviews are a way for you and your employer to find a great fit for this position.  The employer may be happy to have you, but you may not be happy in that position, so it's crucial to get information from the interview to tell you about the technology, team, and the expectations they'll have.  The expectations should have been set on the job posting, but it's good to ask specifics about any you question.
With that being said, when the technical questions are being asked, you should be able to see they understand the question and answer.  If they don't

Interviews...
So you want to interview for a job as a Servicenow Developer.

so I remember my interview here it was so horrible, because no 1 knew the questions to ask... They literally asked "Do you know what GlideRecord is?" every answer I gave I could see it on their faces that they had no clue what the system did or was capable of... so in light of that I remember having conversations about interview questions and you posted saying to have them atleast know that snguru jedi post... that does seem like a good base of what they should know, but I think they should also be quizzed on scripting knowledge and other tricks of the trade that you should know when applying for a sort of "SME" position... what do you think?

## Before you continue I urge you to read this first

https://www.kalzumeus.com/2012/01/23/salary-negotiation/

## Questions to ask the interviewer

### Technology Questions

1. What release are you guys currently on?
2. How many licensed users are on the environment?
3. What are next major inititives of the team?

### Team Questions

1. What is your role in relation to the team?
2. How many people are on the team I'll be working on?
3. What is the team culture like?
4. How does your team communicate and share ideas/files/code/assist one another?

### Getting Expectations Questions

1. What is the release process/schedule here?
2. Would the duties in this position require me to be on-call in any capacity?
3. Is this a work from home position or does it have this as a full or part time option?
4. What role would I be filling?

## Questions to be prepared to answer

### Behavioral Questions

1. Tell me about a time you've had to do something you disagreed with and how that interaction went.
1. Tell me about a time you've had been asked to fulfill a requirement and you went above and beyond.
1. Tell me about a time you've made a commitment and then failed to deliver.
1. Tell us about a project that didn't have a positive outcome and how you handled the situation.  
1. How would you handle a complaint brought to your attention?
1. What do you see that would be challenges working here?
1. Why should we hire you over the next candidate?
1. Why do you want to work here?
1. Have you worked on a oncall capacity before?
1. How do you educate yourself?

### Technical Questions

#### General Programming Questions

1. How do you iterate over an array?
1. How can you give an object a dynamic property?
1. Given an array as an input: [1,2,3,4,5], return an array of modified values * 2 [1,4,6,8,10] e.g. `var arr = [1,2,3,4,5];arr.map(function(n){return n*2;})`
1. Sum the first n Fibonacci numbers [0,1,1,2,34,8,13,21,34,55,89,144,...]
1. find the first non repeating character from the string. e.g. [aaabbbcccdeee] returns d
1. Write javascript function for add(3)(4);?   `function(a,b){return a+b;}`
1. Given a list 1,0,3,5,0,0,34,5,0,36 push all the zeroes to the end. Develop an in-place algorithm
1. How to Split a string `var str = 'Left Right';str.split(' ');`
1. Print integers 1-100 except for multiples of 3, print "Fizz", multiples of 5 print "Buzz", multiples of both print "FizzBuzz"
1. You have a function rand7() that generates a random integer from 1 to 7. Use it to write a function rand5() that generates a random integer from 1 to 5.

<!--```js
    function rand7(){
        return Math.floor((Math.random() * 7) + 1);
    }
    function rand5() {
        // write the body of your function here
        var r7 = rand7();
        var tries = 1;
        while(r7<=2){
            r7 = rand7();
            tries++;
        }
        console.log('tries: ' + tries);
        return r7-2;
    }
    console.log(rand5());
```-->

#### Javascript Questions

1. What are the primitive types of JavaScript?
1. What's the difference between a Value and a Reference?
1. What is variable hoisting?
1. Closures — Know that a function retains access to the scope that it was created in. Know what this lets us do, such as data hiding, memoization, and dynamic function generation.
1. `this` — Know the rules of this binding. Know how it works, know how to figure out what it will be equal to in a function, and know why it’s useful.
1. `new` — Know how it relates to object oriented programming. Know what happens to a function called with new. Understand how the object generated by using new inherits from the function’s prototype property.
1. `apply`, `call`, `bind` — Know how each of these functions work. Know how to use them. Know what they do to this.
1. Prototypes & Inheritance — Understand that inheritance in JavaScript works through the [[Prototype]] chain. Understand how to set up inheritance through functions and objects and how new helps us implement it. Know what the __proto__ and prototype properties are and what they do.
1. Asynchronous JS — Understand the event loop. Understand how the browser deals with user input, web requests, and events in general. Know how to recognize and correctly implement asynchronous code. Understand how JavaScript is both asynchronous and single-threaded.
1. Higher Order Functions — Understand that functions are first-class objects in JavaScript and what that means. Know that returning a function from another function is perfectly legal. Understand the techniques that closures and higher order functions allow us to use.
1. Understand how objects, arrays, and functions are copied and passed into functions. Know that the reference is what's being copied. Understand that primitives are copied and passed by copying the value.
1. What's the difference between global scope, function scope, and block scope?
1. Understand which variables are available where. Know how the JavaScript engine performs a variable lookup.
1. Understand that variable and function declarations are hoisted to the top of their available scope. Understand that function expressions are not hoisted.
1. Difference between `==` and `===`

#### CSS Questions

1. What is the difference between display:none and visibility:hidden?
1. What can you tell me about Bootstrap?

#### XML Questions

1. What is XML?
1. What is XPath?

#### Web Services Questions

1. What is REST?
1. What is SOAP?
1. What protocol does REST use?
1. What are the differences between REST and SOAP?

#### Servicenow Service Catalog Questions

1. What does Order guide refer to in Service Catalog?
1. What is the use of an Order Guide?
1. How will you define a Service catalog workflow?
1. What is a Content Item of service catalog?
1. What Service catalog displays?
1. Tell me about some Service catalog variable types.
1. What is workflow in relation to the catalog items and when it will execute?
1. What is represented by order in Service catalog?
1. What is Catalog request workflow?
1. Which module is used for create a new Catalog item?
1. What is types of things are generally on a catalog?

#### Servicenow Workflow Questions

1. Where are workflow versions captured?
1. If workflow is not published, only checked out will it be captured in update sets?
1. What does workflow timelines represent?
1. If prefix of Incident (e.g. INC) needs to be changed, how would I do that?
1. Workflow editor and Service catalog differs in approval methodology? YES/NO, If yes, give explanation.
1. Can we validate workflow before publish?
1. If workflow checked out, can it be modified by any user? If yes or no, how?
1. What is true about Service catalog variables?
1. What is the true about SlushBucket?
1. Can you restart a workflow at a specific activity?

#### Servicenow Update Sets Questions

1. Which field should be there in table that identifies that it should be captured in Update Sets?
1. Where are customizations stored?
1. What things are tracked in customizations?
1. What is the use of an Update Set?
1. Where update sets are stored?
1. What changes out of below would be applied in case of a merge update set?
1. What changes are not captured in update sets?

#### Servicenow Email Questions

1. What is the default email size limit of inbound emails?
1. How Servicenow system is configured to send an email notification after system Upgrade?
1. What all actions can be performed with inbound email?

#### Servicenow GUI Questions

1. Scenario when an Interceptor can be used?
1. How to make an UI Policy global?
1. Button, Related Links and Context Menu these are?
1. How to define field attributes?
1. When does the "Submit" button appear on a form?
1. When do "UI Actions" appear on the form?
1. In which part of UI will you find help (link to wiki) option?
1. What is Icon of reference?
1. How to set display value for any field
1. If User customizes the Homepage, what happens?
1. How to change background color?
1. After save on form, which fields get stored in activities log?
1. Global Search option can be found in which part of UI?
1. How applications appear?
1. How do you modify the field behavior?
1. How do you enhance Homepage performance in case of gauges?
1. Where will you find option to edit a list?
1. What is listing in HomePage icon?
1. How to change the Development and Production instance color?
1. In which place admin can edit the HomePage?

#### Servicenow Security Questions

1. What is security_admin role?
1. What do you mean by Elevated Privileges?
1. Why we need to impersonate?
1. If a user is not given filter_global or filter_admin role, what will be the impact?
1. ACLs can evaluate on what types of things?
1. How do ACLs executes, what are the steps they check?
1. ACL applies on?
1. In Service now which role is get option for approval a request or same etc.?
1. What is a SSO integration?
1. What is Delegate User?

#### Servicenow Database/Integrations Questions

1. What is Coalesce in import set?
1. Which is parent table for INC, CHG, PRB?
1. DB name for custom table?
1. Example for One to many relationship in table?
1. What is a Column and row in a table?
1. What is there stored in CMDB?
1. Where is data stored?
1. How can you import data into servicenow?
1. What is a sys_id?
1. Which module is used to see column structure in a table?

#### Servicenow Service Level Agreement Questions

1. What is SLA-Retroactive start?
1. What is Pause condition in SLA?
1. What is Table for SLA task?
1. What is Table for SLA Definitions?
1. SLA, OLA and UC are configured in which module?
1. What is the benefit of SLA?

#### Servicenow Other

1. How to arrange the Applications in left navigation to user?
1. How to see the current version of instance as an Admin?
1. Where can scripting occur in servicenow?
1. What is the difference between GlideRecord and GlideAggregate
1. Can you describe the different types of business rules?
1. What is the difference between a UI policy and UI action?

## Inspired by

- [Are YOU a Servicenow jedi?](https://www.servicenowguru.com/showcase/service-now-jedi/)
- [ServiceNow Interview Question & Answers](https://tekslate.com/servicenow-interview-questions-and-answers)
- [servicenowstar](https://servicenowstar.wordpress.com/2016/03/13/servicenow-intertview-question-anwers/)
