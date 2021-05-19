/* IMPORTS */
import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { updateGridDisplay, /*resizePlayerCircles*/ } from "../../../redux/actions";
import { PolarGrid } from "../../PolarGrid";
import { CircleDisplay } from "../../CircleDisplay";
import { Blob } from "../../Blob";
/* ------ */



const DisplaySvg = ({ canvasDisplay, session, updateGridDisplay, /*resizePlayerCircles*/ }) => {


  /* Update the canvasDisplay grid based on new view dimensions */
  useEffect(() => {
    const asyncGridUpdate = async () => {
        await updateGridDisplay(canvasDisplay.view, true);
    }
    asyncGridUpdate();
  }, [canvasDisplay.view]);

  return (
    <svg className="svg__canvas">
      {session.displayGrid ? <PolarGrid {...canvasDisplay} /> : null}
      {/*{!session.displayGrid && session.currentForm > 0 ? (*/}
      {/*  <Blob players={players} canvasDisplay={canvasDisplay} />*/}
      {/*) : null}*/}
      {session.currentForm > 2
        ? <CircleDisplay currentForm={session.currentForm} playerCircles={session.circles} resizeRatio={canvasDisplay.resizeRatio} resizeCircles={session.resizeCircles} />
        : null
      }
    </svg>
  );
}

export default connect(null, { updateGridDisplay, /*resizePlayerCircles*/ })(DisplaySvg);
