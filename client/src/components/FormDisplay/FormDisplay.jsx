import React from "react";
import { connect } from "react-redux";
import { setInterest, startGame, endGame } from "../../redux/actions";
import { InterestForm, PlayerForm, FormOne, FormTwo, FormThree, FormFour, FormFive, FormSix } from "../../userForms";

const FormDisplay = ({ form, setInterest, startGame, endGame, responses, setResponses }) => {
  switch (form) {
    case 1:
      return <InterestForm setInterest={setInterest} />;
    case 2:
      return <PlayerForm responses={responses} setResponses={setResponses} />;
    case 3:
      return <FormOne responses={responses} setResponses={setResponses} />;
    case 4:
      return <FormTwo responses={responses} setResponses={setResponses} />;
    case 5:
      return <FormThree responses={responses} setResponses={setResponses} />;
    case 6:
      return <FormFour responses={responses} setResponses={setResponses} />;
    case 7:
      return <FormFive responses={responses} setResponses={setResponses} />;
    case 8:
      return <FormSix responses={responses} setResponses={setResponses} />;
    default:
      console.log("FormArea switch has failed");
  }
};

export default connect(null, { setInterest, startGame, endGame })(FormDisplay);
