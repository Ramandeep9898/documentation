import {
  Headline1Style,
  Headline2Style,
  Headline3Style,
  Headline4Style,
  Headline5Style,
  Headline6Style,
  TypographyProps,
  Body,
} from "./Typography.styled";

export const Typography = ({ ...props }: TypographyProps): JSX.Element => {
  switch (props.component) {
    case "h1":
      return <Headline1Style {...props}></Headline1Style>;
    case "h2":
      return <Headline2Style {...props}></Headline2Style>;
    case "h3":
      return <Headline3Style {...props}></Headline3Style>;
    case "h4":
      return <Headline4Style {...props}></Headline4Style>;
    case "h5":
      return <Headline5Style {...props}></Headline5Style>;
    case "h6":
      return <Headline6Style {...props}></Headline6Style>;
    case "body":
      return <Body {...props}></Body>;
    default:
      return <Headline1Style {...props}></Headline1Style>;
  }
};
