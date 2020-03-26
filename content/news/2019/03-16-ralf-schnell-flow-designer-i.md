---
title: "Flow DesignerIntegration fr den Service Catalog"
date: 2019-03-15T13:41:14.000Z
authors: ["ralf.schnell"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=90e82548dbdc3704f7fca851ca9619ab"
---
<p style="text-align: justify;">Sehr geehrte SNUG-Mitglieder,</p>
<p style="text-align: justify;">Wie kann man den Flow Designer anstelle des Workflow Editor nutzen, um für den Service Catalog Prozesse abzubilden? Das werde ich öfters gefragt, und daher nutze ich gerne die Gelegenheit, die Integration hier zu beschreiben.</p>
<p style="text-align: justify;">Zunächst einmal müssen Plugins aktiviert werden:</p>
<ul style="text-align: justify;"><li>Flow Designer Action Step - Service Catalog (com.glide.hub.action_step.service_catalog): Dies sind die Aktionen innerhalb eines Flows, um z.B. die Katalog-Variablen abzurufen</li><li>Flow Designer support for the Service Catalog (com.glideapp.servicecatalog.flow_designer): Hiermit wird der Service Catalog-Trigger hinzugefügt und auch das &#34;Flow&#34;-Feld im Catalog Item</li></ul>
<p style="text-align: justify;">Jetzt können Sie einen ersten Service Catalog-Flow erstellen. Gehen Sie dazu zu <strong>&#39;Flow Designer&#39; &gt; &#39;Designer&#39;</strong> und klicken Sie dort auf &#39;New&#39; &gt; &#39;New Flow&#39;. Wählen Sie unter &#39;Run As&#39; den &#34;System User&#34; aus und klicken Sie &#39;Submit&#39;.</p>
<p style="text-align: justify;">Als nächstes fügen Sie einen Trigger hinzu: hier wählen Sie den &#39;Service Catalog&#39;-Trigger aus:</p>
<p><img src="https://community.servicenow.com/a3c4a544db5c3704f7fca851ca961902.iix" width="597" height="427" /></p>
<p style="text-align: justify;">Etwas irritierend ist es vielleicht, daß Sie an dieser Stelle noch nicht das Catalog Item bestimmen müssen. Das folgt im nächsten Schritt: Fügen Sie eine erste Aktion hinzu. <strong>&#39;Click to add an Action ...&#39; &gt; &#39;Action&#39;</strong>, dann wählen Sie &#39;Get Catalog Variables&#39; aus:</p>
<p><img src="https://community.servicenow.com/5765e5c8db5c3704f7fca851ca96198c.iix" width="611" height="274" /></p>
<p style="text-align: justify;">Auf der rechten Seite des Flow Designers sehen Sie den Bereich &#39;Data&#39;. Dort ganz oben finden Sie den Datensatz, der den Flow ausgelöst hat. Ziehen Sie per Drag-and-Drop den &#39;Requested Item Record&#39; in das Feld &#39;Requested Item&#39; der hinzugefügten Aktion. Jetzt können Sie darunter im Feld &#39;Template Catalog Item&#39; das Catalog Item auswählen, in dem Sie diesem Flow verwenden möchten. Und dann erst werden die Variablen sichtbar, die in diesem Catalog Item verfügbar sind. Diejenigen Variablen, die Sie im Flow verwenden möchten (z.B. um eine Aktion zu steuern oder sie in einer Email im Text aufzuführen), wählen Sie nun einfach aus:</p>
<p><img src="https://community.servicenow.com/4a072588db9c3704f7fca851ca9619e3.iix" width="609" height="407" /></p>
<p style="text-align: justify;">Jetzt gestalten Sie den Rest des Flows. Die ausgewählten Variablen finden Sie rechts im Bereich &#39;Data&#39; und können sie in allen weiteren Aktionen per Drag-and-Drop verwenden.</p>
<p style="text-align: justify;">Ein letzter Schritt fehlt noch: Wenn der Flow gespeichert und per &#39;Activate&#39; publiziert wurde, müssen Sie ihn noch im Catalog Item-Formular auswählen. Sie finden dafür im Bereich &#39;Process Engine&#39; über dem bisherigen Feld &#39;Workflow&#39; das Feld &#39;Flow&#39;.</p>
<p style="text-align: justify;">Eine Einschränkung gibt es noch zu beachten: diese Integration funktioniert nur für Service Catalog Requests, nicht für Record Producer - diese erstellen ja Datensätze nicht in der &#39;Service Requests&#39;-Tabelle sondern in anderen Tabellen wie z.B. in &#39;Incident&#39; oder &#39;Demand&#39;. Man kann für Record Producer aber selbstverständlich genauso den Flow Designer anwenden, dann aber z.B. mit einem &#39;Record Created&#39;-Trigger auf die jeweilige Tabelle.</p>
<p style="text-align: justify;">Mit freundlichen Grüßen</p>
<p style="text-align: justify;">Ralf Schnell, Senior Platform Evangelist</p>