---
title: "Service Mapping and Microsoft Windows Clusters"
date: 2019-05-07T02:33:28.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=234cc8c9db913f0813b5fb2439961960"
authors: ["Someone else"]
---
<h1>About Microsoft Cluster Servers</h1>
<p>Microsoft developed a clustering and failover ability for <a href="https://docs.microsoft.com/en-us/windows-server/failover-clustering/failover-clustering-overview" rel="nofollow">Microsoft Windows Servers</a>.  This is meant to provide to customers the ability to load balance Windows servers running databases, web servers or any server software running on Windows Servers. Redundant resources can be in different data center locations and managed trough the cluster configuration.</p>
<p>The architecture of the Microsoft Cluster Server involves configuring the Microsoft Cluster Server software with the nodes of servers and a virtual IP address (and virtual host name) that is used to reference the cluster of servers.  When a software application makes a network connection to a server by the virtual host name or virtual IP address, the connection is directed to one of the nodes in the cluster.</p>
<p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://community.servicenow.com/cded8c09dbd13f0813b5fb2439961942.iix" /></p>
<p style="text-align: center;"><strong>Microsoft Cluster Architecture</strong></p>
<h1>ServiceNow Discovery and Microsoft Cluster Server</h1>
<p>If a company has an application that leverages Microsoft Cluster, then they may want the cluster architecture stored in their CMDB.  If they are managing business applications that use a Microsoft Cluster, it makes sense to want the redundant nodes associated with their that business application.</p>
<p>ServiceNow Horizontal Discovery has a pattern library in the discovery pattern for Windows Servers that discovers the Microsoft Cluster software, Windows Cluster Nodes, Cluster virtual IP Addresses and other Windows Cluster Resources.  These configuration items are related according to the below diagram.</p>
<p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://community.servicenow.com/8d6e844ddbd13f0813b5fb24399619e6.iix" /></p>
<p style="text-align: center;"><strong>ServiceNow CMDB Architecture for Microsoft Cluster</strong></p>
<p>During discovery of the Windows Server on which the Microsoft Cluster Configuration Server is running, Discovery runs a WMI Query to <strong><span style="color: #ff0000;">Root\MSCluster</span></strong> and requests information on any Windows Clusters, Cluster Nodes, VIPs and Cluster node to Cluster relationships.  Then, the reference relationships are created in the CMDB.</p>
<h1>Service Mapping of Microsoft Cluster Servers</h1>
<p>ServiceNow <a href="https://www.servicenow.com/products/service-mapping.html" rel="nofollow">Service Mapping</a> is another automated discovery capability designed to map and model Business Services.  The goal of Service Mapping is to relate infrastructure components (servers, software applications, network devices) to a business service by discovering the configuration components on those servers from an entry point.  It also creates models of the dependencies between the business service components showing how the different components are related to each other.  When application components are clustered in a Microsoft Cluster, it makes sense to map these components as a cluster.</p>
<p>In order to map and model the Windows Clusters within a ServiceNow automated service Map, the following must happen:</p>
<p>1. The windows clusters with the clustered nodes and virtual IP addresses must be already discovered and stored in the CMDB with Horizontal Discovery.</p>
<p><img src="https://community.servicenow.com/e0109049db153f0813b5fb243996193b.iix" /></p>
<p>2. The virtual IP address for an application must be discovered and used in a &#34;Create Connection&#34; operation.  The operation must specify the <strong><span style="color: #ff0000;">HTTP(S) Entry Point</span></strong> for it to map the cluster.</p>
<p><img src="https://community.servicenow.com/0fe0d88ddb153f0813b5fb2439961941.iix" /></p>
<p>When Service Mapping maps an application with an HTTP(S) entry point, and the entry point is a virtual IP, Service Mapping will then look into the CMDB and will automatically make a connection to each node in the list of windows cluster nodes for the cluster that has the virtual IP that matches.</p>
<h1>Mapping Windows Cluster Servers with a TCP Entry Point</h1>
<p>There is a way to map the Microsoft Cluster Servers using the virtual IP from any service mapping discovery pattern connection section using whichever entry point you like. A custom connection section on a discovery pattern can take the virtual IP and identify the cluster nodes and make a connection to them.  Here is how this can be done:</p>
<p>1. Within the service map, go into the discovery log from the node that connects to the windows cluster.</p>
<p>2. Go into Debug mode in the identification section</p>
<p><img src="https://community.servicenow.com/91021485db553f0813b5fb2439961939.iix" /></p>
<p><img src="https://community.servicenow.com/481250c5db553f0813b5fb2439961912.iix" /></p>
<p>3. While in Debug mode, go into the Discovery pattern and create a new Connection Section that will connect to the Windows Cluster</p>
<p><img src="https://community.servicenow.com/d2a2d80ddb553f0813b5fb2439961970.iix" /></p>
<p>4. In the Connection section, you will need an operation that gets the virtual IP address that references the cluster.  This may be in a configuration file or some other source.  The VIP may also be a hostname in a URL that is found in a file (such as win_config) on an IIS server.</p>
<p><img src="https://community.servicenow.com/a1e2d48ddb553f0813b5fb24399619e0.iix" /></p>
<p><img src="https://community.servicenow.com/b3e2dc8ddb553f0813b5fb24399619d6.iix" /></p>
<p>5. If the VIP is a hostname, then a simple operation is needed to get the IP Address, such as doing an &#34;nslookup&#34; on the hostname.</p>
<p>6. Now, we need an operation that gets the list of cluster nodes from the CMDB windows cluster CIs.  T?his can be done with a &#34;Set Parameter&#34; operation that references JavaScript code.</p>
<p><img src="https://community.servicenow.com/4fa318c5db953f0813b5fb2439961932.iix" /></p>
<p><img src="https://community.servicenow.com/b9b35009db953f0813b5fb24399619c6.iix" /></p>
<p>You can copy/past the JavaScript code here.  Note the variable name &#34;search_vip&#34; must already be populated for this to work and it must be an IP Address:</p>
<pre class="language-javascript"><code>var rtrn &#61; &#39;&#39;;
var virtual_ip &#61; ${search_vip};
var cluster_server_ips &#61; &#39;&#39;;
var cvip &#61; new GlideRecord ( &#39;cmdb_ci_cluster_vip&#39; );
cvip.addQuery ( &#39;ip_address&#39;, virtual_ip );

cvip.query();
while ( cvip.next() )
  {
  var clust &#61; new GlideRecord ( &#39;cmdb_ci_cluster&#39; );
  clust.get ( cvip.cluster );
  var cluster_nodes &#61; new GlideRecord ( &#39;cmdb_ci_win_cluster_node&#39; );
  cluster_nodes.addQuery ( &#39;cluster&#39;, clust.sys_id );
  cluster_nodes.query();
  while ( cluster_nodes.next() )
    {
    var srvr &#61; new GlideRecord ( &#39;cmdb_ci_server&#39; );
    srvr.get ( cluster_nodes.server );
    if (cluster_server_ips &#61;&#61; &#39;&#39;)
      cluster_server_ips &#61; srvr.ip_address;
    else
      cluster_server_ips &#61; cluster_server_ips &#43; &#39;,&#39; &#43; srvr.ip_address;
    }
  }
rtrn &#61; cluster_server_ips;
</code></pre>
<p>7.  Now, we have a list of the cluster nodes in a string.  A simple &#34;Parse Variable&#34; operation will put the nodes into a table that can be passed in a &#34;Create Connection&#34; section.  Node that the string is a single line comma-delimited so we need the line separator to be a &#39;comma&#39; for the &#34;Delimited Text&#34; parsing strategy.</p>
<p><img src="https://community.servicenow.com/5c34500ddb953f0813b5fb243996192f.iix" /></p>
<p>8.  Now, we can put in a simple &#34;Create Connection&#34; operation on the table and it will connect to the Windows Cluster using whatever Entry Point we prefer.</p>
<p><img src="https://community.servicenow.com/a854980ddb953f0813b5fb24399619e8.iix" /></p>
<p>Thanks to the connection section, we now have a mapped application leveraging the Windows Cluster:</p>
<p><img src="https://community.servicenow.com/1264544ddb953f0813b5fb2439961991.iix" /></p>