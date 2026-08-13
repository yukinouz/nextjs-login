import Link from "next/link";
import Section from "@/app/components/Section";
import Inner from "@/app/components/Inner";
import { LoginForm } from "@/app/components/auth/LoginForm";
import { GoogleSignInButton } from "@/app/components/auth/GoogleSignInButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ログイン | Next.js Login",
  description:
    "ログイン画面です。メールアドレスとパスワード、または Google アカウントでログインできます。",
};

const LoginPage = () => {
  return (
    <main>
      <Section top bottom>
        <Inner>
          <div className="mx-auto w-full max-w-md space-y-8">
            <header className="space-y-4 text-center">
              <h1 className="text-2xl font-bold text-gray-900">ログイン</h1>
              <p className="text-sm text-gray-500">
                メールアドレスとパスワード、または Google
                アカウントでログインできます。
              </p>
            </header>

            <LoginForm />

            <div className="relative" role="separator">
              <div className="absolute inset-0 flex items-center" aria-hidden>
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-3 text-gray-400">または</span>
              </div>
            </div>

            <GoogleSignInButton />

            <p className="text-center text-sm text-gray-500">
              <Link href="/" className="text-blue-700 underline">
                トップへ戻る
              </Link>
            </p>
          </div>
        </Inner>
      </Section>
    </main>
  );
};

export default LoginPage;
