import React from "react";
import { FormDisplay } from "../FormDisplay";
import { connect } from "react-redux";
import {
  endGame,
  finalDisplay,
  nextForm,
  nextPlayer,
  prevForm,
  prevPlayer,
  initializeGame,
  updatePlayer,
  initializePlayersEmitter,
} from "../../redux/actions";
import { responseSchema } from "../../utils";

const formResponseSchema = {
  interest: "",
  players: [responseSchema, responseSchema],
};

const FormContainer = ({
  session,
  gameId,
  players,
  gridDisplay,
  updatePlayer,
  nextPlayer,
  initializePlayersEmitter,
  prevPlayer,
  nextForm,
  prevForm,
  endGame,
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
  const handleSubmit = async (values) => {
    if (currentForm === 1) {
      // await initializeGame(gameId, values, gridDisplay);
      console.log(values);
      await initializePlayersEmitter(values);
      await nextForm(currentForm);
      return;
    }
    if (currentForm === 7 && currentPlayer === numPlayers) {
      await finalDisplay(players, currentForm);
      // await nextForm(currentForm);
      return;
    }
    if (currentForm >= 2 && currentForm <= 7) {
      if (currentPlayer < numPlayers) {
        const success = await updatePlayer(
          currentPlayer,
          session.playerIds[currentPlayer],
          values.players[currentPlayer],
          currentForm
        );
        if (success) {
          await nextPlayer(currentPlayer);
        } else {
          alert(success.error.message);
        }
      } else {
        await nextForm(currentForm);
      }
    }
  };

  return (
    <div className={`form__container ${currentForm === 1 ? "form__container-border" : ""}`}>
      <FormDisplay
        onSubmit={handleSubmit}
        initialValues={formResponseSchema}
        handlePrevious={handlePrevious}
        currentForm={currentForm}
        currentPlayer={currentPlayer}
        numPlayers={numPlayers}
        players={players}
      />
    </div>
  );
};

const mapStateToProps = ({ gameState }) => {
  const { gridDisplay, players, gameId, ...rest } = gameState;
  return {
    gridDisplay,
    players,
    gameId,
    session: rest,
  };
};

export default connect(mapStateToProps, {
  updatePlayer,
  nextPlayer,
  prevPlayer,
  nextForm,
  prevForm,
  endGame,
  initializePlayersEmitter,
  finalDisplay,
})(FormContainer);
