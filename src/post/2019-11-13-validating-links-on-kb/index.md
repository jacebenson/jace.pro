---
title: "Validating links on your KB"
subtitle: ""
summary: ""
date: 2019-11-13T21:16:24-06:00
---
The other day, "Jon" on slack asked;

> Hi everyone :slightly_smiling_face: We have a ton of external links in content items. How can I regularly check those links to make sure they are active?

Got me thinking, I should share this, cause someone might find it useful.

> Jace: You'd need to do the following steps;\
> 1  Gather the outbound links\
> 2  Make a http request to the endpoint to ensure it returns whatever is valid (is a 301 okay, that's a redirect?)\
> 3  Once you get the response, do something when you have an issue.\
> To do 1, you could GlideRecord over the KB records and use regex to extract the links.  \
> You'll probably want to make an object where the link name is the property, and store the KB article as an array so if multiple articles use the same link you don't need to test repeatedly.  \
> You're output will look like\
> 
```json
{
  "https://google.com": ["KB1234","KB1235"],
  "https://ddg.gg": ["KB43232","KB4355"]
}
```

> Then if the links are PUBLIC, you could just use a scripted rest message and if response is not 200 do something, https://jace.pro/post/2019-09-14-recordless-rest-is-great/\
>
> However if the links require auth or vpn access, you'll have to account for that.
>
> I'd assume code would be something like;
>
```js
for(var link in links){
  doRestCall(link);
}
function doRestCall(url){
    var restMessage = new sn_ws.RESTMessageV2();
    restMessage.setHttpMethod("post");
    restMessage.setEndpoint(url);
    restMessage.setRequestBody(JSON.stringify({}));
    var response = restMessage.execute();
    if(response.getStatusCode()!=200){
      gs.error('not getting a 200 response');
    }
}
``` 

This could easily be adapted to a business rule or scheduled job to verify sites are available.  One thing that would be interesting would be having this process check if the site is on the [Wayback machine](https://archive.org/web/web.php), if it is rewrite the link, if it is not, request it there and rewrite it to there.