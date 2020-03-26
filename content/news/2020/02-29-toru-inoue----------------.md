---
title: "ServiceNowBox"
date: 2020-02-28T06:10:39.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=a5705a20db97889023f4a345ca9619be"
---
<p class="ng-scope"><em>※本記事は、ServiceNowのパートナー様より寄稿いただいたものをServiceNow社員が代理で投稿しています</em></p>
<p class="ng-scope"> </p>
<p class="ng-scope">&#xff1d;&#xff1d;&#xff1d;</p>
<p>皆さん、こんにちは。日本アイ・ビー・エムServiceNow Practiceチームです。</p>
<p> </p>
<p>そういえば、少し昔の話になりますがKingstonリリースの際にIntegrationHub機能が追加されました。パートナーの皆様もこの機能をポイントとして提案活動を行われたこともあるかと思います。さて、このIntegrationHubですが、最近はますますSpokeの数が増えてオーケストレーションの幅が広がりました。SlackやBoxに始まり、Adobe SignやOktaなどまだまだその可能性を広げ続けています。</p>
<p>ですが実際に実装されたケースは国内だとどれくらいあるのでしょうか&#xff1f;ServiceNowの強みはOOTBです。Box連携のようなものが簡単にできたらそれだけで既存の業務のあり方を変えられるものになります。そういうわけで、今回は「やってみた」企画でございます。ServiceNowのドキュメントに書いてあるとおりにBox連携を行ったらどれくらいの時間で実際に使えるようになるのか検証していきます。追加でスクリプトを書いたりなどはしません。ドキュメントに書かれてあるとおりにやっていきたいと思います。それでは検証スタート&#xff01;</p>
<p>&#xff08;詳しくはドキュメント[<a href="https://docs.servicenow.com/bundle/orlando-servicenow-platform/page/administer/integrationhub-store-spokes/task/setup-box-spoke.html#setup-box-spoke" rel="nofollow">https://docs.servicenow.com/bundle/orlando-servicenow-platform/page/administer/integrationhub-store-spokes/task/setup-box-spoke.html#setup-box-spoke</a>]をご覧下さい。&#xff09;</p>
<p> </p>
<p>[はじめに]</p>
<p>まずはBox Spokeのセットアップ。</p>
<ul><li>IntegrationHub Subscriptionのリクエスト</li><li>Box spokeのアクティベート</li><li>Adminロールのセット</li></ul>
<p>を完了させたら、Box アカウントの設定へ</p>
<p> </p>
<p>[Box側での作業]</p>
<p>ここからはBox側に移り、OAuthの設定を行います。</p>
<p>この作業はBox Developer Portal[<a href="https://developer.box.com" rel="nofollow">https://developer.box.com</a>]上での作業になります。やり方に関してはServiceNowのドキュメントにも書いてありますが、全て英語の活字ですので、もっと丁寧にやり方を教えて欲しいという方はこちらから設定するといいかもしれません。</p>
<p>→ <a href="https://developer.box.com/guides/applications/custom-apps/oauth2-setup/" rel="nofollow">https://developer.box.com/guides/applications/custom-apps/oauth2-setup/</a></p>
<p>&#xff08;どの作業まで行えばいいかはServiceNow側のドキュメントと照らし合わせて下さい。&#xff09;</p>
<p> </p>
<p>[ServiceNow側での作業]</p>
<p>Box側での設定が終わったらServiceNowでの作業に戻ります。ServiceNowのドキュメントではRegister Box as OAuth providerの内容です。</p>
<p>1. System OAuth &gt; Application Registriesに進みます。</p>
<p>どのタイプのOAuth アプリケーションかを問われるので、</p>
<p><strong>Connect to a third party OAuth Provider</strong></p>
<p>を選択して下さい。</p>
<p class="ng-scope"> </p>
<p class="ng-scope"><img src="https://community.servicenow.com/99ec8a20db57889023f4a345ca96197f.iix" /></p>
<p class="ng-scope"> </p>
<p>ここで、Name/Client ID/Client Secret/Default Grant type/</p>
<p>Authorization URL/Token URL</p>
<p>の5つをServiceNowのドキュメントに従って埋めて[Save]します。</p>
<p> </p>
<p>2. すると、Redirect URLとOAuth Entity Profiles related listが自動的に入力されます。Redirect URLの方をコピーしてBox側のRedirect URLの方にペーストします。</p>
<p> </p>
<p>[Credential RecordとConnection Recordの作成]</p>
<p>ここで、Box API CredentialsとBox Upload Credentials、Box API ConnectionとBox Upload Connectionの合計4つを作成します。</p>
<p>1.<strong> [</strong><strong>Connections &amp; Credentials]</strong><strong> </strong><strong>&gt;</strong><strong> [</strong><strong>Credentials] </strong>へと進みます。<br />2. [New]をクリックします。<br />3. どのタイプのCredentialsを作成するか問われるので、<strong>[OAuth 2.0 Credentials]　</strong>を選択します。<br />4. Name/Active/OAuth Entity Profile/Applies to/Orderを埋めます。</p>
<p>下の図のようになります。</p>
<p class="ng-scope"><img src="https://community.servicenow.com/8ffc8a20db57889023f4a345ca961994.iix" /></p>
<p class="ng-scope"> </p>
<p>5. [Submit]します。<br />6. 1-5の手順と同様の作業を行い、Box Upload Credentialを作成します。<br />7.<strong> Connections &amp; Credentials</strong>&gt; <strong>Connection &amp; Credential Aliases</strong>へと進みます。<br />8. [Box]のレコードを開いて、[Connections]のタブから[New]をクリックします。<br />9. 必要事項(Name/Credential/Connection URL)を記入して[Submit]します。<br />10. [Box_Upload]のレコードを開いて、9と同様の作業を行って[Submit]します。</p>
<p> </p>
<p>[最後に]</p>
<p>Box OAuthのトークンを取ってきます。これにてセットアップ完了です。</p>
<p>試しに備え付けのFlowをテストしてみると</p>
<p><img src="https://community.servicenow.com/832dc2a0db57889023f4a345ca961939.iix" /></p>
<p> </p>
<p>きちんと成功しました。</p>
<p>ファイルがアップロードされたことも確認済みです。</p>
<p> </p>
<p> </p>
<p>ここまでで一連のセットアップが終了しました。</p>
<p>所要時間は・・・・・・</p>
<p> </p>
<p>約20分というところです。</p>
<p> </p>
<p>若干急いでやったといえどもまさかこんなに簡単にできるとは思いませんでした・・・</p>
<p> </p>
<p>ここからあとはFlow Designerで自分の行いたいFlowを実装していくという流れにはなりますが、実はすでに2つのFlowが備え付けられております(Move Attachment when created to BoxとOn-boarding user)。この2つのFlowもお手本となるものですので、コピーして上手く使っていくとかなり簡単にいろいろなことが実装できそうだと強く感じました。</p>
<p> </p>
<p>というわけで、今回はBox連携関連の実証企画でしたが、みなさんも簡単にセットアップできますので、ご自身でBox連携を実装してみて下さい。</p>
<p> </p>
<p>最後になりますが、IBMのServiceNowチームの紹介をさせて下さい。</p>
<p>もともと弊社ではServiceNowのビジネスを推進するための組織を持っておりましたが、さらにアプリ・業務領域での取り組みを強化すべく、昨年この領域に特化したチームが編成され、私自身はこのチームに所属しています。加速するIT環境の変化を見据え、弊社の持つ知見やサービス、ソリューション、そしてビジネスノウハウを凝縮させ、組織としての対応能力を拡大しているところです。ServiceNowの持つ可能性を最大限に引き出し、ServiceNowを取り巻くエコシスステムに少なからず貢献していきたいと思っておりますので、今後ともよろしくお願いいたします。</p>