import React from "react";
import { reduxForm } from "redux-form";
import { SidebarButtons } from "../SidebarButtons";
import { FormSwitch } from "../FormSwitch";
import { PlayerForm } from "../userForms";
import { createPlayerIcons } from "../../utils";

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
    currentPlayer !== numPlayers ? (
      <div className="form__group">
        <FormSwitch form={currentForm} currentPlayer={currentPlayer} numPlayers={numPlayers} />
        <SidebarButtons prevText={"Back"} nextText={"Submit"} handlePrevious={handlePrevious} />
      </div>
    ) : (
      <>
        <div className="body__updateMessage">
          Click "Next Form"
          <br /> to continue
          <br /> or
          <br /> go back
          <br /> to change responses
        </div>
        <SidebarButtons prevText={"Back"} nextText={"Next Form"} handlePrevious={handlePrevious} />
      </>
    );

  const renderFormElements =
    currentForm !== 1 ? (
      renderPlayerFormOrNext
    ) : (
      <>
        <PlayerForm />
        <SidebarButtons prevText={"Restart"} nextText={"Submit"} handlePrevious={handlePrevious} />
      </>
    );
  return (
    <form
      onSubmit={handleSubmit}
      className={`form ${currentForm > 1 ? "form-border" : ""} body__row body__row-form form-signin mt-2`}
    >
      {renderFormElements}
    </form>
  );
};

export default reduxForm({
  form: "playerForm",
})(FormDisplay);
