import React from "react";
import { connect } from "react-redux";
import { HelpOutlineRounded } from "@mui/icons-material";
import { Header } from "../Header";
import { Landing } from "../Landing";
import { DisplayResults } from "../DisplayResults";
import { FormContainer } from "../FormContainer";
import { updateScreenshot, endGame } from "../../redux/actions";
import "./panel.css";

const Panel = ({ _id, currentForm, screenshot, showModal, updateScreenshot, endGame }) => {
  const display = () => {
    if (currentForm === 0) {
      return <Landing showModal={showModal} />;
    } else {
      return (
        <>
          <button className="help" onClick={showModal}>
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
  return (
    <div className="app-panel" data-testid="component-Panel">
      <div className="panel__row panel__row-header">
        <Header currentForm={currentForm} />
      </div>
      <div className="panel__row panel__row-content">{display()}</div>
    </div>
  );
};

const mapStateToProps = ({ gameState }) => {
  const { _id, currentForm, screenshot } = gameState;
  return { _id, currentForm, screenshot };
};

export default connect(mapStateToProps, { updateScreenshot, endGame })(Panel);
