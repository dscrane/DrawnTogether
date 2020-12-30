import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
  updateGridDisplay,
  updateView,
  updatePlayerCircle,
} from "../../redux/actions";
import * as displayUtils from "../../utils/displayUtils";
import * as circleUtils from "../../utils/circleUtils";

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

const Canvas = ({
  display,
  game,
  players,
  updateGridDisplay,
  updateView,
  updatePlayerCircle,
}) => {
  const [circles, setCircles] = useState([]);
  const canvasSvg = useRef(null);

  /* Initial rendering of the circle grid */
  useEffect(() => {
    const asyncUpdate = async () => {
      await updateView({
        height: canvasSvg.current.height.baseVal.value || null,
        width: canvasSvg.current.width.baseVal.value || null,
      });
      await updateGridDisplay({
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
    updateGridDisplay(display.view);
  }, [display.view, updateGridDisplay]);

  useEffect(() => {
    const handleCircleUpdate = async () => {
      let circle;
      console.log(players);
      if (game.updateCircles) {
        circle = circleUtils.circleVariables(
          players[game.currentPlayer],
          game.currentPlayer
        );
      }
      await updatePlayerCircle(circle, game.currentPlayer);
      setCircles([...circles, game.currentPlayer.circle]);
    };
    handleCircleUpdate();
  }, [game.updateCircles, game.currentPlayer.circle]);
  console.log("circles", circles);
  return (
    <svg className="canvas__svg" ref={canvasSvg}>
      {displayUtils.darkPolarRings(display.grid)};
      {displayUtils.bluePolarRings(display.grid)};
      {displayUtils.polarGrid(display.grid)};
      {circles.forEach((circle) => circle)}
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
  updatePlayerCircle,
})(Canvas);
