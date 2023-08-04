import { useState } from "react";
import { ModalStyle, ModalProps } from "./Modal.styled";
import { Typography } from "../Typography/Typography";

export const Modal = ({ ...props }: ModalProps): JSX.Element => {
  const closeModal = () => {
    props.onClose(false);
  };
  return (
    props?.open && (
      <div>
        <div className="modal-bg" onClick={closeModal}></div>
        <ModalStyle {...props}></ModalStyle>
      </div>
    )
  );
};
