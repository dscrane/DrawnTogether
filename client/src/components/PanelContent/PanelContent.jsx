/* IMPORTS */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Landing } from "../Landing";
import { FinalPanel } from "../FinalPanel";
import { InformationModal } from "../InformationModal";
import { FormContainer } from "../FormContainer";
import { Modal } from "../../lib/Modal";
import { InfoButton } from "../../lib/InfoButton";
/* ------ */

const PanelContent = () => {
  const dispatch = useDispatch();
  const [showModal, toggleShowModal] = useState(false);
  const { _id, currentForm, screenshot } = useSelector((state) => state.session);
  const defineView = () => {
    if (currentForm === 0) {
      return <Landing toggleModal={() => dispatch({ type: "session/toggleModal" })} />;
    } else {
      return (
        <>
          <InfoButton toggleModal={() => toggleShowModal(!showModal)} styleType={"panel"} />
          {currentForm > 8 ? (
            <FinalPanel _id={_id} screenshot={screenshot} currentForm={currentForm} />
          ) : (
            <FormContainer />
          )}
        </>
      );
    }
  };
  return (
    <>
      {showModal ? (
        <Modal show={showModal} onClose={() => toggleShowModal(!showModal)} type={"large"}>
          <span>Drawn Together</span>
          <InformationModal />
        </Modal>
      ) : null}
      {defineView()}
    </>
  );
};

export default PanelContent;
