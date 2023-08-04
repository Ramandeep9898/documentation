import { ReactNode } from "react";
import styled, { css } from "styled-components";

export type ListProps = {
  children?: ReactNode;
  width?: number;
  primary?: string;
  secondary?: string;
};

const width = css<ListProps>`
  ${(props: ListProps) => {
    return props.width
      ? css`
          width: ${props.width}px;
        `
      : "";
  }}
`;

export const ListStyle = styled.nav<ListProps>`
  display: flex;
  flex-direction: column;
  background-color: #fff;

  ${width}
`;

export const ListItemStyle = styled.ul<ListProps>`
  list-style: none;
  margin: 0px;
  padding: 8px 0px;
  position: relative;
`;

export const ListButtonStyle = styled.li<ListProps>`
  display: flex;
  cursor: pointer;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  width: 100%;
  padding: 8px 16px;
  gap: 15px;
  box-sizing: border-box;
  text-align: left;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;

export const ListItemTextStyle = styled.div<ListProps>`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  /* padding: 16px; */
`;
export const ListItemPriTextStyle = styled.span<ListProps>`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.01071em;
  color: #1a2027;
  display: block;
`;

export const ListItemSecTextStyle = styled.span<ListProps>`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  display: block;
`;

export const DividerStyles = styled.span<ListProps>`
  width: 100%;
  height: 1px;
  background-color: #1a2027;
`;
