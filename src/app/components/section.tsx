import { clsx } from "clsx";

interface SectionProps {
  children: React.ReactNode;
  top?: boolean;
  bottom?: boolean;
}

interface SectionProps {
  children: React.ReactNode;
  top?: boolean;
  bottom?: boolean;
}

/**
 * セクション要素をラップし、上下余白の有無を制御するコンポーネント。
 *
 * @param {SectionProps} props
 * @param {React.ReactNode} props.children セクション内に表示するコンテンツ
 * @param {boolean} [props.top] 上側の余白を付与する場合は true
 * @param {boolean} [props.bottom] 下側の余白を付与する場合は true
 * @returns {JSX.Element} スタイリング済み <section> 要素
 */
const Section = ({ children, top, bottom }: SectionProps) => {
  const sectionClassName = clsx({
    "pt-10 md:pt-20": top,
    "pb-10 md:pb-20": bottom,
  });
  return <section className={sectionClassName}>{children}</section>;
};

export default Section;
