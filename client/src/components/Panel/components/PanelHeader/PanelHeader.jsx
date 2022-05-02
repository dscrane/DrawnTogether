import React from "react";
import { HeaderIcons } from "./components";
import "./panelHeader.css";

const PanelHeader = ({ currentForm }) => {
  return (
    <div className="header" data-testid="component-PanelHeader">
      <div className="header__title">
        Drawn <br />
        Together
      </div>
      <h3 className="header__text">an interactive image generator</h3>
      <HeaderIcons currentForm={currentForm} />
    </div>
  );
};

export default PanelHeader;
