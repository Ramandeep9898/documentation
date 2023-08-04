import { Badge } from "../component/Badge/Badge";
import { Button } from "../component/Button/button.styled";
import beans from "../assets/beans.jpg";
import { Typography } from "../component/Typography/Typography";
import { CodeBlock } from "./CodeBlock";
import { Icon } from "../component/Icons/Icons";
import { AiOutlineHome } from "react-icons/ai";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  CardHeader,
} from "../component/Card/Card";
import { useState } from "react";

export const IconDoc = (): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  const toggleHandler = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
      <section className="doc-container">
        {/* Icon. */}
        <Typography variant="h4" component="h1">
          Basic Icon.
        </Typography>
        <Typography variant="sub-title" component="h1">
          Currently I support react-icons. import the icon and pass it as a prop{" "}
          <code className="code">icon</code>.
        </Typography>
        <div className="doc-display-container mb-30">
          <Icon icon={<AiOutlineHome />}></Icon>
        </div>

        <CodeBlock>{`<Icon icon={<AiOutlineHome />}></Icon>`}</CodeBlock>

        {/* Icon size. */}
        <Typography variant="h4" component="h1">
          Icon size.
        </Typography>
        <Typography variant="sub-title" component="h1">
          Three default size and can also be customized by passing prop
          <code className="code">size</code>.
        </Typography>
        <div className="flex-col flex-start">
          <div className="flex-row mb-4">
            <code className="code">sm</code> :14px
          </div>
          <div className="flex-row mb-4">
            <code className="code">md</code> :18px
          </div>

          <div className="flex-row mb-4">
            <code className="code">lg</code> :21px
          </div>
        </div>
        <div className="doc-display-container mb-30">
          <Icon icon={<AiOutlineHome />} size="sm"></Icon>
          <Icon icon={<AiOutlineHome />} size="md"></Icon>
          <Icon icon={<AiOutlineHome />} size="lg"></Icon>
          <Icon icon={<AiOutlineHome />} size={32}></Icon>
        </div>

        <CodeBlock>{`<Icon icon={<AiOutlineHome />} size="sm"></Icon>
<Icon icon={<AiOutlineHome />} size="md"></Icon>
<Icon icon={<AiOutlineHome />} size="lg"></Icon>
<Icon icon={<AiOutlineHome />} size={32}></Icon>`}</CodeBlock>

        {/* Icon size. */}
        <Typography variant="h4" component="h1">
          Icon color.
        </Typography>
        <Typography variant="sub-title" component="h1">
          Change color by passing color to prop
          <code className="code">color</code>.
        </Typography>

        <div className="doc-display-container mb-30">
          <Icon icon={<AiOutlineHome />} size={24} color="#A0BFE0"></Icon>
          <Icon icon={<AiOutlineHome />} size={24} color="#4C4B16"></Icon>
          <Icon icon={<AiOutlineHome />} size={24} color="#E7B10A"></Icon>
        </div>

        <CodeBlock>{`<Icon icon={<AiOutlineHome />} size={24} color="#A0BFE0"></Icon>
<Icon icon={<AiOutlineHome />} size={24} color="#4C4B16"></Icon>
<Icon icon={<AiOutlineHome />} size={24} color="#E7B10A"></Icon>`}</CodeBlock>
      </section>
    </>
  );
};
