import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { verifyMockUser } from "@/lib/mock-users";

/**
 * Auth.js（NextAuth）の設定と、アプリから使う認証 API。
 *
 * @property handlers `/api/auth/[...nextauth]` に渡す GET / POST ハンドラー
 * @property signIn Credentials ログインを開始する
 * @property signOut セッションを破棄する
 * @property auth サーバーで現在のセッションを取得する
 */
export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "メールアドレス", type: "email" },
        password: { label: "パスワード", type: "password" },
      },
      /**
       * メールとパスワードを検証し、成功時だけユーザーを返す。
       *
       * @param credentials ログインフォームから渡された入力
       * @returns 検証に成功したユーザー。失敗時は null
       */
      authorize: async (credentials) => {
        const email = credentials.email;
        const password = credentials.password;

        if (typeof email !== "string" || typeof password !== "string") {
          return null;
        }

        const user = await verifyMockUser(email, password);

        if (!user) {
          return null;
        }

        return user;
      },
    }),
  ],
  callbacks: {
    /**
     * JWT（JSON Web Token）は、ログイン状態を Cookie に保存する署名付きデータ。
     * Credentials では DB セッションを持たないため、ここで token にユーザー id を載せる。
     * `user` があるのはログイン成功直後のみ。
     *
     * @param token 既存の JWT
     * @param user ログイン成功直後のユーザー。それ以外は undefined
     * @returns Cookie に保存する JWT
     */
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    /**
     * JWT の内容を、画面やサーバーが使う session オブジェクトへコピーする。
     *
     * @param session クライアント／サーバーに渡すセッション
     * @param token Cookie から復元した JWT
     * @returns id を補完したセッション
     */
    session: ({ session, token }) => {
      if (typeof token.id === "string") {
        session.user.id = token.id;
      }

      return session;
    },
    /**
     * 現状の公開ページ（`/`・`/login`・Auth API）は許可する。
     * 保護ルートを足すときは、ここでセッション有無を判定する。
     *
     * @returns 常に true（全ページ公開）
     */
    authorized: () => true,
  },
});
