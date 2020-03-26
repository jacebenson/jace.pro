---
title: "Fetch value from JSON"
date: 2018-08-12T10:34:58.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=b7603572db77130067a72926ca961910"
---
<p style="text-align: justify;">JSON (What it is?), JavaScript Object Notation, is a lightweight readable format for structuring data. It’s a, language independent, text format and a collection of key/value pairs which can easily transmit the data between a server and web application.</p>
<p style="text-align: justify;">I have learnt it’s simple and easy to extract the data from JSON when you understand the structure of it. So, sharing my thoughts and may be this could be useful for learners and other Community members to understand the basics and how it works.</p>
<p style="text-align: justify;"> </p>
<p style="text-align: justify;">Let’s start.. &#x1f60a; </p>
<p style="text-align: justify;"> </p>
<p style="text-align: justify;">Keys and Values are the main primary component of JSON. A <strong>key</strong> is <strong>always</strong> a string enclosed with quotes. A <strong>value</strong> can be a string, number, boolean expression, array, or object. A <strong>key/value pair,</strong> the key followed by a <strong>colon</strong> followed by the value. Key/value pairs are comma separated.</p>
<p style="text-align: justify;">Example: “Key” : “Value”, </p>
<p style="text-align: justify;"><em>Curly Brackets</em>: <strong>{ }</strong> represents an object of JSON string whereas <em>Square Brackets</em> : <strong>[ ] </strong>represents an array of values of JSON string. Example: </p>
<p style="text-align: justify;"><strong>Object</strong></p>
<pre class="language-markup"><code>&#34;Key1&#34; : {                                      
  &#34;Key2&#34; : &#34;Value2&#34;
}</code></pre>
<p style="text-align: justify;">This is also an example of nested key/value. The key/value pair &#34;Key2&#34; : &#34;Value2&#34; is nested inside another key/value pair.</p>
<p style="text-align: justify;"> </p>
<p style="text-align: justify;"><strong>Array</strong></p>
<pre class="language-markup"><code>&#34;Key1&#34; : {
  &#34;Key2&#34; : &#34;Value2&#34;,
  &#34;Key3&#34; : [ &#34;Value31&#34;, &#34;Value32&#34; ]
}</code></pre>
<p style="text-align: justify;">Key3 has values in an array format. The index of first value will start with zero (as per the array standards).</p>
<p style="text-align: justify;"><a href="https://www.w3schools.com/js/js_json_stringify.asp" rel="nofollow"><br />JSON.stringify()</a> helps to convert an object or an array of JSON into string format before sending the data. Example</p>
<p style="text-align: justify;">If you print below code in background script you will get result as <em><strong>[object Object]</strong>, </em>the same result can also be obtain if you do not provide the correct key name <strong>or</strong> wrong index pointer for an array which does not exist.</p>
<pre class="language-markup"><code>var jsonObj &#61; { &#34;key&#34; : &#34;value&#34;};
gs.print(jsonObj); </code></pre>
<p style="padding-left: 30px; text-align: justify;"> </p>
<p style="text-align: justify;">but, if you print after converting the JSON object into string using stringify(), you will be able to print the result as a string:</p>
<pre class="language-markup"><code>var jsonObj &#61; { &#34;key&#34; : &#34;value&#34; };
gs.print(JSON.stringify(jsonObj));</code></pre>
<p style="padding-left: 30px; text-align: justify;"> </p>
<p style="text-align: justify;">Let’s see an example how to navigate to get the value of particular key by parsing the JSON but before that it’s always good to <strong>Format the JSON in pretty format</strong> (if required) for better user readability and that can be done by using <strong>JSON.stringify(variable name, undefined, 2),</strong> that gives JSON in structured format (as shown in below example). The structured formatted JSON provides an understanding how to dot-walk or use array indexes to extract the value from JSON. </p>
<p style="text-align: justify;"><strong>Example:</strong></p>
<pre class="language-markup"><code>var jsonObject &#61; { &#34;key1&#34;: “value1”, &#34;array1&#34;: [ { &#34;key2&#34;: “value2” }, { &#34;key3&#34;: “value3”}]};
JSON.stringify(jsonObject, undefined, 2);</code></pre>
<p style="padding-left: 30px; text-align: justify;"><strong> </strong></p>
<p style="text-align: justify;"> <strong><u>Result:</u></strong></p>
<pre class="language-markup"><code>{
	&#34; key1&#34;:” value1”,
		&#34; array1&#34;: [
			{
				&#34; key2&#34;: “value2”
			},
			{
				&#34; key3&#34;: “value3”
			}
		]
}</code></pre>
<p style="text-align: justify;"> </p>
<p style="text-align: justify;"><strong>Use Case <span style="text-decoration: underline;">A</span></strong> </p>
<p style="text-align: justify;">If there is only one value in each Columns and Rows for the table then simply just by doing dot-walking to reach attributes will give the result.</p>
<pre class="language-markup"><code>var getData &#61; [];
var obj &#61; {};
var payload &#61; {
            &#34;SearchResult&#34;: {
                        &#34;tables&#34;: {
                                    &#34;name&#34;: &#34;PrimaryResult&#34;,
                                    &#34;columns&#34;: {&#34;name&#34;: &#34;SID&#34;, &#34;type&#34;: &#34;string&#34;},
                                    &#34;rows&#34;: &#34;abcdefgh-ijkl-mnop-qrst-123456789&#34;,
                        },
            },
};

