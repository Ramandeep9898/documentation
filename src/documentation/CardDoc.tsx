import { Badge } from "../component/Badge/Badge";
import { Button } from "../component/Button/button.styled";
import beans from "../assets/beans.jpg";
import { Typography } from "../component/Typography/Typography";
import { CodeBlock } from "./CodeBlock";
import { Icon } from "../component/Icons/Icons";
import { AiOutlineMore } from "react-icons/ai";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  CardHeader,
} from "../component/Card/Card";
import { Avatar } from "../component/Avatar/Avatar";
import { useState } from "react";
import { Alert } from "../component/Alert/Alert";

export const CardDoc = (): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  const toggleHandler = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
      <section className="doc-container">
        {/* Badge. */}
        <Typography variant="h4" component="h1">
          Basic Card.
        </Typography>
        <Typography variant="sub-title" component="h1">
          Although cards can support multiple actions, UI controls, and an
          overflow menu, use restraint and remember that cards are entry points
          to more complex and detailed information.
        </Typography>
        <div className="doc-display-container mb-30">
          <Card>
            <CardContent>
              <Typography component="h1" variant="h6" pb={6}>
                Fun fact about coffee.
              </Typography>
              <Typography variant="sub-title" pb={12}>
                Subtitle Of the card.
              </Typography>
              <Typography component="h3" variant="h5" pb={4}>
                You can eat coffee cherries as a food.
              </Typography>
              <Typography component="body">
                Early on, people mixed coffee berries with fat to create an
                energy-rich snack ball. They would also ferment the pulp to make
                a wine-like drink (yum!?).
              </Typography>
            </CardContent>
            <CardActions>
              <Button variation="secondary" size="lg">
                Learn more
              </Button>
            </CardActions>
          </Card>
        </div>

        <CodeBlock>
          {`<Card>
    <CardContent>
        <Typography component="h1" variant="h6" pb={6}>Fun fact about coffee.</Typography>
        <Typography variant="sub-title" pb={12}>Subtitle Of the card.</Typography>
        <Typography component="h3" variant="h5" pb={4}>You can eat coffee cherries as a food.</Typography>
        <Typography component="body">
            Early on, people mixed coffee berries with fat to create an 
            energy-rich snack ball. They would also ferment the pulp to make a
            wine-like drink (yum!?).
        </Typography>
    </CardContent>
    <CardActions>
        <Button variation="secondary" size="lg">Learn more</Button>
    </CardActions>
</Card>`}
        </CodeBlock>

        <Typography variant="h4" component="h1">
          Outlined Card.
        </Typography>
        <Typography variant="sub-title" component="h1">
          Set <code className="code">variant="outlined"</code> to render an
          outlined card.
        </Typography>
        <div className="doc-display-container mb-30">
          <Card variant="outline">
            <CardContent>
              <Typography component="h1" variant="h6" pb={6}>
                Fun fact about coffee.
              </Typography>
              <Typography variant="sub-title" pb={12}>
                Subtitle Of the card.
              </Typography>
              <Typography component="h3" variant="h5" pb={4}>
                You can eat coffee cherries as a food.
              </Typography>
              <Typography component="body">
                Early on, people mixed coffee berries with fat to create an
                energy-rich snack ball. They would also ferment the pulp to make
                a wine-like drink (yum!?).
              </Typography>
            </CardContent>
            <CardActions>
              <Button variation="secondary" size="lg">
                Learn more
              </Button>
            </CardActions>
          </Card>
        </div>

        <CodeBlock>{`<Card variant="outlined">{card}</Card>`}</CodeBlock>

        <Typography variant="h4" component="h1">
          Complex Interaction.
        </Typography>
        <Typography variant="sub-title" component="h1">
          On desktop, card content can expand. (Click the downward chevron to
          view the recipe.)
        </Typography>

        <div className="doc-display-container mb-30">
          <Card variant="outline" minWidth={400}>
            <CardHeader
              avatar={<Avatar src={beans} />}
              title="Fun fact about coffee."
              subheader="Fun fact about coffee."
              action={
                <Icon icon={<AiOutlineMore />} size={24} color={"#000"} />
              }
            />
            <CardMedia src={beans}></CardMedia>

            <CardContent>
              <Typography component="h3" variant="h5" pb={4}>
                The most expensive coffee in the world can cost more than $600
                per pound.
              </Typography>
              {expanded && (
                <Typography component="body">
                  The faeces (yes, you read that correctly) of an Asian palm
                  civet is used to make one of the most sought-after types of
                  coffee, called Kopi luwak – also known as “cat poop coffee”.
                  The coffee is made from coffee cherries that have been eaten,
                  digested, and then pooped out by the mammal. The beans are
                  then cleaned and processed. With prices ranging between $35
                  and $100 a cup, or about $100 to $600 a pound, this coffee is
                  known as the world's most expensive coffee.
                </Typography>
              )}
            </CardContent>

            <CardActions>
              <Button variation="secondary" size="lg" onClick={toggleHandler}>
                {expanded ? "Show less" : "Show more"}
              </Button>
            </CardActions>
          </Card>
        </div>

        <CodeBlock>
          {`const [expanded, setExpanded] = useState(false);

const toggleHandler = () => {
  setExpanded((prev) => !prev);
};

<Card variant="outline" >
  <CardHeader 
  avatar={<Avatar src={beans} />} 
  title="Fun fact about coffee."
  subheader="Fun fact about coffee."
  action={
    <Icon icon={<AiOutlineMore />} size={24} color={"#000"} />
  }
 />
 <CardMedia src={beans}></CardMedia>

 <CardContent>
   <Typography component="h3" variant="h5" pb={4}>
     The most expensive coffee in the world can cost more than $600 per pound.
   </Typography>
   {expanded && (
     <Typography component="body">
       The faeces (yes, you read that correctly) of an Asian palm civet is used to make one 
       of the most sought-after types of coffee, called Kopi luwak – also known as “cat poop 
       coffee”.The coffee is made from coffee cherries that have been eaten,digested, and then
       pooped out by the mammal. The beans are then cleaned and processed. With prices ranging
       between $35 and $100 a cup, or about $100 to $600 a pound, this coffee is known as the 
       world's most expensive coffee.
     </Typography>
   )}
 </CardContent>

 <CardActions>
   <Button variation="secondary" size="lg" onClick={toggleHandler}>
     {expanded ? "Show less" : "Show more"}
   </Button>
 </CardActions>
</Card>`}
        </CodeBlock>

        <Typography variant="h4" component="h1">
          Media.
        </Typography>
        <Typography variant="sub-title" component="h1" pb={12}>
          Example of a card using an image to reinforce the content.
        </Typography>

        <Alert severity="warring" variant="outline">
          CardMedia relies on object-fit for centering the image. It's not
          supported by IE11.
        </Alert>

        <div className="doc-display-container mb-30">
          <Card variant="outline" minWidth={400}>
            <CardMedia src={beans} h={200}></CardMedia>

            <CardContent>
              <Typography component="h3" variant="h5" pb={4}>
                The most expensive coffee in the world can cost more than $600
                per pound.
              </Typography>
            </CardContent>

            <CardActions>
              <Button variation="primary" size="lg">
                LEARN MORE
              </Button>
            </CardActions>
          </Card>
        </div>

        <CodeBlock>
          {`<Card variant="outline" minWidth={400}>

    <CardMedia src={beans} h={200}></CardMedia>

    <CardContent>
      <Typography component="h3" variant="h5" pb={4}>
        The most expensive coffee in the world can cost more than $600 per pound.
      </Typography>
    </CardContent>

    <CardActions>
      <Button variation="primary" size="lg">LEARN MORE</Button>
    </CardActions>
</Card>`}
        </CodeBlock>
      </section>
    </>
  );
};
