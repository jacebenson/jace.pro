---
date: '2018-12-02'
layout: post
title: 'Custom Rest Processor for Catalog (pre-sn sc api)'
---

A long time ago, before `sn_sc`, before Scripted Rest APIs, could only
use processors to make these things. My colleuges and I made one to meet
the needs of some other team.

I think it's still better than the out of box `sn_sc`, however since
Servicenow has their own I haven't maintained it.

In this post you'll see the code that was used to generate the responses
it is missing the actual processor code. However it literally just
called this script include below.

``` {.js}
//serviceObj - Script Include

/*global GlideGuid, Cart, Class, gs, GlideRecord, GlideAggregate*/
/*jslint nomen: true*/
var serviceObj = Class.create();
serviceObj.prototype = {
    baseUrl : 'https://' + gs.getProperty('instance_name') + '.service-now.com/',
    uses    : function () {
        'use strict';
        var baseUrl = 'https://' + gs.getProperty('instance_name') + '.service-now.com/',
            obj = {
                description: 'This endpoint allows administrators of Servicenow to provide their users a RESTful API for the catalo as there is not one today.  There are two functions this fills.  Easily reqeusting items over REST, and easily updating sc_cat_item or sc_tasks with variables.',
                features: {
                    item: 'The item api uses two methods, GET and POST.  A GET against service.do will result in an error as you need to specify the item you are asking about.  If you want all items send an endpoint of "/service.do?item=all".',
                    task: 'The task api uses two methods, GET and POST.  A GET against a task will return the task based on it\'s sys_id.  This includes the variables.  A POST against a task expects an object where it is defined to match the task.  e.g. {field:"value",field2:"value2",variables{variable_name1:"value3",variable_name2:"value4"}}'
                },
                getstarted: {
                    all_items   : baseUrl + 'service.do?item=all',
                    item        : baseUrl + 'service.do?item=SOMESYS_ID',
                    task        : baseUrl + 'service.do?task=SOMESYS_ID'
                }
            };
        return obj;
    },
    getCatalogList: function () {
        'use strict';
        this.retVal = {
            catalog_items : []
        };
        this.retVal.description = 'Active ServiceNow Catalog Items';
        var items = new GlideRecord('sc_cat_item');
        items.addQuery('active', true);
        items.query();
        while (items.next()) {
            this.retVal.catalog_items.push({
                name   : items.name.toString(),
                sys_id : items.sys_id.toString(),
                number : items.u_number.toString(),
                link   : this.baseUrl + 'service.do?item=' + items.sys_id.toString()
            });
        }

        return this.retVal;
    },
    _getAggregate: function (table, query, field) {
        'use strict';
        var retArr = [],
            gr = new GlideAggregate(table);
        gr.addEncodedQuery(query);
        gr.addQuery(field, '!=', '');
        //this.log(gr.getEncodedQuery());
        gr.addAggregate('COUNT', field);
        gr.query();
        while (gr.next()) {
            retArr.push({
                value   : gr[field].toString(),
                display : gr[field].getDisplayValue()
            });
        }
        return retArr;
    },
    
    _getDisplayValue: function (table) {
        'use strict';
        var query = 'name=' + table + '^display=true',
            gr = new GlideRecord('sys_dictionary'),
            fields,
            i,
            len,
            ge,
            ed;
        gr.addEncodedQuery(query);
        gr.setLimit(1);
        gr.query();
        if (gr.next()) {
            return gr.element.toString();
        }
      
        // no display value found so query one record and determine which to use
        // by the fields on that one record
        gr = new GlideRecord(table);
        gr.setLimit(1);
        gr.query();
        if (!gr.next()) {
            return '';
        }
      
        fields = gr.getFields();
        for (i = 0, len = fields.size(); i < len; i = i + 1) {
            ge = fields.get(i);
            ed = ge.getED();
            if (ed.isDisplay()) {
                return ed.getName().toString();
            }
        }
      
        return '';
    },
    
    getCatalogItem: function (catalog_item_id) {
        'use strict';
        var scripts = this.getClientScripts(catalog_item_id),
            item,
            varquery,
            vsr,
            vars,
            table,
            options,
            expected_value,
            display_value,
            link,
            qual,
            objToPush,
            val,
            type;
        
        //Find the Catalog Item, get it, and all the variables and other important stuff, and return the object
        this.retVal = {};
        this.retVal.description = 'Specific description about a catalog item';

        item = new GlideRecord('sc_cat_item');
        if (item.get(catalog_item_id)) {
            this.retVal.catalog_item = [];
            this.retVal.catalog_item.push({
                name              : item.name.toString(),
                sys_id            : item.sys_id.toString(),
                number            : item.u_number.toString(),
                short_description : item.short_description.getDisplayValue()
            });
            this.retVal.examplePost = [];
            this.retVal.examplePost[0] = {};
            this.retVal.examplePost[0].sys_id = item.sys_id.toString();
            this.retVal.examplePost[0].vars = {};
            varquery = 'cat_item=' + item.sys_id.toString();

            vsr = new GlideRecord('io_set_item');
            vsr.addQuery('sc_cat_item', item.sys_id.toString());
            vsr.query();
            while (vsr.next()) {
                varquery += '^ORvariable_set.sys_id=' + vsr.variable_set.sys_id.toString();
            }
            varquery += '^typeNOT IN12,11,14,17,15^nameNOT LIKEwf_';
            
            // get the catalog variables
            // this will return the container variables
            vars = new GlideRecord('item_option_new');
            vars.addEncodedQuery(varquery);
            vars.orderBy('order');
            vars.query();
            
            if (vars.hasNext()) {
                this.retVal.vars = [];
            }
            while (vars.next()) {
                table = '';
                options = '';
                expected_value = '';
                display_value = '';
                link = '';
                type = vars.type.toString();
                qual = vars.reference_qual_condition.toString();
                if (type === '1') {//yes / no
                    options = [
                        {
                            display : 'Yes',
                            value   : 'Yes'
                        },
                        {
                            display : 'No',
                            value   : 'No'
                        }
                    ];
                }
                if (type === '7') {//checkbox
                    options = [
                        {
                            display : 'true',
                            value   : 'true'
                        },
                        {
                            display : 'false',
                            value   : 'false'
                        }
                    ];
                }
                if (type === '8') {//reference
                    table = vars.reference.toString();
                    expected_value = 'sys_id';
                    display_value = this._getDisplayValue(table);
                    link = this.baseUrl + 'api/now/table/';
                    link += table;
                                         
                    if (vars.use_reference_qualifier === 'advanced') {
                        qual = vars.reference_qual.toString();
                    }
                    if (qual.length > 0) {
                        link += '?sysparm_query=' + qual;
                    }
                }
                if (type === '21') { //list collector
                    table = vars.list_table.toString();
                    expected_value = 'sys_id,sys_id';
                    link = this.baseUrl + 'api/now/table/';
                    link += table;
                    if (qual.length > 0) {
                        link += '?sysparm_query=' + qual;
                    }
                }
                if (type === '18') { //if lookup select box
                    table = vars.lookup_table.toString();
                    expected_value = 'sys_id';
                    if (vars.lookup_value.toString !== '') {
                        expected_value = vars.lookup_value.toString();
                    }
                    link = this.baseUrl + 'api/now/table/';
                    link += table;
                    if (qual.length > 0) {
                        link += '?sysparm_query=' + qual;
                    }
                    options = this._getAggregate(table, qual, expected_value);
                }
                if (type === '5') { //select box
                    if (vars.choice_table.toString().length === 0) {
                        table = 'question_choice';
                        qual = 'question=' + vars.sys_id;
                        link = this.baseUrl + 'api/now/table/' + table;
                        if (qual.length > 0) {
                            link += '?sysparm_query=' + qual;
                        }
                        options = this._getAggregate(table, qual, 'value');
                    } else {
                        table = vars.choice_table.toString();
                        expected_value = vars.choice_field.toString();
                        link = this.baseUrl + 'api/now/table/';
                        link += table;
                        if (qual.length > 0) {
                            link += '?sysparm_query=' + qual;
                        }
                        options = this._getAggregate(table, qual, expected_value);
                    }
                }
                if (type === '3') { //multiple choice
                    table = 'question_choice';
                    qual = 'question=' + vars.sys_id;
                    expected_value = 'value';
                    link = this.baseUrl + 'api/now/table/';
                    link += table + '?sysparm_query=' + qual;
                }
                objToPush = {};
                if (vars.name.toString() !== '') {
                    objToPush.name = vars.name.toString();
                }
                //if (vars.order.toString() !== '') {
                objToPush.order = vars.order.toString();
                //}
                if (vars.question_text.toString() !== '') {
                    objToPush.label = vars.question_text.toString();
                }
                if (vars.type.toString() !== '') {
                    objToPush.type = vars.type.getDisplayValue();
                }
                if (link.toString() !== '') {
                    objToPush.link = link.toString();
                }
                if (options.toString() !== '') {
                    objToPush.options = options;
                }
                if (expected_value.toString() !== '') {
                    objToPush.reference_field_name = expected_value.toString();
                }
                if (display_value.toString() !== '') {
                    objToPush.reference_display_field_name = display_value.toString();
                }
                if (vars.default_value.toString() !== '') {
                    objToPush.default_value = vars.default_value.toString();
                }
                this.retVal.vars.push(objToPush);
                val = '';
                if (options[0]) {
                    val = options[0].value;
                } else {
                    val = '';
                }
                this.retVal.examplePost[0].vars[vars.name.toString()] = val;
            }

        } else {
            this.retVal.error = 'Cannot find Catalog Item';
            this.retVal.suggestion = 'Try /service.do?item=SYS_ID';
        }
        return this.retVal;
    },
    
    getClientScripts: function (catalog_item_id) {
        'use strict';
        var query = 'cat_item=' + catalog_item_id + '^active=true^type=onChange',
            gr = new GlideRecord('catalog_script_client'),
            catId,
            scripts = {};
        gr.addEncodedQuery(query);
        gr.query();

        while (gr.next()) {
            catId = gr.cat_variable.toString().substr(3);
            scripts[catId.toString()] = gr.script.toString();
        }

        return scripts;
    },
    
    debug: false,
    log: function (msg) {
        'use strict';
        if (this.debug) {
            gs.log(msg, 'ServiceCatalogApi');
        }
    },

    submitCatalogItem: function (itemArr) {
        'use strict';
        this.retVal = {};
        var cartId = GlideGuid.generate(null),
            cart = new Cart(cartId),
            x,
            item_sys_id,
            item,
            itemvar,
            rc,
            reqitem,
            link;
        this.log('cartId' + ': ' + cartId);
        for (x in itemArr) {
            if (itemArr.hasOwnProperty(x)) {
                item_sys_id = itemArr[x].sys_id.toString();
                item = cart.addItem(item_sys_id);
                for (itemvar in itemArr[x].vars) {
                    if (itemArr[x].vars.hasOwnProperty(itemvar)) {
                        cart.setVariable(item, itemvar, itemArr[x].vars[itemvar]);
                    }
                }
            }
        }
        //Build return message - req & ritms
        rc = cart.placeOrder();
        reqitem = new GlideRecord('sc_req_item');
        reqitem.addQuery('request.number', rc.number);
        reqitem.query();
        this.retVal.request = rc.number.toString();
        this.retVal.items = [];
        while (reqitem.next()) {
            //var link = this.baseUrl + 'api/now/table/sc_req_item';
            //link += '/' + reqitem.sys_id.toString();
            link = this.baseUrl + 'service.do?task=';
            link += reqitem.sys_id.toString();
            
            this.retVal.items.push({
                sys_id : reqitem.sys_id.toString(),
                number : reqitem.number.toString(),
                link   : link
            });
        }
        return this.retVal;
    },

    getTask: function (task_sys_id) {
        'use strict';
        this.retVal = {};
        var task = new GlideRecord('task'),
            className,
            actualTask,
            variables,
            variable,
            fields,
            field;
        if (task.get('sys_id', task_sys_id)) {
            className = task.sys_class_name;
            actualTask = new GlideRecord(className);
            if (actualTask.get('sys_id', task_sys_id)) {
                fields = {};
                for (field in actualTask) {
                    if (actualTask.hasOwnProperty(field)) {
                        if (field === 'variables') {
                            fields.variables = {};
                            for (variable in actualTask.variables) {
                                if (actualTask.variables.hasOwnProperty(variable)) {
                                    fields.variables[variable] = actualTask.variables[variable].toString();
                                }
                            }
                        } else {
                            fields[field] = actualTask[field].toString();
                        }
                    }
                }
                this.retVal[className] = fields;
            }
            return this.retVal;
        } else {
            this.retVal = {
                error       : 'Cannot find task.',
                suggestion  : 'Try /service.do?task=SYS_ID'
            };
        }
    },
    updateTask: function (payloadObj, task_sys_id) {
        'use strict';
        try {
            this.retVal = {};
            var task = new GlideRecord('task'),
                className,
                actualTask,
                field,
                variable,
                sc_tasks,
                tasks;
            if (task.get('sys_id', task_sys_id)) {
                className = task.sys_class_name;
                this.retVal[className] = payloadObj;
                actualTask = new GlideRecord(className);
                if (actualTask.get('sys_id', task_sys_id)) {
                    for (field in payloadObj) {
                        if (payloadObj.hasOwnProperty(field)) {
                            if (field === 'variables') {
                                for (variable in payloadObj.variables) {
                                    if (payloadObj.variables.hasOwnProperty(variable)) {
                                        actualTask.variables[variable] = payloadObj.variables[variable];
                                    }
                                }
                            } else {
                                actualTask.setValue(field, payloadObj[field]);
                            }
                        }
                    }
                    actualTask.update();
                    if (className === 'sc_task') {
                        this.retVal.actualTask = {
                            sys_id: task_sys_id,
                            request_item: {
                                number  : actualTask.number.toString(),
                                link    : this.baseUrl + 'service.do?sys_id=' + actualTask.request_item.sys_id.toString()
                            }
                        };
                    }
                    if (className === 'sc_req_item') {
                        sc_tasks = new GlideRecord('sc_task');
                        sc_tasks.addQuery('request_item', task_sys_id);
                        sc_tasks.orderByDesc('sys_created_on');
                        sc_tasks.query();
                        tasks = [];
                        while (sc_tasks.next()) {
                            tasks.push({
                                number: sc_tasks.number.toString(),
                                link    : this.baseUrl + 'service.do?sys_id=' + sc_tasks.sys_id.toString()
                            });
                        }
                        this.retVal.actualTask = {
                            sys_id: task_sys_id,
                            sc_tasks: [{
                                number  : actualTask.number.toString(),
                                link    : this.baseUrl + 'service.do?sys_id=' + actualTask.request_item.sys_id.toString()
                            }]
                        };
                    }
                }
            } else {
                this.retVal = {
                    error       : 'Cannot find task.',
                    suggestion  : 'Try /service.do?task=SYS_ID'
                };
            }
            return this.retVal;
        } catch (e) {
            return e;
        }
    },
    
    type: 'serviceObj'
};
```

Thanks Micheal Bahr and your mad curl skills for pulling this.
