import { BadgeStyle, BadgeProps } from "./Badge.styled";

export const Badge = ({ ...props }: BadgeProps): JSX.Element => (
  <>
    <BadgeStyle {...props}></BadgeStyle>
  </>
);
