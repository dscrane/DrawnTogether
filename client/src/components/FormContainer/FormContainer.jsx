import React, { useEffect } from "react";
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
  updatePlayerCircle,
} from "../../redux/actions";
import { FormHeading } from "../FormHeading";

const FormContainer = ({
  session,
  gameId,
  players,
  updatePlayer,
  updatePlayerCircle,
  nextPlayer,
  initializeGame,
  prevPlayer,
  nextForm,
  prevForm,
  endGame,
  finalDisplay,
}) => {
  const { currentForm, currentPlayer, numPlayers } = session;

  useEffect(() => {
    if (currentForm >= 2 && currentPlayer > 0) {
      updatePlayerCircle(players[currentPlayer - 1], currentPlayer - 1, currentForm);
    }
  }, [currentPlayer]);

  const handlePrevious = async () => {
    if (currentForm === 1) {
      await endGame();
    } else if (currentPlayer === 0) {
      await prevForm(currentForm);
    } else {
      await prevPlayer(currentPlayer);
    }
  };

  const handleNext = async (formData) => {
    if (currentForm === 1) {
      console.log('game id', gameId)

      await initializeGame(gameId, formData);
      nextForm(currentForm);
      return;
    }

    if (currentForm === 7 && currentPlayer === numPlayers) {
      await finalDisplay(players);
      await nextForm(currentForm);
      return;
    }

    if (currentForm >= 2 && currentForm <= 7) {
      if (currentPlayer < numPlayers) {
        await updatePlayer(currentPlayer, session.playerIds[currentPlayer], formData[currentPlayer], currentForm);
        await nextPlayer(currentPlayer);
      } else {
        await nextForm(currentForm);
      }
    }
  };

  return (
    <>
      <FormHeading currentPlayer={currentPlayer} numPlayers={numPlayers} players={players} />
      <FormDisplay
        onSubmit={handleNext}
        handlePrevious={handlePrevious}
        currentForm={currentForm}
        currentPlayer={currentPlayer}
        numPlayers={numPlayers}
      />
    </>
  );
};

const mapStateToProps = ({ gameState }) => {
  const { canvasDisplay, players, gameId, ...rest } = gameState;
  return {
    canvasDisplay,
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
  updatePlayerCircle,
  initializeGame,
  finalDisplay,
})(FormContainer);
