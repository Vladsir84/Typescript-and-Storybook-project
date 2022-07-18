import React, { useState } from "react";
import SideModal from "./components/SideModalComponent/SideModal";
import Card from "./components/CardComponent/Card";
import Modal from "./components/ModalComponent/Modal";
import TabBar from "./components/TabBarComponent/TabBar";
// import ToggleButton from "./components/toggleButton";

const App: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);

  const modalHandler = () => {
    setModal(modal === false ? true : false);
  };

  return (
    <>
      {modal && <Modal modalHandler={modalHandler} />}
      <TabBar />
      <div className="App">
        <SideModal modalHandler={modalHandler} />
        <Card />
        {/* <ToggleButton /> */}
      </div>
    </>
  );
};

export default App;
