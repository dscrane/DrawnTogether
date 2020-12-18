import React, { useState } from "react";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";


export const InterestForm = ({ setInterest }) => {
  const [interest] = useState();

  const handleInterest = (event) => {
    setInterest({ interest: event.target.value });
  };

  return (
    <div id="interestForm" className="col-11">
      <FormGroup>
        <FormLabel>Interest</FormLabel>
        <FormControl
          id="commonInterest"
          type="name"
          onChange={handleInterest}
          value={interest}
          placeholder="Enter common interest..."
        />
      </FormGroup>
      <small id="interestHelp" className="form-text text-muted">
        What brought your group together?
      </small>
      <small id="interestCharLim" className="form-text text-muted">
        Max 20 characters
      </small>
    </div>
  );
};
