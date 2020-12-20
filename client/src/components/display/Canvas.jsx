import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateGridDisplay, updateView } from "../../redux/actions";
import * as circleUtils from "../../utils/circleUtils";

const Canvas = ({ display, game, updateGridDisplay }) => {
  const [svg, setSvg] = useState({ d: <svg /> });
  useEffect(() => {
    setSvg({
      d: (
        <svg height={display.display.svgDim} width={display.display.svgDim}>
          {circleUtils.polarGrid(display.display)};
          {circleUtils.darkPolarRings(display.display)};
          {circleUtils.bluePolarRings(display.display)};
        </svg>
      ),
    });
  }, []);

  useEffect(() => {
    let delay;
    window.addEventListener("resize", () => {
      clearTimeout(delay);
      delay = setTimeout(() => {
        updateView({
          view: { height: window.innerHeight, width: window.innerWidth },
        });
        setSvg({
          d: (
            <svg height={display.display.svgDim} width={display.display.svgDim}>
              {circleUtils.polarGrid(display.display)};
              {circleUtils.darkPolarRings(display.display)};
              {circleUtils.bluePolarRings(display.display)};
            </svg>
          ),
        });
      }, 250);
    });
  }, [display.view]);

  return <div style={{ height: "100vh" }}>{svg.d}</div>;
};

const mapStateToProps = (state) => {
  return {
    display: state.display,
    game: state.game,
    players: state.players,
  };
};

export default connect(mapStateToProps, { updateGridDisplay })(Canvas);
