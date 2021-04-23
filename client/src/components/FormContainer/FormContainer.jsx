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
  setInterestAndPlayers,
  updatePlayer,
  updatePlayerCircle,
} from "../../redux/actions";
import { FormHeading } from "../FormHeading";

const FormContainer = ({
  session,
  players,
  updatePlayer,
  updatePlayerCircle,
  nextPlayer,
  setInterestAndPlayers,
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
      await setInterestAndPlayers(formData);
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
        await updatePlayer(currentPlayer, formData[currentPlayer]);
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
  const { canvasDisplay, players, ...rest } = gameState;
  return {
    canvasDisplay,
    players,
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
  setInterestAndPlayers,
  finalDisplay,
})(FormContainer);
