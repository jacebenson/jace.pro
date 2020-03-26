---
title: "Get all variables for a given catalog item"
date: 2016-08-10T15:56:40.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=bd6eeeaddbd0dbc01dcaf3231f96195a"
---
<p>Catalog Variables are stored in a table <em>item_option_new</em>.</p>
<p>The variables are associated either to a catalog item or to a variable set.</p>
<p>The association between catalog item and variable set is stored in <em>io_set_item.</em></p>
<p> </p>
<p>Create a Database view on the two tables like this</p>
<p> </p>
<p><img class="jive-image image-4" style="max-width: 1200px; max-height: 900px;" src="5332cdc2dbdc9304b322f4621f9619b5.iix" /></p>
<p> </p>
<p>Expose the following fields in each table</p>
<p><strong>Table: item_option_new</strong></p>
<p><strong><img class="image-5 jive-image" style="max-width: 1200px; max-height: 900px;" src="482f1886db5c1f048c8ef4621f96198e.iix" /></strong></p>
<p> </p>
<p><strong>Table: io_set_item</strong></p>
<p><strong>         <img class="image-6 jive-image" style="max-width: 1200px; max-height: 900px;" src="542cf335db94d3041dcaf3231f9619b4.iix" /></strong></p>
<p> </p>
<p>Note the whereclause.</p>
<p> </p>
<p>Try the database view and have the following filter and list layout. (Note: The two Catalog Item comes from the different tables in the view)</p>
<p> </p>
<p><img class="image-7 jive-image" style="max-width: 1200px; max-height: 900px;" src="03dedd4adb54d7041dcaf3231f961923.iix" /></p>
<p> </p>
<p>Note: Multi Row Variable Set Values cant be achieved by this method </p>
<p> </p>
<p>Another solution is to get it via query. Here is a simple query to do the same.</p>
<p> <a href="https://docs.servicenow.com/bundle/madrid-application-development/page/script/server-scripting/concept/c_ScriptableServiceCatalogVariables.html" rel="nofollow">https://docs.servicenow.com/bundle/madrid-application-development/page/script/server-scripting/concept/c_ScriptableServiceCatalogVariables.html</a></p>
<p> </p>
<pre class="language-javascript"><code>var gr &#61; new GlideRecord(&#39;sc_req_item&#39;); 
if (gr.get(&#39;635a1f5387320300e0ef0cf888cb0b73&#39;)) { 
    var variables &#61; gr.variables.getElements(); 
    for (var i&#61;0;i&lt;variables.length;i&#43;&#43;) { 
        var question &#61; variables[i].getQuestion(); 
        gs.log(question.getLabel() &#43; &#34;:&#34; &#43; question.getValue()) 
    } 
}</code></pre>
<p>From New York to get values of table variable</p>
<pre class="language-javascript"><code>var gr &#61; new GlideRecord(&#39;sc_req_item&#39;);
gr.get(&#39;02c38dcd87013300e0ef0cf888cb0bb2&#39;);

var vars &#61; gr.variables.getElements(true); //Get Table Variables as well

for (var i&#61;0; i&lt;vars.length; i&#43;&#43;) {
	var v &#61; vars[i];
	if (v.isMultiRow()) {
		var rows &#61; v.getRows();
		for (var j&#61;0; j&lt;v.getRowCount(); j&#43;&#43;) {
			var row &#61; rows[j];
			var cells &#61; row.getCells();
			for (var k&#61;0; k&lt;cells.length; k&#43;&#43;) {
				var cell &#61; cells[k];
				gs.info(cell.getLabel() &#43; &#34;:&#34; &#43; cell.getCellDisplayValue())
			}
		}
	}
}</code></pre>
<p> </p>
<p> </p>