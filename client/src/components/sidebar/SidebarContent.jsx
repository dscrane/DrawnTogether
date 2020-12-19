import React from 'react';
import { StartButton } from './StartButton';
import { connect } from "react-redux";
import {setInterest, startGame, submitForm, nextPlayer, prevPlayer } from "../../redux/actions";
import FormContainer from './FormContainer';



const SidebarContent = ({ game, startGame, nextPlayer, prevPlayer }) => {
  const { currentForm, currentPlayer, numPlayers } = game;

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


  const contentDisplay = currentForm === 0
    ? <StartButton
          startGame={startGame}
      />
    : <FormContainer
          currentForm={currentForm}
          currentPlayer={currentPlayer}
          numPlayers={numPlayers}
          nextPlayer={nextPlayer}
          prevPlayer={prevPlayer}
      />


  return (
    <>
      {contentDisplay}
    </>
  )
}

const mapStateToProps = ({ game }) => {
  return {
    game
  }
}

export default connect(mapStateToProps, { startGame, submitForm, setInterest, nextPlayer, prevPlayer })(SidebarContent)
