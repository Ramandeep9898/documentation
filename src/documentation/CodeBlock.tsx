import { ReactNode, useEffect } from "react";
import Prism from "prismjs";
import "../PrismStyle/HoliTheme.css";
// import "prismjs/themes/prism-twilight.css";

interface CodeBlockProps {
  children: ReactNode;
}

export const CodeBlock = ({ children }: CodeBlockProps): JSX.Element => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <pre className="rounded-8">
      <code className={"language-javascript"}>{children}</code>
    </pre>
  );
};
