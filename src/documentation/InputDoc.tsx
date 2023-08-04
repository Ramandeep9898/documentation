import { Typography } from "../component/Typography/Typography";
import { CodeBlock } from "./CodeBlock";
import { TextField } from "../component/Input/Input";

export const InputDoc = (): JSX.Element => {
  return (
    <>
      <section className="doc-container">
        {/* Input. */}
        <Typography variant="h4" component="h1">
          Basic TextField
        </Typography>
        <Typography variant="sub-title" component="h1">
          Standard image lists are best for items of equal importance. They have
          a uniform container size, ratio, and spacing.
        </Typography>
        <div className="doc-display-container mb-30">
          <TextField id="outline-input" variant="outline" label="Outline" />
          <TextField id="outline-input" variant="filled" label="Filled" />
          <TextField id="outline-input" variant="standard" label="Standard" />
        </div>

        <CodeBlock>{`<TextField id="outline-input" variant="outline" label="Outline" />
<TextField id="outline-input" variant="filled" label="Filled" />
<TextField id="outline-input" variant="standard" label="Standard" />`}</CodeBlock>

        {/* Input. */}
        <Typography variant="h4" component="h1">
          Disable TextField
        </Typography>
        <Typography variant="sub-title" component="h1">
          add <code className="code">disabled</code>
        </Typography>
        <div className="doc-display-container mb-30">
          <TextField
            id="outline-input"
            variant="outline"
            label="Outline"
            disabled
          />
          <TextField
            id="outline-input"
            variant="filled"
            label="Filled"
            required
          />
          <TextField
            id="outline-input"
            variant="standard"
            label="Standard"
            defaultValue="default value"
          />
        </div>

        <CodeBlock>{`<TextField id="outline-input" variant="outline" label="Outline" disabled />
<TextField id="outline-input" variant="filled" label="Filled" required />
<TextField id="outline-input" variant="standard" label="Standard" defaultValue="default value" />`}</CodeBlock>

        {/* Input. */}
        <Typography variant="h4" component="h1">
          Validation
        </Typography>
        <Typography variant="sub-title" component="h1">
          The error prop toggles the error state. The helperText prop can then
          be used to provide feedback to the user about the error.
        </Typography>
        <div className="doc-display-container mb-30">
          <TextField
            id="outline-input"
            variant="outline"
            label="Outline"
            error
          />
          <TextField
            id="outline-input"
            variant="filled"
            label="Filled"
            error
            required
          />
          <TextField
            id="outline-input"
            variant="standard"
            error
            label="Standard"
            defaultValue="default value"
          />
        </div>

        <CodeBlock>{`<TextField id="outline-input" variant="outline" label="Outline" disabled />
<TextField id="outline-input" variant="filled" label="Filled" required />
<TextField id="outline-input" variant="standard" label="Standard" defaultValue="default value" />`}</CodeBlock>
      </section>
    </>
  );
};
