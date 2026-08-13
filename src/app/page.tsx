import Link from "next/link";
import Section from "./components/Section";
import Inner from "./components/Inner";
import { SignOutButton } from "./components/auth/SignOutButton";
import { auth } from "@/lib/auth";

interface SignedInContentProps {
  email: string;
}

/**
 * ログイン済みユーザー向けの案内とログアウト操作。
 */
const SignedInContent = ({ email }: SignedInContentProps) => {
  return (
    <div className="space-y-2 md:space-y-4">
      <h2 className="text-xl font-bold text-red-500">Login Successful!</h2>
      <p className="text-gray-500">
        <span className="font-bold text-gray-800">{email}&nbsp;</span>
        でログイン中です。
      </p>
      <SignOutButton />
    </div>
  );
};

/**
 * 未ログインユーザー向けの案内とログインへの誘導。
 */
const SignedOutContent = () => {
  return (
    <>
      <p className="text-gray-500">
        ログイン機能学習のための個人開発アプリです。
        <br />
        メールアドレス・パスワードまたはSSO認証でログインできます。
      </p>
      <Link href="/login" className="text-blue-700 underline">
        ログイン
      </Link>
    </>
  );
};

const Home = async () => {
  const session = await auth();
  const userName = session?.user?.name;

  return (
    <main>
      <Section top bottom>
        <Inner>
          <div className="space-y-6 text-center md:space-y-8">
            <h1 className="text-2xl font-bold">Next.js Login Sample</h1>
            {userName ? (
              <SignedInContent email={userName} />
            ) : (
              <SignedOutContent />
            )}
          </div>
        </Inner>
      </Section>
    </main>
  );
};

export default Home;
