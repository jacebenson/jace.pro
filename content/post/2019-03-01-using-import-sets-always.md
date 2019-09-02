---
date: '2019-03-01'
keywords:
- integrations
- import
- import set
layout: post
title: Integrations should always use import sets
authors: ["jace"]
---

I was asked to present a lab I submitted to
[K19](/post/2018-12-02-k19-proposals/) at the local Minnesota Servicenow
User Group. I thought this would be great so I went down the path of
making this small lab about using import sets.

Here's a link to the
[deck](https://sndevs.github.io/meetups/decks/integrate-faster-import-sets).

The short version of this is;

Always use import sets for data from another system, and always store
all the data you can see in that import set so you don't have to get
into the integration to do modificaitons.

You may hear reasons to not do this;

**Objection:** "This is just a small Solarwinds import to add to our
network devices, It would be just as fast to write to the table in a
script include."

**What you should think:** "Sure, but then the moment they change their
data or want to coalesc on something else, you'll have to re-interogate
the data to map it."

**What you should say:** \"Any integration needs to come in to a import
set table where we will hold the data for a few days so we can transform
the data to our values regardless how the data in that other system
exists.

**Objection:** "I've done plenty of integrations and this one just runs
on demand to get the start date of a new employee, literally just
populating the variables on RITM"

**What you should think:** "Sure, until they change their mind and want
it to do something more with some other element they were sharing."

**What you should say:** \"We store all data seen from the integration
for future use in case the need arises to use them based on future work.
This simplifies the integration later for other to work on it.

**Objection:** "This just adds overhead to what would otherwise be a
simple integration."

**What you should think:** \"It's only overhead if you don't do **all**
your integrations that way. By being consistent anyone on your team
should be able to quickly identify what needs to be changed.

**What you should say:** "Being consistent on this lets anyone on the
team quickly work on the same integration without having to explain
every nuance about the integration."

**Objection:** Bringing in data from a nested source like JSON or XML
doesn't make sense.

**What you should should think:** There's common ways to flatten that
down.

**What you should say:** Below are examples of how to flatten JSON.

``` {.js}
var flatten = function(data) {
    var result = {};
    function recurse (cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
             for(var i=0, l=cur.length; i<l; i++)
                 recurse(cur[i], prop + "[" + i + "]");
            if (l == 0)
                result[prop] = [];
        } else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop+"."+p : p);
            }
            if (isEmpty && prop)
                result[prop] = {};
        }
    }
    recurse(data, "");
    return result;
}
var obj = {
    name: {
        first: "Jace",
        last: "Benson"
    },
    website: "https://blog.jace.pro"
};
gs.info('Normal:');
gs.info(JSON.stringify(obj))
gs.info('Flattened:');
gs.info(JSON.stringify(flatten(obj)));

gs.info('XMLtoJSON Flattened:');
var xmlStr = "";
xmlStr += "<Person>";
xmlStr += "  <Name>";
xmlStr += "    <First>Jace</First>";
xmlStr += "    <Last>Benson</Last>";
xmlStr += "  </Name>";
xmlStr += "  <Site>";
xmlStr += "    https://blog.jace.pro";
xmlStr += "  </Site>";
xmlStr += "</Person>";

var xmlObj = gs.xmlToJSON(xmlStr);
//gs.info(JSON.stringify(xmlObj,'','  '));
gs.info(JSON.stringify(flatten(xmlObj)));

/*** Script: Normal:
*** Script: 
{
    "name": {
        "first":"Jace",
        "last":"Benson"
    },
    "website":"https://blog.jace.pro"
}
*** Script: Flattened:
*** Script: 
{
    "name.first":"Jace",
    "name.last":"Benson",
    "website":"https://blog.jace.pro"
}
*** Script: XMLtoJSON Flattened:
*** Script: 
{
    "Person.Site":"https://blog.jace.pro",
    "Person.Name.Last":"Benson",
    "Person.Name.First":"Jace"
}
***/
```
