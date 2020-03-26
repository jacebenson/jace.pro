---
title: "Create an attachment with submitted variables as its content"
date: 2018-08-16T15:25:38.000Z
authors: ["Jaspal Singh"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=24595f84db886b40fece0b55ca9619a5"
---
<p>Not sure how often we come across a request where we need get list of variables submitted for a request to be placed in a file to be auto generated (possibly xls, xlsx etc. format) as an attachment &amp; should be attached to the Requested item submitted.</p>
<p>We did had something similar to be done for an request item which was achieved by using the below snippet in the Runscript activity of the workflow which was associated directly to the Begin activity for the item.</p>
<p>All that is required is to <strong>retrieve</strong> the<strong> list of variables</strong> &amp; then use the <strong>Write</strong> functionality of <strong>GlideSysAttachment</strong> API class.</p>
<pre class="language-markup"><code>var varquestion&#61;&#39;&#39;;
var varanswer&#61;&#39;&#39;;
var itemjoin&#61;&#34;&#34;;
var itemquestion &#61; &#34;&#34;;
var itemanswer&#61;&#39;&#39;;
var v;

/* Put all variable values and labels from the variable pool into an array */

var sortedArray &#61; sortVariables(current.variables);

for (var i in sortedArray) {
    v &#61; current.variables[sortedArray[i].index];
    /* Only include non-empty variables, and exclude Label and Container variables */
    if (v !&#61; &#39;&#39; &amp;&amp; v !&#61; &#39;false&#39; &amp;&amp; v.getGlideObject().getQuestion().type !&#61; 11 &amp;&amp; v.getGlideObject().getQuestion().type !&#61; 19 &amp;&amp; v.getGlideObject().getQuestion().type !&#61; 20) { 
                        itemquestion &#43;&#61; v.getGlideObject().getQuestion().getLabel() &#43; &#34;\t&#34;;
                        itemanswer&#43;&#61;v.getDisplayValue()&#43;&#34;\t&#34;;
    }
}

varquestion &#43;&#61; itemquestion&#43;&#34;\t&#34;;
varanswer &#43;&#61;&#34;\n&#34;&#43;itemanswer;
var finaloutput&#61;varquestion&#43;varanswer;

function sortVariables ( variableArray ){
                var sortedVariables &#61; [];
                var count &#61; 0;
                for ( var i in variableArray ){
                                var object &#61; {index:i, order:variableArray[i].getGlideObject().getQuestion().order};
                                sortedVariables[count] &#61; object;
                                count&#43;&#43;;
                }
                sortedVariables.sort( function compare(a,b){return a.order - b.order});
                return sortedVariables;
}

//converts the file to xls format with file name as RITM number (considering workflow is on RITM table) &amp; is attached to the RITM record
var attachfile &#61; new GlideSysAttachment();   
attachfile.write(current, current.number&#43;&#39;.xls&#39;,&#39;test/csv&#39;, finaloutput);
</code></pre>
<p>This would then print data in Excel in format as below</p>
<p><img src="a08557c0db486b40fece0b55ca9619a2.iix" /></p>
<p>Where Row 1 represents all Variables questions while Row 2 containing the values (answers) for the variables submitted.</p>
<p> </p>
<p>If at all data is required to be printed in the format as below</p>
<p><img src="07061744db486b40fece0b55ca961971.iix" /></p>
<p>with all Variable questions in Column A &amp; its corresponding values in column B (something in tabular form) then all you need is to use the below snippet</p>
<pre class="language-markup"><code>var varquestion&#61;&#39;&#39;;
var varanswer&#61;&#39;&#39;;
var itemjoin&#61;&#34;&#34;;
var itemquestion &#61; &#34;&#34;;
var itemanswer&#61;&#39;&#39;;
var v;

/* Put all variable values and labels from the variable pool into an array */

var sortedArray &#61; sortVariables(current.variables);

for (var i in sortedArray) {
    v &#61; current.variables[sortedArray[i].index];
    /* Only include non-empty variables, and exclude Label and Container variables */
    if (v !&#61; &#39;&#39; &amp;&amp; v !&#61; &#39;false&#39; &amp;&amp; v.getGlideObject().getQuestion().type !&#61; 11 &amp;&amp; v.getGlideObject().getQuestion().type !&#61; 19 &amp;&amp; v.getGlideObject().getQuestion().type !&#61; 20) {
                        itemquestion &#43;&#61; v.getGlideObject().getQuestion().getLabel() &#43; &#34;\t&#34;&#43; v.getDisplayValue()&#43;&#34;\n&#34;; 
    }
}

varquestion &#43;&#61; itemquestion&#43;&#34;\n&#34;;
var finaloutput&#61;varquestion;

function sortVariables ( variableArray ){
                var sortedVariables &#61; [];
                var count &#61; 0;
                for ( var i in variableArray ){
                                var object &#61; {index:i, order:variableArray[i].getGlideObject().getQuestion().order};
                                sortedVariables[count] &#61; object;
                                count&#43;&#43;;
                }
                sortedVariables.sort( function compare(a,b){return a.order - b.order});
                return sortedVariables;
}

//converts the file to xls format with file name as RITM number (considering workflow is on RITM table) &amp; is attached to the RITM record
var attachfile &#61; new GlideSysAttachment();   
attachfile.write(current, current.number&#43;&#39;.xls&#39;,&#39;test/csv&#39;, finaloutput);
</code></pre>
<p> </p>
<p>Thanks,</p>
<p>Jaspal Singh</p>
<p> </p>
<p> </p>