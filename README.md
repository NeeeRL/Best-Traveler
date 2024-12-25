# Best-Traveler

## 概要

Best-travelerは，一関とその周辺地域のバスの時刻を地域住民と観光客向けに提供するWebサイトです。

このプロジェクトは、2024年6月15・16日に開催された社会課題解決型ハッカソンで、一関高専の学生4名によるTeamAによって開発されました。

## 機能

Best-travelerは，シンプルで見やすいということを目標に作られています。

そのため，ユーザーが極力迷わないようなデザインを提供しつつ，バスの時刻を十分理解できるような，以下の機能を提供しています。

現状，岩手県交通様の一関市・平泉町・奥州市前沢を走る「一関平泉線」にのみ対応しています。

- バス路線選択機能（現在は岩手県交通一関平泉線のみ）
- バス停の写真の表示機能（磐井橋と佐野から先は非対応）
- バス停停車時刻とその先の運賃の表示機能（一関駅前のみ）

## 実行方法

### 実行環境

実行環境は，WSL上または実機のUbuntuを前提としていますが，WindowsやMacでもNode.jsが動作すれば実行できます。

### 実行手順

Node.jsを使用しているので，ファイルを実行してください。

まずは必要なパッケージをインストールしていきます。

```bash
sudo apt install nodejs npm
```

Express.jsなどの必要パッケージを追加します。

```bash
npm install express csv-perser ejs
```

あとはserverディレクトリに移動してserver.jsファイルを実行するだけです。

```bash
cd server
node seever.js
```

開発環境では，nodemonを実行することもできます。

```bash
nodemon seever.js
```
## 使用したライブラリ・フレームワーク

Best-Travelerの開発において、以下のライブラリ・フレームワークを使用しました。

- Splide.js
- v-viewer
- Node.js
  - Express.js
  - nodemon（開発用）
  - ejs
  - csv-parser

## ディレクトリ構成
```
Best-Traveler/
├── server/           # サーバースクリプト
├── web/              # 静的ファイル
│   ├── TopPage.html  # トップページ
│   ├── css/          # CSSファイル
│   ├── image/        # 画像
│   └── js/           # JavaScriptファイル
├── data/             # 時刻表生成用のCSVファイル
├── templates/        # 時刻表生成用のejsファイル
└── README.md         # 説明書（このファイル）
```
