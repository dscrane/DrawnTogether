import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FormArea } from "../FormArea";
import {
  setInterestAndPlayers,
  updatePlayerCircle,
  updatePlayer,
  nextForm,
  prevForm,
  nextPlayer,
  prevPlayer,
  endGame,
} from "../../redux_v2/actions";

const displayInstructions = (currentForm) => {
  if (currentForm === 1) {
    return "What is a common interest or relationship that connects your group?";
  } else if (currentForm === 2) {
    return "What is your name and how long have you been associated the common interest?";
  }
};

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
    if (currentForm >= 2) {
      updatePlayerCircle(players[currentPlayer - 1], currentPlayer - 1, currentForm);
    }
  }, [currentPlayer]);

  const handlePrevious = async () => {
    console.log("handle previous");
    if (currentForm === 1) {
      await endGame();
    } else if (currentPlayer < numPlayers) {
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

    console.log("before if", formData[currentPlayer], players[currentPlayer]);
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
    <FormArea
      onSubmit={handleNext}
      handlePrevious={handlePrevious}
      currentForm={currentForm}
      currentPlayer={currentPlayer}
      numPlayers={numPlayers}
    />
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
