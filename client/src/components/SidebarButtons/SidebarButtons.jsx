import React from "react";

const SidebarButtons = ({ nextText, prevText, handlePrevious }) => {
  return (
    <div className="sidebar__buttons" data-testid="component-SidebarButtons">
      <div id="prevCol" className="sidebar__buttons--col">
        <button
          className="sidebar__button sidebar__button--game sidebar__button--game-prev"
          id="prevButton"
          type="button"
          onClick={() => handlePrevious()}
        >
          <span>{prevText}</span>
        </button>
      </div>
      <div id="nextCol" className="sidebar__buttons--col">
        <button
          type="submit"
          className={`sidebar__button sidebar__button--game sidebar__button--game-next `}
          id="nextButton"
        >
          <span>{nextText}</span>
        </button>
      </div>
    </div>
  );
};

export default SidebarButtons;
