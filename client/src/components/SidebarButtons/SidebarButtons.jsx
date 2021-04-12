import React from "react";
import { connect } from "react-redux";

///${ currentPlayer !== numPlayers && currentForm > 2 ? "sidebar__button--game-disabled" : ""}
const SidebarButtons = ({ nextText, prevText, handlePrevious }) => {
  const nextButton = () => {
    return (
      <button
        type="submit"
        className={`sidebar__button sidebar__button--game sidebar__button--game-next `}
        id="nextButton"
      >
        <span>{nextText}</span>
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
      <button
        className="sidebar__button sidebar__button--game sidebar__button--game-prev"
        id="prevButton"
        type="button"
        onClick={() => handlePrevious()}
      >
        <span>{prevText}</span>
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

export default SidebarButtons;
