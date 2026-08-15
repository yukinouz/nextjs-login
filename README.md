# nextjs-login

Next.js ベースで、メールアドレス・パスワード認証と SSO ログインを実装する学習・自己開発用アプリです。

## 技術スタック

- **Next.js** + **TypeScript**
- **Auth.js**: メール＆パスワード ＋ SSO
- **Zod**: 入力バリデーション
- **Tailwind**: スタイリング

## はじめに

`.env.example` をコピーして `.env.local` を作成し、環境変数を設定します。値はリポジトリにコミットしないでください。

```bash
cp .env.example .env.local
npx auth secret
```

`npx auth secret` は `.env.local` に `AUTH_SECRET` を書き込みます。手動で入れる場合は、十分に長いランダム文字列を使います。

Google ログインを使う場合は、Google Cloud で発行したクライアント ID / シークレットを `AUTH_GOOGLE_ID` と `AUTH_GOOGLE_SECRET` に入れます。リダイレクト URI は `http://localhost:3000/api/auth/callback/google` です。

依存関係をインストールしたあと、開発サーバーを起動します。

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認します。

## ページ

| パス     | 説明                                                                 |
| -------- | -------------------------------------------------------------------- |
| `/`      | 未ログインならログインへ誘導。ログイン済みならメール表示とログアウト |
| `/login` | メール／パスワードログインと Google ログイン |

## デモユーザー（学習用）

メールアドレス: `demo@example.com`  
パスワード: `password123`

パスワードのハッシュだけをコードに保存しています。平文は README のこの欄以外には書きません。

## スクリプト

| コマンド         | 説明                     |
| ---------------- | ------------------------ |
| `npm run dev`    | 開発サーバーを起動する   |
| `npm run build`  | 本番用ビルドを作成する   |
| `npm run start`  | 本番用サーバーを起動する |
| `npm run lint`   | ESLint で静的解析する    |
| `npm run format` | Prettier で整形する      |
