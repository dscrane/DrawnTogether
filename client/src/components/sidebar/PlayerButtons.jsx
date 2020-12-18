import React from "react";
import { Row, Col } from "react-bootstrap";

export const PlayerButtons = ({ currentForm, nextPlayer, prevPlayer, currentPlayer, players }) => {
  console.log('button players', players, currentPlayer)
  return (
    <div className='player__buttons'>
      <Row className='player__buttons-row'>
        <Col className='player__buttons-col'>
          <button
            className={`player__button ${currentPlayer === 0 ? 'player__button-disabled' : ''}`}
            id='prev-player-button'
            type='button'
          >
            <span className='player__button-icon'>&#8249;</span>
            <span className='player__button_text'> {currentForm > 2 ? players[currentPlayer - 1].name : 'Prev'}</span>
          </button>
        </Col>
        <Col className='player__buttons-col'>
          <button
            className={`player__button ${!players[currentPlayer + 1] && currentForm > 2 ? 'player__button-disabled' : ''}`}
            id='next-player-button'
            type='submit'
          >
            <span className='player__button_text'>{currentForm > 2 ? players[currentPlayer + 1].name : 'Next'}  </span>
            <span className='player__button-icon'>&#8250;</span>
          </button>
        </Col>
      </Row>
    </div>
  )
};
