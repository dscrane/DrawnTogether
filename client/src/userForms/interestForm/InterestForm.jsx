import React, { useState } from "react";

export const InterestForm = ({ setInterest }) => {
  const [interest] = useState();

  const handleInterest = (event) => {
    setInterest({ interest: event.target.value });
  };

  return (
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
  );
};
