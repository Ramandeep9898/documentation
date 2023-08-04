import { ReactNode } from "react";
import styled, { css } from "styled-components";

import { utils, UtilProps } from "../Utils/Utils.styled";

export type TypographyProps = {
  children?: ReactNode;
  component?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body"
    | "subtitle1"
    | "subtitle2"
    | "body2"
    | "buttonText"
    | "captionText"
    | "overlineText";
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "sidebar"
    | "sub-title"
    | "body"
    | "subtitle1"
    | "subtitle2"
    | "body2"
    | "buttonText"
    | "captionText"
    | "overlineText";
} & UtilProps;

const variant = css<TypographyProps>`
  ${(props: TypographyProps) => {
    return props.variant === "h1"
      ? css`
          font-size: 6rem;
        `
      : props.variant === "h2"
      ? css`
          font-size: 3.75rem;
        `
      : props.variant === "h3"
      ? css`
          font-size: 3rem;
        `
      : props.variant === "h4"
      ? css`
          font-size: 2.125rem;
        `
      : props.variant === "h5"
      ? css`
          font-size: 1.5rem;
        `
      : props.variant === "h6"
      ? css`
          font-size: 1.25rem;
        `
      : props.variant === "sidebar"
      ? css`
          font-size: 16px;
          color: var(--pri-black);
          font-weight: 500;
        `
      : props.variant === "sub-title"
      ? css`
          font-size: 16px;
          color: var(--pri-black);
          font-weight: 500;
        `
      : props.variant === "body"
      ? css`
          color: var(--pri-black);
          font-weight: 500;
          line-height: 1.43;
          letter-spacing: 0.01071em;
        `
      : props.variant === "subtitle1"
      ? css`
          margin: 0px 0px 0.35em;
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.75;
          letter-spacing: 0.00938em;
        `
      : props.variant === "subtitle2"
      ? css`
          margin: 0px 0px 0.35em;
          font-weight: 500;
          font-size: 0.875rem;
          line-height: 1.57;
          letter-spacing: 0.00714em;
        `
      : props.variant === "body2"
      ? css`
          margin: 0px 0px 0.35em;
          font-weight: 400;
          font-size: 0.875rem;
          line-height: 1.43;
          letter-spacing: 0.01071em;
        `
      : props.variant === "buttonText"
      ? css`
          margin: 0px 0px 0.35em;
          font-weight: 500;
          font-size: 0.875rem;
          line-height: 1.75;
          letter-spacing: 0.02857em;
          text-transform: uppercase;
          display: block;
        `
      : props.variant === "captionText"
      ? css`
          margin: 0px 0px 0.35em;
          font-weight: 400;
          font-size: 0.75rem;
          line-height: 1.66;
          letter-spacing: 0.03333em;
          display: block;
        `
      : props.variant === "overlineText"
      ? css`
          margin: 0px 0px 0.35em;
          font-family: Roboto, Helvetica, Arial, sans-serif;
          font-weight: 400;
          font-size: 0.75rem;
          line-height: 2.66;
          letter-spacing: 0.08333em;
          text-transform: uppercase;
          display: block;
        `
      : "";
  }}
`;

export const Headline1Style = styled.h1<TypographyProps>`
  font-size: 6rem;
  ${variant}
  ${utils}
`;
export const Headline2Style = styled.h2<TypographyProps>`
  font-size: 3.75rem;
  ${variant}
  ${utils}
`;

export const Headline3Style = styled.h3<TypographyProps>`
  font-size: 3rem;
  ${variant}
  ${utils}
`;

export const Headline4Style = styled.h4<TypographyProps>`
  font-size: 2.125rem;
  ${variant}
  ${utils}
`;

export const Headline5Style = styled.h5<TypographyProps>`
  font-size: 1.5rem;
  ${variant}
  ${utils}
`;

export const Headline6Style = styled.h6<TypographyProps>`
  font-size: 1.25rem;
  ${variant}
  ${utils}
`;

export const Body = styled.p<TypographyProps>`
  font-size: 0.875rem;
  ${variant}
  ${utils}
`;
