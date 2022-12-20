import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Canvas } from "./components/Canvas";
import { PanelLayout } from "./components/PanelLayout";
import { CountdownModal } from "./lib/CountdownModal";
import { endGame } from "./redux/sessionSlice";
import { InformationModal } from "./lib/InformationModal";

export const App = () => {
  const dispatch = useDispatch();
  const { session } = useSelector((state) => state);
  const { _id, currentForm, currentPlayer, inProgress, showInfoModal, showTimeoutModal } = session;

  // Game timeout countdown
  useEffect(() => {
    if (inProgress || currentForm === 9) {
      console.log("timeout effect ran");
      const timeoutDelay = setTimeout(async () => {
        dispatch({ type: "session/toggleTimeoutModal" });
      }, 5000 * 60);
      return () => clearTimeout(timeoutDelay);
    }
  }, [currentForm, currentPlayer, inProgress]);

  return (
    <div className="app" data-testid="component-App">
      <div className="app__display">
        {showTimeoutModal ? (
          <CountdownModal
            initCounter={15}
            onClose={() => dispatch({ type: "session/toggleTimeoutModal" })}
            onEnd={async () => await dispatch(endGame({ _id, currentForm }))}
          />
        ) : null}
        <InformationModal show={showInfoModal} onClose={() => dispatch({ type: "session/toggleInfoModal" })} />
        <PanelLayout />
        <Canvas />
      </div>
      <div id="copyright" className="cr">
        C 2020-2022 - Drawn Together - Created by Carrie and Daegan Crane
      </div>
    </div>
  );
};

export default App;
