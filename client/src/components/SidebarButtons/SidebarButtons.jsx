import React from "react";
import { connect } from "react-redux";
import { endGame, nextForm, prevForm } from "../../redux/actions";

const SidebarButtons = ({ nextForm, prevForm, endGame, currentForm, currentPlayer }) => {
  const prevButton = () => {
    if (currentForm === 1) {
      return (
        <button
          className="sidebar__button sidebar__button--game sidebar__button--game-prev"
          id="prevButton"
          onClick={() => endGame()}
        >
          <span>
            Restart <br /> Game
          </span>
        </button>
      );
    } else {
      return (
        <button
          className="sidebar__button sidebar__button--game sidebar__button--game-prev"
          id="prevButton"
          onClick={() => prevForm(currentForm)}
        >
          <span>
            Previous <br /> Form
          </span>
        </button>
      );
    }
  };
  return (
    <div className="sidebar__buttons" data-testid="component-SidebarButtons">
      <div id="prevCol" className="sidebar__buttons--col">
        {prevButton()}
      </div>
      <div id="nextCol" className="sidebar__buttons--col">
        <button
          type="submit"
          className="sidebar__button sidebar__button--game sidebar__button--game-next"
          id="nextButton"
          onClick={() => nextForm(currentForm, currentPlayer)}
        >
          <span>
            Next <br /> Form
          </span>
        </button>
      </div>
    </div>
  );
};

export default connect(null, { nextForm, prevForm, endGame })(SidebarButtons);
