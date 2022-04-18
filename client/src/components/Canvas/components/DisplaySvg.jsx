/* IMPORTS */
import React, { useEffect } from "react";
import { PolarGrid } from "../../PolarGrid";
import { CircleDisplay } from "../../CircleDisplay";
import { fetchPolarGrid } from "../../../socket.io/emitters";
import { createBlob } from "../../../utils";
import { FinalCircle } from "../../../lib/circles";
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
  }, [width]);
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
        <text key={`final_${session.players[player]._id}`} x={textPosition} y={50 + 25 * (parseInt(player) + 1)}>
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
        <FinalCircle
          key={`final_circle`}
          gameId={session._id}
          width={display.width}
          centerPoint={display.centerPoint}
        />
      </>
    ) : null;

  return (
    <svg className={`svg__canvas svg__canvas-light`}>
      <PolarGrid
        path={display.polarGridPath}
        partialPath={!session.displayGrid ? display.partialPath : null}
        displayGrid={session.displayGrid}
      />
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
