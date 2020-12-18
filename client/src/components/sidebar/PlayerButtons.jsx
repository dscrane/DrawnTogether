import React from "react";
import { Row, Col } from "react-bootstrap";

export const PlayerButtons = ({ currentForm, nextPlayer, prevPlayer, currentPlayer }) => {
  return (
    <div className='player__buttons'>
      <Row className='player__buttons-row'>
        <Col className='player__buttons-col'>
          <button
            className={`player__button ${currentPlayer === 0 ? 'player__button-disabled' : ''}`}
            id='prev-player-button'
            type='button'
            onClick={() => prevPlayer(currentForm)}
          >
            <span className='player__button-icon'>&#8249;</span>
            <span className='player__button_text'> Back</span>
          </button>
        </Col>
        <Col className='player__buttons-col'>
          <button
            className='player__button'
            id='next-player-button'
            type='submit'
            onClick={() => nextPlayer(currentForm)}
          >
            <span className='player__button_text'>Next </span>
            <span className='player__button-icon'>&#8250;</span>
          </button>
        </Col>
      </Row>
    </div>
  )
};
