import React from "react";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";

export const TwoForm = ({ responses, setResponses }) => {
  const onChange = (event) => {
    event.preventDefault();
    setResponses({ ...responses, [event.target.name]: event.target.value });
  };

  return (
    <FormGroup className="form__group">
      <FormLabel className="form__label">Time</FormLabel>
      <FormControl
        className="form__control"
        name="time"
        onChange={onChange}
        id="formTemporal"
        as="select"
        value={responses.time || "DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="18">Morning</option>
        <option value="45">Evening</option>
      </FormControl>
      <FormLabel className="form__label">Personality</FormLabel>
      <FormControl
        className="form__control"
        name="personality"
        onChange={onChange}
        id="formPersonality"
        as="select"
        value={responses.personality || "DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="60">Introvert</option>
        <option value="31">Extrovert</option>
      </FormControl>
      <FormLabel className="form__label">Hair</FormLabel>
      <FormControl
        className="form__control"
        name="hair"
        onChange={onChange}
        id="formHair"
        as="select"
        value={responses.hair || "DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="10">Curly</option>
        <option value="18">Straight</option>
        <option value="25">Wavy</option>
      </FormControl>
    </FormGroup>
  );
};
