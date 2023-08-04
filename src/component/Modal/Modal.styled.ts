import { ReactNode } from "react";
import styled, { css } from "styled-components";

export type ModalProps = {
  children?: ReactNode;
  onClose?: any;
  open?: any;
};

export const ModalStyle = styled.div<ModalProps>`
  width: 500px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -20%);
  padding: 32px;
  background-color: #fff;
`;
