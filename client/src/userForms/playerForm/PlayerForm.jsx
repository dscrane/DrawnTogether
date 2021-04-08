import React from "react";

export const PlayerForm = ({ responses, setResponses, numPlayers }) => {
  const handlePlayer = (event) => {
    event.preventDefault();
    setResponses({ ...responses, [event.target.name]: event.target.value });
  };

  const handleAssociation = (event) => {
    event.preventDefault();
    setResponses({
      ...responses,
      [event.target.name]: parseInt(event.target.value),
    });
  };

  return (
    <div className="form__group">
      <div className="form__item">
        <label className="form__label">Player Name</label>
        <input
          className="form__control"
          name="name"
          onChange={handlePlayer}
          value={responses.name || ""}
          placeholder="John Doe"
        />
      </div>

      <div className="form__item">
        <label className="form__label">Time Associated to Common Interest</label>
        <input
          className="form__control"
          name="association"
          onChange={handleAssociation}
          value={responses.association || ""}
          placeholder="7"
        />
      </div>
    </div>
  );
};
