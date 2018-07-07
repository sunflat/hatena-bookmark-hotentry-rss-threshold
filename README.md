# hatena-bookmark-hotentry-rss-threshold

はてなブックマークの新着エントリーのRSS（ http://b.hatena.ne.jp/hotentry.rss ）から、一定以上のブックマーク数のものだけをフィルタしたRSSを作成します。

[Netlify](https://www.netlify.com) にデプロイすれば、任意のRSSリーダーに登録して読むことができます。

[Functions](https://www.netlify.com/docs/functions/) を使って実装されています。

## デプロイして使う場合

1. GutHubとNetlifyのアカウントを用意します。
2. このリポジトリを自分のGitHubアカウントにForkして、Netlifyにデプロイします。
3. `https://<ドメイン名>/.netlify/functions/hotentry?threshold=<ブックマーク数の閾値>` でRSSが取得できます。
4. このURLをRSSリーダーに登録すればOK。

## ローカルで動かす場合

以下のコマンドでローカルにサーバーを起動します。

```
npm install
npm run serve
```

`http://localhost:9000/hotentry?threshold=<ブックマーク数の閾値>` でアクセスできます。
