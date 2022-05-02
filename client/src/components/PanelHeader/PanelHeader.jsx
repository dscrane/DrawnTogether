import React from "react";
import { connect } from "react-redux";
import { PanelHeaderIcons } from "../PanelHeaderIcons";
import "./header.css";

const PanelHeader = ({ currentForm }) => {
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

const mapStateToProps = ({ gameState }) => {
  const { currentForm } = gameState;
  return { currentForm };
};

export default connect(mapStateToProps, null)(PanelHeader);
