import React, { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
interface ModalProps {
  modal: boolean;
  children: any;
}

const modalRootElement = document.querySelector("#modal");

const Modal: React.FC<ModalProps> = (props) => {
  const element = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    modalRootElement?.appendChild(element);

    return () => {
      modalRootElement?.removeChild(element);
    };
  });

  return createPortal(
    <div
      className="modal-wrapper"
      style={{ justifyContent: props.modal ? "center" : "flex-start" }}
    >
      {props.children}
    </div>,
    element
  );
};

export default Modal;
