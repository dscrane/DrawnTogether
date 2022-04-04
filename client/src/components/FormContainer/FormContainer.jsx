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
  initializePlayers,
  updatePlayer,
} from "../../redux/actions";
import { fetchCirclesEmitter, initializePlayersEmitter, updatePlayerEmitter } from "../../socket.io/emitters";
import { responseSchema } from "../../utils";

const formResponseSchema = {
  interest: "",
  players: [responseSchema, responseSchema],
};

const FormContainer = ({
  socket,
  session,
  gameId,
  players,
  updatePlayer,
  nextPlayer,
  initializePlayers,
  prevPlayer,
  nextForm,
  prevForm,
  endGame,
  finalDisplay,
  centerPoint,
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
    console.log(values);
    if (currentForm === 1) {
      await initializePlayersEmitter(socket, gameId, values);
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
        await updatePlayerEmitter(
          socket,
          session.playerIds[currentPlayer],
          values.players[currentPlayer],
          currentForm,
          centerPoint
        );
        await nextPlayer(currentPlayer);
      } else {
        await fetchCirclesEmitter(socket);
        await nextForm(currentForm);
      }
    }
  };

  return (
    <div className={`form__container ${currentForm === 1 ? "form__container-border" : ""}`}>
      <div className="form__scroll">
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
    </div>
  );
};

const mapStateToProps = ({ gameState }) => {
  const { _id, display, players, ...rest } = gameState;
  return {
    centerPoint: display.centerPoint,
    players,
    gameId: _id,
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
  initializePlayers,
  finalDisplay,
})(FormContainer);
