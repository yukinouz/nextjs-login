/**
 * 中央寄せ＋左右パディング済みコンテナでコンテンツをラップするコンポーネント。
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - 内部に表示するコンテンツ
 * @returns {JSX.Element} スタイリング済みのdiv要素
 */
const Inner = ({ children }: { children: React.ReactNode }) => {
  return <div className="container mx-auto px-5 md:px-10">{children}</div>;
};

export default Inner;
