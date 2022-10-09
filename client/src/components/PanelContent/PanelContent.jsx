/* IMPORTS */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Landing } from "../Landing";
import { DisplayResults } from "../DisplayResults";
import { MoreInformation } from "../MoreInformation";
import { FormContainer } from "../FormContainer";
import { Modal } from "../../lib/Modal";
import { InfoButton } from "../../lib/InfoButton";
import { toggleModal, endGame, updateScreenshot } from "../../redux/reducers/sessionSlice";
// import { endGame, toggleModal, updateScreenshot } from "../../redux/actions";
/* ------ */

const PanelContent = () => {
  const dispatch = useDispatch();
  const { _id, currentForm, screenshot, showModal } = useSelector((state) => state.session);
  const defineView = () => {
    if (currentForm === 0) {
      return <Landing toggleModal={toggleModal} />;
    } else {
      return (
        <>
          <InfoButton toggleModal={() => dispatch({ type: "session/toggleModal" })} style={"panel"} />
          {currentForm > 8 ? <DisplayResults gameId={_id} screenshot={screenshot} /> : <FormContainer />}
        </>
      );
    }
  };
  return (
    <>
      <Modal show={showModal} onClose={toggleModal}>
        <span>Drawn Together</span>
        <MoreInformation />
      </Modal>
      {defineView()}
    </>
  );
};

export default PanelContent;
