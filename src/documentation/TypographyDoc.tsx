import { Typography } from "../component/Typography/Typography";
import { CodeBlock } from "./CodeBlock";
import { Icon } from "../component/Icons/Icons";
import { BiHomeCircle } from "react-icons/bi";
import { BsFlower1 } from "react-icons/bs";
import { useState } from "react";

export const TypographyDoc = (): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  const toggleHandler = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
      <section className="doc-container">
        {/* Typography. */}
        <Typography variant="h4" component="h1">
          Basic Typography.
        </Typography>

        <div className="doc-display-container-col bg-muted mb-30">
          <Typography component="h1">H1.Heading</Typography>
          <Typography component="h2">H1.Heading</Typography>
          <Typography component="h3">H3.Heading</Typography>
          <Typography component="h4">H4.Heading</Typography>
          <Typography component="h5">H5.Heading</Typography>
          <Typography component="h6">H6.Heading</Typography>
          {/* <Typography component="body">
            body. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography component="body2">
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography component="subtitle1">
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography component="subtitle2">
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography> */}
        </div>

        <CodeBlock>{`<Typography component="h1">H1.Heading</Typography>
<Typography component="h2">H2.Heading</Typography>
<Typography component="h3">H3.Heading</Typography>
<Typography component="h4">H4.Heading</Typography>
<Typography component="h5">H5.Heading</Typography>
<Typography component="h6">H6.Heading</Typography>`}</CodeBlock>
      </section>
    </>
  );
};
