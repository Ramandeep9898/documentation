import { ReactNode } from "react";
import styled, { css } from "styled-components";

export type CardProps = {
  children?: ReactNode;
  minWidth?: Number;
  maxWidth?: Number;
  h?: Number;
  variant?: "outline";
  src?: String;
};
export type CardMediaProps = {
  children?: ReactNode;
  alt?: string;
  src: string;
  h?: Number;
};

export type CardHeaderProps = {
  children?: ReactNode;
  avatar?: any;
  action?: any;
  title?: string;
  subheader?: string;
};

const variant = css<CardProps>`
  ${(props: CardProps) => {
    return props.variant === "outline"
      ? css`
          border: 1px solid rgba(0, 0, 0, 0.12);
        `
      : "";
  }}
`;
export const customSize = css<CardProps>`
  ${(props) =>
    props.minWidth &&
    `
   min-width: ${props.minWidth}px;
  `}

  ${(props) =>
    props.maxWidth &&
    `
   max-width: ${props.maxWidth}px;
  `}
  
  ${(props) =>
    props.h &&
    `
   height: ${props.h}px;
  `}
`;

export const CardStyle = styled.div<CardProps>`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  display: inline-block;
  width: 350px;
  ${customSize}
  ${variant}
`;

export const CardContentStyle = styled.div`
  padding: 16px;
`;

export const CardActionStyle = styled.div`
  padding: 16px;
`;

export const CardHeaderStyle = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 16px;
`;

export const CardHeaderTitleStyle = styled.span`
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  display: block;
`;
export const CardHeaderSubTitleStyle = styled.span`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  display: block;
`;

export const CardMediaStyle = styled.img<CardMediaProps>`
  width: -webkit-fill-available;
  object-fit: cover;
  ${customSize}
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;
