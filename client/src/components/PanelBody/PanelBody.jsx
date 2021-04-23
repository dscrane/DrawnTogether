import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./panelBody.css";
import { FormHeading } from "../FormHeading";
import { FormContainer } from "../FormContainer";

const PanelBody = ({ session, players }) => {
  const { currentForm, currentPlayer, numPlayers } = session;
  return (
    <div className="form__container">
      {currentForm > 1 ? <FormHeading currentPlayer={currentPlayer} numPlayers={numPlayers} players={players} /> : null}
      <FormContainer />
    </div>
  );
};

const mapStateToProps = ({ gameState }) => {
  const { canvasDisplay, players, ...rest } = gameState;
  return {
    canvasDisplay,
    players,
    session: rest,
  };
};

export default connect(mapStateToProps)(PanelBody);
