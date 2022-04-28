import React from "react";
import { FormDisplay } from "../FormDisplay";
import { connect } from "react-redux";
import {
  endGame,
  finalDisplay,
  initializePlayers,
  nextForm,
  nextPlayer,
  prevForm,
  prevPlayer,
  reinitializePlayers,
  addPlayerCircle,
  updatePlayerCircle,
} from "../../redux/actions";
import { createResponseSchema } from "../../utils";
import "./formContainer.css";

const formResponseSchema = {
  interest: "",
  players: [
    createResponseSchema(),
    createResponseSchema(),
    // createResponseSchema(),
    // createResponseSchema(),
    // createResponseSchema(),
  ],
};

const FormContainer = ({
  session,
  gameId,
  players,
  nextPlayer,
  prevPlayer,
  nextForm,
  prevForm,
  endGame,
  display,
  initializePlayers,
  reinitializePlayers,
  addPlayerCircle,
  updatePlayerCircle,
  finalDisplay,
}) => {
  const { currentForm, currentPlayer, numPlayers } = session;
  const handlePrevious = async () => {
    if (currentForm === 1) {
      await endGame();
    } else if (currentPlayer === 0) {
      await prevForm(currentForm);
    } else {
      await prevPlayer(currentPlayer);
    }
  };
  const handleSubmit = async (values, actions) => {
    if (currentForm === 1) {
      if (!Object.keys(players).length) {
        await initializePlayers(gameId, values);
      } else {
        await reinitializePlayers(gameId, session.playerIds, values);
      }
      await nextForm(currentForm);
      return;
    }
    if (currentForm === 8) {
      await finalDisplay(gameId);
      return;
    }
    if (currentForm === 2) {
      await addPlayerCircle(
        session.playerIds[currentPlayer],
        values.players[currentPlayer],
        currentForm,
        display.centerPoint
      );
    } else if (currentForm > 2 && currentForm <= 7) {
      await updatePlayerCircle(
        session.playerIds[currentPlayer],
        values.players[currentPlayer],
        currentForm,
        display.centerPoint
      );
    }
    if (currentPlayer < numPlayers - 1) {
      await nextPlayer(currentPlayer);
    } else {
      await nextForm(currentForm);
    }
  };

  return (
    <div className={`form__container ${currentForm === 1 ? "form__container-border" : ""}`}>
      <div className="form__scroll">
        <FormDisplay
          onSubmit={handleSubmit}
          handlePrevious={handlePrevious}
          initialValues={formResponseSchema}
          currentForm={currentForm}
          currentPlayer={currentPlayer}
          numPlayers={numPlayers}
          players={players}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ gameState }) => {
  const { _id, display, players, ...rest } = gameState;
  return {
    display,
    players,
    gameId: _id,
    session: rest,
  };
};

export default connect(mapStateToProps, {
  nextPlayer,
  prevPlayer,
  nextForm,
  prevForm,
  endGame,
  finalDisplay,
  initializePlayers,
  reinitializePlayers,
  addPlayerCircle,
  updatePlayerCircle,
})(FormContainer);
