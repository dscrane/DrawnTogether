import React, { useState } from "react";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";

export const PlayerForm = ({ formData, setFormData }) => {
  const [name] = useState();
  const [association] = useState();

  const handlePlayer = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };

  const handleAssociation = (event) => {
    setFormData({ ...formData, association: event.target.value });
  };

  return (
    <FormGroup id="form2">
      <FormLabel>Player</FormLabel>
      <FormControl
        onChange={handlePlayer}
        value={name}
        placeholder="Enter name..."
      />

      <FormLabel>Association</FormLabel>
      <FormControl
        onChange={handleAssociation}
        value={association}
        placeholder="Enter time associated..."
      />
      <small id="interestHelp" className="form-text text-muted">
        Please only enter the number of years <br />
        ie 5 years enter 5
      </small>
    </FormGroup>
  );
};
