import React, { useState } from "react";

export const InterestForm = ({ setInterest }) => {
  const [interest] = useState();

  const handleInterest = (event) => {
    setInterest({ interest: event.target.value });
  };

  return (
    <div className="form__group">
      <div className="form__item">
        <input
          className="form__control"
          id="commonInterest"
          type="name"
          onChange={handleInterest}
          value={interest}
          placeholder="Common interest..."
        />
      </div>
    </div>
  );
};
