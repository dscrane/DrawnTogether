import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { submitForm, nextPlayer, prevPlayer, initializeUserGroup } from "../../redux/actions";
import { FormArea } from "../FormArea";
import { FormDisplay } from "../FormDisplay";
import { FormButtons } from "../FormButtons";
import { createPlayerIcons, handleFormSubmit } from "../../utils";
import { SidebarButtons } from "../SidebarButtons";
import { setInterestAndPlayers, updatePlayerCircle, updatePlayer, nextForm } from "../../redux_v2/actions";

const updateMessage = (
  <div className="body__updateMessage">
    Click "Next Form"
    <br /> to continue
    <br /> or
    <br /> go back
    <br /> to change responses
  </div>
);

const FormContainer = ({ session, players, updatePlayer, nextPlayer, setInterestAndPlayers, prevPlayer, nextForm }) => {
  const { currentForm, currentPlayer, numPlayers } = session;
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    setResponses([]);
  }, [submitForm]);

  const displayInstructions = () => {
    if (currentForm === 1) {
      return "What is a common interest or relationship that connects your group?";
    } else if (currentForm === 2) {
      return "What is your name and how long have you been associated the common interest?";
    }
  };

  const iconRow = <div className="form__row form__row-icons">{createPlayerIcons(numPlayers, currentPlayer)}</div>;

  const handleNext = async (formData) => {
    console.log("init", formData);
    if (currentForm === 1) {
      await setInterestAndPlayers(formData);
      await nextForm(currentForm);
      return;
    }

    if (currentForm === 2) {
      console.log(formData);
    }
  };

  return <FormArea onSubmit={handleNext} currentForm={currentForm} iconRow={iconRow} currentPlayer={currentPlayer} />;
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
  updatePlayerCircle,
  setInterestAndPlayers,
})(FormContainer);
