import React from "react";
import { reduxForm } from "redux-form";
import { SidebarButtons } from "../SidebarButtons";
import { FormDisplay } from "../FormDisplay";

const FormArea = ({
  handleSubmit,
  reset,
  pristine,
  submitting,
  setInterestAndPlayers,
  currentForm,
  iconRow,
  currentPlayer,
}) => {
  return (
    <form onSubmit={handleSubmit} className="form body__row body__row-form form-signin mt-2">
      <FormDisplay form={currentForm} currentPlayer={currentPlayer} />
      {currentForm > 2 ? iconRow : null}
      <SidebarButtons />
    </form>
  );
};

export default reduxForm({
  form: "playerForm",
})(FormArea);
