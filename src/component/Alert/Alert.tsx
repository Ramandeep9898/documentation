import { AlertStyle, AlertProps } from "./Alert.styled";

export const Alert = ({ ...props }: AlertProps): JSX.Element => (
  <AlertStyle {...props}></AlertStyle>
);
