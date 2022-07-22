import React, { useState } from "react";
import SideModal from "./components/SideModalComponent/SideModal";
import Card from "./components/CardComponent/Card";
import Modal from "./components/ModalComponent/Modal";
import TabBar from "./components/TabBarComponent/TabBar";
import ModalContent from "./components/ModalComponent/ModalContent";

const App: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [sidemodal, setSidemodal] = useState<boolean>(false);

  const modalHandler = () => {
    setModal(modal === false ? true : false);
  };

  const sideModalHandler = () => {
    setSidemodal(sidemodal === false ? true : false);
  };

  return (
    <>
      {modal && (
        <Modal modal={modal}>
          <ModalContent modalHandler={modalHandler} />
        </Modal>
      )}
      <TabBar />

      <button
        className="increase-button"
        style={{
          marginLeft: "30px",
          marginTop: "10px",
          width: "120px",
          height: "35px",
        }}
        onClick={sideModalHandler}
      >
        Side Modal
      </button>

      <button
        className="cancel-button"
        style={{
          marginTop: "10px",
          width: "120px",
          height: "35px",
        }}
        onClick={modalHandler}
      >
        Modal
      </button>

      <div className="App">
        {sidemodal && (
          <Modal modal={modal}>
            <SideModal
              sideModalHandler={sideModalHandler}
              modalHandler={modalHandler}
            />
          </Modal>
        )}
        <Card />
      </div>
    </>
  );
};

export default App;
