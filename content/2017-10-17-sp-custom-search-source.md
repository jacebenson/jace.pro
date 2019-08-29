---
aliases:
- '/sp-custom-search-source/'
date: '2017-10-17'
keywords:
- sp
layout: post
tags:
- service portal
- search
title: Service Portal Add a Custom Search Source
---

Now I'm not sure the *best* way to do this but I did find that this is
probably they way I'll push for this.

We have multiple knowledge bases at my work and as such the default
search is very limited. I wanted to add to the type ahead a result like
"Search all KB's for `your term here`".

I looked at the search sources and found it has a scripted bit but it's
[not documented
well](https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/build/service-portal/task/add-table-search-source.html).

![Finished Product](/uploads/sp-custom-search-source.png)

## OOB Search Source

So first lets look at the out of box "Service Catalog" search source,
specifically it's data fetch (shows up when you select,
`Is scripted source`)

``` {.js}
(function(query) {
    var results = [];
    //Here goes the logic. Compute results however you want!
    if (!gs.isLoggedIn())
        return results;

    var sc = new GlideRecord('sc_cat_item');
    sc.addQuery('123TEXTQUERY321', query);
    sc.addQuery('active',true);
    sc.addQuery('no_search', '!=', true);
    sc.addQuery('visible_standalone', true);
    sc.addQuery('sys_class_name', 'NOT IN', 'sc_cat_item_wizard');
    var portalValue = $sp.getValue('sc_catalog');
    if (portalValue)
        sc.addQuery('sc_catalogs', portalValue);
    sc.query();
    var catCount = 0;
    while (sc.next() && catCount < data.limit) {
        if (!$sp.canReadRecord(sc))
            continue;

        var item = {};
        item.type = "sc";
        item.page = "sc_cat_item";

        if (sc.getRecordClassName() == "sc_cat_item_guide")
            item.page = "sc_cat_item_guide";
        else if (sc.getRecordClassName() == "sc_cat_item_content") {
            var gr = new GlideRecord('sc_cat_item_content');
            gr.get(sc.getUniqueValue());
            $sp.getRecordValues(item, gr, 'url,content_type,kb_article');
            item.type = "sc_content";
        }
        else
            item.type = "sc";

        $sp.getRecordDisplayValues(item, sc, 'name,short_description,picture,price,sys_id,sys_class_name');
        item.score = parseInt(sc.ir_query_score.getDisplayValue());
        item.label = item.name;
        item.primary = item.name;

        //calculating URL
        if (item.type == "sc")
            item.url = '?id=' + item.page + '&sys_id=' + item.sys_id;
        if (item.type == "sc_content") {
            if (item.content_type == "kb")
                item.url = '?id=kb_article&sys_id=' + item.kb_article;
            else if (item.content_type == "external")
                item.target = '_blank';
            else
                item.url = '?id=sc_cat_item&sys_id=' + item.sys_id;
        }
        if (item.type == "sc_guide")
            item.url = '?id=sc_cat_item_guide&sys_id=' + item.sys_id;

        results.push(item);
        catCount++;
    }

    return results;
})(query);
```

There's a lot going on there, but what I picked out was, it returns an
array of objects where the object has the following properties;

``` {.js}
{
    score:"-100",
    label:resultMsg,
    primary:resultMsg,
    url: "?id=kb_search&spa=1&query=" + query,
    //target: "",
    //page:"kb_search"
}
```

## Score

This seems pretty obvious to me, a integer to determine order in the
results

## Label and Primary

I'm not sure the difference but this seems to be what shows up as text
in the result.

## URL

This is where the browser will go on click.

## Target

I assume this is the a tag's `target` attribute, so if you want a new
tab each time use a value of `_blank`.

## Page

I am not sure if this does anything on it's own, in the out of box
widget they use this in the defined url.

## Search Source I made

Below is my search source script.

``` {.js}
(function(query) {
    var resultMsg = "Search KB for " + query;
    var results = [{
        score:"-100",
        label:resultMsg,
        primary:resultMsg,
        url: "?id=kb_search&spa=1&query=" + query,
        //target: "",
        //page:"kb_search"
    }];
    return results;
})(query);
```

## Further Reading

[Community
Thread](https://community.servicenow.com/community/develop/blog/2017/03/29/using-scripted-search-sources-to-search-external-websites-and-applications)
