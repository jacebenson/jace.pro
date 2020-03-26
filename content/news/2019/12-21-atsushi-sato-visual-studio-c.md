---
title: "Visual Studio Code  ServiceNow "
date: 2019-12-20T12:33:32.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=f3c88b06dbf94c501cd8a345ca961944"
---
<p>ServiceNow 上でアプリケーションを開発する際、Low Code/No Code 開発プラットフォームとは言え、やはり多少なりには JavaScript でコーディングする場面があります。コーディングを行う際に利用されるのが JavaScript syntax editor と呼ばれるエディタコンポーネントになります。New York バージョンからは JavaScript syntax editorのベースとなるコンポーネントに Monaco (<a href="https://microsoft.github.io/monaco-editor/" rel="nofollow">https://microsoft.github.io/monaco-editor/</a>)が採用され、ユーザビリティが向上し効率的にコーディングを行う事ができるようになりました。また、Monaco を採用した事で、メソッドをコールした際にドキュメントや実装部分に即座にジャンプすることのできるコンテキストメニューなどコーディングを効率的に行う為の機能が追加されました。</p>
<p> <img src="https://community.servicenow.com/806887c2dbf94c501cd8a345ca9619b2.iix" /></p>
<p>しかし、JavaScript syntax editor が機能強化されたとはいえ、普段から Visual Studio Code や Eclipse のようなリッチなエディタ機能を持つ統合開発環境(IDE)を利用している開発者は、ServiceNow アプリの JavaScript のコーディングもこういった IDE の持つエディタを利用したいと感じているのではないでしょうか&#xff1f;</p>
<p>実は、Visual Studio Code で ServiceNow アプリの開発を可能にする”ServiceNow® Extension for VS Code”( <a href="https://marketplace.visualstudio.com/items?itemName&#61;ServiceNow.now-vscode" rel="nofollow">https://marketplace.visualstudio.com/items?itemName&#61;ServiceNow.now-vscode</a>)という Extension が存在します。</p>
<p>今回は、この Extension の使い方を紹介します。</p>
<p>まず、この Extension を利用するための前提は以下のようになっています。</p>
<p>• ServiceNow® New York release<br />• Node.js 8.0 and above<br />• Visual Studio Code v1.38 or later</p>
<p>Node.js の導入が必要になるので、開発環境に導入されていない場合には、https://nodejs.org/ からダウンロードし導入を行ってください。</p>
<p>それでは、実際に Visual Studio Code に ServiceNow® Extension for VS Code を導入してみましょう。Visual Studio Code を起動し、サイドバーにある Extension を開き、”ServiceNow”で検索することで、Extension が検索されるので、それを選択し有効化するだけで導入は完了になります。</p>
<p> <img src="https://community.servicenow.com/976847c2dbf94c501cd8a345ca9619f9.iix" /></p>
<p>次に、実際に ServiceNow のアプリケーションを Visual Studio Code に取り込んでみましょう。Extension を有効化すると、ウィンドウの左下に”Create Project”というメニューが追加されるので、それをクリックします。すると、ServiceNow のインスタンス URL やクレデンシャル情報を聞かれるので、指示に従って必要な値を入力してください。インスタンスに正しく接続ができると、すでに ServiceNow 上に存在しているアプリケーションの一覧が表示されるので、Visual Studio Code に取り込みたいアプリケーションを選択してください。すると、ServiceNow アプリケーションが Visual Studio Code に取り込まれます。ServiceNow アプリケーションの中で JavaScript でコーディングが可能な Business Rule や Client Script などはVisual Studio Code 上でコーディングが可能になります。</p>
<p><img src="https://community.servicenow.com/54984fc2dbf94c501cd8a345ca9619bf.iix" /></p>
<p>また、変更したコードはウィンドウ下部にある”Sync Project” を実行することでサーバーに変更が反映されます。逆にサーバー側で変更がされた内容も反映させる事も可能です。競合が発生した場合にはマージ作業も可能です。</p>
<p> <img src="https://community.servicenow.com/b198cfc2dbf94c501cd8a345ca96190a.iix" /></p>
<p>その他、ファイル検索機能や新規アプリケーションファイルの作成などもここから行う事が可能になります。ただし、新規の Business Rule などの作成時には実行条件などの設定が現段階ではできないので、Studio 上でひな形だけ作成し実際のコーディングを Visual Code Studio を利用することをおすすめします。</p>
<p>Visual Studio Code に ServiceNow® Extension for VS Code を使う事で、高機能な統合開発環境での ServiceNow アプリケーションのコーディングが可能になるので、試してみてください&#xff01;</p>