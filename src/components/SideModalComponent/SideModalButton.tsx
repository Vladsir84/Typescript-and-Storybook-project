import React from "react";

interface ModalProps {
  modalHandler(): void;
}

const SideModalButton: React.FC<ModalProps> = (props) => {
  return (
    <button className="sidemodal-button" onClick={props.modalHandler}>
      Apply
    </button>
  );
};

export default SideModalButton;
