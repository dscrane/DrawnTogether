import React, { useState } from "react";

export const InterestForm = ({ setInterest }) => {
  const [interest] = useState();

  const handleInterest = (event) => {
    setInterest({ interest: event.target.value });
  };

  return (
    <div id="interestForm" className="col-11">
      <div className="form__group">
        <label className="form__label">Interest</label>
        <input
          className="form__control"
          id="commonInterest"
          type="name"
          onChange={handleInterest}
          value={interest}
          placeholder="Enter common interest..."
        />
      </div>
      <small id="interestHelp" className="form-text text-muted">
        What brought your group together?
      </small>
      <small id="interestCharLim" className="form-text text-muted">
        Max 20 characters
      </small>
    </div>
  );
};
