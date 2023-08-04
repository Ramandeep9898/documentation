import { ReactNode } from "react";
import styled, { css } from "styled-components";

export type PaddingProps = {
  children: ReactNode;
  px?: any;
  py?: any;
  pt?: any;
  pl?: any;
  pb?: any;
  pr?: any;
};

export const px = css<PaddingProps>`
  ${(props: PaddingProps) => {
    return props.px
      ? css`
          padding-left: ${props.px}px;
          padding-right: ${props.px}px;
        `
      : "";
  }}
`;

export const py = css<PaddingProps>`
  ${(props: PaddingProps) => {
    return props.py
      ? css`
          padding-top: ${props.py}px;
          padding-bottom: ${props.py}px;
        `
      : "";
  }}
`;

export const pt = css<PaddingProps>`
  ${(props: PaddingProps) => {
    return props.pt
      ? css`
          padding-top: ${props.pt};
        `
      : "";
  }}
`;

export const pb = css<PaddingProps>`
  ${(props: PaddingProps) => {
    return props.pb
      ? css`
          padding-bottom: ${props.pb}px;
        `
      : "";
  }}
`;

export const pl = css<PaddingProps>`
  ${(props: PaddingProps) => {
    return props.pl
      ? css`
          padding-left: ${props.pl}px;
        `
      : "";
  }}
`;

export const pr = css<PaddingProps>`
  ${(props: PaddingProps) => {
    return props.pr
      ? css`
          padding-right: ${props.pr}px;
        `
      : "";
  }}
`;
