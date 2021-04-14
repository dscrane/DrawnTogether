import React from "react";
import { reduxForm } from "redux-form";
import { SidebarButtons } from "../SidebarButtons";
import { FormDisplay } from "../FormDisplay";
import { PlayerForm } from "../userForms";
import { createPlayerIcons } from "../../utils";

const FormArea = ({ handleSubmit, handlePrevious, pristine, submitting, currentForm, currentPlayer, numPlayers }) => {
  const renderPlayerFormOrNext =
    currentPlayer !== numPlayers ? (
      <>
        <FormDisplay form={currentForm} currentPlayer={currentPlayer} numPlayers={numPlayers} />
        <div className="form__row form__row-icons">{createPlayerIcons(numPlayers, currentPlayer)}</div>
        <SidebarButtons prevText={"Back"} nextText={"Submit"} handlePrevious={handlePrevious} />
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
    <form onSubmit={handleSubmit} className="form body__row body__row-form form-signin mt-2">
      {renderFormElements}
    </form>
  );
};

export default reduxForm({
  form: "playerForm",
})(FormArea);
