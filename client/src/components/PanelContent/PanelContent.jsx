/* IMPORTS */
import React from "react";
import { connect } from "react-redux";
import { Landing } from "../Landing";
import { DisplayResults } from "../DisplayResults";
import { MoreInformation } from "../MoreInformation";
import { FormContainer } from "../FormContainer";
import { Modal } from "../../lib/Modal";
import { InfoButton } from "../../lib/InfoButton";
import { endGame, toggleModal, updateScreenshot } from "../../redux/actions";
/* ------ */

const PanelContent = ({ _id, currentForm, showModal, screenshot, updateScreenshot, toggleModal, endGame }) => {
  const defineView = () => {
    if (currentForm === 0) {
      return <Landing toggleModal={toggleModal} />;
    }
    if (currentForm > 8) {
      return (
        <>
          <InfoButton toggleModal={toggleModal} />
          <DisplayResults gameId={_id} screenshot={screenshot} updateScreenshot={updateScreenshot} endGame={endGame} />
        </>
      );
    }
    if (currentForm > 0 && currentForm <= 8) {
      return (
        <>
          <InfoButton toggleModal={toggleModal} />
          <FormContainer />
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

const mapStateToProps = ({ session }) => {
  const { _id, currentForm, screenshot, showModal } = session;
  return { _id, currentForm, screenshot, showModal };
};

export default connect(mapStateToProps, { updateScreenshot, endGame, toggleModal })(PanelContent);
