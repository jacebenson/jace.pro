---
title: "ServiceNow "
date: 2019-12-09T13:57:01.000Z
authors: ["Toru Inoue"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=2362bae61b614810fff162c4bd4bcb02"
---
<p class="ng-scope"><em>※本記事は、ServiceNowのパートナー様より寄稿いただいたものをServiceNow社員が代理で投稿しています</em></p>
<p class="ng-scope"> </p>
<p class="ng-scope">&#xff1d;&#xff1d;&#xff1d;</p>
<p class="ng-scope"><img src="https://community.servicenow.com/80ddee6e1bed0810fff162c4bd4bcb23.iix" /></p>
<p>株式会社システムサポートと申します。</p>
<p>2015年にパートナー契約を締結するとともに、技術者のトレーニングやお客様の導入支援を進めて参りました。Sales, Service, Technologyの3プログラムでServiceNow社のパートナーとなり、</p>
<p>2017年にはServiceNowパートナープログラムにおいて、日本企業初のBronzeパートナーとして認定されました。多くの有資格者・技術者を抱え、それに伴い多くのプロジェクト実績を有しています。</p>
<p>現在では、プロジェクト実績や技術力等が評価され、ServiceNow Eliteパートナーに認定されております。</p>
<p> </p>
<p>今回は、弊社技術者による開発環境のメール改善事例をご紹介致します。</p>
<p>開発環境のメール通知には、通知OFFにするか、&#xff11;つのメールアドレスに送信機能を使って運用しているところが多いと思います。</p>
<p class="ng-scope">しかし、その運用ではやりたいことができないケースがありました。そこで、ServiceNowのメールデータを転送するやり方でなら、理想的な解決ができたので事例紹介します。もう数か月間利用していますが、思った以上に良い効果を実感しています。</p>
<p class="ng-scope"> </p>
<p><strong>&#xff0a;開発環境のメール運用で困っていた事</strong><br /> <strong>&#xff0a;困った&#xff11;「&#xff11;つのメールアドレスに送信」の設定でも困る</strong></p>
<p class="ng-scope"><img src="https://community.servicenow.com/362e22621b214810fff162c4bd4bcba5.iix" /></p>
<ul><li>パターンテストなどのいらないメールも含めて&#xff11;つのアドレスに大量に送られてくる。</li><li>複数の開発チームやメンバーが多くなるごとに、知らないメールやConnect chatの連絡通知も増えてきてメール自体を見なくなる。</li><li>開発環境で個別に相手に通知したいとき&#xff08;Connect Chatなど&#xff09;の連絡に、他のテストメールに埋もれて見てもらえなくなる。</li></ul>
<p class="ng-scope"> </p>
<p class="ng-scope"><strong>&#xff0a;困った&#xff12;「メール通知OFF」の設定でも困る</strong></p>
<p class="ng-scope"><img src="https://community.servicenow.com/4cae22a21b214810fff162c4bd4bcbda.iix" width="236" height="68" /></p>
<ul><li>メール通知OFFにすると、本当にメールを受け取るテスト、メールからの操作テストにならない。ServiceNow上で確認はできるけれど、実際にメールアプリで受け取ってみるとServiceNow上では確認できていなかった点が多々ある事に気づきます。</li><li>開発環境からのメール連絡ができない。</li></ul>
<p class="ng-scope"> </p>
<p class="ng-scope"><strong>&#xff0a;「メールデータを転送してから送信する」で解決</strong></p>
<p class="ng-scope"><img src="https://community.servicenow.com/6c0f66261b214810fff162c4bd4bcbc9.iix" /></p>
<p><strong>&#xff0a;この方法で解決した事一覧</strong></p>
<p><strong>&#xff0a;解決した&#xff1d;&#xff1e;「パターンテストとかいらないメールが大量に送られてくる。」</strong></p>
<p class="ng-scope">解決&#xff1a;明示的に自分宛のメール以外は送られてこない。</p>
<p class="ng-scope"> </p>
<p><strong>&#xff0a;解決した&#xff1d;&#xff1e;「複数の開発チームやメンバーが多くなるごとに、知らないメールやConnect Chatの連絡通知も増えてきてメール自体を見なくなる。」</strong></p>
<p>解決&#xff1a;明示的に自分宛のメール以外は送られてこないので、自分の要件だけなのでわかりやすい。</p>
<p> </p>
<p><strong>&#xff0a;解決した&#xff1d;&#xff1e;「開発環境で個別に相手に通知したいとき&#xff08;Connect Chatとか&#xff09;の連絡に、他のテストメールに埋もれて見てもらえなくなる。」</strong></p>
<p>解決&#xff1a;特定のユーザーのメールだけ送信許可できる、それ以外のメールは送信しません。</p>
<p> </p>
<p><strong>&#xff0a;解決した&#xff1d;&#xff1e;「メール通知OFFにすると、本当にメールを受け取るテストにならない。開発環境でのメール連絡ができない。」</strong></p>
<p>解決&#xff1a;開発環境のメール通知はOFFで、自分宛のメールだけ、許可したユーザーだけに送られてきます。</p>
<p> </p>
<p><strong>&#xff0a;さらにうれしい効果&#xff1d;&#xff1e;開発環境を変更しないのでUpdateSet不要&#xff01; 基本機能だけで実現できます</strong></p>
<p>この方法は、開発環境側に設定変更がいらないので、リリースやUpdateSetに何の影響も与えません。設定するのはもうひとつのインスタンス側に設定します。</p>
<p>データ転送やメール送信はServiceNowの基本機能です。</p>
<p class="ng-scope">ーーーーーーーーーー</p>
<p><strong>&#xff0a;「メールデータを転送する」設定方法</strong></p>
<p>開発環境はメール通知OFFにします。開発環境は何も設定変更いりません。</p>
<p>&#xff08;※ただし通信機能を利用するので、特別なセキュリティ制限があるなら解除が必要です。意図的に設定していないなら変更や追加設定は不要です。&#xff09;</p>
<p>必要なのはメール送信が可能な、別のインスタンスです。</p>
<p>メール送信が可能な、ServiceNow インスタンスをひとつ決めます&#xff08;なんなら本番環境でも、個人インスタンスでも&#xff09;。特別なサブスクリプションは不要です。インポートとメール機能は標準機能です。</p>
<p>以下、メール送信するインスタンス側に設定をしていきます。</p>
<p> </p>
<p><strong>&#xff11;&#xff0e;メール送信するインスタンスに、インポート設定を作ります。</strong></p>
<ul><li>Menu&gt; System Import Sets&gt; Administration&gt; Data Sources</li><li>Data Sourceを新規作成します。</li><li>“Name”は自由に決めて入力してください。例&#xff1a;”my Import DevMail”</li><li>“Import set table name”はインポートセットテーブルとなる名前を自由に決めてください。例&#xff1a;”u_imp_devmail”</li><li>“Format”は”XML”、 XML形式のインポートになります。</li><li>”File retrieval method”は”HTTPS”、 HTTPSでシステム間通信します。</li><li>”Server”は開発環境のインスタンスの名前、例&#xff1a;”MyInstanceName***.service-now.com”、</li><li>”File path”は「/sys_email.do?XML&amp;sysparm_query &#61;」&#xff0b;検索条件。<br /> 検索条件にはQuery文字列を使う。検索条件としてメールボックス”outbox”を指定する、送りたい相手のメールアドレスを全員分指定する、メール抽出する範囲として作成日を直近1時間に指定する。<br /> 例&#xff1a;”/sys_email.do?XML&amp;sysparm_query&#61;mailbox&#61;outbox^recipientsINuser1&#64;sts-inc.co.jp,user2&#64;sts-inc.co.jp,user3&#64;sts-inc.co.jp^sys_created_on&gt;&#61;javascript:gs.beginningOfLastHour()”<br /> 長いファイルパス100文字以上になるようならFieldのMax lengthを増やしてください。私は100から4000に増やしています。</li><li>“XPath”は、「//sys_email」としています、『相対パスはパフォーマンスに影響あるからお勧めしない』とメッセージが出るけれど、ほかに方法が思いつかない…</li><li>“Username”と”Password”は、開発環境の管理者の情報を入力します。</li><li>以上の設定で開発環境のメールが、インポートセットテーブルに入ります。<br /> <strong>要注意&#xff1a;標準のインポート方法では、インポートテーブルで自動生成されたColumnのMax lengthが開発環境のMailテーブルと一致しません。<br /> 手動ですべてのColumnのMax lengthを必ず一致させてください。<br /> 標準動作では適当な最小限の長さになるので、後でインポートするとデータ文字列が途中までしか取り込まれない不具合が多発します。<br /> </strong>1回は必ず取り込みテストして、インポートセットテーブルにテーブルが取り込まれることを確認します。開発環境に取り込まれるべきメールが用意されていることも忘れずに準備してください。<br /> 取り込みが成功してから次に進んでください。</li></ul>
<p><img src="https://community.servicenow.com/c6bf26ea1b214810fff162c4bd4bcbc7.iix" /></p>
<p><strong>&#xff12;&#xff0e;インポート後のトランスフォームを作ります。</strong></p>
<ul><li>Data Sources (Foam View) Related Lists &gt; Transforms<br /> &#xff08;インポート設定画面の下にあります&#xff09;</li><li>Transformを新規作成します。</li><li>Related Links &gt; Auto Map Matching Fieldsなど使ってField Mapsの状態を作ります。あらかじめインポートセットテーブルにフィールドやデータがある必要があります。</li><li>Fieldの設定ができたら、Transformで既に存在するメール&#xff08;SYSIDの重複&#xff09;なら取り込まない設定をします。<br /> “Field Maps”の“Target field” “sys_id”の”Coalesce”だけを”True”に設定します。</li><li>それと、”Transform Script”を新規作成します。設定は”when”を“onBefore”にして、<br /> ”Script”に下記を追加</li></ul>
<table border="1" width="100%"><tbody><tr><td width="100%">
<p>if(action &#61;&#61; &#39;insert&#39;){</p>
<p>       target.setNewGuidValue(source.u_sys_id);</p>
<p>}else{</p>
<p>       ignore &#61; true;</p>
<p>}</p>
</td></tr></tbody></table>
<p>これはMail RecordをinsertするときのSysIDを開発環境のSysIDと同じ値にするための方法です。通常SysIDは自動発番されて開発環境のSysIDと重複判定ができません、そこでこのScriptで同じ値にして重複判定を実現しています。</p>
<ul><li>ほかのTransformはそのまま、右から左に受け流すだけでも、概ね問題ないです。</li><li>余力があれば、メール本文にURL相対パスになっている場合、開発環境のURLパスにならないので、そこだけ文字列変換してあげると、完璧なメール転送になります。正規表現置換で、すぐできる程度です。<br /> Script例(Transform Script: when onBefore)&#xff08;先ほどのScriptの下に追加する方法で良いです。&#xff09;</li></ul>
<table border="1" width="100%"><tbody><tr><td width="100%">
<p>//相対パスを絶対パスに変換</p>
<p>if(source.u_body){</p>
<p>       source.u_body &#61; (&#39;&#39;&#43;source.u_body).replace(/(&lt;\s*a\s&#43;[^&gt;]*href\s*&#61;\s*[&#39;&#34;])(?!http|[&#39;&#34;])(\.*\/)*/g, &#39;$1https://myInstanceName.service-now.com/&#39;);</p>
<p>}</p>
<p>//返信先を固定mail addressに変換</p>
<p>if(!source.u_user){</p>
<p>       //標準だと254byteしかない必要に応じて増やす sys_email.user[String]:Max length:256</p>
<p>       source.u_user &#61; &#39;&#34;myDevMail&#34; &lt;myInstanceName&#64;service-now.com&gt;&#39;;</p>
<p>}</p>
</td></tr></tbody></table>
<p> </p>
<p><img src="https://community.servicenow.com/81017e621b614810fff162c4bd4bcb14.iix" /></p>
<p><strong>&#xff13;、最後にスケジュールインポートを作ります。</strong></p>
<ul><li>Menu&gt; System Import Sets&gt; Administration&gt; Scheduled Imports</li><li>Scheduled Importを新規作成します。この設定で定期的にメールを収集します。</li><li>“Name”は自由に決めて入力してください。例&#xff1a;”Import DevMail”</li><li>“Deta source”は先ほど作成したインポート設定を指定します。例&#xff1a;”my Import DevMail”</li><li>“Repeat Interval”は50分。今回はインポートを50分間隔にして、インポート設定側の検索条件の1時間としました。ここは運用に合わせて調整してください。時間差があるのは検索範囲が少し広くしないと時間の区切りで取り込み漏れが発生する可能性があるからです。</li><li>これで完成です。</li></ul>
<p><img src="https://community.servicenow.com/2be076621b614810fff162c4bd4bcb6b.iix" /></p>
<p>これで開発環境の特定のユーザーあてのメールが、50分間隔でメール送信インスタンスを経由してメール通知されます。</p>
<p>是非お試しください。</p>