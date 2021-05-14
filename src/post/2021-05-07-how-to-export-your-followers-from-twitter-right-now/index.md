---
title: "How to export your followers from Twitter right now"
subtitle: "A subtitle about How to export your followers from Twitter right now"
summary: "Summary of How to export your followers from Twitter right now"
date: 2021-05-07T19:48:13.430Z
---

# How to export your followers from Twitter right now

I was inspired to make a list of my followers to try to action on [@heyblake's post "Here are 18 ways to use DMs to grow"](https://twitter.com/heyblake/status/1390447280940007426).  

The options I could find online were, export your data and somehow get it from that OR, pay a company to pull it for you.

Instead I wrote this javascipt snippet to read all the @names on the page and collect them for ya.

## Here's how

1. Open the page you want to get the followers for e.g. https://twitter.com/jacebenson/followers
2. Press F12 (or open the browsers console)
3. Paste this script in and press enter.  This adds an event that triggers on each scoll event to get all the users.
    ```js
    var followers = [];
    function getFollowers(){
        try{
            document.getElementsByClassName('css-901oao').forEach((ele)=>{
                var name = ele.innerText;
                if(name.charAt(0) === '@' && name.indexOf(' ')===-1){
                    followers.push(ele.innerText);
                }
            })
            var deduped = followers.filter(function (el, i, arr) {
                return arr.indexOf(el) === i;
            });
            followers = deduped;
            console.log(`scrolled with ${followers.length}`);
        } catch(e){console.log(e);}
    }
    window.addEventListener('scroll', getFollowers);
    ```
4. Scroll to the bottom of your list, you should see `scrolled with ##` in the console as the list grows.
4. When you get to the bottom, on your console type in `followers.toString()`, and that will give you the list.  Right click copy, or click copy depending on your browser.
5. Now you have a comma seperated list of the names and you can do with that as you like!.