import React from "react";
import { PanelHeader } from "../PanelHeader";
import { PanelContent } from "../PanelContent";
import { MoreInformation } from "../MoreInformation";
import { Modal } from "../../lib/Modal";
import "./panel.css";

const PanelLayout = () => {
  return (
    <div className="app__panel" data-testid="component-PanelLayout">
      <div className="panel__row panel__row-header">
        <PanelHeader />
      </div>
      <div className="panel__row panel__row-content">
        <PanelContent />
      </div>
    </div>
  );
};

export default PanelLayout;
