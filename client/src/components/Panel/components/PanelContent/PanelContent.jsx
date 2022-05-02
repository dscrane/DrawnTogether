/* IMPORTS */
import React from "react";
import { Landing } from "../../../Landing";
import { HelpOutlineRounded } from "@mui/icons-material";
import { DisplayResults } from "../../../DisplayResults";
import { FormContainer } from "../../../FormContainer";
import { connect } from "react-redux";
import { endGame, updateScreenshot, toggleModal } from "../../../../redux/actions";
/* ------ */

const PanelContent = ({ _id, currentForm, screenshot, updateScreenshot, endGame, toggleModal }) => {
  const display = () => {
    if (currentForm === 0) {
      return <Landing showModal={toggleModal} />;
    } else {
      return (
        <>
          <button className="help" onClick={toggleModal}>
            <HelpOutlineRounded className="help__icon" />
          </button>
          {currentForm > 8 ? (
            <DisplayResults
              gameId={_id}
              screenshot={screenshot}
              updateScreenshot={updateScreenshot}
              endGame={endGame}
            />
          ) : (
            <FormContainer />
          )}
        </>
      );
    }
  };
  return <>{display()}</>;
};

const mapStateToProps = ({ gameState }) => {
  const { _id, currentForm, screenshot } = gameState;
  return { _id, currentForm, screenshot };
};

export default connect(mapStateToProps, { updateScreenshot, endGame, toggleModal })(PanelContent);
