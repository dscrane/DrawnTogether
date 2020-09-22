import React from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import { nextForm, prevForm } from "../../redux/actions";

const SidebarButtons = ({ nextForm, prevForm, currentForm }) => {
  return (
    <>
      <Col id="prevCol" className={'text-left'} sm={6} xl={6}>
        <button
          className="sidebar__btn sidebar__btn-prev"
          id="prevButton"
          onClick={() => (prevForm(currentForm))}
        >
          <span>
            Previous <br /> Form
          </span>
        </button>
      </Col>
      <Col id="nextCol" className={'text-right'} sm={6} xl={6}>
        <button
          type="submit"
          className="sidebar__btn sidebar__btn-next"
          id="nextButton"
          onClick={() => nextForm(currentForm)}
        >
          <span>
            {currentForm === 8 ? <>Finish <br /> Game</> : <>Next <br /> Form</>}
          </span>
        </button>
      </Col>
    </>
  )
}



export default connect(null, { nextForm, prevForm })(SidebarButtons)