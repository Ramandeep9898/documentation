import { Typography } from "../component/Typography/Typography";
import { CodeBlock } from "./CodeBlock";

export const Usage = () => {
  return (
    <>
      <section className="doc-container">
        <Typography variant="h4" component="h1">
          Get Started with Easy Components.
        </Typography>
        <Typography variant="sub-title" component="h1">
          Learn how to configure Easy Components in your project{" "}
          <a
            href="https://www.npmjs.com/package/components-easy"
            target="_blank"
            rel="noreferrer"
          >
            published on npm
          </a>
          .
        </Typography>
        <CodeBlock>{`npm i components-easy`}</CodeBlock>
      </section>
    </>
  );
};
