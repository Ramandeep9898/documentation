import { Children } from "react";
import { Avatar } from "../Avatar/Avatar";
import {
  CardStyle,
  CardContentStyle,
  CardProps,
  CardActionStyle,
  CardMediaStyle,
  CardMediaProps,
  CardHeaderStyle,
  CardHeaderProps,
  CardHeaderTitleStyle,
  CardHeaderSubTitleStyle,
} from "./Card.styled";

export const Card = ({ ...props }: CardProps): JSX.Element => (
  <>
    <CardStyle {...props}></CardStyle>
  </>
);

export const CardContent = ({ ...props }): JSX.Element => (
  <>
    <CardContentStyle {...props}></CardContentStyle>
  </>
);

export const CardActions = ({ ...props }): JSX.Element => (
  <>
    <CardActionStyle {...props}></CardActionStyle>
  </>
);

export const CardMedia = ({ ...props }: CardMediaProps): JSX.Element => (
  <>
    <CardMediaStyle {...props} />
  </>
);

export const CardHeader = ({ ...props }: CardHeaderProps): JSX.Element => (
  <>
    <CardHeaderStyle {...props}>
      <div className="space-between w-full">
        <div className="flex-row">
          {props?.avatar ? props.avatar : null}
          <div className="flex-start ml-8">
            {props?.title ? (
              <CardHeaderTitleStyle>{props.title}</CardHeaderTitleStyle>
            ) : null}
            {props?.subheader ? (
              <CardHeaderSubTitleStyle>
                {props.subheader}
              </CardHeaderSubTitleStyle>
            ) : null}
          </div>
        </div>

        {props?.action ? <div className="cursor">{props.action}</div> : null}
      </div>
    </CardHeaderStyle>
  </>
);
