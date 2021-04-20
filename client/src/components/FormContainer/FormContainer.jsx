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

    if (currentForm >= 2) {
      if (currentPlayer < numPlayers) {
        await updatePlayer(currentPlayer, formData[currentPlayer]);
        nextPlayer(currentPlayer);
      } else {
        nextForm(currentForm);
      }
    }
  };

  return (
    <div className="form__container">
      <i className="bi-alarm" role="img"></i>
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
})(FormContainer);
