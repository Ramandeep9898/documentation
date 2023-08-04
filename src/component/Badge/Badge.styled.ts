import { ReactNode } from "react";
import styled, { css } from "styled-components";

export type BadgeProps = {
  children?: ReactNode;
  severity: "error" | "warning" | "info" | "success";
  variant?: "outline";
};

const severity = css<BadgeProps>`
  ${(props: BadgeProps) => {
    return props.severity === "error"
      ? css`
          color: #dc2626;
          background-color: #fef2f2;
        `
      : props.severity === "warning"
      ? css`
          color: #d97706;
          background-color: #fffbeb;
        `
      : props.severity === "info"
      ? css`
          color: #4f46e5;
          background-color: #eef2ff;
        `
      : props.severity === "success"
      ? css`
          color: #059669;
          background-color: #ecfdf5;
        `
      : "";
  }}
`;

const variant = css<BadgeProps>`
  ${(props: BadgeProps) => {
    return props.severity === "error" && props.variant === "outline"
      ? css`
          border: 1px solid #dc2626;
        `
      : props.severity === "warning" && props.variant === "outline"
      ? css`
          border: 1px solid #d97706;
        `
      : props.severity === "info" && props.variant === "outline"
      ? css`
          border: 1px solid #4f46e5;
        `
      : props.severity === "success" && props.variant === "outline"
      ? css`
          border: 1px solid #059669;
        `
      : "";
  }}
`;
export const BadgeStyle = styled.div<BadgeProps>`
  padding: 4px 10px;
  font-size: 14px;
  border-radius: 16px;
  display: inline-block;
  ${severity};
  ${variant}
`;
