/* IMPORTS */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PolarGrid } from "../PolarGrid";
import { FinalDisplay } from "./components/FinalDisplay";
import { createCircleDesign } from "../../utils";
import { updatePolarGrid } from "../../redux/reducers/displaySlice";
import { resizePlayerCircle } from "../../redux/reducers/sessionSlice";
/* ------ */

const DisplaySvg = () => {
  /* Update the display grid based on new view dimensions */
  const dispatch = useDispatch();
  const { circles, finalCircles, backgroundCircles, displayGrid, currentForm } = useSelector((state) => state.session);
  const { width, centerPoint, polarGridPath, previousWidth } = useSelector((state) => state.display);

  useEffect(() => {
    const gridDispatch = async () => {
      await dispatch(updatePolarGrid({ width, centerPoint }));
      await dispatch(resizePlayerCircle({ circles, centerPoint, ratio: width / previousWidth }));
    };
    gridDispatch();
  }, [centerPoint, width]);

  const displayCircles =
    currentForm < 7 ? [...backgroundCircles, ...circles] : [...backgroundCircles, ...circles, ...finalCircles];

  return (
    <svg className={`svg__canvas svg__canvas-light`}>
      // TODO animate current game to shrink and move to final location // TODO have older games fade in as final moves
      and shrinks // TODO have initial circles fade in on their first movement path
      <PolarGrid path={polarGridPath} displayGrid={displayGrid} />
      {currentForm === 9 ? <FinalDisplay width={width} centerPoint={centerPoint} /> : null}
      {currentForm > 1
        ? [...displayCircles.map((circle) => createCircleDesign(circle, centerPoint, currentForm))]
        : null}
    </svg>
  );
};

export default DisplaySvg;
