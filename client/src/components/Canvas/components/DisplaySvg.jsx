/* IMPORTS */
import React, { useEffect, useState } from "react";
import { PolarGrid } from "../../PolarGrid";
import { FinalCircle } from "../../../lib/circles";
import { createCircleDesign, createFinalText } from "../../../utils";
import { updatePolarGrid } from "../../../redux/reducers/displaySlice";
import { useDispatch, useSelector } from "react-redux";
import { resizePlayerCircle } from "../../../redux/reducers/sessionSlice";
/* ------ */

const DisplaySvg = () => {
  /* Update the display grid based on new view dimensions */
  const dispatch = useDispatch();
  const { _id, circles, finalCircles, interest, players, displayGrid, currentForm } = useSelector(
    (state) => state.session
  );
  const { width, centerPoint, polarGridPath, partialPath, previousWidth } = useSelector((state) => state.display);

  useEffect(() => {
    const gridDispatch = async () => {
      await dispatch(updatePolarGrid({ width, centerPoint }));
      await dispatch(resizePlayerCircle({ circles, centerPoint, ratio: width / previousWidth }));
    };
    gridDispatch();
  }, [centerPoint, width]);

  const finalDisplays =
    currentForm === 9 ? (
      <>
        {createFinalText(interest, players)}
        <FinalCircle key={`final_circle`} gameId={_id} width={width} centerPoint={centerPoint} />
      </>
    ) : null;

  return (
    <svg className={`svg__canvas svg__canvas-light`}>
      <PolarGrid path={polarGridPath} partialPath={!displayGrid ? partialPath : null} displayGrid={displayGrid} />
      {finalDisplays}
      {currentForm > 1
        ? finalCircles.length
          ? finalCircles.map((circle) => createCircleDesign(circle, centerPoint, currentForm))
          : circles.map((circle) => createCircleDesign(circle, centerPoint, currentForm))
        : null}
    </svg>
  );
};

export default DisplaySvg;
