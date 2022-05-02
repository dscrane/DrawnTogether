import React from "react";
import { PanelHeader } from "../PanelHeader";
import { PanelContent } from "../PanelContent";
import { MoreInformation } from "../MoreInformation";
import { Modal } from "../../lib/Modal";
import "./panel.css";

const PanelLayout = ({ _id, currentForm, showModal, screenshot, updateScreenshot, endGame, toggleModal }) => {
  return (
    <div className="app__panel" data-testid="component-PanelLayout">
      <Modal show={showModal} onClose={toggleModal}>
        <span>Drawn Together</span>
        <MoreInformation />
      </Modal>
      <div className="panel__row panel__row-header">
        <PanelHeader currentForm={currentForm} />
      </div>
      <div className="panel__row panel__row-content">
        <PanelContent
          currentForm={currentForm}
          screenshot={screenshot}
          updateScreenshot={updateScreenshot}
          endGame={endGame}
          toggleModal={toggleModal}
        />
      </div>
    </div>
  );
};

export default PanelLayout;
