/* IMPORTS */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Landing } from "../Landing";
import { FinalPanel } from "../FinalPanel";
import { MoreInformation } from "../MoreInformation";
import { FormContainer } from "../FormContainer";
import { Modal } from "../../lib/Modal";
import { InfoButton } from "../../lib/InfoButton";
/* ------ */

const PanelContent = () => {
  const dispatch = useDispatch();
  const { _id, currentForm, screenshot, showModal } = useSelector((state) => state.session);
  const defineView = () => {
    if (currentForm === 0) {
      return <Landing toggleModal={() => dispatch({ type: "session/toggleModal" })} />;
    } else {
      return (
        <>
          <InfoButton toggleModal={() => dispatch({ type: "session/toggleModal" })} style={"panel"} />
          {currentForm > 8 ? <FinalPanel _id={_id} screenshot={screenshot} /> : <FormContainer />}
        </>
      );
    }
  };
  return (
    <>
      <Modal show={showModal} onClose={() => dispatch({ type: "session/toggleModal" })}>
        <span>Drawn Together</span>
        <MoreInformation />
      </Modal>
      {defineView()}
    </>
  );
};

export default PanelContent;
