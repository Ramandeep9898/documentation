import { ReactNode } from "react";
import styled, { css } from "styled-components";

type SizeProps = {
  width?: number;
  height?: number;
};

export type ImageProps = {
  children?: ReactNode;
  size?: SizeProps;
  gap?: number;
  col?: number;
  rowHeight?: number;
};

const size = css<ImageProps>`
  ${(props: ImageProps) => {
    return (
      props.size?.width &&
      css`
        width: ${props.size.width}px;
      `
    );
  }}
  ${(props: ImageProps) => {
    return (
      props.size?.height &&
      css`
        height: ${props.size.height}px;
      `
    );
  }}
`;

const gap = css<ImageProps>`
  ${(props: ImageProps) => {
    return (
      props.gap &&
      css`
        gap: ${props.gap}px;
      `
    );
  }}
`;

const rowHeight = css<ImageProps>`
  ${(props: ImageProps) => {
    return (
      props.rowHeight &&
      css`
        height: ${props.rowHeight}px;
        grid-column-end: span 1;
        grid-row-end: span 1;
      `
    );
  }}
`;

const col = css<ImageProps>`
  ${(props: ImageProps) => {
    return (
      props.col &&
      css`
        grid-template-columns: repeat(${props.col}, 1fr);
      `
    );
  }}
`;

export const ImageListStyle = styled.ul<ImageProps>`
  display: grid;
  overflow-y: auto;
  list-style: none;
  padding: 0px;
  width: 500px;
  height: 450px;
  gap: 4px;
  ${size}
  ${gap}
  ${col}
`;

export const ImageListItemStyle = styled.li<ImageProps>`
  font-size: 16px;
  ${rowHeight}
  img {
    height: ${(props) => props.rowHeight}px;
  }
`;
