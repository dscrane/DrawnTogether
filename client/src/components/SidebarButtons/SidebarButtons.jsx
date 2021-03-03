import React from "react";
import { connect } from "react-redux";
import { nextForm, prevForm } from "../../redux/actions";

const SidebarButtons = ({ nextForm, prevForm, currentForm, currentPlayer }) => {
  return (
    <div className="sidebar__buttons" data-testid="component-SidebarButtons">
      <div id="prevCol" className="sidebar__buttons--col">
        <button
          className={`sidebar__button sidebar__button--game sidebar__button--game-next ${
            currentForm < 2 ? "sidebar__button--game-disabled" : ""
          }`}
          id="prevButton"
          onClick={() => prevForm(currentForm)}
        >
          <span>
            Previous <br /> Form
          </span>
        </button>
      </div>
      <div id="nextCol" className="sidebar__buttons--col">
        <button
          type="submit"
          className="sidebar__button sidebar__button--game sidebar__button--game-next"
          id="nextButton"
          onClick={() => nextForm(currentForm, currentPlayer)}
        >
          <span>
            {currentForm === 8 ? (
              <>
                Finish <br /> Game
              </>
            ) : (
              <>
                Next <br /> Form
              </>
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default connect(null, { nextForm, prevForm })(SidebarButtons);
