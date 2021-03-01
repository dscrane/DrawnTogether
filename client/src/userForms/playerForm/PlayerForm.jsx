import React from "react";

export const PlayerForm = ({ responses, setResponses }) => {
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
      <label className="form__label">Player</label>
      <input
        className="form__control"
        name="name"
        onChange={handlePlayer}
        value={responses.name || ""}
        placeholder="Enter name..."
      />

      <label className="form__label">Association</label>
      <input
        className="form__control"
        name="association"
        onChange={handleAssociation}
        value={responses.association || ""}
        placeholder="Enter time associated..."
      />
      <small id="interestHelp" className="form-text text-muted">
        Please only enter the number of years <br />
        ie 5 years enter 5
      </small>
    </div>
  );
};
