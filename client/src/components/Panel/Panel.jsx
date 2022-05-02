import React from "react";
import { PanelContent, PanelHeader } from "./components";
import "./panel.css";

const Panel = ({ currentForm }) => {
  return (
    <div className="app-panel" data-testid="component-Panel">
      <div className="panel__row panel__row-header">
        <PanelHeader currentForm={currentForm} />
      </div>
      <div className="panel__row panel__row-content">
        <PanelContent currentForm={currentForm} />
      </div>
    </div>
  );
};

export default Panel;
