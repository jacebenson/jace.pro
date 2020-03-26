---
title: "Security OperationsLondon"
date: 2019-02-21T12:47:54.000Z
authors: ["Tak Takahashi"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=7dfbb7f8dbb367802be0a851ca9619ba"
---
<p>セキュリティ上の脅威が紙面を飾ることがまったく珍しくない現代。もはやその被害を受ける事は可能性ではなく、いつ被害を受けるかを懸念する時代となりました。では、どう対処すればよいのでしょう。<br />御社は、セキュリティ侵害を伝える紙面に登場する側になるのでしょうか&#xff1f;</p>
<p>それとも、、</p>
<p>自社の情報セキュリティチームがフィッシング攻撃やマルウェア攻撃を検知して、セキュリティ侵害を回避できる側になるのでしょうか&#xff1f;</p>
<p>ServiceNow の <a href="https://docs.servicenow.com/bundle/london-security-management/page/product/security-incident-response/reference/sir-landing-page.html" rel="nofollow">Security Incident Response application</a> なら、インテリジェントワークフローと自動化を活用でき、さらにはIT部門と緊密に連携できるため、脅威を優先順位付けしたうえで解決することができます。絶えず存在し、進化を続ける脅威に御社のセキュリティチームがその最先端で対抗できるよう、ServiceNowはLondonリリースに新しいセキュリティオペレーション機能を搭載しました。<br />そこで<a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" rel="nofollow">NOWsupportベストプラクティスシリーズ</a>のこの回では、これらの新機能の概要をご説明しようと思います。またこの記事の最後には動画も用意していますので、実際の動作はそちらでご確認ください。</p>
<p><span style="font-size: 14pt;"><strong>セキュリティアナリスト向け新ユーザーインターフェイス&#xff08;UI&#xff09;</strong></span><br /><a href="https://docs.servicenow.com/bundle/london-security-management/page/product/security-incident-response/concept/sir-new-ui.html" rel="nofollow">Security Analyst Workspace</a>は新しいユーザーインターフェイス&#xff08;UI&#xff09;で、セキュリティ担当者がセキュリティインシデントに対応する上で必要なツールを提供します。</p>
<p style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/bda87ff8db7367802be0a851ca961963.iix" /></p>
<p> </p>
<p><span style="font-size: 14pt;"><strong>新しいセキュリティアナリスト向けUIの有効化</strong></span><br />この機能を有効にするには、HIカスタマーサービスシステム経由で<strong>Security Incident Response UI</strong> のプラグイン&#xff08;<strong>com.app_secops_ui</strong>&#xff09;をリクエストします。<br />プラグインをインストールできたら、[Security Incident] &gt; [Incidents]&#xff08;NewUI&#xff09;へと進み、この新しいワークスペースにアクセスします。</p>
<p style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/ae99ffbcdb7367802be0a851ca961941.iix" /></p>
<p><br />この新しいUIをいきなり使うことに問題がないか不安ですか&#xff1f;問題はありません。この新しいUIと既存のUIは共存可能であるため、ご自身のペースで新しいUIに移行することができます。</p>
<p> </p>
<p style="text-align: center;"><img src="https://community.servicenow.com/30f973b0dbb367802be0a851ca9619d7.iix" /></p>
<p><span style="font-size: 14pt;"><strong>データ分析用の新しいツール</strong></span><br />この新しいUIはデータ分析用の新しいツールです。その概要を以下に示します。</p>
<p><strong><span style="font-size: 12pt;">プレイブック</span></strong><br />セキュリティインシデントの対応に慣れた熟練のアナリストなら、&#xff08;インシデントのタイプに関係なく&#xff09;セキュリティインシデントを解決するための手順を難なくこなせるでしょう。しかし経験の浅いアナリストには、問題の影響度の大きさを考えると、ある程度のガイダンスがあった方が良いかもしれません。新しい<a href="https://docs.servicenow.com/bundle/london-security-management/page/product/security-incident-response/task/use-the-playbook.html" rel="nofollow">プレイブック</a>機能があれば、経験の浅いアナリストでも自社のベストプラクティスを使用して、誰かに教えてもらうことなくインシデントに対応することができます。<br />プレイブックからは、標準的なオペレーション手順&#xff08;SOP&#xff09;と特定のタイプのインシデントに対応する際の手順が提供されます。またこれはワークスペース内にあるため、セキュリティインシデントの対応中にも簡単に参照することができます。</p>
<p style="text-align: center;"><img src="https://community.servicenow.com/5d8af374dbb367802be0a851ca961974.iix" /></p>
<p> </p>
<p><br /><span style="font-size: 12pt;"><strong>ピークビュー</strong></span><br />ピークビューがあれば、ページ全体を再読み込みする必要なく、インシデントリストからインシデントを確認できます。そのため複数のインシデントに迅速に目を通し、以下を確認することができます。</p>
<ul><li>割り当てグループ</li><li>ビジネスへの影響度</li><li>優先順位</li><li>投稿者</li><li>最終更新者</li><li>脅威インジケーター</li><li>プレイブックが利用できるかどうか</li></ul>
<p style="text-align: center;"><img src="https://community.servicenow.com/98da3fb4dbb367802be0a851ca961939.iix" /></p>
<p><br /><strong><span style="font-size: 12pt;">タブ化されたインターフェイス</span></strong><br />ダッシュボードにあるページ上部のタブを使って、複数のインシデントを同時に開いて作業することができます。</p>
<p style="text-align: center;"><img src="https://community.servicenow.com/bbfa3bf4dbb367802be0a851ca9619f2.iix" /></p>
<p><br />各インシデントには、[Overview]、[Explore]、[Activity Stream]タブがあります。<br />[Overview]タブでは、必要なすべてのデータを一か所で確認することができます。他のアプリケーションやコンソールを開く必要はありません。自動アクションによってタイルも表示されます。またワークスペースはカスタマイズが可能なため、必要に応じてタイルを動かしたり、非表示にしたりすることができます。<br />[Explore]タブでは、インシデントの詳細を確認したり、調査に役立つように詳細を追加したり、アーティファクトの充実化や脅威の根絶を自動的に実行したりすることができます。このページのウィジェットを[Overview]タブにピン留めすることも可能です。</p>
<p><span style="font-size: 14pt;"><strong>メール検索および削除の機能</strong></span><br />メール検索および削除の機能では、フィッシング攻撃を回避するため、組織全体を対象にメールを検索し、それを削除することができます。<br />たとえば、「週次の監査メール」という件名の疑わしいメールを受け取ったという報告がユーザーから寄せられた場合です。そのメールがフィッシング攻撃であることを特定したら、その件名のすべてのメールを検索して削除することで、他のユーザーがそのメールを開くことを防ぎます。<br />この機能のデモは下の動画よりご覧いただけます。</p>
<p><strong><span style="font-size: 12pt;">詳細情報&#xff1a;</span></strong><br />詳細については、以下の動画で新しいUIの実際の動作をご覧ください。</p>
<p style="text-align: center;"><iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/vjU2NiRRcw4"></iframe></p>
<p> </p>
<p> </p>
<p><a href="https://docs.servicenow.com/bundle/london-security-management/page/product/planning-and-policy/concept/c_SecurityManagement.html" rel="nofollow">Security Operations</a>&#xff08;製品ドキュメント&#xff09;<br /><a href="https://docs.servicenow.com/bundle/london-release-notes/page/release-notes/security-operations/secops-sec-inc-resp-rn.html" rel="nofollow">Londonのセキュリティインシデント対応リリースノート</a>&#xff08;製品ドキュメント&#xff09;<br /><a href="https://docs.servicenow.com/bundle/london-security-management/page/product/security-incident-response/task/use-the-playbook.html" rel="nofollow">プレイブックでセキュリティ脅威を解決</a>&#xff08;製品ドキュメント&#xff09;<br /><a href="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/resource-center/infographic/info-security-service.pdf" rel="nofollow">2017年セキュリティインシデント対応の現状</a>&#xff08;インフォグラフィック&#xff09;</p>
<p>--<br />ServiceNowでは、お客様に重要な情報をお届けするために、Knowledge Management&#xff08;ナレッジ管理&#xff09;チームおよびMultimedia&#xff08;マルチメディア&#xff09;チームと、それぞれのテーマのエキスパートが密に連携しています。特定のトピックが頻繁に登場することもありますが、私たちはベストプラクティスの形をとることで、お客様がServiceNowのインスタンスをスムーズに実行できるようにすることを目指しています。このシリーズではそうしたトピックに的を絞ることで、当社の専門的知識の数々からメリットを獲得していただけるようにしています。このシリーズで取り上げてほしいベストプラクティスのトピックがありましたら、ぜひ下のコメント機能よりお知らせください。</p>
<p>このシリーズのすべてのブログ記事をご覧になりたい場合は、NOWSupportベストプラクティスリストをご利用ください。</p>