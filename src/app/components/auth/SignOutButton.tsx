import { signOutAction } from "@/lib/auth-actions";

/**
 * Auth.js のセッションを破棄するログアウトボタン。
 */
export const SignOutButton = () => {
  return (
    <form action={signOutAction}>
      <button type="submit" className="text-blue-700 underline">
        ログアウト
      </button>
    </form>
  );
};
