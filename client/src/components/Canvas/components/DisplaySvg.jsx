/* IMPORTS */
import React, { useEffect } from "react";
import { PolarGrid } from "../../PolarGrid";
import { CircleDisplay } from "../../CircleDisplay";
import { fetchPolarGrid } from "../../../socket.io/emitters";
import { createBlob } from "../../../utils";
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

  const createFinalBackground = () => {
    const { blobPath, blobSize } = createBlob(session._id);
    return (
      <g
        style={{
          transform: `translate(${centerPoint.x - blobSize}px, ${centerPoint.y - blobSize}px)`,
        }}
      >
        <path style={{ fill: "#5A636A" }} d={blobPath} />
      </g>
    );
  };

  return (
    <svg className={`svg__canvas ${session.currentForm === 9 ? "svg__canvas-light" : ""}`}>
      <PolarGrid path={display.polarGridPath} inProgress={session.displayGrid} />
      {session.currentForm === 9 ? createFinalBackground() : null}
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
