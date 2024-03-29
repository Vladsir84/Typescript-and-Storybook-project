import React from "react";

interface ModalProps {
  modalHandler(): void;
}

const CloseIcon: React.FC<ModalProps> = (props) => {
  return (
    <div onClick={props.modalHandler}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 8L16 16"
          stroke="#9CA4B3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 8L8 16"
          stroke="#9CA4B3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default CloseIcon;
