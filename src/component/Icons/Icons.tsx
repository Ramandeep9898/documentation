import { IconStyle } from "./Icons.styled";

export const Icon = ({ ...props }): JSX.Element => (
  <>
    <IconStyle {...props}>{props.icon}</IconStyle>
  </>
);
