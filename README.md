🌤️ 天気予報 & AI服装提案アプリ

指定した都市の現在の天気を取得し、その天候や気温に合わせたおすすめの服装をAIがリアルタイムで提案してくれるWebアプリケーションです。

🚀 機能概要

* リアルタイム天気取得: WeatherAPI を利用して、世界中の都市の天気・気温・アイコンを表示
* AIによる服装アドバイス: OpenRouter (LLM) APIを活用し、取得した天候データに基づいた服装の提案を自動生成

🛠️ 使用技術

* フロントエンド: React (Vite) / JavaScript (ES6+)
* API:
   * [WeatherAPI](https://www.weatherapi.com/) (天気データ取得)
   * [OpenRouter API](https://openrouter.ai/) (AIアドバイス生成)

💻 ローカルでの実行方法

このリポジトリをダウンロードしてローカル環境で動かす手順です。

1. リポジトリのクローン

```
git clone https://github.com/wujanice361-glitch/weatherclothesapp.git
cd weatherclothesapp
```

2. 依存パッケージのインストール

```
npm install
```

3. APIキーの設定

このアプリはWeatherAPIとOpenRouterのAPIキーを使用します。セキュリティのため、実際のキーはコードに直接書き込まず、`.env` ファイルに個別に設定する仕組みにしています。

このリポジトリには、キーの値を空にしたテンプレートファイル `.env.example` が含まれています。これをコピーして `.env` ファイルを作成してください。

```
cp .env.example .env
```

作成した `.env` ファイルを開き、それぞれのサイトで取得したAPIキーを入力してください。

```
VITE_WEATHER_API_KEY=あなたのWeatherAPIキー
VITE_OPENROUTER_API_KEY=あなたのOpenRouterAPIキー
```

※ `.env` は `.gitignore` に含まれているためGitHubには公開されません。`.env.example` はキーの値を空にしたテンプレートとして公開しています。

4. 開発サーバーの起動

```
npm run dev
```

起動後、表示されたURL（例: `http://localhost:5173`）にブラウザでアクセスすると、アプリが確認できます。

📝 このプロジェクトについて

書籍を参考に独学で開発した個人プロジェクトです。動作させることだけでなく、公開・共有を前提としたAPIキーの取り扱いなど、セキュリティ面にも配慮した実装を意識しました。
