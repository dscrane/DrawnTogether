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
  nextPlayer,
  setInterestAndPlayers,
  prevPlayer,
  nextForm,
  prevForm,
}) => {
  const { currentForm, currentPlayer, numPlayers } = session;

  const handlePrevious = async () => {
    if (currentPlayer === 0) {
      await prevForm(currentForm);
    } else {
      await prevPlayer(currentPlayer);
    }
  };

  const handleNext = async (formData) => {
    if (currentForm === 1) {
      await setInterestAndPlayers(formData);
      await nextForm(currentForm);
      return;
    }

    if (currentForm >= 2) {
      if (currentPlayer < numPlayers) {
        await updatePlayer(currentPlayer, formData[currentPlayer]);
        await updatePlayerCircle(players[currentPlayer].circle);
        await nextPlayer(currentPlayer);
      } else {
        await nextForm(currentForm);
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
  updatePlayerCircle,
  setInterestAndPlayers,
})(FormContainer);
