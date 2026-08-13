import Image from "next/image";

/**
 * Google SSO ログインボタンの見た目。
 * クリック処理は未接続（Phase 2 で Auth.js に接続する）。
 */
export const GoogleSignInButton = () => {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-center gap-x-1 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-bold text-gray-800 transition"
    >
      <span>
        <Image src="/img/icon-google.svg" alt="Google" width={20} height={20} />
      </span>
      Googleでログイン
    </button>
  );
};
