---
title: "ServiceNow New York"
date: 2019-09-29T19:22:13.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=bdb1eab7db800450414eeeb5ca9619e9"
---
<p>この記事は、ServiceNow開発者向けブログ&#xff08;<a href="https://developer.servicenow.com/blog.do" rel="nofollow">Developer Blog</a>&#xff09;の記事の抄訳です。</p>
<p>オリジナル記事&#xff1a;「<a href="https://developer.servicenow.com/blog.do?p&#61;/post/ny_flow_designer/" rel="nofollow">NEW YORK: FLOW DESIGNER</a>」 by Andrew Barnes</p>
<p> </p>
<h2>インラインスクリプト&#xff08;Inline Scripting&#xff09;</h2>
<p> <img src="https://community.servicenow.com/0121ea7bdb800450414eeeb5ca961913.iix" /></p>
<p>フローデザイナーで私が最も期待しているNew Yorkの新機能の1つは、インラインスクリプトです。インラインスクリプトの導入により、開発者は単純な目的のためだけに新しいアクションを作成することなく、小規模なデータ調整を行うことができます。単純な数学演算などはユースケースの良い例です。リストの解析、オブジェクトのデータ型の切り替え、およびスクリプトインクルードへのアクセスは、効果が期待できる活用場所の一例です。日付操作&#xff08;gs.daysAgo&#xff08;-2&#xff09;&#xff09;にも活用ができるでしょう。</p>
<p> </p>
<p>フローに配置する各アクションに対し、スクリプトを記入できるボックスが表示されます。表示の有無はロールと設定で制御します。 flow_designer_scriptingまたはadminロールを持つユーザーのみに、スクリプトアイコンとボックスが表示されます。フローの所有者は、フローの設定&#xff08;Configurations&#xff09;からスクリプトアイコンの表示を切り替えることも可能です。</p>
<p><img src="https://community.servicenow.com/4631263bdb800450414eeeb5ca961933.iix" /></p>
<p> </p>
<h2>受信メールトリガー&#xff08;Inbound Mail Trigger&#xff09;</h2>
<p> <img src="https://community.servicenow.com/a54126bbdb800450414eeeb5ca96190b.iix" /></p>
<p>受信アクションは、私が最初に詳しくなったプラットフォームツールの1つで、電子メール処理のスクリプトとその電子メールに基づいて実行されるアクションを処理するために不可欠なプロセスです。これに対して、New Yorkバージョンで新たに導入されたのは、まったく新しいトリガータイプである受信メール&#xff08;Inbound Email&#xff09;です。この新しいトリガーにより、スクリプト作成をほとんど、またはまったく必要とせずに電子メールを処理できるようになります。元々ある受信アクションに変更はありません。このフロートリガーは受信アクションが実行される前に挿入され、受信アクションを呼び出す前に電子メール処理を実行できます。</p>
<p> </p>
<p>受信メールトリガーを使い始めるには、まず新しいフローを作成し、トリガーリストで受信メールトリガーオプションを選択します。また、条件を選択することにより、受信メールレコードに対するフローの一致を制限することができます。<strong>注意&#xff1a;</strong>返信レコードタイプは、新しいインタラクションの場合ではなく、返信レコードを既存のレコードに渡す場合のみ選択してください。トリガーを設定したら、アクションを使ってロジックを作成できます。</p>
<p> </p>
<p>アクションピッカーで特に注目すべきは、2つの新しいアクションです。&#xff11;つはAssociate Record to Email&#xff08;レコードを電子メールに関連付ける&#xff09;で、ほぼ名前の通りの内容のアクションです。詳細については、<a href="https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/administer/flow-designer/reference/associate-to-email-action.html" rel="nofollow">こちらのドキュメント</a>をご覧ください。この単純なアクションは、入力として電子メールレコードを取得し、ターゲットレコードに関連付けをします。返信レコードの場合はすでにターゲットレコードに関連付けられているため、このアクションの標準的な使用例は新規の電子メールレコードの場合です。</p>
<p> <img src="https://community.servicenow.com/3251ee7bdb800450414eeeb5ca9619d4.iix" /></p>
<p> </p>
<p>Move Email Attachment to Record&#xff08;電子メールの添付ファイルをレコードに移動する&#xff09;も、もう1つの重要なアクションです。受信アクションはすべての添付ファイルをターゲットレコードに自動的に移動しますが、受信メールトリガーを含むフローは自動的に移動しません。この最新のアクションは、すべての添付ファイルを受信メールからターゲットレコードに移動します。一部の添付ファイルのみを移動する場合は、既存のLookup AttachmentかMove Attachmentを使用します。</p>