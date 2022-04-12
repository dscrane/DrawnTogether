import React from "react";
import { connect } from "react-redux";
import { Header } from "../Header";
import { Landing } from "../Landing";
import { DisplayResults } from "../DisplayResults";
import { FormContainer } from "../FormContainer";
import "./panel.css";

const Panel = ({ socket, _id, currentForm, screenshot }) => {
  const display = () => {
    if (currentForm === 0) {
      return <Landing />;
    } else {
      return currentForm > 8 ? (
        <DisplayResults socket={socket} gameId={_id} screenshot={screenshot} />
      ) : (
        <FormContainer socket={socket} />
      );
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
  const { _id, currentForm, screenshot } = gameState;
  return { _id, currentForm, screenshot };
};

export default connect(mapStateToProps, {})(Panel);
