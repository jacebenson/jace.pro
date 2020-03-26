---
title: "CSV to JSON Converter"
date: 2018-12-15T14:11:41.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ca038687db56a7009a64e15b8a96193e"
---
<p>Many a times we require to convert a CSV formatted data to JSON. This CSV data can come from CSV file inside ServiceNow or it may come from WebService response as well.</p>
<p>Below script Include will convert the CSV data and will return JSON formatted object out of it.</p>
<p>Enjoy CSV Parsing !!!</p>
<pre class="language-javascript"><code>var CSVtoJSON &#61; Class.create();
CSVtoJSON.prototype &#61; {
    initialize: function() {
		
	},
	
	/*
		&#64;parm1 : sys_id of attachment 
		return : JSON from CSV;
		reference : https://stackoverflow.com/questions/1293147/javascript-code-to-parse-csv-data
	*/

    getJSONFromCSVFile: function(sysId) {

        var attachmentGr &#61; this.getAttachmentGR(sysId);

        if (JSUtil.nil(attachmentGr)) {
            return;
        }

        var gsa &#61; new GlideSysAttachment();
        var bytesInFile &#61; gsa.getBytes(attachmentGr.table_name, attachmentGr.table_sys_id);
        var dataAsString &#61; Packages.java.lang.String(bytesInFile);

        dataAsString &#61; String(dataAsString);
        return this.getCSVtoJSON(dataAsString);

    },

    getCSVtoJSON: function(strData, strDelimiter) {
        strDelimiter &#61; (JSUtil.nil(strDelimiter)) ? &#34;,&#34; : strDelimiter;
        gs.print(strDelimiter);
        // Create a regular expression to parse the CSV values.
        var objPattern &#61; new RegExp(
            (
                // Delimiters.
                &#34;(\\&#34; &#43; strDelimiter &#43; &#34;|\\r?\\n|\\r|^)&#34; &#43;
                // Quoted fields.
                &#34;(?:\&#34;([^\&#34;]*(?:\&#34;\&#34;[^\&#34;]*)*)\&#34;|&#34; &#43;
                // Standard fields.
                &#34;([^\&#34;\\&#34; &#43; strDelimiter &#43; &#34;\\r\\n]*))&#34;
            ),
            &#34;gi&#34;
        );
        var arrMatches &#61; null;
  
        gs.print(arrMatches);
        var dataObject &#61; [];
        var headers &#61; [];
        var rowCount &#61; 0;
        var overAllElementsCount &#61; 0;
        var columnCount &#61; 0;
        var isHeaderBuilt &#61; false;
        var rowInformation &#61; {};
		// Keep looping over the regular expression matches
        // until we can no longer find a match.
        while (arrMatches &#61; objPattern.exec(strData)) {
            // Get the delimiter that was found.
            var strMatchedValue &#61; &#39;&#39;;
            var strMatchedDelimiter &#61; arrMatches[1];
            // Check to see if the given delimiter has a length
            // (is not the start of string) and if it matches
            // field delimiter. If id does not, then we know
            // that this delimiter is a row delimiter.
            if (strMatchedDelimiter.length &amp;&amp; (strMatchedDelimiter !&#61; strDelimiter)) {
                // Since we have reached a new row of data,
                // add an empty row to our data array.
                // reset column count and initialize the rowInformation object
                isHeaderBuilt &#61; true;
                columnCount &#61; 0;
                rowInformation &#61; {};
            }
            // Now that we have our delimiter out of the way,
            // let&#39;s check to see which kind of value we
            // captured (quoted or unquoted).

            if (arrMatches[2]) {
                // We found a quoted value. When we capture
                // this value, unescape any double quotes.
                strMatchedValue &#61; arrMatches[2].replace(new RegExp(&#34;\&#34;\&#34;&#34;, &#34;g&#34;), &#34;\&#34;&#34;);
            } else {
                // We found a non-quoted value.
                strMatchedValue &#61; arrMatches[3];
            }

            //Build keys based on header row
            if (!isHeaderBuilt) {
                headers.push(strMatchedValue);
            }
            // Once header is built, now start creating object for each row
            if (isHeaderBuilt) {
                // If column count reaches last key in header
                if (columnCount &#61;&#61; headers.length - 1) {
                    dataObject.push(rowInformation);
                }
                gs.print(&#34; strMatchedValue &#34; &#43; strMatchedValue);
                if (JSUtil.nil(strMatchedValue)) {
                    rowInformation[headers[columnCount]] &#61; &#39;&#39;;
                } else {
                    rowInformation[headers[columnCount]] &#61; strMatchedValue;
                }
                //gs.print(JSON.stringify(rowInformation, null, 4));
            }

            columnCount&#43;&#43;;
        }
        // Return the parsed data.
      
        return dataObject;
    },

    getAttachmentGR: function(sysId) {

        var gr &#61; new GlideRecord(&#34;sys_attachment&#34;);
        gr.addQuery(&#34;sys_id&#34;, sysId);
        gr.query();

        if (gr.next()) {
            return gr;
        }
        return;
    },

    type: &#39;CSVtoJSON&#39;
};</code></pre>