obj[payload.SearchResult.tables.columns.name] &#61; payload.SearchResult.tables.rows;        
getData.push(obj);
var finalResult &#61; JSON.stringify(getData);
gs.print(finalResult);
</code></pre>
<p style="text-align: justify;"><strong> </strong></p>
<p style="text-align: justify;"><strong><u>Result:</u></strong>  </p>
<pre class="language-markup"><code>*** Script: [{&#34;SID&#34;:&#34;abcdefgh-ijkl-mnop-qrst-123456789&#34;}]</code></pre>
<p style="text-align: justify;"> </p>
<p style="text-align: justify;"><strong>Key Points: </strong></p>
<ol style="text-align: justify;"><li>To fetch value from the nested object, use the dot-walking followed by the key name.</li></ol>
<p style="padding-left: 60px; text-align: justify;">To get the column named <em>SID</em>: payload.SearchResult.tables.columns.name<br />To get the row value: payload.SearchResult.tables.rows    </p>
<ol style="text-align: justify;" start="2"><li><strong>var obj &#61; {}; obj[Key] &#61; “value”</strong> : This <strong>syntax</strong> will create the <strong>Key name dynamically</strong> with result as {“Key” : “Value”}.</li><li>Use the <a href="https://www.w3schools.com/js/js_json_parse.asp" rel="nofollow">JSON.parse()</a> to convert the data in JavaScript object if payload variable is in string.</li></ol>
<p style="text-align: justify;"> </p>
<p style="text-align: justify;"><strong>Use Case <span style="text-decoration: underline;">B</span></strong> </p>
<p style="text-align: justify;">If there are multiple values (in an Array) in each columns and rows for the table then simple just dot-walking to attribute will not give the result. Looping through array is required to fetch the value.</p>
<pre class="language-markup"><code>var payload, i, j, m;
var payload &#61; {
	&#34;SearchResult&#34;: {
		&#34;tables&#34;: [
			{
				&#34;name&#34;: &#34;PrimaryResult&#34;,
				&#34;columns&#34;: [
					{&#34;name&#34;: &#34;SID&#34;,
					 &#34;type&#34;: &#34;string&#34;},
					{&#34;name&#34;: &#34;Machine&#34;,
					 &#34;type&#34;: &#34;string&#34;},
					{&#34;name&#34;: &#34;Location&#34;,
					 &#34;type&#34;: &#34;string&#34;},
				],
				&#34;rows&#34;: [
					[
						&#34;abcdefgh-ijkl-mnop-qrst-123456789&#34;,
						&#34;SERVERSJ01&#34;,
						&#34;San Jose&#34;,
					],
					[
						&#34;abcdefgh-ijkl-mnop-qrst-987654321&#34;,
						&#34;SERVERNY01&#34;,
						&#34;New York&#34;,
					],
				]
			},
		]
	},
};

