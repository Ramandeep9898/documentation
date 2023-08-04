import { AvatarProps, AvatarStyle } from "./Avatar.styled";

export const Avatar = ({ ...props }: AvatarProps): JSX.Element => (
  <>
    <AvatarStyle {...props}></AvatarStyle>
  </>
);
