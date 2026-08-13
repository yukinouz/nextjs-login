# nextjs-login

Next.js ベースで、メールアドレス・パスワード認証と SSO ログインを実装する学習・自己開発用アプリです。

## 技術スタック

- **Next.js** + **TypeScript**
- **Auth.js**: メール＆パスワード ＋ SSO
- **Zod**: 入力バリデーション
- **Tailwind**: スタイリング

## はじめに

依存関係をインストールしたあと、開発サーバーを起動します。

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認します。

## スクリプト

| コマンド         | 説明                     |
| ---------------- | ------------------------ |
| `npm run dev`    | 開発サーバーを起動する   |
| `npm run build`  | 本番用ビルドを作成する   |
| `npm run start`  | 本番用サーバーを起動する |
| `npm run lint`   | ESLint で静的解析する    |
| `npm run format` | Prettier で整形する      |
