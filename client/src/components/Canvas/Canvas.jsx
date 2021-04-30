import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { updateView } from "../../redux/actions";
import { debounce } from "../../utils";
import { DisplaySvg } from "./components";
import "./canvas.css";

const Canvas = ({ canvasDisplay, session, updateView }) => {
  const displaySVG = useRef(null);

  /* Sets initial bounds for background grid */
  useEffect(() => {
    console.log(displaySVG);
    const asyncUpdate = async () => {
      await updateView({
        height: displaySVG.current.scrollHeight || null,
        width: displaySVG.current.scrollWidth || null,
      });
    };
    asyncUpdate();
  }, []);

  /* Debounced handler for catching window resized and changing bounds for background grid */
  useEffect(() => {
    const debounceHandleResize = debounce(function () {
      updateView({
        height: displaySVG.current.scrollHeight,
        width: displaySVG.current.scrollWidth,
      });
    }, 500);
    window.addEventListener("resize", debounceHandleResize);
    return (_) => window.removeEventListener("resize", debounceHandleResize);
  }, [canvasDisplay.view, updateView]);

  return (
    <div className="svg__container" ref={displaySVG}>
      <DisplaySvg session={session} canvasDisplay={canvasDisplay} />
    </div>
  );
};

const mapStateToProps = ({ gameState }) => {
  const { canvasDisplay, ...rest } = gameState;
  return {
    canvasDisplay,
    session: rest,
  };
};

export default connect(mapStateToProps, {
  updateView,
})(Canvas);
