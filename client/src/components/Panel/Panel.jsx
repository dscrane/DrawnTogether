import React from "react";
import { connect } from "react-redux";
import { Header } from "../Header";
import { Landing } from "../Landing";
import { DisplayResults } from "../DisplayResults";
import { FormContainer } from "../FormContainer";
import "./panel.css";

const Panel = ({ socket, _id, currentForm }) => {
  const display = () => {
    if (currentForm === 0) {
      return <Landing />;
    } else {
      return currentForm > 8 ? <DisplayResults socket={socket} gameId={_id} /> : <FormContainer socket={socket} />;
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
  const { _id, currentForm } = gameState;
  return { _id, currentForm };
};

export default connect(mapStateToProps, {})(Panel);
