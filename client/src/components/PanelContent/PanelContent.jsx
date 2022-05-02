/* IMPORTS */
import React from "react";
import { HelpOutlineRounded } from "@mui/icons-material";
import { Landing } from "../Landing";
import { DisplayResults } from "../DisplayResults";
import { FormContainer } from "../FormContainer";
/* ------ */

export const PanelContent = ({ _id, currentForm, toggleModal, screenshot, updateScreenshot, endGame }) => {
  const display = () => {
    if (currentForm === 0) {
      return <Landing toggleModal={toggleModal} />;
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
