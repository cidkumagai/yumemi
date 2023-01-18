# TypeScript React を用いた SPA です。

1. RESAS(地域経済分析システム) APIの「都道府県一覧」からAPIを取得する
1. APIレスポンスから都道府県一覧のチェックボックスを動的に生成する
1. 都道府県にチェックを入れると、RESAS APIから選択された都道府県の「人口構成」を取得する
1. 人口構成APIレスポンスから、X軸:年、Y軸:人口数の折れ線グラフを動的に生成して表示する

# URL

[netlify](https://idyllic-genie-98c8e9.netlify.app)
で公開しています。

# 主なライブラリ
- typescript 4.8.4
- react 18.2.0
