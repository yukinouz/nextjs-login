import Link from "next/link";
import Section from "./components/section";
import Inner from "./components/Inner";

const Home = () => {
  return (
    <main>
      <Section top bottom>
        <Inner>
          <div className="space-y-6 text-center md:space-y-8">
            <h1 className="text-2xl font-bold">Next.js Login Page</h1>
            <p className="text-gray-500">
              ログイン機能学習のための個人開発アプリです。
              <br />
              メールアドレス・パスワードまたはSSO認証でログインできます。
            </p>
            <Link href="/login" className="text-blue-700 underline">
              ログイン
            </Link>
          </div>
        </Inner>
      </Section>
    </main>
  );
};

export default Home;
