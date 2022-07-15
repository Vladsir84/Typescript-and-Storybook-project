import React, { useState } from "react";
import SideModal from "./components/SideModalComponent/SideModal";
import Card from "./components/CardComponent/Card";
import Modal from "./components/ModalComponent/Modal";
// import ToggleButton from "./components/toggleButton";

function App() {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      <div className="App">
        <SideModal />
        <Card />
        {/* <ToggleButton /> */}
      </div>
      <Modal />
    </>
  );
}

export default App;
