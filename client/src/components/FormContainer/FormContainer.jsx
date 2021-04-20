import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FormDisplay } from "../FormDisplay";
import {
  setInterestAndPlayers,
  updatePlayerCircle,
  updatePlayer,
  nextForm,
  prevForm,
  nextPlayer,
  prevPlayer,
  endGame,
  finalDisplay,
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
        console.log("nextplayer");
        await updatePlayer(currentPlayer, formData[currentPlayer]);
        await nextPlayer(currentPlayer);
      } else {
        console.log("nextform");
        await nextForm(currentForm);
      }
    }
  };

  return (
    <div className="form__container">
      {currentForm > 1 ? <FormHeading currentPlayer={currentPlayer} numPlayers={numPlayers} players={players} /> : null}
      <FormDisplay
        onSubmit={handleNext}
        handlePrevious={handlePrevious}
        currentForm={currentForm}
        currentPlayer={currentPlayer}
        numPlayers={numPlayers}
      />
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
