import React, { useState } from "react";
import { Panel } from "./components/Panel";
import { Canvas } from "./components/Canvas";
import { Modal } from "./lib/Modal";
import { MoreInformation } from "./components/MoreInformation";

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="app" data-testid="component-App">
      <Modal show={showModal} onClose={() => setShowModal(!showModal)}>
        <span>Drawn Together</span>
        <MoreInformation />
      </Modal>
      <div className="app__display">
        <div className="app__sidebar">
          <Panel showModal={() => setShowModal(true)} />
        </div>
        <div className="app__canvas">
          <Canvas />
        </div>
      </div>
      <div className="cr">C 2020-2022 - Drawn Together - Created by Carrie and Daegan Crane</div>
    </div>
  );
};

export default App;
