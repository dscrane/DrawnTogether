import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { updateGridDisplay, updateView } from "../../redux/actions";
import * as circleUtils from "../../utils/circleUtils";

const Canvas = ({ display, game, updateGridDisplay, updateView }) => {
  const [svg, setSvg] = useState({ d: <svg /> });
  const canvasRef = useRef(null);

  useEffect(() => {
    updateView({
      height: canvasRef.current.offsetHeight || null,
      width: canvasRef.current.offsetWidth || null,
    });
  }, []);

  useEffect(() => {
    let delay;
    window.addEventListener("resize", () => {
      clearTimeout(delay);
      delay = setTimeout(async () => {
        await updateView({
          height: canvasRef.current.offsetHeight || null,
          width: canvasRef.current.offsetWidth || null,
        });
        await updateGridDisplay(display.view);
      }, 250);
    });
  }, [display.view]);

  if (canvasRef.current !== null) {
    console.log(
      "canvas ref",
      canvasRef.current.offsetHeight,
      canvasRef.current.offsetWidth
    );
  }
  return (
    <div style={{ width: "100%", height: "100%" }} ref={canvasRef}>
      <svg height={display.grid.svgDim} width={display.grid.svgDim}>
        {circleUtils.darkPolarRings(display.grid)};
        {circleUtils.bluePolarRings(display.grid)};
        {circleUtils.polarGrid(display.grid)};
      </svg>
    </div>
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