var getData &#61; [];
for (i in payload.SearchResult.tables) { // loop through the tables to fetch the data from columns and rows
	for (j in payload.SearchResult.tables[i].rows) {
		var obj &#61; {};
		for(m in payload.SearchResult.tables[i].columns){                      
			var columnName &#61; payload.SearchResult.tables[i].columns[m].name.toString();      
			//Creates the key name in key/value pair dynamically.      
			obj[columnName] &#61; payload.SearchResult.tables[i].rows[j][m].toString();    
		}
		getData.push(obj);
	}
}

var finalResult &#61; JSON.stringify(getData, undefined, 2);
gs.print(finalResult);
</code></pre>
<p style="text-align: justify;"> </p>
<p style="text-align: justify;"><strong><u>Result:</u></strong></p>
<pre class="language-markup"><code>*** Script: [
  {
    &#34;SID&#34;: &#34;abcdefgh-ijkl-mnop-qrst-123456789&#34;,
    &#34;Machine&#34;: &#34;SERVERSJ01&#34;,
    &#34;Location&#34;: &#34;San Jose&#34;
  },
  {
    &#34;SID&#34;: &#34;abcdefgh-ijkl-mnop-qrst-987654321&#34;,
    &#34;Machine&#34;: &#34;SERVERNY01&#34;,
    &#34;Location&#34;: &#34;New York&#34;
  }
]</code></pre>
<p style="text-align: justify;"> </p>
<p style="text-align: justify;"><strong>Key Points:</strong></p>
<ol style="text-align: justify;"><li>To fetch the value from an array, loop through the objects.</li><li>If there are multiple arrays within array then loop through array with the corresponding indexes to fetch the value, if required.</li></ol>
<p style="padding-left: 60px; text-align: justify;">obj[columnName] &#61; payload.SearchResult.tables[i].<strong>rows[j][m].</strong>toString(); </p>
<p style="text-align: justify; padding-left: 90px;"><em>The variable name — payload.</em></p>
<p style="text-align: justify; padding-left: 90px;"><em>Inside that, to access the members of tables use [&#34;SearchResult.tables&#34;].</em></p>
<p style="text-align: justify; padding-left: 90px;"><em>Tables contains an array populated by objects, to access the object inside the array used [i], since here it has only 1 array so index 0 can also be used, if there are multiple array then loop through that.</em></p>
<p style="text-align: justify; padding-left: 90px;"><em>Inside table array, to access the nested rows array’s values according to column index, used [j][m] which represents the particular rows value corresponding to respective column index.</em> </p>
<p style="text-align: justify;"><strong>In Short</strong>:</p>
<p style="text-align: justify;">Format the JSON in readable format (if needed).</p>
<p style="text-align: justify;">Navigate to JSON object using dot-walking, if there are arrays in nested object then loop through the array to parse nested objects/array to fetch the values using respective indexes followed by the Key name.</p>
<p style="text-align: justify;">Save the values into an object then push the object into an array. Use the JSON.stringify() method to convert object/array into string to send it further processing.</p>
<p style="text-align: justify;"> </p>
<p style="text-align: justify;">I will keep updating the content with different scenarios as and when I get more experience in this subject to share also as per your valuable feedback and suggestions.<img src="53458e7edbf7130067a72926ca9619ba.iix" width="24" height="23" /> </p>
<p style="text-align: justify;">Thank you!</p>