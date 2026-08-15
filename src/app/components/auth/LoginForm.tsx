import { signInWithCredentials } from "@/lib/auth-actions";
import { ErrorMessage } from "../ErrorMessage";

interface LoginFormProps {
  hasError: boolean;
}

/**
 * メールアドレス・パスワードログイン用フォーム。
 * 送信時は Auth.js の Credentials プロバイダーで認証する。
 */
export const LoginForm = ({ hasError }: LoginFormProps) => {
  const inputClassName =
    "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20";

  return (
    <form action={signInWithCredentials} className="space-y-5">
      {hasError && (
        <ErrorMessage text="メールまたはパスワードが正しくありません" />
      )}

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-bold text-gray-800"
        >
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          required
          placeholder="example@example.com"
          className={inputClassName}
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="password"
          className="block text-sm font-bold text-gray-800"
        >
          パスワード
        </label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          required
          placeholder="パスワードを入力"
          className={inputClassName}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-700 px-4 py-2.5 text-sm font-bold text-white transition"
      >
        ログイン
      </button>
    </form>
  );
};
