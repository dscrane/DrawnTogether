import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { PolarGrid } from "../PolarGrid";
import { updateGridDisplay, updateView, resizePlayerCircles } from "../../redux/actions";
import { debounce, CircleSVG } from "../../utils";
import { CircleDisplay } from "../CircleDisplay";

const Canvas = ({ display, game, players, updateGridDisplay, updateView, resizePlayerCircles }) => {
  const canvasSvg = useRef(null);

  /* Sets initial bounds for background grid */
  useEffect(() => {
    const asyncUpdate = async () => {
      await updateView({
        height: canvasSvg.current.height.baseVal.value || null,
        width: canvasSvg.current.width.baseVal.value || null,
      });
    };
    asyncUpdate();
  }, []);

  /* Debounced handler for catching window resized and changing bounds for background grid */
  useEffect(() => {
    const debounceHandleResize = debounce(function () {
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

  console.log(game);
  return (
    <svg className="canvas__svg" ref={canvasSvg}>
      {game.displayGrid ? <PolarGrid {...display} /> : null}
      <CircleDisplay game={game} players={players} />
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
