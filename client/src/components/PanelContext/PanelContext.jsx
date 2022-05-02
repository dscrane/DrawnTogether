/* IMPORTS */
import React from "react";
import { connect } from "react-redux";
import { PanelLayout } from "../PanelLayout";
import { endGame, updateScreenshot, toggleModal } from "../../redux/actions";
/* ------ */

const PanelContext = ({ _id, currentForm, showModal, screenshot, toggleModal, updateScreenshot, endGame }) => {
  return (
    <PanelLayout
      toggleModal={toggleModal}
      showModal={showModal}
      currentForm={currentForm}
      screenshot={screenshot}
      updateScreenshot={updateScreenshot}
      endGame={endGame}
    />
  );
};

const mapStateToProps = ({ gameState }) => {
  const { _id, currentForm, screenshot, showModal } = gameState;
  return { _id, currentForm, screenshot, showModal };
};

export default connect(mapStateToProps, { updateScreenshot, endGame, toggleModal })(PanelContext);
