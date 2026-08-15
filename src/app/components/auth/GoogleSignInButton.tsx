import Image from "next/image";
import { signInWithGoogle } from "@/lib/auth-actions";
import { ErrorMessage } from "../ErrorMessage";

interface GoogleSignInButtonProps {
  hasError: boolean;
}

/**
 * Google SSO で Auth.js のログインを開始するボタン。
 */
export const GoogleSignInButton = ({ hasError }: GoogleSignInButtonProps) => {
  return (
    <form action={signInWithGoogle} className="space-y-5">
      {hasError && <ErrorMessage text="Googleログインに失敗しました" />}

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-x-1 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-bold text-gray-800 transition"
      >
        <span>
          <Image src="/img/icon-google.svg" alt="" width={20} height={20} />
        </span>
        Googleでログイン
      </button>
    </form>
  );
};
