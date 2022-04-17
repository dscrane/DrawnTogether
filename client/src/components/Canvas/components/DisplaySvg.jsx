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
  const createFinalText = () => {
    if (!Object.keys(session.players)) {
      return;
    }
    const finalTexts = [];
    const playerNames = Object.values(session.players).map((el) => el.name);
    const longestName = playerNames.sort((a, b) => a.length - b.length).pop();
    const positionSetterText = longestName.length > session.interest.length ? longestName : session.interest;
    const textPosition = (positionSetterText.length * 8) / 2 + 50;

    for (let player in session.players) {
      finalTexts.push(
        <text key={`final_${session.players[player].id}`} x={textPosition} y={50 + 25 * (parseInt(player) + 1)}>
          {session.players[player].name}
        </text>
      );
    }
    finalTexts.unshift(
      <text className="svg__test-header" x={textPosition} y={50}>
        {session.interest.toUpperCase()}
      </text>
    );
    return (
      <g className="svg__text" textAnchor="middle">
        {finalTexts}
      </g>
    );
  };

  const finalDisplays =
    session.currentForm === 9 ? (
      <>
        {createFinalText()}
        {createFinalBackground()}
      </>
    ) : null;

  return (
    <svg className={`svg__canvas svg__canvas-light ${session.currentForm === 9 ? "svg__canvas-light" : ""}`}>
      <PolarGrid path={display.polarGridPath} inProgress={session.displayGrid} />
      {finalDisplays}
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
