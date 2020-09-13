import React from 'react';
import { StartButton } from './StartButton';
import { connect } from "react-redux";
import { startGame, submitForm } from "../../redux/actions";
import { ResponseForm } from './ResponseForm';

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

const SidebarContent = ({ currentForm, currentPlayer, startGame, submitForm }) => {
  const contentDisplay = currentForm === 0
    ? (<StartButton startGame={startGame} />)
    : (<ResponseForm currentForm={currentForm} formFields={formFields[currentForm]} handleForm={submitForm} />)
  return (
    <>
      {contentDisplay}
    </>
  )
}

const mapStateToProps = state => ({ game: {players, ...rest} }) => {
  return {
    players: players,
    ...rest
  }
}

export default connect(mapStateToProps, { startGame, submitForm })(SidebarContent)