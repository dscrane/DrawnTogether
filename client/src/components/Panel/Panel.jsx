import React from "react";
import { connect } from "react-redux";
import { Header } from "../Header";
import { Landing } from "../Landing";
import { FormContainer } from "../FormContainer";
import { startGame, endGame } from "../../redux/actions";
import "./panel.css";
import { DisplayResults } from "../DisplayResults";

const Panel = ({ socket, currentForm, inProgress, startGame, endGame }) => {
  const display = () => {
    if (inProgress) {
      return <FormContainer socket={socket} />;
    } else {
      return currentForm === 8 ? <DisplayResults endGame={endGame} /> : <Landing startGame={startGame} />;
    }
  };
  return (
    <div className="app-panel" data-testid="component-Panel">
      <div className="panel__row panel__row-header">
        <Header currentForm={currentForm} />
      </div>
      <div className="panel__row panel__row-content">{display()}</div>
    </div>
  );
};

const mapStateToProps = ({ gameState }) => {
  const { currentForm, inProgress } = gameState;
  return { currentForm, inProgress };
};

export default connect(mapStateToProps, { startGame, endGame })(Panel);
