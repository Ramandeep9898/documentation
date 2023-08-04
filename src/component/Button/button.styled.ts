import styled, { css } from "styled-components";
import { ReactNode } from "react";

export type ButtonProps = {
  variation?: "primary" | "secondary" | "stroke" | "ghost";
  size?: "sm" | "md" | "lg" | number;
  color?: "err" | "suc" | "info" | "warning";
  children?: ReactNode;
};

const variation = css<ButtonProps>`
  ${(props: ButtonProps) => {
    return props.variation === "secondary"
      ? css`
          background-color: #4f46e5;
        `
      : props.variation === "primary"
      ? css`
          background-color: #18181b;
        `
      : props.variation === "stroke"
      ? css`
          border: 1px solid #49433e;
          background: transparent;
          color: #49433e;
        `
      : props.variation === "ghost"
      ? css`
          background: transparent;
          color: #49433e;
        `
      : "";
  }}
`;
const size = css<ButtonProps>`
  ${(props: ButtonProps) => {
    return props.size === "sm"
      ? css`
          padding: 6px 10px;
        `
      : props.size === "md"
      ? css`
          padding: 10px 20px;
        `
      : props.size === "lg"
      ? css`
          font-size: 16px;
          padding: 16px 24px;
        `
      : props.size
      ? css`
          font-size: ${props.size}px;
          padding: 16px 24px;
        `
      : "";
  }}
`;

const color = css<ButtonProps>`
  ${(props: ButtonProps) => {
    return props.color === "err"
      ? css`
          background-color: #ef4444;
        `
      : props.color === "suc"
      ? css`
          background-color: #10b981;
        `
      : props.color === "warning"
      ? css`
          background-color: #f59e0b;
        `
      : props.color === "info"
      ? css`
          background: transparent;
          background-color: #4f46e5;
        `
      : "";
  }}
`;

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  border-radius: 4px;
  padding: 12px 24px;
  line-height: 1;
  border: none;
  color: #fff;
  display: inline-block;
  ${variation}
  ${size}
  ${color}
`;
