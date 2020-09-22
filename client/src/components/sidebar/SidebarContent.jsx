import React from 'react';
import { StartButton } from './StartButton';
import { connect } from "react-redux";
import {setInterest, startGame, submitForm } from "../../redux/actions";
import { ResponseForm } from './ResponseForm';



const SidebarContent = ({ currentForm, currentPlayer, startGame, submitForm, setInterest, numPlayers }) => {
  console.log('currentForm', currentForm)
  const formFields = [
    [],
    ['interest'],
    ['name', 'association'],
    ['height', 'gender', 'vocation', 'age', 'diet'],
    ['time', 'hair', 'personality'],
    ['money', 'food'],
    ['nature', 'media'],
    ['religion', 'culture'],
    ['hue']
  ]

  const handleForm = ({ type, formValues }) => {
    console.log('sidebarContent',type, formValues)
    type==='SET_INTEREST' ? setInterest(formValues) : submitForm(formValues, currentPlayer, currentForm);
  }

  const contentDisplay = currentForm === 0
    ? <StartButton
          startGame={startGame}
      />
    : <ResponseForm
          currentForm={currentForm}
          formFields={formFields[currentForm]}
          handleForm={handleForm}
          currentPlayer={currentPlayer}
          numPlayers={numPlayers}
      />


  return (
    <>
      {contentDisplay}
    </>
  )
}

const mapStateToProps = ({ game: {players, ...rest} }) => {
  return {
    players: players,
    ...rest
  }
}

export default connect(mapStateToProps, { startGame, submitForm, setInterest })(SidebarContent)