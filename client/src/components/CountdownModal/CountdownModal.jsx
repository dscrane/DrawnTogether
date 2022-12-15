/* IMPORTS */
import React, { useEffect, useState } from "react";
import { ActionButton } from "../ActionButton";
import { Modal } from "../../lib/Modal";
import "./countdownModal.css";
/* ------ */

export const CountdownModal = ({ initCounter, onClose, onEnd }) => {
  const [counter, setCounter] = useState(initCounter);

  useEffect(() => {
    if (counter) {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      onEnd();
    }
  }, [counter]);

  return (
    <Modal key="countdown__modal" show={true} onClose={onClose} type={"small"}>
      <span>Still Enjoying?</span>
      <>
        <div className="countdown__content">
          <div>Site will reload in:</div>
          <div className="countdown__digit">{counter}</div>
        </div>

        <div className="countdown__buttons">
          <ActionButton buttonType={"modal"} onClick={onEnd} text={"Restart"} />
          <ActionButton buttonType={"modal"} onClick={onClose} text={"Continue"} />
        </div>
      </>
    </Modal>
  );
};
