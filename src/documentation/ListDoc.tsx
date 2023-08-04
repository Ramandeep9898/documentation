import { Badge } from "../component/Badge/Badge";
import { Button } from "../component/Button/button.styled";
import beans from "../assets/beans.jpg";
import { Typography } from "../component/Typography/Typography";
import { CodeBlock } from "./CodeBlock";
import { Icon } from "../component/Icons/Icons";
import { BiHomeCircle } from "react-icons/bi";
import { BsFlower1 } from "react-icons/bs";
import {
  List,
  ListItem,
  ListButton,
  ListItemText,
  Divider,
} from "../component/List/List";
import { useState } from "react";

export const ListDoc = (): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  const toggleHandler = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
      <section className="doc-container">
        {/* List. */}
        <Typography variant="h4" component="h1">
          Basic List.
        </Typography>

        <div className="doc-display-container bg-muted mb-30">
          <List width={400}>
            <ListItem>
              <ListButton>
                <Icon icon={<BiHomeCircle />} color="#000" size={24} />
                <ListItemText primary="Home" />
              </ListButton>
              <ListButton>
                <Icon icon={<BsFlower1 />} color="#000" size={24} />
                <ListItemText primary="Explore" />
              </ListButton>
            </ListItem>
            <Divider />
            <ListItem>
              <ListButton>
                <ListItemText primary="Trash" />
              </ListButton>
              <ListButton>
                <ListItemText primary="Spam" />
              </ListButton>
            </ListItem>
          </List>
        </div>

        <CodeBlock>{`<List width={400}>
  <ListItem>
    <ListButton>
      <Icon icon={<BiHomeCircle />} color="#000" size={24} />
      <ListItemText primary="Home" />
    </ListButton>
    <ListButton>
      <Icon icon={<BsFlower1 />} color="#000" size={24} />
      <ListItemText primary="Explore" />
    </ListButton>
  </ListItem>
  <Divider />
  <ListItem>
    <ListButton>
      <ListItemText primary="Trash" />
    </ListButton>
    <ListButton>
      <ListItemText primary="Spam" />
    </ListButton>
  </ListItem>
</List>`}</CodeBlock>
      </section>
    </>
  );
};
