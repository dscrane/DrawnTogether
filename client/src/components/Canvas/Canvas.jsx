import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { updateView, initializeGame } from "../../redux/actions";
import { debounce } from "../../utils";
import { DisplaySvg } from "./components";
import "./canvas.css";

const Canvas = ({ gridDisplay, session, updateView, initializeGame }) => {
  const displaySVG = useRef(null);
  // useEffect(() => {
  //   initializeGame(gridDisplay)
  // }, []);
  /* Sets initial bounds for background grid */
  useEffect(() => {
    const asyncUpdate = async () => {
      await updateView({
        height: displaySVG.current.scrollHeight || null,
        width: displaySVG.current.scrollWidth || null,
      });
    };
    asyncUpdate();
  }, [updateView]);

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
  }, [gridDisplay.height, gridDisplay.width, updateView]);

  return (
    <div className="svg__container" ref={displaySVG}>
      <DisplaySvg session={session} gridDisplay={gridDisplay} />
    </div>
  );
};

const mapStateToProps = ({ gameState }) => {
  const { gridDisplay, ...rest } = gameState;
  return {
    gridDisplay,
    session: rest,
  };
};

export default connect(mapStateToProps, {
  updateView,
  initializeGame
})(Canvas);
