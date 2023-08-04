import { ReactNode } from "react";
import styled, { css } from "styled-components";

export type AvatarProps = {
  children?: ReactNode;
  alt?: string;
  src: string;
  size?: "md" | "lg" | "xl";
  width?: string;
  height?: string;
};

const size = css<AvatarProps>`
  ${(props: AvatarProps) => {
    return props.size === "md"
      ? css`
          width: 64px;
          height: 64px;
        `
      : props.size === "lg"
      ? css`
          width: 72px;
          height: 72px;
        `
      : props.size === "xl"
      ? css`
          width: 88px;
          height: 88px;
        `
      : "";
  }}
`;

export const customSize = css<AvatarProps>`
  ${(props) =>
    props.width &&
    props.height &&
    `
   width: ${props.width};
   height: ${props.height};
  `}
`;

export const AvatarStyle = styled.img<AvatarProps>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  ${size};
  ${customSize}
`;
