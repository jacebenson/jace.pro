---
title: "Azure Government and Azure National Cloud region support for Cloud Management and Cloud Discovery"
date: 2019-09-01T00:07:17.000Z
authors: ["Utpal"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=7edc4aaadba7bb481cd8a345ca9619f0"
---
<p>This blog post applies to Madrid release and above.</p>
<h1>Overview</h1>
<p>National clouds are physically isolated instances of Azure. These regions of Azure are designed to make sure that data residency, sovereignty, and compliance requirements are honored within geographical boundaries.</p>
<p>Currently, Microsoft considers the following isolated regions as National Clouds:</p>
<p style="padding-left: 30px;">• Microsoft Cloud for US Government<br />• Microsoft Cloud Germany<br />• Azure operated by 21Vianet in China</p>
<p>Note that Microsoft Cloud Germany (standalone region) will be replaced by two new Azure Germany regions that are integrated with the rest of Azure public cloud. As this <a href="https://news.microsoft.com/europe/2018/08/31/microsoft-to-deliver-cloud-services-from-new-datacentres-in-germany-in-2019-to-meet-evolving-customer-needs/" rel="nofollow">announcement</a>, the timeline for that is Q4 2019.</p>
<p>These are considered independent “national” clouds that are not associated with the Azure public cloud offering. While they are standalone, the functionality offered by these clouds is syntactically and semantically identical, albeit, a subset of the that available in Azure public cloud environment.</p>
<p>Below are the primary areas of difference between Azure National clouds and the Azure public clouds:</p>
<p>• Service endpoints<br />• Authentication mechanism<br />• Available cloud services</p>
<p>Given the growing demand for Microsoft Azure Government (MAG, aka Azure Gov) and Azure National clouds, let’s go over how ServiceNow IT Operations Management (ITOM) products integrate with these standalone Azure clouds.</p>
<p>ServiceNow ITOM products have supported Azure public clouds for a number of years. Support for Azure Gov was introduced in Madrid release. The other national clouds (Germany and China) follow the same mechanism and can be configured using the steps outlined in this blog post.</p>
<p><strong>Caveat</strong>: Note that ServiceNow ITOM products have not been officially certified or supported against Germany and China regions.</p>
<h1>Configuration of Azure Gov Cloud</h1>
<p><strong>Pre-requisite</strong>: Account on Azure Gov cloud. Active Directory administrator or Azure administrator role is required.</p>
<p><strong>ServiceNow release</strong>: Use Madrid release and above</p>
<p><strong>Portal for Azure Gov Cloud</strong>: https://portal.azure.us</p>
<h2>Setting up Service Principal on Azure Gov Portal</h2>
<p>A service principal for Azure cloud services is analogous to a Microsoft Windows service account that enables Windows processes to communicate with each other within an Active Directory domain.</p>
<p>You will need the service principal credential values to create a service account for ITOM products.</p>
<p>ServiceNow documentation outlines the steps to create a new Service Principal in Azure in the <a href="https://docs.servicenow.com/bundle/newyork-it-operations-management/page/product/cloud-management-v2-setup/task/azure-create-serv-princ-cloud-mgt.html" rel="nofollow">Create an Azure Service Principal</a> section. At the end of the exercise, you would have the following pieces of info that you would need to register this Azure Service Principal on ServiceNow.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/4d3cc22adba7bb481cd8a345ca961928.iix" /></p>
<p><strong>IMPORTANT NOTE</strong>: On Azure Portal, during the App Registration-&gt;Register an application step, be sure an select the radio button for Supported Account Types as Accounts in this organizational directory only (Single tenant). This will ensure that the Active Directory configured for Gov Cloud will be used for authentication.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/1a4cc22adba7bb481cd8a345ca961915.iix" /></p>
<h2><br />MID server configuration</h2>
<p>In order to route the traffic correctly between ServiceNow instance and Azure Gov Cloud, the MID server must be configured with certain properties. Following the steps below to configure the MID server(s) for Azure Gov Cloud access.</p>
<p>1. Select the MID server for configuration<br />2. Go to the Capabilities tab, Edit and add the following capabilities</p>
<p style="padding-left: 30px;">a. Cloud Management <br />b. Discovery<br />c. Azure</p>
<p style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/296c026adba7bb481cd8a345ca9619b6.iix" /></p>
<p>3. Go to Properties tab and cut-n-paste the following properties exactly as below:</p>
<table style="width: 1157px; height: 118px;" border="1"><tbody><tr style="height: 13px;"><td style="width: 308px; height: 13px;"><strong>Name</strong></td><td style="width: 377px; height: 13px;"><strong>Value</strong></td></tr><tr style="height: 13px;"><td style="width: 308px; height: 13px;"><span style="font-size: 8pt;">mid.cmp.azure_api.base_endpoint</span></td><td style="width: 377px; height: 13px;">https://management.usgovcloudapi.net/${apiPath}</td></tr><tr style="height: 13px;"><td style="width: 308px; height: 13px;">mid.cmp.azure_api.storage.container.path</td><td style="width: 377px; height: 13px;">https://${accountName}.blob.core.usgovcloudapi.net/?comp&#61;list</td></tr><tr style="height: 13px;"><td style="width: 308px; height: 13px;">mid.property.azure_token_manager.endpoint</td><td style="width: 377px; height: 13px;">https://login.microsoftonline.us/${tenantId}/oauth2/token</td></tr><tr style="height: 75.625px;"><td style="width: 308px; height: 75.625px;"><span style="font-size: 8pt;">mid.property.azure_token_manager.endpoint_content</span></td><td style="width: 377px; height: 75.625px;"> grant_type&#61;client_credentials&amp;client_id&#61;${clientId}&amp;resource&#61;https%3A%2F%2Fmanagement.usgovcloudapi.net%2F&amp;client_secret&#61;${clientSecret}</td></tr></tbody></table>
<p> </p>
<p>Once the MID server(s) are configured and the Service Principal setup on Azure Gov cloud, create Credentials in ServiceNow using the steps outline in the <a href="https://docs.servicenow.com/bundle/newyork-it-operations-management/page/product/cloud-management-v2-setup/task/azure-create-creds-cloud-mgt.html" rel="nofollow">documentation</a>. In order to automatically create Service Accounts corresponding to the Azure Subscriptions that are available to this Service Principal, hit the Discover Subscriptions UI action.</p>
<h2>Azure Gov Cloud Billing integration for Cloud Management (requires Enterprise Agreement enrollment)</h2>
<p>Azure Gov Cloud subscriptions are typically associated with Enterprise Agreements. Follow the steps outlined in the documentation.</p>
<p>On Madrid release, please make the following change to the MID Script include called AzureBillingProbe. Note that making this change will not affect Azure Billing for the Azure public cloud.</p>
<p>As a System Adminstrator user, type-in MID Server in the left-navigation and look for Script Includes. <br />• Search for a script include file named AzureBillingProbe<br />• Make the following modification:</p>
<p>Replace:<br /> <span style="font-family: &#39;courier new&#39;, courier;">endpoint &#61; endpoint &#43; enrollmentNum &#43; &#39;/usagedetails/download?billingPeriod&#61;&#39; &#43; year &#43; month</span></p>
<p>With:<br /><span style="font-family: &#39;courier new&#39;, courier;">endpoint &#61; endpoint &#43; enrollmentNum &#43; &#39;/billingPeriods/&#39; &#43; year &#43; month &#43; &#39;/usagedetails&#39;;</span></p>
<p> </p>
<p><br /><span style="font-size: 10pt;"><em>Follow similar steps for Azure Germany and Azure China, replacing the Azure Gov specific information with Azure Germany or China specific information. Note that Germany and China region have not been certified with ITOM products. Captured here for completeness. Please share your experiences if you happen to give it a try.</em></span></p>
<h2>Azure Germany</h2>
<p><br />Portal: https://portal.microsoftazure.de</p>
<p>MID Server Capabilities: Cloud Management, Discovery, Azure<br />MID Server Properties:</p>
<p> </p>
<table style="height: 106px; float: left;" border="1" width="671"><tbody><tr><td style="width: 327px;"><strong>Name</strong></td><td style="width: 328px;"><strong>Value</strong></td></tr><tr><td style="width: 327px;"><span style="font-size: 8pt;">mid.cmp.azure_api.base_endpoint</span></td><td style="width: 328px;">https://management.microsoftazure.de/${apiPath}</td></tr><tr><td style="width: 327px;">mid.cmp.azure_api.storage.container.path</td><td style="width: 328px;">https://${accountName}.blob.core.cloudapi.de/?comp&#61;list</td></tr><tr><td style="width: 327px;">mid.property.azure_token_manager.endpoint</td><td style="width: 328px;">https://login.microsoftonline.de/${tenantId}/oauth2/token</td></tr><tr><td style="width: 327px;">mid.property.azure_token_manager.endpoint_content</td><td style="width: 328px;">grant_type&#61;client_credentials&amp;client_id&#61;${clientId}&amp;resource&#61;https%3A%2F%2Fmanagement.microsoftazure.de%2F&amp;client_secret&#61;${clientSecret}</td></tr></tbody></table>
<h2><br />Azure China</h2>
<p><br />Portal: https://portal.azure.cn</p>
<p>MID Server Capabilities: Cloud Management, Discovery, Azure<br />MID Server Properties:</p>
<table style="height: 129px;" border="1" width="708"><tbody><tr style="height: 19px;"><td style="width: 346px; height: 19px;"><strong>Name</strong></td><td style="width: 346px; height: 19px;"><strong>Value</strong></td></tr><tr style="height: 19px;"><td style="width: 346px; height: 19px;"><span style="font-size: 8pt;">mid.cmp.azure_api.base_endpoint</span></td><td style="width: 346px; height: 19px;">https://management.chinacloudapi.cn/${apiPath}</td></tr><tr style="height: 19.75px;"><td style="width: 346px; height: 19.75px;">mid.cmp.azure_api.storage.container.path</td><td style="width: 346px; height: 19.75px;">https://${accountName}.blob.core.chinacloudapi.cn/?comp&#61;list</td></tr><tr style="height: 19px;"><td style="width: 346px; height: 19px;">mid.property.azure_token_manager.endpoint</td><td style="width: 346px; height: 19px;">https://login.chinacloudapi.cn/${tenantId}/oauth2/token</td></tr><tr style="height: 19px;"><td style="width: 346px; height: 19px;">mid.property.azure_token_manager.endpoint_content</td><td style="width: 346px; height: 19px;"> grant_type&#61;client_credentials&amp;client_id&#61;${clientId}&amp;resource&#61;https%3A%2F%2Fmanagement.chinacloudapi.cn%2F&amp;client_secret&#61;${clientSecret}</td></tr></tbody></table>
<p> </p>