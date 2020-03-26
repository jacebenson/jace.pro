---
title: "ServiceNow  "
date: 2019-09-30T13:28:54.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=407a9288db10c850414eeeb5ca96199a"
---
<p>ServiceNow は ITSM(IT Service Management)や CSM(Customer Service Management) に代表される、導入後すぐに利用し始めることのできるサービス群をクラウドで提供しています(SaaS)。そして、それらのサービスはすべて Now Platform と呼ばれる共通のプラットフォーム上で開発され稼働しています。この Now Platform は開発者によって自由にアプリケーションを開発して稼働させる事のできる機能も合わせて提供しています。つまり、Now Platform は Application Platform as a Service (aPaaS)の一面も併せ持っています。アプリケーション開発者は、Now Platform が提供する Studio と呼ばれる開発ツールを利用して Low Code/No Code で効率的に、企業のデジタルトランスフォーメーションを支援するアプリケーションを開発することができます。</p>
<p>今回は、開発者が Now Platform でのアプリケーション開発に興味を持った際に、すぐに開発を体験できる環境の入手方法を紹介します。具体的には、ServiceNow が開発者向けに用意している Developer Portal サイトからPersonal Developer Instance (PDI) と呼ばれる開発者用のインスタンスを入手する方法の紹介になります。開発者は、この PDI を入手することで、自由にアプリケーション開発を試す、SaaS で提供されるサービスの一部を評価することができます。</p>
<p>最初のステップは Developer Portal へのユーザー登録になります。Web ブラウザから Developer Portal (<a href="https://developer.servicenow.com/" rel="nofollow">https://developer.servicenow.com/</a>)にアクセスをして、右上にある「Register」リンクをクリックします。</p>
<p><img src="https://community.servicenow.com/c30a5e44db10c850414eeeb5ca96198a.iix" /></p>
<p>ユーザー登録の為のフォームが表示されるので、名前、メールアドレス、パスワードなどを入力して、ユーザー登録を完了させてください。パスワードにはルールがあり、以下の条件を満たす必要があることに注意してください。</p>
<p>1. 1文字以上の大文字を使用<br />2. 1文字以上の小文字を使用<br />3. 1文字以上の特殊(記号)文字を使用<br />4. 8 文字以上<br />5. パスワードに名前が含まれないようにする</p>
<p>ユーザー登録フォームのサブミットが完了すると、記入したメールアドレスに確認のメールが届くので、指示に従ってメールアドレスの確認 (Verify Email) を行ってください。<br />処理が正しく完了すると、ユーザー登録が完了して Developer Portal にサインインすることが可能になります。</p>
<p> <img src="https://community.servicenow.com/4e1a1284db10c850414eeeb5ca961965.iix" /></p>
<p>登録をしたユーザー名(メールアドレス)とパスワードで Developer Portal にログインができる事を確認してください。<br />最初のログイン時に、利用規約への同意や簡単なアンケートへの回答が求められるので、対応してください。</p>
<p>この Developer Portal には Now Platform を利用したアプリケーション開発に関する情報が多く掲載されているので、アプリケーション開発の際に情報を収集するのに非常に有用になります。また、これから作成する PDIの管理も行えるので、ブックマークに追加しておくことをおすすめします。</p>
<p>PDI の作成は、Developer Portal 上のメニューから「Manage」の子メニューとなる「Instance」にアクセスをして行います。</p>
<p><img src="https://community.servicenow.com/102a5684db10c850414eeeb5ca961905.iix" /> </p>
<p>My Instance ページにアクセスしたら、「Request Instance」ボタンをクリックして、PDI をリクエストします。<br />(注) この PDI は 10 日間以上アクセスが無いと、自動的にアーカイブされて利用することができなくなります。もし利用中の PDI がアーカイブされてしまった場合は、このページにある「Restore Instance」ボタンをクリックして、アーカイブされた PDIのリストアをリクエストしてください。</p>
<p><img src="https://community.servicenow.com/143a56c4db10c850414eeeb5ca961916.iix" /></p>
<p>Request Instance ボタンをクリックすると、PDI の利用目的を聞かれるので、目的を記入してください。その後、「I Understand」ボタンをクリックしてください。すると、利用したいバージョンが選択できるので、好きなバージョンを選択してください。なお、2019 年 9 月現在では、「New York」バージョンが最新になるので、最新の機能を試してみたい場合は New York を選択してください。PDI で利用したい ServiceNow のバージョン選択が完了したら、「Request Instance」ボタンをクリックしてください。</p>
<p>(参考) ServiceNow のバージョンは都市名が利用され、その頭文字がアルファベット順になっています。つまり、New York の前のバージョンは M から始まる Madrid で、次のバージョンは O から始まる Orlando となる予定です。</p>
<p><img src="https://community.servicenow.com/984a5ec4db10c850414eeeb5ca9619b3.iix" /></p>
<p>ボタンのクリック後およそ5分程度で PDIが作成され、その情報が表示されます。URL や管理者 ID とパスワードの情報も表示されるので、それらの情報を利用して作成した PDIにアクセスが可能になっています。</p>
<p> <img src="https://community.servicenow.com/595ada08db10c850414eeeb5ca961969.iix" /></p>
<p>無事に PDIにアクセスができたら、この環境は自由に使っていただく事ができるので、アプリケーション開発などを楽しんでください&#xff01;作成されたPDIへのプラグインの導入や環境が壊れてしまった際の初期化なども My Instance ページから行う事が可能になっています。「Action」の子メニューとして用意されています。</p>
<p> <img src="https://community.servicenow.com/af5ade08db10c850414eeeb5ca9619a9.iix" /></p>
<p>それでは、Now Platform でのアプリケーション開発をお楽しみください&#xff01;</p>
<p>次回は Now Platform で簡単なアプリケーションを開発する方法を紹介する予定なのでお楽しみにしてください。</p>