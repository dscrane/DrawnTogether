/* IMPORTS */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { resizePlayerCircles } from "../../../redux/actions";
import { PolarGrid } from "../../PolarGrid";
import { CircleDisplay } from "../../CircleDisplay";
import { fetchPolarGrid } from "../../../socket.io/emitters";

/* ------ */

const DisplaySvg = ({ socket, display, session, updateGridDisplay, resizePlayerCircles }) => {
  /* Update the display grid based on new view dimensions */
  useEffect(() => {
    const { width, xAxisCenter, yAxisCenter } = display;
    fetchPolarGrid(socket, {
      width,
      xAxisCenter,
      yAxisCenter,
    });
  });
  return (
    <svg className={`svg__canvas ${session.currentForm === 8 ? "svg__canvas-light" : ""}`}>
      {session.displayGrid ? <PolarGrid path={display.polarGridPath} /> : null}
      {session.currentForm > 2 ? (
        <CircleDisplay
          currentForm={session.currentForm}
          playerCircles={session.finalCircles.length ? session.finalCircles : session.circles}
          resizeRatio={display.resizeRatio}
          resizeCircles={session.resizeCircles}
          resizePlayerCircles={resizePlayerCircles}
        />
      ) : null}
    </svg>
  );
};

export default connect(null, { resizePlayerCircles })(DisplaySvg);
