---
title: "Variable Information of Catalog Item in Question and Value format"
date: 2018-12-22T12:43:50.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=d302b91ddb2a23009540e15b8a9619fa"
---
<p>Hello,</p>
<p>https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0714632.<br />https://community.servicenow.com/community?id&#61;community_question&amp;sys_id&#61;8fc10749db2aef806c1c02d5ca9619fb</p>
<p>There is an issue reported to get label of variable using getGlideObject API, so I have created below utility which gives catalog item variable information in Quenstion and Value format</p>
<p> </p>
<p><img src="3d02bd11db6a23009540e15b8a9619dc.iix" /></p>
<p><img src="f6e1b911db6a23009540e15b8a96195d.iix" /></p>
<pre class="language-javascript"><code>var UCatalogVariableInfo &#61; Class.create();
UCatalogVariableInfo.prototype &#61; {
    initialize: function() {
    	this.excludedType &#61; [&#39;12&#39;,&#39;19&#39;,&#39;20&#39;,&#39;24&#39;,&#39;11&#39;,&#39;14&#39;,&#39;15&#39;,&#39;17&#39;,&#39;23&#39;,&#39;25&#39;];
    	this.aru &#61; new ArrayUtil();
    },

	getVariableInformation : function (grRec) {
		var variableNameLabel &#61; {};
		var variableInfo &#61; {};

		variableNameLabel &#61; this.getVariableNameLablePair(grRec);
		
		for ( var v in variableNameLabel) {
			variableInfo[variableNameLabel[v]] &#61; grRec.variables[v].getDisplayValue();
		}
		
		return variableInfo;
	},

	getVariableNameLablePair : function (grRec) {
		var variableHash &#61;  this.getVariables(grRec);
		return variableHash;
	},

	getVariables : function (grRec) {
	var lookupHash &#61; {};
		var variableSetSWithItem &#61; this.getVariableSetsForItem(grRec);

		var gr &#61; new GlideRecord(&#34;item_option_new&#34;);
		gr.addQuery(&#34;cat_item&#34;, grRec.getValue(&#34;cat_item&#34;)).
			addOrCondition(&#34;variable_set&#34;, &#34;IN&#34;, variableSetSWithItem);
		gr.query();

		while (gr.next()) {
			if ( this.aru.indexOf(this.excludedType, gr.getValue(&#34;type&#34;)) &#61;&#61; -1 ) {
				lookupHash[gr.getValue(&#34;name&#34;)] &#61; gr.getValue(&#34;question_text&#34;);
			}
		}

		return lookupHash;
	
	},

	getVariableSetsForItem : function (grRec) {

		var set &#61; [];

		var setItem &#61; new GlideRecord(&#34;io_set_item&#34;);
		setItem.addQuery(&#34;sc_cat_item&#34;, grRec.getValue(&#34;cat_item&#34;));
		setItem.query();

		while (setItem.next()) {
			set.push(setItem.getValue(&#34;variable_set&#34;));
		}

		return set;
	},

    type: &#39;UCatalogVariableInfo&#39;
};</code></pre>