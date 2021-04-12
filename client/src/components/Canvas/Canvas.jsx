import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { PolarGrid } from "../PolarGrid";
import { updateGridDisplay, updateView, resizePlayerCircles } from "../../redux/actions";
import { debounce, CircleSVG } from "../../utils";
import { CircleDisplay } from "../CircleDisplay";

const Canvas = ({ canvasDisplay, players, session, updateGridDisplay, updateView, resizePlayerCircles }) => {
  const canvasSvg = useRef(null);

  /* Sets initial bounds for background grid */
  useEffect(() => {
    const asyncUpdate = async () => {
      await updateView({
        height: canvasSvg.current.height.baseVal.value || null,
        width: canvasSvg.current.width.baseVal.value || null,
      });
    };
    asyncUpdate();
  }, []);

  /* Debounced handler for catching window resized and changing bounds for background grid */
  useEffect(() => {
    const debounceHandleResize = debounce(function () {
      updateView({
        height: canvasSvg.current.height.baseVal.value,
        width: canvasSvg.current.width.baseVal.value,
      });
    }, 500);
    window.addEventListener("resize", debounceHandleResize);
    return (_) => window.removeEventListener("resize", debounceHandleResize);
  }, [canvasDisplay.view, updateView]);

  /* Update the canvasDisplay grid based on new view dimensions */
  useEffect(() => {
    updateGridDisplay(canvasDisplay.view, true);
  }, [canvasDisplay.view]);

  return (
    <svg className="canvas__svg" ref={canvasSvg}>
      {session.displayGrid ? <PolarGrid {...canvasDisplay} /> : null}
      <CircleDisplay session={session} players={players} />
    </svg>
  );
};

const mapStateToProps = ({ gameState }) => {
  const { canvasDisplay, players, ...rest } = gameState;
  return {
    canvasDisplay,
    players,
    session: rest,
  };
};

export default connect(mapStateToProps, {
  updateGridDisplay,
  updateView,
  resizePlayerCircles,
})(Canvas);
