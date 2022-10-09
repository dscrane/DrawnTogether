/* IMPORTS */
import React, { useEffect, useState } from "react";
import { PolarGrid } from "../../PolarGrid";
import { FinalCircle } from "../../../lib/circles";
import { createFinalText } from "../../../utils";
import { updatePolarGrid } from "../../../redux/reducers/displaySlice";
import { useDispatch } from "react-redux";
/* ------ */

const DisplaySvg = ({ display, session, resizePlayerCircles }) => {
  /* Update the display grid based on new view dimensions */
  const dispatch = useDispatch();
  const { width, centerPoint, polarGridPath, partialPath } = display;

  useEffect(() => {
    const gridDispatch = async () => {
      await dispatch(updatePolarGrid({ width: display.width, centerPoint: display.centerPoint }));
    };
    gridDispatch();
  }, [centerPoint, width]);

  const finalDisplays =
    session.currentForm === 9 ? (
      <>
        {createFinalText(session)}
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
        path={polarGridPath}
        partialPath={!session.displayGrid ? partialPath : null}
        displayGrid={session.displayGrid}
      />
      {finalDisplays}
      {session.currentForm > 1
        ? session.finalCircles.length
          ? session.finalCircles.map((circle) => circle)
          : session.circles.map((circle) => circle)
        : null}
    </svg>
  );
};

export default DisplaySvg;
