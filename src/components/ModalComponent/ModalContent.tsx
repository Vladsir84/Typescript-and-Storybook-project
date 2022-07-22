import React from "react";
import CloseIcon from "../icons/CloseIcon";

interface ModalProps {
  modalHandler(): void;
}

const ModalContent: React.FC<ModalProps> = (props) => {
  return (
    <div className="modal-main">
      <div className="close-icon-wrapper">
        <CloseIcon modalHandler={props.modalHandler} />
      </div>
      <div className="exclemation-wrapper">
        <div className="exclemation-round">!</div>
      </div>
      <div className="modal-text-main">
        <div className="modal-text">Do you want to increase</div>
        <div className="modal-text">the number?</div>
      </div>
      <div className="modal-subtext-wrapper">
        <div className="modal-subtext">
          The position already exists in the project.
        </div>
      </div>
      <div className="modal-buttons">
        <button className="increase-button">Yes, increase</button>
        <button className="cancel-button" onClick={props.modalHandler}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ModalContent;
