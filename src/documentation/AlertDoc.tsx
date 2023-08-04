import { Alert } from "../component/Alert/Alert";
import { Typography } from "../component/Typography/Typography";
import avatarImage from "../assets/image1.jpg";
import { CodeBlock } from "./CodeBlock";

export const AlertDoc = () => {
  return (
    <>
      <section className="doc-container">
        <Typography variant="h4" component="h1">
          Alert.
        </Typography>
        <Typography variant="sub-title" component="h1">
          The alert offers four
          <code className="code">severity</code>
          levels that set a distinctive icon and color.
        </Typography>
        <code className="code">error</code>
        <code className="code">warring</code>
        <code className="code">info</code>
        <code className="code">success</code>
        <div className="doc-display-container-col flex-col mb-30">
          <Alert severity="error">This is an error alert — check it out!</Alert>
          <Alert severity="info">This is an info alert — check it out!</Alert>
          <Alert severity="success">
            This is an success alert — check it out!
          </Alert>
          <Alert severity="warring">
            This is an warring alert — check it out!
          </Alert>
        </div>

        <CodeBlock>{`<Alert severity="error">This is an error alert — check it out!</Alert>
<Alert severity="info">This is an info alert — check it out!</Alert>
<Alert severity="success">This is an success alert — check it out!</Alert>
<Alert severity="warring">This is an warring alert — check it out!</Alert>`}</CodeBlock>

        <Typography variant="h4" component="h1">
          Alert variant.
        </Typography>
        <Typography variant="sub-title" component="h1">
          The alert offers a <code className="code">variant</code>
          too.
        </Typography>
        <div className="doc-display-container-col flex-col mb-30">
          <Alert severity="error" variant="outline">
            This is an error alert — check it out!
          </Alert>
          <Alert severity="info" variant="outline">
            This is an info alert — check it out!
          </Alert>
          <Alert severity="success" variant="outline">
            This is an success alert — check it out!
          </Alert>
          <Alert severity="warring" variant="outline">
            This is an warring alert — check it out!
          </Alert>
        </div>

        <CodeBlock>{`<Alert severity="error" variant="outline">This is an error alert — check it out!</Alert>
<Alert severity="info" variant="outline">This is an info alert — check it out!</Alert>
<Alert severity="success" variant="outline">This is an success alert — check it out!</Alert>
<Alert severity="warring" variant="outline">This is an warring alert — check it out!</Alert>`}</CodeBlock>
      </section>
    </>
  );
};
