# Best-Travelerのvueでの実装

今回使用されるvueのversionは３です。

推奨エディターはMicrosoftのVSCodeです。そこでVolarを調べて拡張機能としてインストールします。Veturは無効化もしくはインストールしないでください。

##まずはプロジェクトディレクトリに移動します。

```sh
cd ~/Downloads/Best-Traveler-Mini
```

## 起動するためのコマンド

### まずは必要なパッケージをインストールします。　ネットワーク接続が必要です。

```sh
npm install
```

### 開発モードでViteサーバーを起動します。

```sh
npm run dev
```

### 起動後は以下のリンクでローカルからアクセスできます。

```sh
http://localhost:5173
```

### ポート番号を変更したい場合はルートディレクトリにvite.config.jsを作成し、編集していきます。

```sh
touch vite.config.js
```

### 作成したファイルを以下を例に編集します。

```sh
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,  // 開発サーバーのポートを変更
    open: true,  // 開発サーバー起動時にブラウザを自動で開く
  },
  build: {
    outDir: 'dist', // ビルド結果の出力先ディレクトリ
  },
});
```


## その他のコマンド

### ビルド用コマンド

```sh
npm run build
```

### プロジェクトで設定されたスクリプトがユニットテストを実行します。(https://vitest.dev/)

```sh
npm run test:unit
```
