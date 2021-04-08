import React from "react";
import { connect } from "react-redux";
import { endGame, nextForm, prevForm, submitForm } from "../../redux/actions";
///${ currentPlayer !== numPlayers && currentForm > 2 ? "sidebar__button--game-disabled" : ""}
const SidebarButtons = ({ nextForm, prevForm, endGame, currentForm, currentPlayer, numPlayers }) => {
  const nextButton = () => {
    return (
      <button
        type="submit"
        className={`sidebar__button sidebar__button--game sidebar__button--game-next `}
        id="nextButton"
      >
        <span>
          Next <br /> Form
        </span>
      </button>
    );
  };

  const prevButton = () => {
    // if (currentForm === 1) {
    //   return (
    //     <button
    //       className="sidebar__button sidebar__button--game sidebar__button--game-prev"
    //       id="prevButton"
    //       // onClick={() => endGame()}
    //     >
    //       <span>
    //         Restart <br /> Game
    //       </span>
    //     </button>
    //   );
    // } else {
    return (
      <button className="sidebar__button sidebar__button--game sidebar__button--game-prev" id="prevButton">
        <span>
          Previous <br /> Form
        </span>
      </button>
    );
    // }
  };
  return (
    <div className="sidebar__buttons" data-testid="component-SidebarButtons">
      <div id="prevCol" className="sidebar__buttons--col">
        {prevButton()}
      </div>
      <div id="nextCol" className="sidebar__buttons--col">
        {nextButton()}
      </div>
    </div>
  );
};

export default connect(null, { nextForm, prevForm, endGame })(SidebarButtons);
