/* IMPORTS */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateGridDisplay, resizePlayerCircles } from "../../../redux/actions";
import { PolarGrid } from "../../PolarGrid";
import { CircleDisplay } from "../../CircleDisplay";
import { Blob } from "../../Blob";
/* ------ */

const DisplaySvg = ({ canvasDisplay, session, updateGridDisplay, resizePlayerCircles }) => {
  /* Update the canvasDisplay grid based on new view dimensions */
  useEffect(() => {
    const asyncGridUpdate = async () => {
      console.log("canvas hit");
      await updateGridDisplay(canvasDisplay.view, true);
      await resizePlayerCircles(canvasDisplay.grid);
    };
    asyncGridUpdate();
  }, [canvasDisplay.view]);

  return (
    <svg className="svg__canvas">
      {session.displayGrid ? <PolarGrid {...canvasDisplay} /> : null}
      {/*{!session.displayGrid && session.currentForm > 0 ? (*/}
      {/*  <Blob players={players} canvasDisplay={canvasDisplay} />*/}
      {/*) : null}*/}
      <CircleDisplay session={session} />
    </svg>
  );
};

export default connect(null, { updateGridDisplay, resizePlayerCircles })(DisplaySvg);
