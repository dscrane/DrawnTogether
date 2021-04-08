import React from "react";
import { connect } from "react-redux";

import { InterestForm, PlayerForm, FormOne, FormTwo, FormThree, FormFour, FormFive, FormSix } from "../../userForms";

const FormDisplay = ({ form, responses, setResponses, numPlayers }) => {
  switch (form) {
    case 1:
      return <InterestForm responses={responses} setResponses={setResponses} />;
    case 2:
      let displayPlayerForms = [];
      for (let i = 0; i < numPlayers; i++) {
        displayPlayerForms.push(<PlayerForm responses={responses} setResponses={setResponses} />);
      }
      return <>{displayPlayerForms}</>;
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

const mapStateToProps = ({ numPlayers }) => {
  return numPlayers;
};

export default connect(mapStateToProps)(FormDisplay);
