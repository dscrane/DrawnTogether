import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { updateGridDisplay, updateView } from "../../redux/actions";
import * as circleUtils from "../../utils/circleUtils";

const Canvas = ({ display, game, updateGridDisplay, updateView }) => {
  const [svg, setSvg] = useState({ d: <svg /> });
  const canvasSvg = useRef(null);
  console.log("canvasSvg", canvasSvg);

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

  useEffect(() => {
    let delay;
    window.addEventListener("resize", () => {
      clearTimeout(delay);
      delay = setTimeout(async () => {
        await updateView({
          height: canvasSvg.current.height.baseVal.value || null,
          width: canvasSvg.current.width.baseVal.value || null,
        });
        await updateGridDisplay(display.view);
      }, 250);
    });
  }, [display.view]);

  if (canvasSvg.current !== null) {
    console.log(
      "canvas ref",
      canvasSvg.current.height.baseVal.value || null,
      canvasSvg.current.width.baseVal.value || null
    );
  }
  return (
    <svg className="canvas__svg" ref={canvasSvg}>
      {circleUtils.darkPolarRings(display.grid)};
      {circleUtils.bluePolarRings(display.grid)};
      {circleUtils.polarGrid(display.grid)};
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

export default connect(mapStateToProps, { updateGridDisplay, updateView })(
  Canvas
);
