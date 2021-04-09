import React from "react";
import { InterestForm, PlayerForm, FormOne, FormTwo, FormThree, FormFour, FormFive, FormSix } from "../../userForms";
import { FormSection } from "redux-form";

const FormDisplay = ({ form, currentPlayer }) => {
  switch (form) {
    case 1:
      return <PlayerForm />;
    case 2:
      return <FormOne currentPlayer={currentPlayer} />;
    case 3:
      return <FormTwo responses={null} setResponses={null} />;
    case 4:
      return <FormThree responses={null} setResponses={null} />;
    case 5:
      return <FormFour responses={null} setResponses={null} />;
    case 6:
      return <FormFive responses={null} setResponses={null} />;
    case 7:
      return <FormSix responses={null} setResponses={null} />;

    default:
      console.log("FormArea switch has failed");
  }
};

export default FormDisplay;
