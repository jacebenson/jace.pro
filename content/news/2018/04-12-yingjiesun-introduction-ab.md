---
title: "Introduction about CSM roles"
date: 2018-04-11T21:46:18.000Z
authors: ["yingjiesun"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=a68e2257db1dd3404e1df4621f961911"
---
<div>The CSM  product serves both B2B (business-to-business) and B2C (business-to-consumer) business purpose. There can be many different possible relationships and directions of engagement required by our users. Therefore, to ensure the data access while maintaining data security for all types of business relationships, the CSM security model created nine primary roles:</div>
<div>
<ul><li>sn_customerservice_agent</li><li>sn_customerservice_manager</li><li>sn_customerservice.customer</li><li>sn_customerservice.customer_admin </li><li>sn_customerservice.customer_case_manager (We introduced this in London)</li><li>sn_customerservice.partner</li><li>sn_customerservice.partner_admin</li><li>sn_customerservice.consumer</li><li>sn_customerservice.consumer_agent</li></ul>
<p>By utilizing the explicit role plugin, CSM internal and external roles are determined by if they contain sn_esm_agent and sn_esm_user. These two roles are the base roles in CSM.</p>
<p>I have seen some frequently asked questions in this forum and also from our customers, and would like to give the answers here to explain. </p>
<p><strong>1.    Q: Can we assign both internal roles and external roles to the same user?</strong></p>
<p>        A: No. A user should never be assigned any combinations of both the internal and external roles, such as sn_publication.author and sn_customerservice.customer_admin.</p>
<p><strong>2.   Q: Can customer agent handle consumer agent&#39;s cases? Explain the difference between the two roles.</strong></p>
<p>       A: Customer agent cannot handle consumer agent&#39;s cases. Customer agent is for B2B and consumer agent is for B2C. They deal with different groups of cases.</p>
<p><strong>3.   Q:</strong> <strong>Define what happens when there is no role. What is the meaning of public role and how it is related here?</strong></p>
<p>       A: When a user does not have any role, then the default is snc_internal user. The public role means no login is required to access features or functions, such as topics, articles, etc. on CSM portals. It is not related to either internal or external roles.</p>
<p><strong>4.   Q: We already have agent/customer roles - why do we need esm_agent/esm_user?</strong></p>
<p>       A:  THe sn_customerservice_agent/sn_customerservice.customer are in customer service scoped app. When you need to validate global table records via scripted AC, you need a way to access the global scope from scoped app itself. The esm_agent/esm_user roles were introduced to resolve this issue.          </p>
<p><strong>5.   Q: What is the scripted ACL and how it has been used in CSM?</strong></p>
<p>       A: ACL is an access control list. The ServiceNow platform uses ACLs to control data and resource access for different groups of users. Sometimes, to implement more complicated ACLs, a script can be added to implement conditions that cannot be expressed just by roles. This provides the flexibility for users to include their own business logic in ACLs that are not limited to existing roles.</p>
<p><strong>6.   Q: Do I really need to use CSM supplied esm roles? Can I use my own roles?</strong></p>
<p>       A: Yes, users can always create their own roles, but they will bypass the business rules/ACLs that are already implemented. Users need to start from the beginning to implement the related business logic for the new roles they created.       </p>
<p><strong>7.   Q: Can we use domain separation (separate account) to provide security and thus avoid the explicit role plugin?</strong></p>
<p><strong>       </strong>A:  Domain separation can deal with some use cases about account hierarchy but because it is a separate plugin, the cost would be higher. The role-based model is more suitable for CSM product to deal with the regular use cases.</p>
<p><strong>8.   Q: Any difference between snc_internal, snc_external, sn_esm_user? Who else is not covered by these three roles? Any overlaps?</strong></p>
<p>       A:  The sn_esm_user role contains snc_external. The snc_internal and snc_external roles are base roles from the platform level to differentiate company employee and out-of-company login users. A user has to be either snc_internal or snc_external, and cannot be both at the same time.  </p>
<p><strong>9.   Q: Can the partner role view all the cases in partner account and its customer account? How about partner_admin?</strong></p>
<p>       A:  No. The partner role can view only the cases created by themselves for both their own account and their customer accounts. The partner_admin role can view all cases in their own account and their customer accounts.   </p>
<p><strong>10. Q: If a table could be accessed by A but could not be accessed by B, and there is one user with both A and B roles, what happens?</strong></p>
<p>       A: If there is an ACL for the table for either role A or role B, as long as the user has one of the roles specified in the role list in ACL, then they would be able to access the table. If there is a query business rule for either role A or role B, then it depends on the business logic to determine how it works. Some conflicting roles are not supposed to be added to one user at the same time, such as sn_esm_user/sn_esm_agent, because it may trigger business rules/other components to have unexpected behaviors.</p>
<p><strong>11. Q: Should I add my new role to sn_esm_user or to specifically consumer? Why?</strong></p>
<p>       A:  If you need create a new role parallel with consumer and does similar jobs, make sure the new role contains sn_esm_user since base level roles, sn_esm_* have been regulated in business rules and elsewhere to maintain the features for external consumers. If you need to create a new role higher than consumer level that is similar to or higher than consumer_agent, just include the consumer role. </p>
<p><strong>12. Q: Should I add my new role to sn_esm_agent or to specifically Customer Agent?</strong></p>
<p>       A: Same with question 11. If a similar role as how customer agent works is added, make sure the new role contains sn_esm_agent.</p>
<p><strong>13. Q: What is the difference between customer agent and consumer agent?</strong></p>
<p>       A: Customer agent is for B2B and has access to contact and account. Consumer agent is for B2C and has access to consumer.</p>
<p><strong>14. Q: What does customer manager role do?</strong></p>
<p>       A: Customer manager sees what customer and consumer agents can see. Customer manager can create accounts, contacts, consumers, assets, entitlements, contracts, account relationship, and contact relationship.</p>
<div>
<div>
<p><strong>15. Q: Why do we use both scripted ACL and query business rules in CSM security model to deal with roles logics?</strong></p>
<p>       A: If we just used ACLs, in tables with a large amount of records all the records would be validated before proceed. This would cause performance issue. Scripted ACL and query business rules can filter out most of the unrelated records in a table before the rest runs through the ACLs. This can greatly improve the overall performance.</p>
<p><strong>16.  Q: What is the difference between customer and customer admin?</strong></p>
<p>        A: Customer can access their account and any account through contact relationship. Customer can see only cases created for themselves. Customer admin can access above and all accounts in the account hierarchy. Customer admin sees all contacts and cases created for all their accessible accounts.</p>
<p><strong>17.  Q: What is the difference between partner and partner admin?</strong></p>
<p>        A: Partner is customer and all accounts with which there is a partner relationship to their account. Partner sees all accessible accounts/contacts but only cases created by themselves or for themselves. Partner admin is a partner and can see all accessible accounts/contacts and all cases created for the accessible accounts.</p>
<p><strong>18.  Q: Are there any changes in CSM roles between releases?</strong></p>
<p>        A: The major change about roles is that sn_customerservice.consumer and sn_customerservice.consumer_agent roles were not present before Istanbul. They were introduced to support the scenarios for individual customers in B2C mode starting with the Istanbul release. There have not been any other major changes in the CSM product. </p>
<p><strong>19.  Q: What is the case manager role?</strong></p>
<p>        A: The case manager role has all the privileges of the sn_customerservice.customer role, plus it can create a case on behalf of another contact in the account, view a list of cases belonging to the account, and edit cases belonging to the account. Also sn_customerservice.customer_case_manager must observe existing account hierarchy and account relationship restrictions. This role is assignable from customer portal by customer admin and partner admin roles. </p>
</div>
</div>
<div>
<p>These Q&amp;A and other details have been described in <a href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0639072" rel="nofollow">KB0639072</a>. </p>
<p>Enjoy!</p>
</div>
</div>