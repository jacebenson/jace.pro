---
title: " ASCAAccenture ServiceNow Configuration Assessment"
date: 2019-12-19T14:34:24.000Z
authors: ["Toru Inoue"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=e8eada7ddbf10c50414eeeb5ca961976"
---
<p class="ng-scope"><em>※本記事は、ServiceNowのパートナー様より寄稿いただいたものをServiceNow社員が代理で投稿しています</em></p>
<p class="ng-scope"> </p>
<p class="ng-scope">&#xff1d;&#xff1d;&#xff1d;</p>
<p>皆さん、こんにちはアクセンチュア株式会社ServiceNowチームです。</p>
<p> </p>
<p>早速ですが、皆さんこういった困りごとはありませんか&#xff1f;</p>
<ul><li>ベストプラクティスが分からないままカスタマイズを入れてきたため環境のメンテナンスに時間がかかっている。</li><li>標準機能に対するカスタマイズを重ねてきたためバージョンアップ対応に時間がかかり過ぎている。</li><li>その結果、せっかく新しい機能がリリースされたのに使いこなせない。</li></ul>
<p> </p>
<p>我々はこういった困りごとに対して、各ServiceNowインスタンスの健康状態を診断するための独自のヘルスチェックツールを開発しました。その名もASCA(Accenture ServiceNow Configuration Assessment)といいます。</p>
<p> </p>
<p>本日はこのASCAについてご紹介をさせてください。</p>
<p> </p>
<p><span style="color: #800080;"><strong>ASCAとは&#xff1f;</strong></span></p>
<p>ASCAはGlobalで1000人以上のServiceNow有識者を擁するAccentureの知見と3000以上のプロジェクト経験を結集させて作りあげた、ServiceNowインスタンス上で稼働するヘルスチェックアプリケーションとなります。診断対象となるServiceNowインスタンスのURLと認証情報を登録すると、ベストプラクティスに基づく50以上の観点でその健康状態を診断してくれる仕組みが実装されています。</p>
<p> </p>
<p><img src="https://community.servicenow.com/e6f816b5dbf10c50414eeeb5ca961980.iix" /></p>
<p>  </p>
<p><span style="color: #800080;"><strong>ASCAがチェックするポイント</strong></span></p>
<p>ASCAは大きく以下7つの観点でServiceNowインスタンスの健康状態を診断します。</p>
<p><img src="https://community.servicenow.com/491992f5dbf10c50414eeeb5ca9619eb.iix" /></p>
<p>詳細は明かせないのですが例えば、</p>
<ul><li>SysIdをハードコーディングしていないか&#xff1f;</li><li>log()を多用していないか&#xff1f;</li><li>デバッグプロパティがTrueになっていないか&#xff1f;</li></ul>
<p>といった、技術的観点でインスタンスの状態を総合的に診断します。各観点には優先度が設定されており、診断結果はそこから設定された優先順位に加え、具体的にどのプログラムの何行目に問題があり、どう直すことを推奨するまで提案をしてくれます。</p>
<p> </p>
<p><span style="color: #800080;"><strong>ASCAが出力するレポート</strong></span></p>
<p>ASCAはServiceNow上で開発されたアプリケーションであるため、その診断結果もServiceNow上で管理されています。当然、診断結果のレポートもServiceNowのレポーティング機能を利用して出力されます。いくつかその例をご紹介させていただきます。</p>
<p> </p>
<p><img src="https://community.servicenow.com/c8491239dbf10c50414eeeb5ca961916.iix" /></p>
<p>(各観点と優先度ごとの診断結果件数)</p>
<p> </p>
<p><img src="https://community.servicenow.com/d8695639dbf10c50414eeeb5ca9619b8.iix" /></p>
<p>(各観点と優先度ごとのヒートマップ)</p>
<p> </p>
<p>AccentureではASCAを利用したインスタンスの診断サービスを提供しています。診断の基準となるコーディング標準やコンフィグ時のルールが定義されており、ASCAの診断結果を受けて、将来的に長くインスタンスを利用していただくために保守性や拡張性の向上、パフォーマンス課題の未然防止、セキュリティ面の強化といった点での改善策を提案させていただいています。ここでご紹介させていただいている情報はごく一部でして、実際にはより詳細なレポート作成を支援させていただいていますので興味も持っていただいた方は是非ご相談ください。</p>
<p> </p>
<p><span style="color: #800080;"><strong>Accentureから見たServiceNowの可能性</strong></span></p>
<p>皆さんServiceNowというとどういったイメージを持っていますか&#xff1f;ITSMのクラウド製品と思われがちですが、SaaS市場で日本の5年先を行くと言われるアメリカを見るともはやITだけではなく、会社全体のサービス管理ツールのプラットフォームとして、人事領域を含めたすべてのビジネスファンクションをカバーするソリューションとしての確固とした地位を築いています。また、ServiceNowのもう1つの特長は、利用者も開発者もその両方がこのプラットフォームを大好きになるということだと思います。ServiceNowのユーザー会は盛況ですし、Knowledgeというグローバルイベントで開催されるセッションの8割以上はユーザーが自らの利用方法を紹介するものです。開発者向けにハッカソンが毎年開催され技術者にもとても愛されているプラットフォームだということがその熱気で感じられます。もちろん、ITSMという観点ではIT部門の業務を幅広く支援する機能を有しているため、今後IT部門が利用するシステムのデファクトスタンダードとなっていくことは間違いありません。</p>
<p> </p>
<p><span style="color: #800080;"><strong>Accentureの紹介</strong></span></p>
<p>最後に、簡単に我々の会社紹介をさせてください。皆さんAccentureというとどういったイメージを持っていますか&#xff1f;よくコンサルティングサービスの会社だと思われていますが、実は技術者も数多く在籍しています。ServiceNowチームには最上位資格であるMaster Architectの取得者が4人いて社内のServiceNowプロジェクトを支えてくれていますし、ServiceNowのいくつかのオフィシャルトレーニングのトレーナーをAccenture社員が担当しています。ServiceNowは自由にアイディアを出し合い、それをすぐに形にすることができるとても創造的なプラットフォームだと考えています。</p>
<p>どういった形であれ、未来を形作る思いやアイディアがありました一緒にそれを実現するお手伝いをさせてください。</p>
<p>アクセンチュア株式会社の詳細はwww.accenture.com/jp をご覧ください。</p>
<p> </p>
<p>アクセンチュア株式会社<br /> 〒107-8672</p>
<p>東京都港区赤坂1-8-1</p>
<p>赤坂インターシティAIR</p>
<p>Tel: 03-3588-3000&#xff08;代&#xff09;</p>
<p>Fax: 03-3588-3001&#xff08;代&#xff09;</p>
<p>Mail: <a href="mailto:info.tokyo&#64;accenture.com" rel="nofollow">info.tokyo&#64;accenture.com</a></p>
<p> </p>
<p>&#xff1d;&#xff1d;&#xff1d;</p>
<p><strong> 関連記事&#xff1a;ServiceNow インスタンスの健全性チェック</strong></p>
<p><a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;4ed7d671dbf10c50414eeeb5ca9619e3" rel="nofollow">https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;4ed7d671dbf10c50414eeeb5ca9619e3</a></p>
<p> </p>