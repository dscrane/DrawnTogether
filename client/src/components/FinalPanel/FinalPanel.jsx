import React from "react";
import { useDispatch } from "react-redux";
import { ActionButton } from "../ActionButton";
import { QRContainer } from "./components/QRContainer";
import { endGame } from "../../redux/reducers/sessionSlice";
import "./finalPanel.css";

const FinalPanel = ({ _id, screenshot, currentForm }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="results">
        <div className="results__content">
          <p className="landing__text">The final results for your group...</p>
          <QRContainer _id={_id} screenshot={screenshot} />
        </div>
        <div className="results__restart">
          <p className="restart__text">Play again. Results may vary!</p>
          <ActionButton
            onClick={async () => await dispatch(endGame({ _id, currentForm }))}
            buttonType={"restart"}
            text={"Play\nAgain"}
          />
        </div>
      </div>
    </>
  );
};

export default FinalPanel;
