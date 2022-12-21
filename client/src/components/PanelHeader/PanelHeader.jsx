import React from "react";
import { useSelector } from "react-redux";
import { PanelHeaderIcons } from "../PanelHeaderIcons";
import "./header.css";

export const PanelHeader = () => {
  const { currentForm } = useSelector((state) => state.session);
  return (
    <div className="header" data-testid="component-PanelHeader">
      <div className="header__title">
        Drawn <br />
        Together
      </div>
      <h3 className="header__text">an interactive image generator</h3>
      <PanelHeaderIcons currentForm={currentForm} />
    </div>
  );
};
