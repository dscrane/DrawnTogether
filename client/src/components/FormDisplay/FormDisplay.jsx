import React from "react";
import { reduxForm } from "redux-form";
import { FormSwitch } from "../FormSwitch";
import { PanelButtonRow } from "../PanelButtonRow";
import "./formDisplay.css";

const FormDisplay = ({
  handleSubmit,
  handlePrevious,
  pristine,
  submitting,
  currentForm,
  currentPlayer,
  numPlayers,
}) => {
  const renderPlayerFormOrNext =
    currentPlayer !== numPlayers || currentForm < 2 ? (
      <>
        <FormSwitch form={currentForm} currentPlayer={currentPlayer} />
        <div className="form__row">
          <PanelButtonRow prevText={"Back"} nextText={"Submit"} handlePrevious={handlePrevious} />
        </div>
      </>
    ) : (
      <>
        <div className="body__updateMessage">
          Click "Next Form"
          <br /> to continue
          <br /> or
          <br /> go back
          <br /> to change responses
        </div>
        <PanelButtonRow prevText={"Back"} nextText={"Next Form"} handlePrevious={handlePrevious} />
      </>
    );

  return (
    <form onSubmit={handleSubmit} className={`form ${currentForm > 1 ? "form-bordered" : ""} form-signin mt-2`}>
      {renderPlayerFormOrNext}
    </form>
  );
};

export default reduxForm({
  form: "playerForm",
})(FormDisplay);
