import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { PolarGrid } from "../PolarGrid";
import { updateGridDisplay, updateView, resizePlayerCircles } from "../../redux/actions";
import * as circleUtils from "../../utils/circleUtilities";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const Canvas = ({ display, game, players, updateGridDisplay, updateView, resizePlayerCircles }) => {
  const canvasSvg = useRef(null);

  /* Initial rendering of the circle grid */
  useEffect(() => {
    const asyncUpdate = async () => {
      await updateView({
        height: canvasSvg.current.height.baseVal.value || null,
        width: canvasSvg.current.width.baseVal.value || null,
      });
    };
    asyncUpdate();
  }, []);

  /* Debounced view dimensions event handler */
  useEffect(() => {
    const debounceHandleResize = debounce(function handleResize() {
      updateView({
        height: canvasSvg.current.height.baseVal.value,
        width: canvasSvg.current.width.baseVal.value,
      });
    }, 500);
    window.addEventListener("resize", debounceHandleResize);
    return (_) => window.removeEventListener("resize", debounceHandleResize);
  }, [display.view, updateView]);

  /* Update the display grid based on new view dimensions */
  useEffect(() => {
    updateGridDisplay(display.view, true);
  }, [display.view]);

  return (
    <svg className="canvas__svg" ref={canvasSvg}>
      <PolarGrid {...display} />
      {game.currentForm >= 3 && game.displayCircles ? circleUtils.updatePlayerCircles(players) : null}
    </svg>
  );
};

const mapStateToProps = (state) => {
  return {
    display: state.display,
    game: state.game,
    players: state.players,
  };
};

export default connect(mapStateToProps, {
  updateGridDisplay,
  updateView,
  resizePlayerCircles,
})(Canvas);
