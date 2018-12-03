---
title: Create Item from Script
date: 2018-05-12
layout: post
tags:
 - script
---

I made this a while ago to save me some time of having to interact with the GUI.
Works well enough, and will get updates to become a scoped app or script include...  
At this time it's a start.

<!--more-->

Toss it in a fix script and adjust the bottom to your details while in the correct scope/update set.
Then you just have to figure out containers.

```js
function createCatalog(name) {
    /*
     * Expecting a string (name)
     */
    var catalogExists = new GlideRecord('sc_catalog');
    catalogExists.addQuery('title', name);
    catalogExists.query();
    if (catalogExists.next()) {
        return catalogExists.sys_id;
    } else {
        var sc_catalog = new GlideRecord('sc_catalog');
        sc_catalog.initialize();
        sc_catalog.description = '';
        //sc_catalog.sys_name = name;
        sc_catalog.title = name;
        sc_catalog.active = true;
        return sc_catalog.insert();
    }
}

function createCategory(name, catalogId) {
    /*
     * Expecting a string (name)
     * Expecting a string (catalogId)
     */
    var categoryExists = new GlideRecord('sc_catalog');
    categoryExists.addQuery('title', name);
    categoryExists.query();
    if (categoryExists.next()) {
        return categoryExists.sys_id;
    } else {
        var sc_category = new GlideRecord('sc_category');
        sc_category.initialize();
        sc_category.sc_catalog = catalogId;
        sc_category.sys_name = name;
        sc_category.title = name;
        return sc_category.insert();
    }
}

function createItem(itemObj, categoryId, catalogId) {
    /*
     * Expecting an object (itemObj)
     * name
     * short_description
     * .
     * Expecting a string (categoryId)
     * Expecting a string (catalogId)
     */
    var itemExists = new GlideRecord('sc_cat_item');
    itemExists.addQuery('name', itemObj.name);
    itemExists.addQuery('category', categoryId);
    itemExists.addQuery('sc_catalogs', catalogId);
    itemExists.query();
    if (itemExists.next()) {
        return itemExists.sys_id;
    } else {
        var sc_cat_item = new GlideRecord('sc_cat_item');
        sc_cat_item.initialize();
        sc_cat_item.category = categoryId;
        sc_cat_item.sc_catalogs = catalogId;
        sc_cat_item.name = itemObj.name;
        sc_cat_item.short_description = itemObj.short_description;
        sc_cat_item.description = itemObj.short_description;
        return sc_cat_item.insert();
    }
}

function createVariables(varArr, itemId) {
    /*
     * Expecting an array of object containing;
     * name (String)
     * question_text (String)
     * order (Number)
     * value (String)
     * type (Number)
     * *  1 = Yes/No
     * *  2 = MultiLine Text
     * *  3 = Multiple Choice (required "choices" = array {"name","value","order"})
     * *  4 = Numeric Scale (optional "numericScaleMin", "numericScaleMax")
     * *  5 = Select Box (required "choices" = array {"name","value","order"})
     * *  6 = Single Line Text
     * *  7 = Checkbox
     * *  8 = Reference (requires "table", "qual")
     * *  9 = Date
     * * 10 = Date/Time
     * * 11 = Label
     * * 12 = Break
     * * 13 = UNLISTED
     * * 14 = Macro
     * * 15 = UI Page
     * * 17 = Macro with Label
     * * 18 = Lookup Select Box (requires "table", "qual")
     * * 19 = Container Start
     * * 20 = Container End
     * * 21 = List Collector
     * * 22 = Lookup Multiple Choice
     * below are the additional required sometimes things
     * table (string)
     * choices (array) of {name, value, order}
     * qual (string)
     */
    if (typeof varArr.name === "string") {
        varArr = [varArr];
    }
    varArr.map(function(varObj){
        var variableSysid;
        var variableExists = new GlideRecord('item_option_new');
        variableExists.addQuery('name', varObj.name);
        variableExists.addQuery('cat_item', itemId);
        if (variableExists.next()) {
            //return variableExists.sys_id;
            variableSysid = variableExists.sys_id;
        } else {
            var variable = new GlideRecord('item_option_new');
            variable.initialize();
            variable.cat_item = itemId;
            variable.name = varObj.name.split(' ').join('_');
            if (typeof varObj.question_text === 'undefined') {
                //varObj.question_text = varObj.name.replace(/_/g, ' ');
                var arrayOfQs = varObj.name.split(' ');
                varObj.question_text = '';
                arrayOfQs.map(function(question){
                  varObj.question_text += question.charAt(0).toUpperCase();
                  varObj.question_text += question.substr(1, question.length);
                  varObj.question_text += ' ';
                });
            }
            variable.question_text = varObj.question_text;
            variable.sys_name = varObj.question_text;
            if (typeof varObj.order === 'undefined') {
                var sc_item_option = new GlideRecord('item_option_new');
                sc_item_option.addQuery('cat_item', itemId);
                sc_item_option.orderByDesc('order');
                sc_item_option.setLimit(1);
                sc_item_option.query();
                if (sc_item_option.next()) {
                    varObj.order = parseInt(sc_item_option.order) + 100;
                } else {
                    varObj.order = 100;
                }
            }
            variable.order = varObj.order;
            variable.type = varObj.type;
            variable.cat_item = itemId;
            if (typeof varObj.value === 'undefined') {
                varObj.value = '';
            }
            variable.default_value = varObj.value;
            variable.default_html_value = varObj.value;
            variable.reference = varObj.table;
            variable.lookup_table = varObj.table;
            variable.list_table = varObj.table;
            variable.reference_qual = varObj.qual;
            variable.reference_qual_condition = varObj.qual;
            variableSysid = variable.insert();
            //return variable.insert();
        }
        gs.print(typeof varObj.choices);
        gs.print(typeof varObj.choices !== 'undefined');
        if (typeof varObj.choices !== 'undefined') {
            gs.print('choices len: ' + varObj.choices.length);
            varObj.choices.map(function(option){
                var choice = new GlideRecord('question_choice');
                choice.initialize();
                choice.question = variableSysid;
                choice.text = option.text;
                choice.value = option.value;
                choice.order = option.order;
                choice.insert();
            });
        }
    });
}

function createUIPolicy(itemId) {
    var policy = new GlideRecord('catalog_ui_policy');
    policy.short_description = 'Initial UI Policy';
    policy.applies_to = 'item';
    policy.catalog_item = itemId;
    var policyId = policy.insert();
    var sc_item_option = new GlideRecord('item_option_new');
    sc_item_option.addQuery('cat_item', itemId);
    sc_item_option.orderByDesc('order');
    sc_item_option.query();
    while (sc_item_option.next()) {
        var policyAction = new GlideRecord('catalog_ui_policy_action');
        policyAction.catalog_item = itemId;
        policyAction.ui_policy = policyId;
        policyAction.catalog_variable = 'IO:' + sc_item_option.sys_id;
        policyAction.insert();
    }
}


var catalog = createCatalog('Custom Catalog');
var category = createCategory('Categories are Silly', catalog);
var item = createItem({
    name: 'Burger Request',
    short_description: 'Request a burger'
}, category, catalog);
var variables = [
    {
        name: 'How delicious should it be?',
        type: 5,
        choices : [{
            name:'Disgusting',
            value:'disgusting',
            order:'100'
        },{
            name:'Tolerable',
            value:'tolerable',
            order:'200'
        },{
            name:'Average',
            value:'average',
            order:'300'
        },{
            name:'Good',
            value:'good',
            order:'400'
        }{
            name:'Great',
            value:'great',
            order:'500'
        },]
    },{
        name: 'Special Instructions',
        type: 6
    }
    ];


createVariables(variables, item);
createUIPolicy(item);
```
