import { ReactNode } from "react";
import styled, { css } from "styled-components";

export type NavbarProps = {
  children?: ReactNode;
};

// const severity = css<AlertProps>`
//   ${(props: AlertProps) => {
//     return props.severity === "error"
//       ? css`
//           background-color: rgb(254, 242, 242);
//           color: #b91c1c;
//         `
//       : props.severity === "warring"
//       ? css`
//           background-color: rgb(255, 251, 235);
//           color: #78350f;
//         `
//       : props.severity === "success"
//       ? css`
//           background-color: rgb(209, 250, 229);
//           color: #064e3b;
//         `
//       : props.severity === "info"
//       ? css`
//           background-color: rgb(238, 242, 255);
//           color: #312e81;
//         `
//       : "";
//   }}
// `;
// const variant = css<AlertProps>`
//   ${(props: AlertProps) => {
//     return props.variant === "outline" && props.severity === "error"
//       ? css`
//           border: 1px solid #b91c1c;
//         `
//       : props.variant === "outline" && props.severity === "warring"
//       ? css`
//           border: 1px solid #78350f;
//         `
//       : props.variant === "outline" && props.severity === "success"
//       ? css`
//           border: 1px solid #064e3b;
//         `
//       : props.variant === "outline" && props.severity === "info"
//       ? css`
//           border: 1px solid #312e81;
//         `
//       : "";
//   }}
// `;

export const NavbarStyle = styled.header<NavbarProps>`
  /* width: 100vw; */
  padding: 16px 50px;
  display: flex;
  align-items: center;
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--pri-black);
`;
