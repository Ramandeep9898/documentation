import { Button } from "../component/Button/button.styled";
import { Avatar } from "../component/Avatar/Avatar";
import { Typography } from "../component/Typography/Typography";
import avatarImage from "../assets/image1.jpg";
import { CodeBlock } from "./CodeBlock";

export const ButtonDoc = () => {
  return (
    <>
      <section className="doc-container">
        {/* Avatar. */}
        <Typography variant="h4" component="h1">
          Basic Button.
        </Typography>
        <Typography variant="sub-title" component="h1">
          The Button comes with three
          <code className="code">variants</code>:
          <code className="code">secondary</code>,
          <code className="code">stroke</code>,
          <code className="code">primary</code>and
          <code className="code">ghost</code>
        </Typography>
        <div className="doc-display-container mb-30">
          <Button variation="secondary">secondary</Button>
          <Button variation="primary">primary</Button>
          <Button variation="stroke">stroke</Button>
          <Button variation="ghost">ghost</Button>
          <Button variation="primary" disabled>
            primary
          </Button>
        </div>

        <CodeBlock>
          {`<Button variation="secondary">secondary</Button>
<Button variation="primary">secondary</Button>
<Button variation="stroke">secondary</Button>
<Button variation="ghost">secondary</Button>`}
        </CodeBlock>

        {/* Default Sizes. */}
        <Typography variant="h4" component="h1">
          Default Sizes.
        </Typography>
        <Typography variant="sub-title" component="h1">
          Available in three sizes. Can be created by passing
          <code className="code">md</code>
          <code className="code">lg</code>
          <code className="code">xl</code>
          to prop
          <code className="code">size</code>.
        </Typography>

        <div className="flex-col flex-start">
          <div className="flex-row mb-4">
            <code className="code">sm</code>padding: 6px * 10px
          </div>
          <div className="flex-row mb-4">
            <code className="code">md</code>padding: 10px * 20px
          </div>

          <div className="flex-row mb-4">
            <code className="code">lg</code>padding: 16px * 24px
          </div>
        </div>

        <div className="doc-display-container mb-30">
          <Button variation="secondary" size="lg">
            secondary
          </Button>
          <Button variation="secondary" size="md">
            secondary
          </Button>
          <Button variation="secondary" size="sm">
            secondary
          </Button>
        </div>

        <CodeBlock>
          {`<Button variation="secondary" size="lg"> secondary</Button>
<Button variation="secondary" size="md"> secondary</Button>
<Button variation="secondary" size="sm"> secondary</Button>`}
        </CodeBlock>

        {/* Customize Size. */}
        <Typography variant="h4" component="h1">
          Colors.
        </Typography>
        <Typography variant="sub-title" component="h1">
          Use
          <code className="code">color</code>
          prop to apply theme color palette to component.
        </Typography>
        <div className="doc-display-container mb-30">
          <Button variation="primary" color="err">
            Primary
          </Button>
          <Button variation="primary" color="info">
            Primary
          </Button>
          <Button variation="primary" color="suc">
            Primary
          </Button>
          <Button variation="primary" color="warning">
            Primary
          </Button>
        </div>

        <CodeBlock>
          {`<Button variation="primary" color="err"> Primary</Button>
<Button variation="primary" color="info"> Primary</Button>
<Button variation="primary" color="suc"> Primary</Button>
<Button variation="primary" color="warning"> Primary</Button>`}
        </CodeBlock>
      </section>
    </>
  );
};
