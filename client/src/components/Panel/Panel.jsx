import React from "react";
import { connect } from "react-redux";
import { Header } from "../Header";
import { Landing } from "../Landing";
import { DisplayResults } from "../DisplayResults";
import { FormContainer } from "../FormContainer";
import { startGame, endGame } from "../../redux/actions";
import "./panel.css";

const Panel = ({ socket, _id, currentForm, inProgress, endGame }) => {
  const display = () => {
    if (inProgress) {
      return <FormContainer socket={socket} />;
    } else {
      return currentForm === 8 ? <DisplayResults endGame={endGame} gameId={_id} /> : <Landing />;
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
  const { _id, currentForm, inProgress } = gameState;
  return { _id, currentForm, inProgress };
};

export default connect(mapStateToProps, { startGame, endGame })(Panel);
