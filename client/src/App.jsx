import React, { useState } from "react";
import { Panel } from "./components/Panel";
import { Canvas } from "./components/Canvas";
import { Modal } from "./lib/Modal";
import { MoreInformation } from "./components/MoreInformation";
import { connect } from "react-redux";
import { toggleModal } from "./redux/actions";

const App = ({ showModal, currentForm, toggleModal }) => {
  return (
    <div className="app" data-testid="component-App">
      <Modal show={showModal} onClose={toggleModal}>
        <span>Drawn Together</span>
        <MoreInformation />
      </Modal>
      <div className="app__display">
        <div className="app__sidebar">
          <Panel currentForm={currentForm} />
        </div>
        <div className="app__canvas">
          <Canvas />
        </div>
      </div>
      <div className="cr">C 2020-2022 - Drawn Together - Created by Carrie and Daegan Crane</div>
    </div>
  );
};

const mapStateToProps = ({ gameState }) => {
  const { showModal, currentForm } = gameState;
  return { showModal, currentForm };
};

export default connect(mapStateToProps, { toggleModal })(App);
