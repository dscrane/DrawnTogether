/* IMPORTS */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateGridDisplay, resizePlayerCircles } from "../../../redux/actions";
import { PolarGrid } from "../../PolarGrid";
import { CircleDisplay } from "../../CircleDisplay";

/* ------ */

const DisplaySvg = ({ gridDisplay, session, updateGridDisplay, resizePlayerCircles }) => {
  /* Update the gridDisplay grid based on new view dimensions */

  useEffect(() => {
    const asyncGridUpdate = async () => {
      await updateGridDisplay({ height:gridDisplay.height, width: gridDisplay.width}, true);
    };
    asyncGridUpdate();
  }, [gridDisplay.height, gridDisplay.width, updateGridDisplay]);

  return (
    <svg className={`svg__canvas ${session.currentForm === 8 ? "svg__canvas-light" : ""}`}>
      {session.displayGrid ? <PolarGrid path={gridDisplay.polarGridPath} /> : null}
      {session.currentForm > 2 ? (
        <CircleDisplay
          currentForm={session.currentForm}
          playerCircles={session.finalCircles.length ? session.finalCircles : session.circles}
          resizeRatio={gridDisplay.resizeRatio}
          resizeCircles={session.resizeCircles}
          resizePlayerCircles={resizePlayerCircles}
        />
      ) : null}
    </svg>
  );
};

export default connect(null, { updateGridDisplay, resizePlayerCircles })(DisplaySvg);
