import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ActionButton } from "../ActionButton";
import { DisplaySvg } from "./components";
import { debounce } from "../../utils";
import { generateSession } from "../../redux/reducers/sessionSlice";
import "./canvas.css";

const Canvas = () => {
  const { display, session } = useSelector((state) => state);
  const dispatch = useDispatch();

  const displaySVG = useRef(null);

  /* Sets initial bounds for background grid */
  useEffect(() => {
    dispatch({
      type: "display/updateDimensions",
      payload: {
        height: displaySVG.current.scrollHeight || null,
        width: displaySVG.current.scrollWidth || null,
      },
    });
  }, []);

  /* Debounced handler for catching window resized and changing bounds for background grid */
  useEffect(() => {
    const debounceHandleResize = debounce(function () {
      dispatch({
        type: "display/updateDimensions",
        payload: {
          height: displaySVG.current.scrollHeight,
          width: displaySVG.current.scrollWidth,
        },
      });
    }, 500);
    window.addEventListener("resize", debounceHandleResize);
    return (_) => window.removeEventListener("resize", debounceHandleResize);
  }, [display.height, display.width]);

  return (
    <div className="app__canvas" data-testid="component-Canvas">
      <div id="canvas" className="canvas__container" ref={displaySVG}>
        {session.currentForm !== 0 ? (
          <DisplaySvg />
        ) : (
          <ActionButton
            onClick={async () => await dispatch(generateSession())}
            text={"Begin Game"}
            buttonType={"start"}
          />
        )}
      </div>
    </div>
  );
};

export default Canvas;
