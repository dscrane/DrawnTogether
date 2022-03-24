/* IMPORTS */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateGridDisplay, resizePlayerCircles } from "../../../redux/actions";
import { PolarGrid } from "../../PolarGrid";
import { CircleDisplay } from "../../CircleDisplay";

/* ------ */

const DisplaySvg = ({ canvasDisplay, session, updateGridDisplay, resizePlayerCircles }) => {
  /* Update the canvasDisplay grid based on new view dimensions */
  useEffect(() => {
    const asyncGridUpdate = async () => {
      await updateGridDisplay(canvasDisplay.view, true);
    };
    asyncGridUpdate();
  }, [canvasDisplay.view, updateGridDisplay]);

  return (
    <svg className={`svg__canvas ${session.currentForm === 8 ? "svg__canvas-light" : ""}`}>
      {session.displayGrid ? <PolarGrid {...canvasDisplay} /> : null}
      {session.currentForm > 2 ? (
        <CircleDisplay
          currentForm={session.currentForm}
          playerCircles={session.finalCircles.length ? session.finalCircles : session.circles}
          resizeRatio={canvasDisplay.resizeRatio}
          resizeCircles={session.resizeCircles}
          resizePlayerCircles={resizePlayerCircles}
        />
      ) : null}
    </svg>
  );
};

export default connect(null, { updateGridDisplay, resizePlayerCircles })(DisplaySvg);
