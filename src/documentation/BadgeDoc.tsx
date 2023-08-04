import { Badge } from "../component/Badge/Badge";
import { Button } from "../component/Button/button.styled";
import { Typography } from "../component/Typography/Typography";
import { CodeBlock } from "./CodeBlock";

export const BadgeDoc = (): JSX.Element => (
  <>
    <section className="doc-container">
      {/* Badge. */}
      <Typography variant="h4" component="h1">
        Basic Badge.
      </Typography>
      <Typography variant="sub-title" component="h1">
        The Button comes with
        <code className="code">severity</code>:
        <code className="code">error</code>,
        <code className="code">warning</code>,<code className="code">info</code>
        and
        <code className="code">success</code>
      </Typography>
      <div className="doc-display-container mb-30">
        <Badge severity="error">Badge</Badge>
        <Badge severity="warning">Badge</Badge>
        <Badge severity="success">Badge</Badge>
        <Badge severity="info">Badge</Badge>
      </div>

      <CodeBlock>
        {`<Badge severity="error">Badge</Badge>
<Badge severity="warning">Badge</Badge>
<Badge severity="success">Badge</Badge>
<Badge severity="info">Badge</Badge>`}
      </CodeBlock>

      <Typography variant="h4" component="h1">
        Badge variant.
      </Typography>
      <Typography variant="sub-title" component="h1">
        The Badge comes with
        <code className="code">variant</code>:
        <code className="code">outline</code>
      </Typography>
      <div className="doc-display-container mb-30">
        <Badge severity="error" variant="outline">
          Badge
        </Badge>
        <Badge severity="warning" variant="outline">
          Badge
        </Badge>
        <Badge severity="success" variant="outline">
          Badge
        </Badge>
        <Badge severity="info" variant="outline">
          Badge
        </Badge>
      </div>

      <CodeBlock>
        {`<Badge severity="error" variant="outline">Badge</Badge>
<Badge severity="warning" variant="outline">Badge</Badge>
<Badge severity="success" variant="outline">Badge</Badge>
<Badge severity="info" variant="outline">Badge</Badge>`}
      </CodeBlock>
    </section>
  </>
);
