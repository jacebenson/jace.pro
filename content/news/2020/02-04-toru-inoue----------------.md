---
title: "ATF"
date: 2020-02-03T07:16:35.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=33cf6d60db7e40d413b5fb2439961930"
---
<p class="ng-scope"><em>※本記事は、ServiceNowのパートナー様より寄稿いただいたものをServiceNow社員が代理で投稿しています</em></p>
<p class="ng-scope"> </p>
<p class="ng-scope">&#xff1d;&#xff1d;&#xff1d;</p>
<p>皆さん、こんにちは。株式会社富士通九州システムズのServiceNowチームです。</p>
<p>弊社は富士通グループの中でも、特にインプリ&#xff08;構築/カスタマイズ&#xff09;に特化した活動を行っています。</p>
<p> </p>
<p>今回はServiceNowのテスト自動化ツールである、ATF&#xff08;Automated Test Framework&#xff09;のご紹介です。</p>
<p> </p>
<p><span style="font-size: 18pt;"><u>解決したいこと　　　　　　　　　　　　　　　　　　　　</u></span></p>
<p>ServiceNowを導入するうえで皆さんの頭を悩ませる1つとして、インスタンスのバージョンアップ作業があると思います。</p>
<p>ご存知の通り、ServiceNowのファミリーバージョンは半年に1回リリースされ、サポートされるのは最新 -1 バージョンまでです。従って、最低でも年1回はファミリーバージョンアップ対応が必要となります。</p>
<p>このバージョンアップ作業にて、最も時間がかかるのがリグレッションテストです。これはカスタマイズ量が多ければ比例して対応時間も増えていくことになります。</p>
<p> </p>
<p>そこで、ServiceNowではテスト自動化ツールとしてATFが用意されています。</p>
<p>ATFを利用することで、バージョンアップ作業におけるリグレッションテスト作業が大幅に効率化できます。</p>
<p> </p>
<p><span style="font-size: 18pt;"><u>ATF&#xff08;Automated Test Framework&#xff09;とは&#xff1f;　　　　　　　　</u></span></p>
<p>まず、ATF&#xff08;Automated Test Framework&#xff09;について説明します。先に記載した通り、ATFはServiceNowが標準で用意しているテスト自動化ツールです。ATFを実行することでテスト結果レコードが生成され、ServiceNow上に保存されます。また、コーディングなしでテストパターンが作成でき、簡単に実行できます。</p>
<p> </p>
<p><span style="font-size: 18pt;"><u>ATF設定方法は&#xff1f;　　　　　　　　　　　　　　　　　　　</u></span></p>
<p>実際にATFの設定方法を見ていきます。</p>
<p>注意&#xff1a;今回使用したインスタンスのバージョンはNew York Patch 2です。バージョンが異なる場合、設定方法や見た目など挙動が異なる場合があります。</p>
<p>&#xff11;&#xff0e;ナビゲーションメニュー[Automated Test Framework] &gt; [Administration] &gt;[Properties]を開きます。<br />&#xff12;&#xff0e;テスト/テストスイートの実行を有効にします。スケジュール実行する場合は2個目のチェックボックスも有効にします。</p>
<p><img src="https://community.servicenow.com/9f4ba920db3e40d413b5fb2439961909.iix" /></p>
<p> </p>
<p>&#xff13;&#xff0e;ナビゲーションメニュー[Automated Test Framework] &gt; [Tests]を開きます。<br />&#xff14;&#xff0e;Testの新規作成を行います。</p>
<p><img src="https://community.servicenow.com/d46b2120db3e40d413b5fb2439961993.iix" /></p>
<p> </p>
<p>&#xff15;&#xff0e;Name(今回はMy New Test1)を入力し保存します。</p>
<p><img src="https://community.servicenow.com/597bad20db3e40d413b5fb24399619ae.iix" /></p>
<p> </p>
<p>&#xff16;&#xff0e;Test StepsタブのAdd Test Templateボタンよりテストステップを追加します。</p>
<p><img src="https://community.servicenow.com/158bed20db3e40d413b5fb24399619c7.iix" /></p>
<p> </p>
<p>今回使用したTestStepは以下の通りです。</p>
<p><img src="https://community.servicenow.com/af0de9e4db3e40d413b5fb24399619c4.iix" /></p>
<p>※個々のStepの設定方法などに関しては、ServiceNow公式ドキュメントを参照ください。</p>
<p> </p>
<p>&#xff17;&#xff0e;テストをRun Testボタンから実行。別ブラウザが立ち上がりATFは実行されます。</p>
<p><img src="https://community.servicenow.com/307de568db3e40d413b5fb243996195d.iix" /></p>
<p> </p>
<p> </p>
<p><span style="font-size: 18pt;"><u>実際に動かしてみた&#xff01;　　　　　　　　　　　　　　　　 　</u></span></p>
<p> </p>
<p><span style="font-size: 14pt;">(テストでやりたいこと)</span></p>
<p>仮に、インシデント起票時に自動でDescriptionに「説明」という文字列を設定するようなカスタマイズを行っていたとします。そこに、バージョンアップでDescriptionがRead Onlyフィールドになったとします。Descriptionに「説明」という文字列を設定するカスタマイズは、バージョンアップの影響で正常に動作しなくなります。これを、ATFを使って検知してみます。</p>
<p><img src="https://community.servicenow.com/459d6d68db3e40d413b5fb24399619c4.iix" /></p>
<p> </p>
<p><span style="font-size: 14pt;">(テスト結果)</span></p>
<p>まず、ATF(1回目)を実行します。インシデントを起票し、Descriptionに「説明」が入っているかどうかATFを使って確かめます。</p>
<p> </p>
<p>今回、組んだテストステップは全&#xff19;つです。</p>
<p>テストステップ関連リストは、個々のステップとテストで実行する順序を定義します。</p>
<p><img src="https://community.servicenow.com/aecda5a8db3e40d413b5fb2439961972.iix" /></p>
<p> </p>
<p>テストを実行します&#xff01;</p>
<p><img src="https://community.servicenow.com/a2dd6da8db3e40d413b5fb243996192f.iix" /></p>
<p> </p>
<p>テストを実行している間は、テストランナーと呼ばれるウインドウが開かれます。テストを実行するときにテストランナーが利用できない場合、システムはユーザがテストランナーを開くように求められます。</p>
<p>テストを実行後、フレームワークはテスト結果レコードを作成します。</p>
<p><img src="https://community.servicenow.com/5fededa8db3e40d413b5fb2439961903.iix" /></p>
<p> </p>
<p>ATFは全て成功しています&#xff01;</p>
<p><img src="https://community.servicenow.com/dbfd25e8db3e40d413b5fb2439961993.iix" /></p>
<p> </p>
<p>このようにATFは結果レコードの表示と共にテストステップごとのスクリーンショットを取得してくれます。</p>
<p> </p>
<p>次に、バージョンアップが行われた後、ATF&#xff08;&#xff12;回目&#xff09;を実行します。</p>
<p>バージョンアップ後はDescriptionがRead Onlyになった影響で、Descriptionへの「説明」という文字列の設定に失敗します。</p>
<p><img src="https://community.servicenow.com/fa1eade8db3e40d413b5fb24399619d5.iix" /></p>
<p> </p>
<p>ATFはバージョンアップによる障害を検知しました&#xff01;&#xff01;&#xff01;</p>
<p> </p>
<p>障害の詳細として以下の項目が表示されています。</p>
<ul><li>失敗したステップ&#xff1a;Open an Existing Record (既存のレコードを開く)</li><li>サマリー&#xff1a;FAILURE: Failed to open the &#39;incident&#39; form with id &#39;548b16cfdb520010863eb08039961922&#39;</li><li>エラー&#xff1a;テーブル「インシデント」にはID「548b16cfdb520010863eb08039961922」のレコードがありません</li><li>失敗したステップのスクリーンショット&#xff1a;screenshot_2020_01_17_02_22_16_failed.jpg</li></ul>
<p><img src="https://community.servicenow.com/8d5e2d2cdb3e40d413b5fb2439961997.iix" /></p>
<p> </p>
<p>障害の詳細を見るとバージョンアップによりDescriptionが読み取り専用となってしまったため、Business Rulesが働いて値を設定してインシデントのレコードを保存しようとしても保存できなくなってしまっています。保存したはずのレコードを開く際に障害を検知しています。</p>
<p> </p>
<p><span style="font-size: 18pt;"><u>終わりに　　　　　　　　　　　　　　　　　　　　　　　</u></span></p>
<p>このようにATFを利用することで、最低でも年1回必要となるファミリーバージョンアップ対応におけるリグレッションテストを自動化し、作業効率化が期待できます。是非、皆さまの環境でもATFを試してみてください。</p>
<p>この記事がご覧いただいた方の参考になれば幸いです。最後までお付き合いいただきありがとうございました&#xff01;</p>