/* IMPORTS */
import React, { useEffect } from "react";
import { PolarGrid } from "../../PolarGrid";
import { CircleDisplay } from "../../CircleDisplay";
import { fetchPolarGrid } from "../../../socket.io/emitters";
/* ------ */

const DisplaySvg = ({ socket, display, session, resizePlayerCircles }) => {
  /* Update the display grid based on new view dimensions */
  const { width, centerPoint } = display;
  useEffect(() => {
    if (!display.polarGridPath) {
      return;
    }
    fetchPolarGrid(socket, {
      width,
      centerPoint,
    });
  }, [width, socket]);
  return (
    <svg className={`svg__canvas ${session.currentForm === 9 ? "svg__canvas-light" : ""}`}>
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

export default DisplaySvg;
