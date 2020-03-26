---
title: "Employee Document Management FAQ"
date: 2020-03-18T17:03:49.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=65e96e3adbe7c4542be0a851ca96195b"
---
<p style="text-align: left;"><strong>A) What is the maximum number of documents you can retain against a single employee profile?</strong> </p>
<p><span style="font-size: 10pt;">You can retain as many documents as necessary against an employee profile with Employee Document Management. Research suggests that most employees will have approximately 50 documents retained against their profile throughout their career, at a single organisation.  </span></p>
<p> </p>
<p><span style="font-size: 10pt;"><strong>B) What </strong><strong>are the filetypes you can support and </strong><strong>the maximum file size of each document you can retain against an employee profile?</strong> </span></p>
<p><span style="font-size: 10pt;">Employee Document Management supports the standard ServiceNow attachment file types including formats like doc, pdf, xml etc. Each document can be a maximum of 1GB however administrators can place a file size limit on documents that are retained. We recommend considering a file size limit as larger file sizes may cause longer load times through the Employee Service Center. </span></p>
<p> </p>
<p><span style="font-size: 10pt;"><strong>C) Can </strong><strong>you change the document type if it has been wrongly classified?</strong><strong> </strong> </span></p>
<p><span style="font-size: 10pt;">Users with access and the correct permissions are able to change the document type by accessing the document within the employee profile and making the necessary adjustments. Keep in mind that the user with relevant security, will only be shown the document types to which they have access.  </span></p>
<p> </p>
<p><span style="font-size: 10pt;"><strong>D) If there are overlapping retention policies, what would be the default result?</strong> </span></p>
<p><span style="font-size: 10pt;">In the situation of two overlapping retention policies, Employee Document Management will default to the longer duration. </span></p>
<p> </p>
<p><span style="font-size: 10pt;"><strong>E) What happens if an employee moves to another country during their time with a company? How would this impact the documents retained against their employee profile?</strong> </span></p>
<p><span style="font-size: 10pt;">This depends on how you configure the retention policy and whether you configure retention based on the employee’s current location or the Orlando Release enhancement, whereby capturing the payroll country field at the time of receiving the document. If you choose to adopt the Orlando Release enhancements, then at the time of creating an employee document or moving an attachment to the employee file, the payroll country value needs to be entered. If the employee moves to another country, the employee documents/ file created during their time in the previous country will remain associated with the metadata created at the time. Appropriate security policies for document types will govern who can access files created during an employee’s time in a particular country/location.  </span></p>