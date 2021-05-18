import React from "react";
import { connect } from "react-redux";
import { Header } from "../Header";
import { Landing } from "../Landing";
import { FormContainer } from "../FormContainer";
import { startGame } from "../../redux/actions";
import "./panel.css";

const Panel = ({ currentForm, inProgress, startGame }) => {
  const display = inProgress ? <FormContainer /> : <Landing startGame={startGame} />;
  return (
    <div className="app-panel" data-testid="component-Panel">
      <div className="panel__row panel__row-header">
        <Header currentForm={currentForm} />
      </div>
      <div className="panel__row panel__row-instructions">
        <span className="instructions">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </span>
      </div>
      <div className="panel__row panel__row-content">{display}</div>
    </div>
  );
};

const mapStateToProps = ({ gameState }) => {
  const { currentForm, inProgress } = gameState;
  return { currentForm, inProgress };
};

export default connect(mapStateToProps, { startGame })(Panel);
