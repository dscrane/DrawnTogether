import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ActionButton } from "../ActionButton";
import { endGame } from "../../redux/reducers/sessionSlice";
import "./finalPanel.css";
import { Modal } from "../../lib/Modal";
import { QRContainer } from "./components/QRContainer";
import { CountdownModal } from "../CountdownModal";

const FinalPanel = ({ _id, screenshot, currentForm }) => {
  const dispatch = useDispatch();

  const [showModal, toggleShowModal] = useState(false);

  // Game timeout countdown
  useEffect(() => {
    const reloadTimer = setTimeout(async () => {
      // await endGame({_id, currentForm})
      toggleShowModal(!showModal);
    }, 1000 * 10 + 6000);
    return () => clearTimeout(reloadTimer);
  }, []);

  return (
    <>
      {showModal ? (
        <Modal key="countdown__modal" show={showModal} onClose={() => toggleShowModal(!showModal)} type={"small"}>
          <span>Still here?</span>
          <CountdownModal
            initCounter={15}
            onClose={() => toggleShowModal(!showModal)}
            onEnd={async () => await dispatch(endGame({ _id, currentForm }))}
          />
        </Modal>
      ) : null}
      <div className="results">
        <div className="results__content">
          <p className="landing__text">The final results for your group...</p>
          <QRContainer _id={_id} screenshot={screenshot} />
        </div>
        <div className="results__restart">
          <p className="restart__text">Play again. Results may vary!</p>
          {/*<p className="restart__text restart__text-smaller"></p>*/}
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
