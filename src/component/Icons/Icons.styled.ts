import { ReactNode } from "react";
import styled, { css } from "styled-components";

export type IconProps = {
  children?: ReactNode;
  size?: "sm" | "md" | "lg" | number;
  color?: any;
  bgColor?: any;
};

const bgColor = css<IconProps>`
  ${(props: IconProps) => {
    return props.bgColor
      ? css`
          background-color: ${props.bgColor};
        `
      : "";
  }}
`;
const color = css<IconProps>`
  ${(props: IconProps) => {
    return props.color
      ? css`
          color: ${props.color};
        `
      : "";
  }}
`;

const iconSize = css<IconProps>`
  ${(props: IconProps) => {
    return props.size === "sm"
      ? css`
          font-size: 14px;
        `
      : props.size === "md"
      ? css`
          font-size: 18px;
        `
      : props.size === "lg"
      ? css`
          font-size: 21px;
        `
      : props.size
      ? css`
          font-size: ${props.size}px;
        `
      : "";
  }}
`;

export const IconStyle = styled.div<IconProps>`
  font-size: 16px;
  ${iconSize}
  ${bgColor}
  ${color}
`;
