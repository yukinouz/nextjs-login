interface ErrorMessageProps {
  text: string;
}

/**
 * エラーメッセージを表示するコンポーネント。
 */
export const ErrorMessage = ({ text }: ErrorMessageProps) => {
  return (
    <p
      className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700"
      role="alert"
    >
      {text}
    </p>
  );
};
