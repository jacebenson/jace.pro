---
title: "Scripting Tips GlideRecord"
date: 2018-11-12T17:32:16.000Z
authors: ["taku"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=2674b4acdbf127002e8c2183ca9619ab"
---
<p>[Scripting Tipsシリーズ]と題しまして、Scriptingに関する小技を紹介していきます。<br />本シリーズは、「ある程度のスクリプティングはできるスキルレベル」を前提としておりますので、細かい解説は省略していきますのでご了承ください。</p>
<p>記念すべき第&#xff11;回のテーマは「GlideRecordのクエリ条件は超簡単に書ける&#xff01;」です。</p>
<p> </p>
<p>まず、こちらをご覧下さい。よくあるGlideRecordの記述です。</p>
<pre class="language-javascript"><code>var gr &#61; new GlideRecord(&#39;incident&#39;);
gr.addQuery(&#39;active&#39;,&#39;true&#39;);
gr.addQuery(&#39;priority&#39;,1);
gr.query();
while(gr.next()){
   //ここに処理を記載
}
</code></pre>
<p> </p>
<p>インシデントテーブルに対して、優先度が&#xff11;で、アクティブなレコードを抽出して処理するクエリ条件です。<br />この書き方でも良いのですが、抽出条件がたくさんあったり、「あれ&#xff1f;NULL判定はどうやって書くの&#xff1f;」となったり、日付など複雑になると、try&amp;errorを繰り返しながらデバッグしたり、結構大変だと思います。<br />これを一発で書く方法があります&#xff01;</p>
<p> </p>
<p>まず、対象となるテーブルのリスト画面を開きます。&#xff08;ここでは、対象テーブルをインシデントテーブルとします。&#xff09;<br />次に、リスト画面でスクリプトで書きたいクエリ条件をリストのフィルタで設定します。<br />設定後、フィルタ条件の一番右側の条件を右クリックし、&#34;クエリのコピー&#34;を選択します。</p>
<p><img style="max-width: 100%; max-height: 480px;" src="51dfe4ecdbb127002e8c2183ca9619a0.iix" /></p>
<p> </p>
<p>ここでコピーしたクエリを利用して、スクリプトを以下のように記載します。</p>
<pre class="language-javascript"><code>QueryString &#61; &#39;priority&#61;1^active&#61;true&#39;; //ここにコピーしたクエリをペースト

var gr &#61; new GlideRecord(&#39;incident&#39;);
gr.addEncodedQuery(QueryString);
gr.query();
while(gr.next()){
   //ここに処理を記載
}
</code></pre>
<p> </p>
<p>このスクリプトは&#xff11;つ目のスクリプトと同じ動作となります。<br />複雑なクエリも簡単にかけますし、しかも、抽出した後の結果をリスト画面で確認しながらクエリを書くことができるので、開発生産性も大いに向上するでしょう&#xff01;<br />メンテナンス性も含め、こちらの書き方で覚えましょう。</p>
<p> </p>
<p>&#xff1c;参考&#xff1e;<br /><a href="https://docs.servicenow.com/bundle/london-platform-user-interface/page/use/using-lists/task/t_GenEncodQueryStringFilter.html" rel="nofollow">Docs「フィルタを使用してエンコードされたクエリ文字列を生成する」</a><br /><a href="https://docs.servicenow.com/bundle/london-application-development/page/app-store/dev_portal/API_reference/glideRecordScoped/concept/c_GlideRecordScopedAPI.html" rel="nofollow">Docs「APIリファレンス」&#xff1e;「GlideRecord - Scoped」</a></p>