import React from "react";

export const InterestForm = ({ responses, setResponses }) => {
  const handleInterest = (event) => {
    event.preventDefault();
    setResponses({ ...responses, [event.target.name]: event.target.value });
  };

  const handleNumPlayers = (event) => {
    event.preventDefault();
    setResponses({ ...responses, [event.target.name]: parseInt(event.target.value) });
  };

  return (
    <div className="form__group">
      <div className="form__item">
        <input
          className="form__control"
          id="commonInterest"
          name="interest"
          onChange={handleInterest}
          value={responses.interest || ""}
          placeholder="Common interest..."
        />
      </div>
      <div className="form__item">
        <input
          className="form__control"
          id="numPlayers"
          name="numPlayers"
          onChange={handleNumPlayers}
          value={responses.numPlayers || ""}
          placeholder="How many players are there..."
        />
      </div>
    </div>
  );
};
