import React from "react";
import { FormOne, FormTwo, FormThree, FormFour, FormFive, FormSix } from "../userForms";
import { FormSection } from "redux-form";

const FormDisplay = ({ form, currentPlayer }) => {
  switch (form) {
    case 2:
      return (
        <FormSection name={`${currentPlayer}`}>
          <FormOne />
        </FormSection>
      );
    case 3:
      return (
        <FormSection name={`${currentPlayer}`}>
          <FormTwo />
        </FormSection>
      );
    case 4:
      return (
        <FormSection name={`${currentPlayer}`}>
          <FormThree />
        </FormSection>
      );
    case 5:
      return (
        <FormSection name={`${currentPlayer}`}>
          <FormFour />
        </FormSection>
      );
    case 6:
      return (
        <FormSection name={`${currentPlayer}`}>
          <FormFive />
        </FormSection>
      );
    case 7:
      return (
        <FormSection name={`${currentPlayer}`}>
          <FormSix />
        </FormSection>
      );

    default:
      console.log("FormArea switch has failed");
  }
};

export default FormDisplay;
