---
title: "CMDB   "
date: 2019-03-06T16:59:41.000Z
authors: ["Eita Cho"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=3c423701db40fb48feb1a851ca961942"
---
<p>構成管理データベース(CMDB)の構築が、ITILv1から提唱されました。多くの会社がその実装に取り組んできましたが、日本での成功事例はまだ少数となっております。構築した段階での失敗はともかく、一度多くの時間と労力をかけて構築し終えたものが、時間が経つにつれデータが陳腐化したり、データセンターの状況を正しく反映できていない、つまり正確さが欠けることで、結局ユーザから利用されなくなってしまいます。ということで、一般的に良いCMDBは以下の質問に答えられるかどうかにかかっています。</p>
<ul><li>自社のIT環境において何が使用されているか、またどのように使用されているかご存じですか&#xff1f;</li><li>その情報は最新かつ正確ですか&#xff1f;</li></ul>
<p><a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" rel="nofollow">NOWsupportベストプラクティスシリーズ</a>の今回のブログは、ServiceNowの構成管理データベース&#xff08;CMDB&#xff09;アプリケーションの基本をお伝えし、またその詳細を把握するためのリソースを提供いたします。<a href="https://www.youtube.com/channel/UCQjE37R-Y4DTq7kUWPO83Wg" rel="nofollow">YouTubeのNOWsupportのチャンネル</a>には<a href="https://youtu.be/zuZFEEW0wTs" rel="nofollow">CMDBの概要動画</a>も掲載していますので、どうぞご覧ください。動画には、CMDBのより詳細な情報や具体的なシナリオが用意されているため、インスタンスにおけるCMDBの有効性をより深く理解することができます。 </p>
<p><iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/zuZFEEW0wTs"></iframe></p>
<p><span style="font-size: 14pt;"><strong>CMDBとは&#xff1f;</strong></span></p>
<p>CMDBとは基本的にデータの貯蔵庫で、構成アイテム&#xff08;CI&#xff09;を説明する情報や資産関連の情報を格納するために使用されます。またCMDBにはCI間のリレーションシップも含まれます。</p>
<p> </p>
<p><span style="font-size: 14pt;"><strong>CIとは&#xff1f;</strong></span></p>
<p>CIとは、サービスを提供するために使用される、個別に識別されたコンポーネントです。これにより変更を制御することができます。CIは物理的エンティティ&#xff08;サーバーなど&#xff09;や論理的エンティティ&#xff08;アプリケーションなど&#xff09;であることも、オペレーション上の構成&#xff08;サーバー群など&#xff09;であることもあります。</p>
<p style="text-align: center;"><img src="https://community.servicenow.com/c4a244fddb00b300feb1a851ca961986.iix" /></p>
<p> </p>
<p><span style="font-size: 12pt;"><strong>CMDBを維持管理するメリットとは&#xff1f;</strong></span></p>
<p>&#xff08;基礎的<span style="color: #000000;">構成管理機能</span>と共に&#xff09;CMDBを維持管理するメリットには、以下があります。</p>
<ul><li><a href="https://www.servicenow.co.jp/products/it-service-management.html" rel="nofollow">サービス管理</a>(日本語)</li><li><a href="https://www.servicenow.co.jp/products/asset-management.html" rel="nofollow">資産管理</a></li><li><a href="https://www.servicenow.co.jp/products/it-operations-management.html" rel="nofollow">オペレーションマネジメント</a>&#xff08;日本語&#xff09;</li><li><a href="https://www.servicenow.co.jp/products/security-operations.html" rel="nofollow">情報セキュリティ</a>&#xff08;日本語&#xff09;</li><li><a href="https://www.servicenow.co.jp/products/cloud-management.html" rel="nofollow">クラウドオペレーション</a>&#xff08;日本語&#xff09;</li><li><a href="https://www.servicenow.co.jp/products/governance-risk-and-compliance.html" rel="nofollow">コンプライアンス</a>&#xff08;日本語&#xff09;</li></ul>
<p> </p>
<p><span style="font-size: 14pt;"><strong>CMDBを構築するには&#xff1f;</strong></span></p>
<p>ServiceNowの構成管理データベース&#xff08;CMDB&#xff09;アプリケーションを使って、<span style="color: #000000;">ServiceNow CMDBへデータを取り込むが</span>できます。その方法には以下の3通りがあります。</p>
<ol><li>インポートセットを使用して手動で取り込む</li><li>既存の外部CMDBと統合する</li><li>ServiceNowの<a href="https://www.servicenow.co.jp/products/discovery.html" rel="nofollow">ディスカバリ</a>アプリケーションおよび<a href="https://www.servicenow.co.jp/products/service-mapping.html" rel="nofollow">サービスマッピング</a>アプリケーションを使って自動的に取り込む</li></ol>
<p> </p>
<p><span style="font-size: 14pt;"><strong>CMDBの管理にServiceNowがどのように役立つのか&#xff1f;</strong></span></p>
<p><span style="font-size: 12pt;"><strong>ディスカバリ</strong></span></p>
<p>ディスカバリアプリケーションでは、水平ディスカバリと呼ばれるプロセスを用いて、ネットワークにあるアプリケーションやデバイス、およびそれらのデバイスの重要な属性を見つけ出します。個々のCIの詳細情報、通信情報を元にCI間の依存性関係&#xff08;Dependency Mapping&#xff09;も発見します。そうして発見した情報を使用してCMDBをアップデートします。一方、<span style="color: #0000ff;">特定のビジネスサービス</span>を構成するCI間のリレーションシップ、いわゆるサービスマッピングの構築を行いません。</p>
<p style="text-align: center;"><img src="https://community.servicenow.com/94550839db40b300feb1a851ca961972.iix" /></p>
<p> </p>
<p><strong><span style="font-size: 12pt;">サービスマッピング</span></strong></p>
<p>サービスマッピングアプリケーションはディスカバリを補完するもので、トップダウンマッピングを使用して、電子メールサービスなどのビジネスサービスを構成するCIを見つけ、マップします。これにより、サービスを提供するために使用されているすべてのCIを可視化することができます。</p>
<p style="text-align: center;"><img src="https://community.servicenow.com/37e5003ddb40b300feb1a851ca961939.iix" /></p>
<p> </p>
<p> </p>
<p> </p>
<p><strong><span style="font-size: 14pt;">CMDB健全性、CMDB調整、CMDBライフサイクル管理</span></strong></p>
<p>ServiceNowの構成管理データベース&#xff08;CMDB&#xff09;アプリケーションには、<a href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/product/configuration-management/concept/c_CMDBHealth.html" rel="nofollow">CMDB健全性</a>、<a href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/product/configuration-management/concept/c_CMDBIdentifyandReconcile.html" rel="nofollow">CMDB識別および調整</a>、<a href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/product/configuration-management/concept/cmdb-ci-lifecycle-mgmt.html" rel="nofollow">CMDB CIライフサイクル管理</a>という機能もあるため、健全性上の問題の管理および検出、データ整合性上のデータのリコンサイル、データライフサイクルの管理を行うことができます。</p>
<p>CMDB健全性ダッシュボードは、CMDBの健全性を評価・管理する際に役立ちます。ここでは以下のカテゴリに基づいてCMDBのデータ品質のスコアを集計し、スコアカードにします。</p>
<ul><li>完全性&#xff1a;つまり実装中の属性における必要な属性の割合</li><li>コンプライアンス&#xff1a;所定のコンプライアンス監査に準拠しているCIデータの割合</li><li>正確性&#xff1a;CIが現状を表しているかどうかを示す</li></ul>
<p>これらのカテゴリのそれぞれで、スコア化の重み付けルールを調整することができます。またスコアの集計方法も変更できます。</p>
<p style="text-align: center;"><img src="https://community.servicenow.com/d73e8cb1dbc0b300feb1a851ca961992.iix" /></p>
<p> </p>
<p>詳細情報を</p>
<p><a href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/product/configuration-management/concept/c_ITILConfigurationManagement.html" rel="nofollow">構成管理データベース&#xff08;CMDB&#xff09;</a>&#xff08;製品ドキュメント、日本語&#xff09;</p>
<p><a href="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/resource-center/data-sheet/ds-configuration-management.pdf" rel="nofollow">ServiceNow構成管理データベース</a>&#xff08;データシート、日本語&#xff09;</p>
<p><a href="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/resource-center/infographic/info-elements-of-an-initial-configuration-management-capability.pdf" rel="nofollow">基本の構成管理機能の要素</a>&#xff08;インフォグラフィック&#xff09;</p>
<p><a href="https://docs.servicenow.com/bundle/london-it-operations-management/page/product/discovery/reference/r-discovery.html" rel="nofollow">ディスカバリ</a>&#xff08;製品ドキュメント&#xff09;</p>
<p><a href="https://docs.servicenow.com/bundle/london-it-operations-management/page/product/service-mapping/reference/c_ServiceMappingOverview.html" rel="nofollow">サービスマッピング</a>&#xff08;製品ドキュメント&#xff09;</p>
<p><a href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/product/configuration-management/concept/c_CMDBHealth.html" rel="nofollow">CMDB健全性</a>&#xff08;製品ドキュメント、日本語&#xff09;</p>
<p><a href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/product/configuration-management/concept/c_CMDBIdentifyandReconcile.html" rel="nofollow">CMDB識別および調整</a>&#xff08;製品ドキュメント、日本語&#xff09;</p>
<p><a href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/product/configuration-management/concept/cmdb-ci-lifecycle-mgmt.html" rel="nofollow">CMDB CIライフサイクル管理</a>&#xff08;製品ドキュメント、日本語&#xff09;</p>
<p>--</p>
<p> </p>
<p>このシリーズのすべてのブログ記事をご覧になりたい場合は、<a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" rel="nofollow">NOWSupportベストプラクティスリスト</a>をご利用ください。</p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>