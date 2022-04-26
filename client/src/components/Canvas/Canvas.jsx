import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { ActionButton } from "../ActionButton";
import { DisplaySvg } from "./components";
import { updateDisplayDimensions, startGame, updatePolarGrid, generateSession } from "../../redux/actions";
import { debounce } from "../../utils";
import "./canvas.css";

const Canvas = ({ socket, display, session, updateDisplayDimensions, generateSession, updatePolarGrid }) => {
  const displaySVG = useRef(null);

  /* Sets initial bounds for background grid */
  useEffect(() => {
    const asyncUpdate = async () => {
      await updateDisplayDimensions({
        height: displaySVG.current.scrollHeight || null,
        width: displaySVG.current.scrollWidth || null,
      });
    };
    asyncUpdate();
  }, [updateDisplayDimensions]);

  /* Debounced handler for catching window resized and changing bounds for background grid */
  useEffect(() => {
    const debounceHandleResize = debounce(function () {
      updateDisplayDimensions({
        height: displaySVG.current.scrollHeight,
        width: displaySVG.current.scrollWidth,
      });
    }, 500);
    window.addEventListener("resize", debounceHandleResize);
    return (_) => window.removeEventListener("resize", debounceHandleResize);
  }, [display.height, display.width, updateDisplayDimensions]);

  const buttonOnClick = async () => {
    await generateSession();
  };

  return (
    <div id="canvas" className="svg__container" ref={displaySVG}>
      {session.currentForm !== 0 ? (
        <DisplaySvg socket={socket} session={session} display={display} updatePolarGrid={updatePolarGrid} />
      ) : (
        <ActionButton onClick={buttonOnClick} text={"Begin Game"} buttonType={"start"} />
      )}
    </div>
  );
};

const mapStateToProps = ({ gameState }) => {
  const { display, ...rest } = gameState;
  return {
    display,
    session: rest,
  };
};

export default connect(mapStateToProps, {
  updateDisplayDimensions,
  updatePolarGrid,
  generateSession,
  startGame,
})(Canvas);
