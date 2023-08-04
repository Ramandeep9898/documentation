import {
  ListProps,
  ListItemStyle,
  ListStyle,
  ListButtonStyle,
  ListItemTextStyle,
  ListItemPriTextStyle,
  ListItemSecTextStyle,
  DividerStyles,
} from "./List.styled";

export const List = ({ ...props }: ListProps): JSX.Element => (
  <>
    <ListStyle {...props}></ListStyle>
  </>
);

export const ListItem = ({ ...props }: ListProps): JSX.Element => (
  <>
    <ListItemStyle {...props}></ListItemStyle>
  </>
);

export const ListButton = ({ ...props }: ListProps): JSX.Element => (
  <>
    <ListButtonStyle {...props}></ListButtonStyle>
  </>
);

export const ListItemText = ({ ...props }: ListProps): JSX.Element => (
  <>
    <ListItemTextStyle {...props}>
      <div className="flex-start ml-8">
        {props?.primary ? (
          <ListItemPriTextStyle>{props.primary}</ListItemPriTextStyle>
        ) : null}
        {props?.secondary ? (
          <ListItemSecTextStyle>{props.secondary}</ListItemSecTextStyle>
        ) : null}
      </div>
    </ListItemTextStyle>
  </>
);

export const Divider = ({ ...props }: ListProps): JSX.Element => (
  <>
    <DividerStyles {...props}></DividerStyles>
  </>
);
