import { ImageListStyle, ImageListItemStyle } from "./Image.styled";

export const ImageList = ({ ...props }): JSX.Element => (
  <>
    <ImageListStyle {...props}></ImageListStyle>
  </>
);

export const ImageListItem = ({ ...props }): JSX.Element => (
  <>
    <ImageListItemStyle {...props}>
      <img src={props.src} />
    </ImageListItemStyle>
  </>
);
